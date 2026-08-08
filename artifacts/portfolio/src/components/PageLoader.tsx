import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PageLoaderProps {
  onComplete: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Force initial text content to strictly "0" on mount
    if (counterRef.current) {
      counterRef.current.textContent = '0';
    }

    const counterObj = { val: 0 };
    
    // Safety fallback timer for backgrounded tabs (5 seconds)
    const fallbackTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 5000);

    const tl = gsap.timeline();

    // 1. Animate progress line scaling from 0 to 1 over 3.5 seconds (slower pacing)
    if (lineRef.current) {
      tl.to(lineRef.current, {
        scaleX: 1,
        duration: 3.5,
        ease: 'power2.out',
      }, 0);
    }

    // 2. Animate counter value 0 -> 100 over 3.5 seconds (slower pacing)
    tl.to(counterObj, {
      val: 100,
      duration: 3.5,
      ease: 'power2.out',
      onUpdate: () => {
        const rounded = Math.round(counterObj.val);
        setCount(rounded);
        if (counterRef.current) {
          counterRef.current.textContent = rounded.toString();
        }
      },
      onComplete: () => {
        // Pause briefly at 100 (300ms) before exit wipe
        gsap.delayedCall(0.3, () => {
          if (loaderRef.current) {
            const exitTl = gsap.timeline({
              onComplete: () => {
                clearTimeout(fallbackTimer);
                if (onComplete) onComplete();
              }
            });

            exitTl.to(counterRef.current, {
              scale: 1.05,
              duration: 0.2,
              ease: 'power1.out'
            })
            .to(loaderRef.current, {
              clipPath: 'inset(0 0 100% 0)',
              duration: 0.7,
              ease: 'power2.inOut'
            });
          } else {
            clearTimeout(fallbackTimer);
            if (onComplete) onComplete();
          }
        });
      }
    }, 0);

    return () => {
      clearTimeout(fallbackTimer);
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99999] bg-[#080808] flex flex-col items-center justify-center select-none pointer-events-auto text-white"
      style={{ clipPath: 'inset(0 0 0% 0)' }}
    >
      {/* 1. Large Counting Number (Starts strictly at 0) */}
      <h1
        ref={counterRef}
        className="font-display text-[#f5f5f5] text-[clamp(5rem,15vw,10rem)] leading-none tracking-tight font-normal"
        style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#f5f5f5' }}
      >
        0
      </h1>

      {/* 2. Static Name */}
      <div
        className="font-body text-[#888888] text-xs uppercase tracking-[0.3em] mt-6"
        style={{ color: '#888888', letterSpacing: '0.3em' }}
      >
        MADHAN KUMAR T
      </div>

      {/* 3. Cyan Progress Line */}
      <div className="w-[200px] h-[2px] bg-[#161616] mt-4 relative overflow-hidden rounded-full">
        <div
          ref={lineRef}
          className="absolute inset-0 bg-[#00d4ff] origin-left rounded-full"
          style={{ transformOrigin: 'left center', backgroundColor: '#00d4ff', transform: 'scaleX(0)' }}
        />
      </div>
    </div>
  );
};

export default PageLoader;
