// src/components/modals/LightboxModal.jsx
import { X } from 'lucide-react';

export const LightboxModal = ({ image, onClose }) => {
  if (!image) return null;
  
  return (
    <div className="fixed inset-0 z-[100] bg-green-950/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
      <button 
        className="absolute top-4 right-4 p-3 bg-green-800 hover:bg-green-700 rounded-full text-white transition-colors z-[110]"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>
      <img 
        src={image} 
        alt="Product Full View" 
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
      />
    </div>
  );
};