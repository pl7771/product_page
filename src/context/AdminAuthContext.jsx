import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ApiError, clearAuthSession, getAuthSession, setAuthSession } from '../api/client';
import { loginAdmin, logoutAdmin, verifyAdminSession } from '../api/articles';

const AdminAuthContext = createContext(null);

export const AdminAuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const session = getAuthSession();
    if (!session) {
      setChecking(false);
      return;
    }

    verifyAdminSession()
      .then(() => setAuthenticated(true))
      .catch(() => clearAuthSession())
      .finally(() => setChecking(false));
  }, []);

  const login = async (password) => {
    try {
      const session = await loginAdmin(password);
      setAuthSession(session);
      setAuthenticated(true);
      return { ok: true };
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.code === 'not_configured') return { ok: false, errorKey: 'notConfigured' };
        if (error.code === 'invalid') return { ok: false, errorKey: 'invalid' };
      }
      return { ok: false, errorKey: 'network' };
    }
  };

  const logout = () => {
    logoutAdmin();
    clearAuthSession();
    setAuthenticated(false);
  };

  const value = useMemo(
    () => ({ authenticated, checking, login, logout }),
    [authenticated, checking],
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
};

export const useAdminAuth = () => {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
};
