import { LanguageSwitcher } from '../ui/LanguageSwitcher';

export const AdminLanguageBar = ({ className = '' }) => (
  <div className={`flex justify-end ${className}`}>
    <LanguageSwitcher />
  </div>
);
