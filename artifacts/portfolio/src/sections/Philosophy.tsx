import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Transition panel title scale-in
      gsap.fromTo(
        transitionRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: transitionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 2. Philosophy Quote paragraph word fade-in stagger
      if (paragraphRef.current) {
        const words = paragraphRef.current.querySelectorAll('.philo-word');
        gsap.from(words, {
          y: 20,
          opacity: 0,
          stagger: 0.04,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: 'top 75%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const quoteText =
    "I don't just write code. I architect systems — from the React frontend to the Python ML backend, from the ESP32 firmware to the Supabase schema. Every project I build is designed to be deployed, used, and remembered.";

  const wordsArray = quoteText.split(' ');

  return (
    <section ref={sectionRef} id="philosophy" className="relative w-full overflow-hidden bg-[#080808] select-none">
      {/* Part A — Transition Panel */}
      <div className="py-24 sm:py-32 flex items-center justify-center border-t border-b border-[#161616]">
        <h2
          ref={transitionRef}
          className="font-display text-[clamp(3.5rem,8vw,7rem)] text-[#f5f5f5] tracking-wider text-center font-bold uppercase"
        >
          THE PHILOSOPHY<span className="text-[#00d4ff]">.</span>
        </h2>
      </div>

      {/* Part B — Full-Screen Image / Tech Atmosphere Overlay Section */}
      <div className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center px-6 sm:px-10 py-20">
        {/* Background Image with Dark Vignette Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center filter brightness-[0.25] contrast-[1.1] scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080808_100%)] opacity-80" />

        {/* Content Block */}
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="font-body text-xs font-semibold text-[#00d4ff] tracking-[0.3em] uppercase">
            — THE PHILOSOPHY
          </span>

          <p
            ref={paragraphRef}
            className="font-body text-[clamp(1.1rem,2.2vw,1.6rem)] text-white leading-relaxed font-normal tracking-wide"
          >
            {wordsArray.map((word, idx) => (
              <span key={idx} className="philo-word inline-block mr-[0.3em]">
                {word}
              </span>
            ))}
          </p>

          <div className="w-12 h-[2px] bg-[#00d4ff] mt-4 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
