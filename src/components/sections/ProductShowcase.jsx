// src/components/sections/ProductShowcase.jsx
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { ProductCard } from '../ui/ProductCard';
import { showcaseProducts } from '../../data/showcaseProducts';

export const ProductShowcase = ({ onGalleryClick, onContactClick }) => {
  return (
    <section id="products" className="py-32 bg-green-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-20 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-sm font-semibold text-emerald-400 tracking-widest uppercase mb-3">Hardware</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Precision Instruments.</h3>
              <p className="text-green-400 text-lg font-light">Engineered for absolute reliability in the most demanding industrial and cinematic environments.</p>
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
                    <button
  type="button"
  onClick={() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }}
  className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 group cursor-pointer"
>
  Request Commercial Offer
  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
</button>
        </div>
      </div>
    </section>
  );
};