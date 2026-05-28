import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { projects } from '../data/projects';

// 🎠 Карусель фото (исправленная)
const PhotoCarousel = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  // 🆕 Блокируем скролл и добавляем Escape
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[120] bg-green-950/95 flex items-center justify-center p-4">
      {/* 🆕 Кнопка закрытия с ВЫСОКИМ z-index */}
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 p-3 bg-green-800 hover:bg-green-700 rounded-full text-white transition-colors z-[130] shadow-lg hover:scale-110"
        aria-label="Close gallery"
      >
        <X className="w-6 h-6" />
      </button>
      
      <button 
        onClick={prev} 
        className="absolute left-4 p-3 bg-green-900/80 hover:bg-green-800 rounded-full text-white transition-colors z-[110]"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <div className="max-w-5xl w-full">
        <img 
          src={images[currentIndex]} 
          alt={`Project photo ${currentIndex + 1}`}
          className="w-full h-[70vh] object-contain rounded-lg"
        />
        <div className="text-center text-green-400 text-sm mt-3">
          {currentIndex + 1} / {images.length}
        </div>
        {/* Индикаторы */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-emerald-400 w-6' : 'bg-green-700 hover:bg-green-600'
              }`}
            />
          ))}
        </div>
      </div>
      
      <button 
        onClick={next} 
        className="absolute right-4 p-3 bg-green-900/80 hover:bg-green-800 rounded-full text-white transition-colors z-[110]"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

// 🃏 Карточка проекта
const ProjectCard = ({ project, onSelect }) => (
  <div 
    className="group relative bg-green-900 rounded-2xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-emerald-400/50 transition-all"
    onClick={(e) => { e.stopPropagation(); onSelect(project); }}
  >
    <div className="aspect-video overflow-hidden">
      <img 
        src={project.cover} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-transparent opacity-80" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
        {project.category}
      </span>
      <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
      <p className="text-green-400/80 text-sm mt-2 line-clamp-2">{project.description}</p>
      <div className="flex items-center gap-2 mt-4 text-green-400/80 text-sm">
        <ImageIcon className="w-4 h-4" />
        <span>{project.images.length} photos</span>
      </div>
    </div>
  </div>
);

// 🪟 Основное модальное окно (исправленное)
const ProjectsGallery = ({ isOpen, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // 🆕 Блокируем скролл страницы
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // 🆕 Закрытие по Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (selectedProject) {
          setSelectedProject(null);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, selectedProject, onClose]);

  if (!isOpen) return null;

  const handleClose = (e) => {
    e?.stopPropagation();
    if (selectedProject) {
      setSelectedProject(null);
    } else {
      onClose();
    }
  };

  return (
    <>
      {/* Затемнение — клик закрывает */}
      <div 
        className="fixed inset-0 z-[100] bg-green-950/80 backdrop-blur-sm" 
        onClick={handleClose}
      />
      
      {/* Контент — клик НЕ закрывает (остановка всплытия) */}
      <div className="fixed inset-0 z-[105] flex items-center justify-center p-4 overflow-y-auto pointer-events-none">
        <div 
          className="relative bg-green-900 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Заголовок */}
          <div className="sticky top-0 z-[110] flex items-center justify-between p-6 bg-green-900/95 backdrop-blur border-b border-green-800">
            <div>
              <h2 className="text-2xl font-bold text-white">Our Projects</h2>
              <p className="text-green-400/80 text-sm mt-1">Click any project to view photos</p>
            </div>
            <button 
              onClick={handleClose} 
              className="p-2 hover:bg-green-800 rounded-full transition-colors"
              aria-label="Close gallery"
            >
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

      {/* Карусель (рендерится поверх) */}
      {selectedProject && (
        <PhotoCarousel 
          images={selectedProject.images} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
};

export default ProjectsGallery;