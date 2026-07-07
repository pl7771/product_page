import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { useLanguage } from '../i18n/LanguageContext';
import { useLocalizedPath } from '../i18n/routing';
import { PageSEO } from '../components/seo/PageSEO';
import { schemaGraph, buildBreadcrumb } from '../seo/structuredData';
import { industrySolutionIds } from '../data/industrySolutions';
import { type } from '../styles/typography';

export const SolutionsPage = () => {
  const { t, dict, lang } = useLanguage();
  const lp = useLocalizedPath();
  const sol = dict.solutions;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PageSEO
        title={`${sol.title} | ${lang === 'zh' ? '善道环境' : 'Hebei Shandao'}`}
        description={sol.subtitle}
        path="/solutions"
        keywords={t('meta.keywords')}
        jsonLd={schemaGraph([buildBreadcrumb(lang, [{ name: sol.title, path: '/solutions' }])])}
      />
      <Navigation />

      <header className="pt-32 pb-12 sm:pt-40 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 section-mesh">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#00A29A]"></span>
            <span className={`${type.labelBrand} normal-case tracking-[0.08em]`}>{sol.eyebrow}</span>
          </div>
          <h1 className={`${type.pageTitle} mb-5 max-w-3xl`}>{sol.title}</h1>
          <p className={`${type.lead} max-w-3xl`}>{sol.subtitle}</p>
        </div>
      </header>

      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {industrySolutionIds.map((id) => {
            const item = sol.items[id];
            if (!item) return null;
            return (
              <Link
                key={id}
                to={lp(`/solutions/${id}`)}
                className="group surface-card p-6 flex flex-col hover:border-[#00A29A]/40 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h2 className={type.cardTitle}>{item.name}</h2>
                  <ArrowUpRight className="w-5 h-5 text-[#00A29A] flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className={`${type.bodySm} mb-4 flex-grow`}>{item.intro}</p>
                <p className={`${type.label} !text-slate-400 normal-case tracking-[0.04em]`}>{item.scenarios}</p>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};
