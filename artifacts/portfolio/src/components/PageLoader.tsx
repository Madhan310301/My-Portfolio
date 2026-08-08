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
    const counterObj = { val: 0 };
    
    // Fallback timer to guarantee loader finishes even if GSAP or tab is backgrounded
    const fallbackTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3200);

    const tl = gsap.timeline();

    // Animate progress line scaling
    if (lineRef.current) {
      tl.to(lineRef.current, {
        scaleX: 1,
        duration: 2,
        ease: 'power2.out',
      }, 0);
    }

    // Animate counter value 0 -> 100
    tl.to(counterObj, {
      val: 100,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        const rounded = Math.round(counterObj.val);
        setCount(rounded);
        if (counterRef.current) {
          counterRef.current.textContent = rounded.toString();
        }
      },
      onComplete: () => {
        // Exit sequence: scale up then wipe upward
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
            duration: 0.6,
            ease: 'power2.inOut'
          });
        } else {
          clearTimeout(fallbackTimer);
          if (onComplete) onComplete();
        }
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
      {/* 1. Large Counting Number */}
      <h1
        ref={counterRef}
        className="font-display text-[#f5f5f5] text-[clamp(5rem,15vw,10rem)] leading-none tracking-tight font-normal"
        style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#f5f5f5' }}
      >
        {count}
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
          className="absolute inset-0 bg-[#00d4ff] origin-left scale-x-0 rounded-full"
          style={{ transformOrigin: 'left center', backgroundColor: '#00d4ff' }}
        />
      </div>
    </div>
  );
};

export default PageLoader;
