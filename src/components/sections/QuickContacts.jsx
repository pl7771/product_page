import { useState } from 'react';
import { MessageCircle, Phone, Mail, ArrowRight, Send, Copy } from 'lucide-react';
import { SectionHeading, SectionLead } from '../ui/SectionHeading';
import { useLanguage } from '../../i18n/LanguageContext';
import { QR_WECHAT, QR_WHATSAPP } from '../../assets/qr';
import { type } from '../../styles/typography';

export const QuickContacts = () => {
  const { t, dict, lang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contact = dict.contact;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(t('contact.wechatCopied'));
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert(t('contact.sent'));
      setIsSubmitting(false);
    }, 1000);
  };

  const whatsappLink = `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`;

  return (
    <section id="contact" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white section-mesh border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <SectionHeading centered>{t('contact.title')}</SectionHeading>
          <SectionLead centered>{t('contact.subtitle')}</SectionLead>
        </div>

        <div className={`grid grid-cols-1 gap-8 mb-10 ${lang === 'en' ? 'md:grid-cols-3' : 'md:grid-cols-2 max-w-2xl mx-auto'}`}>
          <div className="group surface-card p-6 flex flex-col items-center text-center hover:border-[#07C160] hover:shadow-xl hover:shadow-[#07C160]/10 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#07C160] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div className="mb-6 p-2 bg-slate-50 rounded-xl border border-slate-100 shadow-inner">
              <img src={QR_WECHAT} alt="WeChat QR" loading="lazy" className="w-40 h-40 object-contain" draggable={false} />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#07C160]/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#07C160]" />
              </div>
              <h3 className={type.cardTitleSm}>{t('contact.wechatTitle')}</h3>
            </div>
            <p className={`${type.bodySm} text-slate-500 mb-6`}>{t('contact.wechatDesc')}</p>
            <button
              onClick={() => copyToClipboard('wxid_bol1pjica7ek22')}
              className={`mt-auto w-full inline-flex items-center justify-center gap-2 py-3 bg-[#07C160] hover:bg-[#06AD56] text-white rounded-xl transition-colors ${type.btnStrong} shadow-md shadow-[#07C160]/25 hover:shadow-[#07C160]/40`}
            >
              {t('contact.wechatCopy')} <Copy className="w-4 h-4" />
            </button>
          </div>

          {lang === 'en' && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group surface-card p-6 flex flex-col items-center text-center hover:border-[#25D366] hover:shadow-xl hover:shadow-[#25D366]/10 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#25D366] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div className="mb-6 p-2 bg-slate-50 rounded-xl border border-slate-100 shadow-inner">
              <img src={QR_WHATSAPP} alt="WhatsApp QR" loading="lazy" className="w-40 h-40 object-contain" draggable={false} />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#25D366]" />
              </div>
              <h3 className={type.cardTitleSm}>{t('contact.whatsappTitle')}</h3>
            </div>
            <p className={`${type.bodySm} text-slate-500 mb-6`}>{t('contact.whatsappDesc')}</p>
            <span className={`mt-auto w-full inline-flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl transition-colors ${type.btnStrong} shadow-md`}>
              {t('contact.whatsappOpen')} <ArrowRight className="w-4 h-4" />
            </span>
          </a>
          )}

          <a
            href={`mailto:${contact.emailAddress}`}
            className="group surface-card p-6 flex flex-col items-center text-center hover:border-[#00A29A] hover:shadow-xl hover:shadow-[#00A29A]/10 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A29A] to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div className="mb-6 p-2 bg-slate-50 rounded-xl border border-slate-100 shadow-inner flex items-center justify-center w-40 h-40">
              <Mail className="w-16 h-16 text-slate-300" />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#00A29A]/10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#00A29A]" />
              </div>
              <h3 className={type.cardTitleSm}>{t('contact.emailTitle')}</h3>
            </div>
            <p className={`${type.bodySm} text-slate-500 mb-6`}>{contact.emailAddress}</p>
            <span className={`mt-auto w-full inline-flex items-center justify-center gap-2 py-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-xl transition-colors ${type.btnStrong} shadow-md`}>
              {t('contact.emailSend')} <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        <div className="surface-card bg-slate-50/80 p-6 sm:p-8 max-w-3xl mx-auto">
          <h3 className={`${type.cardTitle} mb-6 text-center`}>{t('contact.formTitle')}</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="firstName" placeholder={t('contact.firstName')} required className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A]" />
              <input type="text" name="lastName" placeholder={t('contact.lastName')} required className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A]" />
            </div>
            {lang === 'en' && (
              <input type="email" name="email" placeholder={t('contact.email')} required className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A]" />
            )}
            <textarea name="message" placeholder={t('contact.message')} rows={3} required className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A] resize-none" />
            <button type="submit" disabled={isSubmitting} className={`w-full py-3 bg-[#00A29A] hover:bg-[#008f88] text-white ${type.btnStrong} rounded-lg transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-60`}>
              {isSubmitting ? t('contact.sending') : t('contact.submit')}
              {!isSubmitting && <Send className="w-4 h-4" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
