import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { type } from '../../styles/typography';

export const AdminLoginPage = () => {
  const { authenticated, login } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  if (authenticated) {
    return <Navigate to="/admin/articles" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(password);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    const redirectTo = location.state?.from || '/admin/articles';
    navigate(redirectTo, { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#00A29A]/10 flex items-center justify-center">
            <Lock className="w-5 h-5 text-[#00A29A]" />
          </div>
          <div>
            <h1 className={type.cardTitle}>Admin</h1>
            <p className={type.bodySm}>Industry articles</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="admin-password" className={`block ${type.label} normal-case tracking-normal text-slate-700 mb-2`}>
              Password
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
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className={`w-full py-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-lg ${type.btnStrong}`}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
