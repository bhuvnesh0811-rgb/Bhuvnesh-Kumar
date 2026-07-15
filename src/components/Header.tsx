import { useState, useEffect } from 'react';
import { Radio, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md border-b border-dark-border py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
            <Radio className="w-6 h-6 text-dark" />
          </div>
          <div>
            <div className="font-display font-bold text-xl tracking-tight leading-none text-white">ROUNAK</div>
            <div className="text-[10px] tracking-widest uppercase text-primary font-medium">Broadcasting</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-white text-dark text-sm font-bold hover:bg-primary transition-colors">
            Get Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenu(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-dark md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-dark-border">
              <span className="font-display font-bold text-xl">Menu</span>
              <button onClick={() => setMobileMenu(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenu(false)}
                  className="text-2xl font-display font-medium text-gray-300 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setMobileMenu(false)}
                className="mt-4 text-center px-6 py-4 rounded-xl bg-primary text-dark font-bold text-lg"
              >
                Get a Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
