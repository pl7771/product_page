// src/components/modals/GalleryCarouselModal.jsx
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GalleryCarouselModal = ({ product, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if (!product) return null;

  const next = () => setCurrentIndex((i) => (i + 1) % product.gallery.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + product.gallery.length) % product.gallery.length);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[120] bg-green-950/95 flex items-center justify-center p-4">
      {/* Затемнение */}
      <div className="absolute inset-0 bg-green-950/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Кнопка закрытия */}
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 p-3 bg-green-800 hover:bg-green-700 rounded-full text-white transition-colors z-[130] shadow-lg"
        aria-label="Close gallery"
      >
        <X className="w-6 h-6" />
      </button>
      
      {/* Стрелка влево */}
      <button 
        onClick={prev} 
        className="absolute left-4 p-3 bg-green-900/80 hover:bg-green-800 rounded-full text-white transition-colors z-[110]"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      {/* Фото */}
      <div className="max-w-5xl w-full relative z-[105]">
        <img 
          src={product.gallery[currentIndex]} 
          alt={`${product.name} - Photo ${currentIndex + 1}`}
          className="w-full h-[70vh] object-contain rounded-lg shadow-2xl"
        />
        
        {/* Индикаторы */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {product.gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-emerald-400 w-8' : 'bg-green-700 hover:bg-green-600'
              }`}
              aria-label={`Go to photo ${idx + 1}`}
            />
          ))}
        </div>
        <p className="text-center text-green-400 text-sm mt-2">
          {currentIndex + 1} / {product.gallery.length}
        </p>
      </div>
      
      {/* Стрелка вправо */}
      <button 
        onClick={next} 
        className="absolute right-4 p-3 bg-green-900/80 hover:bg-green-800 rounded-full text-white transition-colors z-[110]"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};