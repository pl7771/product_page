import { absoluteUrl, SITE_NAME } from './siteConfig';

export const buildOrganizationSchema = (lang, contact) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME[lang] || SITE_NAME.en,
  alternateName: lang === 'zh' ? 'Hebei Shandao Environmental Technology' : '河北善道环境科技有限公司',
  url: absoluteUrl('/'),
  logo: absoluteUrl('/logo.png'),
  description:
    lang === 'zh'
      ? '环保雾化与精准微雾系统 — 工业除尘、加湿降温与工程设计施工。'
      : 'Precision micro-mist systems for industrial dust suppression, humidification, cooling, and turnkey engineering.',
  contactPoint: contact.phones?.map((phone) => ({
    '@type': 'ContactPoint',
    telephone: phone.replace(/\s/g, ''),
    contactType: 'customer service',
    areaServed: 'CN',
    availableLanguage: ['Chinese', 'English'],
  })),
  email: contact.emailAddress,
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Hebei',
    addressCountry: 'CN',
  },
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
