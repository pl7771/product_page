import { ArrowRight, Play, Wind, Droplets, Snowflake, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { OptimizedImage } from '../ui/OptimizedImage';
import { SmokeBackground } from '../layout/SmokeBackground';
import { CountUpStat } from '../ui/CountUpStat';
import { type } from '../../styles/typography';

const HERO_IMAGE = '/data/concrete-batching-plant/4.jpeg';

const APP_ICONS = {
  dust: Wind,
  humidify: Droplets,
  cooling: Snowflake,
  disinfect: ShieldCheck,
};

export const HeroSection = () => {
  const { t, dict } = useLanguage();
  const applications = dict.hero?.applications ?? [];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <OptimizedImage
        src={HERO_IMAGE}
        alt=""
        loading="eager"
        fetchPriority="high"
        pictureClassName="absolute inset-0 block w-full h-full"
        className="absolute inset-0 w-full h-full object-cover object-center -scale-x-105 scale-y-105"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/65 via-slate-900/45 to-slate-900/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-900/10" />
      <SmokeBackground variant="mist" className="absolute inset-0 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 surface-glass rounded-full mb-8 shadow-lg shadow-black/10">
            <span className="w-2 h-2 bg-[#00A29A] rounded-full animate-pulse shadow-[0_0_12px_#00A29A]" />
            <span className={`${type.bodySm} !text-white/95 tracking-[0.06em] font-medium`}>{t('hero.badge')}</span>
          </div>

          <h1 className={`${type.display} !text-white mb-6 drop-shadow-2xl`}>
            {t('hero.titleLine1')} <br />
            <span className="text-[#00A29A] drop-shadow-[0_0_40px_rgba(0,162,154,0.35)]">{t('hero.titleHighlight')}</span>{' '}
            <br />
            {t('hero.titleLine2')}
          </h1>

          <p className={`${type.lead} !text-slate-100/95 max-w-2xl mb-8 font-normal`}>{t('hero.subtitle')}</p>

          {applications.length > 0 && (
            <div className="flex flex-wrap gap-2.5 mb-10">
              {applications.map((app) => {
                const Icon = APP_ICONS[app.icon] ?? Wind;
                return (
                  <span
                    key={app.icon}
                    className="inline-flex items-center gap-2 pl-2.5 pr-3.5 py-2 rounded-full surface-glass shadow-md shadow-black/10"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00A29A]/90">
                      <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2.4} />
                    </span>
                    <span className={`${type.bodySm} !text-white/95 font-medium whitespace-nowrap`}>{app.label}</span>
                  </span>
                );
              })}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className={`group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00A29A] hover:bg-[#008f88] text-white ${type.btnStrong} rounded-xl transition-all shadow-[var(--shadow-brand)] hover:-translate-y-0.5`}
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className={`group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/18 backdrop-blur-md text-white ${type.btn} rounded-xl border border-white/25 hover:border-white/40 transition-all`}
            >
              <Play className="w-5 h-5" />
              {t('hero.ctaSecondary')}
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-3 gap-6 sm:gap-8 max-w-2xl">
            {[
              [t('hero.stat1Value'), t('hero.stat1Label')],
              [t('hero.stat2Value'), t('hero.stat2Label')],
              [t('hero.stat3Value'), t('hero.stat3Label')],
            ].map(([value, label]) => (
              <div key={label}>
                <CountUpStat value={value} className={`${type.stat} mb-1.5 block`} />
                <div className={`${type.label} !text-slate-300/90 normal-case tracking-[0.08em]`}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce motion-reduce:animate-none opacity-70">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/80 rounded-full" />
        </div>
      </div>
    </section>
  );
};
