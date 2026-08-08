import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#444444]/20 py-8 px-6 sm:px-10 bg-[#080808] text-[#444444] font-body text-xs select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>© 2026 Madhan Kumar T</div>
        <div className="font-mono text-[11px] text-[#888888] font-semibold">
          madhankumart.in
        </div>
        <div className="font-mono text-[11px]">
          Built with React + GSAP + Lenis
        </div>
      </div>
    </footer>
  );
};

export default Footer;
