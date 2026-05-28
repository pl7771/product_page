// src/components/ProjectsGallery.jsx
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { projects } from '../data/projects';

// 🎠 Карусель фото (минималистичная)
const PhotoCarousel = ({ images, onClose }) => {
  if (!images?.length) return null;
  const [i, setI] = useState(0);
  const next = () => setI(p => (p+1) % images.length);
  const prev = () => setI(p => (p-1+images.length) % images.length);
  
  return (
    <div className="fixed inset-0 z-[120] bg-black/95 flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose} />
      <button onClick={onClose} className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-[130]"><X className="w-6 h-6"/></button>
      <button onClick={prev} className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-[110]"><ChevronLeft className="w-6 h-6"/></button>
      <img src={images[i]} alt="" className="relative z-0 w-full max-w-5xl h-[70vh] object-contain rounded-lg"/>
      <button onClick={next} className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-[110]"><ChevronRight className="w-6 h-6"/></button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm z-0">{i+1} / {images.length}</div>
    </div>
  );
};

// 🃏 Карточка проекта
const ProjectCard = ({ project, onSelect }) => (
  <div className="group relative bg-green-900 rounded-2xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-emerald-400/50 transition-all" onClick={() => onSelect(project)}>
    <div className="aspect-video overflow-hidden">
      <img src={project.cover} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
      <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-transparent opacity-80"/>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">{project.category}</span>
      <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
      <p className="text-green-400/80 text-sm mt-2 line-clamp-2">{project.description}</p>
      <div className="flex items-center gap-2 mt-4 text-green-400/80 text-sm"><ImageIcon className="w-4 h-4"/><span>{project.images.length} photos</span></div>
    </div>
  </div>
);

// 🪟 Главное модальное окно
const ProjectsGallery = ({ onClose }) => {
  const [selected, setSelected] = useState(null);
  
  return (
    <>
      <div className="fixed inset-0 z-[100] bg-black/80" onClick={() => { setSelected(null); onClose(); }} />
      <div className="fixed inset-0 z-[105] flex items-center justify-center p-4 overflow-y-auto">
        <div className="relative bg-green-900 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl z-[110]">
          <div className="sticky top-0 z-[115] flex items-center justify-between p-6 bg-green-900/95 border-b border-green-800">
            <div><h2 className="text-2xl font-bold text-white">Our Projects</h2><p className="text-green-400/80 text-sm">Click any project to view photos</p></div>
            <button onClick={() => { setSelected(null); onClose(); }} className="p-2 hover:bg-green-800 rounded-full"><X className="w-6 h-6 text-white"/></button>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[calc(90vh-100px)]">
            {projects.map(p => <ProjectCard key={p.id} project={p} onSelect={setSelected} />)}
          </div>
        </div>
      </div>
      {selected && <PhotoCarousel images={selected.images} onClose={() => setSelected(null)} />}
    </>
  );
};

export default ProjectsGallery;