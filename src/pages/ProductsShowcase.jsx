// src/pages/ProductsShowcase.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ChevronLeft, ChevronRight, X, 
  MessageCircle, Phone, Image as ImageIcon
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

// 🎠 Карусель галереи (адаптивная)
const GalleryCarousel = ({ product, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % product.gallery.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);

  return (
    <div className="fixed inset-0 z-50 bg-green-950/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-4">
      {/* Кнопка закрытия */}
      <button 
        onClick={onClose}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-2 sm:p-3 bg-green-900/80 hover:bg-green-800 rounded-full text-white transition-all hover:scale-110"
        aria-label="Close gallery"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Стрелка влево */}
      <button 
        onClick={prev}
        className="absolute left-2 sm:left-4 p-2 sm:p-3 bg-green-900/80 hover:bg-green-800 rounded-full text-white transition-all hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Основное изображение */}
      <div className="w-full max-w-4xl sm:max-w-5xl">
        <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-green-800">
          <img 
            src={product.gallery[currentIndex]} 
            alt={`${product.name} - Photo ${currentIndex + 1}`}
            className="w-full h-full object-cover animate-in fade-in duration-300"
            loading="lazy"
          />
        </div>
        
        {/* Индикаторы */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 flex-wrap px-2">
          {product.gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-emerald-400 w-6 sm:w-8' : 'bg-green-700 hover:bg-green-600'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
        <p className="text-center text-green-400 text-xs sm:text-sm mt-2">
          {currentIndex + 1} / {product.gallery.length}
        </p>
      </div>

      {/* Стрелка вправо */}
      <button 
        onClick={next}
        className="absolute right-2 sm:right-4 p-2 sm:p-3 bg-green-900/80 hover:bg-green-800 rounded-full text-white transition-all hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
};

// 💬 Модальное окно контактов (адаптивное)
const ContactModal = ({ product, onClose }) => {
  const whatsappMsg = encodeURIComponent(
    `Hello! I'm interested in ${product.name} (${product.price}). Could you please provide more details and pricing information?`
  );

  return (
    <div className="fixed inset-0 z-50 bg-green-950/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="relative bg-green-900 border border-green-800 rounded-3xl p-6 sm:p-8 w-full max-w-md sm:max-w-2xl mx-2 sm:mx-0 shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
        
        {/* Кнопка закрытия */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-green-400 hover:text-white bg-green-800/50 hover:bg-green-700 rounded-full transition-all"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Контент */}
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Contact About {product.name}
          </h3>
          <p className="text-green-400 text-sm">Choose your preferred contact method</p>
        </div>

        {/* Кнопки связи - на мобильном в колонку, на планшете+ в 2 колонки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
          {/* WhatsApp */}
          <a 
            href={`https://wa.me/18005550199?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-3 p-5 bg-green-800/50 rounded-2xl border border-green-700 hover:border-emerald-500 transition-all group"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-[#25D366]" />
            </div>
            <h4 className="text-white font-semibold text-center">WhatsApp</h4>
            <p className="text-green-400 text-xs sm:text-sm text-center">Quick response guaranteed</p>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg transition-colors text-sm font-medium mt-1">
              <MessageCircle className="w-4 h-4" />
              Chat Now
            </span>
          </a>

          {/* WeChat */}
          <div className="flex flex-col items-center justify-center gap-3 p-5 bg-green-800/50 rounded-2xl border border-green-700 hover:border-emerald-500 transition-all">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#07C160]/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-[#07C160]" />
            </div>
            <h4 className="text-white font-semibold text-center">WeChat</h4>
            <p className="text-green-400 text-xs sm:text-sm text-center">Scan to add us</p>
            <div className="bg-white p-2 rounded-lg w-28 h-28 sm:w-32 sm:h-32">
              {/* Placeholder QR - замените на реальный */}
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
        </div>

        {/* Email ссылкой внизу */}
        <div className="text-center pt-5 sm:pt-6 border-t border-green-800">
          <p className="text-green-400 text-xs sm:text-sm mb-3">
            Or email us directly at
          </p>
          <a 
            href={`mailto:sales@aethersystems.inc?subject=${encodeURIComponent(`Inquiry: ${product.name}`)}&body=${encodeURIComponent(`Hello! I'm interested in ${product.name} (${product.price}). Please provide more details.`)}`}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-3 bg-green-800 hover:bg-green-700 text-white font-medium rounded-xl transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            sales@aethersystems.inc
          </a>
        </div>
      </div>
    </div>
  );
};

// 🃏 Карточка продукта (адаптивная)
const ProductCard = ({ product, onGalleryClick, onContactClick }) => {
  return (
    <div className="group bg-green-900/50 backdrop-blur-sm border border-green-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10">
      {/* Изображение */}
      <div className="relative aspect-[4/3] overflow-hidden bg-green-950">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-transparent opacity-60" />
        
        {/* Badge категории */}
        <div className="absolute top-3 left-3 px-2.5 py-1 sm:px-3 sm:py-1 bg-emerald-500/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-semibold text-black">
          {product.category}
        </div>
      </div>

      {/* Контент */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{product.name}</h3>
        <p className="text-emerald-400 text-xs sm:text-sm font-medium mb-2 sm:mb-3">{product.price}</p>
        <p className="text-green-400/80 text-xs sm:text-sm mb-4 line-clamp-2">{product.shortDesc}</p>

        {/* Характеристики */}
        <ul className="space-y-1 mb-4 sm:mb-6">
          {product.specs.slice(0, 2).map((spec, idx) => (
            <li key={idx} className="text-[10px] sm:text-xs text-green-300 flex items-center gap-2">
              <span className="w-1 h-1 bg-emerald-500 rounded-full flex-shrink-0" />
              <span className="truncate">{spec}</span>
            </li>
          ))}
        </ul>

        {/* Кнопки */}
        <div className="flex gap-2">
          <button 
            onClick={() => onGalleryClick(product)}
            className="flex-1 py-2 sm:py-2.5 px-2 sm:px-3 bg-green-800 hover:bg-green-700 text-white text-[10px] sm:text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 sm:gap-2"
          >
            <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">View Gallery</span>
            <span className="xs:hidden">Gallery</span>
          </button>
          <button 
            onClick={() => onContactClick(product)}
            className="flex-1 py-2 sm:py-2.5 px-2 sm:px-3 bg-emerald-500 hover:bg-emerald-400 text-black text-[10px] sm:text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 sm:gap-2"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// 📄 Основная страница
export default function ProductsShowcase() {
  const navigate = useNavigate();
  const [galleryProduct, setGalleryProduct] = useState(null);
  const [contactProduct, setContactProduct] = useState(null);

  return (
    <div className="min-h-screen bg-green-950 text-white">
      {/* Хедер */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-green-950/90 backdrop-blur border-b border-green-800">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 sm:gap-2 text-green-400 hover:text-emerald-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-1" />
          <span className="hidden sm:inline font-medium text-sm">Back to site</span>
        </button>
        
        <h1 className="text-base sm:text-lg font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          All Products
        </h1>
        
        <div className="w-10 sm:w-20" />
      </header>

      {/* Hero секция */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-2.5 py-1 sm:px-3 sm:py-1 mb-3 sm:mb-4 text-[10px] sm:text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
            Complete Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Professional Atmospheric Equipment
          </h2>
          <p className="text-green-400 text-sm sm:text-lg">
            Explore our full range of fog generators, smoke systems, and control solutions
          </p>
        </div>
      </section>

      {/* Сетка товаров */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 pb-12 sm:pb-16">
        {/* Grid: 1 колонка на мобильном, 2 на планшете, 3 на десктопе */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
      <footer className="px-4 sm:px-6 py-6 sm:py-8 text-center text-green-500 text-xs sm:text-sm border-t border-green-800">
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