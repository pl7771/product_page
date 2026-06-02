// src/components/ProjectsSection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectCategories } from '../data/projects';

const ProjectsSection = () => {
  return (
    <section id="projects-section" className="relative py-16 sm:py-24 overflow-hidden bg-slate-50">
      {/* Декоративный фон */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#00A29A]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Our Expertise
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Explore our solutions across key industries. Click a category to see specific projects.
          </p>
        </div>

        {/* ✅ УМЕНЬШЕННЫЕ КАРТОЧКИ: 2 колонки, меньшая высота */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {projectCategories.map((cat) => (
            <Link 
              key={cat.id}
              to={`/projects/${cat.id}`}
              className="group relative h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#00A29A]/20 transition-all duration-500 hover:-translate-y-1 border border-slate-200 bg-white block"
            >
              {/* Фото категории с эффектом Zoom */}
              <img 
                src={cat.cover} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Градиентный оверлей */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Контент поверх фото */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex flex-col justify-between h-full text-white transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                
                {/* Иконка справа сверху (чуть меньше) */}
                <div className="mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 self-end">
                   <div className="w-9 h-9 bg-[#00A29A] rounded-lg flex items-center justify-center shadow-md">
                      <ArrowRight className="w-4 h-4 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                   </div>
                </div>

                {/* Текст снизу */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black mb-2 leading-tight drop-shadow-md text-white">
                    {cat.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-3 drop-shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                    {cat.description}
                  </p>
                  
                  {/* Ссылка View Projects */}
                  <div className="flex items-center gap-1.5 text-[#00A29A] font-bold text-xs mt-auto pt-2 border-t border-white/20 group-hover:border-[#00A29A]/50 transition-colors">
                    View Projects 
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;