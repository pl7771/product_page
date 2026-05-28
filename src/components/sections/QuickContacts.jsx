import { Reveal } from '../ui/Reveal';
import { ContactCard } from '../ui/ContactCard';
import { QRCode } from '../ui/QRCode';
import { MessageCircle, Phone, Mail } from 'lucide-react';

export const QuickContacts = () => {
  const whatsappLink = `https://wa.me/18005550199?text=${encodeURIComponent('Hello! I\'m interested in your products. Could you please provide more details?')}`;
  const emailLink = `mailto:sales@aethersystems.inc?subject=${encodeURIComponent('Product Inquiry')}&body=${encodeURIComponent('Hello! I\'m interested in learning more about your atmospheric equipment.')}`;

  return (
    <div className="max-w-5xl mx-auto mt-8 sm:mt-12 mb-12 sm:mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        
        <ContactCard 
          type="wechat"
          title="WeChat"
          desc="Scan QR code to add us"
          qr={<QRCode />}
          delay={0}
        />

        <ContactCard 
          type="whatsapp"
          title="WhatsApp"
          desc="Quick response guaranteed"
          action={
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full py-2 sm:py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2">
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Chat Now
            </a>
          }
          delay={100}
        />

        <ContactCard 
          type="email"
          title="Email"
          desc="Response within 24h"
          action={
            <a href={emailLink} className="w-full py-2 sm:py-2.5 bg-green-800 hover:bg-green-700 text-white font-semibold rounded-xl transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Send Email
            </a>
          }
          delay={200}
        />
      </div>
    </div>
  );
};