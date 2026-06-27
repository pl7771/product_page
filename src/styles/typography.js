/** System fonts (CN-friendly, no external CDN) */

const display = 'font-display';
const body = 'font-sans';

export const type = {
  display: `${display} text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] leading-[1.08]`,
  sectionTitle: `${display} text-3xl md:text-4xl lg:text-[2.5rem] font-bold tracking-[-0.02em] leading-tight text-[#00A29A]`,
  pageTitle: `${display} text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-tight text-slate-900`,
  cardTitle: `${display} text-xl font-semibold tracking-[-0.01em] leading-snug text-slate-900`,
  cardTitleSm: `${display} text-lg font-semibold tracking-[-0.01em] leading-snug text-slate-900`,
  lead: `${body} text-lg sm:text-xl leading-relaxed text-slate-600 font-normal`,
  body: `${body} text-base leading-relaxed text-slate-600 font-normal`,
  bodySm: `${body} text-sm leading-relaxed text-slate-600 font-normal`,
  accent: `${body} text-sm leading-normal text-[#00A29A] font-medium`,
  label: `${body} text-xs uppercase tracking-[0.14em] text-slate-500 font-medium`,
  labelBrand: `${body} text-xs uppercase tracking-[0.14em] text-[#00A29A] font-semibold`,
  stat: `${display} text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[#00A29A]`,
  nav: `${body} text-[13px] sm:text-sm font-medium tracking-[0.02em] text-slate-600`,
  btn: `${body} text-sm font-medium tracking-[0.02em]`,
  btnStrong: `${display} text-sm font-bold tracking-[0.02em]`,
};
