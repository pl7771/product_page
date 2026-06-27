import { useState } from 'react';
import { MessageCircle, Image as ImageIcon, Maximize2 } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { CyclingImage } from './CyclingImage';
import { type } from '../../styles/typography';

export const ProductCard = ({ product, onContactClick, onGalleryClick }) => {
  const { t } = useLanguage();
  const images = product.gallery?.length ? product.gallery : product.cover ? [product.cover] : [];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const openGallery = () => {
    if (images.length && onGalleryClick) {
      onGalleryClick(product, currentImgIndex);
    }
  };

  return (
    <div className="group bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:border-[#00A29A]/40 hover:shadow-[var(--shadow-brand)] hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col">
      <div className="p-4 pb-0">
        <button
          type="button"
          onClick={openGallery}
          disabled={!images.length || !onGalleryClick}
          className="relative aspect-[4/3] overflow-hidden bg-slate-50 rounded-2xl w-full text-left disabled:cursor-default cursor-pointer group/image focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A29A] focus-visible:ring-offset-2"
          aria-label={images.length ? `${product.name} — ${t('gallery.open')}` : undefined}
        >
          {images.length > 0 ? (
            <>
              <CyclingImage
                images={images}
                alt={product.name}
                interval={2000}
                containerClassName="absolute inset-0"
                className="w-full h-full object-cover group-hover/image:scale-105"
                hoverScaleClassName=""
                loading="lazy"
                onIndexChange={setCurrentImgIndex}
              />
              {onGalleryClick && (
                <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/15 transition-all flex items-center justify-center pointer-events-none">
                  <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity drop-shadow-md" />
                </div>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-2">
              <ImageIcon className="w-10 h-10 opacity-40" />
              <span className={type.label}>{t('products.photosSoon')}</span>
            </div>
          )}

          {images.length > 1 && (
            <div className={`absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 px-2.5 py-1 rounded-md ${type.label} normal-case tracking-[0.04em] pointer-events-none z-10`}>
              {currentImgIndex + 1} / {images.length}
            </div>
          )}

          <div className={`absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full ${type.labelBrand} normal-case tracking-[0.06em] border border-[#00A29A]/10 shadow-sm pointer-events-none z-10`}>
            {product.category}
          </div>
        </button>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <h4 className={`${type.cardTitle} mb-1 group-hover:text-[#00A29A] transition-colors`}>{product.name}</h4>
          <p className={type.accent}>{product.subtitle}</p>
        </div>

        <p className={`${type.bodySm} mb-6 flex-grow line-clamp-3`}>{product.description}</p>

        <button
          type="button"
          onClick={() => onContactClick(product)}
          className={`w-full py-2.5 px-3 bg-[#00A29A] hover:bg-[#008f88] text-white ${type.btnStrong} rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-[#00A29A]/20 hover:shadow-lg hover:shadow-[#00A29A]/40 mt-auto`}
        >
          <MessageCircle className="w-3.5 h-3.5" /> {t('products.contact')}
        </button>
      </div>
    </div>
  );
};
