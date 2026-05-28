import { Zap } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-green-950 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <Zap className="w-5 h-5 text-emerald-400" />
          <span className="text-lg font-bold tracking-widest uppercase text-white">Aether<span className="font-light">Systems</span></span>
        </div>
        <div className="flex gap-6 text-sm text-green-500 font-light">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Shipping</a>
        </div>
        <p className="text-xs text-green-600 font-light">
          © {new Date().getFullYear()} Aether Systems Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};