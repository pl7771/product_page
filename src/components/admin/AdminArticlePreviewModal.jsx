import { useState } from 'react';
import { X } from 'lucide-react';
import { IndustryArticleContent } from '../industry/IndustryArticleContent';
import { useLanguage } from '../../i18n/LanguageContext';
import { type } from '../../styles/typography';

const PREVIEW_LANGS = [
  { key: 'en', labelKey: 'admin.contentLang.en' },
  { key: 'zh', labelKey: 'admin.contentLang.zh' },
];

export const AdminArticlePreviewModal = ({ article, initialLang = 'en', onClose }) => {
  const { t } = useLanguage();
  const [previewLang, setPreviewLang] = useState(initialLang);

  if (!article) return null;

  const fields = article[previewLang] || article.en || {};
  const previewArticle = {
    date: fields.date || article.en?.date || article.zh?.date || '',
    category: fields.category || '',
    title: fields.title || '',
    image: fields.image || article.en?.image || article.zh?.image || '',
    excerpt: fields.excerpt || '',
    body: fields.body || '',
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-100">
      <div className="shrink-0 bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 ${type.label} normal-case tracking-normal text-xs`}>
            {t('admin.preview.badge')}
          </span>
          <div className="flex gap-1.5">
            {PREVIEW_LANGS.map(({ key, labelKey }) => (
              <button
                key={key}
                type="button"
                onClick={() => setPreviewLang(key)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  previewLang === key
                    ? 'bg-[#00A29A] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t(labelKey)}
              </button>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className={`inline-flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:border-slate-300 bg-white ${type.btn}`}
        >
          <X className="w-4 h-4" /> {t('admin.actions.close')}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-white">
        <div className="pt-12 pb-20 px-4 sm:px-6 lg:px-12">
          <IndustryArticleContent
            article={previewArticle}
            contactCta={t('industry.contactCta')}
            contactLabel={t('nav.contact')}
            onContactClick={() => {}}
            emptyBodyText={t('admin.preview.noBody')}
            untitledText={t('admin.articles.untitled')}
            showContactCta
          />
        </div>
      </div>
    </div>
  );
};
