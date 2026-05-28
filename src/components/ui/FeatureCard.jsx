// src/components/ui/FeatureCard.jsx
import { Reveal } from './Reveal'; // ✅ Правильный импорт сверху

export const FeatureCard = ({ icon: Icon, title, desc }) => {
  return (
    <div className="p-6 bg-green-950/50 backdrop-blur-md rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
      <div className="w-12 h-12 bg-green-900 rounded-xl flex items-center justify-center mb-6 text-emerald-400 border border-white/5">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-green-500 font-light leading-relaxed">{desc}</p>
    </div>
  );
};