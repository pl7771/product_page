// src/pages/ProductsShowcase.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ChevronLeft, ChevronRight, X, 
  MessageCircle, Phone, Image as ImageIcon,
  Info, Download
} from 'lucide-react';

// Данные 6 продуктов
const showcaseProducts = [
  {
    id: 101,
    name: "AeroMist Pro",
    category: "Fog Generation",
    price: "$2,499",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800",
    shortDesc: "Professional-grade atmospheric fog emitter for industrial testing",
    gallery: [
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=100&w=1600",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=100&w=1600",
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=100&w=1600",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=100&w=1600"
    ],
    specs: ["Output: 500ml/min", "Coverage: 200m²", "Power: 220V/50Hz", "Weight: 12kg"]
  },
  {
    id: 102,
    name: "SmokeFX Ultra",
    category: "Visual Effects",
    price: "$3,899",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800",
    shortDesc: "High-density smoke generator for film and stage productions",
    gallery: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=100&w=1600",
      "https://images.unsplash.com/photo-1536440136628-84e594316ce8?auto=format&fit=crop&q=100&w=1600",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=100&w=1600",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=100&w=1600"
    ],
    specs: ["Output: 800ml/min", "Remote control", "Low noise design", "DMX compatible"]
  },
  {
    id: 103,
    name: "CloudMaker X1",
    category: "Research Equipment",
    price: "$5,299",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
    shortDesc: "Precision cloud simulation system for meteorological studies",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=100&w=1600",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=100&w=1600",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=100&w=1600",
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=100&w=1600"
    ],
    specs: ["Variable density", "Data logging", "Lab-certified", "API integration"]
  },
  {
    id: 104,
    name: "VaporStream Mini",
    category: "Portable Solutions",
    price: "$899",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    shortDesc: "Compact fog emitter for small spaces and mobile applications",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=100&w=1600",
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=100&w=1600",
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=100&w=1600"
    ],
    specs: ["Battery powered", "Weight: 2.1kg", "USB-C charging", "Runtime: 4 hours"]
  },
  {
    id: 105,
    name: "AtmoControl Hub",
    category: "Smart Systems",
    price: "$1,799",
    image: "https://images.unsplash.com/photo-1551654898-8c6c5f5c6f5f?auto=format&fit=crop&q=80&w=800",
    shortDesc: "Central controller for managing multiple atmospheric devices",
    gallery: [
      "https://images.unsplash.com/photo-1551654898-8c6c5f5c6f5f?auto=format&fit=crop&q=100&w=1600",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=100&w=1600",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=100&w=1600"
    ],
    specs: ["WiFi + Bluetooth", "App control", "Scheduler included", "Cloud sync"]
  },
  {
    id: 106,
    name: "EcoMist Green",
    category: "Eco-Friendly",
    price: "$1,999",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    shortDesc: "Biodegradable fluid fog system for sustainable operations",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=100&w=1600",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=100&w=1600",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=100&w=1600",
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=100&w=1600"
    ],
    specs: ["Plant-based fluid", "Zero VOC", "Certified green", "Carbon neutral"]
  }
];

// Карусель галереи
const GalleryCarousel = ({ product, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % product.gallery.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-green-950/95 backdrop-blur-xl flex items-center justify-center p-4">
      {/* Кнопка закрытия */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 bg-green-900/80 hover:bg-green-800 rounded-full text-white transition-all hover:scale-110"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Стрелка влево */}
      <button 
        onClick={prev}
        className="absolute left-4 p-3 bg-green-900/80 hover:bg-green-800 rounded-full text-white transition-all hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Основное изображение */}
      <div className="max-w-5xl w-full">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-green-800">
          <img 
            src={product.gallery[currentIndex]} 
            alt={`${product.name} - Photo ${currentIndex + 1}`}
            className="w-full h-full object-cover animate-in fade-in duration-300"
          />
        </div>
        
        {/* Индикаторы */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {product.gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-emerald-400 w-8' : 'bg-green-700 hover:bg-green-600'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-green-400 text-sm mt-2">
          {currentIndex + 1} / {product.gallery.length}
        </p>
      </div>

      {/* Стрелка вправо */}
      <button 
        onClick={next}
        className="absolute right-4 p-3 bg-green-900/80 hover:bg-green-800 rounded-full text-white transition-all hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

// Модальное окно контактов
const ContactModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-green-950/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="relative bg-green-900 border border-green-800 rounded-3xl p-8 max-w-2xl w-full shadow-2xl">
        {/* Кнопка закрытия */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-green-400 hover:text-white bg-green-800/50 hover:bg-green-700 rounded-full transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Contact About {product.name}</h3>
          <p className="text-green-400">Choose your preferred contact method</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <div className="bg-green-800/50 rounded-2xl p-6 border border-green-700 hover:border-emerald-500 transition-all">
            <div className="w-16 h-16 bg-[#25D366]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-[#25D366]" />
            </div>
            <h4 className="text-white font-semibold mb-2">WhatsApp</h4>
            <p className="text-green-400 text-sm mb-4">Quick response guaranteed</p>
            <a 
              href={`https://wa.me/18005550199?text=Hello! I'm interested in ${product.name} (${product.price}). Please provide more details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg transition-colors text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              Chat Now
            </a>
          </div>

          {/* WeChat QR */}
          <div className="bg-green-800/50 rounded-2xl p-6 border border-green-700 hover:border-emerald-500 transition-all">
            <div className="w-16 h-16 bg-[#07C160]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-[#07C160]" />
            </div>
            <h4 className="text-white font-semibold mb-2">WeChat</h4>
            <p className="text-green-400 text-sm mb-4">Scan to add us</p>
            <div className="bg-white p-2 rounded-lg w-32 h-32 mx-auto">
              {/* Placeholder QR Code */}
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
                <rect x="10" y="10" width="30" height="30" />
                <rect x="60" y="10" width="30" height="30" />
                <rect x="10" y="60" width="30" height="30" />
                <rect x="20" y="20" width="10" height="10" fill="white" />
                <rect x="70" y="20" width="10" height="10" fill="white" />
                <rect x="20" y="70" width="10" height="10" fill="white" />
                <rect x="50" y="50" width="10" height="10" />
                <rect x="70" y="70" width="20" height="20" />
              </svg>
            </div>
          </div>

          {/* Email QR */}
          <div className="bg-green-800/50 rounded-2xl p-6 border border-green-700 hover:border-emerald-500 transition-all">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-emerald-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Email Specs</h4>
            <p className="text-green-400 text-sm mb-4">Download brochure</p>
            <div className="bg-white p-2 rounded-lg w-32 h-32 mx-auto">
              {/* Placeholder QR Code */}
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
                <rect x="15" y="15" width="25" height="25" />
                <rect x="60" y="15" width="25" height="25" />
                <rect x="15" y="60" width="25" height="25" />
                <rect x="22" y="22" width="11" height="11" fill="white" />
                <rect x="67" y="22" width="11" height="11" fill="white" />
                <rect x="22" y="67" width="11" height="11" fill="white" />
                <rect x="50" y="50" width="15" height="15" />
                <rect x="65" y="65" width="20" height="20" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-green-400 text-sm">
            Or email us directly at{' '}
            <a href="mailto:sales@aethersystems.inc" className="text-emerald-400 hover:underline">
              sales@aethersystems.inc
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Карточка продукта
const ProductCard = ({ product, onGalleryClick, onContactClick }) => {
  return (
    <div className="group bg-green-900/50 backdrop-blur-sm border border-green-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10">
      {/* Изображение */}
      <div className="relative aspect-[4/3] overflow-hidden bg-green-950">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-transparent opacity-60" />
        
        {/* Badge категории */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-black">
          {product.category}
        </div>
      </div>

      {/* Контент */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
        <p className="text-emerald-400 text-sm font-medium mb-3">{product.price}</p>
        <p className="text-green-400/80 text-sm mb-4 line-clamp-2">{product.shortDesc}</p>

        {/* Характеристики */}
        <ul className="space-y-1 mb-6">
          {product.specs.slice(0, 2).map((spec, idx) => (
            <li key={idx} className="text-xs text-green-300 flex items-center gap-2">
              <span className="w-1 h-1 bg-emerald-500 rounded-full" />
              {spec}
            </li>
          ))}
        </ul>

        {/* Кнопки */}
        <div className="flex gap-2">
          <button 
            onClick={() => onGalleryClick(product)}
            className="flex-1 py-2.5 px-3 bg-green-800 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <ImageIcon className="w-4 h-4" />
            View Gallery
          </button>
          <button 
            onClick={() => onContactClick(product)}
            className="flex-1 py-2.5 px-3 bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

// Основная страница
export default function ProductsShowcase() {
  const navigate = useNavigate();
  const [galleryProduct, setGalleryProduct] = useState(null);
  const [contactProduct, setContactProduct] = useState(null);

  return (
    <div className="min-h-screen bg-green-950 text-white">
      {/* Хедер */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-4 sm:px-6 py-4 bg-green-950/90 backdrop-blur border-b border-green-800">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-green-400 hover:text-emerald-400 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="hidden sm:inline font-medium">Back to site</span>
        </button>
        
        <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          All Products
        </h1>
        
        <div className="w-20" />
      </header>

      {/* Hero секция */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
            Complete Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional Atmospheric Equipment
          </h2>
          <p className="text-green-400 text-lg">
            Explore our full range of fog generators, smoke systems, and control solutions
          </p>
        </div>
      </section>

      {/* Сетка товаров */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseProducts.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              onGalleryClick={setGalleryProduct}
              onContactClick={setContactProduct}
            />
          ))}
        </div>
      </main>

      {/* Футер */}
      <footer className="px-6 py-8 text-center text-green-500 text-sm border-t border-green-800">
        <p>
          Questions?{' '}
          <button 
            onClick={() => navigate('/#contact')}
            className="text-emerald-400 hover:underline font-medium"
          >
            Contact our engineering team
          </button>
        </p>
      </footer>

      {/* Модальные окна */}
      {galleryProduct && (
        <GalleryCarousel 
          product={galleryProduct} 
          onClose={() => setGalleryProduct(null)} 
        />
      )}

      {contactProduct && (
        <ContactModal 
          product={contactProduct} 
          onClose={() => setContactProduct(null)} 
        />
      )}
    </div>
  );
}