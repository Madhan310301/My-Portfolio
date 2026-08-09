import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

interface PageLoaderProps {
  onDone?: () => void;
}

// 24 particles forming a constellation cluster
const PARTICLES = Array.from({ length: 24 }, (_, i) => {
  const angle = (i / 24) * Math.PI * 2 + (i % 3) * 0.3;
  const radius = 55 + (i * 7) % 65;
  return {
    id: i,
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    size: 1.5 + (i % 3),
    opacity: 0.2 + ((i * 13) % 45) / 100,
  };
});

const CONSTELLATION_LINES = [
  { from: 0, to: 4 },
  { from: 4, to: 8 },
  { from: 8, to: 12 },
  { from: 12, to: 16 },
  { from: 16, to: 20 },
  { from: 20, to: 0 },
  { from: 2, to: 10 },
  { from: 6, to: 14 },
  { from: 18, to: 22 },
];

const PageLoader: React.FC<PageLoaderProps> = ({ onDone }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  const shockwave1Ref = useRef<SVGCircleElement>(null);
  const shockwave2Ref = useRef<SVGCircleElement>(null);
  const shockwave3Ref = useRef<SVGCircleElement>(null);

  const ring1Ref = useRef<SVGSVGElement>(null);
  const ring2Ref = useRef<SVGSVGElement>(null);
  const ring3Ref = useRef<SVGSVGElement>(null);
  const ring4Ref = useRef<SVGSVGElement>(null);
  const radarBgRef = useRef<SVGSVGElement>(null);

  const numberRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isDone, setIsDone] = useState(false);

  // Track whether conditions are met for the counter to start
  const timerReadyRef = useRef(false);
  const hasClickedRef = useRef(false);
  const counterStartedRef = useRef(false);

  // Store ambient tween references for cleanup
  const ambientTweensRef = useRef<gsap.core.Tween[]>([]);

  // The counter animation callback — called once both conditions are met
  const startCounterAnimation = useCallback(() => {
    if (counterStartedRef.current) return;
    counterStartedRef.current = true;

    // Hide CTA prompt
    if (ctaRef.current) {
      gsap.to(ctaRef.current, { opacity: 0, y: -8, duration: 0.3, ease: 'power2.in' });
    }

    const triggerShockwave = (waveEl: SVGCircleElement | null) => {
      if (!waveEl) return;
      gsap.fromTo(
        waveEl,
        { r: 28, opacity: 0.65, strokeWidth: 2 },
        { r: 120, opacity: 0, strokeWidth: 0.5, duration: 1.0, ease: 'power2.out' }
      );
    };

    // Counter explicitly starts at 0
    if (numberRef.current) {
      numberRef.current.textContent = '0';
    }
    if (barRef.current) {
      barRef.current.style.width = '0%';
    }

    const counterObj = { value: 0 };
    let shock1Triggered = false;
    let shock2Triggered = false;
    let shock3Triggered = false;

    const timeline = gsap.timeline({
      onComplete: () => {
        // Kill all ambient tweens
        ambientTweensRef.current.forEach((t) => t.kill());
        ambientTweensRef.current = [];
        document.body.style.overflow = '';
        setIsDone(true);
        if (onDone) onDone();
      },
    });

    // Hold visible at 0 for a beat (~350ms)
    timeline.to({}, { duration: 0.35 });

    // Counter 0 -> 100 over ~3.4s with smooth non-linear power2.out
    timeline.to(counterObj, {
      value: 100,
      duration: 3.4,
      ease: 'power2.out',
      onUpdate: () => {
        const val = Math.min(100, Math.floor(counterObj.value));
        const progress = val / 100;

        if (numberRef.current) {
          numberRef.current.textContent = val.toString();
        }
        if (barRef.current) {
          barRef.current.style.width = `${val}%`;
        }

        // Trigger shockwaves at staggered intervals (~20%, ~52%, ~82%)
        if (progress >= 0.2 && !shock1Triggered) {
          shock1Triggered = true;
          triggerShockwave(shockwave1Ref.current);
        }
        if (progress >= 0.52 && !shock2Triggered) {
          shock2Triggered = true;
          triggerShockwave(shockwave2Ref.current);
        }
        if (progress >= 0.82 && !shock3Triggered) {
          shock3Triggered = true;
          triggerShockwave(shockwave3Ref.current);
        }

        // Lightweight GPU scale scaling on core
        if (coreRef.current) {
          gsap.set(coreRef.current, {
            scale: 1 + progress * 0.25,
          });
        }
      },
    });

    // Final 100% hold beat
    timeline.to({}, { duration: 0.15 });

    // Supernova Collapse Flash (~150ms)
    timeline.to(coreRef.current, {
      scale: 0.25,
      opacity: 0.3,
      duration: 0.08,
      ease: 'power2.in',
    });
    timeline.to(coreRef.current, {
      scale: 2.5,
      opacity: 1,
      duration: 0.12,
      ease: 'power3.out',
    });

    // Brief pause before wipe
    timeline.to({}, { duration: 0.15 });

    // Curtain Wipe Upward off-screen using clip-path over 0.7s
    timeline.to(containerRef.current, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.7,
      ease: 'power3.inOut',
    });
  }, [onDone]);

  // Check if both conditions are met and start the counter
  const tryStartCounter = useCallback(() => {
    if (timerReadyRef.current && hasClickedRef.current && !counterStartedRef.current) {
      startCounterAnimation();
    }
  }, [startCounterAnimation]);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      document.body.style.overflow = '';
      setIsDone(true);
      if (onDone) onDone();
      return;
    }

    // Lock page scroll while loader is active
    document.body.style.overflow = 'hidden';

    // ── Phase 1: Ambient idle visuals (spinning rings, breathing core) ──

    const radarTween = gsap.to(radarBgRef.current, {
      rotation: 360,
      duration: 40,
      repeat: -1,
      ease: 'none',
      transformOrigin: '50% 50%',
    });
    const ring1Tween = gsap.to(ring1Ref.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
      transformOrigin: '50% 50%',
    });
    const ring2Tween = gsap.to(ring2Ref.current, {
      rotation: -360,
      duration: 15,
      repeat: -1,
      ease: 'none',
      transformOrigin: '50% 50%',
    });
    const ring3Tween = gsap.to(ring3Ref.current, {
      rotation: 360,
      duration: 25,
      repeat: -1,
      ease: 'none',
      transformOrigin: '50% 50%',
    });
    const ring4Tween = gsap.to(ring4Ref.current, {
      rotation: -360,
      duration: 30,
      repeat: -1,
      ease: 'none',
      transformOrigin: '50% 50%',
    });
    const corePulse = gsap.to(coreRef.current, {
      scale: 1.06,
      opacity: 0.95,
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.easeInOut',
    });

    ambientTweensRef.current = [radarTween, ring1Tween, ring2Tween, ring3Tween, ring4Tween, corePulse];

    // ── Phase 1 triggers: 5-second timer + click listener ──

    // 5-second delay timer
    const delayTimer = setTimeout(() => {
      timerReadyRef.current = true;

      // Fade in the CTA prompt after 5 seconds
      if (ctaRef.current) {
        gsap.to(ctaRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        });
      }

      // Check if click already happened (race-safe)
      tryStartCounter();
    }, 5000);

    // Click / tap listener on the entire container
    const handleClick = () => {
      if (hasClickedRef.current) return;
      hasClickedRef.current = true;
      tryStartCounter();
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('click', handleClick);
      container.addEventListener('touchstart', handleClick, { passive: true });
    }

    return () => {
      clearTimeout(delayTimer);
      if (container) {
        container.removeEventListener('click', handleClick);
        container.removeEventListener('touchstart', handleClick);
      }
      ambientTweensRef.current.forEach((t) => t.kill());
      ambientTweensRef.current = [];
      document.body.style.overflow = '';
    };
  }, [onDone, tryStartCounter]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-between py-6 sm:py-10 px-4 sm:px-8 bg-[#FAF6EC] text-[#241B10] selection:bg-none select-none pointer-events-auto overflow-hidden will-change-transform cursor-pointer"
      style={{ clipPath: 'inset(0 0 0% 0)' }}
    >
      {/* ── Motion Graphics Background Radar Grid ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-20 sm:opacity-25">
        <svg
          ref={radarBgRef}
          className="w-[520px] h-[520px] sm:w-[720px] sm:h-[720px] md:w-[880px] md:h-[880px] text-[#C9972E]/30 will-change-transform"
          viewBox="0 0 400 400"
        >
          {/* Concentric Radar Rings */}
          <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="200" cy="200" r="110" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 9" />
          {/* Radar Crosshairs */}
          <line x1="10" y1="200" x2="390" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="200" y1="10" x2="200" y2="390" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          {/* Compass Ticks */}
          <circle cx="200" cy="10" r="3" fill="currentColor" />
          <circle cx="390" cy="200" r="3" fill="currentColor" />
          <circle cx="200" cy="390" r="3" fill="currentColor" />
          <circle cx="10" cy="200" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* ── HUD Telemetry Brackets (Tablet & Desktop Motion Graphics) ── */}
      <div className="hidden sm:flex absolute top-6 left-8 items-center gap-2 font-mono text-[10px] text-[#7A6B55] tracking-widest uppercase pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span>// CORE_STATUS: ACTIVE</span>
        <span className="text-[#C9972E]/50">|</span>
        <span>LATENCY: 12ms</span>
      </div>

      <div className="hidden sm:flex absolute top-6 right-8 items-center gap-2 font-mono text-[10px] text-[#7A6B55] tracking-widest uppercase pointer-events-none">
        <span>PROTOCOL: SUPERNOVA</span>
        <span className="text-[#C9972E]/50">|</span>
        <span className="text-[#C9972E] font-bold">60 FPS</span>
      </div>

      <div className="hidden md:flex absolute bottom-6 left-8 items-center gap-2 font-mono text-[10px] text-[#7A6B55]/70 tracking-widest uppercase pointer-events-none">
        <span>// ARCHITECTURE: REACT + TS + GSAP</span>
      </div>

      <div className="hidden md:flex absolute bottom-6 right-8 items-center gap-2 font-mono text-[10px] text-[#7A6B55]/70 tracking-widest uppercase pointer-events-none">
        <span>BUILD: 2026.1</span>
      </div>

      {/* ── Top Header: LOADING SCREEN with split opacity & amber cursor ── */}
      <div className="pt-2 sm:pt-4 flex items-center justify-center font-mono text-sm sm:text-base md:text-lg tracking-[0.35em] uppercase select-none font-bold relative z-20">
        <span className="flex items-center">
          <span className="text-[#7A6B55]/40 mr-1.5 sm:mr-2">LOADING</span>
          <span className="text-[#241B10] font-extrabold tracking-[0.35em]">SCREEN</span>
        </span>
        <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#C9972E] ml-2.5 sm:ml-3 animate-pulse align-middle shadow-[0_0_10px_#C9972E] border border-[#D9A66C]/40" />
      </div>

      {/* ── Center: Smooth Wavy Supernova Visualizer ── */}
      <div className="relative w-56 h-56 sm:w-76 sm:h-76 md:w-88 md:h-88 flex items-center justify-center my-auto relative z-10">
        {/* Shockwave Emission Ripples (SVG Circles) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 200 200">
          <circle
            ref={shockwave1Ref}
            cx="100"
            cy="100"
            r="28"
            fill="none"
            stroke="#D9A66C"
            strokeWidth="2"
            opacity="0"
          />
          <circle
            ref={shockwave2Ref}
            cx="100"
            cy="100"
            r="28"
            fill="none"
            stroke="#C9972E"
            strokeWidth="2"
            opacity="0"
          />
          <circle
            ref={shockwave3Ref}
            cx="100"
            cy="100"
            r="28"
            fill="none"
            stroke="#B87D4B"
            strokeWidth="2"
            opacity="0"
          />
        </svg>

        {/* Ring 4 (outermost motion ring) */}
        <svg
          ref={ring4Ref}
          className="absolute inset-0 w-full h-full text-[#C9972E]/15 pointer-events-none will-change-transform"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="94"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="2 14"
          />
          <circle cx="100" cy="6" r="2.5" fill="#C9972E" />
          <circle cx="194" cy="100" r="2.5" fill="#C9972E" />
        </svg>

        {/* Ring 1 (outer) */}
        <svg
          ref={ring1Ref}
          className="absolute inset-0 w-full h-full text-[#C9972E]/25 pointer-events-none will-change-transform"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <circle cx="100" cy="20" r="3" fill="#D9A66C" />
        </svg>

        {/* Ring 2 (middle) */}
        <svg
          ref={ring2Ref}
          className="absolute inset-0 w-full h-full text-[#D9A66C]/35 pointer-events-none will-change-transform"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="62"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="16 12 4 12"
          />
        </svg>

        {/* Ring 3 (inner) */}
        <svg
          ref={ring3Ref}
          className="absolute inset-0 w-full h-full text-[#C9972E]/25 pointer-events-none will-change-transform"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="44"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>

        {/* Constellation Vector Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
          {CONSTELLATION_LINES.map((line, idx) => {
            const p1 = PARTICLES[line.from];
            const p2 = PARTICLES[line.to];
            return (
              <line
                key={idx}
                x1={100 + p1.x * 0.9}
                y1={100 + p1.y * 0.9}
                x2={100 + p2.x * 0.9}
                y2={100 + p2.y * 0.9}
                stroke="#C9972E"
                strokeWidth="0.5"
                opacity="0.15"
              />
            );
          })}
        </svg>

        {/* Dust / Particle Cluster */}
        <div className="absolute inset-0 pointer-events-none">
          {PARTICLES.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-[#C9972E]"
              style={{
                left: `calc(50% + ${p.x}px)`,
                top: `calc(50% + ${p.y}px)`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: p.opacity,
              }}
            />
          ))}
        </div>

        {/* Star Core (GPU-Accelerated Organic Rippling Wavy Star Edge) */}
        <div
          ref={coreRef}
          className="w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26 rounded-full relative z-10 flex items-center justify-center will-change-transform animate-[supernova-ripple_4s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(circle, #D9A66C 0%, #B87D4B 65%, rgba(201,151,46,0.25) 100%)',
            boxShadow: '0 0 32px rgba(217, 166, 108, 0.45), 0 0 64px rgba(184, 125, 75, 0.25)',
          }}
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFFDF8] opacity-85 blur-[1px]" />
        </div>
      </div>

      {/* ── Bottom Section: Counter, Name, CTA & Progress Bar ── */}
      <div className="pb-2 sm:pb-4 flex flex-col items-center w-full max-w-xs relative z-20">
        {/* Counter Number (Explicitly starting from 0 to 100%) */}
        <div className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#241B10] tabular-nums flex items-baseline">
          <span ref={numberRef}>0</span>
          <span className="text-xl sm:text-3xl text-[#C9972E] font-sans ml-1">%</span>
        </div>

        {/* Name */}
        <div className="mt-1.5 sm:mt-2 font-mono text-[11px] sm:text-xs tracking-[0.35em] text-[#7A6B55] uppercase font-semibold text-center">
          MADHAN KUMAR T
        </div>

        {/* "Click anywhere to enter" CTA — hidden initially, fades in after 5s */}
        <div
          ref={ctaRef}
          className="mt-3 sm:mt-4 flex flex-col items-center gap-1.5 opacity-0 translate-y-2"
          style={{ willChange: 'opacity, transform' }}
        >
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] text-[#C9972E] uppercase animate-pulse">
            Click anywhere to enter
          </span>
          {/* Small animated chevron */}
          <svg
            className="w-4 h-4 text-[#C9972E]/60 animate-bounce"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6l4 4 4-4" />
          </svg>
        </div>

        {/* Thin Progress Line */}
        <div className="w-full max-w-[200px] sm:max-w-[240px] h-[1.5px] bg-[#EDE6D6] rounded-full overflow-hidden mt-3 sm:mt-4 relative">
          <div
            ref={barRef}
            className="h-full bg-gradient-to-r from-[#D9A66C] to-[#B87D4B] shadow-[0_0_8px_rgba(217,166,108,0.5)] transition-none w-0"
          />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;

