import { type } from '../../styles/typography';

export const sectionHeadingClassName = `${type.sectionTitle} mb-3`;

export const SectionHeading = ({
  children,
  className = '',
  as: Tag = 'h2',
  centered = false,
  accent = true,
}) => (
  <div className={centered ? 'flex flex-col items-center' : ''}>
    {accent && (
      <div
        className={`h-1 rounded-full bg-gradient-to-r from-[#00A29A] to-[#00A29A]/40 mb-3 ${
          centered ? 'w-14' : 'w-12'
        }`}
        aria-hidden="true"
      />
    )}
    <Tag className={`${sectionHeadingClassName} ${centered ? 'text-center' : ''} ${className}`.trim()}>
      {children}
    </Tag>
  </div>
);

export const SectionLead = ({ children, className = '', centered = false }) => (
  <p
    className={`${type.lead} max-w-2xl ${centered ? 'text-center mx-auto' : ''} ${className}`.trim()}
  >
    {children}
  </p>
);
