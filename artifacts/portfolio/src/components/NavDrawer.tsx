import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { label: 'PROJECTS', num: '01', href: '#projects' },
  { label: 'EXPERIENCE', num: '02', href: '#experience' },
  { label: 'PHILOSOPHY', num: '03', href: '#philosophy' },
  { label: 'CONTACT', num: '04', href: '#contact' },
];

const NavDrawer: React.FC<NavDrawerProps> = ({ isOpen, onClose }) => {
  const handleNavClick = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[9990] bg-black/70 backdrop-blur-sm cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 bottom-0 z-[9999] w-[340px] max-w-[85vw] h-full bg-[#0f0f0f] border-r border-[#1a1a1a] p-8 flex flex-col justify-between select-none shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl text-[#f5f5f5] tracking-wider font-bold">
                MK<span className="text-[#00d4ff]">.</span>
              </span>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full border border-[#222] hover:border-[#00d4ff] flex items-center justify-center text-[#888888] hover:text-[#00d4ff] transition-all cursor-pointer"
                aria-label="Close menu drawer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-6 my-auto">
              <div className="font-mono text-[10px] text-[#00d4ff] uppercase tracking-widest font-semibold mb-2">
                // NAVIGATION
              </div>

              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="group flex items-baseline justify-between border-b border-[#1a1a1a] pb-3">
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="font-display text-4xl sm:text-5xl text-[#f5f5f5] hover:text-[#00d4ff] transition-colors cursor-pointer text-left nav-drawer-item"
                  >
                    {item.label}
                  </button>
                  <span className="font-body text-xs font-semibold text-[#00d4ff] ml-4">
                    {item.num}
                  </span>
                </div>
              ))}
            </nav>

            {/* Bottom Social Links */}
            <div className="pt-6 border-t border-[#1a1a1a]">
              <div className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-3 font-semibold">
                SOCIALS
              </div>
              <div className="flex flex-wrap gap-4 text-xs font-body text-[#888888]">
                <a
                  href="https://github.com/Madhan310301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00d4ff] transition-colors flex items-center gap-1"
                >
                  GitHub <ExternalLink size={10} />
                </a>
                <a
                  href="https://linkedin.com/in/madhankumart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00d4ff] transition-colors flex items-center gap-1"
                >
                  LinkedIn <ExternalLink size={10} />
                </a>
                <a
                  href="mailto:maddymadhan3103@gmail.com"
                  className="hover:text-[#00d4ff] transition-colors flex items-center gap-1"
                >
                  Email <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default NavDrawer;
