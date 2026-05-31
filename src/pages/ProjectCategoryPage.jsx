// src/pages/ProjectCategoryPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Maximize2, ChevronRight } from 'lucide-react';
import { projectCategories } from '../data/projects';
import { GalleryCarouselModal } from '../components/modals/GalleryCarouselModal';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';

// Компонент одного проекта (без изменений)
const ProjectItem = ({ project }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    if (!project || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [project]);

  return (
    <div className="mb-12 last:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            <div className="p-6 sm:p-8 lg:p-10">
              <div 
                className="relative bg-slate-100 rounded-2xl overflow-hidden aspect-video group cursor-pointer shadow-inner" 
                onClick={() => setIsGalleryOpen(true)}
              >
                <div className="absolute inset-0 w-full h-full">
                  {project.images.map((imgSrc, index) => (
                    <img 
                      key={index}
                      src={imgSrc} 
                      alt={`${project.title} - ${index}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        index === currentImgIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                  <div className="bg-black/30 backdrop-blur-[2px] border border-white/20 p-3 rounded-full shadow-lg transition-all duration-300 group-hover:bg-[#00A29A]/90 group-hover:scale-110">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="mt-3 text-white font-bold text-xs sm:text-sm tracking-wide uppercase drop-shadow-md bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                    Tap to View Gallery
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm z-30">
                  {currentImgIndex + 1} / {project.images.length}
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
              <span className="text-[#00A29A] font-bold uppercase tracking-wider text-xs mb-3">Project Details</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">{project.title}</h2>
              
              <div className="prose prose-slate text-slate-600 leading-relaxed mb-8">
                <p>{project.fullDescription}</p>
              </div>

              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00A29A] hover:bg-[#008f88] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#00A29A]/30 w-full sm:w-auto group/btn"
              >
                Get Quote / Contact Us
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {isGalleryOpen && (
        <GalleryCarouselModal 
          product={{ gallery: project.images }} 
          onClose={() => setIsGalleryOpen(false)} 
        />
      )}
    </div>
  );
};


export const ProjectCategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const category = projectCategories.find(cat => cat.id === categoryId);

  // Скролл наверх при открытии категории
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  // ✅ ФУНКЦИЯ ВОЗВРАТА К СЕКЦИИ ПРОЕКТОВ
  const handleBackToProjects = () => {
    // 1. Переходим на главную страницу
    navigate('/');
    
    // 2. Ждем рендера новой страницы и скроллим к секции
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const section = document.getElementById('projects-section');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Если по какой-то причине секция не найдена, скроллим просто вниз
          window.scrollTo({ top: 800, behavior: 'smooth' });
        }
      });
    });
  };

  if (!category) {
    return <div className="min-h-screen flex items-center justify-center">Category not found</div>;
  }

  // ✅ Кнопка Back для передачи в навигацию
   // ✅ ИЗМЕНЕННАЯ КНОПКА BACK
  // Убрали rounded-full, добавили h-12 (высота как у лого) и rounded-lg (квадратные углы)
  const backButton = (
    <button 
      onClick={handleBackToProjects} 
      className="group flex items-center gap-3 px-4 h-12 text-slate-600 hover:text-[#00A29A] transition-colors font-medium bg-white/80 hover:bg-white border border-slate-200 hover:border-[#00A29A]/50 rounded-lg shadow-sm backdrop-blur-md"
      title="Back to Categories"
    >
      <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> 
      <span className="font-semibold text-sm uppercase tracking-wide">Back</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* 1. Навигация с кнопкой Back слева */}
      <Navigation leftSlot={backButton} />

      {/* 2. Контент с отступом сверху (pt-32), чтобы не перекрывался навбаром */}
      <main className="flex-grow py-12 pt-32 sm:pt-40">
        
        {category.projects.length > 0 ? (
          category.projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))
        ) : (
          <div className="text-center py-20 text-slate-500">
            No projects in this category yet.
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};