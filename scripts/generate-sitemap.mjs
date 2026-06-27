import { writeFileSync } from 'node:fs';
import { projectCategoriesStructure } from '../src/data/projectsStructure.js';
import { PRODUCTION_SITE_ORIGIN } from '../src/seo/siteOrigin.js';

const siteUrl = (process.env.VITE_SITE_URL || PRODUCTION_SITE_ORIGIN).replace(/\/$/, '');
const today = new Date().toISOString().slice(0, 10);

const staticArticleIds = [1, 2, 3];

const paths = [
  '/',
  '/industry-information',
  '/privacy-policy',
  '/terms-of-service',
  ...staticArticleIds.map((id) => `/industry-information/${id}`),
  ...projectCategoriesStructure.map((cat) => `/projects/${cat.id}`),
  ...projectCategoriesStructure.flatMap((cat) =>
    cat.projects.map((project) => `/projects/${cat.id}/${project.id}`),
  ),
];

const urls = paths
  .map(
    (path) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '/' ? '1.0' : path.startsWith('/industry-information/') ? '0.8' : '0.7'}</priority>
  </url>`,
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync('public/sitemap.xml', sitemap, 'utf8');

const robots = `User-agent: *
Allow: /
Disallow: /admin/

Sitemap: ${siteUrl}/sitemap.xml
`;

writeFileSync('public/robots.txt', robots, 'utf8');
console.log(`Sitemap: ${paths.length} URLs → public/sitemap.xml`);
