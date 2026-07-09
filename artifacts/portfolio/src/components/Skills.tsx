import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

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
    projects: ['SafeGuard AI', 'SarvaJeevaID', 'AI Financial Coach', 'Pharmacy Medicals App']
  },
  'Node.js': {
    desc: "Backend runtime for REST APIs, real-time services, and middleware layers.",
    growth: { '2023': 10, '2024': 40, '2025': 70, '2026': 85 },
    projects: ['SafeGuard AI', 'AI Cloud-Edge Healthcare', 'Pharmacy Medicals App']
  },
  'Python': {
    desc: "Core language for AI/ML models, data pipelines, and backend scripting.",
    growth: { '2023': 20, '2024': 55, '2025': 75, '2026': 88 },
    projects: ['AI Financial Coach', 'ML Machine Health Tracker', 'AI Cloud-Edge Healthcare']
  },
  'TypeScript': {
    desc: "Type-safe development for large-scale frontend and full-stack projects.",
    growth: { '2023': 0, '2024': 30, '2025': 60, '2026': 80 },
    projects: ['SarvaJeevaID']
  },
  'MongoDB': {
    desc: "NoSQL database for flexible, document-oriented application data.",
    growth: { '2023': 10, '2024': 40, '2025': 65, '2026': 82 },
    projects: ['AI Cloud-Edge Healthcare', 'Pharmacy Medicals App']
  },
  'MySQL': {
    desc: "Relational database for structured, transactional backend systems.",
    growth: { '2023': 20, '2024': 45, '2025': 65, '2026': 78 },
    projects: ['AI Financial Coach']
  },
  'PostgreSQL': {
    desc: "Advanced relational DB used in authentication and financial systems.",
    growth: { '2023': 10, '2024': 35, '2025': 60, '2026': 78 },
    projects: ['SarvaJeevaID', 'AI Financial Coach']
  },
  'TensorFlow': {
    desc: "Deep learning framework for model training and deployment.",
    growth: { '2023': 0, '2024': 20, '2025': 50, '2026': 72 },
    projects: ['AI Cloud-Edge Healthcare']
  },
  'OpenCV': {
    desc: "Computer vision library for image processing and recognition tasks.",
    growth: { '2023': 0, '2024': 25, '2025': 55, '2026': 75 },
    projects: ['AI Cloud-Edge Healthcare']
  },
  'scikit-learn': {
    desc: "ML library for classification, regression, and predictive modeling.",
    growth: { '2023': 0, '2024': 30, '2025': 60, '2026': 80 },
    projects: ['AI Financial Coach', 'ML Machine Health Tracker']
  },
  'ESP32': {
    desc: "Microcontroller platform for IoT sensor integration and embedded systems.",
    growth: { '2023': 0, '2024': 20, '2025': 50, '2026': 70 },
    projects: ['SafeGuard AI']
  },
  'Git': {
    desc: "Version control across all projects — branching, CI/CD, team collaboration.",
    growth: { '2023': 20, '2024': 55, '2025': 78, '2026': 88 },
    projects: ['All Projects']
  },
  'Figma': {
    desc: "UI/UX design and prototyping before development handoff.",
    growth: { '2023': 15, '2024': 40, '2025': 60, '2026': 72 },
    projects: ['SarvaJeevaID', 'Pharmacy Medicals App']
  }
};

const Skills: React.FC = () => {
  const [activeChart, setActiveChart] = useState<'bar' | 'donut' | 'spider'>('bar');
  const [selectedSkill, setSelectedSkill] = useState<string>('Python');

  const topSkills = [...SKILLS_DATA].sort((a, b) => b.level - a.level).slice(0, 8);
  const detail = SKILL_DETAILS[selectedSkill] || SKILL_DETAILS['Python'];
  const skillObj = SKILLS_DATA.find(s => s.name === selectedSkill) || SKILLS_DATA[2];

  return (
    <section className="py-24 relative" id="skills">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-primary"></div>
            <span className="text-primary font-mono text-sm tracking-wider uppercase">— CORE ENGINEERING STACK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Core Engineering Stack</h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Side: Visualizer */}
          <div className="lg:col-span-7 hud-bracket bg-card border border-white/10 p-6 flex flex-col">
            <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
              <div className="font-mono text-primary">// SKILLS_VISUALIZER</div>
              
              {/* Telemetry Status */}
              <div className="flex items-center gap-2 px-3 py-1 bg-[#0f0f15] border border-white/5 rounded">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-mono text-xs text-green-400">SYS_NOMINAL</span>
              </div>
            </div>

            {/* Chart Tabs */}
            <div className="flex gap-2 border-b border-white/10 pb-4 mb-8">
              {[
                { id: 'bar', label: '📊 Bar Chart' },
                { id: 'donut', label: '🍩 Donut Chart' },
                { id: 'spider', label: '🕸 Spider Web' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveChart(tab.id as any)}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    activeChart === tab.id 
                      ? 'bg-primary text-white shadow-[0_0_10px_rgba(225,29,72,0.3)]' 
                      : 'bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Chart Area */}
            <div className="flex-1 min-h-[350px] w-full">
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
                      <BarChart data={SKILLS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 40 }}>
                        <XAxis 
                          dataKey="name" 
                          angle={-45} 
                          textAnchor="end" 
                          tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} 
                          interval={0} 
                        />
                        <YAxis tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} domain={[0, 100]} />
                        <Bar 
                          dataKey="level" 
                          onClick={(data) => setSelectedSkill(data.name)}
                          cursor="pointer"
                        >
                          {SKILLS_DATA.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={entry.name === selectedSkill ? '#E11D48' : '#3f3f46'} 
                              className="transition-colors hover:fill-orange-500"
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  )}

                  {activeChart === 'donut' && (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={topSkills}
                          cx="50%"
                          cy="50%"
                          innerRadius={80}
                          outerRadius={130}
                          paddingAngle={2}
                          dataKey="level"
                          onClick={(data) => setSelectedSkill(data.name)}
                          cursor="pointer"
                          stroke="none"
                        >
                          {topSkills.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={entry.name === selectedSkill ? '#E11D48' : `hsl(347, 77%, ${20 + index * 5}%)`} 
                              className="transition-colors hover:fill-orange-500"
                            />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  )}

                  {activeChart === 'spider' && (
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILLS_DATA}>
                        <PolarGrid stroke="rgba(255,255,255,0.1)" />
                        <PolarAngleAxis 
                          dataKey="name" 
                          tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 10 }} 
                        />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                        <Radar 
                          name="Skills" 
                          dataKey="level" 
                          stroke="#E11D48" 
                          fill="#E11D48" 
                          fillOpacity={0.3} 
                          className="drop-shadow-[0_0_10px_rgba(225,29,72,0.5)]"
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Detail Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="hud-bracket bg-[#0A0A0F] border border-primary/30 p-6 relative overflow-hidden h-full box-glow">
              {/* Background gradient hint */}
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
                    {detail.projects.map((proj: string) => (
                      <div key={proj} className="group cursor-default flex items-center justify-between p-2.5 bg-card border border-white/5 rounded text-sm hover:border-white/20 transition-colors">
                        <span className="text-white/80 group-hover:text-white transition-colors">{proj}</span>
                        <span className="text-white/30 font-mono text-[10px] uppercase">View Proof →</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
