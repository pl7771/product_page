import { getCategoryIdFromLabel, getCategoryLabel } from '../constants/articleCategories';

export const getArticleDate = (article) => article.en?.date || article.zh?.date || '';

export const getArticleStatusKey = (article) => {
  if (article.status === 'archived') return 'archived';
  if (article.status === 'published' && article.visible === false) return 'hidden';
  if (article.status === 'published') return 'published';
  return 'draft';
};

const getSearchText = (article) => {
  const parts = [];
  for (const lang of ['en', 'zh']) {
    const fields = article[lang];
    if (!fields) continue;
    parts.push(fields.title, fields.excerpt, fields.body, fields.category);
  }
  return parts.filter(Boolean).join(' ').toLowerCase();
};

const statusOrder = { draft: 0, published: 1, hidden: 2, archived: 3 };

const compareByDate = (a, b, direction) => {
  const diff = getArticleDate(a).localeCompare(getArticleDate(b));
  return direction === 'asc' ? diff : -diff;
};

const compareByCategory = (a, b, lang, direction) => {
  const idA = getCategoryIdFromLabel(a.en?.category) || getCategoryIdFromLabel(a.zh?.category) || '';
  const idB = getCategoryIdFromLabel(b.en?.category) || getCategoryIdFromLabel(b.zh?.category) || '';
  const labelA = getCategoryLabel(idA, lang) || a.en?.category || a.zh?.category || '';
  const labelB = getCategoryLabel(idB, lang) || b.en?.category || b.zh?.category || '';
  const diff = labelA.localeCompare(labelB, lang === 'zh' ? 'zh' : 'en');
  return direction === 'asc' ? diff : -diff;
};

const compareByStatus = (a, b, direction) => {
  const diff = (statusOrder[getArticleStatusKey(a)] ?? 99) - (statusOrder[getArticleStatusKey(b)] ?? 99);
  return direction === 'asc' ? diff : -diff;
};

export const filterAndSortArticles = (articles, filters, lang) => {
  const { search, categoryId, status, dateFrom, dateTo, sortBy } = filters;
  let result = [...articles];

  const query = search.trim().toLowerCase();
  if (query) {
    result = result.filter((article) => getSearchText(article).includes(query));
  }

  if (categoryId && categoryId !== 'all') {
    result = result.filter((article) => {
      const id =
        getCategoryIdFromLabel(article.en?.category) || getCategoryIdFromLabel(article.zh?.category);
      return id === categoryId;
    });
  }

  if (status && status !== 'all') {
    result = result.filter((article) => getArticleStatusKey(article) === status);
  }

  if (dateFrom) {
    result = result.filter((article) => getArticleDate(article) >= dateFrom);
  }

  if (dateTo) {
    result = result.filter((article) => getArticleDate(article) <= dateTo);
  }

  result.sort((a, b) => {
    switch (sortBy) {
      case 'date-asc':
        return compareByDate(a, b, 'asc');
      case 'category-asc':
        return compareByCategory(a, b, lang, 'asc');
      case 'category-desc':
        return compareByCategory(a, b, lang, 'desc');
      case 'status-asc':
        return compareByStatus(a, b, 'asc');
      case 'status-desc':
        return compareByStatus(a, b, 'desc');
      case 'date-desc':
      default:
        return compareByDate(a, b, 'desc');
    }
  });

  return result;
};

export const defaultArticleFilters = () => ({
  search: '',
  categoryId: 'all',
  status: 'all',
  dateFrom: '',
  dateTo: '',
  sortBy: 'date-desc',
});

export const hasActiveArticleFilters = (filters) =>
  Boolean(
    filters.search.trim() ||
      filters.categoryId !== 'all' ||
      filters.status !== 'all' ||
      filters.dateFrom ||
      filters.dateTo ||
      filters.sortBy !== 'date-desc',
  );
