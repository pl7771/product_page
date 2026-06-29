import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { useLanguage } from '../i18n/LanguageContext';
import { PageSEO } from '../components/seo/PageSEO';
import { schemaGraph, buildBreadcrumb } from '../seo/structuredData';
import { serviceAreaIds } from '../data/serviceAreas';
import { type } from '../styles/typography';

export const ServiceAreasPage = () => {
  const { t, dict, lang } = useLanguage();
  const sa = dict.serviceAreas;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PageSEO
        title={`${sa.title} | ${t('footer.companyName')}`}
        description={sa.subtitle}
        path="/service-areas"
        keywords={t('meta.keywords')}
        jsonLd={schemaGraph([buildBreadcrumb(lang, [{ name: sa.title, path: '/service-areas' }])])}
      />
      <Navigation />

      <header className="pt-32 pb-12 sm:pt-40 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 section-mesh">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-[#00A29A]" />
            <span className={`${type.labelBrand} normal-case tracking-[0.08em]`}>{sa.eyebrow}</span>
          </div>
          <h1 className={`${type.pageTitle} mb-5 max-w-3xl`}>{sa.title}</h1>
          <p className={`${type.lead} max-w-3xl`}>{sa.subtitle}</p>
        </div>
      </header>

      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceAreaIds.map((id) => {
            const region = sa.regions[id];
            if (!region) return null;
            return (
              <Link
                key={id}
                to={`/service-areas/${id}`}
                className="group surface-card p-6 flex flex-col hover:border-[#00A29A]/40 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h2 className={type.cardTitle}>{region.name}</h2>
                  <ArrowUpRight className="w-5 h-5 text-[#00A29A] flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className={`${type.bodySm} mb-4 flex-grow`}>{region.intro}</p>
                <p className={`${type.label} !text-slate-400 normal-case tracking-[0.04em]`}>{region.cities}</p>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};
