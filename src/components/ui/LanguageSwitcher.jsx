import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { localizePath, stripLangPrefix } from '../../i18n/routing';
import { type } from '../../styles/typography';

export const LanguageSwitcher = ({ className = '', compact = false }) => {
  const { lang, setLang } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const buttonClass = compact
    ? `px-2 py-0.5 ${type.btnStrong} rounded-md transition-all text-[11px] leading-tight`
    : `px-2.5 py-1 ${type.btnStrong} rounded-md transition-all text-xs sm:text-sm`;

  // Public pages live at language-prefixed URLs (zh at "/", en at "/en"),
  // so switching languages navigates to the twin URL. Admin pages have no
  // twin — there we only flip the UI language.
  const switchTo = (target) => {
    if (target === lang) return;
    setLang(target);
    if (location.pathname.startsWith('/admin')) return;
    const logicalPath = stripLangPrefix(location.pathname);
    navigate(`${localizePath(logicalPath, target)}${location.search}${location.hash}`);
  };

  return (
    <div
      className={`inline-flex shrink-0 items-center rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => switchTo('zh')}
        className={`${buttonClass} ${
          lang === 'zh'
            ? 'bg-[#00A29A] text-white shadow-sm'
            : 'text-slate-600 hover:text-[#00A29A] hover:bg-slate-50'
        }`}
      >
        中文
      </button>
      <button
        type="button"
        onClick={() => switchTo('en')}
        className={`${buttonClass} ${
          lang === 'en'
            ? 'bg-[#00A29A] text-white shadow-sm'
            : 'text-slate-600 hover:text-[#00A29A] hover:bg-slate-50'
        }`}
      >
        EN
      </button>
    </div>
  );
};
