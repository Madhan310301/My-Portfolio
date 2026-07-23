import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HireMeButton from './HireMeButton';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
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
            ? 'bg-[#FAF6EC]/90 backdrop-blur-xl border-[#C9972E]/30 shadow-[0_8px_32px_rgba(120,90,40,0.1)]'
            : 'bg-[#FAF6EC]/70 backdrop-blur-lg border-[#C9972E]/20 shadow-[0_4px_24px_rgba(120,90,40,0.06)]'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-full border border-[#C9972E]/60 flex items-center justify-center bg-gradient-to-br from-[#D9A94A] to-[#B9821F] shadow-[0_2px_12px_rgba(201,151,46,0.3)]">
            <span className="font-display font-bold text-lg tracking-tight text-white">MK</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-display font-bold text-base leading-tight text-[#241B10]">Madhan Kumar</h1>
            <p className="text-xs text-[#C9972E] font-mono tracking-wider">Full-Stack · AI · IoT</p>
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
                    ? 'text-[#C9972E] font-bold'
                    : 'text-[#7A6B55] hover:text-[#241B10]'
                }`}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#C9972E] rounded-full"
                  />
                )}
              </a>
            ))}
          </div>

          <HireMeButton className="px-5 py-2 text-sm font-bold bg-gradient-to-r from-[#D9A94A] to-[#B9821F] text-white rounded-lg hover:brightness-105 transition-all shadow-[0_2px_12px_rgba(201,151,46,0.3)]" />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-bold bg-gradient-to-r from-[#D9A94A] to-[#B9821F] text-white rounded-lg hover:brightness-105 transition-all shadow-[0_2px_12px_rgba(201,151,46,0.3)]"
          >
            View Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#241B10] p-2 pointer-events-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="max-w-6xl mx-auto mt-2 rounded-2xl bg-[#FFFDF8]/95 backdrop-blur-xl border border-[#C9972E]/30 shadow-[0_8px_32px_rgba(120,90,40,0.12)] py-4 px-6 flex flex-col gap-1 pointer-events-auto md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-base font-medium text-[#7A6B55] hover:text-[#C9972E] py-2.5 border-b border-[#C9972E]/10 transition-colors last:border-0"
              >
                {link.label}
              </a>
            ))}
            <HireMeButton className="mt-3 px-5 py-3 text-center text-sm font-bold bg-gradient-to-r from-[#D9A94A] to-[#B9821F] text-white rounded-lg" />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 px-5 py-3 text-center text-sm font-bold bg-gradient-to-r from-[#D9A94A] to-[#B9821F] text-white rounded-lg"
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
