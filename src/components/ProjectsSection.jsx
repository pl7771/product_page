import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading, SectionLead } from './ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';
import { useLocalizedPath } from '../i18n/routing';
import { useLocalizedProjects } from '../hooks/useLocalizedData';
import { OptimizedImage } from './ui/OptimizedImage';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const lp = useLocalizedPath();
  const projectCategories = useLocalizedProjects();

  return (
    <section id="projects-section" className="relative py-12 sm:py-16 overflow-hidden bg-slate-50 section-mesh">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#00A29A]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <SectionHeading centered className="mb-4">
            {t('projectsSection.title')}
          </SectionHeading>
          <SectionLead centered>{t('projectsSection.subtitle')}</SectionLead>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {projectCategories.map((cat) => (
            <Link
              key={cat.id}
              to={lp(`/projects/${cat.id}`)}
              className="group relative h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-2xl hover:shadow-[#00A29A]/20 transition-all duration-500 hover:-translate-y-1.5 border border-slate-200/80 bg-white block"
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
                  <h3 className="font-sans text-xl sm:text-2xl font-normal tracking-[0.01em] leading-snug !text-white mb-2 drop-shadow-md">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed !text-white/90 line-clamp-2 mb-3 drop-shadow-sm">
                    {cat.description}
                  </p>
                  <div className="flex items-center gap-2 !text-[#00A29A] font-sans text-sm sm:text-base font-bold tracking-[0.04em] mt-auto pt-2 border-t border-white/20 group-hover:border-[#00A29A]/50 transition-colors">
                    {t('projectsSection.viewProjects')}
                    <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#00A29A] transform group-hover:translate-x-1 transition-transform duration-300" />
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
