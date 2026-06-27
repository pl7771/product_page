// src/pages/legal/LegalLayout.jsx
import { Navigation } from '../../components/layout/Navigation';
import { Footer } from '../../components/layout/Footer';
import { useEffect, useState } from 'react';


export const LegalLayout = ({ title, subtitle, children, sections }) => {
  const [activeSection, setActiveSection] = useState('');

  // Подсветка активного раздела при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation />
      
      {/* Hero Header */}
      <div className="bg-white border-b border-slate-200 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl">{subtitle}</p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation (Desktop only) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-4">
                On this page
              </p>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-[#00A29A]/10 text-[#00A29A] border-l-2 border-[#00A29A]'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 border-l-2 border-transparent'
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </div>
          </aside>

          {/* Document Content */}
          <div className="lg:col-span-9 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
            <div className="legal-content space-y-12">
              {children}
            </div>
            
            {/* Bottom CTA / Contact */}
            <div className="mt-16 pt-8 border-t border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Have questions?</h3>
              <p className="text-slate-500 mb-4">
                If you need clarification on any of these terms, please contact our legal team.
              </p>
              <a 
                href="mailto:hsshandao@outlook.com"
                className="inline-flex items-center gap-2 text-[#00A29A] font-semibold hover:text-[#008f88] transition-colors"
              >
                Contact Support →
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

