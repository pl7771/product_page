import { Search, SlidersHorizontal, X } from 'lucide-react';
import { ARTICLE_CATEGORIES, getCategoryLabel } from '../../constants/articleCategories';
import { defaultArticleFilters, hasActiveArticleFilters } from '../../utils/adminArticleFilters';
import { useLanguage } from '../../i18n/LanguageContext';
import { type } from '../../styles/typography';

const selectClass = `w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A] ${type.body}`;

export const AdminArticlesToolbar = ({ filters, onChange, onReset }) => {
  const { t, lang } = useLanguage();
  const f = t('admin.articles.filters');

  const set = (patch) => onChange({ ...filters, ...patch });

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 mb-6 space-y-4">
      <div className="flex items-center gap-2 text-slate-700">
        <SlidersHorizontal className="w-4 h-4 text-[#00A29A]" />
        <span className={type.cardTitleSm}>{f.title}</span>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <input
          type="search"
          value={filters.search}
          onChange={(e) => set({ search: e.target.value })}
          placeholder={f.searchPlaceholder}
          className={`w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A] ${type.body}`}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <label className="block">
          <span className={`block ${type.label} normal-case tracking-normal text-slate-600 mb-1.5`}>{f.category}</span>
          <select
            value={filters.categoryId}
            onChange={(e) => set({ categoryId: e.target.value })}
            className={selectClass}
          >
            <option value="all">{f.allCategories}</option>
            {ARTICLE_CATEGORIES.map((category) => (
              <option key={category.id} value={category.id}>
                {getCategoryLabel(category.id, lang)}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className={`block ${type.label} normal-case tracking-normal text-slate-600 mb-1.5`}>{f.status}</span>
          <select
            value={filters.status}
            onChange={(e) => set({ status: e.target.value })}
            className={selectClass}
          >
            <option value="all">{f.allStatuses}</option>
            <option value="draft">{t('admin.status.draft')}</option>
            <option value="published">{t('admin.status.published')}</option>
            <option value="hidden">{t('admin.status.hidden')}</option>
            <option value="archived">{t('admin.status.archived')}</option>
          </select>
        </label>

        <label className="block">
          <span className={`block ${type.label} normal-case tracking-normal text-slate-600 mb-1.5`}>{f.dateFrom}</span>
          <input
            type="date"
            value={filters.dateFrom}
            onChange={(e) => set({ dateFrom: e.target.value })}
            className={selectClass}
          />
        </label>

        <label className="block">
          <span className={`block ${type.label} normal-case tracking-normal text-slate-600 mb-1.5`}>{f.dateTo}</span>
          <input
            type="date"
            value={filters.dateTo}
            onChange={(e) => set({ dateTo: e.target.value })}
            className={selectClass}
          />
        </label>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end gap-3">
        <label className="block flex-1">
          <span className={`block ${type.label} normal-case tracking-normal text-slate-600 mb-1.5`}>{f.sortBy}</span>
          <select
            value={filters.sortBy}
            onChange={(e) => set({ sortBy: e.target.value })}
            className={selectClass}
          >
            <option value="date-desc">{f.sortDateDesc}</option>
            <option value="date-asc">{f.sortDateAsc}</option>
            <option value="category-asc">{f.sortCategoryAsc}</option>
            <option value="category-desc">{f.sortCategoryDesc}</option>
            <option value="status-asc">{f.sortStatusAsc}</option>
            <option value="status-desc">{f.sortStatusDesc}</option>
          </select>
        </label>

        {hasActiveArticleFilters(filters) && (
          <button
            type="button"
            onClick={() => onReset(defaultArticleFilters())}
            className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg hover:border-[#00A29A]/40 text-slate-600 ${type.btn}`}
          >
            <X className="w-4 h-4" /> {f.reset}
          </button>
        )}
      </div>
    </div>
  );
};
