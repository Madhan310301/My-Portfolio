import React, { useEffect, useState } from 'react';

const NebulaBackground: React.FC = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number }[]>([]);
  const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  useEffect(() => {
    // Generate static stars for consistency
    const generatedStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0A0A0F]">
      {/* Nebula gradients */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at 30% 40%, rgba(225, 29, 72, 0.15) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)',
          animation: prefersReducedMotion ? 'none' : 'spin 40s linear infinite',
          transformOrigin: '50% 50%',
        }}
      />
      <div 
        className="absolute inset-0 opacity-30 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at 60% 30%, rgba(225, 29, 72, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 70%, rgba(249, 115, 22, 0.05) 0%, transparent 60%)',
          animation: prefersReducedMotion ? 'none' : 'spin 60s linear infinite reverse',
          transformOrigin: '50% 50%',
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: 0.3,
              animation: prefersReducedMotion 
                ? 'none' 
                : `pulse ${star.duration}s ease-in-out ${star.delay}s infinite alternate`,
            }}
          />
        ))}
      </div>
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg) scale(1.2); }
          to { transform: rotate(360deg) scale(1.2); }
        }
        @keyframes pulse {
          0% { opacity: 0.1; transform: scale(0.8); }
          100% { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default NebulaBackground;
