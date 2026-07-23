import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import SectionWatermark from './SectionWatermark';

const CREDENTIALS = [
  {
    id: "SHADOWFOX_2026",
    year: "August 2026",
    badgeType: "Internship",
    badgeColor: "bg-[#C9972E]/10 text-[#C9972E] border-[#C9972E]/30",
    title: "Full-Stack Developer — Virtual Internship",
    desc: "Selected for a project-based full-stack development internship program, progressing through beginner → intermediate → advanced project levels with mentor sessions and a final project submission.",
    description: "Selected for a 1-month virtual Full-Stack Developer internship at ShadowFox (August 2026). The program involves progressing through beginner, intermediate, and advanced project tiers with mentor sessions, live feedback, and a final production-grade project submission."
  },
  {
    id: "GCAF_2026",
    year: "2026",
    badgeType: "Google Cloud",
    badgeColor: "bg-[#C9972E]/10 text-[#C9972E] border-[#C9972E]/30",
    title: "Google Cloud Arcade Facilitator '26",
    desc: "Guides participants through hands-on labs, gamified cloud-learning campaigns, and cloud milestones while mentoring the developer community.",
    description: "As a Google Cloud Arcade Facilitator, I guide participants through hands-on Google Cloud labs and gamified cloud-learning campaigns. My role involves mentoring the developer community, helping newcomers navigate Arcade quests, troubleshooting lab issues, and driving engagement through cloud-skill challenges and milestone-based rewards."
  },
  {
    id: "GENESIS_2026",
    year: "2026",
    badgeType: "Hackathon",
    badgeColor: "bg-[#D9A94A]/15 text-[#B9821F] border-[#D9A94A]/40",
    title: "Genesis Hackathon — Overall 2nd Prize & Domain 1st Prize",
    desc: "Built and presented SafeGuard AI at SRMEEC Chennai. Won both overall and IoT domain category.",
    description: "At Genesis Hackathon hosted by SRMEEC Chennai, I built and presented 'SafeGuard AI', an AI-powered safety solution. The project won 2nd Prize overall across all domains and 1st Prize in the IoT category, recognized for its practical implementation, real-time detection capability, and impact-driven design."
  },
  {
    id: "GSA_2026",
    year: "2026",
    badgeType: "Google",
    badgeColor: "bg-[#C9972E]/10 text-[#C9972E] border-[#C9972E]/30",
    title: "Google Student Ambassador",
    desc: "Represents Google's developer programs (GDG, Gemini, Cloud) within the campus community.",
    description: "As a Google Student Ambassador (GID: 3150) for the past 4 months, I represent Google's developer programs — including GDG, Gemini, and Google Cloud — within my campus community. My responsibilities include organizing developer sessions, promoting Google's learning programs, conducting hands-on workshops, and driving student participation in Google-led initiatives and events."
  },
  {
    id: "HCL_CA_2026",
    year: "2026",
    badgeType: "HCLTech",
    badgeColor: "bg-[#D9A94A]/15 text-[#B9821F] border-[#D9A94A]/40",
    title: "HCLTech Campus Ambassador",
    desc: "Selected to represent HCLTech outreach and campus hiring initiatives.",
    description: "Selected as an HCLTech Campus Ambassador, I represent HCLTech's outreach and campus hiring initiatives at my college. This involves bridging communication between HCLTech and students, promoting internship/placement opportunities, organizing awareness sessions, and helping streamline the campus recruitment process."
  },
  {
    id: "BIHER_EC_2024",
    year: "2024–Present",
    badgeType: "Leadership",
    badgeColor: "bg-[#C9972E]/10 text-[#C9972E] border-[#C9972E]/30",
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
      setFlippedId(null);
    } else {
      setFlippedId(id);
      revertTimerRef.current = setTimeout(() => {
        setFlippedId(null);
      }, 60000);
    }
  };

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
    <section className="py-24 relative overflow-hidden" id="credentials">
      <SectionWatermark word="PROOF" />
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
              <div className="p-3 bg-[#C9972E]/10 rounded-full border border-[#C9972E]/30 shadow-[0_4px_16px_rgba(201,151,46,0.2)]">
                <Trophy size={24} className="text-[#C9972E]" />
              </div>
            </div>
            <div className="font-mono text-sm text-[#C9972E] mb-2 font-semibold">// WALL OF FAME</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#241B10]">Recognition & Milestones</h2>
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
                      <div className="absolute inset-0 w-full h-full backface-hidden bg-[#FFFDF8] p-6 border border-[#C9972E]/30 hover:border-[#C9972E] transition-all flex flex-col shadow-[0_4px_20px_rgba(120,90,40,0.06)] group rounded-xl">
                        <div className="flex justify-between items-start mb-4">
                          <span className="font-mono text-sm font-bold text-[#C9972E]">{cred.year}</span>
                          <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${cred.badgeColor}`}>
                            {cred.badgeType}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-[#241B10] mb-3 group-hover:text-[#C9972E] transition-colors">
                          {cred.title}
                        </h3>
                        
                        <p className="text-[#7A6B55] text-sm flex-grow mb-6">
                          {cred.desc}
                        </p>
                        
                        <div className="pt-4 border-t border-[#C9972E]/15 mt-auto flex justify-between items-center">
                          {cred.id === "GSA_2026" ? (
                            <span className="font-mono text-[10px] text-[#7A6B55]">
                              // GID: 3150
                            </span>
                          ) : (
                            <span className="font-mono text-[10px] text-[#7A6B55]" />
                          )}
                          
                          <span className="font-mono text-[9px] text-[#C9972E] font-bold flex items-center gap-1.5 hover:text-[#241B10] transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9972E] inline-block animate-pulse"></span>
                            TAP FOR DETAILS 🔄
                          </span>
                        </div>
                      </div>

                      {/* BACK FACE */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#FAF6EC] border-2 border-[#C9972E] p-6 flex flex-col shadow-[0_4px_24px_rgba(201,151,46,0.2)] rounded-xl">
                        <div className="flex justify-between items-start mb-4">
                          <span className="font-mono text-sm font-bold text-[#C9972E]">// PREVIEW_DETAILS</span>
                          <span className="text-[9px] font-mono text-[#7A6B55] bg-[#FFFDF8] border border-[#C9972E]/30 px-2 py-0.5 rounded font-semibold">
                            CLICK TO CLOSE
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-[#241B10] mb-3 font-display">
                          {cred.title}
                        </h3>
                        
                        <p className="text-[#241B10] text-sm leading-relaxed flex-grow font-sans overflow-y-auto no-scrollbar mb-4">
                          {cred.description}
                        </p>
                        
                        <div className="pt-4 border-t border-[#C9972E]/20 mt-auto flex justify-between items-center text-[9px] font-mono text-[#7A6B55]">
                          <span>// SECURE_PREVIEW</span>
                          <span className="text-[#C9972E] font-bold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9972E] inline-block"></span>
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
