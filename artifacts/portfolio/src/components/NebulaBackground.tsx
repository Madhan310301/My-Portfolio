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
    // Generate scattered star-particle field (fewer on mobile for performance)
    const starCount = isMobile ? 30 : 80;
    const generatedStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.4 + 0.6, // Smaller range on mobile (0.6px to 2px) to prevent heavy paint bounds
      delay: Math.random() * 8,
      duration: Math.random() * 5 + 3, // 3s to 8s pulse rate
    }));
    setStars(generatedStars);
  }, [isMobile]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020204]">
      {/* 1. Star-particle field with subtle twinkle */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white/70"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: 0.5,
              animation: prefersReducedMotion 
                ? 'none' 
                : `star-twinkle ${star.duration}s ease-in-out ${star.delay}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* 2. Celestial Void and Slowly Rotating Swirl Arms */}
      {/* Positioned right-of-center and vertically centered */}
      <div 
        className="absolute top-[45%] right-[-15%] sm:right-[-5%] md:right-[5%] lg:right-[10%] -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[1000px] lg:h-[1000px] xl:w-[1200px] xl:h-[1200px] pointer-events-none flex items-center justify-center"
      >
        {/* Swirl Arms SVG */}
        <svg 
          viewBox="0 0 1000 1000" 
          className="absolute w-full h-full scale-[1.25] sm:scale-110 lg:scale-100"
          style={{ mixBlendMode: 'screen' }}
        >
          <defs>
            {/* Swirl Accent Gradients (#7A0F1F deep crimson -> #E11D48 rose -> transparent) */}
            {/* Using userSpaceOnUse so it maps to the entire 1000x1000 SVG coordinates instead of individual path bounding boxes */}
            <radialGradient id="swirl-grad-inner" cx="500" cy="500" r="500" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E11D48" stopOpacity="1.0" />
              <stop offset="45%" stopColor="#7A0F1F" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#020204" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="swirl-grad-mid" cx="500" cy="500" r="500" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E11D48" stopOpacity="0.8" />
              <stop offset="55%" stopColor="#7A0F1F" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#020204" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="swirl-grad-outer" cx="500" cy="500" r="500" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.6" />
              <stop offset="65%" stopColor="#7A0F1F" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#020204" stopOpacity="0" />
            </radialGradient>

            {/* Standard blurs - disabled (stdDeviation="0") on mobile/tablet to boost GPU performance dramatically */}
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

          {/* Innermost Swirl Layer - Brightest & Closest (Clockwise) */}
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

          {/* Middle Swirl Layer - Rotating Reverse (Counter-Clockwise) - Completely omitted on mobile/tablet */}
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

          {/* Outermost Swirl Layer - Largest & Most Blurred (Clockwise) - Omitted on mobile/tablet to save layers */}
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

        {/* Central Celestial Void (Planet Silhouette / Black Hole) */}
        {/* Desktop: 750px | Large Desktop: 850px | Tablet: 520px | Mobile: 260px */}
        <div className="absolute rounded-full bg-[#05050A] w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] md:w-[520px] md:h-[520px] lg:w-[750px] lg:h-[750px] xl:w-[850px] xl:h-[850px] z-10 border border-white/5 shadow-[inset_0_0_50px_rgba(0,0,0,1.0),0_0_30px_rgba(225,29,72,0.08)]"></div>
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
          100% { opacity: 0.85; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};

export default NebulaBackground;
