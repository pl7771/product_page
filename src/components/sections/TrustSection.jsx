import { Wrench, Shield, Settings, Headphones, Star } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { useLanguage } from '../../i18n/LanguageContext';
import { OptimizedImage } from '../ui/OptimizedImage';

const featureIcons = [Wrench, Shield, Settings, Headphones];

export const TrustSection = () => {
  const { dict } = useLanguage();
  const { trust } = dict;

  return (
    <section id="trust" className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00A29A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-sm font-semibold text-[#00A29A] tracking-widest uppercase mb-3">{trust.eyebrow}</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">{trust.title}</h3>
            <div className="text-slate-600 text-lg font-light leading-relaxed mb-6 space-y-4">
              {trust.description.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <div className="text-slate-500 text-sm font-light leading-relaxed space-y-4">
              {trust.hpBlock.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 sm:mb-24">
          {trust.features.map((feat, idx) => {
            const Icon = featureIcons[idx];
            return (
              <Reveal key={feat.title} delay={idx * 100}>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-[#00A29A]/30 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 bg-[#00A29A]/10 rounded-xl flex items-center justify-center mb-6 text-[#00A29A]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-slate-900">{feat.title}</h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{feat.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="text-center mb-10">
            <h4 className="text-2xl font-bold text-slate-900">{trust.testimonialsTitle}</h4>
            <p className="text-slate-500 text-sm mt-2">{trust.testimonialsSubtitle}</p>
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
                  <Star className="w-5 h-5 text-[#00A29A] mb-4 flex-shrink-0" />
                  <p className="text-base text-slate-700 italic mb-6 font-light leading-relaxed flex-grow">&ldquo;{test.quote}&rdquo;</p>
                  <div className="pt-4 border-t border-slate-100">
                    <p className="font-semibold text-slate-900">{test.author}</p>
                    <p className="text-sm text-slate-500 mt-0.5">{test.role}</p>
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
