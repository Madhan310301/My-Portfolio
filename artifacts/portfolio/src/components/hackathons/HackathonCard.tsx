import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Calendar,
  MapPin,
  ArrowUpRight,
  Cpu,
  Shield,
  Sparkles,
  Zap,
  Camera,
  Video,
  Github
} from 'lucide-react';
import { HackathonEntry } from '@/data/hackathons';

interface HackathonCardProps {
  entry: HackathonEntry;
  onClick: () => void;
  index: number;
}

export const HackathonCard: React.FC<HackathonCardProps> = ({ entry, onClick, index }) => {
  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'winner':
        return <Trophy size={13} className="text-[#966b17]" />;
      case 'organizer':
        return <Sparkles size={13} className="text-[#966b17]" />;
      case 'ongoing':
        return <Zap size={13} className="text-[#966b17] animate-pulse" />;
      default:
        return <Shield size={13} className="text-[#966b17]" />;
    }
  };

  const hasPhotos = entry.photos && entry.photos.length > 0;
  const hasVideos = entry.videos && entry.videos.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Open mission dossier for ${entry.name}`}
      className="hud-bracket bg-[#FFFDF8] border border-[#C9972E]/30 hover:border-[#C9972E] rounded-xl p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(120,90,40,0.06)] hover:shadow-[0_8px_30px_rgba(201,151,46,0.18)] flex flex-col justify-between group cursor-pointer text-left relative overflow-hidden"
    >
      <div>
        {/* Header Row: Result Badge + Status + Date */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#C9972E]/15 border border-[#C9972E]/40 text-[#966b17] shadow-sm">
            {getBadgeIcon(entry.badgeType)}
            <span>{entry.tag}</span>
          </span>

          <div className="flex items-center gap-2">
            {entry.status === 'Ongoing' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/15 border border-amber-500/30 text-amber-800">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                ACTIVE
              </span>
            )}
            <span className="text-[11px] font-mono text-[#7A6B55] flex items-center gap-1">
              <Calendar size={12} className="text-[#C9972E]" />
              {entry.date}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-[#241B10] mb-1.5 group-hover:text-[#C9972E] transition-colors leading-snug">
          {entry.name}
        </h3>

        {/* Organizer & Mode */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#7A6B55] mb-3">
          <span className="flex items-center gap-1 line-clamp-1">
            <MapPin size={12} className="text-[#C9972E] shrink-0" />
            <span className="line-clamp-1">{entry.organizer}</span>
          </span>
          <span className="text-[#C9972E]/50">·</span>
          <span className="px-1.5 py-0.5 rounded bg-[#FAF6EC] border border-[#C9972E]/20 text-[10px]">
            {entry.mode}
          </span>
        </div>

        {/* Short Problem / What was built summary */}
        <p className="text-xs text-[#7A6B55] line-clamp-3 leading-relaxed mb-5">
          {entry.whatWeBuilt}
        </p>
      </div>

      {/* Footer / Meta info */}
      <div className="pt-4 border-t border-[#C9972E]/15 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {entry.linkedProjectTitle ? (
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#C9972E] font-bold">
              <Cpu size={12} />
              <span className="line-clamp-1">{entry.linkedProjectTitle}</span>
            </div>
          ) : (
            <span className="text-[11px] font-mono text-[#7A6B55] line-clamp-1">
              {entry.category}
            </span>
          )}

          {/* Media indicator icons */}
          <div className="flex items-center gap-1 pl-1">
            {hasVideos && (
              <span className="p-1 rounded bg-[#C9972E]/10 text-[#C9972E]" title="Video Demo Available">
                <Video size={11} />
              </span>
            )}
            {hasPhotos && (
              <span className="p-1 rounded bg-[#C9972E]/10 text-[#C9972E]" title="Photos Available">
                <Camera size={11} />
              </span>
            )}
            {!hasPhotos && !hasVideos && entry.githubUrl && (
              <span className="p-1 rounded bg-[#241B10]/5 text-[#7A6B55]" title="GitHub Repository Linked">
                <Github size={11} />
              </span>
            )}
          </div>
        </div>

        <div className="w-8 h-8 rounded-full bg-[#FAF6EC] border border-[#C9972E]/30 group-hover:border-[#C9972E] group-hover:bg-[#C9972E] group-hover:text-white flex items-center justify-center text-[#7A6B55] transition-all duration-300 shadow-sm shrink-0">
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};