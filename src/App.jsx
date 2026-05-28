import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Layout
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';

// Sections
import { HeroSection } from './components/sections/HeroSection';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { TrustSection } from './components/sections/TrustSection';
import { QuickContacts } from './components/sections/QuickContacts';
import ProjectsSection from './components/ProjectsSection';

// Modals
import { LightboxModal } from './components/modals/LightboxModal';
import { InfoModal } from './components/modals/InfoModal';
import { WeChatModal } from './components/modals/WeChatModal';
import { ProductContactModal } from './components/modals/ProductContactModal';
import ProjectsGallery from './components/ProjectsGallery';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [wechatModal, setWechatModal] = useState(false);
  const [infoProduct, setInfoProduct] = useState(null);
  const [contactMessage, setContactMessage] = useState("");
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [productContactModal, setProductContactModal] = useState(null);

  useEffect(() => {
    // 🆕 Сброс всех модалок при первой загрузке
    setLightboxImg(null);
    setWechatModal(false);
    setInfoProduct(null);
    setGalleryOpen(false);
    setProductContactModal(null);
    
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-green-950 text-green-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      
      <Navigation isScrolled={isScrolled} />
      <HeroSection />
      <ProjectsSection onOpenGallery={() => setGalleryOpen(true)} />
      
      <ProductShowcase 
        onLightboxClick={setLightboxImg}
        onContactClick={setProductContactModal}
      />
      
      <TrustSection />
      <QuickContacts />
      <Footer />

      {/* Modals */}
      <LightboxModal image={lightboxImg} onClose={() => setLightboxImg(null)} />
      
      <InfoModal 
        product={infoProduct} 
        onClose={() => setInfoProduct(null)}
        onContactRequest={setContactMessage}
      />
      
      <WeChatModal isOpen={wechatModal} onClose={() => setWechatModal(false)} />
      
      {productContactModal && (
        <ProductContactModal 
          product={productContactModal} 
          onClose={() => setProductContactModal(null)} 
        />
      )}
      
      <ProjectsGallery isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} />
    </div>
  );
}