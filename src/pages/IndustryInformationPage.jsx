import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { SectionHeading, SectionLead } from '../components/ui/SectionHeading';
import { OptimizedImage } from '../components/ui/OptimizedImage';
import { useLanguage } from '../i18n/LanguageContext';
import { useIndustryArticles } from '../hooks/useIndustryArticles';
import { type } from '../styles/typography';

export const IndustryInformationPage = () => {
  const { dict } = useLanguage();
  const { industry } = dict;
  const { articles } = useIndustryArticles();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <SectionHeading centered>{industry.title}</SectionHeading>
            <SectionLead centered>{industry.subtitle}</SectionLead>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/industry-information/${article.id}`}
                className="group flex flex-col overflow-hidden bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-[#00A29A]/30 transition-all duration-300"
              >
                {article.image && (
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                    <OptimizedImage
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      pictureClassName="block w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="flex flex-col flex-grow p-6 sm:p-8">
                <div className={`flex items-center gap-2 ${type.label} normal-case tracking-[0.04em] mb-4`}>
                  <Calendar className="w-3.5 h-3.5 text-[#00A29A]" />
                  <time dateTime={article.date}>{article.date}</time>
                  {article.category && (
                    <span className={`ml-auto px-2.5 py-0.5 rounded-full bg-[#00A29A]/10 text-[#00A29A] ${type.labelBrand} normal-case tracking-[0.08em]`}>
                      {article.category}
                    </span>
                  )}
                </div>

                <h2 className={`${type.cardTitle} mb-3 group-hover:text-[#00A29A] transition-colors`}>
                  {article.title}
                </h2>

                <p className={`${type.bodySm} flex-grow mb-6`}>{article.excerpt}</p>

                <span className={`inline-flex items-center gap-1.5 ${type.btn} text-slate-900 group-hover:text-[#00A29A] transition-colors`}>
                  {industry.readMore}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
