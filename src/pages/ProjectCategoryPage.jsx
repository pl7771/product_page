// src/pages/ProjectCategoryPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import { ArrowLeft, ArrowUpRight, Maximize2 } from 'lucide-react';
import { projectCategories } from '../data/projects';
import { GalleryCarouselModal } from '../components/modals/GalleryCarouselModal';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';

// Умная ссылка на секцию контактов
const ContactLink = ({ children, className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleClick = (e) => {
    e.preventDefault();
    const scrollToContact = () => {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Если элемент ещё не отрендерился, пробуем через 400мс
        setTimeout(() => {
          const retry = document.getElementById('contact');
          if (retry) retry.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400);
      }
    };
    
    // Если мы НЕ на главной — сначала переходим, потом скроллим
    if (location.pathname !== '/') {
      navigate('/');
      // Ждём пока React отрисует главную страницу
      setTimeout(scrollToContact, 300);
    } else {
      // Если уже на главной — просто скроллим
      scrollToContact();
    }
  };
  
  return (
    <a href="/#contact" onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

// ✅ СОВРЕМЕННЫЙ МИНИМАЛИСТИЧНЫЙ ProjectItem
const ProjectItem = ({ project, index }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    if (!project || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [project]);

  return (
    <article className="group border-b border-slate-200 last:border-b-0 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        
        {/* ✅ НОМЕР ПРОЕКТА + ТЕГ */}
        <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-3 lg:gap-4">
          <span className="text-xs font-mono text-slate-400">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* ✅ КАРТИНКА (7 колонок из 12) */}
        <div className="lg:col-span-7">
          <div 
            className="relative aspect-[16/10] bg-slate-100 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setIsGalleryOpen(true)}
          >
            {project.images.map((imgSrc, imgIndex) => (
              <img 
                key={imgIndex}
                src={imgSrc} 
                alt={`${project.title} - ${imgIndex}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  imgIndex === currentImgIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              />
            ))}
            
            {/* Оверлей при наведении */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                <Maximize2 className="w-5 h-5 text-slate-900" />
              </div>
            </div>

            {/* Счетчик */}
            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium">
              {currentImgIndex + 1} / {project.images.length}
            </div>
          </div>
        </div>

        {/* ✅ ТЕКСТ (4 колонки из 12) */}
        <div className="lg:col-span-4 flex flex-col justify-between lg:pt-2">
          <div>
            {/* Тег категории */}
            <div className="inline-block px-2.5 py-1 bg-[#00A29A]/10 text-[#00A29A] text-[10px] font-semibold uppercase tracking-wider rounded-md mb-4">
              Case Study
            </div>

            {/* Заголовок */}
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-tight">
              {project.title}
            </h2>

            {/* Описание */}
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {project.fullDescription}
            </p>
          </div>

          {/* Кнопка */}
          <ContactLink className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#00A29A] transition-colors group/link">
  Get in touch
  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
</ContactLink>
        </div>

      </div>

      {isGalleryOpen && (
        <GalleryCarouselModal 
          product={{ gallery: project.images }} 
          onClose={() => setIsGalleryOpen(false)} 
        />
      )}
    </article>
  );
};


export const ProjectCategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const category = projectCategories.find(cat => cat.id === categoryId);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [categoryId]);

  const handleBackToProjects = () => {
    navigate('/');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const section = document.getElementById('projects-section');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  };

  if (!category) {
    return <div className="min-h-screen flex items-center justify-center">Category not found</div>;
  }

  const backButton = (
    <button 
      onClick={handleBackToProjects} 
      className="group flex items-center gap-2 px-3 h-10 text-slate-600 hover:text-[#00A29A] transition-colors font-medium bg-white/80 hover:bg-white border border-slate-200 hover:border-[#00A29A]/50 rounded-md shadow-sm backdrop-blur-md text-sm"
    >
      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" /> 
      <span className="font-medium">Back</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation leftSlot={backButton} />
      
      {/* ✅ HEADER СТРАНИЦЫ */}
      <header className="pt-32 pb-12 sm:pt-40 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#00A29A]"></span>
            <span className="text-xs font-semibold text-[#00A29A] uppercase tracking-wider">
              {category.title.split(' ').slice(0, 2).join(' ')}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 max-w-3xl leading-tight">
            {category.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            {category.description}
          </p>
          
          {/* Счетчик проектов */}
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
            <span className="font-mono">
              {String(category.projects.length).padStart(2, '0')} Projects
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>2024—2026</span>
          </div>
        </div>
      </header>

      {/* ✅ СПИСОК ПРОЕКТОВ */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {category.projects.length > 0 ? (
            category.projects.map((project, index) => (
              <ProjectItem 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))
          ) : (
            <div className="text-center py-20 text-slate-500">
              No projects in this category yet.
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};