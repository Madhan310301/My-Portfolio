import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  loaderDone: boolean;
}

const Hero: React.FC<HeroProps> = ({ loaderDone }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const currentBlobPosRef = useRef({ x: 0, y: 0 });

  const nameLetters = 'MADHAN'.split('');
  const exitDirections = [-120, -60, -20, 20, 60, 120];

  // Mouse move ambient cyan blob lerp tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animId: number;
    const updateBlob = () => {
      const targetX = mousePosRef.current.x - 300;
      const targetY = mousePosRef.current.y - 300;

      currentBlobPosRef.current.x += (targetX - currentBlobPosRef.current.x) * 0.05;
      currentBlobPosRef.current.y += (targetY - currentBlobPosRef.current.y) * 0.05;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(${currentBlobPosRef.current.x}px, ${currentBlobPosRef.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(updateBlob);
    };

    animId = requestAnimationFrame(updateBlob);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // GSAP Entrance & ScrollTrigger Scatter Animations
  useEffect(() => {
    if (!loaderDone) return;

    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // 1. Letters drop in from top with stagger & rotateX
      tl.from('.hero-letter', {
        y: -200,
        opacity: 0,
        rotateX: 90,
        stagger: 0.06,
        duration: 0.9,
        ease: 'back.out(1.4)',
      })
      // 2. Tagline fades in
      .from('.hero-tagline', {
        opacity: 0,
        duration: 0.5,
      }, '-=0.3')
      // 3. Descriptor slides up
      .from('.hero-descriptor', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      // 4. CTA buttons scale in
      .from('.hero-ctas', {
        scale: 0.85,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.2)',
      }, '-=0.3')
      // 5. Eyebrow text
      .from('.hero-eyebrow', {
        x: -30,
        opacity: 0,
        duration: 0.5,
      }, '-=0.6')
      // 6. Blob fades in
      .from('.hero-blob', {
        opacity: 0,
        duration: 1.2,
      }, 0);

      // ScrollTrigger Scatter effect for letters on desktop (>768px)
      if (!isMobile) {
        const letters = gsap.utils.toArray<HTMLElement>('.hero-letter');
        letters.forEach((letter, i) => {
          gsap.to(letter, {
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
            },
            x: `${exitDirections[i]}vw`,
            opacity: 0,
            ease: 'power1.in',
          });
        });

        // Bottom UI elements fade fast on scroll
        gsap.to(['.hero-descriptor', '.hero-ctas', '.hero-tagline', '.hero-scroll-indicator'], {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '40% top',
            scrub: 0.8,
          },
          opacity: 0,
          y: -40,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [loaderDone]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-36 pb-12 px-6 sm:px-10 overflow-hidden select-none"
    >
      {/* Volumetric Ambient Cyan Blob */}
      <div
        ref={blobRef}
        className="hero-blob absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />

      {/* Main Oversized Name Row */}
      <div className="relative z-10 my-auto w-full max-w-7xl mx-auto flex items-center justify-center">
        <div className="w-full flex justify-between items-center relative">
          {/* 6 Individual Letter Spans */}
          {nameLetters.map((char, index) => (
            <span
              key={index}
              className="hero-letter"
              data-index={index}
            >
              {char}
            </span>
          ))}

          {/* Overlaid Cyan Tagline */}
          <div className="hero-tagline absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none whitespace-nowrap text-center">
            <span className="font-body text-[10px] sm:text-xs font-semibold text-[#00d4ff] tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-[#080808]/90 border border-[#00d4ff]/30 shadow-[0_0_20px_rgba(0,212,255,0.2)]">
              CRAFTING SYSTEMS THAT PEOPLE REMEMBER.
            </span>
          </div>
        </div>
      </div>

      {/* Hero Bottom UI Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pt-8">
        {/* Bottom Left Descriptor */}
        <div className="hero-descriptor max-w-[300px]">
          <h3 className="font-body text-sm font-semibold text-[#f5f5f5] mb-1">
            AI Builder & Full Stack Developer
          </h3>
          <p className="font-body text-xs sm:text-sm text-[#888888] leading-relaxed">
            Engineering end-to-end systems from React frontends to ESP32 firmware.
          </p>
        </div>

        {/* Bottom Right CTAs */}
        <div className="hero-ctas flex items-center gap-4 flex-wrap">
          <button
            onClick={() => scrollTo('#projects')}
            className="px-7 py-3.5 bg-[#00d4ff] text-[#080808] font-body text-xs sm:text-sm font-bold rounded-full hover:brightness-110 transition-all hover:scale-105 shadow-[0_0_25px_rgba(0,212,255,0.4)] flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Work</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={() => scrollTo('#contact')}
            className="px-7 py-3.5 bg-transparent border border-[#444444] text-[#888888] hover:text-[#f5f5f5] hover:border-[#00d4ff] font-body text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Let's Talk</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Bottom Centered SCROLL Indicator */}
      <div className="hero-scroll-indicator relative z-10 mt-8 flex flex-col items-center justify-center text-center">
        <span className="font-mono text-[10px] text-[#444444] tracking-widest uppercase animate-bounce">
          SCROLL ↓
        </span>
      </div>
    </section>
  );
};

export default Hero;
