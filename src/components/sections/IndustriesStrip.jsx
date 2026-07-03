import { Link } from 'react-router-dom';
import { Factory, Building2, FlaskConical, Wheat, Trash2 } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useLocalizedPath } from '../../i18n/routing';
import { type } from '../../styles/typography';

const INDUSTRY_ICONS = {
  mining: Factory,
  construction: Building2,
  chemical: FlaskConical,
  agriculture: Wheat,
  municipal: Trash2,
};

export const IndustriesStrip = () => {
  const { dict } = useLanguage();
  const lp = useLocalizedPath();
  const industries = dict.industries;
  if (!industries?.list?.length) return null;

  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-7">
        <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
          <span className={`${type.label} shrink-0`}>{industries.label}</span>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 sm:gap-x-9">
            {industries.list.map((item) => {
              const Icon = INDUSTRY_ICONS[item.icon] ?? Factory;
              const content = (
                <>
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-[#00A29A] transition-colors" strokeWidth={1.8} />
                  <span className={`${type.bodySm} text-slate-600 group-hover:text-[#00A29A] font-medium whitespace-nowrap transition-colors`}>
                    {item.name}
                  </span>
                </>
              );

              if (item.to) {
                return (
                  <Link key={item.icon} to={lp(item.to)} className="inline-flex items-center gap-2.5 group">
                    {content}
                  </Link>
                );
              }
              return (
                <div key={item.icon} className="inline-flex items-center gap-2.5 group">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
