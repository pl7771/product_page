import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, LogOut, Pencil, Trash2, Eye, EyeOff, RotateCcw, Archive, ScanEye } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { AdminConfirmDialog } from '../../components/admin/AdminConfirmDialog';
import { AdminArticlePreviewModal } from '../../components/admin/AdminArticlePreviewModal';
import { AdminLanguageBar } from '../../components/admin/AdminLanguageBar';
import {
  loadCustomArticles,
  archiveCustomArticle,
  restoreCustomArticle,
  permanentlyDeleteCustomArticle,
  setCustomArticleVisibility,
} from '../../utils/industryArticles';
import { type } from '../../styles/typography';

const btnClass = `inline-flex items-center gap-1.5 px-3 py-2 border rounded-lg ${type.btn}`;

const StatusBadge = ({ article }) => {
  const { t } = useLanguage();

  if (article.status === 'archived') {
    return <span className="px-2 py-0.5 rounded-full text-xs bg-slate-200 text-slate-600">{t('admin.status.archived')}</span>;
  }
  if (article.status === 'published' && article.visible === false) {
    return <span className="px-2 py-0.5 rounded-full text-xs bg-slate-200 text-slate-600">{t('admin.status.hidden')}</span>;
  }
  if (article.status === 'published') {
    return <span className="px-2 py-0.5 rounded-full text-xs bg-[#00A29A]/10 text-[#00A29A]">{t('admin.status.published')}</span>;
  }
  return <span className="px-2 py-0.5 rounded-full text-xs bg-amber-100 text-amber-700">{t('admin.status.draft')}</span>;
};

const ArticleMeta = ({ article }) => {
  const { t } = useLanguage();

  return (
    <div className="flex-1 min-w-0">
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <StatusBadge article={article} />
        <span className={type.bodySm}>{article.en?.date || article.zh?.date}</span>
      </div>
      <p className={`${type.cardTitleSm} truncate`}>
        {article.en?.title || article.zh?.title || t('admin.articles.untitled')}
      </p>
    </div>
  );
};

export const AdminArticlesPage = () => {
  const { logout } = useAdminAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [articles, setArticles] = useState(loadCustomArticles);
  const [dialog, setDialog] = useState(null);
  const [previewArticle, setPreviewArticle] = useState(null);

  const refresh = () => setArticles(loadCustomArticles());

  useEffect(() => {
    window.addEventListener('industry-articles-updated', refresh);
    return () => window.removeEventListener('industry-articles-updated', refresh);
  }, []);

  const activeArticles = useMemo(
    () => articles.filter((article) => article.status !== 'archived'),
    [articles],
  );
  const archivedArticles = useMemo(
    () => articles.filter((article) => article.status === 'archived'),
    [articles],
  );

  const articleTitle = (id) => {
    const article = articles.find((item) => item.id === id);
    return article?.en?.title || article?.zh?.title || t('admin.articles.thisArticle');
  };

  const handleDialogConfirm = () => {
    if (!dialog) return;

    if (dialog.type === 'archive') {
      archiveCustomArticle(dialog.articleId);
    } else if (dialog.type === 'permanent') {
      permanentlyDeleteCustomArticle(dialog.articleId);
    }

    setDialog(null);
    refresh();
  };

  const toggleVisibility = (article) => {
    setCustomArticleVisibility(article.id, article.visible === false);
    refresh();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminConfirmDialog
        open={Boolean(dialog)}
        title={dialog?.type === 'permanent' ? t('admin.dialog.permanentTitle') : t('admin.dialog.archiveTitle')}
        message={
          dialog?.type === 'permanent'
            ? t('admin.dialog.permanentMessage', { title: articleTitle(dialog?.articleId) })
            : t('admin.dialog.archiveMessage', { title: articleTitle(dialog?.articleId) })
        }
        confirmLabel={
          dialog?.type === 'permanent' ? t('admin.dialog.deletePermanently') : t('admin.dialog.moveToArchive')
        }
        cancelLabel={t('admin.actions.cancel')}
        variant={dialog?.type === 'permanent' ? 'danger' : 'default'}
        onConfirm={handleDialogConfirm}
        onCancel={() => setDialog(null)}
      />

      {previewArticle && (
        <AdminArticlePreviewModal article={previewArticle} onClose={() => setPreviewArticle(null)} />
      )}

      <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-4 space-y-3">
        <AdminLanguageBar />
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className={type.cardTitle}>{t('admin.articles.title')}</h1>
            <p className={type.bodySm}>{t('admin.articles.subtitle')}</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/admin/articles/new"
              className={`inline-flex items-center gap-2 px-4 py-2 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-lg ${type.btnStrong}`}
            >
              <Plus className="w-4 h-4" /> {t('admin.articles.newArticle')}
            </Link>
            <button
              type="button"
              onClick={() => {
                logout();
                navigate('/admin/login');
              }}
              className={`inline-flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:border-slate-300 ${type.btn}`}
            >
              <LogOut className="w-4 h-4" /> {t('admin.articles.logout')}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {activeArticles.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
            <p className={type.lead}>{t('admin.articles.empty')}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {activeArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <ArticleMeta article={article} />
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  {article.status === 'published' && (
                    <button
                      type="button"
                      onClick={() => toggleVisibility(article)}
                      className={`${btnClass} border-slate-200 hover:border-[#00A29A]/40`}
                      title={
                        article.visible === false ? t('admin.visibility.showTitle') : t('admin.visibility.hideTitle')
                      }
                    >
                      {article.visible === false ? (
                        <>
                          <Eye className="w-4 h-4" /> {t('admin.actions.unhide')}
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-4 h-4" /> {t('admin.actions.hide')}
                        </>
                      )}
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setPreviewArticle(article)}
                    className={`${btnClass} border-slate-200 hover:border-[#00A29A]/40`}
                  >
                    <ScanEye className="w-4 h-4" /> {t('admin.actions.preview')}
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate(`/admin/articles/${article.id}`)}
                    className={`${btnClass} border-slate-200 hover:border-[#00A29A]/40`}
                  >
                    <Pencil className="w-4 h-4" /> {t('admin.actions.edit')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setDialog({ type: 'archive', articleId: article.id })}
                    className={`${btnClass} border-red-200 text-red-600 hover:bg-red-50`}
                  >
                    <Trash2 className="w-4 h-4" /> {t('admin.actions.delete')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {archivedArticles.length > 0 && (
          <section className="mt-12">
            <div className="flex items-center gap-2 mb-4">
              <Archive className="w-5 h-5 text-slate-500" />
              <h2 className={type.cardTitleSm}>{t('admin.archive.title')}</h2>
            </div>
            <div className="space-y-3">
              {archivedArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 opacity-90"
                >
                  <ArticleMeta article={article} />
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setPreviewArticle(article)}
                      className={`${btnClass} border-slate-200 hover:border-[#00A29A]/40`}
                    >
                      <ScanEye className="w-4 h-4" /> {t('admin.actions.preview')}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        restoreCustomArticle(article.id);
                        refresh();
                      }}
                      className={`${btnClass} border-slate-200 hover:border-[#00A29A]/40`}
                    >
                      <RotateCcw className="w-4 h-4" /> {t('admin.actions.restore')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setDialog({ type: 'permanent', articleId: article.id })}
                      className={`${btnClass} border-red-200 text-red-600 hover:bg-red-50`}
                    >
                      <Trash2 className="w-4 h-4" /> {t('admin.actions.deletePermanently')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <p className={`${type.bodySm} mt-8 text-slate-500`}>
          {t('admin.articles.footerBefore')}{' '}
          <Link to="/industry-information" className="text-[#00A29A] hover:underline">
            /industry-information
          </Link>
          {t('admin.articles.footerAfter')}
        </p>
      </main>
    </div>
  );
};
