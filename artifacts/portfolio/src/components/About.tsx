import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '@assets/Professional_Photo_1783621096294.jpeg';
import { MapPin, Mail, Phone, Github, Linkedin, BookOpen, Mic, Layers, Box, Users, ChevronRight } from 'lucide-react';

const TECH_STACK = [
  { name: 'React',       abbr: 'Re', color: 'text-cyan-400'    },
  { name: 'Python',      abbr: 'Py', color: 'text-yellow-400'  },
  { name: 'Node.js',     abbr: 'No', color: 'text-green-400'   },
  { name: 'TypeScript',  abbr: 'TS', color: 'text-blue-400'    },
  { name: 'MongoDB',     abbr: 'Mo', color: 'text-green-500'   },
  { name: 'PostgreSQL',  abbr: 'PG', color: 'text-sky-400'     },
  { name: 'TensorFlow',  abbr: 'TF', color: 'text-orange-400'  },
  { name: 'OpenCV',      abbr: 'CV', color: 'text-red-400'     },
  { name: 'ESP32',       abbr: 'IO', color: 'text-purple-400'  },
  { name: 'LangChain',   abbr: 'LC', color: 'text-emerald-400' },
  { name: 'FastAPI',     abbr: 'FA', color: 'text-teal-400'    },
  { name: 'Next.js',     abbr: 'Nx', color: 'text-white'       },
  { name: 'Git',         abbr: 'Gt', color: 'text-orange-500'  },
  { name: 'Figma',       abbr: 'Fg', color: 'text-pink-400'    },
];

const CAPABILITIES = [
  'Full-stack web development (React, Node.js)',
  'AI/ML model development & computer vision',
  'IoT hardware integration (ESP32, sensors)',
  'Blockchain & decentralized systems (Solidity)',
  'Predictive analytics & data science',
  'End-to-end product delivery',
];

const PASSIONS = [
  { icon: BookOpen, label: 'Building side projects'       },
  { icon: Mic,      label: 'Public speaking & workshops'  },
  { icon: Layers,   label: 'Exploring new tech stacks'    },
  { icon: Box,      label: 'Blender & 3D design'          },
  { icon: Users,    label: 'Mentoring student developers' },
];

const STATS = [
  { value: '20+', label: 'Project builds'    },
  { value: '2',   label: 'Ambassador roles'  },
  { value: '1',   label: 'Hackathon win'     },
  { value: 'GSA', label: 'Google Ambassador' },
];

const STAT_BAR = [
  { label: 'CGPA',    value: '9.5'           },
  { label: 'COLLEGE', value: 'BIHER'         },
  { label: 'BRANCH',  value: 'B.Tech CSE'   },
  { label: 'YEAR',    value: '2024 – Present'},
  { label: 'FOCUS',   value: 'Full-Stack / AI'},
];

/* ─── Badge chip ──────────────────────────────────────────────────────────── */
const Badge = ({ dot, label, dotColor, textColor }: {
  dot: string; label: string; dotColor: string; textColor: string;
}) => (
  <div className="flex items-center gap-2 text-sm">
    <div className={`w-2 h-2 rounded-full animate-pulse ${dotColor}`}></div>
    <span className={`font-medium ${textColor}`}>{label}</span>
  </div>
);

/* ─── Card header label ───────────────────────────────────────────────────── */
const CardHeader = ({ code, title }: { code: string; title: string }) => (
  <div className="flex items-center gap-2 mb-4">
    <div className="w-6 h-6 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
      <span className="text-[9px] font-mono text-primary font-bold">{code}</span>
    </div>
    <span className="text-xs font-mono text-white/50 uppercase tracking-widest">{title}</span>
  </div>
);

/* ─── Component ───────────────────────────────────────────────────────────── */
const About: React.FC = () => {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 bg-card/30 backdrop-blur-sm rounded-xl overflow-hidden"
        >

          {/* ── TOP: Name + Photo ──────────────────────────────────────── */}
          <div className="p-8 border-b border-white/5">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-7 h-[2px] bg-primary"></div>
              <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase">ABOUT ME</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 items-start">
              {/* Name + badges */}
              <div className="flex-1">
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold leading-none mb-5 tracking-tight">
                  <span className="text-primary">MADHAN</span>{' '}
                  <span className="text-white">KUMAR</span>
                </h2>

                <div className="flex flex-col gap-2 mb-4">
                  <Badge dot="•" dotColor="bg-blue-500"   label="Google Student Ambassador"  textColor="text-blue-400"   />
                  <Badge dot="•" dotColor="bg-purple-500" label="HCLTech Campus Ambassador"  textColor="text-purple-400" />
                </div>

                <div className="inline-flex items-center px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-white/60 text-xs font-mono">
                  B.Tech Computer Science &amp; Engineering — BIHER, Chennai
                </div>
              </div>

              {/* Photo + resume */}
              <div className="flex flex-col items-center gap-3 flex-shrink-0">
                <div className="w-36 h-44 sm:w-40 sm:h-48 rounded-lg overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_rgba(225,29,72,0.2)]">
                  <img
                    src={profilePhoto}
                    alt="Madhan Kumar"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://ui-avatars.com/api/?name=Madhan+Kumar&background=E11D48&color=fff&size=256';
                    }}
                  />
                </div>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-4 py-2 text-xs font-mono text-white/60 border border-white/15 rounded-md hover:border-primary hover:text-primary hover:bg-primary/5 transition-all whitespace-nowrap"
                >
                  ↗ View / Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* ── MIDDLE ROW: About Me | What I Can Do | Passions ───────── */}
          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/5">

            {/* About Me */}
            <div className="p-6">
              <CardHeader code="ID" title="About Me" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                I'm Madhan Kumar — a CS undergraduate at BIHER, Chennai, driven by one obsession: building things that actually work. From hackathon-winning IoT wearables to blockchain healthcare platforms and satellite image retrieval, I ship across the full stack.
              </p>
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-2.5">
                  <MapPin size={12} className="text-primary flex-shrink-0" />
                  Chennai, Tamil Nadu
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail size={12} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="break-all">madhankumartbharathuniv@gmail.com</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={12} className="text-primary flex-shrink-0" />
                  +91 81484 96380
                </li>
                <li className="flex items-center gap-2.5">
                  <Github size={12} className="text-primary flex-shrink-0" />
                  github.com/Madhan310301
                </li>
                <li className="flex items-center gap-2.5">
                  <Linkedin size={12} className="text-primary flex-shrink-0" />
                  linkedin.com/in/madhankumart
                </li>
              </ul>
            </div>

            {/* What I Can Do */}
            <div className="p-6">
              <CardHeader code="DO" title="What I Can Do" />
              <ul className="space-y-2.5">
                {CAPABILITIES.map((cap) => (
                  <li key={cap} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ChevronRight size={14} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Passions */}
            <div className="p-6">
              <CardHeader code="PC" title="Passions" />
              <ul className="space-y-3">
                {PASSIONS.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Icon size={14} className="text-primary/70 flex-shrink-0" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── BOTTOM ROW: Tech Stack | What I Have Done ─────────────── */}
          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/5 border-t border-white/5">

            {/* Tech Stack — spans 2 cols */}
            <div className="lg:col-span-2 p-6">
              <CardHeader code="TS" title="Tech Stack" />
              <div className="grid grid-cols-5 sm:grid-cols-7 gap-x-3 gap-y-4">
                {TECH_STACK.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-1.5 group cursor-default"
                  >
                    <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-200">
                      <span className={`text-[10px] font-mono font-bold ${tech.color}`}>
                        {tech.abbr}
                      </span>
                    </div>
                    <span className="text-[9px] text-white/40 text-center leading-tight group-hover:text-white/60 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* What I Have Done */}
            <div className="p-6">
              <CardHeader code="DK" title="What I Have Done" />
              <div className="grid grid-cols-2 gap-3">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 border border-white/5 rounded-lg p-3 hover:border-primary/20 transition-colors"
                  >
                    <div className="text-xl font-display font-bold text-primary">{stat.value}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── STAT BAR ──────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-5 border-t border-white/10">
            {STAT_BAR.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-4 ${i < STAT_BAR.length - 1 ? 'border-r border-white/5' : ''}`}
              >
                <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-1">
                  {stat.label}
                </div>
                <div className="text-sm font-bold text-primary">{stat.value}</div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
