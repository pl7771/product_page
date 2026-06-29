import { absoluteUrl, SITE_NAME } from './siteConfig';

/** Wrap one or more schema.org nodes into a single @graph document. */
export const schemaGraph = (nodes) => ({
  '@context': 'https://schema.org',
  '@graph': nodes.filter(Boolean),
});

const homeCrumb = (lang) => ({
  name: lang === 'zh' ? '首页' : 'Home',
  path: '/',
});

/**
 * BreadcrumbList from an ordered list of { name, path } items.
 * The home crumb is prepended automatically.
 */
export const buildBreadcrumb = (lang, items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [homeCrumb(lang), ...items].map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

/** A project deployment described as a Service offered by the organization. */
export const buildProjectSchema = (lang, { title, description, image, path }) => ({
  '@type': 'Service',
  name: title,
  description,
  ...(image ? { image: absoluteUrl(image) } : {}),
  url: absoluteUrl(path),
  areaServed: { '@type': 'Country', name: 'China' },
  provider: { '@id': `${absoluteUrl('/')}#organization` },
});

/** FAQPage node from a list of { q, a } items. */
export const buildFaqSchema = (items = []) =>
  items.length
    ? {
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : null;

/** A regional service offering with areaServed = the region. */
export const buildServiceAreaSchema = (lang, { name, description, path, areaName }) => ({
  '@type': 'Service',
  name,
  description,
  url: absoluteUrl(path),
  serviceType: lang === 'zh' ? '雾森系统与喷雾降尘工程' : 'Mist system & spray dust suppression',
  areaServed: { '@type': 'AdministrativeArea', name: areaName },
  provider: { '@id': `${absoluteUrl('/')}#organization` },
});

/** Product nodes for the equipment catalogue (home #products section). */
export const buildProductSchemas = (lang, products = []) =>
  products.map((p) => ({
    '@type': 'Product',
    name: p.name,
    description: p.description,
    category: p.category,
    ...(p.gallery?.[0] ? { image: absoluteUrl(p.gallery[0]) } : {}),
    brand: {
      '@type': 'Brand',
      name: SITE_NAME[lang] || SITE_NAME.en,
    },
    manufacturer: { '@id': `${absoluteUrl('/')}#organization` },
  }));
