import { X, MessageCircle } from 'lucide-react';
import { QR_WECHAT } from '../../assets/qr';

export const WeChatModal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
    <div className="absolute inset-0" onClick={onClose}/>
    <div className="relative bg-green-900 rounded-2xl p-6 max-w-sm w-full text-center z-10">
      <button onClick={onClose} className="absolute top-3 right-3 text-green-400 hover:text-white"><X className="w-5 h-5"/></button>
      <MessageCircle className="w-12 h-12 text-[#07C160] mx-auto mb-4"/>
      <h3 className="text-xl font-bold text-white mb-2">WeChat</h3>
      <div className="w-40 h-40 bg-white rounded-xl mx-auto mb-4 p-2">
        <img src={QR_WECHAT} alt="WeChat QR" loading="lazy" className="w-full h-full object-contain" draggable={false} />
      </div>
      <p className="text-green-400 text-sm">Scan to contact us</p>
    </div>
  </div>
);