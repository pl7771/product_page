import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { mergePublishedArticles, findArticleById } from '../utils/industryArticles';

export const useIndustryArticles = () => {
  const { dict, lang } = useLanguage();
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const refresh = () => setVersion((v) => v + 1);
    window.addEventListener('industry-articles-updated', refresh);
    return () => window.removeEventListener('industry-articles-updated', refresh);
  }, []);

  const articles = useMemo(
    () => mergePublishedArticles(dict.industry.articles, lang),
    [dict.industry.articles, lang, version],
  );

  const getArticle = (id) => findArticleById(id, dict.industry.articles, lang);

  return { articles, getArticle };
};
