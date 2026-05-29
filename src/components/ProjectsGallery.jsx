// src/components/ProjectsGallery.jsx
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { projects } from '../data/projects';

// 🎠 Карусель фото (без изменений)
const PhotoCarousel = ({ images, onClose }) => {
  if (!images?.length) return null;
  const [i, setI] = useState(0);
  const next = () => setI(p => (p + 1) % images.length);
  const prev = () => setI(p => (p - 1 + images.length) % images.length);
  
  return (
    <div className="fixed inset-0 z-[120] bg-black/90 flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose} />
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-full shadow-lg z-[130] transition-all duration-300 hover:scale-105 active:scale-95 border border-transparent hover:border-white/20"
        aria-label="Close carousel"
      >
        <X className="w-6 h-6"/>
      </button>
      <button 
          onClick={prev} 
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-full shadow-lg z-[110] transition-all duration-300 hover:scale-110 active:scale-95 border border-transparent hover:border-white/20"
          aria-label="Previous image">
  <ChevronLeft className="w-6 h-6"/>
</button>
      <img src={images[i]} alt="" className="relative z-0 w-full max-w-5xl h-[70vh] object-contain rounded-lg shadow-2xl"/>
      <button 
        onClick={next} 
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-full shadow-lg z-[110] transition-all duration-300 hover:scale-110 active:scale-95 border border-transparent hover:border-white/20"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6"/>
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm z-0 font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">{i + 1} / {images.length}</div>
    </div>
  );
};

// 🃏 Карточка проекта (без изменений)
const ProjectCard = ({ project, onSelect }) => (
  <div 
    className="group bg-white border border-slate-200 rounded-2xl overflow-hidden cursor-pointer hover:border-[#00A29A] hover:shadow-xl hover:shadow-[#00A29A]/10 transition-all flex flex-col"
    onClick={() => onSelect(project)}
  >
    <div className="aspect-video overflow-hidden relative">
      <img 
        src={project.cover} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
          <ImageIcon className="w-5 h-5 text-[#00A29A]" />
        </div>
      </div>
    </div>
    
    <div className="p-5 flex flex-col">
      <span className="text-xs font-semibold text-[#00A29A] uppercase tracking-wider mb-1">
        {project.category}
      </span>
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#00A29A] transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-500 text-sm leading-relaxed mb-4">
        {project.description || "No description available."}
      </p>

      <div className="flex items-center gap-2 text-slate-400 text-xs font-medium pt-2 border-t border-slate-100 mt-auto">
        <ImageIcon className="w-3.5 h-3.5" />
        <span>{project.images.length} photos</span>
      </div>
    </div>
  </div>
);

// 🪟 Главное модальное окно (ИСПРАВЛЕННОЕ ДЛЯ ТАЧ-СКРОЛЛА)
// src/components/ProjectsGallery.jsx

// ... (код компонентов PhotoCarousel и ProjectCard без изменений) ...

const ProjectsGallery = ({ onClose }) => {
  const [selected, setSelected] = useState(null);

  // Блокировка скролла фона
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);
  
  return (
    <>
      {/* Затемнение фона */}
      <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm" onClick={() => { setSelected(null); onClose(); }} />
      
      {/* ✅ ИСПРАВЛЕНИЕ: Показываем крестик галереи ТОЛЬКО если не открыто фото (!selected) */}
      {!selected && (
        <button 
          onClick={onClose} 
          className="fixed top-4 right-4 sm:top-8 sm:right-8 z-[160] p-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-full shadow-lg backdrop-blur-md transition-all border border-transparent hover:border-white/20 hover:scale-105 active:scale-95"
          aria-label="Close gallery"
        >
          <X className="w-6 h-6"/>
        </button>
      )}
      
      {/* Внешний контейнер со скроллом */}
      <div className="fixed inset-0 z-[105] flex items-start justify-center p-4 sm:p-8 overflow-y-auto overscroll-y-contain touch-pan-y">
        
        {/* Белое окно модалки */}
        <div className="relative bg-white rounded-3xl w-full max-w-6xl shadow-2xl z-[110] border border-slate-200 flex flex-col my-8">
          
          {/* Хедер */}
          <div className="flex items-center justify-between p-6 bg-white border-b border-slate-100 rounded-t-3xl">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Our Projects</h2>
              <p className="text-slate-500 text-sm mt-1">Click any project to view photos</p>
            </div>
            <div className="w-10"></div> 
          </div>
          
          {/* Сетка проектов */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-slate-50/50">
            {projects.map(p => <ProjectCard key={p.id} project={p} onSelect={setSelected} />)}
          </div>
          
          {/* Отступ снизу */}
          <div className="h-8"></div>
        </div>
      </div>

      {/* Карусель фото (поверх всего) */}
      {selected && <PhotoCarousel images={selected.images} onClose={() => setSelected(null)} />}
    </>
  );
};

export default ProjectsGallery;