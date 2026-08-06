import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, ArrowRight, ShieldCheck, Lock, Key, UserCheck } from 'lucide-react';

type IntroState = 'idle' | 'extracted' | 'swiping' | 'granted' | 'unlocked';

const IdCardUnlockIntro: React.FC = () => {
  const [introState, setIntroState] = useState<IntroState>('idle');
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const slotTrackRef = useRef<HTMLDivElement>(null);

  // Reset intro on every page refresh (no sessionStorage persistence as requested)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIntroState('unlocked');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        skipIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Web Audio API Beep Synthesizer
  const playBeep = () => {
    if (isAudioMuted) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(800, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.15);
      
      gain1.gain.setValueAtTime(0.15, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      
      osc1.start();
      osc1.stop(ctx.currentTime + 0.2);
    } catch {
      // Audio context fallback
    }
  };

  const handleCardClick = () => {
    if (introState === 'idle') {
      setIntroState('extracted');
    } else if (introState === 'extracted') {
      triggerSwipeSequence();
    }
  };

  const triggerSwipeSequence = () => {
    setIntroState('swiping');
    playBeep();
    
    setTimeout(() => {
      setIntroState('granted');
      
      setTimeout(() => {
        setIntroState('unlocked');
      }, 700);
    }, 600);
  };

  const skipIntro = () => {
    setIntroState('unlocked');
  };

  if (introState === 'unlocked') return null;

  return (
    <AnimatePresence>
      {introState !== 'unlocked' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[100] bg-[#FAF6EC]/96 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden"
        >
          {/* Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
            <span className="text-[25vw] font-display font-black text-[#241B10] uppercase tracking-tighter">
              SECURITY
            </span>
          </div>

          {/* Top Bar Header */}
          <div className="relative z-10 flex justify-between items-center w-full max-w-6xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#C9972E] animate-pulse"></div>
              <span className="font-mono text-xs text-[#C9972E] tracking-widest uppercase font-semibold">
                // AUTHENTICATOR_v2.4
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsAudioMuted(!isAudioMuted)}
                className="p-2 text-[#7A6B55] hover:text-[#C9972E] transition-colors rounded-lg border border-[#C9972E]/20 bg-[#FFFDF8]"
                title={isAudioMuted ? "Unmute Audio" : "Mute Audio"}
                aria-label="Toggle audio feedback"
              >
                {isAudioMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>

              <button
                onClick={skipIntro}
                className="font-mono text-xs text-[#7A6B55] hover:text-[#C9972E] transition-colors px-3 py-1.5 rounded-lg border border-[#C9972E]/30 bg-[#FFFDF8] font-semibold cursor-pointer"
              >
                Skip Intro →
              </button>
            </div>
          </div>

          {/* Center Card Reader Slot Container */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
            <div className="hud-bracket bg-[#FFFDF8] border-2 border-[#C9972E]/40 p-6 sm:p-8 rounded-2xl w-full max-w-sm sm:max-w-md shadow-[0_12px_40px_rgba(120,90,40,0.12)] relative">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-[#C9972E]/20 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      introState === 'granted'
                        ? 'bg-emerald-500 shadow-[0_0_12px_#10B981]'
                        : 'bg-amber-500 animate-pulse'
                    }`}
                  ></div>
                  <span className="font-mono text-[10px] text-[#7A6B55] uppercase font-bold tracking-wider">
                    {introState === 'granted' ? 'STATUS: ACCESS_GRANTED' : 'STATUS: PASS_REQUIRED'}
                  </span>
                </div>
                <div className="font-mono text-[10px] text-[#C9972E] font-bold">
                  // READER_01
                </div>
              </div>

              {/* Reader Slot Track */}
              <div
                ref={slotTrackRef}
                onClick={handleCardClick}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleCardClick();
                }}
                className="w-full h-16 sm:h-20 rounded-xl bg-[#FAF6EC] border-2 border-dashed border-[#C9972E]/40 flex items-center justify-center px-4 relative overflow-hidden cursor-pointer hover:border-[#C9972E] transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9972E]/10 to-transparent animate-pulse pointer-events-none"></div>

                <div className="font-mono text-xs sm:text-sm font-bold text-[#241B10] flex items-center gap-2 relative z-10">
                  {introState === 'idle' && (
                    <>
                      <Lock size={16} className="text-[#C9972E]" />
                      <span className="text-[#7A6B55]">// TAP VISITOR PASS TO EXTRACT</span>
                    </>
                  )}
                  {introState === 'extracted' && (
                    <>
                      <ArrowRight size={16} className="text-[#C9972E] animate-bounce" />
                      <span className="text-[#C9972E]">// DRAG OR TAP PASS TO SWIPE</span>
                    </>
                  )}
                  {introState === 'swiping' && (
                    <span className="text-[#C9972E] animate-pulse">// AUTHENTICATING CLEARANCE...</span>
                  )}
                  {introState === 'granted' && (
                    <>
                      <ShieldCheck size={18} className="text-emerald-600 animate-pulse" />
                      <span className="text-emerald-700 font-extrabold">// CLEARANCE GRANTED!</span>
                    </>
                  )}
                </div>
              </div>

              <div className="font-mono text-[10px] text-[#7A6B55] mt-4 uppercase tracking-wider">
                // PORTFOLIO_SECURITY_AUTHENTICATOR
              </div>
            </div>
          </div>

          {/* Interactive Physical Visitor Access Pass Card */}
          {introState === 'idle' && (
            <motion.div
              initial={{ x: -180 }}
              animate={{ x: -110 }}
              whileHover={{ x: -80 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={handleCardClick}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleCardClick();
              }}
              className="fixed left-0 top-1/2 -translate-y-1/2 z-[110] cursor-pointer group select-none focus:outline-none"
            >
              {/* Visitor Pass Peek Card */}
              <div className="w-64 sm:w-72 hud-bracket bg-[#FFFDF8] p-5 border-2 border-[#C9972E] rounded-2xl shadow-[0_8px_32px_rgba(201,151,46,0.35)] relative transform group-hover:scale-105 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-[#C9972E] bg-gradient-to-br from-[#D9A94A] to-[#B9821F] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <UserCheck size={22} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#241B10]">VISITOR ACCESS PASS</div>
                    <div className="font-mono text-[10px] text-[#C9972E] font-semibold">LEVEL 01 · UNRESTRICTED</div>
                    <div className="font-mono text-[9px] text-[#7A6B55] mt-0.5">// VST-2026-PASS</div>
                  </div>
                </div>

                {/* Floating Tap Hint Badge */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-[#C9972E] text-white text-[9px] font-mono font-bold px-2 py-1 rounded-full shadow-md animate-pulse">
                  <span>SWIPE</span>
                  <ArrowRight size={10} />
                </div>
              </div>
            </motion.div>
          )}

          {introState === 'extracted' && (
            <motion.div
              initial={{ x: -300, y: '-50%', opacity: 0 }}
              animate={{ x: 0, y: '-50%', opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              drag="x"
              dragConstraints={{ left: 0, right: 250 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x > 80 || info.velocity.x > 200) {
                  triggerSwipeSequence();
                }
              }}
              onClick={triggerSwipeSequence}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') triggerSwipeSequence();
              }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 z-[110] cursor-grab active:cursor-grabbing focus:outline-none"
            >
              <div className="w-72 sm:w-80 hud-bracket bg-[#FFFDF8] p-6 border-2 border-[#C9972E] rounded-2xl shadow-[0_12px_40px_rgba(201,151,46,0.4)] relative">
                <div className="flex items-center justify-between border-b border-[#C9972E]/20 pb-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#C9972E]"></div>
                    <span className="font-mono text-[10px] text-[#C9972E] font-bold uppercase">// READY_TO_SWIPE</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#7A6B55]">PASS: VST-2026</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-[#C9972E] bg-gradient-to-br from-[#D9A94A] to-[#B9821F] flex items-center justify-center text-white shrink-0 shadow-md">
                    <Key size={26} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#241B10]">VISITOR CLEARANCE PASS</h3>
                    <p className="font-mono text-xs text-[#C9972E] font-semibold">LEVEL 01 · UNRESTRICTED</p>
                    <p className="font-mono text-[10px] text-[#7A6B55] mt-1">// SWIPE RIGHT →</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {introState === 'swiping' && (
            <motion.div
              initial={{ x: 0, y: '-50%', scale: 1 }}
              animate={{ x: 260, y: '-50%', scale: [1, 1.05, 0.95], rotateZ: [0, -3, 2] }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 z-[110] pointer-events-none"
            >
              <div className="w-72 sm:w-80 hud-bracket bg-[#FFFDF8] p-6 border-2 border-[#C9972E] rounded-2xl shadow-[0_12px_40px_rgba(201,151,46,0.5)]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-[#C9972E] bg-gradient-to-br from-[#D9A94A] to-[#B9821F] flex items-center justify-center text-white shrink-0">
                    <Key size={26} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#241B10]">VISITOR CLEARANCE PASS</h3>
                    <p className="font-mono text-xs text-[#C9972E] font-semibold">// SWIPING PASS...</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {introState === 'granted' && (
            <motion.div
              initial={{ x: 260, y: '-50%', scale: 1 }}
              animate={{ scale: [1, 1.08, 1], opacity: [1, 0.9, 1] }}
              transition={{ duration: 0.4 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 z-[110] pointer-events-none"
            >
              <div className="w-72 sm:w-80 hud-bracket bg-[#FFFDF8] p-6 border-2 border-emerald-500 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-emerald-500 bg-emerald-600 flex items-center justify-center text-white shrink-0">
                    <ShieldCheck size={26} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#241B10]">VISITOR CLEARANCE PASS</h3>
                    <p className="font-mono text-xs text-emerald-600 font-bold">// ACCESS GRANTED!</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Bottom Footer Monospace Label */}
          <div className="relative z-10 w-full max-w-6xl mx-auto flex justify-between items-center text-[10px] font-mono text-[#7A6B55]">
            <span>// MADHAN_KUMAR_PORTFOLIO</span>
            <span>PRESS ESC OR CLICK SKIP TO BYPASS</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IdCardUnlockIntro;
