import { Reveal } from '../ui/Reveal';
import { SectionHeading, SectionLead, sectionHeadingClassName } from '../ui/SectionHeading';
import { useLanguage } from '../../i18n/LanguageContext';
import { OptimizedImage } from '../ui/OptimizedImage';
import { type } from '../../styles/typography';

export const TrustSection = () => {
  const { dict } = useLanguage();
  const { trust } = dict;

  return (
    <section id="trust" className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00A29A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="max-w-3xl mx-auto mb-16 sm:mb-20 text-left">
            <SectionHeading centered>{trust.eyebrow}</SectionHeading>
            {trust.title && (
              <h3 className={`${sectionHeadingClassName} text-slate-900 mb-6`}>{trust.title}</h3>
            )}
            <div className={`${type.lead} space-y-4`}>
              {trust.description.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="text-center mb-10">
            <SectionHeading centered>{trust.testimonialsEyebrow}</SectionHeading>
            {trust.testimonialsTitle && (
              <h3 className={`${sectionHeadingClassName} text-slate-900 mb-3 text-center`}>{trust.testimonialsTitle}</h3>
            )}
            <SectionLead centered className="max-w-2xl mx-auto">{trust.testimonialsSubtitle}</SectionLead>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trust.testimonials.map((test, idx) => (
            <Reveal key={test.role} delay={idx * 120}>
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md hover:border-[#00A29A]/20 transition-all flex flex-col h-full">
                <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
                  <OptimizedImage src={test.image} alt={test.role} loading="lazy" pictureClassName="block w-full h-full" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className={`${type.body} text-slate-700 mb-6 flex-grow`}>&ldquo;{test.quote}&rdquo;</p>
                  <div className="pt-4 border-t border-slate-100">
                    <p className={`${type.cardTitleSm} text-slate-900`}>{test.author}</p>
                    <p className={`${type.bodySm} text-slate-500 mt-0.5`}>{test.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
