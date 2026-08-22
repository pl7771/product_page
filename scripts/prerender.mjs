/**
 * Static prerendering (SSG) for the SPA.
 *
 * After `vite build`, this script:
 *   1. Picks an API to render article pages against: the live production API
 *      first (same source the sitemap uses, so both agree on which articles
 *      exist), falling back to a locally spawned server with the seed data.
 *   2. Serves dist/ over HTTP with an /api proxy and SPA fallback.
 *   3. Drives a headless browser over every route and saves the fully
 *      rendered HTML (with meta tags + JSON-LD injected by PageSEO) to
 *      dist/<route>/index.html.
 *
 * Crawlers — Baiduspider in particular — get complete static HTML; the client
 * JS still boots and takes over on load.
 *
 * Designed to never break the production build: any failure prints a warning
 * and exits 0, leaving the plain SPA in place.
 */
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { request as httpRequest } from 'node:http';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getStaticRoutes, articleRoute, withEnglishTwins } from './routes.mjs';
import { PRODUCTION_SITE_ORIGIN } from '../src/seo/siteOrigin.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SERVER_DIR = path.join(ROOT, 'server');

const STATIC_PORT = 3100;
const API_PORT = 3101;
const LOCAL_API = `http://127.0.0.1:${API_PORT}`;
/** Live site, same origin generate-sitemap.mjs reads articles from. */
const LIVE_API = (process.env.VITE_SITE_URL || PRODUCTION_SITE_ORIGIN).replace(/\/$/, '');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
};

const log = (msg) => console.log(`[prerender] ${msg}`);
const warn = (msg) => console.warn(`[prerender] ${msg}`);

const waitFor = async (fn, { tries = 60, delay = 500 } = {}) => {
  for (let i = 0; i < tries; i += 1) {
    try {
      if (await fn()) return true;
    } catch {
      /* keep polling */
    }
    await new Promise((r) => setTimeout(r, delay));
  }
  return false;
};

const ping = (url) =>
  new Promise((resolve) => {
    const req = httpRequest(url, { method: 'GET' }, (res) => {
      res.resume();
      resolve(res.statusCode >= 200 && res.statusCode < 500);
    });
    req.on('error', () => resolve(false));
    req.end();
  });

/** Published articles from an API base, or null when it cannot be reached. */
const fetchArticles = async (apiBase) => {
  try {
    const res = await fetch(`${apiBase}/api/articles/public`, {
      headers: { accept: 'application/json' },
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) return null;
    const articles = await res.json();
    return Array.isArray(articles) ? articles : null;
  } catch {
    return null;
  }
};

/**
 * Proxy /api/* to whichever API we settled on. Responses are cached in memory:
 * every prerendered page asks for the same article payload, and with images
 * inlined as data URIs that payload is measured in megabytes.
 */
const apiCache = new Map();

const proxyApi = async (apiBase, clientReq, clientRes) => {
  const cached = apiCache.get(clientReq.url);
  if (cached) {
    clientRes.writeHead(cached.status, { 'Content-Type': cached.type });
    return clientRes.end(cached.body);
  }
  try {
    const upstream = await fetch(`${apiBase}${clientReq.url}`, {
      headers: { accept: 'application/json' },
    });
    const body = Buffer.from(await upstream.arrayBuffer());
    const type = upstream.headers.get('content-type') || 'application/json';
    if (upstream.ok) apiCache.set(clientReq.url, { status: upstream.status, type, body });
    clientRes.writeHead(upstream.status, { 'Content-Type': type });
    return clientRes.end(body);
  } catch {
    clientRes.writeHead(502).end('api proxy error');
    return undefined;
  }
};

const startStaticServer = (apiBase) =>
  new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const url = decodeURIComponent(req.url.split('?')[0]);

      if (url.startsWith('/api/')) return proxyApi(apiBase, req, res);

      const filePath = path.join(DIST, url);
      const ext = path.extname(filePath);

      // Static asset with an extension → serve from disk.
      if (ext && existsSync(filePath)) {
        try {
          const data = await readFile(filePath);
          res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
          return res.end(data);
        } catch {
          res.writeHead(404).end('not found');
          return undefined;
        }
      }

      // Anything else (SPA route) → original index.html template.
      try {
        const html = await readFile(path.join(DIST, 'index.html'));
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(html);
      } catch {
        res.writeHead(404).end('not found');
        return undefined;
      }
    });
    server.listen(STATIC_PORT, () => resolve(server));
  });

const main = async () => {
  if (!existsSync(path.join(DIST, 'index.html'))) {
    warn('dist/index.html not found — run `vite build` first. Skipping.');
    process.exit(0);
  }

  let puppeteer;
  try {
    ({ default: puppeteer } = await import('puppeteer'));
  } catch {
    warn('puppeteer not installed — skipping prerender (SPA left as-is).');
    process.exit(0);
  }

  // 1. Pick the API to render against. The live site wins: articles written in
  //    the admin panel exist only in the production database, and the sitemap
  //    already lists them from there. Rendering a different set is what shipped
  //    those article URLs as copies of the home page.
  let apiBase = null;
  let articles = [];
  let api = null;

  const liveArticles = await fetchArticles(LIVE_API);
  if (liveArticles) {
    apiBase = LIVE_API;
    articles = liveArticles;
    log(`live API ${LIVE_API}: ${articles.length} published article(s)`);
  } else {
    warn(`live API unreachable at ${LIVE_API} — falling back to the local server`);
    api = spawn('node', ['index.js'], {
      cwd: SERVER_DIR,
      env: { ...process.env, PORT: String(API_PORT), NODE_ENV: 'production' },
      stdio: 'ignore',
    });
    api.on('error', () => warn('could not spawn API server'));
    if (await waitFor(() => ping(`${LOCAL_API}/api/health`), { tries: 30 })) {
      apiBase = LOCAL_API;
      articles = (await fetchArticles(LOCAL_API)) || [];
      log(`local API ready: ${articles.length} published article(s)`);
    } else {
      warn('no API available — article pages will be skipped');
    }
  }

  // 2. Static server for dist.
  const staticServer = await startStaticServer(apiBase || LOCAL_API);
  log(`serving dist on :${STATIC_PORT}`);

  // 3. Resolve routes (static + article ids from the API above), then add the
  //    /en twins so both languages get static HTML.
  const logicalRoutes = new Set(getStaticRoutes());
  for (const a of articles) logicalRoutes.add(articleRoute(a.id));
  const routes = withEnglishTwins([...logicalRoutes]);

  // 4. Crawl + snapshot.
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
  } catch (err) {
    warn(`browser launch failed (${err.message}) — skipping prerender.`);
    staticServer.close();
    api?.kill();
    process.exit(0);
  }

  let ok = 0;
  let failed = 0;
  for (const route of routes) {
    const page = await browser.newPage();
    try {
      await page.goto(`http://127.0.0.1:${STATIC_PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });
      // Wait until React has rendered, the URL language has been applied
      // (LangGate sets documentElement.lang), and PageSEO has set the title.
      const expectedLang = route === '/en' || route.startsWith('/en/') ? 'en' : 'zh-CN';
      await page.waitForFunction(
        (expected) =>
          document.documentElement.lang === expected &&
          document.title &&
          document.title.length > 0 &&
          document.getElementById('root')?.childElementCount > 0,
        { timeout: 15000 },
        expectedLang,
      );

      const html = await page.evaluate(() => `<!doctype html>\n${document.documentElement.outerHTML}`);

      const outPath =
        route === '/'
          ? path.join(DIST, 'index.html')
          : path.join(DIST, route, 'index.html');
      await mkdir(path.dirname(outPath), { recursive: true });
      await writeFile(outPath, html, 'utf8');
      ok += 1;
      log(`✓ ${route}`);
    } catch (err) {
      failed += 1;
      warn(`✗ ${route} — ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  staticServer.close();
  api?.kill();

  log(`done: ${ok} prerendered, ${failed} failed.`);
};

main().catch((err) => {
  warn(`unexpected error: ${err.message} — leaving SPA as-is.`);
  process.exit(0);
});
