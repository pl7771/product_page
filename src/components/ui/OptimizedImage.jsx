import { toWebpSrc } from '../../utils/image';

export const OptimizedImage = ({
  src,
  alt = '',
  className = '',
  pictureClassName = '',
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
  draggable = false,
}) => {
  if (!src) return null;

  const webp = toWebpSrc(src);
  const usePicture = pictureClassName || className.includes('absolute');

  const img = (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
      draggable={draggable}
    />
  );

  if (!webp || webp === src) return img;

  return (
    <picture className={pictureClassName || undefined}>
      <source srcSet={webp} type="image/webp" />
      {img}
    </picture>
  );
};
