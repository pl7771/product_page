import { useState } from 'react';
import { MessageCircle, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { CyclingImage } from './CyclingImage';

export const ProductCard = ({ product, onContactClick }) => {
  const { t } = useLanguage();
  const images = product.gallery?.length ? product.gallery : product.cover ? [product.cover] : [];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  return (
    <div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-[#00A29A]/50 hover:shadow-2xl hover:shadow-[#00A29A]/15 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
      <div className="p-4 pb-0">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-50 rounded-2xl">
          {images.length > 0 ? (
            <CyclingImage
              images={images}
              alt={product.name}
              interval={2000}
              containerClassName="absolute inset-0"
              className="w-full h-full object-cover group-hover:scale-105"
              hoverScaleClassName=""
              loading="lazy"
              onIndexChange={setCurrentImgIndex}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-2">
              <ImageIcon className="w-10 h-10 opacity-40" />
              <span className="text-xs font-medium">{t('products.photosSoon')}</span>
            </div>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium pointer-events-none z-10">
              {currentImgIndex + 1} / {images.length}
            </div>
          )}

          <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-semibold text-[#00A29A] border border-[#00A29A]/10 shadow-sm pointer-events-none z-10">
            {product.category}
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 group-hover:text-[#00A29A] transition-colors">{product.name}</h4>
          <p className="text-[#00A29A] text-xs sm:text-sm font-medium">{product.subtitle}</p>
        </div>

        <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">{product.description}</p>

        <button
          onClick={() => onContactClick(product)}
          className="w-full py-2.5 px-3 bg-[#00A29A] hover:bg-[#008f88] text-white text-xs sm:text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-[#00A29A]/20 hover:shadow-lg hover:shadow-[#00A29A]/40 mt-auto"
        >
          <MessageCircle className="w-3.5 h-3.5" /> {t('products.contact')}
        </button>
      </div>
    </div>
  );
};
