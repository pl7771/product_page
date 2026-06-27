import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { IndustryArticleContent } from '../components/industry/IndustryArticleContent';
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
        <IndustryArticleContent
          article={article}
          contactCta={t('industry.contactCta')}
          contactLabel={t('nav.contact')}
          onContactClick={() => {
            navigate('/');
            window.setTimeout(() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 350);
          }}
        />
      </main>

      <Footer />
    </div>
  );
};
