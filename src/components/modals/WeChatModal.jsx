import { X, MessageCircle, CheckCircle } from 'lucide-react';
import { QRCode } from '../ui/QRCode';

export const WeChatModal = ({ isOpen, onClose }) => {
  // 🆕 ГЛАВНОЕ: не рендерить, если закрыто
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Затемнение — клик закрывает */}
      <div 
        className="absolute inset-0 bg-green-950/80 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      {/* Контент модалки */}
      <div className="relative bg-green-900 border border-green-700/50 rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-400">
        
        {/* Кнопка закрытия */}
        <button 
          className="absolute top-4 right-4 p-2 text-green-400 hover:text-white bg-green-800/50 hover:bg-green-700 rounded-full transition-all z-10" 
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-[#07C160]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-[#07C160]" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Connect on WeChat</h3>
          <p className="text-green-400 text-sm font-light mb-8">
            Scan the QR code below using another phone to contact our sales team directly.
          </p>
          
          <div className="bg-white p-4 rounded-2xl w-48 h-48 mx-auto mb-6 shadow-[0_0_30px_rgba(7,193,96,0.1)]">
            <QRCode />
          </div>

          <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#07C160] bg-[#07C160]/10 py-2 px-4 rounded-full w-max mx-auto">
            <CheckCircle className="w-4 h-4" /> Official Account Verified
          </div>
        </div>
      </div>
    </div>
  );
};