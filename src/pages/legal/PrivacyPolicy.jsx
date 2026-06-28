// src/pages/legal/PrivacyPolicy.jsx
import { LegalLayout } from './LegalLayout';
import { PageSEO } from '../../components/seo/PageSEO';
import { useLanguage } from '../../i18n/LanguageContext';

const sections = [
  { id: 'intro', title: 'Introduction' },
  { id: 'data-collection', title: 'Data Collection' },
  { id: 'usage', title: 'How We Use Data' },
  { id: 'protection', title: 'Data Protection' },
  { id: 'cookies', title: 'Cookies & Tracking' },
  { id: 'contact', title: 'Contact Us' },
];

export const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <>
      <PageSEO
        title={t('seo.privacy.title')}
        description={t('seo.privacy.description')}
        path="/privacy-policy"
      />
    <LegalLayout 
      title="Privacy Policy" 
      subtitle="Last updated: June 2026. We value your trust and are committed to protecting your personal information."
      sections={sections}
    >
      <section id="intro">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Welcome to Hebei Shandao Environmental Technology Co., Ltd. ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> By accessing our site, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>
      </section>

      <section id="data-collection">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
        <p className="text-slate-600 leading-relaxed mb-4">We may collect information about you in a variety of ways:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-[#00A29A]">
          <li><strong>Personal Data:</strong> Name, email address, phone number, and company details provided via contact forms.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, operating system, and referral URLs.</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent on site, and interaction patterns.</li>
        </ul>
      </section>

      <section id="usage">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
        <p className="text-slate-600 leading-relaxed">
          Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-600 mt-4 marker:font-bold marker:text-slate-400">
          <li>Create and manage your account or inquiry record.</li>
          <li>Email you regarding your account or order.</li>
          <li>Fulfill and manage purchases, orders, payments, and other transactions.</li>
          <li>Generate a personal profile about you to make future visits more personalized.</li>
        </ol>
      </section>

      <section id="protection">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Security of Your Information</h2>
        <p className="text-slate-600 leading-relaxed">
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
        </p>
      </section>

      <section id="cookies">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookies and Web Beacons</h2>
        <p className="text-slate-600 leading-relaxed">
          We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology.
        </p>
      </section>

      <section id="contact">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contact Us</h2>
        <p className="text-slate-600 leading-relaxed">
          If you have questions or comments about this Privacy Policy, please contact us at:
        </p>
        <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200 inline-block">
          <p className="font-mono text-sm text-slate-700">Email: hbshandao@outlook.com</p>
        </div>
      </section>
    </LegalLayout>
    </>
  );
};