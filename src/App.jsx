// src/App.jsx
import { Routes, Route } from 'react-router-dom'; // ✅ Только Routes и Route, без BrowserRouter
import { useState } from 'react';

// Layout & Sections
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/ui/BackToTop';
import { HeroSection } from './components/sections/HeroSection';
import { IndustriesStrip } from './components/sections/IndustriesStrip';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { TrustSection } from './components/sections/TrustSection';
import { FaqSection } from './components/sections/FaqSection';
import { QuickContacts } from './components/sections/QuickContacts';
import ProjectsSection from './components/ProjectsSection';

// Pages (Новые страницы)
import { ProjectCategoryPage } from './pages/ProjectCategoryPage';
import { SingleProjectPage } from './pages/SingleProjectPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { ServiceAreaPage } from './pages/ServiceAreaPage';
import { IndustryInformationPage } from './pages/IndustryInformationPage';
import { IndustryArticlePage } from './pages/IndustryArticlePage';

// Modals
import { LightboxModal } from './components/modals/LightboxModal';
import { InfoModal } from './components/modals/InfoModal';
import { WeChatModal } from './components/modals/WeChatModal';
import { ProductContactModal } from './components/modals/ProductContactModal';
import { GalleryCarouselModal } from './components/modals/GalleryCarouselModal';

import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { TermsOfService } from './pages/legal/TermsOfService';

import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminArticlesPage } from './pages/admin/AdminArticlesPage';
import { AdminArticleEditPage } from './pages/admin/AdminArticleEditPage';
import { RequireAdmin } from './components/admin/RequireAdmin';
import { PageSEO } from './components/seo/PageSEO';
import { buildOrganizationSchema } from './seo/organizationSchema';
import { useLanguage } from './i18n/LanguageContext';

// Компонент Главной страницы
const HomePage = ({ onContactClick, onGalleryClick }) => {
  const { t, dict, lang } = useLanguage();

  return (
    <>
      <PageSEO
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        path="/"
        keywords={t('meta.keywords')}
        jsonLd={buildOrganizationSchema(lang, dict.contact, dict.products?.list, dict.faq?.items)}
      />
      <Navigation />
      <HeroSection />
      <IndustriesStrip />
      <ProjectsSection />
      <ProductShowcase onContactClick={onContactClick} onGalleryClick={onGalleryClick} />
      <QuickContacts />
      <TrustSection />
      <FaqSection />
      <Footer />
    </>
  );
};

export default function App() {
  // Стейты для модалок (глобальные)
  const [lightboxImg, setLightboxImg] = useState(null);
  const [wechatModal, setWechatModal] = useState(false);
  const [infoProduct, setInfoProduct] = useState(null);
  const [productContactModal, setProductContactModal] = useState(null);
  const [galleryProduct, setGalleryProduct] = useState(null);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);

  const openProductGallery = (product, index = 0) => {
    setGalleryInitialIndex(index);
    setGalleryProduct(product);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#00A29A]/30 selection:text-[#00A29A] overflow-x-hidden">
      
      {/* Маршруты */}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onContactClick={setProductContactModal}
              onGalleryClick={openProductGallery}
            />
          }
        />
        <Route path="/projects/:categoryId" element={<ProjectCategoryPage />} />
        <Route path="/projects/:categoryId/:projectId" element={<SingleProjectPage />} />
        <Route path="/service-areas" element={<ServiceAreasPage />} />
        <Route path="/service-areas/:regionId" element={<ServiceAreaPage />} />
        <Route path="/industry-information" element={<IndustryInformationPage />} />
        <Route path="/industry-information/:articleId" element={<IndustryArticlePage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin/articles"
          element={
            <RequireAdmin>
              <AdminArticlesPage />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/articles/:id"
          element={
            <RequireAdmin>
              <AdminArticleEditPage />
            </RequireAdmin>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>

      <BackToTop /> 

      {/* Глобальные модалки */}
      {lightboxImg && <LightboxModal image={lightboxImg} onClose={() => setLightboxImg(null)} />}
      {infoProduct && <InfoModal product={infoProduct} onClose={() => setInfoProduct(null)} />}
      {wechatModal && <WeChatModal onClose={() => setWechatModal(false)} />}
      {productContactModal && <ProductContactModal product={productContactModal} onClose={() => setProductContactModal(null)} />}
      {galleryProduct && (
        <GalleryCarouselModal
          product={galleryProduct}
          initialIndex={galleryInitialIndex}
          onClose={() => setGalleryProduct(null)}
        />
      )}
    </div>
  );
}