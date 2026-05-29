// src/components/sections/HeroSection.jsx
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* 1️⃣ ФОНОВОЕ ФОТО */}
      <div className="absolute inset-0 z-0">
        <img 
          // Замени ссылку на свое фото, если нужно. Здесь пример атмосферного тумана/дыма.
          src="src\assets\front_upscale.jpg" 
          alt="Atmospheric Background" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]"
        />
        {/* Затемнение, чтобы текст читался */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90"></div>
      </div>

      {/* 2️⃣ ЭФФЕКТ ДЫМКИ (Размытые пятна) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Пятно 1: Бирюзовое */}
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#00A29A]/20 rounded-full blur-[120px] animate-pulse"></div>
        {/* Пятно 2: Голубое */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        {/* Пятно 3: Белое (свет) */}
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-white/40 rounded-full blur-[80px] mix-blend-overlay"></div>
      </div>

      {/* 3️⃣ КОНТЕНТ */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-20">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00A29A]/30 bg-white/50 backdrop-blur-md text-[#00A29A] text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00A29A] animate-pulse"></span>
            Next-Gen Atmospheric Tech
          </div>
        </Reveal>
        
        <Reveal delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6 text-slate-900 drop-shadow-sm">
            Master The <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A29A] to-teal-600">Atmosphere.</span>
          </h1>
        </Reveal>
        
        <Reveal delay={400}>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-10 font-medium bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
            High-end industrial vaporizers and cinematic atmospheric effect equipment designed for precision, power, and absolute reliability.
          </p>
        </Reveal>
        
        <Reveal delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#products" className="w-full sm:w-auto px-8 py-4 bg-[#00A29A] text-white rounded-full font-semibold hover:bg-[#008f88] transition-all flex items-center justify-center gap-2 group shadow-lg shadow-[#00A29A]/30 hover:shadow-[#00A29A]/50 hover:-translate-y-1">
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-md border border-slate-200 text-slate-800 rounded-full font-semibold hover:bg-white hover:border-[#00A29A] hover:text-[#00A29A] transition-all shadow-sm hover:shadow-md">
              Request Quote
            </a>
          </div>
        </Reveal>
      </div>

    </section>
  );
};