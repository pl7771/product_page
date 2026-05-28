import { X } from 'lucide-react';
export const InfoModal = ({ product, onClose, onContactRequest }) => {
  if (!product) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose}/>
      <div className="relative bg-green-900 rounded-2xl p-6 max-w-2xl w-full z-10 flex flex-col md:flex-row gap-6">
        <button onClick={onClose} className="absolute top-3 right-3 text-green-400 hover:text-white"><X className="w-5 h-5"/></button>
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 rounded-xl object-cover"/>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-white">{product.name}</h3>
          <p className="text-green-400 text-sm mb-4">{product.subtitle}</p>
          <p className="text-green-300 text-sm mb-6">{product.description}</p>
          <button onClick={() => { onContactRequest(`Interested in ${product.name}`); onClose(); }} className="py-3 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400">Request Quote</button>
        </div>
      </div>
    </div>
  );
};