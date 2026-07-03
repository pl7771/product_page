import { useLanguage } from './LanguageContext';

/**
 * Language-prefixed routing: Chinese lives at "/", English at "/en".
 * All internal links to public pages should go through these helpers so a
 * visitor stays in their language when navigating.
 */
export const EN_PREFIX = '/en';

export const isEnPath = (pathname) =>
  pathname === EN_PREFIX || pathname.startsWith(`${EN_PREFIX}/`);

/** Strip the /en prefix from a pathname (returns the logical path). */
export const stripLangPrefix = (pathname) =>
  isEnPath(pathname) ? pathname.slice(EN_PREFIX.length) || '/' : pathname;

/** Localize a logical path ("/projects/1", "/#contact", "/") for a language. */
export const localizePath = (path, lang) => {
  if (lang !== 'en') return path;
  if (path === '/') return EN_PREFIX;
  return `${EN_PREFIX}${path}`;
};

/** Hook: prefix ("" or "/en") for the current language. */
export const useLangBase = () => {
  const { lang } = useLanguage();
  return lang === 'en' ? EN_PREFIX : '';
};

/** Hook: localize a logical path for the current language. */
export const useLocalizedPath = () => {
  const { lang } = useLanguage();
  return (path) => localizePath(path, lang);
};
