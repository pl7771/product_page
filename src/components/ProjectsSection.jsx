import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useLocalizedProjects } from '../hooks/useLocalizedData';
import { OptimizedImage } from './ui/OptimizedImage';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const projectCategories = useLocalizedProjects();

  return (
    <section id="projects-section" className="relative py-16 sm:py-24 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#00A29A]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-[#00A29A] tracking-widest uppercase mb-3">{t('projectsSection.eyebrow')}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">{t('projectsSection.title')}</h3>
          <p className="text-slate-600 text-lg">{t('projectsSection.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {projectCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/projects/${cat.id}`}
              className="group relative h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#00A29A]/20 transition-all duration-500 hover:-translate-y-1 border border-slate-200 bg-white block"
            >
              <OptimizedImage
                src={cat.cover}
                alt={cat.title}
                loading="lazy"
                pictureClassName="block w-full h-full"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex flex-col justify-end h-full text-white transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black mb-2 leading-tight drop-shadow-md text-white">{cat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-3 drop-shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">{cat.description}</p>
                  <div className="flex items-center gap-1.5 text-[#00A29A] font-bold text-xs mt-auto pt-2 border-t border-white/20 group-hover:border-[#00A29A]/50 transition-colors">
                    {t('projectsSection.viewProjects')}
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
