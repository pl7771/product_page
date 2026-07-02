import { useMemo } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedProjectCategories, getLocalizedProducts } from '../i18n/localizeProjects';

export function useLocalizedProjects() {
  const { dict } = useLanguage();
  return useMemo(() => getLocalizedProjectCategories(dict), [dict]);
}

export function useLocalizedProducts() {
  const { dict } = useLanguage();
  return useMemo(() => getLocalizedProducts(dict), [dict]);
}
