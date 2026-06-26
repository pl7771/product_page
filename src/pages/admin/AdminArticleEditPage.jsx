import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ImagePlus, Save, Upload, X } from 'lucide-react';
import {
  createEmptyArticle,
  getCustomArticle,
  isArticleComplete,
  upsertCustomArticle,
} from '../../utils/industryArticles';
import { type } from '../../styles/typography';

const LANGS = [
  { key: 'en', label: 'English' },
  { key: 'zh', label: '中文' },
];

const Field = ({ label, children }) => (
  <div>
    <label className={`block ${type.label} normal-case tracking-normal text-slate-700 mb-2`}>{label}</label>
    {children}
  </div>
);

const inputClass =
  'w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A]';

const MAX_IMAGE_BYTES = 2 * 1024 * 1024;

export const AdminArticleEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === 'new';

  const [article, setArticle] = useState(() => (isNew ? createEmptyArticle() : getCustomArticle(id)));
  const [activeLang, setActiveLang] = useState('en');
  const [savedMessage, setSavedMessage] = useState('');
  const [publishError, setPublishError] = useState('');
  const [missing, setMissing] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isNew) {
      setArticle(createEmptyArticle());
      setMissing(false);
      return;
    }
    const found = getCustomArticle(id);
    if (found) {
      setArticle(found);
      setMissing(false);
    } else {
      setMissing(true);
    }
  }, [id, isNew]);

  if (!isNew && missing) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-center">
          <p className={type.lead}>Article not found.</p>
          <Link to="/admin/articles" className="text-[#00A29A] hover:underline mt-4 inline-block">
            Back to list
          </Link>
        </div>
      </div>
    );
  }

  if (!article) return null;

  const fields = article[activeLang];

  const updateField = (name, value) => {
    setPublishError('');
    setArticle((prev) => ({
      ...prev,
      [activeLang]: { ...prev[activeLang], [name]: value },
    }));
  };

  const handleImageFile = (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setPublishError('Please choose an image file.');
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setPublishError('Image must be under 2 MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result);
      setPublishError('');
      setArticle((prev) => ({
        ...prev,
        en: { ...prev.en, image: dataUrl },
        zh: { ...prev.zh, image: dataUrl },
      }));
    };
    reader.readAsDataURL(file);
  };

  const canPublish = isArticleComplete(article);

  const save = (status) => {
    if (status === 'published' && !isArticleComplete(article)) {
      setPublishError('Fill in all required fields in English and 中文 before publishing.');
      return;
    }
    setPublishError('');
    const next = upsertCustomArticle({ ...article, status });
    if (status === 'published') {
      navigate('/admin/articles');
      return;
    }
    setArticle(next);
    setSavedMessage('Draft saved.');
    window.setTimeout(() => setSavedMessage(''), 2500);
    if (isNew) navigate(`/admin/articles/${next.id}`, { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/admin/articles"
          className={`inline-flex items-center gap-2 text-slate-600 hover:text-[#00A29A] ${type.btn}`}
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          {savedMessage && <span className={type.bodySm + ' text-[#00A29A]'}>{savedMessage}</span>}
          {publishError && <span className={type.bodySm + ' text-red-600'}>{publishError}</span>}
          <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => save('draft')}
            className={`inline-flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:border-slate-300 ${type.btn}`}
          >
            <Save className="w-4 h-4" /> Save draft
          </button>
          <button
            type="button"
            onClick={() => save('published')}
            disabled={!canPublish}
            title={canPublish ? 'Publish article' : 'Fill required fields in EN and 中文 to publish'}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${type.btnStrong} ${
              canPublish
                ? 'bg-[#00A29A] hover:bg-[#008f88] text-white'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <Upload className="w-4 h-4" /> Publish
          </button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-2 mb-8">
          {LANGS.map(({ key, label }) => (
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
              {label}
            </button>
          ))}
        </div>

        {!canPublish && (
          <p className={`${type.bodySm} text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6`}>
            Publish is available when date, category, title, excerpt, and body are filled in both English and 中文. Image is optional.
          </p>
        )}

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
          <Field label="Date">
            <input type="date" value={fields.date} onChange={(e) => updateField('date', e.target.value)} className={inputClass} />
          </Field>
          <Field label="Category">
            <input type="text" value={fields.category} onChange={(e) => updateField('category', e.target.value)} className={inputClass} placeholder="Regulation / 政策" />
          </Field>
          <Field label="Title">
            <input type="text" value={fields.title} onChange={(e) => updateField('title', e.target.value)} className={inputClass} required />
          </Field>
          <Field label="Cover image (optional)">
            <div className="space-y-3">
              {fields.image ? (
                <div className="relative rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                  <img src={fields.image} alt="" className="w-full max-h-48 object-cover" />
                  <button
                    type="button"
                    onClick={() => updateField('image', '')}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Remove image"
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
                  className={`inline-flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:border-[#00A29A]/40 hover:text-[#00A29A] ${type.btn}`}
                >
                  <ImagePlus className="w-4 h-4" /> Add from device
                </button>
              </div>
              <input
                type="text"
                value={fields.image?.startsWith('data:') ? '' : (fields.image ?? '')}
                onChange={(e) => updateField('image', e.target.value)}
                className={inputClass}
                placeholder="Or paste image URL (e.g. /data/concrete-batching-plant/4.jpeg)"
              />
              {fields.image?.startsWith('data:') && (
                <p className={type.bodySm + ' text-slate-500'}>Image loaded from device. Remove it to enter a URL instead.</p>
              )}
            </div>
          </Field>
          <Field label="Excerpt (short summary)">
            <textarea value={fields.excerpt} onChange={(e) => updateField('excerpt', e.target.value)} rows={3} className={inputClass + ' resize-y'} />
          </Field>
          <Field label="Body (paragraphs separated by blank line)">
            <textarea value={fields.body} onChange={(e) => updateField('body', e.target.value)} rows={12} className={inputClass + ' resize-y'} />
          </Field>
        </div>
      </main>
    </div>
  );
};
