import { apiFetch } from './client';

export const loginAdmin = (password) =>
  apiFetch('/admin/login', {
    method: 'POST',
    body: JSON.stringify({ password }),
  });

export const logoutAdmin = () =>
  apiFetch('/admin/logout', { method: 'POST' }).catch(() => null);

export const verifyAdminSession = () => apiFetch('/admin/me');

export const fetchPublicArticles = () => apiFetch('/articles/public');

export const fetchAllArticles = () => apiFetch('/articles');

export const fetchArticle = (id) => apiFetch(`/articles/${id}`);

export const createArticle = (article) =>
  apiFetch('/articles', {
    method: 'POST',
    body: JSON.stringify(article),
  });

export const updateArticle = (id, article) =>
  apiFetch(`/articles/${id}`, {
    method: 'PUT',
    body: JSON.stringify(article),
  });

export const setArticleVisibility = (id, visible) =>
  apiFetch(`/articles/${id}/visibility`, {
    method: 'PATCH',
    body: JSON.stringify({ visible }),
  });

export const archiveArticle = (id) =>
  apiFetch(`/articles/${id}/archive`, { method: 'POST' });

export const restoreArticle = (id) =>
  apiFetch(`/articles/${id}/restore`, { method: 'POST' });

export const unpublishArticle = (id) =>
  apiFetch(`/articles/${id}/unpublish`, { method: 'POST' });

export const permanentlyDeleteArticle = (id) =>
  apiFetch(`/articles/${id}`, { method: 'DELETE' });
