// src/components/modals/ProductContactModal.jsx
import { X, MessageCircle, Phone } from 'lucide-react';

export const ProductContactModal = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappMsg = encodeURIComponent(`Hello! I'm interested in ${product.name} (${product.price}). Could you please provide more details?`);
  
  return (
    <div className="fixed inset-0 z-[110] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 w-full max-w-md mx-2 shadow-2xl animate-in fade-in zoom-in duration-300">
        
        <button onClick={onClose} className="absolute top-3 right-3 p-2 text-slate-400 hover:text-[#00A29A] hover:bg-slate-100 rounded-full transition-all" aria-label="Close">
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Contact About {product.name}</h3>
          <p className="text-slate-500 text-sm">Choose your preferred contact method</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* WhatsApp */}
          <a href={`https://wa.me/18005550199?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all group">
            <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-[#25D366]" />
            </div>
            <h4 className="text-slate-900 font-semibold text-center text-sm">WhatsApp</h4>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg transition-colors text-xs font-medium">
              <MessageCircle className="w-3.5 h-3.5" /> Chat Now
            </span>
          </a>

          {/* WeChat */}
          <div className="flex flex-col items-center justify-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#00A29A] transition-all">
            <div className="w-12 h-12 bg-[#00A29A]/10 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-[#00A29A]" />
            </div>
            <h4 className="text-slate-900 font-semibold text-center text-sm">WeChat</h4>
            <div className="bg-white p-2 rounded-lg w-24 h-24 border border-slate-200">
               {/* Заглушка для QR, если нет компонента */}
               <div className="w-full h-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-400">QR Code</div>
            </div>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-slate-100">
          <p className="text-slate-500 text-xs mb-2">Or email us directly</p>
          <a href={`mailto:sales@shandao-tech.com?subject=${encodeURIComponent(`Inquiry: ${product.name}`)}`} className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-slate-900 hover:bg-[#00A29A] text-white font-medium rounded-xl transition-all text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            sales@shandao-tech.com
          </a>
        </div>
      </div>
    </div>
  );
};