import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCE_DATA } from '../data/experience';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>('.experience-row');
      rows.forEach((row, i) => {
        gsap.from(row, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto select-none">
      {/* Section Header */}
      <div className="mb-16">
        <div className="font-mono text-xs text-[#00d4ff] uppercase tracking-widest font-semibold mb-3">
          — EXPERIENCE
        </div>
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#f5f5f5] tracking-tight font-bold">
          Where I've Been<span className="text-[#00d4ff]">.</span>
        </h2>
      </div>

      {/* Editorial Experience Split Rows */}
      <div className="flex flex-col border-b border-[#1a1a1a]">
        {EXPERIENCE_DATA.map((exp, index) => (
          <div
            key={index}
            className="experience-row border-t border-[#1a1a1a] py-10 sm:py-12 flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-start group hover:bg-[#0f0f0f]/40 transition-colors px-2 rounded-lg"
          >
            {/* Left Column: Date & Category Badge */}
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              <span className="font-body text-sm font-semibold text-[#888888]">
                {exp.period}
              </span>
              <span className="font-mono text-[11px] text-[#888888] tracking-wider uppercase">
                {exp.category}
              </span>
              <div>
                <span className="inline-block font-mono text-[10px] font-bold text-[#00d4ff] px-2.5 py-1 rounded bg-[#00d4ff]/10 border border-[#00d4ff]/20 mt-1 uppercase">
                  {exp.tag}
                </span>
              </div>
            </div>

            {/* Right Column: Role Title & Bullets */}
            <div className="w-full md:w-2/3 flex flex-col gap-4">
              <h3 className="font-display text-3xl sm:text-4xl text-[#f5f5f5] group-hover:text-[#00d4ff] transition-colors font-bold tracking-wide">
                {exp.role}
              </h3>

              <ul className="space-y-2.5">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="font-body text-xs sm:text-sm text-[#888888] leading-relaxed flex items-start gap-2">
                    <span className="text-[#00d4ff] mt-1.5 font-bold">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
