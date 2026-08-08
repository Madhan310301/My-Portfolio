import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Award, Users, BookOpen } from 'lucide-react';

const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      gsap.from(rightRef.current, {
        x: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="achievements" className="w-full bg-[#0f0f0f] border-t border-b border-[#161616] py-24 sm:py-32 px-6 sm:px-10 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Trophy Moment */}
          <div ref={leftRef} className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* SVG Trophy Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center text-[#00d4ff] mb-8 shadow-[0_0_30px_rgba(0,212,255,0.2)]">
                <Trophy size={36} className="text-[#00d4ff]" />
              </div>

              <div className="font-mono text-xs text-[#00d4ff] uppercase tracking-widest font-semibold mb-3">
                // HACKATHON_SPOTLIGHT
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#f5f5f5] font-bold tracking-wide uppercase leading-tight mb-3">
                GENESIS HACKATHON 2026<span className="text-[#00d4ff]">.</span>
              </h2>

              <p className="font-body text-sm font-semibold text-[#888888] mb-6">
                SRMEEC Chennai · 24-Hour Hardware & Software Hackathon
              </p>

              {/* Two Badges Side-by-Side */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="font-mono text-xs font-semibold px-4 py-2 rounded-full border border-[#00d4ff] text-[#00d4ff] bg-[#00d4ff]/10">
                  Overall Second Prize
                </span>
                <span className="font-mono text-xs font-semibold px-4 py-2 rounded-full border border-[#00d4ff] text-[#00d4ff] bg-[#00d4ff]/10">
                  Domain-Wise First Prize
                </span>
              </div>

              <p className="font-body text-sm sm:text-base text-[#888888] leading-relaxed max-w-xl">
                Built SafeGuard AI — an IoT child-safety wearable combining ESP32C3 hardware, GPS tracking, GSM alerts, and a React/Supabase parent dashboard — in 24 hours, then pitched it Shark Tank-style to a panel of investors.
              </p>
            </div>
          </div>

          {/* Right Column: Academic Stats & Leadership */}
          <div ref={rightRef} className="lg:col-span-6 flex flex-col gap-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "9.5", label: "CGPA at BIHER" },
                { value: "12+", label: "Projects Shipped" },
                { value: "24hr", label: "Hackathon Sprint Time" },
                { value: "2nd", label: "Overall Hackathon Rank" }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#161616] p-5 rounded-xl border border-[#222222] hover:border-[#00d4ff]/40 transition-colors"
                >
                  <div className="font-display text-4xl sm:text-5xl font-bold text-[#f5f5f5]">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[11px] text-[#888888] mt-1 uppercase">
                    // {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Leadership & Department Roles */}
            <div className="bg-[#161616] p-6 rounded-xl border border-[#222222] flex flex-col gap-6">
              <div className="font-mono text-xs text-[#00d4ff] uppercase tracking-widest font-semibold border-b border-[#222222] pb-3 flex items-center gap-2">
                <Users size={14} />
                <span>// CAMPUS_LEADERSHIP & RESPONSIBILITIES</span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-display text-xl text-[#f5f5f5] font-bold">
                    Event Coordinator — BIHER Technical Club
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#888888] mt-1 leading-relaxed">
                    Planned and ran technical workshops and hackathons for 200+ engineering students. Managed inter-batch events and logistics.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#222222]">
                  <h4 className="font-display text-xl text-[#f5f5f5] font-bold">
                    Batch Administrator — BIHER CSE (U24CS)
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#888888] mt-1 leading-relaxed">
                    Managed attendance, marks sheets, and department records for 70+ students. Streamlined faculty communications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
