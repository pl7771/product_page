import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, LogOut, Pencil, Trash2, Eye, EyeOff, RotateCcw, Archive, ScanEye, Upload, Undo2 } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { AdminConfirmDialog } from '../../components/admin/AdminConfirmDialog';
import { AdminArticlePreviewModal } from '../../components/admin/AdminArticlePreviewModal';
import { AdminLanguageBar } from '../../components/admin/AdminLanguageBar';
import { AdminArticlesToolbar } from '../../components/admin/AdminArticlesToolbar';
import { PageSEO } from '../../components/seo/PageSEO';
import {
  archiveArticle,
  fetchAllArticles,
  permanentlyDeleteArticle,
  restoreArticle,
  setArticleVisibility,
  unpublishArticle,
  updateArticle,
} from '../../api/articles';
import { isArticleComplete } from '../../utils/industryArticles';
import { getArticleUpdateDay } from '../../utils/articleDates';
import {
  defaultArticleFilters,
  filterAndSortArticles,
  hasActiveArticleFilters,
} from '../../utils/adminArticleFilters';
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
  const updatedDay = getArticleUpdateDay(article.updatedAt, article.createdAt);

  return (
    <div className="flex-1 min-w-0">
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <StatusBadge article={article} />
        <span className={type.bodySm}>{article.en?.date || article.zh?.date}</span>
        {updatedDay && (
          <span className={`${type.bodySm} text-slate-500`}>
            {t('admin.articles.lastUpdated')}: {updatedDay}
          </span>
        )}
      </div>
      <p className={`${type.cardTitleSm} truncate`}>
        {article.en?.title || article.zh?.title || t('admin.articles.untitled')}
      </p>
    </div>
  );
};

export const AdminArticlesPage = () => {
  const { logout } = useAdminAuth();
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [actionError, setActionError] = useState('');
  const [dialog, setDialog] = useState(null);
  const [previewArticle, setPreviewArticle] = useState(null);
  const [filters, setFilters] = useState(defaultArticleFilters);

  const refresh = async () => {
    setLoadError(false);
    try {
      const data = await fetchAllArticles();
      setArticles(data);
    } catch {
      setLoadError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const filteredActive = useMemo(() => {
    if (filters.status === 'archived') return [];
    const base = articles.filter((article) => article.status !== 'archived');
    return filterAndSortArticles(base, filters, lang);
  }, [articles, filters, lang]);

  const filteredArchived = useMemo(() => {
    if (filters.status !== 'all' && filters.status !== 'archived') return [];
    const base = articles.filter((article) => article.status === 'archived');
    return filterAndSortArticles(base, { ...filters, status: 'all' }, lang);
  }, [articles, filters, lang]);

  const showActiveList = filters.status !== 'archived';
  const showArchiveSection = filters.status === 'all' || filters.status === 'archived';
  const listIsEmpty =
    (showActiveList ? filteredActive.length === 0 : true) &&
    (showArchiveSection ? filteredArchived.length === 0 : true);
  const filtersActive = hasActiveArticleFilters(filters);

  const articleTitle = (id) => {
    const article = articles.find((item) => item.id === id);
    return article?.en?.title || article?.zh?.title || t('admin.articles.thisArticle');
  };

  const runAction = async (action) => {
    setActionError('');
    try {
      await action();
      await refresh();
    } catch {
      setActionError(t('admin.errors.network'));
    }
  };

  const handlePublish = (article) => {
    if (!isArticleComplete(article)) {
      setDialog({ type: 'incomplete' });
      return;
    }
    runAction(() => updateArticle(article.id, { ...article, status: 'published' }));
  };

  const handleDeleteClick = (article) => {
    if (article.status === 'published') {
      setDialog({ type: 'publishedBlock' });
      return;
    }
    setDialog({ type: 'archive', articleId: article.id });
  };

  const handleDialogConfirm = () => {
    if (!dialog) return;

    if (dialog.type === 'archive') {
      runAction(() => archiveArticle(dialog.articleId)).then(() => setDialog(null));
      return;
    }

    if (dialog.type === 'permanent') {
      runAction(() => permanentlyDeleteArticle(dialog.articleId)).then(() => setDialog(null));
      return;
    }

    setDialog(null);
  };

  const dialogProps = (() => {
    if (!dialog) return null;

    if (dialog.type === 'incomplete') {
      return {
        title: t('admin.dialog.incompletePublishTitle'),
        message: t('admin.dialog.incompletePublishMessage'),
        confirmLabel: t('admin.actions.ok'),
        alertOnly: true,
      };
    }

    if (dialog.type === 'publishedBlock') {
      return {
        title: t('admin.dialog.publishedDeleteTitle'),
        message: t('admin.dialog.publishedDeleteMessage'),
        confirmLabel: t('admin.actions.ok'),
        alertOnly: true,
      };
    }

    if (dialog.type === 'permanent') {
      return {
        title: t('admin.dialog.permanentTitle'),
        message: t('admin.dialog.permanentMessage', { title: articleTitle(dialog.articleId) }),
        confirmLabel: t('admin.dialog.deletePermanently'),
        variant: 'danger',
      };
    }

    return {
      title: t('admin.dialog.archiveTitle'),
      message: t('admin.dialog.archiveMessage', { title: articleTitle(dialog.articleId) }),
      confirmLabel: t('admin.dialog.moveToArchive'),
    };
  })();

  const toggleVisibility = (article) => {
    runAction(() => setArticleVisibility(article.id, article.visible === false));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <PageSEO title={t('seo.admin.title')} description={t('seo.admin.description')} path="/admin/articles" noindex />
      <AdminConfirmDialog
        open={Boolean(dialog)}
        title={dialogProps?.title}
        message={dialogProps?.message}
        confirmLabel={dialogProps?.confirmLabel}
        cancelLabel={t('admin.actions.cancel')}
        variant={dialogProps?.variant}
        alertOnly={dialogProps?.alertOnly}
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
        {loading && (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-2 border-[#00A29A] border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {!loading && loadError && (
          <div className="bg-white border border-red-200 rounded-2xl p-8 text-center">
            <p className={type.lead + ' text-red-600'}>{t('admin.errors.network')}</p>
            <button
              type="button"
              onClick={refresh}
              className={`mt-4 px-4 py-2 border border-slate-200 rounded-lg hover:border-[#00A29A]/40 ${type.btn}`}
            >
              {t('admin.actions.retry')}
            </button>
          </div>
        )}

        {!loading && !loadError && actionError && (
          <p className={`${type.bodySm} text-red-600 mb-4`}>{actionError}</p>
        )}

        {!loading && !loadError && (
          <AdminArticlesToolbar filters={filters} onChange={setFilters} onReset={setFilters} />
        )}

        {!loading && !loadError && listIsEmpty ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
            <p className={type.lead}>
              {articles.length === 0 && !filtersActive
                ? t('admin.articles.empty')
                : t('admin.articles.noFilterResults')}
            </p>
          </div>
        ) : (
          !loading &&
          !loadError &&
          showActiveList &&
          filteredActive.length > 0 && (
            <div className="space-y-3">
              {filteredActive.map((article) => {
                const canPublish = isArticleComplete(article);

                return (
                  <div
                    key={article.id}
                    className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <ArticleMeta article={article} />
                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      {article.status !== 'published' && (
                        <button
                          type="button"
                          onClick={() => handlePublish(article)}
                          title={
                            canPublish ? t('admin.edit.publishTitle') : t('admin.edit.publishDisabledTitle')
                          }
                          className={`${btnClass} ${
                            canPublish
                              ? 'border-[#00A29A]/40 text-[#00A29A] hover:bg-[#00A29A]/5'
                              : 'border-slate-200 text-slate-400'
                          }`}
                        >
                          <Upload className="w-4 h-4" /> {t('admin.actions.publish')}
                        </button>
                      )}
                      {article.status === 'published' && (
                        <button
                          type="button"
                          onClick={() => runAction(() => unpublishArticle(article.id))}
                          className={`${btnClass} border-amber-200 text-amber-700 hover:bg-amber-50`}
                          title={t('admin.actions.unpublish')}
                        >
                          <Undo2 className="w-4 h-4" /> {t('admin.actions.unpublish')}
                        </button>
                      )}
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
                        onClick={() => handleDeleteClick(article)}
                        className={`${btnClass} border-red-200 text-red-600 hover:bg-red-50`}
                      >
                        <Trash2 className="w-4 h-4" /> {t('admin.actions.delete')}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        )}

        {!loading && !loadError && showArchiveSection && filteredArchived.length > 0 && (
          <section className={showActiveList && filteredActive.length > 0 ? 'mt-12' : ''}>
            <div className="flex items-center gap-2 mb-4">
              <Archive className="w-5 h-5 text-slate-500" />
              <h2 className={type.cardTitleSm}>{t('admin.archive.title')}</h2>
            </div>
            <div className="space-y-3">
              {filteredArchived.map((article) => (
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
                      onClick={() => runAction(() => restoreArticle(article.id))}
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
