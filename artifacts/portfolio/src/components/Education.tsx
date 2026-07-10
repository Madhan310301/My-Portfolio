import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const ED_STAGES = [
  {
    id: "sslc",
    stage: "SSLC (CLASS X)",
    altitude: "120 km",
    altLabel: "Karman Line Ascent",
    statusWord: "STAGE_COMPLETED",
    statusColor: "text-cyan-400",
    dotColor: "bg-cyan-500",
    borderColor: "border-cyan-500",
    establishment: "Dawn Shikshalaya Public School",
    period: "2020–2022",
    grade: "Percentage: 78.80%",
    objective: "General academic foundation — mathematics and science core.",
    log: "Built early foundations in math and science reasoning. First exposure to logical thinking through structured academic programs.",
    yPosition: "80%" // Bottom
  },
  {
    id: "hsc",
    stage: "HSC (CLASS XII)",
    altitude: "400 km",
    altLabel: "Low Earth Orbit",
    statusWord: "BOOSTER_COMPLETED",
    statusColor: "text-yellow-400",
    dotColor: "bg-yellow-500",
    borderColor: "border-yellow-500",
    establishment: "Dawn Shikshalaya Public School",
    period: "2022–2024",
    grade: "Percentage: 86.80%",
    objective: "Core science and computer fundamentals.",
    log: "Sharpened logical thinking and gained first exposure to programming concepts. Chose Computer Science as specialization path.",
    yPosition: "50%" // Middle
  },
  {
    id: "btech",
    stage: "B.TECH, CSE",
    altitude: "1,000 km",
    altLabel: "Low Earth Orbit Exit",
    statusWord: "PROPULSION_ACTIVE",
    statusColor: "text-red-500",
    dotColor: "bg-primary",
    borderColor: "border-primary",
    establishment: "BIHER, Chennai",
    period: "2024–Present",
    grade: "CGPA: 9.5/10",
    objective: "Full-stack engineering, AI/ML systems, and IoT.",
    log: "Actively building full-stack, AI, and IoT systems across 12+ real projects. Representing Google and HCLTech as campus ambassador.",
    yPosition: "20%" // Top
  }
];

const Education: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState("btech");
  
  const activeStage = ED_STAGES.find(s => s.id === activeStageId) || ED_STAGES[2];

  return (
    <section className="py-24 relative" id="education">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-panel"
        >
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-primary"></div>
              <span className="text-primary font-mono text-sm tracking-wider uppercase">— EDUCATION</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white max-w-3xl leading-tight">
              The academic runway behind every project I've shipped.
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Flight Trajectory */}
          <div className="lg:col-span-5 relative h-[500px] flex justify-center py-8">
            {/* The line */}
            <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-white/10"></div>
            <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-t from-cyan-500/50 via-yellow-500/50 to-primary box-glow shadow-[0_0_15px_rgba(225,29,72,0.3)]"></div>

            {/* Stages */}
            {ED_STAGES.map((stage) => (
              <button
                key={stage.id}
                className="absolute w-full flex items-center justify-center cursor-pointer group bg-transparent border-0 p-0"
                style={{ top: stage.yPosition }}
                onClick={() => setActiveStageId(stage.id)}
                aria-label={`Select education stage: ${stage.stage}`}
                aria-pressed={activeStageId === stage.id}
              >
                {/* Left Label */}
                <div className="absolute right-[calc(50%+24px)] text-right w-32">
                  <div className={`font-mono text-sm font-bold transition-colors ${activeStageId === stage.id ? 'text-white' : 'text-white/40'}`}>
                    {stage.altitude}
                  </div>
                  <div className="text-xs text-white/30 font-mono hidden sm:block">{stage.stage}</div>
                </div>

                {/* The Dot */}
                <div className={`w-6 h-6 rounded-full border-4 border-[#0A0A0F] z-10 transition-all duration-300 ${stage.dotColor} ${activeStageId === stage.id ? 'scale-125 shadow-[0_0_15px_currentColor]' : 'hover:scale-110'}`}></div>

                {/* Right hidden hit area to make clicking easier */}
                <div className="absolute left-[calc(50%+24px)] w-32 h-8"></div>
              </button>
            ))}

            {/* Rocket Icon */}
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 -ml-[1px] z-20 text-white"
              animate={{ top: activeStage.yPosition }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="bg-[#0A0A0F] p-1 rounded-full border border-primary/50 shadow-[0_0_10px_rgba(225,29,72,0.5)] -translate-y-1/2">
                <Rocket size={16} className="text-primary fill-primary/20" />
              </div>
            </motion.div>
          </div>

          {/* Right: Sensor Readout Panel */}
          <div className="lg:col-span-7">
            <motion.div 
              key={activeStage.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="hud-bracket bg-[#0A0A0F] border border-white/10 p-6 md:p-8 font-mono shadow-2xl relative overflow-hidden"
            >
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.02)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

              <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-4 relative z-10">
                <div className="text-primary font-bold">// SENSOR_READOUT: SPACE_FLIGHT_LOG</div>
                <div className="px-2 py-0.5 bg-green-500/10 border border-green-500/30 text-green-400 text-xs rounded">MISSION_NOMINAL</div>
              </div>

              <div className="space-y-4 text-sm relative z-10">
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="text-white/40 w-40 shrink-0">// FLIGHT_STAGE:</span>
                  <span className="text-white font-bold">{activeStage.stage}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="text-white/40 w-40 shrink-0">// FLIGHT_ALTITUDE:</span>
                  <span className="text-white">{activeStage.altitude} ({activeStage.altLabel})</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="text-white/40 w-40 shrink-0">// STAGE_STATUS:</span>
                  <span className={`font-bold ${activeStage.statusColor}`}>{activeStage.statusWord}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="text-white/40 w-40 shrink-0">// ESTABLISHMENT:</span>
                  <span className="text-white/90">{activeStage.establishment}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="text-white/40 w-40 shrink-0">// MISSION_PERIOD:</span>
                  <span className="text-white/90">{activeStage.period}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="text-white/40 w-40 shrink-0">// GRADE_TELEMETRY:</span>
                  <span className="text-yellow-400">{activeStage.grade}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="text-white/40 w-40 shrink-0">// STAGE_OBJECTIVE:</span>
                  <span className="text-white/80">{activeStage.objective}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                <div className="text-primary text-xs mb-2">// SENSOR_LOG:</div>
                <div className="bg-white/5 border-l-2 border-primary p-4 text-white/90 text-sm leading-relaxed">
                  "{activeStage.log}"
                </div>
              </div>

              <div className="mt-6 text-center text-xs text-white/30 relative z-10">
                Hover or tap launch trajectory stages to update cockpit flight logs.
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default Education;
