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
              <div className="w-8 h-[2px] bg-primary"></div>
              <span className="text-primary font-mono text-sm tracking-wider uppercase">— WHO I BUILD FOR</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Target Solutions</h2>
          </div>

          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {SOLUTIONS.map((sol, i) => (
              <motion.div
                key={sol}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 border border-white/10 rounded-full text-sm font-bold text-white/80 bg-white/[0.02] hover:border-primary/50 hover:text-white transition-all cursor-default"
              >
                {sol}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
