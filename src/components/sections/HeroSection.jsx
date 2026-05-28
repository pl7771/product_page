import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SmokeBackground } from '../layout/SmokeBackground';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-green-950" />
      <SmokeBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.8)_100%)] z-10 pointer-events-none" />
      
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-20">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Next-Gen Atmospheric Tech
          </div>
        </Reveal>
        <Reveal delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6">
            Master The <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-400 to-green-600">Atmosphere.</span>
          </h1>
        </Reveal>
        <Reveal delay={400}>
          <p className="text-lg md:text-xl text-green-400 max-w-2xl mx-auto mb-10 font-light">
            High-end industrial vaporizers and cinematic atmospheric effect equipment designed for precision, power, and absolute reliability.
          </p>
        </Reveal>
        <Reveal delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#products" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-green-200 transition-all flex items-center justify-center gap-2 group">
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-green-900 border border-green-800 text-white rounded-full font-semibold hover:bg-green-800 transition-all">
              Request Quote
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-green-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};