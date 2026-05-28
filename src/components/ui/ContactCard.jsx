// src/components/ui/ContactCard.jsx
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { Reveal } from './Reveal'; // ✅ Импорт сверху

export const ContactCard = ({ type, title, desc, action, qr, delay }) => {
  const icons = { wechat: MessageCircle, whatsapp: Phone, email: Mail };
  const Icon = icons[type];
  
  const colors = { 
    wechat: 'bg-[#07C160]/20 text-[#07C160]', 
    whatsapp: 'bg-[#25D366]/20 text-[#25D366]', 
    email: 'bg-emerald-500/20 text-emerald-400' 
  };

  return (
    <Reveal delay={delay}>
      <div className="bg-green-900/50 backdrop-blur-sm border border-green-800 rounded-2xl p-5 sm:p-6 hover:border-emerald-500/50 transition-all group h-full flex flex-col items-center justify-center">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 ${colors[type]} rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform flex-shrink-0`}>
          <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <h3 className="text-base sm:text-lg font-bold text-white text-center mb-2 flex-shrink-0">{title}</h3>
        <p className="text-green-400 text-xs sm:text-sm text-center mb-3 sm:mb-4 flex-shrink-0">{desc}</p>
        {qr ? (
          <div className="bg-white p-2.5 sm:p-3 rounded-xl w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-3 sm:mb-4 shadow-lg flex-shrink-0">
            {qr}
          </div>
        ) : action}
      </div>
    </Reveal>
  );
};