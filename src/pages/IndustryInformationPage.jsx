import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowUpRight, Search } from 'lucide-react';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { OptimizedImage } from '../components/ui/OptimizedImage';
import { useLanguage } from '../i18n/LanguageContext';
import { useLocalizedPath } from '../i18n/routing';
import { useIndustryArticles } from '../hooks/useIndustryArticles';
import { PageSEO } from '../components/seo/PageSEO';
import { ARTICLE_CATEGORIES, getCategoryIdFromLabel, getCategoryLabel } from '../constants/articleCategories';
import { type } from '../styles/typography';

const matchesSearch = (article, query) => {
  if (!query) return true;
  const haystack = [article.title, article.excerpt, article.body, article.category]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  return haystack.includes(query);
};

export const IndustryInformationPage = () => {
  const { dict, t, lang } = useLanguage();
  const lp = useLocalizedPath();
  const { industry } = dict;
  const { articles, loading } = useIndustryArticles();
  const [search, setSearch] = useState('');
  const [categoryId, setCategoryId] = useState('all');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const availableCategories = useMemo(() => {
    const ids = new Set();
    for (const article of articles) {
      const id = getCategoryIdFromLabel(article.category);
      if (id) ids.add(id);
    }
    return ARTICLE_CATEGORIES.filter((c) => ids.has(c.id));
  }, [articles]);

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();
    return articles.filter((article) => {
      const articleCategoryId = getCategoryIdFromLabel(article.category);
      if (categoryId !== 'all' && articleCategoryId !== categoryId) return false;
      return matchesSearch(article, query);
    });
  }, [articles, search, categoryId]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PageSEO
        title={t('seo.industry.title')}
        description={t('seo.industry.description')}
        path="/industry-information"
        keywords={t('meta.keywords')}
      />
      <Navigation />

      <header className="pt-32 pb-12 sm:pt-40 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 section-mesh">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#00A29A]"></span>
            <span className={`${type.labelBrand} normal-case tracking-[0.08em]`}>{t('nav.industry')}</span>
          </div>
          <h1 className={`${type.pageTitle} mb-5 max-w-3xl`}>{industry.title}</h1>
          <p className={`${type.lead} max-w-3xl`}>{industry.subtitle}</p>
        </div>
      </header>

      <main className="flex-grow pb-20 px-4 sm:px-6 lg:px-12 pt-10 sm:pt-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-12 space-y-4">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={industry.filter.searchPlaceholder}
                className={`w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A] ${type.body}`}
              />
            </div>

            {availableCategories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setCategoryId('all')}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    categoryId === 'all'
                      ? 'bg-[#00A29A] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {industry.filter.allCategories}
                </button>
                {availableCategories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setCategoryId(category.id)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      categoryId === category.id
                        ? 'bg-[#00A29A] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {getCategoryLabel(category.id, lang)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {loading ? (
            <div className="flex justify-center py-16">
              <div className="w-8 h-8 border-2 border-[#00A29A] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filteredArticles.length === 0 ? (
            <p className={`${type.lead} text-center text-slate-500 py-12`}>{industry.filter.noResults}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={lp(`/industry-information/${article.id}`)}
                  className="group flex flex-col overflow-hidden surface-card hover:shadow-lg hover:border-[#00A29A]/35 transition-all duration-300"
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
                        <span
                          className={`ml-auto px-2.5 py-0.5 rounded-full bg-[#00A29A]/10 text-[#00A29A] ${type.labelBrand} normal-case tracking-[0.08em]`}
                        >
                          {article.category}
                        </span>
                      )}
                    </div>

                    <h2 className={`${type.cardTitle} mb-3 group-hover:text-[#00A29A] transition-colors`}>
                      {article.title}
                    </h2>

                    <p className={`${type.bodySm} flex-grow mb-6`}>{article.excerpt}</p>

                    <span
                      className={`inline-flex items-center gap-1.5 ${type.btn} text-slate-900 group-hover:text-[#00A29A] transition-colors`}
                    >
                      {industry.readMore}
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};
