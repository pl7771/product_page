import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, LogOut, Pencil, Trash2, Eye, EyeOff, RotateCcw, Archive } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { AdminConfirmDialog } from '../../components/admin/AdminConfirmDialog';
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
  if (article.status === 'archived') {
    return <span className="px-2 py-0.5 rounded-full text-xs bg-slate-200 text-slate-600">archived</span>;
  }
  if (article.status === 'published' && article.visible === false) {
    return <span className="px-2 py-0.5 rounded-full text-xs bg-slate-200 text-slate-600">hidden</span>;
  }
  if (article.status === 'published') {
    return <span className="px-2 py-0.5 rounded-full text-xs bg-[#00A29A]/10 text-[#00A29A]">published</span>;
  }
  return <span className="px-2 py-0.5 rounded-full text-xs bg-amber-100 text-amber-700">draft</span>;
};

const ArticleMeta = ({ article }) => (
  <div className="flex-1 min-w-0">
    <div className="flex flex-wrap items-center gap-2 mb-1">
      <StatusBadge article={article} />
      <span className={type.bodySm}>{article.en?.date || article.zh?.date}</span>
    </div>
    <p className={`${type.cardTitleSm} truncate`}>{article.en?.title || article.zh?.title || 'Untitled'}</p>
  </div>
);

export const AdminArticlesPage = () => {
  const { logout } = useAdminAuth();
  const navigate = useNavigate();
  const [articles, setArticles] = useState(loadCustomArticles);
  const [dialog, setDialog] = useState(null);

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
    return article?.en?.title || article?.zh?.title || 'this article';
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
        title={dialog?.type === 'permanent' ? 'Delete permanently?' : 'Move to archive?'}
        message={
          dialog?.type === 'permanent'
            ? `"${articleTitle(dialog?.articleId)}" will be removed forever. This cannot be undone.`
            : `"${articleTitle(dialog?.articleId)}" will be removed from the public site and moved to the archive. You can restore it later.`
        }
        confirmLabel={dialog?.type === 'permanent' ? 'Delete permanently' : 'Move to archive'}
        cancelLabel="Cancel"
        variant={dialog?.type === 'permanent' ? 'danger' : 'default'}
        onConfirm={handleDialogConfirm}
        onCancel={() => setDialog(null)}
      />

      <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <h1 className={type.cardTitle}>Articles</h1>
          <p className={type.bodySm}>Custom industry articles (stored in this browser)</p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/admin/articles/new"
            className={`inline-flex items-center gap-2 px-4 py-2 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-lg ${type.btnStrong}`}
          >
            <Plus className="w-4 h-4" /> New article
          </Link>
          <button
            type="button"
            onClick={() => {
              logout();
              navigate('/admin/login');
            }}
            className={`inline-flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:border-slate-300 ${type.btn}`}
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {activeArticles.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
            <p className={type.lead}>
              No custom articles yet. Built-in articles from the site code are still shown on the public page.
            </p>
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
                      title={article.visible === false ? 'Show on public site' : 'Hide from public site'}
                    >
                      {article.visible === false ? (
                        <>
                          <Eye className="w-4 h-4" /> Unhide
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-4 h-4" /> Hide
                        </>
                      )}
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => navigate(`/admin/articles/${article.id}`)}
                    className={`${btnClass} border-slate-200 hover:border-[#00A29A]/40`}
                  >
                    <Pencil className="w-4 h-4" /> Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => setDialog({ type: 'archive', articleId: article.id })}
                    className={`${btnClass} border-red-200 text-red-600 hover:bg-red-50`}
                  >
                    <Trash2 className="w-4 h-4" /> Delete
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
              <h2 className={type.cardTitleSm}>Archive</h2>
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
                      onClick={() => {
                        restoreCustomArticle(article.id);
                        refresh();
                      }}
                      className={`${btnClass} border-slate-200 hover:border-[#00A29A]/40`}
                    >
                      <RotateCcw className="w-4 h-4" /> Restore
                    </button>
                    <button
                      type="button"
                      onClick={() => setDialog({ type: 'permanent', articleId: article.id })}
                      className={`${btnClass} border-red-200 text-red-600 hover:bg-red-50`}
                    >
                      <Trash2 className="w-4 h-4" /> Delete permanently
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <p className={`${type.bodySm} mt-8 text-slate-500`}>
          Published and visible articles appear on{' '}
          <Link to="/industry-information" className="text-[#00A29A] hover:underline">
            /industry-information
          </Link>
          . Hidden and archived articles are not shown on the public site.
        </p>
      </main>
    </div>
  );
};
