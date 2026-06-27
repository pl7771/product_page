import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { AdminLanguageBar } from '../../components/admin/AdminLanguageBar';
import { PageSEO } from '../../components/seo/PageSEO';
import { type } from '../../styles/typography';

export const AdminLoginPage = () => {
  const { authenticated, checking, login } = useAdminAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (checking) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#00A29A] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (authenticated) {
    return <Navigate to="/admin/articles" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const result = await login(password);
    setSubmitting(false);

    if (!result.ok) {
      setError(t(`admin.errors.${result.errorKey}`));
      return;
    }

    const redirectTo = location.state?.from || '/admin/articles';
    navigate(redirectTo, { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 relative">
      <PageSEO title={t('seo.admin.title')} description={t('seo.admin.description')} path="/admin/login" noindex />
      <AdminLanguageBar className="absolute top-4 right-4 sm:top-6 sm:right-6" />

      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#00A29A]/10 flex items-center justify-center">
            <Lock className="w-5 h-5 text-[#00A29A]" />
          </div>
          <div>
            <h1 className={type.cardTitle}>{t('admin.login.title')}</h1>
            <p className={type.bodySm}>{t('admin.login.subtitle')}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="admin-password" className={`block ${type.label} normal-case tracking-normal text-slate-700 mb-2`}>
              {t('admin.login.password')}
            </label>
            <div className="relative">
              <input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-4 py-3 pr-11 text-sm focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A]"
                autoComplete="current-password"
                required
                disabled={submitting}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                aria-label={showPassword ? t('admin.login.hidePassword') : t('admin.login.showPassword')}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-lg disabled:opacity-60 ${type.btnStrong}`}
          >
            {submitting ? t('admin.login.signingIn') : t('admin.login.signIn')}
          </button>
        </form>
      </div>
    </div>
  );
};
