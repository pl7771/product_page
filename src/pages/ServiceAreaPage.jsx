import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { useLanguage } from '../i18n/LanguageContext';
import { useLocalizedPath } from '../i18n/routing';
import { useLocalizedProjects } from '../hooks/useLocalizedData';
import { PageSEO } from '../components/seo/PageSEO';
import { formatSeoText } from '../seo/siteConfig';
import { schemaGraph, buildBreadcrumb, buildServiceAreaSchema } from '../seo/structuredData';
import { serviceAreaRegions } from '../data/serviceAreas';
import { type } from '../styles/typography';

export const ServiceAreaPage = () => {
  const { regionId } = useParams();
  const { t, dict, lang } = useLanguage();
  const lp = useLocalizedPath();
  const projectCategories = useLocalizedProjects();
  const sa = dict.serviceAreas;
  const region = sa?.regions?.[regionId];
  const config = serviceAreaRegions.find((r) => r.id === regionId);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [regionId]);

  if (!region) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <PageSEO title={t('serviceAreas.title')} description={sa?.subtitle} path={`/service-areas/${regionId}`} noindex />
        <Navigation />
        <main className="flex-grow pt-32 pb-20 px-4 text-center">
          <p className={type.lead}>{t('serviceAreas.notFound')}</p>
        </main>
        <Footer />
      </div>
    );
  }

  const path = `/service-areas/${regionId}`;
  const relatedCategories = (config?.categories || [])
    .map((id) => projectCategories.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PageSEO
        title={formatSeoText(sa.metaTitleTpl, { region: region.name })}
        description={formatSeoText(sa.metaDescTpl, { region: region.name, cities: region.cities })}
        path={path}
        keywords={t('meta.keywords')}
        jsonLd={schemaGraph([
          buildBreadcrumb(lang, [
            { name: sa.title, path: '/service-areas' },
            { name: region.name, path },
          ]),
          buildServiceAreaSchema(lang, {
            name: region.h1,
            description: region.intro,
            path,
            areaName: region.name,
          }),
        ])}
      />
      <Navigation />

      <header className="pt-32 pb-12 sm:pt-40 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 section-mesh">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#00A29A]"></span>
            <span className={`${type.labelBrand} normal-case tracking-[0.08em]`}>{t('serviceAreas.eyebrow')}</span>
          </div>
          <h1 className={`${type.pageTitle} mb-5 max-w-3xl`}>{region.h1}</h1>
          <p className={`${type.lead} max-w-3xl mb-5`}>{region.intro}</p>
          <p className={`${type.bodySm}`}>
            <span className="text-slate-400">{t('serviceAreas.citiesLabel')}: </span>
            <span className="text-slate-600">{region.cities}</span>
          </p>
        </div>
      </header>

      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className={`${type.sectionTitle} !text-slate-900 mb-8`}>{t('serviceAreas.applicationsLabel')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {region.points.map((point) => (
              <div key={point.t} className="surface-card p-6 flex gap-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#00A29A]/10 text-[#00A29A] flex items-center justify-center">
                  <Check className="w-4.5 h-4.5" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className={`${type.cardTitleSm} mb-1.5`}>{point.t}</h3>
                  <p className={type.bodySm}>{point.d}</p>
                </div>
              </div>
            ))}
          </div>

          {relatedCategories.length > 0 && (
            <div className="mb-16">
              <h2 className={`${type.sectionTitle} !text-slate-900 mb-8`}>{t('serviceAreas.relatedLabel')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={lp(`/projects/${cat.id}`)}
                    className="group surface-card p-5 flex items-center justify-between gap-3 hover:border-[#00A29A]/40 transition-colors"
                  >
                    <span className={`${type.cardTitleSm} pr-2`}>{cat.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#00A29A] flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="surface-card p-6 sm:p-8 bg-slate-50/80">
            <h2 className={`${type.cardTitle} mb-2`}>{t('serviceAreas.coverageLabel')}</h2>
            <p className={`${type.body} mb-6`}>{region.coverage}</p>
            <Link
              to={lp('/#contact')}
              className={`inline-flex items-center gap-2 px-7 py-3.5 bg-[#00A29A] hover:bg-[#008f88] text-white ${type.btnStrong} rounded-xl transition-all shadow-[var(--shadow-brand)] hover:-translate-y-0.5`}
            >
              {t('serviceAreas.contactCta')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
