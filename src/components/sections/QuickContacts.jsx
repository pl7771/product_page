// src/components/sections/QuickContacts.jsx
import { useState } from 'react';
import { MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { QRCode } from '../ui/QRCode'; // Убедись, что этот файл существует

export const QuickContacts = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully! Our team will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    // ✅ Секция светло-серая для контраста с белыми карточками
    <section id="contact" className="w-full px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 mb-12 scroll-mt-24 bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Choose your preferred way to reach us, or send a detailed inquiry through our form.
          </p>
        </div>

        {/* 🟢 Быстрые контакты (3 карточки) - С ЭФФЕКТОМ ВСПЛЫВАНИЯ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* WeChat */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#00A29A] hover:shadow-xl hover:shadow-[#00A29A]/10 hover:-translate-y-1 transition-all duration-300 group cursor-default">
            <div className="w-14 h-14 bg-[#00A29A]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#00A29A]/20 transition-all">
              <MessageCircle className="w-7 h-7 text-[#00A29A]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">WeChat</h3>
            <p className="text-slate-500 text-sm mb-4">Scan to add us</p>
            <div className="bg-white p-2 rounded-xl w-32 h-32 border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
              <QRCode />
            </div>
          </div>

          {/* WhatsApp */}
          <a href="https://wa.me/18005550199" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#25D366] hover:shadow-xl hover:shadow-[#25D366]/10 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#25D366]/20 transition-all">
              <Phone className="w-7 h-7 text-[#25D366]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">WhatsApp</h3>
            <p className="text-slate-500 text-sm mb-4">Quick response</p>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg transition-colors text-sm font-medium mt-auto shadow-md group-hover:shadow-lg">
              Chat Now <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          {/* Email */}
          <a href="mailto:sales@aethersystems.inc" className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#00A29A] hover:shadow-xl hover:shadow-[#00A29A]/10 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#00A29A]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#00A29A]/20 transition-all">
              <Mail className="w-7 h-7 text-[#00A29A]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
            <p className="text-slate-500 text-sm mb-4">Response within 24h</p>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-lg transition-colors text-sm font-medium mt-auto shadow-md group-hover:shadow-lg">
              Send Email <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* 📝 Контактная форма (Белая на сером фоне) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center sm:text-left">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                <input 
                  type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A] transition-all" 
                  placeholder="John" 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                <input 
                  type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A] transition-all" 
                  placeholder="Doe" 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Corporate Email</label>
              <input 
                type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A] transition-all" 
                placeholder="john@company.com" 
              />
            </div>
            
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Project Requirements</label>
              <textarea 
                name="message" value={formData.message} onChange={handleChange} rows={4}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A] transition-all resize-none" 
                placeholder="Describe your scale and specs..." 
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full sm:w-auto px-8 py-4 bg-[#00A29A] hover:bg-[#008f88] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00A29A]/20 hover:shadow-[#00A29A]/40 hover:-translate-y-0.5"
            >
              Submit Inquiry <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};