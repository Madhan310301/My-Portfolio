import React, { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Trophy, Flame, Sparkles, Zap, CheckCircle2, History } from 'lucide-react';
import SectionWatermark from '../SectionWatermark';
import { HACKATHONS_DATA } from '@/data/hackathons';
import { HackathonCard } from './HackathonCard';

type FilterCategory = 'all' | 'winner' | 'past' | 'ongoing' | 'organizer';

export const HackathonsSection: React.FC = () => {
  const [, setLocation] = useLocation();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredData = useMemo(() => {
    if (activeFilter === 'all') return HACKATHONS_DATA;
    if (activeFilter === 'winner') return HACKATHONS_DATA.filter((h) => h.badgeType === 'winner');
    if (activeFilter === 'past') return HACKATHONS_DATA.filter((h) => h.status === 'Past');
    if (activeFilter === 'ongoing') return HACKATHONS_DATA.filter((h) => h.status === 'Ongoing');
    if (activeFilter === 'organizer') return HACKATHONS_DATA.filter((h) => h.badgeType === 'organizer');
    return HACKATHONS_DATA;
  }, [activeFilter]);

  const counts = useMemo(() => ({
    all: HACKATHONS_DATA.length,
    winner: HACKATHONS_DATA.filter(h => h.badgeType === 'winner').length,
    past: HACKATHONS_DATA.filter(h => h.status === 'Past').length,
    ongoing: HACKATHONS_DATA.filter(h => h.status === 'Ongoing').length,
    organizer: HACKATHONS_DATA.filter(h => h.badgeType === 'organizer').length,
  }), []);

  return (
    <section className="py-24 relative overflow-hidden" id="hackathons">
      <SectionWatermark word="HACK" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-panel"
        >
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#C9972E]/10 rounded-full border border-[#C9972E]/30 shadow-[0_4px_16px_rgba(201,151,46,0.2)]">
                <Flame size={24} className="text-[#C9972E]" />
              </div>
            </div>

            <div className="font-mono text-sm text-[#C9972E] mb-2 font-semibold tracking-wider uppercase">
              // COMPETITIVE_BUILDS_&_EVENT_ARCHIVE
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#241B10]">
              Hackathons & Stuffs
            </h2>

            <p className="text-[#7A6B55] text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Competitive hackathons, state datathons, and developer conclaves where high-stakes briefs were turned into working, hardware-validated prototypes and deployed systems under strict deadlines.
            </p>
          </div>

          {/* Filter Pills Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#C9972E] text-white shadow-[0_4px_12px_rgba(201,151,46,0.3)]'
                  : 'bg-[#FFFDF8] border border-[#C9972E]/30 text-[#7A6B55] hover:border-[#C9972E] hover:text-[#241B10]'
              }`}
            >
              All Builds ({counts.all})
            </button>

            <button
              onClick={() => setActiveFilter('winner')}
              className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeFilter === 'winner'
                  ? 'bg-[#C9972E] text-white shadow-[0_4px_12px_rgba(201,151,46,0.3)]'
                  : 'bg-[#FFFDF8] border border-[#C9972E]/30 text-[#7A6B55] hover:border-[#C9972E] hover:text-[#241B10]'
              }`}
            >
              <Trophy size={13} /> Podiums & Wins ({counts.winner})
            </button>

            <button
              onClick={() => setActiveFilter('past')}
              className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeFilter === 'past'
                  ? 'bg-[#C9972E] text-white shadow-[0_4px_12px_rgba(201,151,46,0.3)]'
                  : 'bg-[#FFFDF8] border border-[#C9972E]/30 text-[#7A6B55] hover:border-[#C9972E] hover:text-[#241B10]'
              }`}
            >
              <History size={13} /> Past Hackathons ({counts.past})
            </button>

            <button
              onClick={() => setActiveFilter('ongoing')}
              className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeFilter === 'ongoing'
                  ? 'bg-[#C9972E] text-white shadow-[0_4px_12px_rgba(201,151,46,0.3)]'
                  : 'bg-[#FFFDF8] border border-[#C9972E]/30 text-[#7A6B55] hover:border-[#C9972E] hover:text-[#241B10]'
              }`}
            >
              <Zap size={13} /> Ongoing Tracks ({counts.ongoing})
            </button>

            <button
              onClick={() => setActiveFilter('organizer')}
              className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeFilter === 'organizer'
                  ? 'bg-[#C9972E] text-white shadow-[0_4px_12px_rgba(201,151,46,0.3)]'
                  : 'bg-[#FFFDF8] border border-[#C9972E]/30 text-[#7A6B55] hover:border-[#C9972E] hover:text-[#241B10]'
              }`}
            >
              <Sparkles size={13} /> GSA & Conclaves ({counts.organizer})
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((entry, index) => (
              <HackathonCard
                key={entry.id}
                entry={entry}
                index={index}
                onClick={() => setLocation(`/hackathons/${entry.id}`)}
              />
            ))}
          </div>

          {/* Interactive Footer Callout */}
          <div className="mt-14 pt-8 border-t border-[#C9972E]/20 text-center">
            <p className="text-xs font-mono text-[#7A6B55]">
              // CLICK ANY MISSION DOSSIER TO OPEN DEDICATED FULL VIEW WITH VIDEOS, GALLERIES & GITHUB REPOS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HackathonsSection;