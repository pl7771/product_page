/**
 * Writes dist/404.html — a noindex copy of the built SPA shell that nginx serves
 * as the fallback for unknown URLs, instead of the home page. Without it every
 * bogus path (and every not-yet-prerendered route) resolved to a 200 copy of
 * "/" — a soft 404 and duplicate content.
 *
 * Runs after `vite build` and BEFORE prerender, while dist/index.html is still
 * the empty shell (prerender overwrites it with the rendered home page). The
 * shell still boots the SPA, so a valid route published since the last build is
 * rendered client-side; the static bytes a crawler sees carry noindex.
 *
 * Never fatal: on any problem it copies index.html as-is so the nginx fallback
 * still boots the SPA (just without the noindex hint).
 */
import { readFileSync, writeFileSync, copyFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'dist', 'index.html');
const OUT = path.join(ROOT, 'dist', '404.html');

const log = (msg) => console.log(`[make-404] ${msg}`);

if (!existsSync(SRC)) {
  console.warn('[make-404] dist/index.html missing — run `vite build` first. Skipping.');
  process.exit(0);
}

try {
  let html = readFileSync(SRC, 'utf8');
  const noindex = '<meta name="robots" content="noindex, nofollow" />';
  if (/<meta\s+name="robots"[^>]*>/i.test(html)) {
    html = html.replace(/<meta\s+name="robots"[^>]*>/i, noindex);
  } else {
    html = html.replace(/<\/head>/i, `  ${noindex}\n  </head>`);
  }
  writeFileSync(OUT, html, 'utf8');
  log('wrote dist/404.html (noindex)');
} catch (err) {
  console.warn(`[make-404] ${err.message} — copying index.html as-is.`);
  try {
    copyFileSync(SRC, OUT);
  } catch {
    console.warn('[make-404] could not write dist/404.html — nginx will serve its default 404.');
  }
}
