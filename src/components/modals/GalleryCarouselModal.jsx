import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GalleryCarouselModal = ({ product, onClose }) => {
  if (!product) return null;
  const [i, setI] = useState(0);
  const next = () => setI(p => (p+1) % product.gallery.length);
  const prev = () => setI(p => (p-1+product.gallery.length) % product.gallery.length);
  
  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose} />
      <button onClick={onClose} className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-10"><X className="w-6 h-6"/></button>
      <button onClick={prev} className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-10"><ChevronLeft className="w-6 h-6"/></button>
      <img src={product.gallery[i]} alt="" className="relative z-0 w-full max-w-5xl h-[70vh] object-contain rounded-lg"/>
      <button onClick={next} className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-10"><ChevronRight className="w-6 h-6"/></button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm z-0">{i+1} / {product.gallery.length}</div>
    </div>
  );
};