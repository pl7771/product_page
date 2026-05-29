// src/components/sections/TrustSection.jsx
import { Shield, Truck, Clock, Settings, Star } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { features } from '../../data/features';
import { testimonials } from '../../data/testimonials';

export const TrustSection = () => {
  return (
    // ✅ Фон светло-серый для контраста
    <section id="trust" className="py-32 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00A29A]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Global Standard in Atmospheric Technology.</h2>
            <p className="text-slate-600 text-lg font-light">With over 15 years of continuous innovation, Aether Systems provides the foundational hardware for the world's most demanding visual and scientific applications.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feat, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              {/* Карточка фичи: белая с тенью */}
              <div className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-[#00A29A]/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#00A29A]/10 rounded-xl flex items-center justify-center mb-6 text-[#00A29A]">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-slate-900">{feat.title}</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{feat.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <Reveal key={idx} delay={idx * 200}>
              {/* Карточка отзыва: белая */}
              <div className="p-8 bg-white rounded-2xl border border-slate-100 relative shadow-sm">
                <Star className="w-6 h-6 text-[#00A29A] mb-6" />
                <p className="text-lg text-slate-700 italic mb-8 font-light leading-relaxed">"{test.quote}"</p>
                <div>
                  <p className="font-semibold text-slate-900">{test.author}</p>
                  <p className="text-sm text-slate-500">{test.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};