import { type } from '../../styles/typography';

export const sectionHeadingClassName = `${type.sectionTitle} mb-3`;

export const SectionHeading = ({ children, className = '', as: Tag = 'h2', centered = false }) => (
  <div className={centered ? 'flex flex-col items-center' : ''}>
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
