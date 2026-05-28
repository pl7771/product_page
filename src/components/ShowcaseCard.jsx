// src/components/ShowcaseCard.jsx
import React from 'react';
import { ArrowRight, Info } from 'lucide-react';

const ShowcaseCard = ({ product, onInfoClick, onBuyClick }) => {
  return (
    <div className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
      {/* Изображение */}
      <div className="aspect-square overflow-hidden bg-slate-800">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
      </div>

      {/* Контент карточки */}
      <div className="p-5">
        <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-white mt-2">{product.name}</h3>
        <p className="text-slate-400 text-sm mt-1 line-clamp-2">{product.shortDesc}</p>
        
        {/* Характеристики */}
        <ul className="mt-4 space-y-1">
          {product.specs.slice(0, 2).map((spec, i) => (
            <li key={i} className="text-xs text-slate-500 flex items-center gap-1">
              <span className="w-1 h-1 bg-emerald-500 rounded-full" />
              {spec}
            </li>
          ))}
        </ul>

        {/* Цена и кнопки */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-800">
          <span className="text-xl font-bold text-white">{product.price}</span>
          <div className="flex gap-2">
            <button 
              onClick={() => onInfoClick(product)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="More info"
            >
              <Info className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onBuyClick(product)}
              className="inline-flex items-center gap-1 px-3 py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-semibold rounded-lg transition-colors"
            >
              Buy
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;