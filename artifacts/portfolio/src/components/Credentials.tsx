import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [activePressedId, setActivePressedId] = useState<string | null>(null);
  const holdTimerRef = useRef<any>(null);

  const startPress = (id: string, e: React.PointerEvent) => {
    // Only respond to primary button (usually left click / touch)
    if (e.button !== 0 && e.pointerType === 'mouse') return;

    if (holdTimerRef.current) clearTimeout(holdTimerRef.current);

    holdTimerRef.current = setTimeout(() => {
      setActivePressedId(id);
    }, 200);
  };

  const endPress = () => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
    setActivePressedId(null);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!holdTimerRef.current && !activePressedId) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;

    // Check if coordinates went out of bounds of the card
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      endPress();
    }
  };

  // Prevent vertical scrolling on mobile touchmove when a card is actively pressed
  useEffect(() => {
    if (activePressedId) {
      const preventDefault = (e: TouchEvent) => {
        e.preventDefault();
      };
      window.addEventListener('touchmove', preventDefault, { passive: false });
      return () => {
        window.removeEventListener('touchmove', preventDefault);
      };
    }
  }, [activePressedId]);

  // Handle safety cleanups: unmount and window blur
  useEffect(() => {
    const handleBlur = () => {
      setActivePressedId(null);
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current);
        holdTimerRef.current = null;
      }
    };
    window.addEventListener('blur', handleBlur);
    return () => {
      window.removeEventListener('blur', handleBlur);
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current);
        holdTimerRef.current = null;
      }
    };
  }, []);

  return (
    <section className="py-24 relative" id="credentials">
      {/* Full-screen backdrop dimmer when a card is pressed */}
      <AnimatePresence>
        {activePressedId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm pointer-events-auto"
            onPointerUp={endPress}
          />
        )}
      </AnimatePresence>

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
              const isPressed = activePressedId === cred.id;
              return (
                <motion.div 
                  key={cred.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  animate={isPressed ? { scale: 1.03 } : { scale: 1 }}
                  className={`hud-bracket bg-card p-6 border transition-all flex flex-col h-full box-glow group select-none touch-pan-y ${
                    isPressed ? 'z-50 border-primary/60 shadow-[0_0_25px_rgba(225,29,72,0.3)] relative' : 'border-white/10 hover:border-primary/40 relative'
                  }`}
                  style={{
                    WebkitTouchCallout: 'none',
                    userSelect: 'none'
                  }}
                  onPointerDown={(e) => startPress(cred.id, e)}
                  onPointerUp={endPress}
                  onPointerCancel={endPress}
                  onPointerLeave={endPress}
                  onPointerMove={handlePointerMove}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-sm font-bold text-primary">{cred.year}</span>
                    <span className={`text-xs px-2.5 py-1 rounded-full border ${cred.badgeColor}`}>
                      {cred.badgeType}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {cred.title}
                  </h3>
                  
                  <div className="relative flex-grow mb-6 min-h-[72px]">
                    <AnimatePresence mode="wait">
                      {isPressed ? (
                        <motion.p
                          key="long"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.15 }}
                          className="text-white text-sm leading-relaxed font-sans"
                        >
                          {cred.description}
                        </motion.p>
                      ) : (
                        <motion.p
                          key="short"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.15 }}
                          className="text-muted-foreground text-sm"
                        >
                          {cred.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div className="pt-4 border-t border-white/5 mt-auto flex justify-between items-center">
                    {cred.id === "GSA_2026" ? (
                      <span className="font-mono text-[10px] text-white/30">
                        // GID: 3150
                      </span>
                    ) : (
                      <span className="font-mono text-[10px] text-white/30" />
                    )}
                    
                    {isPressed ? (
                      <span className="font-mono text-[9px] text-green-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-ping"></span>
                        ACTIVE PREVIEW
                      </span>
                    ) : (
                      <span className="font-mono text-[9px] text-primary/70 flex items-center gap-1.5 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                        HOLD TO PREVIEW
                      </span>
                    )}
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
