import { Link } from 'react-router-dom';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { PageSEO } from '../components/seo/PageSEO';
import { useLanguage } from '../i18n/LanguageContext';
import { useLocalizedPath } from '../i18n/routing';
import { type } from '../styles/typography';

/**
 * Catch-all page for URLs that match no route. Rendered client-side; the static
 * bytes a crawler first sees come from dist/404.html (also noindex). Both keep
 * unknown paths out of the index instead of serving a 200 copy of the home page.
 */
export const NotFound = () => {
  const { lang } = useLanguage();
  const lp = useLocalizedPath();
  const zh = lang === 'zh';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PageSEO
        title={zh ? '页面未找到 | 河北善道环境科技有限公司' : 'Page not found | Hebei Shandao'}
        description={zh ? '抱歉，未找到您访问的页面。' : 'Sorry, we couldn’t find that page.'}
        path="/404"
        noindex
      />
      <Navigation />
      <main className="flex-grow pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center">
        <p className="text-6xl font-bold text-[#00A29A] mb-4">404</p>
        <p className={`${type.lead} mb-8`}>
          {zh ? '抱歉，未找到您访问的页面。' : 'Sorry, we couldn’t find that page.'}
        </p>
        <Link
          to={lp('/')}
          className={`inline-flex items-center gap-2 px-7 py-3.5 bg-[#00A29A] hover:bg-[#008f88] text-white ${type.btnStrong} rounded-xl transition-all shadow-[var(--shadow-brand)] hover:-translate-y-0.5`}
        >
          {zh ? '返回首页' : 'Back to home'}
        </Link>
      </main>
      <Footer />
    </div>
  );
};
