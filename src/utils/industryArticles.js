const STORAGE_KEY = 'industry-articles-custom';

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

export const loadCustomArticles = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const saveCustomArticles = (articles) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  window.dispatchEvent(new Event('industry-articles-updated'));
};

export const upsertCustomArticle = (article) => {
  const articles = loadCustomArticles();
  const index = articles.findIndex((a) => a.id === article.id);
  const next = { ...article, updatedAt: new Date().toISOString() };
  if (index >= 0) articles[index] = next;
  else articles.unshift(next);
  saveCustomArticles(articles);
  return next;
};

export const deleteCustomArticle = (id) => {
  saveCustomArticles(loadCustomArticles().filter((a) => a.id !== id));
};

export const archiveCustomArticle = (id) => {
  const articles = loadCustomArticles();
  const index = articles.findIndex((a) => a.id === id);
  if (index < 0) return;

  const article = articles[index];
  if (article.status === 'archived') return;

  articles[index] = {
    ...article,
    preArchiveStatus: article.status,
    status: 'archived',
    updatedAt: new Date().toISOString(),
  };
  saveCustomArticles(articles);
};

export const restoreCustomArticle = (id) => {
  const articles = loadCustomArticles();
  const index = articles.findIndex((a) => a.id === id);
  if (index < 0) return;

  const article = articles[index];
  if (article.status !== 'archived') return;

  const { preArchiveStatus, ...rest } = article;
  articles[index] = {
    ...rest,
    status: preArchiveStatus === 'published' ? 'published' : 'draft',
    updatedAt: new Date().toISOString(),
  };
  saveCustomArticles(articles);
};

export const permanentlyDeleteCustomArticle = (id) => {
  const articles = loadCustomArticles();
  const article = articles.find((a) => a.id === id);
  if (!article || article.status !== 'archived') return;
  saveCustomArticles(articles.filter((a) => a.id !== id));
};

export const setCustomArticleVisibility = (id, visible) => {
  const articles = loadCustomArticles();
  const index = articles.findIndex((a) => a.id === id);
  if (index < 0) return;

  articles[index] = {
    ...articles[index],
    visible: Boolean(visible),
    updatedAt: new Date().toISOString(),
  };
  saveCustomArticles(articles);
};

export const getCustomArticle = (id) => loadCustomArticles().find((a) => a.id === id);

export const localizeCustomArticle = (article, lang) => {
  const fields = article[lang] || article.en;
  return {
    id: article.id,
    status: article.status,
    source: 'custom',
    ...fields,
  };
};

export const mergePublishedArticles = (staticArticles, lang) => {
  const custom = loadCustomArticles()
    .filter((a) => a.status === 'published' && a.visible !== false)
    .map((a) => localizeCustomArticle(a, lang));

  return [...staticArticles, ...custom].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};

export const findArticleById = (id, staticArticles, lang) => {
  const custom = getCustomArticle(id);
  if (custom) {
    if (custom.status !== 'published' || custom.visible === false) return null;
    return localizeCustomArticle(custom, lang);
  }
  return staticArticles.find((a) => String(a.id) === String(id)) ?? null;
};
