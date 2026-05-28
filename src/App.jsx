import { Link } from 'react-router-dom';
import ProjectsSection from './components/ProjectsSection';
import ProjectsGallery from './components/ProjectsGallery';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronRight, Shield, Truck, Clock, 
  Settings, CheckCircle, Star, MessageCircle, Mail, 
  MapPin, Phone, ArrowRight, Expand, Info, Zap 
} from 'lucide-react';

// --- CUSTOM HOOKS & UTILS ---
const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [options]);

  return [ref, isIntersecting];
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

// --- DATA ---
const products = [
  {
    id: 1,
    name: "TITAN V-9000",
    subtitle: "Heavy-Duty Industrial Vaporizer",
    description: "Engineered for massive scale. The Titan V-9000 delivers unparalleled continuous atmospheric density for large industrial testing and cinematic sets.",
    specs: ["Output: 100,000 cu.ft/min", "Power: 4000W / 220V", "Fluid Consumption: 250ml/min", "Control: DMX512 / Wireless"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    fullImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=100&w=1600"
  },
  {
    id: 2,
    name: "AQUA-FOG PRO",
    subtitle: "Water-Based Low Fog System",
    description: "Create stunning, floor-hugging cinematic fog using only pure water and ultrasonic technology. No dry ice required. 100% residue-free.",
    specs: ["Output: 50,000 cu.ft/min", "Water Tank: 20 Liters", "Warm-up Time: 3 minutes", "Acoustic Noise: < 45dB"],
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=800",
    fullImage: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=100&w=1600"
  },
  {
    id: 3,
    name: "ABYSS SUB-X",
    subtitle: "Underwater Atmospheric Emitter",
    description: "The world's first fully submersible particulate emitter. Designed for underwater cinematic environments and fluid dynamics testing.",
    specs: ["Depth Rating: 50 Meters", "Material: Marine Grade Titanium", "Power: 24V DC / 500W", "Runtime: 4 Hours Continuous"],
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800",
    fullImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=100&w=1600"
  }
];

const features = [
  { icon: Shield, title: "Industrial Quality", desc: "Aerospace-grade materials and exhaustive quality control testing." },
  { icon: Truck, title: "Global Fulfillment", desc: "Secure worldwide shipping with specialized freight partners." },
  { icon: Clock, title: "24/7 Support", desc: "Dedicated technical engineering support around the clock." },
  { icon: Settings, title: "ISO 9001 Certified", desc: "Meeting the highest international standards for manufacturing." }
];

const testimonials = [
  { quote: "The Titan V-9000 completely revolutionized our aerodynamic wind tunnel testing. The particle density is flawlessly consistent.", author: "Dr. Elena Rostova", role: "Lead Aerodynamicist, AeroTech Dynamics" },
  { quote: "For our recent sci-fi epic, we needed reliable atmospheric control. Aether systems delivered flawlessly, take after take.", author: "James Miller", role: "Special Effects Supervisor" }
];

// --- COMPONENTS ---
const SmokeBackground = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId, particles = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize); resize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 200;
        this.size = Math.random() * 150 + 50;
        this.speedY = Math.random() * 1 + 0.2;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.05 + 0.01;
      }
      update() {
        this.y -= this.speedY; this.x += this.speedX;
        if (this.y < -this.size) { this.y = canvas.height + this.size; this.x = Math.random() * canvas.width; }
      }
      draw() {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, `rgba(200, 225, 255, ${this.opacity})`);
        gradient.addColorStop(1, 'rgba(200, 225, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
      }
    }
    for (let i = 0; i < 40; i++) particles.push(new Particle());
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animationFrameId = window.requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener('resize', resize); window.cancelAnimationFrame(animationFrameId); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
};

const QRCode = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-black bg-white p-2 rounded-lg" fill="currentColor">
    <path d="M10,10 h30 v30 h-30 z M15,15 v20 h20 v-20 z" /><path d="M60,10 h30 v30 h-30 z M65,15 v20 h20 v-20 z" /><path d="M10,60 h30 v30 h-30 z M15,65 v20 h20 v-20 z" />
    <rect x="20" y="20" width="10" height="10" /><rect x="70" y="20" width="10" height="10" /><rect x="20" y="70" width="10" height="10" />
    <path d="M50,10 h5 v10 h-5 z M50,30 h5 v20 h-5 z M60,50 h10 v5 h-10 z M80,50 h10 v5 h-10 z" />
    <path d="M45,60 h10 v5 h-10 z M60,65 h5 v15 h-5 z M70,70 h5 v5 h-5 z M80,60 h10 v20 h-10 z" />
    <rect x="70" y="80" width="20" height="10" /><rect x="45" y="75" width="10" height="15" /><rect x="10" y="45" width="30" height="10" />
  </svg>
);

// 🆕 НОВОЕ модальное окно с 3 вариантами связи (для кнопки "Buy via WeChat")
const ProductContactModal = ({ product, onClose }) => {
  const whatsappMsg = encodeURIComponent(`Hello! I'm interested in ${product.name} (${product.price}). Could you please provide more details and pricing information?`);
  
  return (
    <div className="fixed inset-0 z-[110] bg-green-950/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="relative bg-green-900 border border-green-800 rounded-3xl p-6 sm:p-8 w-full max-w-md mx-2 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-3 right-3 p-2 text-green-400 hover:text-white bg-green-800/50 hover:bg-green-700 rounded-full transition-all" aria-label="Close">
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">Contact About {product.name}</h3>
          <p className="text-green-400 text-sm">Choose your preferred contact method</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* WhatsApp */}
          <a href={`https://wa.me/18005550199?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-4 bg-green-800/50 rounded-2xl border border-green-700 hover:border-emerald-500 transition-all group">
            <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-[#25D366]" />
            </div>
            <h4 className="text-white font-semibold text-center text-sm">WhatsApp</h4>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg transition-colors text-xs font-medium">
              <MessageCircle className="w-3.5 h-3.5" /> Chat Now
            </span>
          </a>

          {/* WeChat */}
          <div className="flex flex-col items-center justify-center gap-3 p-4 bg-green-800/50 rounded-2xl border border-green-700 hover:border-emerald-500 transition-all">
            <div className="w-12 h-12 bg-[#07C160]/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-[#07C160]" />
            </div>
            <h4 className="text-white font-semibold text-center text-sm">WeChat</h4>
            <div className="bg-white p-2 rounded-lg w-24 h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
                <rect x="10" y="10" width="30" height="30" /><rect x="60" y="10" width="30" height="30" /><rect x="10" y="60" width="30" height="30" />
                <rect x="20" y="20" width="10" height="10" fill="white" /><rect x="70" y="20" width="10" height="10" fill="white" /><rect x="20" y="70" width="10" height="10" fill="white" />
                <rect x="50" y="50" width="10" height="10" /><rect x="70" y="70" width="20" height="20" />
              </svg>
            </div>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-green-800">
          <p className="text-green-400 text-xs mb-2">Or email us directly</p>
          <a href={`mailto:sales@aethersystems.inc?subject=${encodeURIComponent(`Inquiry: ${product.name}`)}&body=${encodeURIComponent(`Hello! I'm interested in ${product.name}. Please provide more details.`)}`} className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-green-800 hover:bg-green-700 text-white font-medium rounded-xl transition-all text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            sales@aethersystems.inc
          </a>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [wechatModal, setWechatModal] = useState(false); // для секции контактов
  const [infoProduct, setInfoProduct] = useState(null);
  const [contactMessage, setContactMessage] = useState("");
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [productContactModal, setProductContactModal] = useState(null); // 🆕 для кнопки "Buy via WeChat"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-green-950 text-green-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-green-950/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-emerald-400" />
            <span className="text-xl font-bold tracking-widest uppercase">Aether<span className="text-green-500 font-light">Systems</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-green-400 hover:text-white transition-colors">Products</a>
            <a href="#technology" className="text-sm font-medium text-green-400 hover:text-white transition-colors">Technology</a>
            <a href="#trust" className="text-sm font-medium text-green-400 hover:text-white transition-colors">Enterprise</a>
            <a href="#contact" className="px-6 py-2 bg-white text-black font-semibold text-sm rounded-full hover:bg-green-200 transition-colors">Contact Sales</a>
          </div>
          <button className="md:hidden text-green-400 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-green-900/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col gap-4">
             <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-green-300">Products</a>
             <a href="#technology" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-green-300">Technology</a>
             <a href="#trust" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-green-300">Enterprise</a>
             <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-emerald-400">Contact Sales</a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-green-950"></div>
        <SmokeBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.8)_100%)] z-10 pointer-events-none"></div>
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-20">
          <Reveal><div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>Next-Gen Atmospheric Tech</div></Reveal>
          <Reveal delay={200}><h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6">Master The <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-400 to-green-600">Atmosphere.</span></h1></Reveal>
          <Reveal delay={400}><p className="text-lg md:text-xl text-green-400 max-w-2xl mx-auto mb-10 font-light">High-end industrial vaporizers and cinematic atmospheric effect equipment designed for precision, power, and absolute reliability.</p></Reveal>
          <Reveal delay={600}><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href="#products" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-green-200 transition-all flex items-center justify-center gap-2 group">Explore Products<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a><a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-green-900 border border-green-800 text-white rounded-full font-semibold hover:bg-green-800 transition-all">Request Quote</a></div></Reveal>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce"><div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center p-1"><div className="w-1 h-2 bg-green-400 rounded-full"></div></div></div>
      </section>

      <ProjectsSection onOpenGallery={() => setGalleryOpen(true)} />

     {/* --- PRODUCT SHOWCASE --- */}
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
        <Reveal key={product.id} delay={idx * 150} className="group h-full">
          <div className="bg-green-900/50 backdrop-blur-sm border border-green-800 rounded-2xl overflow-hidden hover:border-green-700 transition-all duration-500 h-full flex flex-col">
            
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-green-900">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-transparent opacity-80"></div>
              
              {/* Enlarge Button */}
              <button 
                onClick={() => setLightboxImg(product.fullImage)}
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

              {/* Specs block */}
              <div className="bg-green-950/50 rounded-xl p-4 mb-8 border border-white/5">
                <ul className="space-y-2">
                  {product.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="text-xs text-green-300 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 🆕 ОДНА КНОПКА НА ВСЮ ШИРИНУ */}
              <div className="mt-auto">
                <button 
                  onClick={() => setProductContactModal(product)}
                  className="w-full py-3 px-4 bg-white text-black hover:bg-green-200 text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                >
                  <MessageCircle className="w-4 h-4" /> 
                  Buy via WeChat
                </button>
              </div>

            </div>
          </div>
        </Reveal>
      ))}
    </div>

    {/* Кнопка "View All Products" */}
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

      {/* --- TRUST & AUTHORITY SECTION --- */}
      <section id="trust" className="py-32 bg-green-900 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <Reveal><div className="text-center max-w-3xl mx-auto mb-20"><h2 className="text-3xl md:text-4xl font-bold mb-6">Global Standard in Atmospheric Technology.</h2><p className="text-green-400 text-lg font-light">With over 15 years of continuous innovation, Aether Systems provides the foundational hardware for the world's most demanding visual and scientific applications.</p></div></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">{features.map((feat, idx) => (<Reveal key={idx} delay={idx * 100}><div className="p-6 bg-green-950/50 backdrop-blur-md rounded-2xl border border-white/5 hover:border-white/10 transition-colors"><div className="w-12 h-12 bg-green-900 rounded-xl flex items-center justify-center mb-6 text-emerald-400 border border-white/5"><feat.icon className="w-6 h-6" /></div><h4 className="text-lg font-semibold mb-2">{feat.title}</h4><p className="text-sm text-green-500 font-light leading-relaxed">{feat.desc}</p></div></Reveal>))}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{testimonials.map((test, idx) => (<Reveal key={idx} delay={idx * 200}><div className="p-8 bg-gradient-to-br from-green-800/50 to-green-950/50 rounded-2xl border border-white/5 relative"><Star className="w-6 h-6 text-emerald-500 mb-6" /><p className="text-lg text-green-300 italic mb-8 font-light leading-relaxed">"{test.quote}"</p><div><p className="font-semibold text-white">{test.author}</p><p className="text-sm text-green-500">{test.role}</p></div></div></Reveal>))}</div>
        </div>
      </section>

      {/* Быстрые контакты: WeChat, WhatsApp, Email */}
      <div className="max-w-5xl mx-auto mt-8 sm:mt-12 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <Reveal delay={0}><div className="bg-green-900/50 backdrop-blur-sm border border-green-800 rounded-2xl p-5 sm:p-6 hover:border-emerald-500/50 transition-all group h-full flex flex-col"><div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#07C160]/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform flex-shrink-0"><MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#07C160]" /></div><h3 className="text-base sm:text-lg font-bold text-white text-center mb-2 flex-shrink-0">WeChat</h3><p className="text-green-400 text-xs sm:text-sm text-center mb-4 sm:mb-6 flex-shrink-0">Scan QR code to add us</p><div className="bg-white p-2.5 sm:p-3 rounded-xl w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-3 sm:mb-4 shadow-lg flex-shrink-0"><svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor"><rect x="10" y="10" width="25" height="25" /><rect x="65" y="10" width="25" height="25" /><rect x="10" y="65" width="25" height="25" /><rect x="20" y="20" width="8" height="8" fill="white" /><rect x="75" y="20" width="8" height="8" fill="white" /><rect x="20" y="75" width="8" height="8" fill="white" /><rect x="50" y="10" width="10" height="10" /><rect x="10" y="50" width="10" height="10" /><rect x="65" y="65" width="25" height="25" /><rect x="50" y="50" width="15" height="15" /></svg></div><p className="text-green-500 text-[10px] sm:text-xs text-center mt-auto flex-shrink-0">Official Account Verified</p></div></Reveal>
          <Reveal delay={100}><div className="bg-green-900/50 backdrop-blur-sm border border-green-800 rounded-2xl p-5 sm:p-6 hover:border-emerald-500/50 transition-all group h-full flex flex-col items-center justify-center"><div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform flex-shrink-0"><Phone className="w-6 h-6 sm:w-7 sm:h-7 text-[#25D366]" /></div><h3 className="text-base sm:text-lg font-bold text-white text-center mb-2 flex-shrink-0">WhatsApp</h3><p className="text-green-400 text-xs sm:text-sm text-center mb-3 sm:mb-4 flex-shrink-0">Quick response guaranteed</p><a href="https://wa.me/18005550199" target="_blank" rel="noopener noreferrer" className="w-full py-2 sm:py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 mt-auto flex-shrink-0"><MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Chat Now</a><p className="text-green-500 text-[10px] sm:text-xs mt-2 sm:mt-3 text-center flex-shrink-0">+1 (800) 555-0199</p></div></Reveal>
          <Reveal delay={200}><div className="bg-green-900/50 backdrop-blur-sm border border-green-800 rounded-2xl p-5 sm:p-6 hover:border-emerald-500/50 transition-all group h-full flex flex-col items-center justify-center"><div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform flex-shrink-0"><Mail className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" /></div><h3 className="text-base sm:text-lg font-bold text-white text-center mb-2 flex-shrink-0">Email</h3><p className="text-green-400 text-xs sm:text-sm text-center mb-3 sm:mb-4 flex-shrink-0">Response within 24h</p><a href="mailto:sales@aethersystems.inc" className="w-full py-2 sm:py-2.5 bg-green-800 hover:bg-green-700 text-white font-semibold rounded-xl transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 mt-auto flex-shrink-0"><svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> Send Email</a><p className="text-green-500 text-[10px] sm:text-xs mt-2 sm:mt-3 text-center break-all flex-shrink-0">sales@aethersystems.inc</p></div></Reveal>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 bg-green-950 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"><Zap className="w-5 h-5 text-emerald-400" /><span className="text-lg font-bold tracking-widest uppercase text-white">Aether<span className="font-light">Systems</span></span></div>
          <div className="flex gap-6 text-sm text-green-500 font-light"><a href="#" className="hover:text-white transition-colors">Privacy Policy</a><a href="#" className="hover:text-white transition-colors">Terms of Service</a><a href="#" className="hover:text-white transition-colors">Shipping</a></div>
          <p className="text-xs text-green-600 font-light">© {new Date().getFullYear()} Aether Systems Inc. All rights reserved.</p>
        </div>
      </footer>

      {/* --- MODALS --- */}
      {lightboxImg && (<div className="fixed inset-0 z-[100] bg-green-950/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-300"><button className="absolute top-6 right-6 p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all" onClick={() => setLightboxImg(null)}><X className="w-6 h-6" /></button><img src={lightboxImg} alt="Product Full View" className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-500" /></div>)}
      
      {infoProduct && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-green-950/80 backdrop-blur-sm"><div className="bg-green-900 border border-green-800 p-8 rounded-2xl max-w-2xl w-full relative animate-in fade-in zoom-in duration-300"><button onClick={() => setInfoProduct(null)} className="absolute top-3 right-3 z-50 p-3 bg-green-800 md:bg-transparent rounded-full text-white md:text-green-400 hover:text-white transition-all border border-green-700 md:border-transparent shadow-lg md:shadow-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button><div className="flex flex-col md:flex-row gap-6"><div className="w-full md:w-1/2 rounded-xl overflow-hidden bg-green-800 border border-green-700"><img src={infoProduct.image} alt={infoProduct.name} className="w-full h-full object-cover opacity-80" /></div><div className="w-full md:w-1/2 flex flex-col justify-center text-left"><h3 className="text-3xl font-bold text-white mb-2">{infoProduct.name}</h3><p className="text-emerald-400 font-mono text-sm mb-6">Technical Data Sheet</p><div className="text-green-300 space-y-4 mb-8"><p>Здесь вы можете разместить подробное описание товара. Это окно поддерживает много текста.</p><p>Оборудование выполнено из авиационного алюминия с использованием запатентованной технологии распыления.</p></div><button onClick={() => { const templateText = `Hello! I'm interested in: ${infoProduct.name}. Could you please provide more details about pricing and specifications?`; setContactMessage(templateText); setInfoProduct(null); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 150); }} className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition-colors mt-auto">Request Quote</button></div></div></div></div>)}
      
      {/* 🆕 НОВОЕ модальное окно для кнопки "Buy via WeChat" */}
      {productContactModal && (<ProductContactModal product={productContactModal} onClose={() => setProductContactModal(null)} />)}
      
      {/* Старое WeChat модальное окно (для секции контактов) */}
      {wechatModal && (<div className="fixed inset-0 z-[100] flex items-center justify-center p-4"><div className="absolute inset-0 bg-green-950/80 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setWechatModal(false)}></div><div className="relative bg-green-900 border border-green-700/50 rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-400"><button className="absolute top-4 right-4 p-2 text-green-400 hover:text-white bg-green-800/50 hover:bg-green-700 rounded-full transition-all" onClick={() => setWechatModal(false)}><X className="w-5 h-5" /></button><div className="text-center"><div className="w-16 h-16 bg-[#07C160]/10 rounded-full flex items-center justify-center mx-auto mb-4"><MessageCircle className="w-8 h-8 text-[#07C160]" /></div><h3 className="text-xl font-bold text-white mb-2">Connect on WeChat</h3><p className="text-green-400 text-sm font-light mb-8">Scan the QR code below using another phone to contact our sales team directly.</p><div className="bg-white p-4 rounded-2xl w-48 h-48 mx-auto mb-6 shadow-[0_0_30px_rgba(7,193,96,0.1)]"><QRCode /></div><div className="flex items-center justify-center gap-2 text-xs font-medium text-[#07C160] bg-[#07C160]/10 py-2 px-4 rounded-full w-max mx-auto"><CheckCircle className="w-4 h-4" /> Official Account Verified</div></div></div></div>)}

      <ProjectsGallery isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} />
    </div>
  );
}