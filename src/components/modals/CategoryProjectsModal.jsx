// src/components/modals/CategoryProjectsModal.jsx
import React, { useState, useEffect } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

export const CategoryProjectsModal = ({ category, onClose, onProjectClick }) => {
  if (!category) return null;

  // Блокировка скролла
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm" onClick={onClose} />
      
      <button 
        onClick={onClose} 
        className="fixed top-4 right-4 sm:top-8 sm:right-8 z-[160] p-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-full shadow-lg transition-all hover:scale-105"
      >
        <X className="w-6 h-6"/>
      </button>

      <div className="fixed inset-0 z-[105] flex items-start justify-center p-4 sm:p-8 overflow-y-auto">
        <div className="relative bg-white rounded-3xl w-full max-w-4xl shadow-2xl z-[110] border border-slate-200 flex flex-col my-8 min-h-[50vh]">
          
          <div className="p-8 border-b border-slate-100">
            <span className="text-[#00A29A] font-bold uppercase tracking-wider text-sm">Category</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">{category.title}</h2>
            <p className="text-slate-600 mt-2">{category.description}</p>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/50">
            {category.projects.length > 0 ? (
              category.projects.map(project => (
                <div 
                  key={project.id}
                  onClick={() => onProjectClick(project)}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group border border-slate-100"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img src={project.cover} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <ImageIcon className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#00A29A] transition-colors">{project.title}</h3>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-2">{project.shortDesc}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-2 text-center text-slate-500 py-12">No projects in this category yet.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};