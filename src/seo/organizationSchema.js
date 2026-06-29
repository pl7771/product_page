import { absoluteUrl, SITE_NAME } from './siteConfig';
import { buildProductSchemas, buildFaqSchema } from './structuredData';

const ORG_ID = () => `${absoluteUrl('/')}#organization`;
const WEBSITE_ID = () => `${absoluteUrl('/')}#website`;

const orgDescription = (lang) =>
  lang === 'zh'
    ? '河北善道环境科技有限公司专注雾森系统、人造雾景观、喷雾降尘与高压微雾设备的研发、生产、设计与工程施工，提供加湿、除尘、降温与雾化消毒一站式解决方案。'
    : 'Hebei Shandao Environmental Technology — micro-mist (wùsēn) systems, artificial-fog landscaping, spray dust suppression, and high-pressure atomization equipment, with turnkey R&D, design, and installation for humidification, dust control, cooling, and disinfection.';

/**
 * Home-page structured data as a @graph: a LocalBusiness (Organization subtype,
 * so it carries both company identity and local/contact signals) plus a WebSite
 * node. Only verified facts are included — add streetAddress, geo, and
 * openingHours once confirmed to unlock map/local rich results.
 */
export const buildOrganizationSchema = (lang, contact, products = [], faqItems = []) => ({
  '@context': 'https://schema.org',
  '@graph': [
    ...buildProductSchemas(lang, products),
    buildFaqSchema(faqItems),
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': ORG_ID(),
      name: SITE_NAME[lang] || SITE_NAME.en,
      alternateName:
        lang === 'zh' ? 'Hebei Shandao Environmental Technology' : '河北善道环境科技有限公司',
      url: absoluteUrl('/'),
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/logo.png'),
      },
      image: absoluteUrl('/logo.png'),
      description: orgDescription(lang),
      email: contact.emailAddress,
      telephone: contact.phones?.[0]?.replace(/\s/g, ''),
      contactPoint: contact.phones?.map((phone) => ({
        '@type': 'ContactPoint',
        telephone: phone.replace(/\s/g, ''),
        contactType: 'customer service',
        areaServed: 'CN',
        availableLanguage: ['Chinese', 'English'],
      })),
      address: {
        '@type': 'PostalAddress',
        ...(contact.address?.street ? { streetAddress: contact.address.street } : {}),
        addressLocality: contact.address?.locality ?? (lang === 'zh' ? '石家庄市' : 'Shijiazhuang'),
        addressRegion: contact.address?.region ?? (lang === 'zh' ? '河北省' : 'Hebei'),
        addressCountry: 'CN',
      },
      areaServed: { '@type': 'Country', name: 'China' },
      knowsLanguage: ['zh-CN', 'en'],
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID(),
      url: absoluteUrl('/'),
      name: SITE_NAME[lang] || SITE_NAME.en,
      inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
      publisher: { '@id': ORG_ID() },
    },
  ].filter(Boolean),
});

export const buildArticleSchema = (article, lang) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.excerpt,
  image: article.image ? absoluteUrl(article.image) : undefined,
  datePublished: article.date,
  author: {
    '@type': 'Organization',
    name: SITE_NAME[lang] || SITE_NAME.en,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME[lang] || SITE_NAME.en,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/logo.png'),
    },
  },
  mainEntityOfPage: absoluteUrl(`/industry-information/${article.id}`),
});
