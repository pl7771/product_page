// src/components/ProductsShowcasePage.jsx
import React from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { showcaseProducts } from '../data/products-showcase';
import ShowcaseCard from './ShowcaseCard';

const ProductsShowcasePage = ({ isOpen, onClose, onInfoClick, onBuyClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 overflow-y-auto">
      {/* Хедер страницы */}
      <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <button 
          onClick={onClose}
          className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Back to site</span>
        </button>
        
        <h1 className="text-xl font-bold text-white">All Products</h1>
        
        <button 
          onClick={onClose}
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors sm:hidden"
        >
          <X className="w-6 h-6" />
        </button>
      </header>

      {/* Сетка товаров */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <p className="text-slate-400 mb-6">
          Browse our complete range of atmospheric equipment. Click any product for details.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Футер страницы */}
      <footer className="px-6 py-8 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>Questions? <button onClick={onClose} className="text-emerald-400 hover:underline">Contact our team</button></p>
      </footer>
    </div>
  );
};

export default ProductsShowcasePage;

