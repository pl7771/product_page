import { X } from 'lucide-react';
export const LightboxModal = ({ image, onClose }) => {
  if (!image) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose}/>
      <button onClick={onClose} className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-10"><X className="w-6 h-6"/></button>
      <img src={image} alt="" className="relative z-0 max-w-[90vw] max-h-[90vh] object-contain rounded-lg"/>
    </div>
  );
};