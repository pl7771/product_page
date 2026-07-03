import { projectCategoriesStructure } from '../src/data/projectsStructure.js';
import { serviceAreaIds } from '../src/data/serviceAreas.js';
import { industrySolutionIds } from '../src/data/industrySolutions.js';

/**
 * Routes whose content is bundled (i18n / static data) and therefore render
 * without the API. Shared by the sitemap generator and the prerenderer.
 * Paths are logical (Chinese) URLs; use enTwin()/withEnglishTwins() for the
 * English versions that live under the /en prefix.
 */
export const getStaticRoutes = () => [
  '/',
  '/industry-information',
  '/privacy-policy',
  '/terms-of-service',
  '/service-areas',
  ...serviceAreaIds.map((id) => `/service-areas/${id}`),
  '/solutions',
  ...industrySolutionIds.map((id) => `/solutions/${id}`),
  ...projectCategoriesStructure.map((cat) => `/projects/${cat.id}`),
  ...projectCategoriesStructure.flatMap((cat) =>
    cat.projects.map((project) => `/projects/${cat.id}/${project.id}`),
  ),
];

/** Article detail routes — ids come from the API (DB), so they are resolved at run time. */
export const articleRoute = (id) => `/industry-information/${id}`;

/** The /en twin of a logical route. */
export const enTwin = (route) => (route === '/' ? '/en' : `/en${route}`);

/** Expand a route list with the English twins (zh first, then en). */
export const withEnglishTwins = (routes) => routes.flatMap((route) => [route, enTwin(route)]);
