// src/components/modals/GalleryCarouselModal.jsx
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GalleryCarouselModal = ({ product, onClose }) => {
  if (!product) return null;
  
  const [i, setI] = useState(0);
  
  const next = () => setI(p => (p + 1) % product.gallery.length);
  const prev = () => setI(p => (p - 1 + product.gallery.length) % product.gallery.length);
  
  return (
    <div className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-4">
      {/* Затемненный фон для клика */}
      <div className="absolute inset-0" onClick={onClose} />
      
      {/* ✅ Кнопка ЗАКРЫТЬ (Бирюзовая) */}
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-full shadow-lg z-[160] transition-all duration-300 hover:scale-105 active:scale-95 border border-transparent hover:border-white/20"
        aria-label="Close gallery"
      >
        <X className="w-6 h-6"/>
      </button>

      {/* ✅ Кнопка ВЛЕВО (Бирюзовая) */}
      <button 
        onClick={prev} 
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-full shadow-lg z-[110] transition-all duration-300 hover:scale-110 active:scale-95 border border-transparent hover:border-white/20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6"/>
      </button>
      
      {/* Изображение */}
      <img 
        src={product.gallery[i]} 
        alt="" 
        className="relative z-0 w-full max-w-5xl h-[70vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
      />
      
      {/* ✅ Кнопка ВПРАВО (Бирюзовая) */}
      <button 
        onClick={next} 
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-full shadow-lg z-[110] transition-all duration-300 hover:scale-110 active:scale-95 border border-transparent hover:border-white/20"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6"/>
      </button>
      
      {/* Счетчик фото */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm z-0">
        {i + 1} / {product.gallery.length}
      </div>
    </div>
  );
};