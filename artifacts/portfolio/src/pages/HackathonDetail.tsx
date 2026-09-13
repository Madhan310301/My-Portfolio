import React, { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Trophy,
  Calendar,
  MapPin,
  Users,
  ExternalLink,
  Github,
  CheckCircle2,
  FileText,
  Presentation,
  Award,
  ArrowRight,
  Shield,
  Sparkles,
  Share2
} from 'lucide-react';
import NebulaBackground from '@/components/NebulaBackground';
import Navbar from '@/components/Navbar';
import { HACKATHONS_DATA, HackathonEntry } from '@/data/hackathons';
import { ImageGallery } from '@/components/hackathons/ImageGallery';
import { HackathonVideoPlayer } from '@/components/hackathons/HackathonVideoPlayer';
import { CertificateLightbox } from '@/components/hackathons/CertificateLightbox';

export const HackathonDetail: React.FC = () => {
  const [, params] = useRoute('/hackathons/:id');
  const hackathonId = params?.id;

  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [hackathonId]);

  const entry: HackathonEntry | undefined = HACKATHONS_DATA.find(
    (h) => h.id.toLowerCase() === hackathonId?.toLowerCase()
  );

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleJumpToProject = () => {
    if (!entry?.linkedProjectSlug) return;
    window.dispatchEvent(
      new CustomEvent('select-project', {
        detail: { slug: entry.linkedProjectSlug }
      })
    );
  };

  if (!entry) {
    return (
      <div className="min-h-screen text-foreground font-sans relative selection:bg-primary/30 selection:text-primary-foreground">
        <NebulaBackground />
        <Navbar />
        <main className="container mx-auto px-4 py-32 text-center relative z-10">
          <div className="max-w-md mx-auto hud-bracket bg-[#FFFDF8] border border-[#C9972E]/30 p-8 rounded-2xl shadow-lg">
            <Shield size={40} className="text-[#C9972E] mx-auto mb-4" />
            <h2 className="text-2xl font-display font-bold text-[#241B10] mb-2">
              Mission Dossier Not Found
            </h2>
            <p className="text-xs text-[#7A6B55] mb-6 font-mono">
              The requested hackathon archive &apos;{hackathonId}&apos; could not be retrieved from flight records.
            </p>
            <Link
              href="/#hackathons"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9972E] text-white rounded-xl text-xs font-mono font-bold hover:bg-[#b08225] transition-colors"
            >
              <ArrowLeft size={14} />
              Return to Hackathons
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const hasPhotos = entry.photos && entry.photos.length > 0;
  const hasVideos = entry.videos && entry.videos.length > 0;
  const hasMedia = hasPhotos || hasVideos;

  return (
    <div className="min-h-screen text-foreground font-sans relative selection:bg-primary/30 selection:text-primary-foreground">
      <NebulaBackground />
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 pt-28 pb-24 relative z-10 max-w-5xl">
        {/* Navigation & Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/#hackathons"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFFDF8] border border-[#C9972E]/30 hover:border-[#C9972E] text-xs font-mono font-bold text-[#241B10] shadow-sm transition-all hover:-translate-x-0.5 cursor-pointer"
          >
            <ArrowLeft size={15} className="text-[#C9972E]" />
            <span>Back to Hackathons</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-[#7A6B55] hidden sm:inline-block">
              DOSSIER // {entry.id.toUpperCase()}
            </span>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFDF8] border border-[#C9972E]/30 text-xs font-mono text-[#7A6B55] hover:text-[#241B10] transition-colors cursor-pointer"
              title="Copy share link"
            >
              <Share2 size={13} className="text-[#C9972E]" />
              <span>{copiedLink ? 'Copied URL!' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Hero Mission Dossier Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="hud-bracket bg-[#FFFDF8] border-2 border-[#C9972E]/40 rounded-2xl p-6 sm:p-8 mb-8 shadow-[0_8px_32px_rgba(201,151,46,0.12)] relative overflow-hidden"
        >
          {/* Top Row: Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#C9972E]/15 border border-[#C9972E]/40 text-[#966b17] shadow-sm">
              <Trophy size={14} />
              <span>{entry.result}</span>
            </span>

            {entry.status === 'Ongoing' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 border border-amber-500/40 text-amber-800 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                ACTIVE SPRINT
              </span>
            )}

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#FAF6EC] border border-[#C9972E]/25 text-[#7A6B55]">
              <span>MODE: {entry.mode.toUpperCase()}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#FAF6EC] border border-[#C9972E]/25 text-[#7A6B55]">
              <Calendar size={13} className="text-[#C9972E]" />
              <span>{entry.date}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#FAF6EC] border border-[#C9972E]/25 text-[#7A6B55]">
              <MapPin size={13} className="text-[#C9972E]" />
              <span>{entry.location}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#FAF6EC] border border-[#C9972E]/25 text-[#7A6B55]">
              <Users size={13} className="text-[#C9972E]" />
              <span>{entry.role}</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#241B10] mb-3 leading-tight">
            {entry.name}
          </h1>

          <div className="text-xs font-mono text-[#7A6B55] mb-2 flex items-center gap-2">
            <span className="text-[#C9972E] font-bold">ORGANIZER:</span>
            <span>{entry.organizer}</span>
          </div>
        </motion.div>

        {/* Content Layout */}
        <div className="space-y-8">
          {/* IF MEDIA EXISTS: RENDER VIDEO PLAYER & PHOTO GALLERY */}
          {hasMedia && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Video Player */}
              {hasVideos && (
                <div className="bg-[#FFFDF8] border border-[#C9972E]/30 rounded-2xl p-6 shadow-sm">
                  <HackathonVideoPlayer videos={entry.videos} eventName={entry.name} />
                </div>
              )}

              {/* Photo Gallery & Presentations */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {hasPhotos && (
                  <div className={entry.presentationFile || entry.certificateImage ? 'lg:col-span-8' : 'lg:col-span-12'}>
                    <div className="bg-[#FFFDF8] border border-[#C9972E]/30 rounded-2xl p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xs font-mono uppercase tracking-wider text-[#C9972E] font-bold">
                          EVENT PHOTOGRAPHY & STAGE ARCHIVE
                        </h3>
                        <span className="text-[11px] font-mono text-[#7A6B55]">
                          {entry.photos.length} Verified Photos
                        </span>
                      </div>
                      <ImageGallery photos={entry.photos} eventName={entry.name} />
                    </div>
                  </div>
                )}

                {/* Artifacts Side Column (Presentations & Certificate) */}
                {(entry.presentationFile || entry.certificateImage) && (
                  <div className="lg:col-span-4 space-y-4">
                    {/* Presentation File (PDF / PPTX) */}
                    {entry.presentationFile && (
                      <div className="hud-bracket bg-[#FFFDF8] border border-[#C9972E]/30 p-5 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-2.5 mb-2">
                          <Presentation size={18} className="text-[#C9972E]" />
                          <h4 className="text-xs font-mono font-bold text-[#241B10] uppercase">
                            EVENT PRESENTATION
                          </h4>
                        </div>
                        <p className="text-xs text-[#7A6B55] mb-4 leading-relaxed">
                          Official slides presented to jury and attendees.
                        </p>
                        <a
                          href={entry.presentationFile}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-4 bg-[#FAF6EC] hover:bg-[#C9972E] text-[#241B10] hover:text-white border border-[#C9972E]/30 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                        >
                          <FileText size={14} />
                          <span>Download {entry.presentationType?.toUpperCase() || 'Slides'}</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    )}

                    {/* Certificate Card */}
                    {entry.certificateImage && (
                      <div className="hud-bracket bg-[#FFFDF8] border border-[#C9972E]/30 p-5 rounded-2xl shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Award size={18} className="text-[#C9972E]" />
                            <h4 className="text-xs font-mono font-bold text-[#241B10] uppercase">
                              CREDENTIAL
                            </h4>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C9972E]/15 text-[#966b17] font-semibold">
                            VERIFIED
                          </span>
                        </div>
                        <p className="text-xs text-[#7A6B55] mb-4 leading-relaxed">
                          Official certificate issued by {entry.organizer}.
                        </p>
                        <button
                          onClick={() => setIsCertificateOpen(true)}
                          className="w-full py-2.5 px-4 bg-[#FFFDF8] hover:bg-[#FAF6EC] border border-[#C9972E]/40 hover:border-[#C9972E] text-[#241B10] rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                        >
                          <Award size={14} className="text-[#C9972E]" />
                          <span>Inspect Certificate</span>
                          <ExternalLink size={12} className="text-[#7A6B55]" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* TECHNICAL SPECIFICATIONS & ARCHITECTURE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left: Problem & Engineered Solution */}
            <div className={hasMedia ? 'lg:col-span-7 space-y-6' : 'lg:col-span-12 space-y-6'}>
              <div className="bg-[#FFFDF8] border border-[#C9972E]/30 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                {/* The Problem Statement */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#C9972E] font-bold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9972E]"></span>
                    THE PROBLEM STATEMENT
                  </h3>
                  <p className="text-sm text-[#7A6B55] leading-relaxed bg-[#FAF6EC]/60 p-4 rounded-xl border border-[#C9972E]/15 font-sans">
                    {entry.problemStatement}
                  </p>
                </div>

                {/* The Engineered Solution */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#C9972E] font-bold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9972E]"></span>
                    ENGINEERED SOLUTION & PROTOTYPE
                  </h3>
                  <p className="text-sm text-[#241B10] leading-relaxed font-medium bg-[#FFFDF8] p-4 rounded-xl border border-[#C9972E]/25 shadow-sm">
                    {entry.whatWeBuilt}
                  </p>
                </div>

                {/* Key Architectural Highlights */}
                {entry.technicalHighlights.length > 0 && (
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#C9972E] font-bold mb-3">
                      KEY ARCHITECTURAL HIGHLIGHTS
                    </h3>
                    <ul className="space-y-2.5">
                      {entry.technicalHighlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#7A6B55]">
                          <CheckCircle2 size={15} className="text-[#C9972E] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Right: GitHub Redirection & Project Link (or Full Width when no media) */}
            <div className={hasMedia ? 'lg:col-span-5 space-y-6' : 'lg:col-span-12 space-y-6'}>
              {/* GITHUB REDIRECTION CARD - PROMINENT FOR ALL, ESSENTIAL FOR NO-MEDIA BUILDS */}
              {entry.githubUrl && (
                <div className="hud-bracket bg-[#FAF6EC]/80 border-2 border-[#C9972E]/50 rounded-2xl p-6 shadow-[0_6px_24px_rgba(201,151,46,0.12)]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#241B10] text-[#FAF6EC] flex items-center justify-center shadow-sm">
                      <Github size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#C9972E] font-bold uppercase tracking-wider">
                        OPEN SOURCE CODEBASE
                      </div>
                      <h4 className="font-display font-bold text-base text-[#241B10]">
                        GitHub Repository & Docs
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-[#7A6B55] mb-5 leading-relaxed">
                    Inspect the full production code, circuit schematics, API endpoints, benchmarks, and README documentation directly on GitHub.
                  </p>

                  <a
                    href={entry.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-5 bg-[#241B10] hover:bg-[#342717] text-white rounded-xl text-xs font-mono font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <Github size={15} />
                    <span>Explore on GitHub</span>
                    <ExternalLink size={13} className="text-[#C9972E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              )}

              {/* Cross-Link to Project Section */}
              {entry.linkedProjectSlug && (
                <div className="bg-[#FFFDF8] border border-[#C9972E]/30 rounded-2xl p-6 shadow-sm">
                  <div className="text-[10px] font-mono text-[#C9972E] font-bold uppercase tracking-wider mb-1">
                    PORTFOLIO FLIGHT LOG
                  </div>
                  <h4 className="font-display font-bold text-base text-[#241B10] mb-2">
                    {entry.linkedProjectTitle} Interactive Case Study
                  </h4>
                  <p className="text-xs text-[#7A6B55] mb-4 leading-relaxed">
                    View full feature breakdowns, architecture diagrams, and milestones in the portfolio project orbit.
                  </p>
                  <Link
                    href="/#projects"
                    onClick={handleJumpToProject}
                    className="w-full py-3 px-5 bg-gradient-to-r from-[#D9A94A] to-[#B9821F] text-white rounded-xl text-xs font-mono font-bold hover:brightness-105 transition-all shadow-[0_4px_16px_rgba(201,151,46,0.25)] flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>View Project Dossier</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Fullscreen Certificate Lightbox */}
      <CertificateLightbox
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        entry={entry}
      />
    </div>
  );
};

export default HackathonDetail;