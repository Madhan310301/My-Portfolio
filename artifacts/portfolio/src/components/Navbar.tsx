import React, { useState } from 'react';
import NavDrawer from './NavDrawer';

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 py-6 flex items-start justify-between pointer-events-none">
        {/* Top Left Logo & Eyebrow */}
        <div className="pointer-events-auto flex flex-col gap-1 select-none">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-display text-2xl sm:text-3xl text-[#f5f5f5] tracking-wider font-bold hover:text-[#00d4ff] transition-colors"
          >
            MK<span className="text-[#00d4ff]">.</span>
          </a>

          <div className="hero-eyebrow flex items-center gap-2 font-body text-[10px] sm:text-xs text-[#888888] tracking-widest uppercase font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] pulse-dot inline-block" />
            <span>SHIPPING SYSTEMS INTO REALITY.</span>
          </div>
        </div>

        {/* Top Right Menu Button */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="pointer-events-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-[#222] bg-[#0f0f0f]/80 backdrop-blur-md text-[#f5f5f5] hover:text-[#00d4ff] hover:border-[#00d4ff]/60 transition-all font-body text-xs font-semibold tracking-wider uppercase cursor-pointer flex items-center gap-2 shadow-lg"
          aria-label="Open menu navigation"
        >
          <span>Menu</span>
          <span className="text-[#00d4ff] font-bold text-sm">+</span>
        </button>
      </header>

      {/* Slide-out Navigation Drawer */}
      <NavDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};

export default Navbar;
