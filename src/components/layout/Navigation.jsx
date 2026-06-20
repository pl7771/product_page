import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { LogoIcon } from '../ui/LogoIcon';
import { useLanguage } from '../../i18n/LanguageContext';

export const Navigation = ({ leftSlot }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { href: '/#products', label: t('nav.products') },
    { href: '/#projects-section', label: t('nav.technology') },
    { href: '/#trust', label: t('nav.enterprise') },
    { href: '/#contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm py-3 border-b border-slate-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 sm:gap-6 min-w-0">
          {leftSlot && <div className="flex-shrink-0">{leftSlot}</div>}
          <a href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-slate-200 rounded-lg p-1.5 sm:p-2 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform overflow-hidden flex-shrink-0">
              <LogoIcon />
            </div>
            <div className="flex flex-col leading-tight hidden sm:flex">
              <span className="text-base font-bold text-slate-900 tracking-wide uppercase drop-shadow-sm">{t('nav.brandLine1')}</span>
              <span className="text-[10px] text-[#00A29A] font-semibold uppercase tracking-wider drop-shadow-sm">{t('nav.brandLine2')}</span>
            </div>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 hover:text-[#00A29A] transition-colors whitespace-nowrap">
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            className={`p-2 rounded-full transition-all ${mobileMenuOpen ? 'bg-[#00A29A] text-white' : 'text-slate-600 hover:text-[#00A29A]'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xl py-4 px-6 flex flex-col gap-4 z-40">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-[#00A29A] font-medium py-2 border-b border-slate-50 last:border-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
