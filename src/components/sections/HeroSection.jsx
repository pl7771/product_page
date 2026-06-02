// src/components/sections/HeroSection.jsx
import { ArrowRight, Play } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* 🖼️ ФОНОВОЕ ИЗОБРАЖЕНИЕ ПРОДУКТА */}
      {/* Замени путь на любое свое фото. Сейчас стоит фото бетонного завода */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/data/concrete-batching-plant/4.jpeg')" 
        }}
      />

      {/* 🌫️ ГРАДИЕНТНЫЙ ОВЕРЛЕЙ: затемняет слева (для текста), справа прозрачно */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/20" />
      
      {/* Дополнительное затемнение снизу для глубины */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

      {/* 📝 КОНТЕНТ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-32 w-full">
        <div className="max-w-3xl">
          
          {/* Бейдж */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-[#00A29A] rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Industrial Environmental Solutions
            </span>
          </div>

          {/* Заголовок */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1] drop-shadow-2xl">
            Precision <br/>
            <span className="text-[#00A29A]">Atomization</span> <br/>
            Systems
          </h1>

          {/* Подзаголовок */}
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed mb-10 drop-shadow-lg">
            Advanced high-pressure misting solutions for industrial dust suppression, agricultural climate control, and environmental hygiene. Engineered for reliability.
          </p>

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products" 
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00A29A] hover:bg-[#008f88] text-white font-bold rounded-xl transition-all shadow-2xl shadow-[#00A29A]/30 hover:shadow-[#00A29A]/50 hover:-translate-y-1"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl border border-white/30 transition-all"
            >
              <Play className="w-5 h-5" />
              Request Demo
            </a>
          </div>

          {/* Статистика внизу */}
          <div className="mt-16 pt-8 border-t border-white/20 grid grid-cols-3 gap-8 max-w-2xl">
            <div>
              <div className="text-3xl font-black text-[#00A29A] mb-1">90%+</div>
              <div className="text-xs text-slate-300 uppercase tracking-wider">Dust Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#00A29A] mb-1">24/7</div>
              <div className="text-xs text-slate-300 uppercase tracking-wider">Automated Control</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#00A29A] mb-1">100+</div>
              <div className="text-xs text-slate-300 uppercase tracking-wider">Installations</div>
            </div>
          </div>

        </div>
      </div>

      {/* Индикатор скролла */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full"></div>
        </div>
      </div>

    </section>
  );
};