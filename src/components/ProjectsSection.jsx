// src/components/ProjectsSection.jsx
import React from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

const ProjectsSection = ({ onOpenGallery }) => {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden bg-slate-50">
      {/* Декоративный фон */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00A29A]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ЛЕВАЯ ЧАСТЬ: Текст и CTA (занимает 5 колонок) */}
          <div className="lg:col-span-5 space-y-8 relative text-center lg:text-left">
            
            {/* Бейдж */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-slate-100 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-[#00A29A] animate-pulse"></span>
              <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">Featured Works</span>
            </div>

            {/* Заголовок с акцентом */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              We Build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A29A] to-teal-600">
                Atmospheres.
              </span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              From industrial dust suppression to cinematic fog effects, our technology shapes the environment for science, film, and industry.
            </p>

            {/* Кнопка с эффектом */}
            <button 
              onClick={onOpenGallery}
              className="group relative inline-flex items-center justify-center lg:justify-start gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl overflow-hidden hover:bg-[#00A29A] transition-all duration-300 shadow-xl hover:shadow-[#00A29A]/40 hover:-translate-y-1 w-full lg:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                View All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Эффект блика при наведении */}
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
            </button>

            {/* Статистика (дополнительный элемент доверия) */}
            <div className="flex gap-8 pt-4 border-t border-slate-200/60 mt-8 justify-center lg:justify-start">
              <div>
                <p className="text-3xl font-bold text-slate-900">50+</p>
                <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Global Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">15+</p>
                <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Креативная композиция из фото */}
          <div className="lg:col-span-7 relative h-[400px] sm:h-[500px] lg:h-[600px]">
            
            {/* Карточка 1: Основная (большая) */}
            <div 
              className="absolute top-0 right-0 w-[70%] h-[70%] bg-white p-2 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer group z-10"
              onClick={onOpenGallery}
            >
              <div className="w-full h-full overflow-hidden rounded-xl relative">
                <img 
                  src="src\assets\Project thumb.jpeg" 
                  alt="Project 1" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-bold text-sm">CinemaFX Studio</p>
                </div>
              </div>
            </div>

            {/* Карточка 2: Средняя (слева снизу) */}
            <div 
              className="absolute bottom-10 left-0 w-[55%] h-[55%] bg-white p-2 rounded-2xl shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-20 cursor-pointer group"
              onClick={onOpenGallery}
            >
              <div className="w-full h-full overflow-hidden rounded-xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                  alt="Project 2" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-bold text-sm">Industrial Dust Control</p>
                </div>
              </div>
            </div>

            {/* Карточка 3: Маленькая (декоративная, по центру) */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-white p-2 rounded-2xl shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500 z-10 cursor-pointer group hidden sm:block"
              onClick={onOpenGallery}
            >
               <div className="w-full h-full overflow-hidden rounded-xl relative">
                <img 
                  src="src/assets/front_upscale.jpg" 
                  alt="Project 3" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* ✅ КНОПКА "TAP TO EXPLORE" (Теперь видна везде!) */}
            <button 
              onClick={onOpenGallery}
              // Убрали hidden lg:flex, добавили адаптивные отступы right-2 для мобильных и right-10 для десктопа
              className="absolute top-1/2 right-2 sm:right-10 -translate-y-1/2 bg-white/90 backdrop-blur px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg flex items-center gap-1.5 sm:gap-2 animate-bounce hover:scale-110 hover:bg-white transition-all z-30 cursor-pointer border border-slate-200"
            >
              <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A29A]" />
              <span className="text-[10px] sm:text-xs font-bold text-slate-800">Tap to Explore</span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;