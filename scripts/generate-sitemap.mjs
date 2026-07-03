import { writeFileSync } from 'node:fs';
import { getStaticRoutes, articleRoute, enTwin } from './routes.mjs';
import { PRODUCTION_SITE_ORIGIN } from '../src/seo/siteOrigin.js';
import { SEED_ARTICLES } from '../server/seedArticles.js';

const siteUrl = (process.env.VITE_SITE_URL || PRODUCTION_SITE_ORIGIN).replace(/\/$/, '');
const today = new Date().toISOString().slice(0, 10);

const isoDate = (value) => {
  const d = value ? new Date(value) : null;
  return d && !Number.isNaN(d.getTime()) ? d.toISOString().slice(0, 10) : today;
};

/**
 * Published articles for the sitemap.
 * Primary source: the live production API (so articles created via the admin
 * panel are picked up on the next deploy). Fallback: the in-repo seed articles.
 */
const getArticles = async () => {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(`${siteUrl}/api/articles/public`, { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) throw new Error(`status ${res.status}`);
    const articles = await res.json();
    if (Array.isArray(articles) && articles.length) {
      console.log(`Sitemap: ${articles.length} article(s) from live API`);
      return articles;
    }
    throw new Error('empty list');
  } catch (err) {
    console.log(`Sitemap: live API unavailable (${err.message}); using seed articles`);
    return SEED_ARTICLES.filter((a) => a.status === 'published' && a.visible !== false);
  }
};

const articleLastmod = (a) => isoDate(a.updatedAt || a.en?.date || a.zh?.date);

const urlEntry = ({ path, lastmod, priority, changefreq }) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

const articles = await getArticles();

// Every logical (Chinese) URL plus its /en twin.
const expand = (opts) => [
  urlEntry(opts),
  urlEntry({ ...opts, path: enTwin(opts.path) }),
];

const entries = [
  ...getStaticRoutes().flatMap((path) =>
    expand({
      path,
      lastmod: today,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? '1.0' : '0.7',
    }),
  ),
  ...articles.flatMap((a) =>
    expand({
      path: articleRoute(a.id),
      lastmod: articleLastmod(a),
      changefreq: 'monthly',
      priority: '0.8',
    }),
  ),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

writeFileSync('public/sitemap.xml', sitemap, 'utf8');

const robots = `User-agent: *
Allow: /
Disallow: /admin/

# Chinese search engines (explicit, in addition to the * group above)
User-agent: Baiduspider
Allow: /
Disallow: /admin/

User-agent: Sogou web spider
Allow: /
Disallow: /admin/

User-agent: 360Spider
Allow: /
Disallow: /admin/

Sitemap: ${siteUrl}/sitemap.xml
`;

writeFileSync('public/robots.txt', robots, 'utf8');
console.log(`Sitemap: ${entries.length} URLs → public/sitemap.xml`);
