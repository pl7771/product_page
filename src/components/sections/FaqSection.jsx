import { Plus } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading, SectionLead } from '../ui/SectionHeading';
import { useLanguage } from '../../i18n/LanguageContext';
import { type } from '../../styles/typography';

export const FaqSection = () => {
  const { dict } = useLanguage();
  const faq = dict.faq;
  if (!faq?.items?.length) return null;

  return (
    <section id="faq" className="py-12 sm:py-16 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <Reveal>
          <div className="text-center mb-8">
            <SectionHeading centered>{faq.eyebrow}</SectionHeading>
            <h2 className={`${type.sectionTitle} !text-slate-900 mt-3 mb-3`}>{faq.title}</h2>
            <SectionLead centered className="max-w-2xl mx-auto">{faq.subtitle}</SectionLead>
          </div>
        </Reveal>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faq.items.map((item) => (
            <details key={item.q} className="group py-1">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-4">
                <h3 className={`${type.cardTitleSm} pr-2`}>{item.q}</h3>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00A29A]/10 text-[#00A29A] flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                  <Plus className="w-4 h-4" strokeWidth={2.5} />
                </span>
              </summary>
              <p className={`${type.body} pb-5 pr-12`}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
