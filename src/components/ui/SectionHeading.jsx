import { type } from '../../styles/typography';

export const sectionHeadingClassName = `${type.sectionTitle} mb-4`;

export const SectionHeading = ({ children, className = '', as: Tag = 'h2', centered = false }) => (
  <Tag className={`${sectionHeadingClassName} ${centered ? 'text-center' : ''} ${className}`.trim()}>
    {children}
  </Tag>
);

export const SectionLead = ({ children, className = '', centered = false }) => (
  <p className={`${type.lead} ${centered ? 'text-center' : ''} ${className}`.trim()}>{children}</p>
);
