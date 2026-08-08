import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS_DATA } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card');
      gsap.from(cards, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
        y: 80,
        opacity: 0,
        duration: 0.7,
        stagger: {
          amount: 0.6,
          grid: [6, 2],
          from: 'start',
        },
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto select-none">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-mono text-xs text-[#00d4ff] uppercase tracking-widest font-semibold mb-3">
            — PROJECTS
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#f5f5f5] tracking-tight font-bold">
            What I've Built<span className="text-[#00d4ff]">.</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-[#888888] mt-3">
            12 end-to-end projects. Real clients. Real hardware.
          </p>
        </div>

        <a
          href="https://github.com/Madhan310301"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#444444] text-xs font-mono text-[#888888] hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all cursor-pointer w-fit"
        >
          <span>View All on GitHub</span>
          <ExternalLink size={12} />
        </a>
      </div>

      {/* 2-Column Screenshot / Gradient Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="project-card flex flex-col justify-between group">
            {/* Top 16:10 Screenshot / Gradient Placeholder Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-xl select-none">
              {/* Domain Gradient Background */}
              <div
                className="project-screenshot absolute inset-0 flex flex-col justify-between p-6 z-0"
                style={{ background: project.gradient }}
              >
                {/* Top Number Tag */}
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-[#00d4ff] px-3 py-1 rounded-full bg-[#080808]/70 border border-[#00d4ff]/30 backdrop-blur-md">
                    {project.num}
                  </span>
                  <span className="font-mono text-[10px] text-[#888888] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Center Title Display */}
                <div className="my-auto text-center">
                  <h3 className="font-display text-4xl sm:text-5xl text-white tracking-wider font-bold drop-shadow-md">
                    {project.title}
                  </h3>
                </div>

                {/* Bottom Cyan Strip */}
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff]/50 to-transparent" />
              </div>

              {/* Scanline Texture Overlay */}
              <div className="scanline-overlay absolute inset-0 z-10" />
            </div>

            {/* Below Card Details Container */}
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-[#0f0f0f]">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h4 className="font-display text-2xl text-[#f5f5f5] group-hover:text-[#00d4ff] transition-colors font-bold tracking-wide">
                    {project.title}
                  </h4>
                  <span className="font-mono text-[10px] text-[#00d4ff] px-2 py-0.5 rounded bg-[#00d4ff]/10 font-semibold border border-[#00d4ff]/20">
                    {project.num}
                  </span>
                </div>

                <p className="font-body text-xs sm:text-sm text-[#888888] leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] text-[#888888] px-2.5 py-1 rounded bg-[#161616] border border-[#222222]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Source Code Link */}
                <div className="pt-4 border-t border-[#1a1a1a] flex items-center justify-between text-xs font-mono">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00d4ff] hover:underline font-semibold flex items-center gap-1.5"
                  >
                    <Github size={14} />
                    <span>Source Code →</span>
                  </a>
                  <span className="text-[#444444]">// VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
