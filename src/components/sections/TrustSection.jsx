// src/components/sections/TrustSection.jsx
import { Reveal } from '../ui/Reveal';
import { FeatureCard } from '../ui/FeatureCard';
import { TestimonialCard } from '../ui/TestimonialCard';
import { features } from '../../data/features';
import { testimonials } from '../../data/testimonials';

export const TrustSection = () => {
  return (
    <section id="trust" className="py-32 bg-green-900 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Global Standard in Atmospheric Technology.</h2>
            <p className="text-green-400 text-lg font-light">With over 15 years of continuous innovation, Aether Systems provides the foundational hardware for the world's most demanding visual and scientific applications.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feat, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <FeatureCard {...feat} />
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <TestimonialCard key={idx} {...test} delay={idx * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};