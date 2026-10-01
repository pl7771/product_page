import wa from './wa.png';
import wc from './wc.png';

export const QR_WHATSAPP = wa;
export const QR_WECHAT = wc;

/**
 * Warm the browser cache once the page has settled, so the QR codes show
 * instantly when a contact modal opens instead of starting a request then
 * (the server is in Beijing: each request costs a long round trip abroad).
 */
export const preloadQrCodes = () => {
  if (typeof window === 'undefined') return undefined;
  const load = () => {
    for (const src of [QR_WECHAT, QR_WHATSAPP]) new Image().src = src;
  };
  if ('requestIdleCallback' in window) {
    const id = window.requestIdleCallback(load, { timeout: 4000 });
    return () => window.cancelIdleCallback(id);
  }
  const id = window.setTimeout(load, 2000);
  return () => window.clearTimeout(id);
};
