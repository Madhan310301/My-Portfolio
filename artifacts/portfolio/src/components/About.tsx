import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Github, Linkedin, ChevronRight } from 'lucide-react';
import SectionWatermark from './SectionWatermark';

const TOOLKIT_SKILLS = [
  { name: 'React', level: 'Frontend' },
  { name: 'Next.js', level: 'Full-Stack' },
  { name: 'Node.js / Express', level: 'Backend' },
  { name: 'Python', level: 'AI / ML' },
  { name: 'FastAPI', level: 'Microservices' },
  { name: 'TypeScript', level: 'Core' },
  { name: 'Firebase', level: 'BaaS' },
  { name: 'Gemini / GPT', level: 'AI Integrations' },
  { name: 'Three.js / R3F', level: '3D Graphics' },
  { name: 'Tailwind CSS', level: 'Styling' },
  { name: 'GSAP', level: 'Animation' },
  { name: 'ESP32 / IoT', level: 'Hardware' }
];

const About: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      <SectionWatermark word="ABOUT" />
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-panel"
        >
          {/* Micro Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[2px] bg-[#C9972E]"></div>
            <span className="text-[#C9972E] font-mono text-sm tracking-widest uppercase font-semibold">// ABOUT ME</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Purpose Narrative & Profile */}
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[0.95] tracking-tight text-[#241B10]">
                ENGINEERING WITH <br />
                <span className="text-[#C9972E]">PURPOSE.</span>
              </h2>

              <div className="space-y-4 text-[#7A6B55] text-base leading-relaxed">
                <p>
                  My developer journey started with a deep curiosity for how software and hardware interface. Grounded in C/C++ and Python fundamentals, I evolved into building production-grade full-stack web applications, machine learning pipelines, and IoT embedded solutions.
                </p>
                <p>
                  As a <strong className="text-[#241B10] font-semibold">Google Student Ambassador (GID: 3150)</strong>, <strong className="text-[#241B10] font-semibold">Google Cloud Arcade Facilitator '26</strong>, and <strong className="text-[#241B10] font-semibold">HCLTech Campus Ambassador</strong>, I represent developer communities, mentor peers through hands-on hackathons, and build real-world software that bridges the gap between hardware telemetry and user-facing dashboards.
                </p>
              </div>

              {/* Stats Row */}
              <div className="flex items-center gap-8 py-6 my-2 border-y border-[#C9972E]/20">
                <div>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-[#241B10]">20+</div>
                  <div className="text-xs font-mono text-[#C9972E] uppercase mt-1 font-semibold">// Projects Shipped</div>
                </div>
                <div className="w-[1px] h-12 bg-[#C9972E]/20"></div>
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-[#241B10]">B.Tech CSE</div>
                  <div className="text-xs font-mono text-[#7A6B55] uppercase mt-1">// BIHER Chennai · 2024–2028</div>
                </div>
              </div>

              {/* Contact Pill Row */}
              <div className="flex flex-wrap gap-3 text-xs font-mono text-[#7A6B55] pt-2">
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF6EC] border border-[#C9972E]/30 rounded-full">
                  <MapPin size={12} className="text-[#C9972E]" /> Chennai, India
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF6EC] border border-[#C9972E]/30 rounded-full">
                  <Mail size={12} className="text-[#C9972E]" /> madhankumartbharathuniv@gmail.com
                </span>
                <a 
                  href="https://github.com/Madhan310301" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF6EC] border border-[#C9972E]/30 rounded-full hover:border-[#C9972E] hover:text-[#241B10] transition-colors"
                >
                  <Github size={12} className="text-[#C9972E]" /> GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/madhankumart" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF6EC] border border-[#C9972E]/30 rounded-full hover:border-[#C9972E] hover:text-[#241B10] transition-colors"
                >
                  <Linkedin size={12} className="text-[#C9972E]" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Right Column: Glassmorphism Toolkit */}
            <div className="hud-bracket bg-[#FFFDF8]/90 backdrop-blur-md p-8 border border-[#C9972E]/30 shadow-[0_4px_24px_rgba(120,90,40,0.08)] rounded-xl">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#C9972E]/20">
                <div>
                  <div className="font-mono text-xs text-[#C9972E] uppercase tracking-widest font-semibold">// CORE_COMPETENCIES</div>
                  <h3 className="text-2xl font-display font-bold text-[#241B10] mt-1">My Toolkit</h3>
                </div>
                <div className="px-3 py-1 bg-[#C9972E]/10 border border-[#C9972E]/40 rounded text-xs font-mono text-[#C9972E] font-bold">
                  9.5 CGPA
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {TOOLKIT_SKILLS.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04, duration: 0.4 }}
                    className="p-3 bg-[#FAF6EC] border border-[#C9972E]/25 rounded-lg hover:border-[#C9972E] hover:shadow-[0_4px_16px_rgba(201,151,46,0.2)] transition-all group cursor-default"
                  >
                    <div className="text-sm font-bold text-[#241B10] group-hover:text-[#C9972E] transition-colors flex items-center justify-between">
                      <span>{skill.name}</span>
                      <ChevronRight size={12} className="text-[#7A6B55] group-hover:text-[#C9972E] transition-colors" />
                    </div>
                    <div className="text-[10px] font-mono text-[#7A6B55] mt-1 uppercase">
                      {skill.level}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-[#C9972E]/20 flex justify-between items-center text-xs font-mono text-[#7A6B55]">
                <span>// CONTINUOUS_LEARNING</span>
                <span className="text-[#C9972E] font-bold">20+ SHIPPED BUILDS</span>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
