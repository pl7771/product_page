// src/pages/legal/TermsOfService.jsx
import { LegalLayout } from './LegalLayout';
import { PageSEO } from '../../components/seo/PageSEO';
import { useLanguage } from '../../i18n/LanguageContext';

const sections = [
  { id: 'agreement', title: 'Agreement to Terms' },
  { id: 'license', title: 'Intellectual Property' },
  { id: 'user-reps', title: 'User Representations' },
  { id: 'disclaimer', title: 'Disclaimer' },
  { id: 'limitations', title: 'Limitation of Liability' },
  { id: 'governing', title: 'Governing Law' },
];

export const TermsOfService = () => {
  const { t } = useLanguage();

  return (
    <>
      <PageSEO
        title={t('seo.terms.title')}
        description={t('seo.terms.description')}
        path="/terms-of-service"
      />
    <LegalLayout 
      title="Terms of Service" 
      subtitle="Last updated: June 2026. Please read these terms carefully before using our services."
      sections={sections}
    >
      <section id="agreement">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
        <p className="text-slate-600 leading-relaxed">
          These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Hebei Shandao Environmental Technology Co., Ltd. ("we," "us" or "our"), concerning your access to and use of our website and services.
        </p>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mt-4">
          <p className="text-sm text-red-800">
            <strong>Important:</strong> You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE.
          </p>
        </div>
      </section>

      <section id="license">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Intellectual Property Rights</h2>
        <p className="text-slate-600 leading-relaxed">
          Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") are owned or controlled by us or licensed to us.
        </p>
      </section>

      <section id="user-reps">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Representations</h2>
        <p className="text-slate-600 leading-relaxed mb-4">By using the Site, you represent and warrant that:</p>
        <ul className="space-y-3 text-slate-600">
          {[
            "All registration information you submit will be true, accurate, current, and complete.",
            "You will maintain the accuracy of such information and promptly update such registration information as necessary.",
            "You have the legal capacity and you agree to comply with these Terms of Service.",
            "You are not a minor in the jurisdiction in which you reside."
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00A29A] flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="disclaimer">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Disclaimer</h2>
        <p className="text-slate-600 leading-relaxed">
          THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF.
        </p>
      </section>

      <section id="limitations">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
        <p className="text-slate-600 leading-relaxed">
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SITE OR OUR SERVICES.
        </p>
      </section>

      <section id="governing">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Governing Law</h2>
        <p className="text-slate-600 leading-relaxed">
          These Terms shall be governed by and defined following the laws of the People's Republic of China. Hebei Shandao Environmental Technology Co., Ltd. and yourself irrevocably consent that the courts of China shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
        </p>
      </section>
    </LegalLayout>
    </>
  );
};