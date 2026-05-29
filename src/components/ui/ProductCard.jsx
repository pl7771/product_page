// src/components/ui/ProductCard.jsx
import { MessageCircle, Image as ImageIcon, ZoomIn } from 'lucide-react';

export const ProductCard = ({ product, onGalleryClick, onContactClick }) => {
  return (
    <div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-[#00A29A]/50 hover:shadow-2xl hover:shadow-[#00A29A]/15 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
      
      {/* 🖼️ ОБЛАСТЬ ИЗОБРАЖЕНИЯ: Теперь кликабельна для открытия галереи */}
      <div 
        className="relative aspect-[4/3] overflow-hidden bg-slate-50 cursor-pointer"
        onClick={() => onGalleryClick(product)}
      >
        <img 
          src={product.cover} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Оверлей с иконкой при наведении */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
          <div className="bg-white/90 p-3 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <ZoomIn className="w-6 h-6 text-[#00A29A]" />
          </div>
          <span className="absolute bottom-4 left-0 right-0 text-center text-white font-medium text-sm drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            Tap to View Gallery
          </span>
        </div>

        {/* Бейдж категории (поверх оверлея) */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-semibold text-[#00A29A] border border-[#00A29A]/10 shadow-sm pointer-events-none">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 group-hover:text-[#00A29A] transition-colors">{product.name}</h4>
          <p className="text-[#00A29A] text-xs sm:text-sm font-medium">{product.subtitle}</p>
        </div>
        
        {/* Price */}
        <p className="text-2xl font-bold text-slate-800 mb-3">{product.price}</p>
        
        <p className="text-slate-500 text-xs sm:text-sm mb-4 sm:mb-6 flex-grow line-clamp-2">
          {product.description}
        </p>

        {/* Specs */}
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

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <button 
            onClick={(e) => { e.stopPropagation(); onGalleryClick(product); }}
            className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <ImageIcon className="w-3.5 h-3.5" /> Gallery
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onContactClick(product); }}
            className="flex-1 py-2.5 px-3 bg-[#00A29A] hover:bg-[#008f88] text-white text-xs sm:text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-[#00A29A]/20 hover:shadow-lg hover:shadow-[#00A29A]/40"
          >
            <MessageCircle className="w-3.5 h-3.5" /> Contact
          </button>
        </div>
      </div>
    </div>
  );
};