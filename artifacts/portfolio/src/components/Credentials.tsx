import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const CREDENTIALS = [
  {
    id: "GCAF_2026",
    year: "2026",
    badgeType: "Google Cloud",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    title: "Google Cloud Arcade Facilitator '26",
    desc: "Guides participants through hands-on labs, gamified cloud-learning campaigns, and cloud milestones while mentoring the developer community.",
    description: "As a Google Cloud Arcade Facilitator, I guide participants through hands-on Google Cloud labs and gamified cloud-learning campaigns. My role involves mentoring the developer community, helping newcomers navigate Arcade quests, troubleshooting lab issues, and driving engagement through cloud-skill challenges and milestone-based rewards."
  },
  {
    id: "GENESIS_2026",
    year: "2026",
    badgeType: "Hackathon",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
    title: "Genesis Hackathon — Overall 2nd Prize & Domain 1st Prize",
    desc: "Built and presented SafeGuard AI at SRMEEC Chennai. Won both overall and IoT domain category.",
    description: "At Genesis Hackathon hosted by SRMEEC Chennai, I built and presented 'SafeGuard AI', an AI-powered safety solution. The project won 2nd Prize overall across all domains and 1st Prize in the IoT category, recognized for its practical implementation, real-time detection capability, and impact-driven design."
  },
  {
    id: "GSA_2026",
    year: "2026",
    badgeType: "Google",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    title: "Google Student Ambassador",
    desc: "Represents Google's developer programs (GDG, Gemini, Cloud) within the campus community.",
    description: "As a Google Student Ambassador (GID: 3150) for the past 4 months, I represent Google's developer programs — including GDG, Gemini, and Google Cloud — within my campus community. My responsibilities include organizing developer sessions, promoting Google's learning programs, conducting hands-on workshops, and driving student participation in Google-led initiatives and events."
  },
  {
    id: "HCL_CA_2026",
    year: "2026",
    badgeType: "HCLTech",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    title: "HCLTech Campus Ambassador",
    desc: "Selected to represent HCLTech outreach and campus hiring initiatives.",
    description: "Selected as an HCLTech Campus Ambassador, I represent HCLTech's outreach and campus hiring initiatives at my college. This involves bridging communication between HCLTech and students, promoting internship/placement opportunities, organizing awareness sessions, and helping streamline the campus recruitment process."
  },
  {
    id: "BIHER_EC_2024",
    year: "2024–Present",
    badgeType: "Leadership",
    badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    title: "Event Coordinator, BIHER",
    desc: "Plans and runs technical workshops, hackathons, and inter-batch events at BIHER.",
    description: "As Event Coordinator at BIHER, I plan and run technical workshops, hackathons, and inter-batch events. This includes end-to-end event management — ideation, speaker/sponsor coordination, logistics, on-ground execution, and post-event reporting — aimed at boosting technical exposure and participation among students."
  }
];

const Credentials: React.FC = () => {
  const [flippedId, setFlippedId] = useState<string | null>(null);
  const revertTimerRef = useRef<any>(null);

  const clearRevertTimer = () => {
    if (revertTimerRef.current) {
      clearTimeout(revertTimerRef.current);
      revertTimerRef.current = null;
    }
  };

  const handleCardClick = (id: string) => {
    clearRevertTimer();

    if (flippedId === id) {
      // Revert if clicking same card
      setFlippedId(null);
    } else {
      // Set new flipped card
      setFlippedId(id);
      
      // Auto revert after 60 seconds
      revertTimerRef.current = setTimeout(() => {
        setFlippedId(null);
      }, 60000);
    }
  };

  // Safety cleanups on window blur or unmount
  useEffect(() => {
    const handleBlur = () => {
      setFlippedId(null);
      clearRevertTimer();
    };

    window.addEventListener('blur', handleBlur);
    return () => {
      window.removeEventListener('blur', handleBlur);
      clearRevertTimer();
    };
  }, []);

  return (
    <section className="py-24 relative" id="credentials">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-panel"
        >
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(225,29,72,0.2)]">
                <Trophy size={24} className="text-primary" />
              </div>
            </div>
            <div className="font-mono text-sm text-primary mb-2">// WALL OF FAME</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Recognition & Milestones</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {CREDENTIALS.map((cred, i) => {
              const isFlipped = flippedId === cred.id;
              return (
                <motion.div 
                  key={cred.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="w-full h-full min-h-[280px]"
                >
                  <div 
                    onClick={() => handleCardClick(cred.id)}
                    className="w-full h-full min-h-[280px] perspective-1000 cursor-pointer select-none"
                  >
                    <div 
                      className={`relative w-full h-full min-h-[280px] transition-transform duration-500 preserve-3d ${
                        isFlipped ? 'rotate-y-180' : ''
                      }`}
                    >
                      {/* FRONT FACE */}
                      <div className="absolute inset-0 w-full h-full backface-hidden bg-card p-6 border border-white/10 hover:border-primary/40 transition-colors flex flex-col box-glow group">
                        <div className="flex justify-between items-start mb-4">
                          <span className="font-mono text-sm font-bold text-primary">{cred.year}</span>
                          <span className={`text-xs px-2.5 py-1 rounded-full border ${cred.badgeColor}`}>
                            {cred.badgeType}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                          {cred.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm flex-grow mb-6">
                          {cred.desc}
                        </p>
                        
                        <div className="pt-4 border-t border-white/5 mt-auto flex justify-between items-center">
                          {cred.id === "GSA_2026" ? (
                            <span className="font-mono text-[10px] text-white/30">
                              // GID: 3150
                            </span>
                          ) : (
                            <span className="font-mono text-[10px] text-white/30" />
                          )}
                          
                          <span className="font-mono text-[9px] text-primary/70 flex items-center gap-1.5 hover:text-white transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse"></span>
                            TAP FOR DETAILS 🔄
                          </span>
                        </div>
                      </div>

                      {/* BACK FACE */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#0C0C12] border-2 border-primary/40 p-6 flex flex-col box-glow">
                        <div className="flex justify-between items-start mb-4">
                          <span className="font-mono text-sm font-bold text-primary">// PREVIEW_DETAILS</span>
                          <span className="text-[9px] font-mono text-white/40 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                            CLICK TO CLOSE
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-primary mb-3 font-display">
                          {cred.title}
                        </h3>
                        
                        <p className="text-white/95 text-sm leading-relaxed flex-grow font-sans overflow-y-auto no-scrollbar mb-4">
                          {cred.description}
                        </p>
                        
                        <div className="pt-4 border-t border-white/5 mt-auto flex justify-between items-center text-[9px] font-mono text-white/30">
                          <span>// SECURE_PREVIEW</span>
                          <span className="text-primary/70 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                            AUTO REVERTS IN 60S
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Credentials;
