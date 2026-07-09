import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 pointer-events-none">
      {/* Floating glass pill */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`max-w-6xl mx-auto rounded-2xl px-5 py-3 flex items-center justify-between pointer-events-auto transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#0A0A0F]/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]'
            : 'bg-[#0A0A0F]/40 backdrop-blur-lg border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center bg-[#0A0A0F] shadow-[0_0_15px_rgba(225,29,72,0.25)]">
            <span className="font-display font-bold text-lg tracking-tight text-white">MK</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-display font-bold text-base leading-tight text-white">Madhan Kumar</h1>
            <p className="text-xs text-primary font-mono tracking-wider">Full-Stack · AI · IoT</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors relative ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-primary rounded-full"
                  />
                )}
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_15px_rgba(225,29,72,0.5)]"
          >
            View Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 pointer-events-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>

      {/* Mobile Menu Drawer — separate floating card below the pill */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="max-w-6xl mx-auto mt-2 rounded-2xl bg-[#0A0A0F]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] py-4 px-6 flex flex-col gap-1 pointer-events-auto md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-base font-medium text-white/70 hover:text-primary py-2.5 border-b border-white/5 transition-colors last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 px-5 py-3 text-center text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
