import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Compass, Radio } from 'lucide-react';
import NebulaBackground from '@/components/NebulaBackground';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FAF6EC] px-6 relative overflow-hidden text-[#241B10]">
      <NebulaBackground />

      <div className="max-w-lg w-full hud-bracket bg-[#FFFDF8]/95 backdrop-blur-xl border border-[#C9972E]/40 p-8 sm:p-10 rounded-2xl shadow-[0_12px_40px_rgba(120,90,40,0.12)] relative z-10 text-center">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#C9972E]/20 text-[11px] font-mono text-[#7A6B55]">
          <div className="flex items-center gap-2">
            <Radio size={14} className="text-[#C9972E] animate-pulse" />
            <span className="text-[#C9972E] font-semibold">// SECTOR_UNKNOWN</span>
          </div>
          <span>CODE: 404_NOT_FOUND</span>
        </div>

        {/* 404 Hero Display */}
        <div className="relative my-6 flex justify-center items-center">
          <div className="w-28 h-28 rounded-full border border-[#C9972E]/30 flex items-center justify-center absolute animate-ping opacity-20 pointer-events-none" />
          <div className="w-36 h-36 rounded-full border border-[#C9972E]/20 flex items-center justify-center absolute pointer-events-none" />
          <div className="font-display font-bold text-7xl sm:text-8xl tracking-tight bg-gradient-to-br from-[#D9A94A] to-[#B9821F] bg-clip-text text-transparent select-none">
            404
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-display font-bold text-[#241B10] mb-3">
          Orbital Trajectory Lost
        </h1>

        <p className="text-sm sm:text-base text-[#7A6B55] leading-relaxed mb-8 max-w-sm mx-auto font-sans">
          The requested coordinate or document does not exist in this sector. Recalibrate navigation and return to mission control.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#D9A94A] to-[#B9821F] text-white text-xs font-mono font-bold rounded-full hover:brightness-105 transition-all shadow-md hover:scale-105 cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>RETURN TO MISSION CONTROL</span>
          </Link>
          <Link
            to="/#hackathons"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FAF6EC] border border-[#C9972E]/40 text-[#241B10] text-xs font-mono font-bold rounded-full hover:border-[#C9972E] hover:bg-[#FAF6EC] transition-all cursor-pointer shadow-sm"
          >
            <Compass size={14} className="text-[#C9972E]" />
            <span>VIEW HACKATHONS</span>
          </Link>
        </div>

        {/* Footer telemetry */}
        <div className="mt-8 pt-4 border-t border-[#C9972E]/15 text-[10px] font-mono text-[#7A6B55]/80">
          // SYS_RECOVERY_PROTOCOL: ACTIVE · MADHAN KUMAR PORTFOLIO
        </div>
      </div>
    </div>
  );
}
