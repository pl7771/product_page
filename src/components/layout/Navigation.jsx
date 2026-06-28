import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { LogoIcon } from '../ui/LogoIcon';
import { LogoChip } from '../ui/LogoChip';
import { useLanguage } from '../../i18n/LanguageContext';

const SCROLL_THRESHOLD = 80;
const SCROLL_DELTA = 8;
const ANCHOR_SCROLL_SETTLE_MS = 250;
const ANCHOR_SCROLL_MAX_MS = 4000;

const NavSectionLink = ({ href, label, className, onNavigate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const sectionId = href.replace('/#', '');

  const scrollToSection = useCallback(() => {
    const attempt = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
      }
      return false;
    };

    if (!attempt()) {
      window.setTimeout(attempt, 400);
    }
  }, [sectionId]);

  const handleClick = (e) => {
    e.preventDefault();
    onNavigate();

    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(scrollToSection, 350);
    } else {
      scrollToSection();
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {label}
    </a>
  );
};

export const Navigation = ({ leftSlot }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const anchorNavigatingRef = useRef(false);
  const anchorScrollEndTimerRef = useRef(null);
  const anchorScrollMaxTimerRef = useRef(null);
  const { t } = useLanguage();
  const location = useLocation();

  const endAnchorNavigation = useCallback(() => {
    anchorNavigatingRef.current = false;
    lastScrollY.current = window.scrollY;
    if (anchorScrollEndTimerRef.current) {
      window.clearTimeout(anchorScrollEndTimerRef.current);
      anchorScrollEndTimerRef.current = null;
    }
    if (anchorScrollMaxTimerRef.current) {
      window.clearTimeout(anchorScrollMaxTimerRef.current);
      anchorScrollMaxTimerRef.current = null;
    }
  }, []);

  const handleNavSectionClick = useCallback(() => {
    setNavVisible(true);
    setMobileMenuOpen(false);
    anchorNavigatingRef.current = true;

    if (anchorScrollMaxTimerRef.current) {
      window.clearTimeout(anchorScrollMaxTimerRef.current);
    }
    anchorScrollMaxTimerRef.current = window.setTimeout(endAnchorNavigation, ANCHOR_SCROLL_MAX_MS);
  }, [endAnchorNavigation]);

  useEffect(() => {
    const onUserScrollIntent = () => {
      if (anchorNavigatingRef.current) {
        endAnchorNavigation();
      }
    };

    window.addEventListener('wheel', onUserScrollIntent, { passive: true });
    window.addEventListener('touchstart', onUserScrollIntent, { passive: true });

    return () => {
      window.removeEventListener('wheel', onUserScrollIntent);
      window.removeEventListener('touchstart', onUserScrollIntent);
    };
  }, [endAnchorNavigation]);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (anchorNavigatingRef.current) {
        setNavVisible(true);
        lastScrollY.current = currentY;

        if (anchorScrollEndTimerRef.current) {
          window.clearTimeout(anchorScrollEndTimerRef.current);
        }
        anchorScrollEndTimerRef.current = window.setTimeout(endAnchorNavigation, ANCHOR_SCROLL_SETTLE_MS);
        return;
      }

      if (mobileMenuOpen) {
        lastScrollY.current = currentY;
        return;
      }

      if (currentY <= SCROLL_THRESHOLD) {
        setNavVisible(true);
      } else if (currentY > lastScrollY.current + SCROLL_DELTA) {
        setNavVisible(false);
        setMobileMenuOpen(false);
      } else if (currentY < lastScrollY.current - SCROLL_DELTA) {
        setNavVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (anchorScrollEndTimerRef.current) {
        window.clearTimeout(anchorScrollEndTimerRef.current);
      }
    };
  }, [mobileMenuOpen, endAnchorNavigation]);

  const links = [
    { href: '/#products', label: t('nav.products') },
    { href: '/#projects-section', label: t('nav.technology') },
    { to: '/industry-information', label: t('nav.industry') },
    { href: '/#contact', label: t('nav.contact') },
  ];

  const navLinkClassName =
    'relative font-sans text-[13px] sm:text-sm font-normal tracking-[0.05em] text-slate-600 whitespace-nowrap rounded-full px-2.5 py-1.5 transition-all duration-200 hover:text-[#00A29A] hover:bg-[#00A29A]/[0.07]';

  const isLinkActive = (link) => {
    if (link.to) return location.pathname.startsWith(link.to);
    if (link.href === '/#contact') return location.pathname === '/' && location.hash === '#contact';
    if (link.href === '/#products') return location.pathname === '/' && location.hash === '#products';
    if (link.href === '/#projects-section') return location.pathname === '/' && location.hash === '#projects-section';
    return false;
  };

  const activeNavClass = 'text-[#00A29A] bg-[#00A29A]/10';

  const renderLink = (link, mobile = false) => {
    const active = isLinkActive(link);
    const mobileClass = mobile
      ? `${navLinkClassName} w-full text-left py-2.5 px-3 ${active ? activeNavClass : ''}`
      : `${navLinkClassName} ${active ? activeNavClass : ''}`;

    if (link.to) {
      return (
        <Link
          key={link.to}
          to={link.to}
          className={mobileClass}
          onClick={() => {
            setNavVisible(true);
            setMobileMenuOpen(false);
          }}
        >
          {link.label}
        </Link>
      );
    }

    return (
      <NavSectionLink
        key={link.href}
        href={link.href}
        label={link.label}
        className={mobileClass}
        onNavigate={handleNavSectionClick}
      />
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 overflow-hidden border-b border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-transform duration-300 ease-in-out will-change-transform ${
        navVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="absolute inset-0 bg-slate-50/95 backdrop-blur-xl backdrop-saturate-150 pointer-events-none">
        <div className="absolute top-[-80%] right-[-8%] w-[320px] h-[320px] bg-[#00A29A]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 py-3">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12 flex items-center justify-between gap-2 sm:gap-4 min-w-0">
          <div className="flex items-center gap-2 sm:gap-6 min-w-0 flex-1 overflow-hidden">
            {leftSlot && <div className="flex-shrink-0">{leftSlot}</div>}
            <LogoChip variant="nav" className="min-w-0 max-w-full">
              <LogoIcon
                variant="header"
                className="h-9 sm:h-12 w-auto max-w-[min(100%,10.5rem)] sm:max-w-[280px] object-contain object-left"
              />
            </LogoChip>
          </div>

          <div className="hidden md:flex items-center gap-0.5 lg:gap-1 shrink-0">
            {links.map((link, index) => (
              <div key={link.to || link.href} className="flex items-center">
                {renderLink(link)}
                {index < links.length - 1 && (
                  <span className="mx-0.5 lg:mx-1 w-px h-3.5 bg-slate-200/90" aria-hidden="true" />
                )}
              </div>
            ))}
            <span className="mx-1.5 lg:mx-2 w-px h-4 bg-slate-200" aria-hidden="true" />
            <LanguageSwitcher />
          </div>

          <div className="flex items-center gap-1.5 shrink-0 md:hidden">
            <LanguageSwitcher compact />
            <button
              className={`p-2 rounded-full transition-all ${mobileMenuOpen ? 'bg-[#00A29A] text-white' : 'text-slate-600 hover:text-[#00A29A]'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden relative border-t border-slate-200/80 py-3 px-4 sm:px-6 flex flex-col gap-1">
            {links.map((link) => renderLink(link, true))}
          </div>
        )}
      </div>
    </nav>
  );
};
