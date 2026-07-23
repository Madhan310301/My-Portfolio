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
    statusColor: "text-[#C9972E]",
    dotColor: "bg-[#C9972E]",
    borderColor: "border-[#C9972E]",
    establishment: "Dawn Shikshalaya Public School",
    period: "2020–2022",
    grade: "Percentage: 78.80%",
    objective: "General academic foundation — mathematics and science core.",
    log: "Built early foundations in math and science reasoning. First exposure to logical thinking through structured academic programs.",
    yPosition: "80%"
  },
  {
    id: "hsc",
    stage: "HSC (CLASS XII)",
    altitude: "400 km",
    altLabel: "Low Earth Orbit",
    statusWord: "BOOSTER_COMPLETED",
    statusColor: "text-[#D9A94A]",
    dotColor: "bg-[#D9A94A]",
    borderColor: "border-[#D9A94A]",
    establishment: "Dawn Shikshalaya Public School",
    period: "2022–2024",
    grade: "Percentage: 86.80%",
    objective: "Core science and computer fundamentals.",
    log: "Sharpened logical thinking and gained first exposure to programming concepts. Chose Computer Science as specialization path.",
    yPosition: "50%"
  },
  {
    id: "btech",
    stage: "B.TECH, CSE",
    altitude: "1,000 km",
    altLabel: "Low Earth Orbit Exit",
    statusWord: "PROPULSION_ACTIVE",
    statusColor: "text-[#B9821F]",
    dotColor: "bg-[#C9972E]",
    borderColor: "border-[#C9972E]",
    establishment: "BIHER, Chennai",
    period: "2024–Present",
    grade: "CGPA: 9.5/10",
    objective: "Full-stack engineering, AI/ML systems, and IoT.",
    log: "Actively building full-stack, AI, and IoT systems across 12+ real projects. Selected as Google Cloud Facilitator, GSA, and HCLTech Campus Ambassador.",
    yPosition: "20%"
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
              <div className="w-8 h-[2px] bg-[#C9972E]"></div>
              <span className="text-[#C9972E] font-mono text-sm tracking-wider uppercase font-semibold">— EDUCATION</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#241B10] max-w-3xl leading-tight">
              The academic runway behind every project I've shipped.
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Flight Trajectory */}
          <div className="lg:col-span-5 relative h-[500px] flex justify-center py-8">
            <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-[#C9972E]/20"></div>
            <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-t from-[#D9A94A] via-[#C9972E] to-[#B9821F] shadow-[0_0_12px_rgba(201,151,46,0.3)]"></div>

            {ED_STAGES.map((stage) => (
              <button
                key={stage.id}
                className="absolute w-full flex items-center justify-center cursor-pointer group bg-transparent border-0 p-0"
                style={{ top: stage.yPosition }}
                onClick={() => setActiveStageId(stage.id)}
                aria-label={`Select education stage: ${stage.stage}`}
                aria-pressed={activeStageId === stage.id}
              >
                <div className="absolute right-[calc(50%+24px)] text-right w-32">
                  <div className={`font-mono text-sm font-bold transition-colors ${activeStageId === stage.id ? 'text-[#241B10]' : 'text-[#7A6B55]'}`}>
                    {stage.altitude}
                  </div>
                  <div className="text-xs text-[#7A6B55]/70 font-mono hidden sm:block">{stage.stage}</div>
                </div>

                <div className={`w-6 h-6 rounded-full border-4 border-[#FFFDF8] z-10 transition-all duration-300 ${stage.dotColor} ${activeStageId === stage.id ? 'scale-125 shadow-[0_0_12px_rgba(201,151,46,0.5)]' : 'hover:scale-110'}`}></div>
                <div className="absolute left-[calc(50%+24px)] w-32 h-8"></div>
              </button>
            ))}

            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 -ml-[1px] z-20 text-[#241B10]"
              animate={{ top: activeStage.yPosition }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="bg-[#FFFDF8] p-1 rounded-full border border-[#C9972E]/60 shadow-[0_0_10px_rgba(201,151,46,0.3)] -translate-y-1/2">
                <Rocket size={16} className="text-[#C9972E] fill-[#C9972E]/30" />
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
              className="hud-bracket bg-[#FFFDF8] border border-[#C9972E]/30 p-6 md:p-8 font-mono shadow-[0_4px_24px_rgba(120,90,40,0.08)] relative overflow-hidden rounded-xl"
            >
              <div className="flex justify-between items-start mb-8 border-b border-[#C9972E]/20 pb-4 relative z-10">
                <div className="text-[#C9972E] font-bold">// SENSOR_READOUT: SPACE_FLIGHT_LOG</div>
                <div className="px-2 py-0.5 bg-green-500/10 border border-green-500/30 text-green-700 text-xs rounded font-semibold">MISSION_NOMINAL</div>
              </div>

              <div className="space-y-4 text-sm relative z-10">
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="text-[#7A6B55] w-40 shrink-0">// FLIGHT_STAGE:</span>
                  <span className="text-[#241B10] font-bold">{activeStage.stage}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="text-[#7A6B55] w-40 shrink-0">// FLIGHT_ALTITUDE:</span>
                  <span className="text-[#241B10]">{activeStage.altitude} ({activeStage.altLabel})</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="text-[#7A6B55] w-40 shrink-0">// STAGE_STATUS:</span>
                  <span className={`font-bold ${activeStage.statusColor}`}>{activeStage.statusWord}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="text-[#7A6B55] w-40 shrink-0">// ESTABLISHMENT:</span>
                  <span className="text-[#241B10]">{activeStage.establishment}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="text-[#7A6B55] w-40 shrink-0">// MISSION_PERIOD:</span>
                  <span className="text-[#241B10]">{activeStage.period}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="text-[#7A6B55] w-40 shrink-0">// GRADE_TELEMETRY:</span>
                  <span className="text-[#C9972E] font-bold">{activeStage.grade}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="text-[#7A6B55] w-40 shrink-0">// STAGE_OBJECTIVE:</span>
                  <span className="text-[#241B10]">{activeStage.objective}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#C9972E]/20 relative z-10">
                <div className="text-[#C9972E] text-xs mb-2 font-bold">// SENSOR_LOG:</div>
                <div className="bg-[#FAF6EC] border-l-2 border-[#C9972E] p-4 text-[#241B10] text-sm leading-relaxed rounded-r">
                  "{activeStage.log}"
                </div>
              </div>

              <div className="mt-6 text-center text-xs text-[#7A6B55] relative z-10">
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
