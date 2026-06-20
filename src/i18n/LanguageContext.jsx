import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import zh from './translations/zh';
import en from './translations/en';

const STORAGE_KEY = 'site-lang';
const dictionaries = { zh, en };

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'zh';
    return localStorage.getItem(STORAGE_KEY) || 'zh';
  });

  const setLang = (next) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = dictionaries[lang].meta.title;
  }, [lang]);

  const value = useMemo(() => {
    const dict = dictionaries[lang] || dictionaries.zh;
    const t = (key, fallback) => {
      const val = key.split('.').reduce((acc, part) => acc?.[part], dict);
      return val ?? fallback ?? key;
    };
    return { lang, setLang, t, dict };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
