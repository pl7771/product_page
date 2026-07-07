import { Calendar, ArrowUpRight } from 'lucide-react';
import { OptimizedImage } from '../ui/OptimizedImage';
import { type } from '../../styles/typography';

export const IndustryArticleContent = ({
  article,
  contactCta,
  contactLabel,
  onContactClick,
  showContactCta = true,
  emptyBodyText = 'No body text yet.',
  untitledText = 'Untitled',
}) => {
  if (!article) return null;

  const paragraphs = String(article.body ?? '')
    .split('\n\n')
    .filter(Boolean);

  return (
    <article className="max-w-3xl mx-auto">
      {article.image && (
        <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100 shadow-lg mb-8">
          <OptimizedImage
            src={article.image}
            alt={article.title || ''}
            loading="eager"
            fetchPriority="high"
            pictureClassName="block w-full h-full"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className={`flex flex-wrap items-center gap-2 ${type.label} normal-case tracking-[0.04em] mb-4`}>
        <Calendar className="w-3.5 h-3.5 text-[#00A29A]" />
        {article.date ? (
          <time dateTime={article.date}>{article.date}</time>
        ) : (
          <span className="text-slate-400">—</span>
        )}
        {article.category && (
          <span
            className={`px-2.5 py-0.5 rounded-full bg-[#00A29A]/10 text-[#00A29A] ${type.labelBrand} normal-case tracking-[0.08em]`}
          >
            {article.category}
          </span>
        )}
      </div>

      <h1 className={`${type.pageTitle} mb-6`}>{article.title?.trim() || untitledText}</h1>

      {article.excerpt && (
        <p className={`${type.lead} text-slate-700 mb-10 pb-8 border-b border-slate-200`}>{article.excerpt}</p>
      )}

      {paragraphs.length > 0 ? (
        <div className={`${type.body} space-y-5`}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <p className={`${type.body} text-slate-400 italic`}>{emptyBodyText}</p>
      )}

      {showContactCta && contactCta && contactLabel && onContactClick && (
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
          <p className={`${type.cardTitleSm} mb-4`}>{contactCta}</p>
          <button
            type="button"
            onClick={onContactClick}
            className={`inline-flex items-center gap-2 px-6 py-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-xl transition-colors ${type.btnStrong}`}
          >
            {contactLabel}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </article>
  );
};
