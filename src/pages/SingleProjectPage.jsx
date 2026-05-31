// src/pages/SingleProjectPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Maximize2, ChevronRight } from 'lucide-react';
import { projectCategories } from '../data/projects';
import { GalleryCarouselModal } from '../components/modals/GalleryCarouselModal';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';

export const SingleProjectPage = () => {
  const { categoryId, projectId } = useParams();
  const navigate = useNavigate();
  
  const category = projectCategories.find(cat => cat.id === categoryId);
  const project = category?.projects.find(p => p.id === parseInt(projectId));

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    if (!project || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [project]);

  if (!project) return <div className="min-h-screen flex items-center justify-center">Project not found</div>;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation /> 

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 pt-32 w-full">
        
        {/* === МОБИЛЬНАЯ ВЕРСИЯ (Порядок: Заголовок -> Фото -> Текст) === */}
        <div className="lg:hidden flex flex-col gap-8">
          {/* 1. Заголовок */}
          <div>
            <span className="text-[#00A29A] font-bold uppercase tracking-wider text-xs mb-2 block">Project Details</span>
            <h1 className="text-3xl font-bold text-slate-900">{project.title}</h1>
          </div>

          {/* 2. Фото */}
          <div 
            className="relative bg-slate-100 rounded-2xl overflow-hidden aspect-video shadow-lg" 
            onClick={() => setIsGalleryOpen(true)}
          >
             <img src={project.images[currentImgIndex]} alt={project.title} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Maximize2 className="w-8 h-8 text-white drop-shadow-md" />
             </div>
             <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
               {currentImgIndex + 1} / {project.images.length}
             </div>
          </div>

          {/* 3. Описание */}
          <div>
            <p className="text-slate-600 leading-relaxed mb-6">{project.fullDescription}</p>
            <button 
              onClick={() => setIsGalleryOpen(true)}
              className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-[#00A29A] transition-colors flex items-center justify-center gap-2"
            >
              View Full Gallery <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* === ДЕСКТОПНАЯ ВЕРСИЯ (Порядок: Фото слева, Текст справа) === */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
          {/* Левая колонка: Фото */}
          <div 
            className="relative bg-slate-100 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg cursor-pointer group" 
            onClick={() => setIsGalleryOpen(true)}
          >
             <img src={project.images[currentImgIndex]} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <Maximize2 className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
             </div>
             <div className="absolute bottom-4 left-4 bg-black/50 text-white text-sm px-3 py-1 rounded">
               {currentImgIndex + 1} / {project.images.length}
             </div>
          </div>

          {/* Правая колонка: Текст */}
          <div className="flex flex-col justify-center">
            <span className="text-[#00A29A] font-bold uppercase tracking-wider text-xs mb-2">Project Details</span>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">{project.title}</h1>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">{project.fullDescription}</p>
            <button 
              onClick={() => setIsGalleryOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-[#00A29A] transition-colors shadow-lg w-fit"
            >
              View Full Gallery <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </main>

      <Footer />

      {isGalleryOpen && (
        <GalleryCarouselModal 
          product={{ gallery: project.images }} 
          onClose={() => setIsGalleryOpen(false)} 
        />
      )}
    </div>
  );
};