// src/components/modals/SingleProjectModal.jsx
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryCarouselModal } from './GalleryCarouselModal'; // Твоя существующая карусель

export const SingleProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // 🔄 Авто-смена фото каждую секунду
  useEffect(() => {
    if (project.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
    }, 1000); // 1000 мс = 1 секунда

    return () => clearInterval(interval);
  }, [project.images.length]);

  // Блокировка скролла
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-md" onClick={onClose} />
      
      <button 
        onClick={onClose} 
        className="fixed top-4 right-4 sm:top-8 sm:right-8 z-[160] p-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-full shadow-lg transition-all hover:scale-105"
      >
        <X className="w-6 h-6"/>
      </button>

      <div className="fixed inset-0 z-[105] flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
        <div className="relative bg-white rounded-3xl w-full max-w-5xl shadow-2xl z-[110] border border-slate-200 flex flex-col md:flex-row overflow-hidden my-8">
          
          {/* Левая часть: Фото */}
          <div className="w-full md:w-1/2 relative bg-slate-100 group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
             <img 
               src={project.images[currentImgIndex]} 
               alt={project.title} 
               className="w-full h-[300px] md:h-full object-cover transition-opacity duration-500 ease-in-out"
             />
             
             {/* Индикатор клика */}
             <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-6 h-6 text-[#00A29A]" />
                </div>
             </div>

             {/* Счетчик фото */}
             <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
               {currentImgIndex + 1} / {project.images.length}
             </div>
          </div>

          {/* Правая часть: Описание */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
            <span className="text-[#00A29A] font-bold uppercase tracking-wider text-xs mb-2">Project Details</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{project.title}</h2>
            
            <div className="prose prose-slate text-slate-600 leading-relaxed mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              <p>{project.fullDescription}</p>
            </div>

            <button 
              onClick={() => setIsGalleryOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-[#00A29A] transition-colors shadow-lg"
            >
              View Full Gallery <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Если открыли галерею - показываем твою существующую карусель */}
      {isGalleryOpen && (
        <GalleryCarouselModal
          product={{ gallery: project.images, title: project.title }}
          initialIndex={currentImgIndex}
          onClose={() => setIsGalleryOpen(false)}
        />
      )}
    </>
  );
};

