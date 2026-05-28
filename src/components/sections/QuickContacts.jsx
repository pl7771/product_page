import { useState } from 'react';
import { MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { QRCode } from '../ui/QRCode'; // Убедись, что файл существует

export const QuickContacts = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    // ✅ Внешний контейнер: отвечает за отступы от краёв экрана
    <section id="contact" className="w-full px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 mb-12 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-green-400 text-lg max-w-2xl mx-auto">
            Choose your preferred way to reach us, or send a detailed inquiry through our form.
          </p>
        </div>

        {/* 🟢 Быстрые контакты (3 карточки) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* WeChat */}
          <div className="bg-green-900/50 backdrop-blur-sm border border-green-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-emerald-500/50 transition-all">
            <div className="w-14 h-14 bg-[#07C160]/20 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-7 h-7 text-[#07C160]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">WeChat</h3>
            <p className="text-green-400 text-sm mb-4">Scan to add us</p>
            <div className="bg-white p-2 rounded-xl w-32 h-32">
              <QRCode />
            </div>
          </div>

          {/* WhatsApp */}
          <a href="https://wa.me/18005550199" target="_blank" rel="noopener noreferrer" className="bg-green-900/50 backdrop-blur-sm border border-green-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-emerald-500/50 transition-all group">
            <div className="w-14 h-14 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-[#25D366]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-green-400 text-sm mb-4">Quick response</p>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg transition-colors text-sm font-medium mt-auto">
              Chat Now <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          {/* Email */}
          <a href="mailto:sales@aethersystems.inc" className="bg-green-900/50 backdrop-blur-sm border border-green-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-emerald-500/50 transition-all group">
            <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-green-400 text-sm mb-4">Response within 24h</p>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-800 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium mt-auto">
              Send Email <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* 📝 Контактная форма */}
        <div className="bg-green-900/30 border border-green-800 rounded-3xl p-6 sm:p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center sm:text-left">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">First Name</label>
                <input 
                  type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                  placeholder="John" 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">Last Name</label>
                <input 
                  type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                  placeholder="Doe" 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">Corporate Email</label>
              <input 
                type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                placeholder="john@company.com" 
              />
            </div>
            
            <div>
              <label className="block text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">Project Requirements</label>
              <textarea 
                name="message" value={formData.message} onChange={handleChange} rows={4}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none" 
                placeholder="Describe your scale and specs..." 
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              Submit Inquiry <ArrowRight className="w-5 h-5" />
            </button>
          </form>






        </div>

        {/* 🆕 Кнопка "Наверх" */}
        <div className="flex justify-center mt-12">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-900 hover:bg-green-800 text-white font-medium rounded-full transition-all border border-green-800 hover:border-emerald-500 group shadow-lg"
          >
            <svg className="w-5 h-5 text-emerald-400 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
            Back to Top
          </button>
        </div>



      </div>
    </section>
  );
};