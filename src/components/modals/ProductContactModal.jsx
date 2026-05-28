import { X, MessageCircle, Phone } from 'lucide-react';
export const ProductContactModal = ({ product, onClose }) => {
  if (!product) return null;
  const msg = encodeURIComponent(`Hello! I'm interested in ${product.name} (${product.price}).`);
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose}/>
      <div className="relative bg-green-900 border border-green-800 rounded-2xl p-6 max-w-md w-full z-10">
        <button onClick={onClose} className="absolute top-3 right-3 text-green-400 hover:text-white"><X className="w-5 h-5"/></button>
        <h3 className="text-xl font-bold text-white mb-4 text-center">Contact: {product.name}</h3>
        <div className="grid grid-cols-2 gap-4">
          <a href={`https://wa.me/18005550199?text=${msg}`} target="_blank" className="flex flex-col items-center p-4 bg-green-800/50 rounded-xl hover:bg-green-700/50"><Phone className="w-8 h-8 text-[#25D366] mb-2"/><span className="text-white text-sm">WhatsApp</span></a>
          <div className="flex flex-col items-center p-4 bg-green-800/50 rounded-xl"><MessageCircle className="w-8 h-8 text-[#07C160] mb-2"/><span className="text-white text-sm">WeChat</span><div className="w-20 h-20 bg-white rounded mt-2"/></div>
        </div>
        <a href={`mailto:sales@aethersystems.inc?subject=Inquiry: ${product.name}`} className="block mt-4 text-center text-green-400 hover:text-white text-sm">Or email us</a>
      </div>
    </div>
  );
};