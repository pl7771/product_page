import { Expand, MessageCircle } from 'lucide-react';

export const ProductCard = ({ product, onLightboxClick, onContactClick }) => {
  return (
    <div className="bg-green-900/50 backdrop-blur-sm border border-green-800 rounded-2xl overflow-hidden hover:border-green-700 transition-all duration-500 h-full flex flex-col group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-green-900">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-transparent opacity-80" />
        <button 
          onClick={() => onLightboxClick(product.fullImage)}
          className="absolute top-4 right-4 p-2 bg-green-950/50 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-green-950/80"
        >
          <Expand className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <h4 className="text-2xl font-bold tracking-tight mb-1">{product.name}</h4>
          <p className="text-emerald-500 text-sm font-medium">{product.subtitle}</p>
        </div>
        <p className="text-green-400 text-sm font-light leading-relaxed mb-6 flex-grow">
          {product.description}
        </p>

        {/* Specs */}
        <div className="bg-green-950/50 rounded-xl p-4 mb-8 border border-white/5">
          <ul className="space-y-2">
            {product.specs.map((spec, idx) => (
              <li key={idx} className="text-xs text-green-300 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                {spec}
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <div className="mt-auto">
          <button 
            onClick={() => onContactClick(product)}
            className="w-full py-3 px-4 bg-white text-black hover:bg-green-200 text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            <MessageCircle className="w-4 h-4" /> 
            Buy via WeChat
          </button>
        </div>
      </div>
    </div>
  );
};