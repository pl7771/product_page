// src/components/ProjectsGallery.jsx
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { projects } from '../data/projects';

// 🎠 Карусель фото (обновлена под светлую тему)
const PhotoCarousel = ({ images, onClose }) => {
  if (!images?.length) return null;
  const [i, setI] = useState(0);
  const next = () => setI(p => (p + 1) % images.length);
  const prev = () => setI(p => (p - 1 + images.length) % images.length);
  
  return (
    // ✅ Фон затемнения чуть мягче
    <div className="fixed inset-0 z-[120] bg-black/90 flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose} />
      
      <button onClick={onClose} className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-[130] transition-colors">
        <X className="w-6 h-6"/>
      </button>
      
      <button onClick={prev} className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-[110] transition-colors">
        <ChevronLeft className="w-6 h-6"/>
      </button>
      
      <img src={images[i]} alt="" className="relative z-0 w-full max-w-5xl h-[70vh] object-contain rounded-lg shadow-2xl"/>
      
      <button onClick={next} className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-[110] transition-colors">
        <ChevronRight className="w-6 h-6"/>
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm z-0 font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
        {i + 1} / {images.length}
      </div>
    </div>
  );
};

// 🃏 Карточка проекта (обновлена под светлую тему)
const ProjectCard = ({ project, onSelect }) => (
  <div 
    className="group bg-white border border-slate-200 rounded-2xl overflow-hidden cursor-pointer hover:border-[#00A29A] hover:shadow-xl hover:shadow-[#00A29A]/10 transition-all"
    onClick={() => onSelect(project)}
  >
    <div className="aspect-video overflow-hidden relative">
      <img 
        src={project.cover} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Индикация клика */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
          <ImageIcon className="w-5 h-5 text-[#00A29A]" />
        </div>
      </div>
    </div>
    
    <div className="p-5">
      <span className="text-xs font-semibold text-[#00A29A] uppercase tracking-wider">
        {project.category}
      </span>
      <h3 className="text-lg font-bold text-slate-900 mt-1.5 mb-2 group-hover:text-[#00A29A] transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-3 line-clamp-2">
        {project.description}
      </p>
      <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
        <ImageIcon className="w-3.5 h-3.5" />
        <span>{project.images.length} photos</span>
      </div>
    </div>
  </div>
);

// 🪟 Главное модальное окно (обновлено под светлую тему)
const ProjectsGallery = ({ onClose }) => {
  const [selected, setSelected] = useState(null);
  
  return (
    <>
      {/* Затемнение фона */}
      <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm" onClick={() => { setSelected(null); onClose(); }} />
      
      {/* Контент модалки */}
      <div className="fixed inset-0 z-[105] flex items-center justify-center p-4 overflow-y-auto">
        <div className="relative bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl z-[110] border border-slate-200">
          
          {/* Хедер модалки */}
          <div className="sticky top-0 z-[115] flex items-center justify-between p-6 bg-white/95 backdrop-blur border-b border-slate-100">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Our Projects</h2>
              <p className="text-slate-500 text-sm mt-1">Click any project to view photos</p>
            </div>
            <button onClick={() => { setSelected(null); onClose(); }} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-[#00A29A]">
              <X className="w-6 h-6"/>
            </button>
          </div>
          
          {/* Сетка проектов */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[calc(90vh-100px)] bg-slate-50/50">
            {projects.map(p => <ProjectCard key={p.id} project={p} onSelect={setSelected} />)}
          </div>
        </div>
      </div>

      {/* Карусель (поверх всего) */}
      {selected && <PhotoCarousel images={selected.images} onClose={() => setSelected(null)} />}
    </>
  );
};

export default ProjectsGallery;