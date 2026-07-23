import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Code2, Server, Sparkles, PenTool, ShoppingCart, Cpu, Plus, Minus } from 'lucide-react';
import SectionWatermark from './SectionWatermark';

const PROCESS_STAGES = [
  {
    num: "01",
    title: "BRIEFING",
    desc: "Understanding core requirements, target user personas, technical constraints, and desired output metrics for the application or hardware pipeline."
  },
  {
    num: "02",
    title: "RESEARCH",
    desc: "Analyzing pre-existing solutions, evaluating frameworks/models (React vs. Next.js, TensorFlow vs. OpenCV, ESP32 vs. STM32), and charting the data architecture."
  },
  {
    num: "03",
    title: "PROTOTYPING",
    desc: "Building low-fidelity UX wireframing in Figma, designing API schema contracts, and creating proof-of-concept hardware/software test benches."
  },
  {
    num: "04",
    title: "DEVELOPMENT",
    desc: "Writing clean, production-grade frontend & backend code, training/finetuning ML models, and programming microcontroller firmware with strict type-safety."
  },
  {
    num: "05",
    title: "TESTING",
    desc: "Conducting stress tests, edge inference latency benchmarks, hardware sensor telemetry validation, and cross-browser responsiveness checks."
  },
  {
    num: "06",
    title: "LAUNCH",
    desc: "Deploying to Vercel, Netlify, or cloud instances with DNS routing, SSL certificates, CI/CD pipeline triggers, and continuous telemetry monitoring."
  }
];

const SERVICES = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Custom-built sites, not templated",
    waText: "Web Design and Development"
  },
  {
    icon: Code2,
    title: "Web App Development",
    description: "React / Next.js full-stack builds",
    waText: "Web App Development"
  },
  {
    icon: Server,
    title: "Domain & Hosting Setup",
    description: "Registration, DNS, deployment (Vercel/Netlify)",
    waText: "Domain & Hosting Setup"
  },
  {
    icon: Sparkles,
    title: "AI-Powered Features",
    description: "Gemini/GPT integrations, chatbots, AI tooling",
    waText: "AI-Powered Features"
  },
  {
    icon: PenTool,
    title: "Product/UX Design",
    description: "Figma-to-code, design systems",
    waText: "Product/UX Design"
  },
  {
    icon: ShoppingCart,
    title: "Online Store Setup",
    description: "E-commerce storefronts, payment integration",
    waText: "Online Store Setup"
  },
  {
    icon: Cpu,
    title: "IoT & Embedded Projects",
    description: "Sensor pipelines, hardware-software integration",
    waText: "IoT & Embedded Projects"
  }
];

const ServicesSection: React.FC = () => {
  const [openStage, setOpenStage] = useState<string | null>("01");

  const toggleStage = (num: string) => {
    setOpenStage((prev) => (prev === num ? null : num));
  };

  return (
    <section className="py-32 relative overflow-hidden" id="services">
      <SectionWatermark word="SERVICES" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-panel"
        >
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#C9972E]"></div>
              <span className="text-[#C9972E] font-mono text-sm tracking-widest uppercase font-semibold">// WORKFLOW & SERVICES</span>
              <div className="w-8 h-[2px] bg-[#C9972E]"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#241B10] tracking-tight leading-none">
              HOW I <span className="text-transparent" style={{ WebkitTextStroke: '2px #C9972E' }}>BUILD</span>.
            </h2>
            <p className="text-[#7A6B55] text-sm sm:text-base mt-4 font-sans max-w-xl mx-auto">
              From systematic architectural research to high-performance production deployment.
            </p>
          </div>

          {/* Process Stage Accordion */}
          <div className="max-w-4xl mx-auto mb-20 space-y-4">
            <div className="font-mono text-xs text-[#C9972E] mb-4 uppercase tracking-widest font-semibold">// PROCESS_STAGES</div>
            {PROCESS_STAGES.map((stage) => {
              const isOpen = openStage === stage.num;
              return (
                <div 
                  key={stage.num}
                  className={`border transition-all rounded-xl overflow-hidden ${
                    isOpen ? 'border-[#C9972E]/50 bg-[#FFFDF8] shadow-[0_4px_20px_rgba(201,151,46,0.15)]' : 'border-[#C9972E]/20 bg-[#FAF6EC] hover:border-[#C9972E]/40'
                  }`}
                >
                  <button
                    onClick={() => toggleStage(stage.num)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="font-mono text-sm sm:text-base font-bold text-[#C9972E]">{stage.num}</span>
                      <h3 className="text-lg sm:text-2xl font-display font-bold text-[#241B10] tracking-wide">{stage.title}</h3>
                    </div>
                    <div className={`p-2 rounded-full border transition-colors ${isOpen ? 'bg-[#C9972E]/20 border-[#C9972E] text-[#C9972E]' : 'bg-[#FFFDF8] border-[#C9972E]/30 text-[#7A6B55]'}`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 text-[#7A6B55] text-sm leading-relaxed border-t border-[#C9972E]/15">
                          {stage.desc}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Services Cards Header */}
          <div className="mb-8 pt-8 border-t border-[#C9972E]/20">
            <div className="font-mono text-xs text-[#C9972E] mb-2 uppercase tracking-widest font-semibold">// DIRECT_SERVICE_OFFERINGS</div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#241B10]">Solutions You Can Hire Me For</h3>
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              const waMessage = `Hi ! Madhan I have came across your Portfolio and Saw That You provide ${service.waText} , May I know Further Details about it !`;
              const waUrl = `https://wa.me/917598036419?text=${encodeURIComponent(waMessage)}`;
              return (
                <motion.a
                  key={service.title}
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="hud-bracket bg-[#FFFDF8] p-6 border border-[#C9972E]/25 hover:border-[#C9972E] transition-all flex flex-col h-full shadow-[0_4px_20px_rgba(120,90,40,0.06)] group cursor-pointer block rounded-xl"
                >
                  <div className="w-10 h-10 rounded bg-[#C9972E]/10 border border-[#C9972E]/30 flex items-center justify-center mb-5 text-[#C9972E] group-hover:bg-[#C9972E] group-hover:text-white transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[#241B10] mb-3 group-hover:text-[#C9972E] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#7A6B55] text-sm flex-grow mb-4">
                    {service.description}
                  </p>
                  <div className="text-xs font-mono text-[#C9972E] font-bold flex items-center gap-1 group-hover:underline">
                    Inquire via WhatsApp →
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
