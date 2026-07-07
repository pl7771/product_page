import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { ProductCard } from '../ui/ProductCard';
import { SectionHeading, SectionLead } from '../ui/SectionHeading';
import { useLanguage } from '../../i18n/LanguageContext';
import { useLocalizedProducts } from '../../hooks/useLocalizedData';
import { type } from '../../styles/typography';

export const ProductShowcase = ({ onContactClick, onGalleryClick }) => {
  const { t } = useLanguage();
  const showcaseProducts = useLocalizedProducts();

  return (
    <section id="products" className="py-16 sm:py-20 bg-white relative border-t border-slate-100 overflow-hidden section-mesh">
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#00A29A]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <SectionHeading centered>
            {t('products.title')}
            {t('products.titleHighlight')}
          </SectionHeading>
          <SectionLead centered>
            {t('products.descriptionLine1')}
            <br />
            {t('products.descriptionLine2')}
          </SectionLead>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {showcaseProducts.map((product, idx) => (
            <Reveal key={product.id} delay={idx * 100}>
              <ProductCard product={product} onContactClick={onContactClick} onGalleryClick={onGalleryClick} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-8 py-4 bg-[#00A29A] hover:bg-[#008f88] text-white ${type.btnStrong} rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,162,154,0.3)] hover:shadow-[0_0_30px_rgba(0,162,154,0.5)] hover:-translate-y-0.5 group`}
          >
            {t('products.requestOffer')}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
