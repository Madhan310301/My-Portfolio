import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  {
    id: 1,
    tag: "[BUILD-01]",
    title: "SafeGuard AI",
    category: "IoT Child Safety Wearable",
    desc: "Hackathon-winning IoT wearable with GPS tracking, MPU6050 fall detection, and GSM emergency alerts.",
    duration: "Completed Jan 2026",
    stack: ["ESP32", "Python", "React", "Node.js", "RBAC", "3D Animation"],
    fullDesc1: "Developed a comprehensive wearable solution addressing child safety in outdoor environments. The system combines real-time hardware telemetry with a full-stack dashboard.",
    fullDesc2: "The device monitors location and motion continuously, analyzing accelerometer data to detect potential falls and triggering immediate SMS/dashboard alerts to parents.",
    milestone: "Won Genesis Hackathon 2026 — Overall 2nd Prize & Domain 1st Prize at SRMEEC Chennai.",
    keyFeature: "Real-time GPS tracking with ML-assisted fall detection and parent alert dashboard.",
    problem: "Children's safety in outdoor unsupervised environments with no reliable alert system.",
    challenge: "Integrating hardware sensor data with low-latency web dashboard under hackathon time pressure."
  },
  {
    id: 2,
    tag: "[BUILD-02]",
    title: "SarvaJeevaID",
    category: "Identity Platform",
    desc: "Role-based identity management platform with secure authentication and real-time data sync.",
    duration: "Completed Oct 2025",
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    fullDesc1: "Architected a scalable identity verification and management system designed for multi-stakeholder environments requiring robust access controls.",
    fullDesc2: "Implemented complex role-based access control (RBAC) preventing privilege escalation while maintaining real-time data synchronization across all authorized client sessions.",
    milestone: "Deployed as a functional multi-role platform with real-time sync.",
    keyFeature: "Multi-role access control with live data propagation across user types.",
    problem: "Identity verification systems lack flexible role management for multi-stakeholder environments.",
    challenge: "Designing a RBAC schema that remains performant under concurrent access patterns."
  },
  {
    id: 3,
    tag: "[BUILD-03]",
    title: "AI Financial Coach",
    category: "AI Planning Platform",
    desc: "AI-driven financial planning platform with expense prediction and personalized investment recommendations.",
    duration: "Completed Aug 2025",
    stack: ["React", "Python", "scikit-learn", "Flask", "PostgreSQL"],
    fullDesc1: "Built an intelligent finance tracker that moves beyond simple reporting to predictive modeling, analyzing past spending behavior to forecast future financial states.",
    fullDesc2: "The system employs supervised learning to categorize transactions automatically and generates dynamic investment portfolio recommendations tailored to the user's risk profile.",
    milestone: "Achieved 85%+ accuracy on expense prediction model in production.",
    keyFeature: "Personalized investment recommendation engine using spending pattern analysis.",
    problem: "Most financial apps report spending but don't predict or advise on future behavior.",
    challenge: "Training a generalizable ML model with sparse, noisy user financial data."
  },
  {
    id: 4,
    tag: "[BUILD-04]",
    title: "AI Cloud-Edge Healthcare Framework",
    category: "Healthcare Platform",
    desc: "Distributed health-monitoring system with predictive alerts and reduced API latency.",
    duration: "Completed Jun 2025",
    stack: ["React", "Node.js", "MongoDB", "Python ML"],
    fullDesc1: "Designed a hybrid architecture for healthcare IoT devices, shifting preliminary inference to the edge to reduce bandwidth and central server load.",
    fullDesc2: "Critical alerts are generated locally for zero-latency response, while aggregated anonymized data is synced to the cloud for heavy-duty longitudinal analysis.",
    milestone: "Achieved 25% reduction in API response latency vs. baseline monolithic approach.",
    keyFeature: "Edge-cloud hybrid inference for real-time patient alert generation.",
    problem: "Centralized healthcare systems suffer latency spikes under peak concurrent patient load.",
    challenge: "Synchronizing edge model inference with cloud aggregation without data drift."
  },
  {
    id: 5,
    tag: "[BUILD-05]",
    title: "Pharmacy Medicals App",
    category: "Client Pharmacy System",
    desc: "Live client-deployed pharmacy management system with inventory, billing, and customer ordering.",
    duration: "Completed Mar 2025",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    fullDesc1: "A production B2B SaaS solution custom-built for a local pharmacy to digitize their entire operational pipeline, from procurement to point-of-sale.",
    fullDesc2: "Features a dual-interface system: a rugged POS dashboard for staff with barcode integration, and a mobile-responsive ordering portal for end customers.",
    milestone: "Deployed to a real pharmacy client — currently managing daily operations.",
    keyFeature: "End-to-end customer ordering interface with automated inventory deduction.",
    problem: "Small pharmacies lack affordable, custom digital systems for inventory + billing.",
    challenge: "Ensuring data integrity between live inventory updates and concurrent billing operations."
  },
  {
    id: 6,
    tag: "[BUILD-06]",
    title: "ML Machine Health Tracker",
    category: "Predictive Maintenance",
    desc: "Predictive maintenance model with anomaly detection reducing simulated industrial downtime.",
    duration: "Completed Dec 2024",
    stack: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    fullDesc1: "An applied data science project targeting industrial operations, training isolation forests on simulated machine vibration and temperature telemetry.",
    fullDesc2: "The system predicts mechanical failures before they occur by identifying multi-variate anomalies that human operators or simple threshold alarms would miss.",
    milestone: "Reduced simulated machine downtime by 20% in testing scenarios.",
    keyFeature: "Multi-signal anomaly detection with configurable threshold alerts.",
    problem: "Reactive maintenance in industrial equipment causes unpredictable, costly failures.",
    challenge: "Building an interpretable model that maintenance teams without ML background can trust."
  }
];

const Projects: React.FC = () => {
  const [activeId, setActiveId] = useState(1);
  
  const activeProject = PROJECTS.find(p => p.id === activeId) || PROJECTS[0];

  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="font-mono text-sm text-primary mb-2">// LAUNCHED MISSIONS</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">PROJECT LOG</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Side: Featured Case Study Card */}
          <div className="lg:w-[70%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="hud-bracket bg-card p-6 md:p-8 border-2 border-white/10 hover:border-primary/50 transition-colors shadow-lg"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="font-mono text-primary font-bold">{activeProject.tag}</div>
                  <div className="flex gap-3">
                    <a href="#" className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-colors">
                      LIVE DEMO
                    </a>
                    <a href="#" className="px-4 py-2 border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white/5 transition-colors">
                      SOURCE
                    </a>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{activeProject.title}</h3>
                <p className="text-xl text-muted-foreground mb-6">{activeProject.desc}</p>

                <div className="flex flex-col sm:flex-row gap-6 mb-8 pb-8 border-b border-white/10">
                  <div>
                    <div className="font-mono text-xs text-white/50 mb-1">// DURATION:</div>
                    <div className="text-sm font-medium text-white">{activeProject.duration}</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-white/50 mb-1">// STACK_CORE</div>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.stack.map(tech => (
                        <span key={tech} className="text-xs bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
                  <p>{activeProject.fullDesc1}</p>
                  <p>{activeProject.fullDesc2}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[#0f0f15] border border-white/5 p-4 rounded text-sm">
                    <div className="font-mono text-xs text-primary mb-2">// MILESTONE</div>
                    <p className="text-white/90">{activeProject.milestone}</p>
                  </div>
                  <div className="bg-[#0f0f15] border border-white/5 p-4 rounded text-sm">
                    <div className="font-mono text-xs text-primary mb-2">// KEY FEATURE</div>
                    <p className="text-white/90">{activeProject.keyFeature}</p>
                  </div>
                  <div className="bg-[#0f0f15] border border-white/5 p-4 rounded text-sm">
                    <div className="font-mono text-xs text-orange-500 mb-2">// PROBLEM</div>
                    <p className="text-white/90">{activeProject.problem}</p>
                  </div>
                  <div className="bg-[#0f0f15] border border-white/5 p-4 rounded text-sm">
                    <div className="font-mono text-xs text-orange-500 mb-2">// CHALLENGE</div>
                    <p className="text-white/90">{activeProject.challenge}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Vertical Orbit Navigator */}
          <div className="lg:w-[30%] flex flex-col">
            <div className="bg-[#0f0f15] p-4 rounded-t border border-white/10 border-b-0">
              <p className="font-mono text-xs text-white/60 leading-relaxed">
                // SCROLL_CONTROL — Use mouse wheel, arrow keys, or select a node. The active project expands into the case study card.
              </p>
            </div>
            
            <div className="flex-1 bg-card border border-white/10 rounded-b p-2 overflow-hidden flex flex-col relative min-h-[400px]">
              {/* Vertical line connecting nodes */}
              <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-white/5 z-0"></div>

              <div className="flex flex-col justify-around h-full space-y-2 z-10 p-2">
                {PROJECTS.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveId(project.id)}
                    className={`flex items-center gap-4 p-3 rounded-lg transition-all text-left w-full ${
                      activeId === project.id 
                        ? 'bg-white/5 border border-primary/30 shadow-[0_0_15px_rgba(225,29,72,0.15)]' 
                        : 'hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className={`relative flex-shrink-0 w-4 h-4 rounded-full border-2 transition-colors ${
                      activeId === project.id ? 'border-primary bg-primary' : 'border-white/20 bg-card'
                    }`}>
                      {activeId === project.id && (
                        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50"></div>
                      )}
                    </div>
                    <div>
                      <div className={`font-bold text-sm transition-colors ${activeId === project.id ? 'text-white' : 'text-white/60'}`}>
                        {project.title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{project.category}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
