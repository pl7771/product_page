// src/App.jsx
import { useState, useEffect } from 'react';

// Layout
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/ui/BackToTop';

// Sections
import { HeroSection } from './components/sections/HeroSection';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { TrustSection } from './components/sections/TrustSection';
import { QuickContacts } from './components/sections/QuickContacts';
import ProjectsSection from './components/ProjectsSection';

// Modals — простые, без хуков внутри
import { LightboxModal } from './components/modals/LightboxModal';
import { InfoModal } from './components/modals/InfoModal';
import { WeChatModal } from './components/modals/WeChatModal';
import { ProductContactModal } from './components/modals/ProductContactModal';
import { GalleryCarouselModal } from './components/modals/GalleryCarouselModal';
import ProjectsGallery from './components/ProjectsGallery';


export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [wechatModal, setWechatModal] = useState(false);
  const [infoProduct, setInfoProduct] = useState(null);
  const [contactMessage, setContactMessage] = useState("");
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [productContactModal, setProductContactModal] = useState(null);
  const [productGalleryModal, setProductGalleryModal] = useState(null);

  // Скролл для навбара
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#00A29A]/30 selection:text-[#00A29A] overflow-x-hidden">
      
      <Navigation isScrolled={isScrolled} />
      <HeroSection />
      <ProjectsSection onOpenGallery={() => setGalleryOpen(true)} />
      
      <ProductShowcase 
        onGalleryClick={setProductGalleryModal}
        onContactClick={setProductContactModal}
      />

      <QuickContacts />
      <TrustSection />
      <Footer />

      {/* Модальные окна — рендерятся ТОЛЬКО когда нужно */}
      {lightboxImg && <LightboxModal image={lightboxImg} onClose={() => setLightboxImg(null)} />}
      
      {infoProduct && <InfoModal product={infoProduct} onClose={() => setInfoProduct(null)} onContactRequest={setContactMessage} />}
      
      {wechatModal && <WeChatModal onClose={() => setWechatModal(false)} />}
      
      {productGalleryModal && <GalleryCarouselModal product={productGalleryModal} onClose={() => setProductGalleryModal(null)} />}
      
      {productContactModal && <ProductContactModal product={productContactModal} onClose={() => setProductContactModal(null)} />}
      
      {galleryOpen && <ProjectsGallery onClose={() => setGalleryOpen(false)} />}

       <BackToTop /> 
    </div>
  );
}