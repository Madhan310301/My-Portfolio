import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  Trophy,
  MapPin,
  Calendar,
  Users,
  ExternalLink,
  Award,
  ArrowRight,
  CheckCircle2,
  Github,
  Presentation,
  FileText,
  Maximize2
} from 'lucide-react';
import { useLocation } from 'wouter';
import { HackathonEntry } from '@/data/hackathons';
import { ImageGallery } from './ImageGallery';
import { HackathonVideoPlayer } from './HackathonVideoPlayer';
import { CertificateLightbox } from './CertificateLightbox';

interface HackathonDetailModalProps {
  entry: HackathonEntry | null;
  onClose: () => void;
}

export const HackathonDetailModal: React.FC<HackathonDetailModalProps> = ({ entry, onClose }) => {
  const [, setLocation] = useLocation();
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key & manage body scroll lock
  useEffect(() => {
    if (!entry) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isCertificateOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [entry, isCertificateOpen, onClose]);

  if (!entry) return null;

  const hasPhotos = entry.photos && entry.photos.length > 0;
  const hasVideos = entry.videos && entry.videos.length > 0;
  const hasMedia = hasPhotos || hasVideos;

  const handleJumpToProject = () => {
    if (!entry.linkedProjectSlug) return;
    onClose();

    window.dispatchEvent(
      new CustomEvent('select-project', {
        detail: { slug: entry.linkedProjectSlug }
      })
    );
  };

  const handleOpenFullPage = () => {
    onClose();
    setLocation(`/hackathons/${entry.id}`);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hackathon-modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#241B10]/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-5xl my-auto bg-[#FFFDF8] border-2 border-[#C9972E] rounded-2xl shadow-[0_20px_60px_rgba(201,151,46,0.3)] overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Top Bar / Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#C9972E]/25 bg-[#FAF6EC]/90 sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#C9972E]/15 border border-[#C9972E]/40 flex items-center justify-center text-[#C9972E]">
                <Trophy size={18} />
              </div>
              <div>
                <span className="font-mono text-[10px] sm:text-xs text-[#C9972E] font-bold uppercase tracking-wider">
                  MISSION DOSSIER // {entry.id.toUpperCase()}
                </span>
                <h3
                  id="hackathon-modal-title"
                  className="font-display font-bold text-base sm:text-xl text-[#241B10] leading-tight"
                >
                  {entry.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleOpenFullPage}
                title="Open dedicated page view"
                className="w-9 h-9 rounded-full bg-[#FAF6EC] border border-[#C9972E]/30 text-[#7A6B55] hover:text-[#241B10] hover:border-[#C9972E] flex items-center justify-center transition-colors cursor-pointer"
              >
                <Maximize2 size={15} />
              </button>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close detail modal"
                className="w-9 h-9 rounded-full bg-[#FAF6EC] border border-[#C9972E]/30 text-[#7A6B55] hover:text-[#241B10] hover:border-[#C9972E] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1">
            {/* Meta Tags Row */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono">
              <span className="px-3 py-1.5 bg-[#C9972E]/15 border border-[#C9972E]/40 text-[#966b17] font-bold rounded-full flex items-center gap-1.5 shadow-sm">
                <Trophy size={13} /> {entry.result}
              </span>
              <span className="px-3 py-1.5 bg-[#FAF6EC] border border-[#C9972E]/25 text-[#7A6B55] rounded-full flex items-center gap-1.5">
                <Calendar size={13} className="text-[#C9972E]" /> {entry.date}
              </span>
              <span className="px-3 py-1.5 bg-[#FAF6EC] border border-[#C9972E]/25 text-[#7A6B55] rounded-full flex items-center gap-1.5">
                <MapPin size={13} className="text-[#C9972E]" /> {entry.location}
              </span>
              <span className="px-3 py-1.5 bg-[#FAF6EC] border border-[#C9972E]/25 text-[#7A6B55] rounded-full flex items-center gap-1.5">
                <Users size={13} className="text-[#C9972E]" /> {entry.role}
              </span>
            </div>

            {/* Video Player (if videos exist) */}
            {hasVideos && (
              <div className="bg-[#FAF6EC]/40 border border-[#C9972E]/25 rounded-xl p-5">
                <HackathonVideoPlayer videos={entry.videos} eventName={entry.name} />
              </div>
            )}

            {/* Main Details Grid */}
            <div className={`grid grid-cols-1 ${hasMedia || entry.presentationFile || entry.certificateImage ? 'lg:grid-cols-12' : ''} gap-8`}>
              {/* Problem, Solution & Technical Architecture */}
              <div className={`${hasMedia || entry.presentationFile || entry.certificateImage ? 'lg:col-span-7' : 'w-full'} space-y-6`}>
                {/* Host & Category */}
                <div className="border-l-2 border-[#C9972E] pl-4 py-1">
                  <div className="text-xs font-mono text-[#7A6B55]">ORGANIZER / HOST</div>
                  <div className="text-sm font-bold text-[#241B10]">{entry.organizer}</div>
                </div>

                {/* The Challenge */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#C9972E] font-bold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9972E]"></span>
                    THE PROBLEM STATEMENT
                  </h4>
                  <p className="text-sm text-[#7A6B55] leading-relaxed bg-[#FAF6EC]/50 p-4 rounded-xl border border-[#C9972E]/15">
                    {entry.problemStatement}
                  </p>
                </div>

                {/* What Was Built */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#C9972E] font-bold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9972E]"></span>
                    ENGINEERED SOLUTION
                  </h4>
                  <p className="text-sm text-[#241B10] leading-relaxed font-medium bg-[#FFFDF8] p-4 rounded-xl border border-[#C9972E]/25 shadow-sm">
                    {entry.whatWeBuilt}
                  </p>
                </div>

                {/* Technical Highlights */}
                {entry.technicalHighlights.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#C9972E] font-bold mb-2">
                      KEY ARCHITECTURAL HIGHLIGHTS
                    </h4>
                    <ul className="space-y-2">
                      {entry.technicalHighlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#7A6B55]">
                          <CheckCircle2 size={15} className="text-[#C9972E] shrink-0 mt-0.5" />
                          <span className="leading-normal">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions Row */}
                <div className="pt-2 flex flex-wrap gap-3">
                  {entry.githubUrl && (
                    <a
                      href={entry.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 bg-[#241B10] hover:bg-[#342717] text-white rounded-xl text-xs font-mono font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer group"
                    >
                      <Github size={14} />
                      <span>Explore on GitHub</span>
                      <ExternalLink size={12} className="text-[#C9972E]" />
                    </a>
                  )}

                  {entry.linkedProjectSlug && (
                    <button
                      onClick={handleJumpToProject}
                      className="px-5 py-3 bg-gradient-to-r from-[#D9A94A] to-[#B9821F] text-white rounded-xl text-xs font-mono font-bold hover:brightness-105 transition-all shadow-[0_4px_16px_rgba(201,151,46,0.25)] flex items-center gap-2 cursor-pointer group"
                    >
                      <span>Explore {entry.linkedProjectTitle} Case Study</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>

              {/* Media Column (ONLY RENDERED IF PHOTOS, PRESENTATIONS OR CERTIFICATES EXIST) */}
              {(hasPhotos || entry.presentationFile || entry.certificateImage) && (
                <div className="lg:col-span-5 space-y-6">
                  {/* Event Photo Gallery */}
                  {hasPhotos && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#C9972E] font-bold">
                          EVENT PHOTOGRAPHY
                        </h4>
                        <span className="text-[11px] font-mono text-[#7A6B55]">
                          {entry.photos.length} Photo{entry.photos.length > 1 ? 's' : ''}
                        </span>
                      </div>
                      <ImageGallery photos={entry.photos} eventName={entry.name} />
                    </div>
                  )}

                  {/* Presentation File */}
                  {entry.presentationFile && (
                    <div className="hud-bracket bg-[#FAF6EC]/70 p-4 rounded-xl border border-[#C9972E]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Presentation size={16} className="text-[#C9972E]" />
                        <span className="text-xs font-mono text-[#241B10] font-bold uppercase">
                          EVENT PRESENTATION
                        </span>
                      </div>
                      <p className="text-xs text-[#7A6B55] mb-3">
                        Official slides presented to jury.
                      </p>
                      <a
                        href={entry.presentationFile}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-3 bg-[#FFFDF8] hover:bg-[#FAF6EC] border border-[#C9972E]/30 text-[#241B10] rounded-lg text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <FileText size={13} />
                        <span>Download {entry.presentationType?.toUpperCase() || 'Slides'}</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  )}

                  {/* Certificate Showcase Card */}
                  {entry.certificateImage && (
                    <div className="hud-bracket bg-[#FAF6EC]/70 p-5 rounded-xl border border-[#C9972E]/30">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Award size={16} className="text-[#C9972E]" />
                          <span className="text-xs font-mono text-[#241B10] font-bold uppercase">
                            CREDENTIAL DOCUMENTATION
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C9972E]/15 text-[#966b17] font-semibold">
                          VERIFIED
                        </span>
                      </div>

                      <p className="text-xs text-[#7A6B55] mb-4 leading-relaxed">
                        Official recognition issued by {entry.organizer}.
                      </p>

                      <button
                        onClick={() => setIsCertificateOpen(true)}
                        className="w-full py-2.5 px-4 bg-[#FFFDF8] hover:bg-[#FAF6EC] border border-[#C9972E]/40 hover:border-[#C9972E] text-[#241B10] rounded-lg text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <Award size={14} className="text-[#C9972E]" />
                        <span>View Certificate & Credential</span>
                        <ExternalLink size={12} className="text-[#7A6B55]" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Certificate Lightbox */}
      <CertificateLightbox
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        entry={entry}
      />
    </>
  );
};