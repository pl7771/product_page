// src/components/ProductsShowcasePage.jsx
import React from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { showcaseProducts } from '../data/products-showcase';
import ShowcaseCard from './ShowcaseCard';

const ProductsShowcasePage = ({ isOpen, onClose, onInfoClick, onBuyClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 overflow-y-auto">
      {/* Хедер страницы (адаптивный) */}
      <header className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <button 
          onClick={onClose}
          className="inline-flex items-center gap-1.5 sm:gap-2 text-slate-300 hover:text-white transition-colors group"
          aria-label="Close and go back"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-0.5" />
          <span className="hidden sm:inline text-sm">Back to site</span>
        </button>
        
        <h1 className="text-base sm:text-xl font-bold text-white">All Products</h1>
        
        <button 
          onClick={onClose}
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors sm:hidden"
          aria-label="Close"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </header>

      {/* Основной контент */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
        <p className="text-slate-400 text-sm sm:text-base mb-4 sm:mb-6 px-1">
          Browse our complete range of atmospheric equipment. Click any product for details.
        </p>
        
        {/* Сетка: 1 колонка на мобильном, 2 на планшете, 3 на десктопе */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {showcaseProducts.map(product => (
            <ShowcaseCard 
              key={product.id}
              product={product}
              onInfoClick={onInfoClick}
              onBuyClick={onBuyClick}
            />
          ))}
        </div>
      </main>

      {/* Футер страницы (адаптивный) */}
      <footer className="px-4 sm:px-6 py-6 sm:py-8 text-center text-slate-500 text-xs sm:text-sm border-t border-slate-800">
        <p>
          Questions?{' '}
          <button 
            onClick={onClose} 
            className="text-emerald-400 hover:underline font-medium"
          >
            Contact our team
          </button>
        </p>
      </footer>
    </div>
  );
};

export default ProductsShowcasePage;