import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '@assets/Professional_Photo_1783621096294.jpeg';

import SectionWatermark from './SectionWatermark';

const Hero: React.FC = () => {
  const [terminalTextIndex, setTerminalTextIndex] = useState(0);
  const terminalLines = [
    "Currently building full-stack, AI, and IoT systems — one prototype at a time.",
    "Training predictive ML models for the AI Financial Coach.",
    "Optimizing edge inference latency for IoT healthcare wearables."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalTextIndex((prev) => (prev + 1) % terminalLines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [terminalLines.length]);

  return (
    <section className="relative min-h-[100dvh] pt-32 pb-20 flex items-center overflow-hidden" id="hero">
      <SectionWatermark word="BUILD" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            {/* Subheading */}
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C9972E] animate-pulse shadow-[0_0_10px_rgba(201,151,46,0.8)]"></span>
              <span className="text-[#C9972E] font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold">
                // FULL-STACK · AI · IOT
              </span>
            </div>
            
            {/* Main Heading with Gold Text Stroke */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight text-[#241B10]">
              BUILDING <br />
              <span 
                className="text-transparent transition-all"
                style={{ WebkitTextStroke: '2px #C9972E' }}
              >
                SOFTWARE
              </span>
              <span className="text-[#C9972E]">.</span>
            </h1>
            
            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-[#7A6B55] leading-relaxed max-w-xl">
              I'm Madhan Kumar, a 3rd-year B.Tech Computer Science student at BIHER (Chennai) who loves building real, working systems — across web, AI, and hardware. I've shipped 20+ projects, from hackathon-winning IoT safety wearables to cross-modal AI systems.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#projects" 
                className="px-7 py-3.5 bg-gradient-to-r from-[#D9A94A] to-[#B9821F] text-white font-bold text-sm rounded-full hover:brightness-105 transition-all hover:scale-105 shadow-[0_4px_16px_rgba(201,151,46,0.3)] flex items-center gap-2 cursor-pointer"
              >
                → Explore Work
              </a>

              <a 
                href="#contact"
                className="px-7 py-3.5 bg-[#FFFDF8] border border-[#C9972E]/40 text-[#241B10] font-bold text-sm rounded-full hover:border-[#C9972E] hover:bg-[#FAF6EC] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#C9972E]"></span>
                Contact Me
              </a>

              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#7A6B55]/30 text-[#7A6B55] hover:text-[#241B10] hover:border-[#C9972E] font-mono text-xs rounded-full transition-all flex items-center gap-2 cursor-pointer"
              >
                ↓ Download CV
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#C9972E]/20">
              {[
                { value: "20+", label: "Projects Shipped" },
                { value: "25+", label: "Skills Mapped" },
                { value: "9.5", label: "Current CGPA" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="hud-bracket bg-[#FFFDF8]/80 p-3.5 border border-[#C9972E]/20 hover:border-[#C9972E] transition-colors backdrop-blur-sm group rounded-lg"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-[#241B10] group-hover:text-[#C9972E] transition-colors">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-[#7A6B55] font-mono mt-1">// {stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Draggable Terminal ID Badge Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center justify-center pt-6 lg:pt-0"
          >
            <motion.div
              drag
              dragElastic={0.2}
              dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
              animate={{ 
                y: [0, -12, 0], 
                rotateZ: [-1, 1, -1] 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
              className="w-full max-w-sm sm:max-w-md hud-bracket bg-[#FFFDF8]/95 p-6 border-2 border-[#C9972E]/30 hover:border-[#C9972E] transition-colors shadow-[0_8px_32px_rgba(120,90,40,0.12)] backdrop-blur-xl relative cursor-grab active:cursor-grabbing rounded-xl"
            >
              {/* Header Badge Strip */}
              <div className="flex items-center justify-between border-b border-[#C9972E]/20 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#C9972E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#D9A94A]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#B9821F]"></div>
                </div>
                <div className="font-mono text-[10px] text-[#C9972E] tracking-widest uppercase font-semibold">
                  // IDENTITY_CARD_01
                </div>
              </div>

              {/* Portrait Photo Container — Perfect Framing of Head, Suit & Tie */}
              <div className="relative rounded-lg overflow-hidden border border-[#C9972E]/30 mb-4 bg-[#FAF6EC] aspect-[4/5] sm:aspect-[3/4] w-full max-h-[380px] shadow-inner">
                <img 
                  src={profilePhoto} 
                  alt="Madhan Kumar" 
                  className="w-full h-full object-cover object-[center_15%] filter contrast-[1.03]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Madhan+Kumar&background=C9972E&color=fff&size=512';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241B10]/90 via-[#241B10]/20 to-transparent"></div>
                
                {/* Overlay Identity Text */}
                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <div className="text-xl font-bold font-display text-white drop-shadow-md">Madhan Kumar</div>
                  <div className="text-xs font-mono text-[#D9A94A] font-semibold">Full-Stack · AI · IoT</div>
                </div>
              </div>

              {/* Live Terminal Telemetry */}
              <div className="bg-[#FAF6EC] p-3 rounded border border-[#C9972E]/20 font-mono text-xs text-[#241B10] min-h-[56px] flex items-center">
                <span className="text-[#C9972E] mr-2 font-bold">&gt;</span>
                <span>{terminalLines[terminalTextIndex]}</span>
                <span className="animate-pulse ml-1 text-[#C9972E]">_</span>
              </div>

              {/* Footer Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-[#C9972E]/20 justify-between items-center">
                <div className="flex gap-1.5">
                  {['React', 'Python', 'Node.js', 'ESP32'].map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 bg-[#FAF6EC] border border-[#C9972E]/30 rounded text-[#7A6B55]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-[9px] font-mono text-[#7A6B55] uppercase">// DRAG_TO_MOVE</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
