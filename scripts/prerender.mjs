/**
 * Static prerendering (SSG) for the SPA.
 *
 * After `vite build`, this script:
 *   1. Boots the API server (so article pages render real content).
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
import { getStaticRoutes, articleRoute } from './routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SERVER_DIR = path.join(ROOT, 'server');

const STATIC_PORT = 3100;
const API_PORT = 3101;

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

const proxyApi = (clientReq, clientRes) => {
  const opts = {
    hostname: '127.0.0.1',
    port: API_PORT,
    path: clientReq.url,
    method: clientReq.method,
    headers: clientReq.headers,
  };
  const proxyReq = httpRequest(opts, (proxyRes) => {
    clientRes.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(clientRes);
  });
  proxyReq.on('error', () => {
    clientRes.writeHead(502).end('api proxy error');
  });
  clientReq.pipe(proxyReq);
};

const startStaticServer = () =>
  new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const url = decodeURIComponent(req.url.split('?')[0]);

      if (url.startsWith('/api/')) return proxyApi(req, res);

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

  // 1. API server (best-effort: article pages need it; the rest do not).
  const api = spawn('node', ['index.js'], {
    cwd: SERVER_DIR,
    env: { ...process.env, PORT: String(API_PORT), NODE_ENV: 'production' },
    stdio: 'ignore',
  });
  api.on('error', () => warn('could not spawn API server'));
  const apiUp = await waitFor(() => ping(`http://127.0.0.1:${API_PORT}/api/health`), { tries: 30 });
  log(apiUp ? 'API server ready' : 'API server unavailable — article pages may be skipped');

  // 2. Static server for dist.
  const staticServer = await startStaticServer();
  log(`serving dist on :${STATIC_PORT}`);

  // 3. Resolve routes (static + dynamic article ids from the API).
  const routes = new Set(getStaticRoutes());
  if (apiUp) {
    try {
      const res = await fetch(`http://127.0.0.1:${API_PORT}/api/articles/public`);
      const articles = await res.json();
      for (const a of articles) routes.add(articleRoute(a.id));
      log(`found ${articles.length} published article(s)`);
    } catch {
      warn('could not fetch article list');
    }
  }

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
    api.kill();
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
      // Wait until React has rendered and PageSEO has set the document title.
      await page.waitForFunction(
        () => document.title && document.title.length > 0 && document.getElementById('root')?.childElementCount > 0,
        { timeout: 15000 },
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
  api.kill();

  log(`done: ${ok} prerendered, ${failed} failed.`);
};

main().catch((err) => {
  warn(`unexpected error: ${err.message} — leaving SPA as-is.`);
  process.exit(0);
});
