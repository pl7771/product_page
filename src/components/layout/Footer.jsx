import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { useLocalizedPath } from '../../i18n/routing';
import { type } from '../../styles/typography';

const footerBody = 'font-sans text-sm leading-relaxed font-normal text-white';
const footerHeading = 'font-sans text-xs uppercase tracking-[0.14em] font-normal text-white';
const footerLink = 'text-white hover:text-[#00A29A] transition-colors';

export const Footer = () => {
  const { t, dict, lang } = useLanguage();
  const lp = useLocalizedPath();
  const contact = dict.contact;

  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1">
            <p className={`${type.cardTitle} !text-white sm:text-xl mb-6`}>
              {t('footer.companyName')}
            </p>
            <p className={`${footerBody} text-white/90`}>{t('footer.tagline')}</p>
          </div>

          <div>
            <h4 className={`${footerHeading} mb-6`}>{t('footer.contactTitle')}</h4>
            <ul className={`space-y-4 ${footerBody}`}>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00A29A] mt-0.5 flex-shrink-0" />
                <span className="text-white">{t('footer.address')}</span>
              </li>
              {contact.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#00A29A] flex-shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className={footerLink}>
                    {phone}
                  </a>
                </li>
              ))}
              {lang === 'en' && (
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#00A29A] flex-shrink-0" />
                  <a href={`mailto:${contact.emailAddress}`} className={footerLink}>
                    {contact.emailAddress}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className={`${footerHeading} mb-6`}>{t('footer.linksTitle')}</h4>
            <ul className={`${footerBody} space-y-3`}>
              <li>
                <a href={lp('/#products')} className={footerLink}>
                  {t('nav.products')}
                </a>
              </li>
              <li>
                <a href={lp('/#projects-section')} className={footerLink}>
                  {t('nav.technology')}
                </a>
              </li>
              <li>
                <Link to={lp('/solutions')} className={footerLink}>
                  {t('nav.solutions')}
                </Link>
              </li>
              <li>
                <Link to={lp('/industry-information')} className={footerLink}>
                  {t('nav.industry')}
                </Link>
              </li>
              <li>
                <Link to={lp('/service-areas')} className={footerLink}>
                  {t('nav.serviceAreas')}
                </Link>
              </li>
              <li>
                <a href={lp('/#contact')} className={footerLink}>
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-xs tracking-[0.04em] text-white/90`}
        >
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <p className="text-white/90">
              © {new Date().getFullYear()} {t('footer.copyright')}
            </p>
            <p className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-white/90">
              <a
                href="https://beian.mps.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${footerLink} inline-flex items-center gap-1`}
              >
                <img src="/beian-gongan.png" alt="公安备案" width="16" height="16" className="w-4 h-4 object-contain" />
                冀公网安备13010502003062号
              </a>
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className={footerLink}
              >
                冀ICP备2026024129号-1
              </a>
            </p>
          </div>
          <div className="flex gap-6">
            <Link to={lp('/privacy-policy')} className={footerLink}>
              {t('footer.privacy')}
            </Link>
            <Link to={lp('/terms-of-service')} className={footerLink}>
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
