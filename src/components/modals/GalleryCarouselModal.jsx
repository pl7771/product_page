import { useState, useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { OptimizedImage } from '../ui/OptimizedImage';
import { preloadImage } from '../../utils/image';

const SWIPE_THRESHOLD = 48;

export const GalleryCarouselModal = ({ product, onClose, initialIndex = 0 }) => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(initialIndex);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const closeRef = useRef(null);
  const thumbStripRef = useRef(null);
  const pointerStart = useRef(null);
  const prefersReducedMotion = useRef(false);

  const gallery = product?.gallery ?? [];
  const len = gallery.length;
  const title = product?.name || product?.title || '';
  const gallerySignature = len ? gallery.join('\0') : '';
  const gallerySignatureRef = useRef(null);

  useEffect(() => {
    if (gallerySignatureRef.current === gallerySignature) return;
    gallerySignatureRef.current = gallerySignature;
    setIndex(initialIndex);
  }, [gallerySignature, initialIndex]);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    if (len <= 1) return;
    preloadImage(gallery[(index + 1) % len]);
    preloadImage(gallery[(index - 1 + len) % len]);
  }, [index, gallery, len]);

  useEffect(() => {
    const thumb = thumbStripRef.current?.children[index];
    thumb?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [index]);

  const goTo = useCallback(
    (next) => {
      if (len <= 1) return;
      setIndex((next + len) % len);
    },
    [len],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, next, prev]);

  const onPointerDown = (e) => {
    if (len <= 1) return;
    pointerStart.current = e.clientX;
    setIsDragging(true);
    setDragOffset(0);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!isDragging || pointerStart.current === null) return;
    setDragOffset(e.clientX - pointerStart.current);
  };

  const finishDrag = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - (pointerStart.current ?? e.clientX);
    if (delta <= -SWIPE_THRESHOLD) next();
    else if (delta >= SWIPE_THRESHOLD) prev();
    pointerStart.current = null;
    setIsDragging(false);
    setDragOffset(0);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* pointer already released */
    }
  };

  if (!product || len === 0) return null;

  const trackStyle =
    len > 1
      ? {
          transform: `translateX(calc(-${index * 100}% + ${isDragging ? dragOffset : 0}px))`,
          transition: isDragging || prefersReducedMotion.current ? 'none' : 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        }
      : undefined;

  return (
    <div
      className="fixed inset-0 z-[150] flex flex-col bg-black/92 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={title || t('gallery.open')}
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-3 sm:px-6 sm:pt-6">
        <div className="min-w-0 flex-1 pr-2">
          {title && (
            <p className="text-white font-semibold text-sm sm:text-base truncate">{title}</p>
          )}
          <p className="text-white/60 text-xs sm:text-sm mt-0.5">
            {index + 1} / {len}
            <span className="hidden sm:inline"> · {t('gallery.keyboardHint')}</span>
          </p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="shrink-0 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md transition-colors active:scale-95"
          aria-label={t('gallery.close')}
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </header>

      {/* Main stage */}
      <div className="relative z-10 flex-1 min-h-0 flex items-center">
        {len > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-[#00A29A] text-white border border-white/10 backdrop-blur-md transition-colors"
              aria-label={t('gallery.prev')}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={next}
              className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-[#00A29A] text-white border border-white/10 backdrop-blur-md transition-colors"
              aria-label={t('gallery.next')}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <div
          className="w-full h-full overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing select-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
        >
          <div className="flex h-full" style={trackStyle}>
            {gallery.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="min-w-full h-full flex items-center justify-center px-3 sm:px-8 md:px-16 py-2"
                aria-hidden={idx !== index}
              >
                <OptimizedImage
                  src={src}
                  alt={title ? `${title} — ${idx + 1}` : `${idx + 1}`}
                  loading={Math.abs(idx - index) <= 1 ? 'eager' : 'lazy'}
                  pictureClassName="flex items-center justify-center w-full h-full max-h-[min(72vh,820px)]"
                  className="max-w-full max-h-[min(72vh,820px)] w-auto h-auto object-contain rounded-lg shadow-2xl pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer: swipe hint + thumbnails */}
      <footer className="relative z-20 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 bg-gradient-to-t from-black/80 to-transparent">
        {len > 1 && (
          <>
            <p className="md:hidden text-center text-white/50 text-xs mb-3 px-4">{t('gallery.swipeHint')}</p>

            <div
              ref={thumbStripRef}
              className="flex gap-2 overflow-x-auto px-4 sm:px-6 py-1 custom-scrollbar scroll-smooth snap-x snap-mandatory"
            >
              {gallery.map((src, idx) => (
                <button
                  key={`thumb-${src}-${idx}`}
                  type="button"
                  onClick={() => setIndex(idx)}
                  className={`relative shrink-0 snap-center rounded-lg overflow-hidden transition-opacity ring-2 ring-inset ${
                    idx === index
                      ? 'ring-[#00A29A] opacity-100'
                      : 'ring-transparent opacity-55 hover:opacity-90'
                  }`}
                  aria-label={`${t('gallery.goTo')} ${idx + 1}`}
                  aria-current={idx === index ? 'true' : undefined}
                >
                  <OptimizedImage
                    src={src}
                    alt=""
                    loading="lazy"
                    className="w-14 h-14 sm:w-16 sm:h-16 object-cover"
                    draggable={false}
                  />
                </button>
              ))}
            </div>

            <div className="flex justify-center gap-1.5 mt-3 px-4">
              {gallery.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  type="button"
                  onClick={() => setIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === index ? 'w-6 bg-[#00A29A]' : 'w-1.5 bg-white/35 hover:bg-white/55'
                  }`}
                  aria-label={`${t('gallery.goTo')} ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </footer>
    </div>
  );
};
