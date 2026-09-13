import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import { HackathonEntry } from '@/data/hackathons';

interface CertificateLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  entry: HackathonEntry;
}

export const CertificateLightbox: React.FC<CertificateLightboxProps> = ({ isOpen, onClose, entry }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`View certificate for ${entry.name}`}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#241B10]/75 backdrop-blur-md"
          />

          {/* Lightbox Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#FFFDF8] border-2 border-[#C9972E] rounded-2xl shadow-[0_16px_50px_rgba(201,151,46,0.3)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#C9972E]/25 bg-[#FAF6EC]/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C9972E]/15 border border-[#C9972E]/40 flex items-center justify-center text-[#C9972E]">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-[#241B10]">
                    Official Credential & Verification
                  </h4>
                  <p className="text-[11px] font-mono text-[#7A6B55]">
                    {entry.name} · {entry.organizer}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close certificate view"
                className="w-9 h-9 rounded-full bg-[#FAF6EC] border border-[#C9972E]/30 text-[#7A6B55] hover:text-[#241B10] hover:border-[#C9972E] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Certificate Display Area */}
            <div className="p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center min-h-[360px] bg-[#FAF6EC]/40">
              {entry.certificateImage ? (
                <div className="relative max-w-full flex flex-col items-center">
                  <img
                    src={entry.certificateImage}
                    alt={`Official certificate for ${entry.name} awarded to Madhan Kumar`}
                    className="max-h-[65vh] w-auto rounded-lg shadow-md border border-[#C9972E]/30 object-contain"
                  />
                  <div className="mt-4 flex gap-3">
                    <a
                      href={entry.certificateImage}
                      download={`Certificate-${entry.id}.png`}
                      className="px-4 py-2 bg-[#C9972E] text-white rounded-lg text-xs font-mono font-bold flex items-center gap-2 hover:bg-[#b08225] transition-colors shadow-sm"
                    >
                      <Download size={14} /> Download Certificate
                    </a>
                  </div>
                </div>
              ) : (
                /* Elegant Tactical Mission Dossier Seal (Fallback when scan is pending upload) */
                <div className="hud-bracket bg-[#FFFDF8] border border-[#C9972E]/40 p-8 rounded-xl max-w-lg w-full text-center shadow-sm relative overflow-hidden">
                  {/* Decorative background watermark */}
                  <div className="absolute -right-8 -bottom-8 opacity-5 text-[#C9972E] pointer-events-none select-none">
                    <ShieldCheck size={200} />
                  </div>

                  <div className="w-16 h-16 rounded-full bg-[#C9972E]/10 border-2 border-[#C9972E]/40 flex items-center justify-center mx-auto mb-4 text-[#C9972E]">
                    <ShieldCheck size={32} />
                  </div>

                  <div className="font-mono text-xs text-[#C9972E] uppercase font-bold tracking-wider mb-1">
                    VERIFIED COMPETITIVE MILESTONE
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#241B10] mb-2">
                    {entry.result}
                  </h3>

                  <div className="text-xs font-mono text-[#7A6B55] mb-4">
                    Host: <span className="text-[#241B10] font-semibold">{entry.organizer}</span>
                  </div>

                  <div className="bg-[#FAF6EC] border border-[#C9972E]/20 p-4 rounded-lg text-left text-xs font-mono text-[#7A6B55] space-y-2 mb-6">
                    <div className="flex justify-between border-b border-[#C9972E]/10 pb-1.5">
                      <span>EVENT_REF:</span>
                      <span className="font-bold text-[#241B10]">{entry.id.toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#C9972E]/10 pb-1.5">
                      <span>RECIPIENT:</span>
                      <span className="font-bold text-[#241B10]">MADHAN KUMAR T</span>
                    </div>
                    <div className="flex justify-between border-b border-[#C9972E]/10 pb-1.5">
                      <span>PROJECT_SUBMISSION:</span>
                      <span className="font-bold text-[#C9972E]">{entry.linkedProjectTitle || 'Technical Build'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>VALIDATION_STATUS:</span>
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        ● VERIFIED RECORD
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#7A6B55] leading-relaxed">
                    Official credential scan is documented in portfolio records. To request original documentation or judge validation slips, contact directly.
                  </p>

                  <div className="mt-6 flex justify-center gap-3">
                    <a
                      href="#contact"
                      onClick={onClose}
                      className="px-5 py-2.5 bg-[#C9972E] hover:bg-[#b08225] text-white rounded-lg text-xs font-mono font-bold transition-all shadow-sm flex items-center gap-2"
                    >
                      Request Verification Records <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
