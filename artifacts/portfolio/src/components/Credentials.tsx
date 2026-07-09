import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const CREDENTIALS = [
  {
    id: "GENESIS_2026",
    year: "2026",
    badgeType: "Hackathon",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
    title: "Genesis Hackathon — Overall 2nd Prize & Domain 1st Prize",
    desc: "Built and presented SafeGuard AI at SRMEEC Chennai. Won both overall and IoT domain category."
  },
  {
    id: "GSA_2026",
    year: "2026",
    badgeType: "Google",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    title: "Google Student Ambassador",
    desc: "Represents Google's developer programs (GDG, Gemini, Cloud) within the campus community."
  },
  {
    id: "HCL_CA_2026",
    year: "2026",
    badgeType: "HCLTech",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    title: "HCLTech Campus Ambassador",
    desc: "Selected to represent HCLTech outreach and campus hiring initiatives."
  },
  {
    id: "BIHER_EC_2024",
    year: "2024–Present",
    badgeType: "Leadership",
    badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    title: "Event Coordinator, BIHER",
    desc: "Plans and runs technical workshops, hackathons, and inter-batch events at BIHER."
  }
];

const Credentials: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#0A0A0F]/50 border-y border-white/5" id="credentials">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(225,29,72,0.2)]">
              <Trophy size={24} className="text-primary" />
            </div>
          </div>
          <div className="font-mono text-sm text-primary mb-2">// WALL OF FAME</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Recognition & Milestones</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CREDENTIALS.map((cred, i) => (
            <motion.div 
              key={cred.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="hud-bracket bg-card p-6 border border-white/10 hover:border-primary/40 transition-colors flex flex-col h-full box-glow group"
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
              
              <p className="text-muted-foreground text-sm flex-grow mb-6">
                {cred.desc}
              </p>
              
              <div className="pt-4 border-t border-white/5 mt-auto">
                <span className="font-mono text-[10px] text-white/30">
                  // ID: {cred.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Credentials;
