import React from 'react';
import { motion } from 'framer-motion';
// PHOTO PLACEHOLDER 2 — About section portrait
import profilePhoto from '@assets/Professional_Photo_1783621096294.jpeg';
import { MapPin, Mail, Phone, Github, Linkedin, Code, Server, Cpu, Database, BrainCircuit, Figma } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6">
        
        {/* Part A: Specialty cards row */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {[
            { id: "01", title: "AI & Machine Learning", desc: "Applied ML models, predictive systems, computer vision." },
            { id: "02", title: "Full-Stack Development", desc: "React, Node.js, REST APIs, secure authentication." },
            { id: "03", title: "IoT & Embedded Systems", desc: "ESP32, sensors, real-time hardware-software integration." }
          ].map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="hud-bracket bg-card border border-white/5 p-6 hover:border-primary/50 transition-all box-glow group"
            >
              <div className="text-4xl font-display font-bold text-white/10 mb-4 group-hover:text-primary/20 transition-colors">{item.id}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Part B: Featured panel */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-8 h-[2px] bg-primary"></div>
          <span className="text-primary font-mono text-sm tracking-wider uppercase">— ABOUT ME</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-5xl sm:text-7xl font-display font-bold leading-none">
              <span className="text-white">MADHAN</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">KUMAR</span>
            </h2>
            
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                Google Student Ambassador
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                HCLTech Campus Ambassador
              </div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium">
                B.Tech Computer Science & Engineering
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-lg text-muted-foreground">
                I'm Madhan Kumar — a Computer Science undergraduate at BIHER, Chennai, driven by a single obsession: building things that actually work in the real world. I don't just study technology; I ship it.
              </p>
              <p className="text-base text-muted-foreground">
                From winning hackathons with IoT safety wearables to deploying a live pharmacy platform for a real client, my work spans the full spectrum of modern tech — full-stack web, applied AI/ML, IoT embedded systems, blockchain, and satellite image intelligence. I've built 20+ projects across domains no single label can contain: predictive maintenance for industrial IoT, cross-modal satellite retrieval for defense hackathons, blockchain-based healthcare platforms, and offline Braille recognition systems.
              </p>
              <p className="text-base text-muted-foreground">
                Beyond building, I represent Google, HCLTech, and BIHER as a Student Ambassador and Event Coordinator — because I believe the best engineers also teach, connect, and inspire. I hold a 9.5 CGPA not because I memorize, but because I understand deeply enough to build.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="aspect-[4/5] rounded-lg overflow-hidden border-2 border-primary/20 relative z-10 box-glow">
              <img 
                src={profilePhoto} 
                alt="Madhan Kumar Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            </div>
            <div className="absolute -inset-4 bg-primary/5 blur-2xl -z-10 rounded-lg group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="mt-6 flex justify-center">
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 border border-white/20 text-white font-bold rounded-md hover:bg-white/5 transition-all"
              >
                View / Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Part C: Three-column grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hud-bracket bg-card p-6 border border-white/5"
          >
            <div className="font-mono text-sm text-primary mb-4">// CONTACT_MATRIX</div>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3"><MapPin size={16} className="text-primary" /> Chennai, Tamil Nadu</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-primary" /> madhankumartbharathuniv@gmail.com</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-primary" /> +91 81484 96380</li>
              <li className="flex items-center gap-3"><Github size={16} className="text-primary" /> github.com/Madhan310301</li>
              <li className="flex items-center gap-3"><Linkedin size={16} className="text-primary" /> linkedin.com/in/madhankumart</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="hud-bracket bg-card p-6 border border-white/5"
          >
            <div className="font-mono text-sm text-primary mb-4">// CAPABILITIES</div>
            <ul className="space-y-3 text-sm text-muted-foreground list-disc list-inside pl-2">
              <li>Full-stack web development (React, Node.js)</li>
              <li>AI/ML model development & computer vision</li>
              <li>IoT hardware integration (ESP32, sensors)</li>
              <li>Database design (SQL & NoSQL)</li>
              <li>Problem solving & DSA</li>
              <li>End-to-end product delivery</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hud-bracket bg-card p-6 border border-white/5"
          >
            <div className="font-mono text-sm text-primary mb-4">// PASSIONS</div>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3"><Code size={16} /> Building side projects</li>
              <li className="flex items-center gap-3"><Server size={16} /> Public speaking & workshops</li>
              <li className="flex items-center gap-3"><BrainCircuit size={16} /> Exploring new tech stacks</li>
              <li className="flex items-center gap-3"><Figma size={16} /> Blender & 3D design</li>
              <li className="flex items-center gap-3"><Cpu size={16} /> Mentoring student developers</li>
            </ul>
          </motion.div>
        </div>

        {/* Part D: Tech stack icon grid */}
        <div className="mb-16">
          <div className="font-mono text-sm text-primary mb-6">// TECH_STACK</div>
          <div className="flex flex-wrap gap-3">
            {['React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'MySQL', 'PostgreSQL', 'TensorFlow', 'OpenCV', 'scikit-learn', 'ESP32', 'Git', 'Figma'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm font-medium hover:border-primary hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Part E: "WHAT I HAVE DONE" stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { value: "20+", label: "Projects Built" },
            { value: "2", label: "Ambassador Roles" },
            { value: "1", label: "Hackathon Win" },
            { value: "9.5", label: "CGPA" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary/10 border border-primary/20 p-4 text-center rounded-sm"
            >
              <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs font-mono text-white/70 uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Part F: Bottom stat bar */}
        <div className="bg-card border-y border-white/10 py-3 px-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex items-center gap-8 min-w-max font-mono text-xs text-muted-foreground">
            <span><strong className="text-white">CGPA:</strong> 9.5</span>
            <span className="text-white/20">|</span>
            <span><strong className="text-white">College:</strong> BIHER</span>
            <span className="text-white/20">|</span>
            <span><strong className="text-white">Branch:</strong> CSE</span>
            <span className="text-white/20">|</span>
            <span><strong className="text-white">Year:</strong> 2024–Present</span>
            <span className="text-white/20">|</span>
            <span><strong className="text-white">Focus:</strong> Full-Stack, AI & IoT</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
