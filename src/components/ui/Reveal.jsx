import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};