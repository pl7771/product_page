import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import { ArrowLeft, ArrowUpRight, Maximize2 } from 'lucide-react';
import { GalleryCarouselModal } from '../components/modals/GalleryCarouselModal';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { useLanguage } from '../i18n/LanguageContext';
import { useLocalizedPath } from '../i18n/routing';
import { useLocalizedProjects } from '../hooks/useLocalizedData';
import { PageSEO } from '../components/seo/PageSEO';
import { formatSeoText } from '../seo/siteConfig';
import { schemaGraph, buildBreadcrumb } from '../seo/structuredData';
import { CyclingImage } from '../components/ui/CyclingImage';
import { type } from '../styles/typography';

// Умная ссылка на секцию контактов
const ContactLink = ({ children, className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const lp = useLocalizedPath();
  const homePath = lp('/');

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
    if (location.pathname !== homePath) {
      navigate(homePath);
      // Ждём пока React отрисует главную страницу
      setTimeout(scrollToContact, 300);
    } else {
      // Если уже на главной — просто скроллим
      scrollToContact();
    }
  };

  return (
    <a href={lp('/#contact')} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

// ✅ СОВРЕМЕННЫЙ МИНИМАЛИСТИЧНЫЙ ProjectItem
const ProjectItem = ({ project }) => {
  const { t } = useLanguage();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <article className="group border-b border-slate-200 last:border-b-0 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        <div className="lg:col-span-7">
          <div 
            className="relative aspect-[16/10] bg-slate-100 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setIsGalleryOpen(true)}
          >
            <CyclingImage
              images={project.images}
              alt={project.title}
              interval={2000}
              containerClassName="absolute inset-0"
              className="w-full h-full object-cover"
              hoverScaleClassName=""
              loading="lazy"
              onIndexChange={setCurrentImgIndex}
            />
            
            {/* Оверлей при наведении */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                <Maximize2 className="w-5 h-5 text-slate-900" />
              </div>
            </div>

            {/* Счетчик */}
            <div className={`absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 px-2.5 py-1 rounded-md ${type.label} normal-case tracking-[0.04em]`}>
              {currentImgIndex + 1} / {project.images.length}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between lg:pt-2">
          <div>
            {/* Тег категории */}
            <div className={`inline-block px-2.5 py-1 bg-[#00A29A]/10 text-[#00A29A] ${type.labelBrand} normal-case tracking-[0.08em] rounded-md mb-4`}>
              {t('projectPage.caseStudy')}
            </div>

            <h2 className={`${type.cardTitle} sm:text-2xl mb-3`}>
              {project.title}
            </h2>

            <p className={`${type.bodySm} mb-6`}>
              {project.fullDescription}
            </p>
          </div>

          <ContactLink className={`inline-flex items-center gap-2 ${type.btn} text-slate-900 hover:text-[#00A29A] transition-colors group/link`}>
            {t('projectPage.getInTouch')}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </ContactLink>
        </div>

      </div>

      {isGalleryOpen && (
        <GalleryCarouselModal
          product={{ gallery: project.images, title: project.title }}
          initialIndex={currentImgIndex}
          onClose={() => setIsGalleryOpen(false)}
        />
      )}
    </article>
  );
};


export const ProjectCategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const lp = useLocalizedPath();
  const projectCategories = useLocalizedProjects();

  const category = projectCategories.find((cat) => cat.id === categoryId);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [categoryId]);

  const handleBackToProjects = () => {
    navigate(lp('/'));
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
    return (
      <div className="min-h-screen flex items-center justify-center">
        <PageSEO
          title={t('projectPage.notFound')}
          description={t('projectPage.notFound')}
          path={`/projects/${categoryId}`}
          noindex
        />
        {t('projectPage.notFound')}
      </div>
    );
  }

  const backButton = (
    <button 
      onClick={handleBackToProjects} 
      className="group flex items-center gap-2 px-3 h-10 text-slate-700 hover:text-[#00A29A] transition-colors font-medium bg-white hover:bg-white border border-slate-100 hover:border-[#00A29A]/50 rounded-md shadow-sm text-sm"
    >
      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" /> 
      <span className="font-medium">{t('nav.back')}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PageSEO
        title={formatSeoText(t('seo.projectCategory.title'), { category: category.title })}
        description={formatSeoText(t('seo.projectCategory.description'), { description: category.description })}
        path={`/projects/${categoryId}`}
        image={category.cover}
        keywords={t('meta.keywords')}
        jsonLd={schemaGraph([
          buildBreadcrumb(lang, [{ name: category.title, path: `/projects/${categoryId}` }]),
        ])}
      />
      <Navigation leftSlot={backButton} />
      
      {/* ✅ HEADER СТРАНИЦЫ */}
      <header className="pt-32 pb-12 sm:pt-40 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#00A29A]"></span>
            <span className={`${type.labelBrand} normal-case tracking-[0.08em]`}>
              {category.title.split(' ').slice(0, 2).join(' ')}
            </span>
          </div>
          <h1 className={`${type.pageTitle} mb-4 max-w-3xl`}>
            {category.title}
          </h1>
          <p className={`${type.lead} max-w-2xl`}>
            {category.description}
          </p>
        </div>
      </header>

      {/* ✅ СПИСОК ПРОЕКТОВ */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {category.projects.length > 0 ? (
            category.projects.map((project) => (
              <ProjectItem 
                key={project.id} 
                project={project} 
              />
            ))
          ) : (
            <div className="text-center py-20 text-slate-500">
              {t('projectPage.noProjects')}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};