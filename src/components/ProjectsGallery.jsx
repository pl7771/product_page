import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { projects } from '../data/projects';

// 🎠 Карусель фото
const PhotoCarousel = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      <button onClick={onClose} className="absolute top-4 right-4 p-2 text-white hover:text-emerald-400 transition-colors z-10">
        <X className="w-8 h-8" />
      </button>
      
      <button onClick={prev} className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10">
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <div className="max-w-5xl w-full">
        <img 
          src={images[currentIndex]} 
          alt={`Project photo ${currentIndex + 1}`}
          className="w-full h-[70vh] object-contain rounded-lg"
        />
        <div className="text-center text-white/70 mt-3">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      <button onClick={next} className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10">
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

// 🃏 Карточка проекта
const ProjectCard = ({ project, onSelect }) => (
  <div 
    className="group relative bg-slate-900 rounded-2xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-emerald-400/50 transition-all"
    onClick={() => onSelect(project)}
  >
    <div className="aspect-video overflow-hidden">
      <img 
        src={project.cover} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
        {project.category}
      </span>
      <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
      <p className="text-slate-300 text-sm mt-2 line-clamp-2">{project.description}</p>
      
      <div className="flex items-center gap-2 mt-4 text-white/80 text-sm">
        <ImageIcon className="w-4 h-4" />
        <span>{project.images.length} photos</span>
      </div>
    </div>
  </div>
);

// 🪟 Основное модальное окно
const ProjectsGallery = ({ isOpen, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  if (!isOpen) return null;

  return (
    <>
      {/* Затемнение */}
      <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Контент */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="relative bg-slate-900 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
          {/* Заголовок */}
          <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-slate-900/95 backdrop-blur border-b border-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-white">Our Projects</h2>
              <p className="text-slate-400 text-sm mt-1">Click any project to view photos</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full transition-colors">
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
          
          {/* Сетка */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[calc(90vh-100px)]">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
            ))}
          </div>
        </div>
      </div>

      {/* Карусель */}
      {selectedProject && (
        <PhotoCarousel images={selectedProject.images} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

export default ProjectsGallery;