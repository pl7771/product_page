import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ImagePlus, Save, ScanEye, Upload, X } from 'lucide-react';
import { AdminConfirmDialog } from '../../components/admin/AdminConfirmDialog';
import { AdminArticlePreviewModal } from '../../components/admin/AdminArticlePreviewModal';
import { AdminLanguageBar } from '../../components/admin/AdminLanguageBar';
import { PageSEO } from '../../components/seo/PageSEO';
import {
  ARTICLE_CATEGORIES,
  getArticleCategoryId,
  getCategoryLabel,
} from '../../constants/articleCategories';
import { createArticle, fetchArticle, updateArticle } from '../../api/articles';
import {
  createEmptyArticle,
  isArticleComplete,
} from '../../utils/industryArticles';
import { useLanguage } from '../../i18n/LanguageContext';
import { type } from '../../styles/typography';
import { getArticleUpdateDay } from '../../utils/articleDates';
import { optimizeArticleImage } from '../../utils/optimizeArticleImage';

const CONTENT_LANGS = [
  { key: 'en', labelKey: 'admin.contentLang.en' },
  { key: 'zh', labelKey: 'admin.contentLang.zh' },
];

const Field = ({ label, children }) => (
  <div className="min-w-0 w-full">
    <label className={`block ${type.label} normal-case tracking-normal text-slate-700 mb-2`}>{label}</label>
    {children}
  </div>
);

const inputClass =
  'w-full min-w-0 max-w-full box-border border border-slate-200 rounded-lg px-3 sm:px-4 py-3 text-sm focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A]';

const MAX_INPUT_IMAGE_BYTES = 20 * 1024 * 1024;

export const AdminArticleEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const isNew = id === 'new';

  const [article, setArticle] = useState(() => (isNew ? createEmptyArticle() : null));
  const [activeLang, setActiveLang] = useState('en');
  const [publishError, setPublishError] = useState('');
  const [draftSavedOpen, setDraftSavedOpen] = useState(false);
  const [pendingEditId, setPendingEditId] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [loading, setLoading] = useState(!isNew);
  const [loadError, setLoadError] = useState(false);
  const [saving, setSaving] = useState(false);
  const [optimizingImage, setOptimizingImage] = useState(false);
  const [savedToServer, setSavedToServer] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isNew) {
      setArticle(createEmptyArticle());
      setLoading(false);
      setLoadError(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setLoadError(false);

    fetchArticle(id)
      .then((found) => {
        if (!cancelled) setArticle(found);
      })
      .catch(() => {
        if (!cancelled) {
          setArticle(null);
          setLoadError(true);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id, isNew]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#00A29A] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isNew && (loadError || !article)) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <div className="px-4 sm:px-6 py-4">
          <AdminLanguageBar />
        </div>
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <p className={type.lead}>{t('admin.edit.notFound')}</p>
            <Link to="/admin/articles" className="text-[#00A29A] hover:underline mt-4 inline-block">
              {t('admin.actions.back')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!article) return null;

  const fields = article[activeLang];
  const selectedCategoryId = getArticleCategoryId(article.en?.category, article.zh?.category);

  const updateField = (name, value) => {
    setPublishError('');
    setArticle((prev) => ({
      ...prev,
      [activeLang]: { ...prev[activeLang], [name]: value },
    }));
  };

  const handleCategoryChange = (categoryId) => {
    if (!categoryId) return;
    setPublishError('');
    setArticle((prev) => ({
      ...prev,
      en: { ...prev.en, category: getCategoryLabel(categoryId, 'en') },
      zh: { ...prev.zh, category: getCategoryLabel(categoryId, 'zh') },
    }));
  };

  const handleImageFile = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    if (!file.type.startsWith('image/') || file.type === 'image/svg+xml') {
      setPublishError(t('admin.edit.imageErrorType'));
      return;
    }
    if (file.size > MAX_INPUT_IMAGE_BYTES) {
      setPublishError(t('admin.edit.imageErrorSize'));
      return;
    }

    setOptimizingImage(true);
    setPublishError('');

    try {
      const dataUrl = await optimizeArticleImage(file);
      setArticle((prev) => ({
        ...prev,
        en: { ...prev.en, image: dataUrl },
        zh: { ...prev.zh, image: dataUrl },
      }));
    } catch {
      setPublishError(t('admin.edit.imageErrorOptimize'));
    } finally {
      setOptimizingImage(false);
    }
  };

  const canPublish = isArticleComplete(article);
  const isPublishedEdit = !isNew && article.status === 'published';

  const save = async (status) => {
    if (status === 'published' && !isArticleComplete(article)) {
      setPublishError(t('admin.edit.publishError'));
      return;
    }

    setPublishError('');
    setSaving(true);

    const payload = { ...article, status };

    try {
      const shouldCreate = isNew && !savedToServer;
      const saved = shouldCreate
        ? await createArticle(payload)
        : await updateArticle(article.id, payload);

      setSavedToServer(true);

      if (status === 'published') {
        navigate('/admin/articles');
        return;
      }

      setArticle(saved);
      if (isNew) {
        setPendingEditId(saved.id);
      }
      setDraftSavedOpen(true);
    } catch {
      setPublishError(t('admin.errors.network'));
    } finally {
      setSaving(false);
    }
  };

  const closeDraftSavedDialog = () => {
    setDraftSavedOpen(false);
    if (pendingEditId) {
      navigate(`/admin/articles/${pendingEditId}`, { replace: true });
      setPendingEditId(null);
    }
  };

  const formActions = (
    <div className="pt-6 border-t border-slate-200 space-y-3">
      {publishError && <p className={type.bodySm + ' text-red-600'}>{publishError}</p>}
      <div className="flex flex-col sm:flex-row sm:justify-end gap-2">
        <button
          type="button"
          onClick={() => setPreviewOpen(true)}
          disabled={saving}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg hover:border-[#00A29A]/40 hover:text-[#00A29A] disabled:opacity-60 ${type.btn}`}
        >
          <ScanEye className="w-4 h-4" /> {t('admin.actions.preview')}
        </button>
        <button
          type="button"
          onClick={() => save('draft')}
          disabled={saving}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg hover:border-slate-300 disabled:opacity-60 ${type.btn}`}
        >
          <Save className="w-4 h-4" /> {t('admin.actions.saveDraft')}
        </button>
        <button
          type="button"
          onClick={() => save('published')}
          disabled={!canPublish || saving || optimizingImage}
          title={
            canPublish
              ? isPublishedEdit
                ? t('admin.edit.publishChangesTitle')
                : t('admin.edit.publishTitle')
              : t('admin.edit.publishDisabledTitle')
          }
          className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg ${type.btnStrong} ${
            canPublish && !saving && !optimizingImage
              ? 'bg-[#00A29A] hover:bg-[#008f88] text-white'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          <Upload className="w-4 h-4" />{' '}
          {isPublishedEdit ? t('admin.actions.publishChanges') : t('admin.actions.publish')}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <PageSEO
        title={t('seo.admin.title')}
        description={t('seo.admin.description')}
        path={isNew ? '/admin/articles/new' : `/admin/articles/${id}`}
        noindex
      />
      <AdminConfirmDialog
        open={draftSavedOpen}
        alertOnly
        title={t('admin.dialog.draftSavedTitle')}
        message={t('admin.dialog.draftSavedMessage')}
        confirmLabel={t('admin.actions.ok')}
        onConfirm={closeDraftSavedDialog}
        onCancel={closeDraftSavedDialog}
      />

      {previewOpen && (
        <AdminArticlePreviewModal
          article={article}
          initialLang={activeLang}
          onClose={() => setPreviewOpen(false)}
        />
      )}

      <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-4 space-y-3">
        <AdminLanguageBar />
        <Link
          to="/admin/articles"
          className={`inline-flex items-center gap-2 text-slate-600 hover:text-[#00A29A] ${type.btn}`}
        >
          <ArrowLeft className="w-4 h-4" /> {t('admin.actions.back')}
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 min-w-0 overflow-x-hidden">
        <div className="flex gap-2 mb-8">
          {CONTENT_LANGS.map(({ key, labelKey }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveLang(key)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                activeLang === key
                  ? 'bg-[#00A29A] text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-[#00A29A]/40'
              }`}
            >
              {t(labelKey)}
            </button>
          ))}
        </div>

        {!isNew && article && (
          <p className={`${type.bodySm} text-slate-500 mb-6`}>
            {t('admin.articles.lastUpdated')}: {getArticleUpdateDay(article.updatedAt, article.createdAt) || '—'}
          </p>
        )}

        {!canPublish && (
          <p className={`${type.bodySm} text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6`}>
            {t('admin.edit.publishHint')}
          </p>
        )}

        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-8 space-y-5 min-w-0 overflow-hidden">
          <Field label={t('admin.edit.date')}>
            <input type="date" value={fields.date} onChange={(e) => updateField('date', e.target.value)} className={inputClass} />
          </Field>
          <Field label={t('admin.edit.category')}>
            <select
              value={selectedCategoryId ?? ''}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className={inputClass + ' bg-white'}
            >
              <option value="" disabled>
                {t('admin.edit.selectCategory')}
              </option>
              {ARTICLE_CATEGORIES.map((category) => (
                <option key={category.id} value={category.id}>
                  {activeLang === 'zh' ? category.zh : category.en}
                </option>
              ))}
            </select>
            {!selectedCategoryId && (article.en?.category || article.zh?.category) && (
              <p className={`${type.bodySm} text-amber-700 mt-2`}>
                {t('admin.edit.categoryLegacy', {
                  value: fields.category || article.en?.category || article.zh?.category,
                })}
              </p>
            )}
          </Field>
          <Field label={t('admin.edit.title')}>
            <input type="text" value={fields.title} onChange={(e) => updateField('title', e.target.value)} className={inputClass} required />
          </Field>
          <Field label={t('admin.edit.coverImage')}>
            <div className="space-y-3">
              {fields.image ? (
                <div className="relative rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                  <img src={fields.image} alt="" className="w-full max-h-48 object-cover" />
                  <button
                    type="button"
                    onClick={() => updateField('image', '')}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label={t('admin.actions.removeImage')}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : null}
              <div className="flex flex-wrap gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageFile}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={optimizingImage}
                  className={`inline-flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:border-[#00A29A]/40 hover:text-[#00A29A] disabled:opacity-60 ${type.btn}`}
                >
                  <ImagePlus className="w-4 h-4" />{' '}
                  {optimizingImage ? t('admin.edit.imageOptimizing') : t('admin.actions.addFromDevice')}
                </button>
              </div>
              <input
                type="text"
                value={fields.image?.startsWith('data:') ? '' : (fields.image ?? '')}
                onChange={(e) => updateField('image', e.target.value)}
                className={inputClass}
                placeholder={t('admin.edit.imageUrlPlaceholder')}
              />
              {fields.image?.startsWith('data:') && (
                <p className={type.bodySm + ' text-slate-500'}>{t('admin.edit.imageFromDevice')}</p>
              )}
            </div>
          </Field>
          <Field label={t('admin.edit.excerpt')}>
            <textarea value={fields.excerpt} onChange={(e) => updateField('excerpt', e.target.value)} rows={3} className={inputClass + ' resize-y'} />
          </Field>
          <Field label={t('admin.edit.body')}>
            <textarea value={fields.body} onChange={(e) => updateField('body', e.target.value)} rows={12} className={inputClass + ' resize-y'} />
          </Field>
          {formActions}
        </div>
      </main>
    </div>
  );
};
