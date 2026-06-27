import { useLanguage } from '../../i18n/LanguageContext';
import { type } from '../../styles/typography';

export const LanguageSwitcher = ({ className = '' }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang('zh')}
        className={`px-2.5 py-1 ${type.btnStrong} rounded-md transition-all text-xs sm:text-sm ${
          lang === 'zh'
            ? 'bg-[#00A29A] text-white shadow-sm'
            : 'text-slate-600 hover:text-[#00A29A] hover:bg-slate-50'
        }`}
      >
        中文
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 ${type.btnStrong} rounded-md transition-all text-xs sm:text-sm ${
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
