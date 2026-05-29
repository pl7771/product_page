// src/components/ProjectsSection.jsx
import React from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

const ProjectsSection = ({ onOpenGallery }) => {
  return (
    <section id="projects" 
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden cursor-pointer group bg-slate-900 scroll-mt-24"
    >
      {/* Декоративный фон секции (легкие пятна) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00A29A]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ЛЕВАЯ ЧАСТЬ: Текст */}
          <div className="text-left space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-widest uppercase text-[#00A29A] bg-[#00A29A]/10 rounded-full border border-[#00A29A]/20">
                Our Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                Look at Our <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A29A] to-teal-600">
                  Real-World Projects
                </span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                Explore how Aether Systems technology powers industrial testing, cinematic visuals, and scientific research globally. Click the image to see the full gallery.
              </p>
            </div>

            <button 
              onClick={onOpenGallery}
              className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-[#00A29A] text-white font-bold text-lg rounded-xl hover:bg-[#008f88] transition-all duration-300 shadow-lg shadow-[#00A29A]/30 hover:shadow-[#00A29A]/50 hover:-translate-y-1"
            >
              View Full Gallery
              <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Фото в красивом боксе */}
          <div 
            className="relative group cursor-pointer"
            onClick={onOpenGallery}
          >
            {/* Эффект свечения за блоком */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00A29A] to-teal-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            
            {/* Сам блок с фото */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl border-4 border-white bg-slate-200">
              <img 
                src="src\assets\Project thumb.jpeg" 
                alt="Featured Project" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Оверлей при наведении */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ImageIcon className="w-5 h-5 text-[#00A29A]" />
                  <span className="font-bold text-slate-900">View Gallery</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;