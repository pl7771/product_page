// src/components/ProjectsSection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectCategories } from '../data/projects';

const ProjectsSection = () => {
  return (
    // ✅ ВАЖНО: Добавлен id="projects-section" для кнопки "Назад"
    <section id="projects" className="relative py-20 sm:py-32 overflow-hidden bg-slate-50 scroll-mt-24">
      {/* Декоративный фон */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00A29A]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our solutions across four key industries. Click a category to see specific projects.
          </p>
        </div>

        {/* Сетка из 4 категорий */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {projectCategories.map((cat) => (
            <Link 
              key={cat.id}
              to={`/projects/${cat.id}`}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#00A29A]/20 transition-all duration-500 hover:-translate-y-2 border border-slate-200 bg-white block"
            >
              {/* Фото категории с эффектом Zoom */}
              <img 
                src={cat.cover} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Градиентный оверлей (снизу вверх) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Контент поверх фото */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                
                {/* Иконка категории */}
                <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                   <div className="w-10 h-10 bg-[#00A29A] rounded-lg flex items-center justify-center shadow-md">
                      <ArrowRight className="w-5 h-5 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                   </div>
                </div>

                {/* Заголовок категории (Крупный) */}
                <h3 className="text-3xl sm:text-4xl font-black mb-3 leading-tight drop-shadow-md group-hover:text-[#00A29A] transition-colors duration-300">
                  {cat.title}
                </h3>
                
                <p className="text-sm text-slate-300 line-clamp-3 mb-4 drop-shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                  {cat.description}
                </p>
                
                {/* Кнопка-ссылка "View Projects" */}
                <div className="flex items-center gap-2 text-[#00A29A] font-semibold text-sm mt-auto pt-2 border-t border-white/20 group-hover:border-[#00A29A]/50 transition-colors">
                  View Projects 
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// ✅ ВАЖНО: Правильный экспорт по умолчанию
export default ProjectsSection;