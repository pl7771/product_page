// Only the site's own static images get a .webp twin at build time. Admin
// uploads (/uploads/), external URLs and data: URIs have none, and a <picture>
// whose webp source 404s shows a broken image instead of falling back.
export function toWebpSrc(src) {
  if (!src || !src.startsWith('/') || src.startsWith('//') || src.startsWith('/uploads/')) {
    return src || '';
  }
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
