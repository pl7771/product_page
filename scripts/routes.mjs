import { projectCategoriesStructure } from '../src/data/projectsStructure.js';
import { serviceAreaIds } from '../src/data/serviceAreas.js';

/**
 * Routes whose content is bundled (i18n / static data) and therefore render
 * without the API. Shared by the sitemap generator and the prerenderer.
 */
export const getStaticRoutes = () => [
  '/',
  '/industry-information',
  '/privacy-policy',
  '/terms-of-service',
  '/service-areas',
  ...serviceAreaIds.map((id) => `/service-areas/${id}`),
  ...projectCategoriesStructure.map((cat) => `/projects/${cat.id}`),
  ...projectCategoriesStructure.flatMap((cat) =>
    cat.projects.map((project) => `/projects/${cat.id}/${project.id}`),
  ),
];

/** Article detail routes — ids come from the API (DB), so they are resolved at run time. */
export const articleRoute = (id) => `/industry-information/${id}`;
