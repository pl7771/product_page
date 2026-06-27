const API_BASE = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');
const SESSION_KEY = 'admin-session';

export class ApiError extends Error {
  constructor(status, code) {
    super(code);
    this.status = status;
    this.code = code;
  }
}

export const getAuthSession = () => {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw);
    if (!session?.token || Date.now() > session.expiresAt) {
      sessionStorage.removeItem(SESSION_KEY);
      return null;
    }
    return session;
  } catch {
    return null;
  }
};

export const setAuthSession = (session) => {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

export const clearAuthSession = () => {
  sessionStorage.removeItem(SESSION_KEY);
};

export const apiFetch = async (path, options = {}) => {
  const headers = { 'Content-Type': 'application/json', ...options.headers };
  const session = getAuthSession();
  if (session?.token) headers.Authorization = `Bearer ${session.token}`;

  const response = await fetch(`${API_BASE}${path}`, { ...options, headers });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new ApiError(response.status, body.error || 'request_failed');
  }

  if (response.status === 204) return null;
  return response.json();
};
