import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { LogoIcon } from '../ui/LogoIcon';
import { LogoChip } from '../ui/LogoChip';
import { useLanguage } from '../../i18n/LanguageContext';

export const Navigation = ({ leftSlot }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { href: '/#products', label: t('nav.products') },
    { href: '/#projects-section', label: t('nav.technology') },
    { href: '/#trust', label: t('nav.enterprise') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl backdrop-saturate-150 py-3 border-b border-slate-100 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 sm:gap-6 min-w-0">
          {leftSlot && <div className="flex-shrink-0">{leftSlot}</div>}
          <LogoChip>
            <LogoIcon variant="header" className="h-8 sm:h-9 w-auto max-w-[160px] sm:max-w-[220px] object-contain object-left" />
          </LogoChip>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-6 flex flex-col gap-4 z-40">
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
