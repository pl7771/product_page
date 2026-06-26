import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { OptimizedImage } from '../components/ui/OptimizedImage';
import { useLanguage } from '../i18n/LanguageContext';
import { useIndustryArticles } from '../hooks/useIndustryArticles';
import { type } from '../styles/typography';

export const IndustryArticlePage = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { getArticle } = useIndustryArticles();

  const article = getArticle(articleId);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [articleId]);

  const backButton = (
    <button
      type="button"
      onClick={() => navigate('/industry-information')}
      className={`group flex items-center gap-2 px-3 h-10 text-slate-700 hover:text-[#00A29A] transition-colors bg-white/80 hover:bg-white border border-slate-200 hover:border-[#00A29A]/50 rounded-md shadow-sm ${type.btn}`}
    >
      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
      <span>{t('industry.backToList')}</span>
    </button>
  );

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation leftSlot={backButton} />
        <main className="flex-grow pt-32 pb-20 px-4 text-center">
          <p className={type.lead}>{t('industry.notFound')}</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation leftSlot={backButton} />

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-12">
        <article className="max-w-3xl mx-auto">
          <div className={`flex flex-wrap items-center gap-2 ${type.label} normal-case tracking-[0.04em] mb-6`}>
            <Calendar className="w-3.5 h-3.5 text-[#00A29A]" />
            <time dateTime={article.date}>{article.date}</time>
            {article.category && (
              <span className={`px-2.5 py-0.5 rounded-full bg-[#00A29A]/10 text-[#00A29A] ${type.labelBrand} normal-case tracking-[0.08em]`}>
                {article.category}
              </span>
            )}
          </div>

          <h1 className={`${type.pageTitle} mb-8`}>{article.title}</h1>

          {(article.image || article.excerpt) && (
            <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8 mb-10">
              {article.image && (
                <div className="w-full sm:w-40 md:w-44 shrink-0 aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shadow-sm">
                  <OptimizedImage
                    src={article.image}
                    alt={article.title}
                    loading="eager"
                    pictureClassName="block w-full h-full"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {article.excerpt && (
                <p className={`${type.lead} text-slate-700 flex-1 min-w-0 sm:pt-1`}>{article.excerpt}</p>
              )}
            </div>
          )}

          <div className={`${type.body} space-y-5`}>
            {article.body.split('\n\n').map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <p className={`${type.cardTitleSm} mb-4`}>{t('industry.contactCta')}</p>
            <Link
              to="/#contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                window.setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 350);
              }}
              className={`inline-flex items-center gap-2 px-6 py-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-xl transition-colors ${type.btnStrong}`}
            >
              {t('nav.contact')}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};
