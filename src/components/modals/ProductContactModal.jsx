import { X, MessageCircle, Phone } from 'lucide-react';

export const ProductContactModal = ({ product, onClose }) => {
  const whatsappMsg = encodeURIComponent(`Hello! I'm interested in ${product.name} (${product.price}). Could you please provide more details and pricing information?`);
  
  return (
    <div className="fixed inset-0 z-[110] bg-green-950/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="relative bg-green-900 border border-green-800 rounded-3xl p-6 sm:p-8 w-full max-w-md mx-2 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-3 right-3 p-2 text-green-400 hover:text-white bg-green-800/50 hover:bg-green-700 rounded-full transition-all" aria-label="Close">
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">Contact About {product.name}</h3>
          <p className="text-green-400 text-sm">Choose your preferred contact method</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* WhatsApp */}
          <a href={`https://wa.me/18005550199?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-4 bg-green-800/50 rounded-2xl border border-green-700 hover:border-emerald-500 transition-all group">
            <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-[#25D366]" />
            </div>
            <h4 className="text-white font-semibold text-center text-sm">WhatsApp</h4>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg transition-colors text-xs font-medium">
              <MessageCircle className="w-3.5 h-3.5" /> Chat Now
            </span>
          </a>

          {/* WeChat */}
          <div className="flex flex-col items-center justify-center gap-3 p-4 bg-green-800/50 rounded-2xl border border-green-700 hover:border-emerald-500 transition-all">
            <div className="w-12 h-12 bg-[#07C160]/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-[#07C160]" />
            </div>
            <h4 className="text-white font-semibold text-center text-sm">WeChat</h4>
            <div className="bg-white p-2 rounded-lg w-24 h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
                <rect x="10" y="10" width="30" height="30" /><rect x="60" y="10" width="30" height="30" /><rect x="10" y="60" width="30" height="30" />
                <rect x="20" y="20" width="10" height="10" fill="white" /><rect x="70" y="20" width="10" height="10" fill="white" /><rect x="20" y="70" width="10" height="10" fill="white" />
                <rect x="50" y="50" width="10" height="10" /><rect x="70" y="70" width="20" height="20" />
              </svg>
            </div>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-green-800">
          <p className="text-green-400 text-xs mb-2">Or email us directly</p>
          <a href={`mailto:sales@aethersystems.inc?subject=${encodeURIComponent(`Inquiry: ${product.name}`)}&body=${encodeURIComponent(`Hello! I'm interested in ${product.name}. Please provide more details.`)}`} className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-green-800 hover:bg-green-700 text-white font-medium rounded-xl transition-all text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            sales@aethersystems.inc
          </a>
        </div>
      </div>
    </div>
  );
};
