import { Star } from 'lucide-react';
import { Reveal } from './Reveal';

export const TestimonialCard = ({ quote, author, role, delay }) => {
  return (
    <Reveal delay={delay}>
      <div className="p-8 bg-gradient-to-br from-green-800/50 to-green-950/50 rounded-2xl border border-white/5 relative">
        <Star className="w-6 h-6 text-emerald-500 mb-6" />
        <p className="text-lg text-green-300 italic mb-8 font-light leading-relaxed">"{quote}"</p>
        <div>
          <p className="font-semibold text-white">{author}</p>
          <p className="text-sm text-green-500">{role}</p>
        </div>
      </div>
    </Reveal>
  );
};