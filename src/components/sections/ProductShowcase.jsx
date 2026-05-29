// src/components/sections/ProductShowcase.jsx
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { ProductCard } from '../ui/ProductCard';
import { showcaseProducts } from '../../data/showcaseProducts';

export const ProductShowcase = ({ onGalleryClick, onContactClick }) => {
  return (
    // ✅ Фон белый или очень светло-серый
    <section id="products" className="py-32 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-20 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-sm font-semibold text-[#00A29A] tracking-widest uppercase mb-3">Hardware</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">Precision Instruments.</h3>
              <p className="text-slate-600 text-lg font-light">Engineered for absolute reliability in the most demanding industrial and cinematic environments.</p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {showcaseProducts.map((product, idx) => (
            <Reveal key={product.id} delay={idx * 100}>
              <ProductCard 
                product={product}
                onGalleryClick={onGalleryClick}
                onContactClick={onContactClick}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00A29A] hover:bg-[#008f88] text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,162,154,0.3)] hover:shadow-[0_0_30px_rgba(0,162,154,0.5)] hover:-translate-y-0.5 group"
          >
            Request Commercial Offer
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};