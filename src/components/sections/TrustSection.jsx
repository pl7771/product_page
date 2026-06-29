import { Quote, TrendingUp } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading, SectionLead, sectionHeadingClassName } from '../ui/SectionHeading';
import { useLanguage } from '../../i18n/LanguageContext';
import { OptimizedImage } from '../ui/OptimizedImage';
import { type } from '../../styles/typography';

export const TrustSection = () => {
  const { dict } = useLanguage();
  const { trust } = dict;

  return (
    <section id="trust" className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200 relative overflow-hidden section-mesh">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00A29A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="text-center mb-8">
            <SectionHeading centered>{trust.testimonialsEyebrow}</SectionHeading>
            {trust.testimonialsTitle && (
              <h3 className={`${sectionHeadingClassName} text-slate-900 mb-3 text-center`}>{trust.testimonialsTitle}</h3>
            )}
            <SectionLead centered className="max-w-2xl mx-auto">{trust.testimonialsSubtitle}</SectionLead>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {trust.testimonials.map((test, idx) => (
            <Reveal key={test.role} delay={idx * 120}>
              <div className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-xl hover:-translate-y-1 hover:border-[#00A29A]/25 transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
                  <OptimizedImage src={test.image} alt={test.role} loading="lazy" pictureClassName="block w-full h-full" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {test.metric && (
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-md">
                      <TrendingUp className="w-3.5 h-3.5 text-[#00A29A]" strokeWidth={2.4} />
                      <span className="text-xs font-semibold text-slate-800">{test.metric}</span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <Quote className="w-7 h-7 text-[#00A29A]/20 mb-3" fill="currentColor" strokeWidth={0} />
                  <p className={`${type.body} text-slate-700 mb-6 flex-grow`}>{test.quote}</p>
                  <div className="pt-4 border-t border-slate-100">
                    <p className={`${type.cardTitleSm} text-slate-900`}>{test.author}</p>
                    <p className={`${type.bodySm} text-slate-500 mt-0.5`}>{test.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="max-w-3xl mx-auto text-left">
            <SectionHeading centered>{trust.eyebrow}</SectionHeading>
            {trust.title && (
              <h3 className={`${sectionHeadingClassName} text-slate-900 mb-6`}>{trust.title}</h3>
            )}
            <div className={`${type.bodySm} sm:text-[15px] text-slate-600 space-y-4 leading-relaxed`}>
              {trust.description.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
