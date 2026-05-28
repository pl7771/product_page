import { X } from 'lucide-react';

export const LightboxModal = ({ image, onClose }) => {
  if (!image) return null;
  
  return (
    <div className="fixed inset-0 z-[100] bg-green-950/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-300">
      <button 
        className="absolute top-6 right-6 p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>
      <img 
        src={image} 
        alt="Product Full View" 
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-500"
      />
    </div>
  );
};