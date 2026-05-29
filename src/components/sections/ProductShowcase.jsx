// src/components/sections/ProductShowcase.jsx
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { ProductCard } from '../ui/ProductCard';
import { showcaseProducts } from '../../data/showcaseProducts';

export const ProductShowcase = ({ onGalleryClick, onContactClick }) => {
  return (
    // ✅ Фон: Белый с легким бирюзовым свечением сверху
    <section id="products" className="py-16 bg-white relative border-t border-slate-100 overflow-hidden">
      
      {/* Декоративное свечение (Atmosphere effect) */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#00A29A]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold text-[#00A29A] tracking-widest uppercase mb-3">Hardware</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
              Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A29A] to-teal-600">Instruments.</span>
            </h3>
            <p className="text-slate-600 text-lg font-light">
              Engineered for absolute reliability in the most demanding industrial and cinematic environments.
            </p>
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