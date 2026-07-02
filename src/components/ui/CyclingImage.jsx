import { useState, useEffect } from 'react';
import { OptimizedImage } from './OptimizedImage';
import { isNearIndex, preloadImage } from '../../utils/image';

export const CyclingImage = ({
  images,
  alt,
  interval = 2000,
  containerClassName = 'relative w-full h-full',
  className = 'absolute inset-0 w-full h-full object-cover',
  activeClassName = 'opacity-100 scale-100',
  inactiveClassName = 'opacity-0 scale-105',
  transitionClassName = 'transition-all duration-700',
  hoverScaleClassName = 'group-hover:scale-105',
  loading = 'lazy',
  eagerFirst = false,
  onIndexChange,
}) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const len = images?.length ?? 0;

  useEffect(() => {
    if (len <= 1) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => {
      setCurrentImgIndex((prev) => {
        const next = (prev + 1) % len;
        onIndexChange?.(next);
        return next;
      });
    }, interval);
    return () => clearInterval(id);
  }, [len, interval, onIndexChange]);

  useEffect(() => {
    if (len <= 1) return;
    preloadImage(images[(currentImgIndex + 1) % len]);
  }, [currentImgIndex, images, len]);

  if (!len) return null;

  return (
    <div className={containerClassName}>
      {images.map((src, imgIndex) => {
        const shouldLoad = isNearIndex(imgIndex, currentImgIndex, len);
        if (!shouldLoad) return null;

        const isActive = imgIndex === currentImgIndex;

        return (
          <OptimizedImage
            key={src}
            src={src}
            alt={typeof alt === 'function' ? alt(imgIndex) : `${alt} - ${imgIndex + 1}`}
            loading={eagerFirst && imgIndex === 0 ? 'eager' : loading}
            fetchPriority={eagerFirst && imgIndex === 0 ? 'high' : undefined}
            pictureClassName={`absolute inset-0 block w-full h-full ${transitionClassName} ${
              isActive ? activeClassName : inactiveClassName
            } ${hoverScaleClassName}`}
            className={`${className} w-full h-full`}
          />
        );
      })}
    </div>
  );
};
