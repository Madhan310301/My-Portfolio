import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// PHOTO PLACEHOLDER 1 — Hero circular portrait
import profilePhoto from '@assets/Professional_Photo_1783621096294.jpeg';

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
    <section className="relative min-h-[100dvh] pt-32 pb-20 flex items-center" id="hero">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-[2px] bg-primary"></div>
              <span className="text-primary font-mono text-sm tracking-wider uppercase">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight text-white">
              Full-Stack Developer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                & AI / IoT Builder.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              I'm Madhan Kumar, a Computer Science undergraduate at BIHER who loves building real, working systems — across web, AI, and hardware. I've shipped 20+ projects, from a hackathon-winning IoT safety wearable to cross-modal satellite retrieval systems.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] flex items-center gap-2"
              >
                → Explore Work
              </a>
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/20 text-white font-bold rounded-md hover:bg-white/5 transition-all flex items-center gap-2"
              >
                ↓ Download CV
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-12">
              {[
                { value: "20+", label: "Projects Delivered" },
                { value: "25+", label: "Technical Skills Mapped" },
                { value: "9.5", label: "Current CGPA" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="hud-bracket bg-card/50 p-4 border border-white/5 hover:border-primary/50 transition-colors backdrop-blur-sm group"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-glow transition-all">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-mono mt-1">// {stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center lg:items-end justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-primary/30 p-2">
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" style={{ borderTopColor: 'transparent', borderRightColor: 'transparent' }}></div>
              <div className="absolute inset-0 rounded-full border border-orange-500/20 animate-[spin_15s_linear_infinite_reverse]" style={{ borderBottomColor: 'transparent', borderLeftColor: 'transparent' }}></div>
              
              {/* Orbiting dot */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(225,29,72,0.8)] animate-pulse"></div>

              <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/50 relative">
                <img 
                  src={profilePhoto} 
                  alt="Madhan Kumar" 
                  className="w-full h-full object-cover filter contrast-110 saturate-110"
                  onError={(e) => {
                    // Fallback if image fails to load
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Madhan+Kumar&background=E11D48&color=fff&size=512';
                  }}
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              </div>
            </div>

            {/* Terminal Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 lg:absolute lg:bottom-10 lg:-left-10 w-full max-w-sm glass-panel p-5 rounded-lg hud-bracket"
            >
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="font-mono text-sm text-green-400 h-16">
                <span className="text-white mr-2">&gt;</span>
                {terminalLines[terminalTextIndex]}
                <span className="animate-pulse ml-1">_</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/10">
                {['React', 'Python', 'Node.js', 'ESP32'].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/10 rounded-full text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
