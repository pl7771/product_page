import { PRODUCTION_SITE_ORIGIN } from './siteOrigin';

export const SITE_NAME = {
  en: 'Hebei Shandao Environmental Technology',
  zh: '河北善道环境科技有限公司',
};

export const SITE_BRAND = {
  en: 'Hebei Shandao Environmental Technology | Precision Micro-Mist Systems',
  zh: '河北善道环境科技有限公司 | 精准微雾系统',
};

export const DEFAULT_OG_IMAGE = '/data/concrete-batching-plant/4.jpeg';

export const getSiteOrigin = () => {
  const fromEnv = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '');
  if (fromEnv) return fromEnv;
  if (typeof window !== 'undefined') return window.location.origin;
  return PRODUCTION_SITE_ORIGIN;
};

export const absoluteUrl = (path = '/') => {
  const origin = getSiteOrigin();
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return origin ? `${origin}${normalized}` : normalized;
};

export const formatSeoText = (template, vars = {}) =>
  String(template).replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? '');
