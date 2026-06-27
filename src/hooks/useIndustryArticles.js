import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { fetchPublicArticles } from '../api/articles';
import { mergePublishedArticles, findArticleById } from '../utils/industryArticles';

export const useIndustryArticles = () => {
  const { lang } = useLanguage();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetchPublicArticles()
      .then((data) => {
        if (!cancelled) {
          setArticles(data);
          setError(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setArticles([]);
          setError(true);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const publishedArticles = useMemo(
    () => mergePublishedArticles(articles, lang),
    [articles, lang],
  );

  const getArticle = (id) => findArticleById(id, articles, lang);

  return { articles: publishedArticles, getArticle, loading, error };
};
