import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const OBSERVER_OPTIONS = { threshold: 0.4 };

/**
 * Animates the leading number of a stat value (e.g. "90%+", "1000+", "24/7")
 * from 0 to its target when scrolled into view. Any non-numeric prefix/suffix
 * (%, +, /7 …) is preserved. Respects prefers-reduced-motion.
 */
export const CountUpStat = ({ value, className = '', duration = 1400 }) => {
  const [ref, isVisible] = useIntersectionObserver(OBSERVER_OPTIONS);
  const isRatio = String(value).includes('/');
  const match = !isRatio ? String(value).match(/^(\D*)(\d+)(.*)$/) : null;
  const target = match ? Number(match[2]) : null;
  const [display, setDisplay] = useState(target === null ? value : `${match[1]}0${match[3]}`);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!isVisible || target === null) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const [, prefix, , suffix] = match;
    const start = performance.now();
    const easeOut = (t) => 1 - (1 - t) ** 3;

    const tick = (now) => {
      const progress = reduced ? 1 : Math.min((now - start) / duration, 1);
      const current = Math.round(easeOut(progress) * target);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible, target, value, duration, match]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};
