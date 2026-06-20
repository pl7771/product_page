import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { OptimizedImage } from '../ui/OptimizedImage';
import { preloadImage } from '../../utils/image';

export const GalleryCarouselModal = ({ product, onClose }) => {
  const { t } = useLanguage();
  const [i, setI] = useState(0);
  const gallery = product?.gallery ?? [];
  const len = gallery.length;

  useEffect(() => {
    if (len <= 1) return;
    preloadImage(gallery[(i + 1) % len]);
    preloadImage(gallery[(i - 1 + len) % len]);
  }, [i, gallery, len]);

  if (!product) return null;

  const next = () => setI((p) => (p + 1) % len);
  const prev = () => setI((p) => (p - 1 + len) % len);

  return (
    <div className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose} />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-full shadow-lg z-[160] transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label={t('gallery.close')}
      >
        <X className="w-6 h-6" />
      </button>
      <button onClick={prev} className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-full shadow-lg z-[110]" aria-label={t('gallery.prev')}>
        <ChevronLeft className="w-6 h-6" />
      </button>
      <OptimizedImage
        src={gallery[i]}
        alt=""
        loading="eager"
        pictureClassName="relative z-0 block w-full max-w-5xl mx-auto"
        className="w-full max-w-5xl h-[70vh] object-contain rounded-lg shadow-2xl"
      />
      <button onClick={next} className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-full shadow-lg z-[110]" aria-label={t('gallery.next')}>
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm z-0">
        {i + 1} / {len}
      </div>
    </div>
  );
};
