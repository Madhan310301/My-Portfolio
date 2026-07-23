import React from 'react';
import { motion } from 'framer-motion';

const SOLUTIONS = [
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
    <section className="py-24 relative" id="solutions">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-panel"
        >
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-[#C9972E]"></div>
              <span className="text-[#C9972E] font-mono text-sm tracking-wider uppercase font-semibold">— WHO I BUILD FOR</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#241B10]">Target Solutions</h2>
          </div>

          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {SOLUTIONS.map((sol, i) => {
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
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 border border-[#C9972E]/30 rounded-full text-sm font-bold text-[#241B10] bg-[#FFFDF8] hover:border-[#C9972E] hover:bg-[#FAF6EC] hover:text-[#C9972E] transition-all cursor-pointer block shadow-sm"
                >
                  {sol}
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
