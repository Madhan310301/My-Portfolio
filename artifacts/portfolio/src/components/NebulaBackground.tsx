import React, { useEffect, useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

const NebulaBackground: React.FC = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number }[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const isMobile = useIsMobile(768); // Mobile/Tablet check

  useEffect(() => {
    // Detect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    // Generate scattered gold particle dust field
    const starCount = isMobile ? 30 : 70;
    const generatedStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.6 + 0.8,
      delay: Math.random() * 8,
      duration: Math.random() * 5 + 3,
    }));
    setStars(generatedStars);
  }, [isMobile]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#FAF6EC]">
      {/* 1. Gold-particle dust field with subtle twinkle */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-[#C9972E]"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: 0.35,
              animation: prefersReducedMotion 
                ? 'none' 
                : `star-twinkle ${star.duration}s ease-in-out ${star.delay}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* 2. Golden Celestial Void and Slowly Rotating Swirl Arms */}
      <div 
        className="absolute top-[45%] right-[-15%] sm:right-[-5%] md:right-[5%] lg:right-[10%] -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[1000px] lg:h-[1000px] xl:w-[1200px] xl:h-[1200px] pointer-events-none flex items-center justify-center opacity-70"
      >
        {/* Swirl Arms SVG */}
        <svg 
          viewBox="0 0 1000 1000" 
          className="absolute w-full h-full scale-[1.25] sm:scale-110 lg:scale-100"
          style={{ mixBlendMode: 'multiply' }}
        >
          <defs>
            {/* Swirl Accent Gradients (Gold/Amber Palette) */}
            <radialGradient id="swirl-grad-inner" cx="500" cy="500" r="500" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C9972E" stopOpacity="0.45" />
              <stop offset="45%" stopColor="#D9A94A" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FAF6EC" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="swirl-grad-mid" cx="500" cy="500" r="500" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D9A94A" stopOpacity="0.4" />
              <stop offset="55%" stopColor="#B9821F" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FAF6EC" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="swirl-grad-outer" cx="500" cy="500" r="500" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E6C575" stopOpacity="0.35" />
              <stop offset="65%" stopColor="#C9972E" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FAF6EC" stopOpacity="0" />
            </radialGradient>

            {/* Standard blurs */}
            <filter id="blur-inner" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation={isMobile ? "5" : "30"} />
            </filter>
            <filter id="blur-mid" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation={isMobile ? "8" : "55"} />
            </filter>
            <filter id="blur-outer" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation={isMobile ? "12" : "80"} />
            </filter>
          </defs>

          {/* Innermost Swirl Layer */}
          <g 
            className="origin-center"
            style={{
              animation: prefersReducedMotion ? 'none' : 'spin-cw 70s linear infinite',
            }}
          >
            <path 
              d="M 500,500 C 560,380 700,350 780,480 C 860,610 750,750 600,780 C 480,800 350,680 380,550"
              fill="none"
              stroke="url(#swirl-grad-inner)"
              strokeWidth={isMobile ? "70" : "90"}
              strokeLinecap="round"
              filter="url(#blur-inner)"
            />
          </g>

          {/* Middle Swirl Layer */}
          {!prefersReducedMotion && !isMobile && (
            <g 
              className="origin-center"
              style={{
                animation: 'spin-ccw 105s linear infinite',
              }}
            >
              <path 
                d="M 500,500 C 410,600 270,620 220,500 C 170,380 300,220 450,220 C 600,220 720,350 680,520"
                fill="none"
                stroke="url(#swirl-grad-mid)"
                strokeWidth="110"
                strokeLinecap="round"
                filter="url(#blur-mid)"
              />
            </g>
          )}

          {/* Outermost Swirl Layer */}
          {!isMobile && (
            <g 
              className="origin-center"
              style={{
                animation: prefersReducedMotion ? 'none' : 'spin-cw 150s linear infinite',
              }}
            >
              <path 
                d="M 500,500 C 620,620 850,560 880,400 C 910,220 650,100 480,180 C 280,250 120,480 250,680"
                fill="none"
                stroke="url(#swirl-grad-outer)"
                strokeWidth="130"
                strokeLinecap="round"
                filter="url(#blur-outer)"
              />
            </g>
          )}
        </svg>

        {/* Central Celestial Void (Light Golden Orbital Rim) */}
        <div className="absolute rounded-full bg-[#FFFDF8]/40 backdrop-blur-sm w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] md:w-[520px] md:h-[520px] lg:w-[750px] lg:h-[750px] xl:w-[850px] xl:h-[850px] z-10 border border-[#C9972E]/20 shadow-[0_0_40px_rgba(201,151,46,0.1)]"></div>
      </div>

      <style>{`
        @keyframes spin-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-ccw {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes star-twinkle {
          0% { opacity: 0.15; transform: scale(0.85); }
          100% { opacity: 0.65; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};

export default NebulaBackground;
