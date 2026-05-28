import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = ({ onOpenGallery }) => {
  return (
    <section 
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden cursor-pointer group"
      onClick={onOpenGallery}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpenGallery()}
    >
      {/* Фоновое изображение */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=100&w=1920"
          alt="Projects background"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      {/* Контент */}
      <div className="relative z-10 text-center px-6">
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
          Our Portfolio
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Look at Our<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Projects
          </span>
        </h2>
        <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
          Explore real-world implementations of Aether Systems technology across industries
        </p>
        
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/25 group/btn">
          View Gallery
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>

      {/* Индикатор */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;