import { useLangBase } from '../../i18n/routing';

const variants = {
  chip:
    'inline-flex items-center flex-shrink-0 min-w-0 rounded-lg border border-slate-200 bg-white px-1.5 py-1 sm:px-2 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5',
  nav: 'inline-flex items-center flex-shrink-0 min-w-0 px-1 py-0.5 transition-opacity duration-200 hover:opacity-80',
};

export const logoChipClassName = variants.chip;

export const LogoChip = ({ children, variant = 'chip', className = '' }) => {
  const base = useLangBase();
  return (
    <a href={base || '/'} className={`${variants[variant] ?? variants.chip} ${className}`.trim()}>
      {children}
    </a>
  );
};
