import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Box, Gift, ExternalLink } from 'lucide-react';
import SectionWatermark from './SectionWatermark';

const INTERACTIVE_SOLUTIONS = [
  {
    icon: Sparkles,
    title: "Interactive Invitations",
    tagline: "Digital invites your guests actually explore.",
    description: "Custom digital invitations for weddings, birthdays, and events — built as interactive web pages instead of static images. Guests scroll, tap, and unlock event details, RSVP forms, photo galleries, and countdowns, all wrapped in a design matched to your event's theme.",
    storeUrl: "https://madpixelmp.myshopify.com/"
  },
  {
    icon: Box,
    title: "3D Effectual Invitations",
    tagline: "Invitations with motion — the reveal is part of the gift.",
    description: "A step up from standard interactive invites — these use 3D animation, motion effects, and immersive visuals (think opening envelopes, floating elements, parallax scenes) to turn the invitation itself into a memorable moment before the event even happens.",
    storeUrl: "https://madpixelmp.myshopify.com/"
  },
  {
    icon: Gift,
    title: "Birthday Interactive Digital Gifts",
    tagline: "A birthday surprise they have to unlock.",
    description: "Personalized, passcode-locked birthday experiences — the recipient unlocks a private link that reveals a countdown, a photo memory gallery, a personal letter, and a final surprise, one page at a time. Built individually for each person, not a reused template.",
    storeUrl: "https://madpixelmp.myshopify.com/"
  }
];

const TARGET_AUDIENCES = [
  "Creative Services",
  "Professional Services",
  "Education & Training",
  "Startups & Small Business",
  "Health & Wellness",
  "Events & Communities",
  "Nonprofits & Civic Tech",
  "Personal Brands / Portfolios"
];

const SolutionsSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="solutions">
      <SectionWatermark word="SOLUTIONS" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-panel"
        >
          {/* Main Section Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-[#C9972E]"></div>
              <span className="text-[#C9972E] font-mono text-sm tracking-wider uppercase font-semibold">— FEATURED SOLUTIONS</span>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#241B10]">
                  Interactive Digital Experiences
                </h2>
                <p className="text-[#C9972E] font-mono text-sm mt-2 font-semibold uppercase tracking-wide">
                  Custom Interactive Web Experiences
                </p>
              </div>
              <a
                href="https://madpixelmp.myshopify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#C9972E] hover:bg-[#b08225] text-white text-xs font-mono font-bold rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
              >
                <span>Visit MadPixelMP Store</span>
                <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <p className="text-[#7A6B55] text-base mt-6 max-w-4xl leading-relaxed">
              I design and build fully custom, interactive web experiences — from personalized birthday surprises to animated event invitations. Each one is coded from scratch, not templated, combining passcode-gated reveals, 3D/motion effects, and personalized storytelling to create something the recipient actually engages with instead of just reads.
            </p>
          </div>

          {/* 3 Sub-Offerings Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {INTERACTIVE_SOLUTIONS.map((exp) => {
              const IconComp = exp.icon;
              return (
                <motion.a
                  key={exp.title}
                  href={exp.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="hud-bracket bg-[#FFFDF8] p-6 border border-[#C9972E]/30 hover:border-[#C9972E] transition-all flex flex-col justify-between rounded-xl group cursor-pointer shadow-sm hover:shadow-[0_8px_30px_rgba(201,151,46,0.25)]"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#C9972E]/10 border border-[#C9972E]/30 flex items-center justify-center mb-4 text-[#C9972E] group-hover:bg-[#C9972E] group-hover:text-white transition-all duration-300">
                      <IconComp size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-[#241B10] mb-1 group-hover:text-[#C9972E] transition-colors">
                      {exp.title}
                    </h3>
                    <div className="text-xs font-mono text-[#C9972E] font-semibold mb-3 italic">
                      "{exp.tagline}"
                    </div>
                    <p className="text-[#7A6B55] text-xs leading-relaxed mb-6">
                      {exp.description}
                    </p>
                  </div>

                  <div className="text-xs font-mono text-[#C9972E] font-bold flex items-center gap-1.5 pt-3 border-t border-[#C9972E]/15 group-hover:underline">
                    <span>Explore on MadPixelMP</span>
                    <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Target Solutions Pills */}
          <div className="pt-8 border-t border-[#C9972E]/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px] bg-[#C9972E]"></div>
              <span className="text-[#C9972E] font-mono text-xs tracking-wider uppercase font-semibold">// TARGET_INDUSTRIES_&_AUDIENCES</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
              {TARGET_AUDIENCES.map((sol, i) => {
                const waMessage = `Hi ! Madhan I have came across your Portfolio and saw that you build solutions for ${sol} , May I know Further Details about it !`;
                const waUrl = `https://wa.me/917598036419?text=${encodeURIComponent(waMessage)}`;
                return (
                  <motion.a
                    key={sol}
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="px-6 py-3 border border-[#C9972E]/30 rounded-full text-sm font-bold text-[#241B10] bg-[#FFFDF8] hover:border-[#C9972E] hover:bg-[#FAF6EC] hover:text-[#C9972E] transition-all cursor-pointer block shadow-sm"
                  >
                    {sol}
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
