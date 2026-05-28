import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export const Navigation = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-green-950/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-emerald-400" />
          <span className="text-xl font-bold tracking-widest uppercase">Aether<span className="text-green-500 font-light">Systems</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-sm font-medium text-green-400 hover:text-white transition-colors">Products</a>
          {/* ✅ Изменено: ведёт к секции проектов */}
          <a href="#projects" className="text-sm font-medium text-green-400 hover:text-white transition-colors">Technology</a>
          <a href="#trust" className="text-sm font-medium text-green-400 hover:text-white transition-colors">Enterprise</a>
          <a href="#contact" className="px-6 py-2 bg-white text-black font-semibold text-sm rounded-full hover:bg-green-200 transition-colors">Contact Sales</a>
        </div>

        <button className="md:hidden text-green-400 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-green-900/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col gap-4">
          <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-green-300">Products</a>
          {/* ✅ Изменено и в мобильном меню */}
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-green-300">Technology</a>
          <a href="#trust" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-green-300">Enterprise</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-emerald-400">Contact Sales</a>
        </div>
      )}
    </nav>
  );
};