// src/components/modals/LightboxModal.jsx
import { X } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export const LightboxModal = ({ image, onClose }) => {
  const { t } = useLanguage();
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-4">
      {/* Затемненный фон для клика */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* ✅ Кнопка закрытия в едином стиле (бирюзовая, круглая, с тенью) */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-full shadow-lg z-[160] transition-all duration-300 hover:scale-105 active:scale-95 border border-transparent hover:border-white/20"
        aria-label={t('common.close')}
      >
        <X className="w-6 h-6" />
      </button>

      {/* Изображение (уже описано в контексте, откуда открыт просмотр) */}
      <img
        src={image}
        alt=""
        className="relative z-0 max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
      />
    </div>
  );
};