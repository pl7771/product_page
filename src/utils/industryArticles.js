export const ARTICLE_REQUIRED_FIELD_KEYS = ['date', 'category', 'title', 'excerpt', 'body'];

export const getArticleValidationErrors = (article) => {
  const errors = [];
  for (const lang of ['en', 'zh']) {
    const fields = article[lang];
    if (!fields) {
      errors.push(lang);
      continue;
    }
    for (const key of ARTICLE_REQUIRED_FIELD_KEYS) {
      if (!String(fields[key] ?? '').trim()) {
        errors.push(`${lang}.${key}`);
      }
    }
  }
  return errors;
};

export const isArticleComplete = (article) => getArticleValidationErrors(article).length === 0;

export const emptyArticleFields = () => ({
  date: new Date().toISOString().slice(0, 10),
  category: '',
  title: '',
  excerpt: '',
  body: '',
  image: '',
});

export const createEmptyArticle = () => ({
  id: `custom-${Date.now()}`,
  status: 'draft',
  visible: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  en: emptyArticleFields(),
  zh: emptyArticleFields(),
});

export const localizeCustomArticle = (article, lang) => {
  const fields = article[lang] || article.en;
  return {
    id: article.id,
    status: article.status,
    source: 'custom',
    ...fields,
  };
};

export const mergePublishedArticles = (articles, lang) =>
  articles
    .filter((a) => a.status === 'published' && a.visible !== false)
    .map((a) => localizeCustomArticle(a, lang))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const findArticleById = (id, articles, lang) => {
  const article = articles.find((a) => String(a.id) === String(id));
  if (!article) return null;
  if (article.status !== 'published' || article.visible === false) return null;
  return localizeCustomArticle(article, lang);
};
