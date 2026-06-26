import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { type } from '../../styles/typography';

export const Footer = () => {
  const { t, dict, lang } = useLanguage();
  const contact = dict.contact;

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1">
            <p className={`text-white ${type.cardTitle} sm:text-xl mb-6`}>
              {t('footer.companyName')}
            </p>
            <p className={type.bodySm + ' text-slate-400'}>{t('footer.tagline')}</p>
          </div>

          <div>
            <h4 className={`text-white ${type.label} mb-6`}>{t('footer.contactTitle')}</h4>
            <ul className={`space-y-4 ${type.bodySm}`}>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00A29A] mt-0.5 flex-shrink-0" />
                <span>{t('footer.address')}</span>
              </li>
              {contact.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#00A29A] flex-shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-[#00A29A] transition-colors">{phone}</a>
                </li>
              ))}
              {lang === 'en' && (
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#00A29A] flex-shrink-0" />
                  <a href={`mailto:${contact.emailAddress}`} className="hover:text-[#00A29A] transition-colors">{contact.emailAddress}</a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className={`text-white ${type.label} mb-6`}>{t('footer.linksTitle')}</h4>
            <ul className={type.bodySm + ' space-y-3'}>
              <li><a href="/#products" className="hover:text-[#00A29A] transition-colors">{t('nav.products')}</a></li>
              <li><a href="/#projects-section" className="hover:text-[#00A29A] transition-colors">{t('nav.technology')}</a></li>
              <li><Link to="/industry-information" className="hover:text-[#00A29A] transition-colors">{t('nav.industry')}</Link></li>
              <li><a href="/#contact" className="hover:text-[#00A29A] transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 ${type.label} normal-case tracking-[0.04em] text-slate-500`}>
          <p>© {new Date().getFullYear()} {t('footer.copyright')}</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
