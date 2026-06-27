import { createContext, useContext, useMemo, useState } from 'react';

const SESSION_KEY = 'admin-session';
const SESSION_HOURS = 8;

const AdminAuthContext = createContext(null);

const readSession = () => {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const { expiresAt } = JSON.parse(raw);
    if (Date.now() > expiresAt) {
      sessionStorage.removeItem(SESSION_KEY);
      return false;
    }
    return true;
  } catch {
    return false;
  }
};

export const AdminAuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(readSession);

  const login = (password) => {
    const expected = import.meta.env.VITE_ADMIN_PASSWORD;
    if (!expected) return { ok: false, errorKey: 'notConfigured' };
    if (password !== expected) return { ok: false, errorKey: 'invalid' };

    sessionStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ expiresAt: Date.now() + SESSION_HOURS * 60 * 60 * 1000 }),
    );
    setAuthenticated(true);
    return { ok: true };
  };

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthenticated(false);
  };

  const value = useMemo(() => ({ authenticated, login, logout }), [authenticated]);

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
};

export const useAdminAuth = () => {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
};
