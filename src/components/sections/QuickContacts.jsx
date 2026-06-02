// src/components/sections/QuickContacts.jsx
import { useState } from 'react';
import { MessageCircle, Phone, Mail, ArrowRight, Send, Copy } from 'lucide-react';

export const QuickContacts = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Функция для копирования WeChat ID
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('WeChat ID copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="w-full px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Get In Touch</h2>
          <p className="text-slate-500">Scan to connect or send us a direct message.</p>
        </div>

        {/* 🟢 Карточки с QR кодами сверху */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* WeChat Card */}
          <div className="group bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#00A29A] hover:shadow-xl hover:shadow-[#00A29A]/10 transition-all duration-300 relative overflow-hidden">
            {/* Декоративная полоска сверху */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#00A29A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            
            {/* QR Code Section */}
            <div className="mb-6 p-2 bg-slate-50 rounded-xl border border-slate-100 shadow-inner group-hover:shadow-md transition-shadow">
              <img 
                src="/data/qr/wechat3.png" 
                alt="WeChat QR" 
                className="w-40 h-40 object-contain" 
              />
            </div>

            {/* Icon & Title */}
            <div className="flex items-center gap-3 mb-2">
               <div className="w-10 h-10 bg-[#00A29A]/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#00A29A]" />
               </div>
               <h3 className="text-lg font-bold text-slate-900">WeChat Official</h3>
            </div>
            
            <p className="text-sm text-slate-500 mb-6">Scan or Copy ID to add</p>
            
            {/* Button to Copy ID */}
            <div className="mt-auto w-full">
              <button 
                onClick={() => copyToClipboard('wxid_bol1pjica7ek22')}
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-slate-100 hover:bg-[#00A29A] hover:text-white text-slate-700 rounded-xl transition-colors text-sm font-bold border border-slate-200 hover:border-[#00A29A]"
              >
                Copy WeChat ID <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* WhatsApp Card */}
          <a href="https://wa.me/8616631105554" target="_blank" rel="noopener noreferrer" className="group bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#25D366] hover:shadow-xl hover:shadow-[#25D366]/10 transition-all duration-300 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#25D366] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            
            {/* QR Code Section */}
            <div className="mb-6 p-2 bg-slate-50 rounded-xl border border-slate-100 shadow-inner group-hover:shadow-md transition-shadow">
              <img 
                src="/data/qr/whatsapp2.png" 
                alt="WhatsApp QR" 
                className="w-40 h-40 object-contain" 
              />
            </div>

            {/* Icon & Title */}
            <div className="flex items-center gap-3 mb-2">
               <div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#25D366]" />
               </div>
               <h3 className="text-lg font-bold text-slate-900">WhatsApp Direct</h3>
            </div>
            
            <p className="text-sm text-slate-500 mb-6">Fastest response time</p>
            
            {/* Button Bottom */}
            <div className="mt-auto w-full">
              <span className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl transition-colors text-sm font-bold shadow-md group-hover:shadow-lg">
                Open Chat <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>

          {/* Email Card */}
          <a href="mailto:lyn16631105554@outlook.com" className="group bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#00A29A] hover:shadow-xl hover:shadow-[#00A29A]/10 transition-all duration-300 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A29A] to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            
            {/* Placeholder for symmetry */}
            <div className="mb-6 p-2 bg-slate-50 rounded-xl border border-slate-100 shadow-inner flex items-center justify-center w-40 h-40">
               <Mail className="w-16 h-16 text-slate-300" />
            </div>

            {/* Icon & Title */}
            <div className="flex items-center gap-3 mb-2">
               <div className="w-10 h-10 bg-[#00A29A]/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#00A29A]" />
               </div>
               <h3 className="text-lg font-bold text-slate-900">Corporate Email</h3>
            </div>
            
            <p className="text-sm text-slate-500 mb-6">For detailed inquiries</p>
            
            {/* Button Bottom */}
            <div className="mt-auto w-full">
              <span className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#00A29A] hover:bg-[#008f88] text-white rounded-xl transition-colors text-sm font-bold shadow-md group-hover:shadow-lg">
                Send Email <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>
        </div>

        {/* 📝 Форма */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Send a Quick Inquiry</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" name="firstName" placeholder="First Name" required
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A] transition-all" 
              />
              <input 
                type="text" name="lastName" placeholder="Last Name" required
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A] transition-all" 
              />
            </div>
            
            <input 
              type="email" name="email" placeholder="Corporate Email" required
              className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A] transition-all" 
            />
            
            <textarea 
              name="message" placeholder="How can we help you?" rows={3} required
              className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00A29A] focus:ring-1 focus:ring-[#00A29A] transition-all resize-none" 
            />
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-3 bg-[#00A29A] hover:bg-[#008f88] text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm"
            >
              {isSubmitting ? 'Sending...' : 'Submit Request'} 
              {!isSubmitting && <Send className="w-4 h-4" />}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};