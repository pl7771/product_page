// src/components/ui/ProductCard.jsx
import { MessageCircle, Image as ImageIcon } from 'lucide-react';

export const ProductCard = ({ product, onGalleryClick, onContactClick }) => {
  return (
    <div className="group bg-green-900/50 backdrop-blur-sm border border-green-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 h-full flex flex-col">
      {/* Фото */}
      <div className="relative aspect-[4/3] overflow-hidden bg-green-950">
        <img 
          src={product.cover} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-transparent opacity-60" />
        
        {/* Бейдж категории */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-emerald-500/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-semibold text-black">
          {product.category}
        </div>
      </div>

      {/* Контент */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{product.name}</h3>
        <p className="text-emerald-400 text-xs sm:text-sm font-medium mb-2">{product.price}</p>
        <p className="text-green-400/80 text-xs sm:text-sm mb-4 line-clamp-2">{product.description}</p>

        {/* Характеристики */}
        <ul className="space-y-1 mb-4 sm:mb-6">
          {product.specs.slice(0, 2).map((spec, idx) => (
            <li key={idx} className="text-[10px] sm:text-xs text-green-300 flex items-center gap-2">
              <span className="w-1 h-1 bg-emerald-500 rounded-full flex-shrink-0" />
              <span className="truncate">{spec}</span>
            </li>
          ))}
        </ul>

        {/* Две кнопки */}
        <div className="flex gap-2 mt-auto">
          <button 
            onClick={() => onGalleryClick(product)}
            className="flex-1 py-2 sm:py-2.5 px-3 bg-green-800 hover:bg-green-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 sm:gap-2"
          >
            <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">View Gallery</span>
            <span className="xs:hidden">Gallery</span>
          </button>
          <button 
            onClick={() => onContactClick(product)}
            className="flex-1 py-2 sm:py-2.5 px-3 bg-emerald-500 hover:bg-emerald-400 text-black text-xs sm:text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 sm:gap-2"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};