import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { useIsMobile } from '../hooks/useIsMobile';

const SKILLS_DATA = [
  { name: 'React', level: 90, type: 'Frontend' },
  { name: 'Node.js', level: 85, type: 'Backend' },
  { name: 'Python', level: 88, type: 'AI/Backend' },
  { name: 'TypeScript', level: 80, type: 'Frontend' },
  { name: 'MongoDB', level: 82, type: 'Database' },
  { name: 'MySQL', level: 78, type: 'Database' },
  { name: 'PostgreSQL', level: 78, type: 'Database' },
  { name: 'TensorFlow', level: 72, type: 'AI' },
  { name: 'OpenCV', level: 75, type: 'AI' },
  { name: 'scikit-learn', level: 80, type: 'AI' },
  { name: 'ESP32', level: 70, type: 'IoT' },
  { name: 'Git', level: 88, type: 'Tools' },
  { name: 'Figma', level: 72, type: 'Tools' },
];

const SKILL_DETAILS: Record<string, any> = {
  'React': {
    desc: "Primary frontend framework across web apps, dashboards, and real-time UIs.",
    growth: { '2023': 15, '2024': 50, '2025': 75, '2026': 90 },
    projects: [
      { name: 'SafePathAI', slug: 'safepath-ai' },
      { name: 'SarvaJeevaID', slug: 'sarvajeevaid' },
      { name: 'AI Financial Coach', slug: 'fintech' },
      { name: 'RM Online App', slug: 'rm-online-app' }
    ]
  },
  'Node.js': {
    desc: "Backend engine, microservices API architectures, socket integrations.",
    growth: { '2023': 20, '2024': 45, '2025': 65, '2026': 85 },
    projects: [
      { name: 'AI Financial Coach', slug: 'fintech' },
      { name: 'SarvaJeevaID', slug: 'sarvajeevaid' },
      { name: 'DocuQuery', slug: 'docuquery' }
    ]
  },
  'Python': {
    desc: "Data modeling, ML pipelines, edge telemetry processing, agentic chains.",
    growth: { '2023': 30, '2024': 60, '2025': 78, '2026': 88 },
    projects: [
      { name: 'SafePathAI', slug: 'safepath-ai' },
      { name: 'AgriGrade', slug: 'agrigrade' },
      { name: 'RenoAI', slug: 'renoai' }
    ]
  },
  'TypeScript': {
    desc: "Strict type safety across large enterprise apps and frontend interfaces.",
    growth: { '2023': 10, '2024': 40, '2025': 60, '2026': 80 },
    projects: [
      { name: 'SarvaJeevaID', slug: 'sarvajeevaid' },
      { name: 'HabiAI', slug: 'habiai' }
    ]
  },
  'MongoDB': {
    desc: "Primary NoSQL store for user models, flexible configuration, rapid prototyping.",
    growth: { '2023': 35, '2024': 50, '2025': 70, '2026': 82 },
    projects: [
      { name: 'AI Financial Coach', slug: 'fintech' },
      { name: 'SarvaJeevaID', slug: 'sarvajeevaid' }
    ]
  },
  'MySQL': {
    desc: "Relational modeling, traditional schema operations, performance indexing.",
    growth: { '2023': 40, '2024': 55, '2025': 68, '2026': 78 },
    projects: [
      { name: 'RM Online App', slug: 'rm-online-app' }
    ]
  },
  'PostgreSQL': {
    desc: "Advanced relational operations, spatial queries, highly resilient data structures.",
    growth: { '2023': 20, '2024': 40, '2025': 60, '2026': 78 },
    projects: [
      { name: 'DocuQuery', slug: 'docuquery' },
      { name: 'HealAI', slug: 'healai' }
    ]
  },
  'TensorFlow': {
    desc: "Training convolutional nets, computer vision model logic, edge optimizations.",
    growth: { '2023': 15, '2024': 35, '2025': 55, '2026': 72 },
    projects: [
      { name: 'AgriGrade', slug: 'agrigrade' },
      { name: 'SafePathAI', slug: 'safepath-ai' }
    ]
  },
  'OpenCV': {
    desc: "Real-time frame manipulation, pixel threshold operations, edge detection.",
    growth: { '2023': 25, '2024': 45, '2025': 60, '2026': 75 },
    projects: [
      { name: 'AgriGrade', slug: 'agrigrade' },
      { name: 'RenoAI', slug: 'renoai' }
    ]
  },
  'scikit-learn': {
    desc: "Classical ML modeling, tabular data analytics, preprocessing, scoring models.",
    growth: { '2023': 30, '2024': 50, '2025': 68, '2026': 80 },
    projects: [
      { name: 'SafePathAI', slug: 'safepath-ai' },
      { name: 'AgriGrade', slug: 'agrigrade' }
    ]
  },
  'ESP32': {
    desc: "Microcontroller logic, sensor telemetry processing, peripheral communications.",
    growth: { '2023': 20, '2024': 40, '2025': 55, '2026': 70 },
    projects: [
      { name: 'SafePathAI', slug: 'safepath-ai' }
    ]
  },
  'Git': {
    desc: "Source control, branching pipelines, collaborative codebase configuration.",
    growth: { '2023': 50, '2024': 70, '2025': 80, '2026': 88 },
    projects: [
      { name: 'All Logged Projects', slug: 'all' }
    ]
  },
  'Figma': {
    desc: "UX flow wireframing, mockup configuration, interactive prototype layout.",
    growth: { '2023': 30, '2024': 50, '2025': 65, '2026': 72 },
    projects: [
      { name: 'All Logged Projects', slug: 'all' }
    ]
  }
};

const Skills: React.FC = () => {
  const [activeChart, setActiveChart] = useState<'bar' | 'donut' | 'spider'>('bar');
  const [selectedSkill, setSelectedSkill] = useState('React');
  const isMobile = useIsMobile(640); 

  const topSkills = SKILLS_DATA.slice(0, 6);
  const detail = SKILL_DETAILS[selectedSkill] || { desc: '', growth: {}, projects: [] };
  const skillObj = SKILLS_DATA.find(s => s.name === selectedSkill) || SKILLS_DATA[0];

  return (
    <section className="py-24 relative" id="skills">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-panel"
        >
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-primary"></div>
              <span className="text-primary font-mono text-sm tracking-wider uppercase">— CORE ENGINEERING STACK</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Core Engineering Stack</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-7 hud-bracket bg-card border border-white/10 p-4 sm:p-6 flex flex-col">
              <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                <div className="font-mono text-primary">// SKILLS_VISUALIZER</div>
                
                <div className="flex items-center gap-2 px-3 py-1 bg-[#0f0f15] border border-white/5 rounded">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="font-mono text-xs text-green-400">SYS_NOMINAL</span>
                </div>
              </div>

              <div className="flex gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar border-b border-white/10 pb-4 mb-8">
                {[
                  { id: 'bar', label: '📊 Bar Chart' },
                  { id: 'donut', label: '🍩 Donut Chart' },
                  { id: 'spider', label: '🕸 Spider Web' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveChart(tab.id as any)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded text-xs sm:text-sm font-medium transition-colors shrink-0 ${
                      activeChart === tab.id 
                        ? 'bg-primary text-white shadow-[0_0_10px_rgba(225,29,72,0.3)]' 
                        : 'bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="flex-1 min-h-[320px] sm:min-h-[350px] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeChart}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    {activeChart === 'bar' && (
                      <ResponsiveContainer width="100%" height="100%">
                        {isMobile ? (
                          <BarChart data={SKILLS_DATA} layout="vertical" margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                            <XAxis type="number" domain={[0, 100]} tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }} />
                            <YAxis dataKey="name" type="category" width={80} tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }} />
                            <Bar dataKey="level" onClick={(data) => setSelectedSkill(data.name)} cursor="pointer">
                              {SKILLS_DATA.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.name === selectedSkill ? '#E11D48' : '#3f3f46'} className="transition-colors hover:fill-orange-500" />
                              ))}
                            </Bar>
                          </BarChart>
                        ) : (
                          <BarChart data={SKILLS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 40 }}>
                            <XAxis dataKey="name" angle={-45} textAnchor="end" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} interval={0} />
                            <YAxis tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} domain={[0, 100]} />
                            <Bar dataKey="level" onClick={(data) => setSelectedSkill(data.name)} cursor="pointer">
                              {SKILLS_DATA.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.name === selectedSkill ? '#E11D48' : '#3f3f46'} className="transition-colors hover:fill-orange-500" />
                              ))}
                            </Bar>
                          </BarChart>
                        )}
                      </ResponsiveContainer>
                    )}

                    {activeChart === 'donut' && (
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={topSkills}
                            cx="50%"
                            cy="50%"
                            innerRadius={isMobile ? 50 : 80}
                            outerRadius={isMobile ? 80 : 130}
                            paddingAngle={2}
                            dataKey="level"
                            onClick={(data) => setSelectedSkill(data.name)}
                            cursor="pointer"
                            stroke="none"
                          >
                            {topSkills.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.name === selectedSkill ? '#E11D48' : `hsl(347, 77%, ${20 + index * 5}%)`} className="transition-colors hover:fill-orange-500" />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    )}

                    {activeChart === 'spider' && (
                      <ResponsiveContainer width="100%" height="100%">
                        {isMobile ? (
                          <div className="w-full h-full flex flex-col gap-3 justify-center px-4 max-h-[300px] overflow-y-auto no-scrollbar">
                            {SKILLS_DATA.map(skill => (
                              <div key={skill.name} className="flex flex-col gap-1 cursor-pointer" onClick={() => setSelectedSkill(skill.name)}>
                                <div className="flex justify-between text-xs font-mono">
                                  <span className={skill.name === selectedSkill ? "text-primary font-bold" : "text-white/80"}>{skill.name}</span>
                                  <span className="text-white/40">{skill.level}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded overflow-hidden">
                                  <div className={`h-full transition-all ${skill.name === selectedSkill ? 'bg-primary' : 'bg-white/20'}`} style={{ width: `${skill.level}%` }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILLS_DATA}>
                            <PolarGrid stroke="rgba(255,255,255,0.1)" />
                            <PolarAngleAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 10 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                            <Radar name="Skills" dataKey="level" stroke="#E11D48" fill="#E11D48" fillOpacity={0.3} className="drop-shadow-[0_0_10px_rgba(225,29,72,0.5)]" />
                          </RadarChart>
                        )}
                      </ResponsiveContainer>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="hud-bracket bg-[#0A0A0F] border border-primary/30 p-6 relative overflow-hidden h-full box-glow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/10">
                    <h3 className="text-3xl font-display font-bold text-white">{selectedSkill}</h3>
                    <div className="text-2xl font-mono font-bold text-primary">{skillObj.level}%</div>
                  </div>

                  <div className="mb-8">
                    <div className="font-mono text-xs text-primary mb-2">// DESCRIPTION</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{detail.desc}</p>
                  </div>

                  <div className="mb-8">
                    <div className="font-mono text-xs text-primary mb-3">// TIMELINE_GROWTH (2023 → 2026)</div>
                    <div className="grid grid-cols-4 gap-2">
                      {Object.entries(detail.growth).map(([year, val]) => (
                        <div key={year} className="bg-card border border-white/5 p-2 rounded text-center">
                          <div className="text-[10px] text-white/50 mb-1">{year}</div>
                          <div className="text-sm font-bold text-white">{val as number}%</div>
                          <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: `${val}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-xs text-primary mb-3">// MAPPED_PROJECTS (PROOF)</div>
                    <div className="flex flex-col gap-2">
                      {detail.projects.map((proj: { name: string; slug: string }) => (
                        <button
                          key={proj.slug}
                          onClick={() => {
                            const target = document.querySelector('#projects');
                            if (target) {
                              target.scrollIntoView({ behavior: 'smooth' });
                            }
                            if (proj.slug !== 'all') {
                              window.location.hash = `project=${proj.slug}`;
                            }
                          }}
                          className="group flex items-center justify-between p-2.5 bg-card border border-white/5 rounded text-sm hover:border-white/20 hover:bg-white/[0.02] transition-colors w-full text-left cursor-pointer"
                        >
                          <span className="text-white/80 group-hover:text-white transition-colors">{proj.name}</span>
                          <span className="text-white/30 font-mono text-[10px] uppercase group-hover:text-primary transition-colors">View Proof →</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
