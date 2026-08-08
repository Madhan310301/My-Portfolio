import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PageLoaderProps {
  onComplete: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counterObj = { val: 0 };
    const tl = gsap.timeline();

    // Animate progress line scaling
    tl.to(lineRef.current, {
      scaleX: 1,
      duration: 2,
      ease: 'power2.out',
    }, 0);

    // Animate counter value 0 -> 100
    tl.to(counterObj, {
      val: 100,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counterObj.val).toString();
        }
      },
      onComplete: () => {
        // Exit sequence
        gsap.delayedCall(0.2, () => {
          const exitTl = gsap.timeline({
            onComplete: () => {
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
        });
      }
    }, 0);

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99999] bg-[#080808] flex flex-col items-center justify-center select-none pointer-events-auto"
      style={{ clipPath: 'inset(0 0 0% 0)' }}
    >
      {/* 1. Large Counting Number */}
      <h1
        ref={counterRef}
        className="font-display text-[#f5f5f5] text-[clamp(5rem,15vw,10rem)] leading-none tracking-tight font-bold"
      >
        0
      </h1>

      {/* 2. Static Name */}
      <div className="font-body text-[#888888] text-xs uppercase tracking-[0.3em] mt-6">
        MADHAN KUMAR T
      </div>

      {/* 3. Cyan Progress Line */}
      <div className="w-[200px] h-[2px] bg-[#161616] mt-4 relative overflow-hidden rounded-full">
        <div
          ref={lineRef}
          className="absolute inset-0 bg-[#00d4ff] origin-left scale-x-0 rounded-full"
          style={{ transformOrigin: 'left center' }}
        />
      </div>
    </div>
  );
};

export default PageLoader;
