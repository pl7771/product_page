// src/components/ui/BackToTop.jsx
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export const BackToTop = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  // Показываем кнопку, когда проскроллили больше 500px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Плавный скролл наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[90] p-3 bg-[#00A29A] text-white rounded-full shadow-lg hover:bg-[#008f88] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
          aria-label={t('common.backToTop')}
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};