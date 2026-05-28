import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { ProductCard } from '../ui/ProductCard';
import { products } from '../../data/products';

export const ProductShowcase = ({ onLightboxClick, onContactClick }) => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <Reveal key={product.id} delay={idx * 150}>
              <ProductCard 
                product={product} 
                onLightboxClick={onLightboxClick}
                onContactClick={onContactClick}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 group"
          >
            View All Products
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};