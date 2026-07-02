import { X, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { QR_WECHAT } from '../../assets/qr';

export const ProductContactModal = ({ product, onClose }) => {
  const { t, dict, lang } = useLanguage();
  if (!product) return null;

  const whatsappMsg = encodeURIComponent(`${t('productModal.interestMsg')} ${product.name}`);
  const whatsappLink = `https://wa.me/${dict.contact.whatsapp.replace(/\D/g, '')}?text=${whatsappMsg}`;

  return (
    <div className="fixed inset-0 z-[110] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 w-full max-w-md mx-2 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-3 right-3 p-2 text-slate-400 hover:text-[#00A29A] hover:bg-slate-100 rounded-full transition-all" aria-label={t('common.close')}>
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{t('productModal.title')} {product.name}</h3>
          <p className="text-slate-500 text-sm">{t('productModal.subtitle')}</p>
        </div>

        <div className={`grid gap-4 mb-6 ${lang === 'en' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 max-w-xs mx-auto'}`}>
          {lang === 'en' && (
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all group">
            <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-[#25D366]" />
            </div>
            <h4 className="text-slate-900 font-semibold text-center text-sm">{t('productModal.whatsapp')}</h4>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg transition-colors text-xs font-medium">
              <MessageCircle className="w-3.5 h-3.5" /> {t('productModal.chatNow')}
            </span>
          </a>
          )}

          <div className="flex flex-col items-center justify-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#07C160] hover:bg-[#07C160]/5 transition-all group">
            <div className="w-12 h-12 bg-[#07C160]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 text-[#07C160]" />
            </div>
            <h4 className="text-slate-900 font-semibold text-center text-sm">{t('productModal.wechat')}</h4>
            <div className="bg-white p-2 rounded-lg w-24 h-24 border border-slate-200">
              <img src={QR_WECHAT} alt="WeChat QR" loading="lazy" className="w-full h-full object-contain" draggable={false} />
            </div>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-slate-100">
          <p className="text-slate-500 text-xs mb-2">{t('productModal.orEmail')}</p>
          <a
            href={`mailto:${dict.contact.emailAddress}?subject=${encodeURIComponent(`${product.name}`)}`}
            className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-slate-900 hover:bg-[#00A29A] text-white font-medium rounded-xl transition-all text-sm"
          >
            {dict.contact.emailAddress}
          </a>
        </div>
      </div>
    </div>
  );
};
