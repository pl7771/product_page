// src/components/ui/ProductCard.jsx
import { useState, useEffect } from 'react';
import { MessageCircle, Image as ImageIcon } from 'lucide-react';

export const ProductCard = ({ product, onContactClick }) => {
  const images = product.gallery?.length
    ? product.gallery
    : product.cover
      ? [product.cover]
      : [];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-[#00A29A]/50 hover:shadow-2xl hover:shadow-[#00A29A]/15 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
        {images.length > 0 ? (
          images.map((imgSrc, imgIndex) => (
            <img
              key={imgSrc}
              src={imgSrc}
              alt={`${product.name} - ${imgIndex + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                imgIndex === currentImgIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          ))
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-2">
            <ImageIcon className="w-10 h-10 opacity-40" />
            <span className="text-xs font-medium">Photos coming soon</span>
          </div>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium pointer-events-none">
            {currentImgIndex + 1} / {images.length}
          </div>
        )}

        <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-semibold text-[#00A29A] border border-[#00A29A]/10 shadow-sm pointer-events-none">
          {product.category}
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 group-hover:text-[#00A29A] transition-colors">
            {product.name}
          </h4>
          <p className="text-[#00A29A] text-xs sm:text-sm font-medium">{product.subtitle}</p>
        </div>

        <p className="text-2xl font-bold text-slate-800 mb-3">{product.price}</p>

        <p className="text-slate-500 text-xs sm:text-sm mb-4 sm:mb-6 flex-grow line-clamp-2">
          {product.description}
        </p>

        <div className="bg-slate-50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-slate-100 group-hover:bg-[#00A29A]/5 group-hover:border-[#00A29A]/20 transition-colors">
          <ul className="space-y-1.5">
            {product.specs.slice(0, 2).map((spec, idx) => (
              <li key={idx} className="text-[10px] sm:text-xs text-slate-600 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#00A29A] flex-shrink-0" />
                <span className="truncate">{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => onContactClick(product)}
          className="w-full py-2.5 px-3 bg-[#00A29A] hover:bg-[#008f88] text-white text-xs sm:text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-[#00A29A]/20 hover:shadow-lg hover:shadow-[#00A29A]/40 mt-auto"
        >
          <MessageCircle className="w-3.5 h-3.5" /> Contact
        </button>
      </div>
    </div>
  );
};
