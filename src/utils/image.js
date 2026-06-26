export function toWebpSrc(src) {
  if (!src || src.startsWith('data:')) return src || '';
  return src.replace(/\.(jpe?g|png)$/i, '.webp');
}

export function isNearIndex(index, current, total) {
  if (total <= 1) return true;
  if (index === current) return true;
  if (index === (current + 1) % total) return true;
  if (index === (current - 1 + total) % total) return true;
  return false;
}

export function preloadImage(src) {
  if (!src || typeof window === 'undefined') return;
  const img = new Image();
  img.src = toWebpSrc(src);
  img.onerror = () => {
    img.src = src;
  };
}
