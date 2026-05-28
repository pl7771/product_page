import { X } from 'lucide-react';

export const InfoModal = ({ product, onClose, onContactRequest }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-green-950/80 backdrop-blur-sm">
      <div className="bg-green-900 border border-green-800 p-8 rounded-2xl max-w-2xl w-full relative animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-3 right-3 z-50 p-3 bg-green-800 md:bg-transparent rounded-full text-white md:text-green-400 hover:text-white transition-all border border-green-700 md:border-transparent shadow-lg md:shadow-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden bg-green-800 border border-green-700">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
            <h3 className="text-3xl font-bold text-white mb-2">{product.name}</h3>
            <p className="text-emerald-400 font-mono text-sm mb-6">Technical Data Sheet</p>
            <div className="text-green-300 space-y-4 mb-8">
              <p>Здесь вы можете разместить подробное описание товара. Это окно поддерживает много текста.</p>
              <p>Оборудование выполнено из авиационного алюминия с использованием запатентованной технологии распыления.</p>
            </div>
            <button 
              onClick={() => {
                const templateText = `Hello! I'm interested in: ${product.name}. Could you please provide more details about pricing and specifications?`;
                onContactRequest(templateText);
                onClose();
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 150);
              }}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition-colors mt-auto"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};