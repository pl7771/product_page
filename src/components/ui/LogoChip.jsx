export const logoChipClassName =
  'inline-flex items-center flex-shrink-0 min-w-0 rounded-lg border border-slate-200 bg-white px-1.5 py-1 sm:px-2 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5';

export const LogoChip = ({ children, className = '' }) => (
  <a href="/" className={`${logoChipClassName} ${className}`.trim()}>
    {children}
  </a>
);
