export const toDateDay = (value) => {
  if (!value) return '';
  const day = String(value).slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(day) ? day : '';
};

export const getArticleUpdateDay = (updatedAt, createdAt) =>
  toDateDay(updatedAt || createdAt);
