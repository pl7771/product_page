import { useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME } from '../../seo/siteConfig';

const ensureMeta = (key, content, attr = 'name') => {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const ensureLink = (rel, href, extra = {}) => {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]${extra.hreflang ? `[hreflang="${extra.hreflang}"]` : ''}`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  if (extra.hreflang) el.setAttribute('hreflang', extra.hreflang);
};

const ensureJsonLd = (id, data) => {
  let el = document.getElementById(id);
  if (!data) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

export const PageSEO = ({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd = null,
  keywords = '',
}) => {
  const { lang } = useLanguage();
  const canonical = absoluteUrl(path);
  const imageUrl = image?.startsWith('http') ? image : absoluteUrl(image);
  const siteName = SITE_NAME[lang] || SITE_NAME.en;
  const robots = noindex ? 'noindex, nofollow' : 'index, follow';
  const locale = lang === 'zh' ? 'zh_CN' : 'en_US';

  useEffect(() => {
    document.title = title;

    ensureMeta('description', description);
    if (keywords) ensureMeta('keywords', keywords);
    ensureMeta('robots', robots);
    ensureMeta('googlebot', robots);

    ensureLink('canonical', canonical);
    ensureLink('alternate', canonical, { hreflang: 'x-default' });
    ensureLink('alternate', canonical, { hreflang: lang === 'zh' ? 'zh-CN' : 'en' });

    ensureMeta('og:title', title, 'property');
    ensureMeta('og:description', description, 'property');
    ensureMeta('og:type', type, 'property');
    ensureMeta('og:url', canonical, 'property');
    ensureMeta('og:image', imageUrl, 'property');
    ensureMeta('og:site_name', siteName, 'property');
    ensureMeta('og:locale', locale, 'property');

    ensureMeta('twitter:card', 'summary_large_image');
    ensureMeta('twitter:title', title);
    ensureMeta('twitter:description', description);
    ensureMeta('twitter:image', imageUrl);

    ensureJsonLd('page-json-ld', jsonLd);
  }, [title, description, canonical, imageUrl, type, robots, locale, siteName, keywords, jsonLd, lang]);

  return null;
};
