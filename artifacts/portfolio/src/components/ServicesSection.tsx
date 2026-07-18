import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code2, Server, Sparkles, PenTool, ShoppingCart, Cpu } from 'lucide-react';

const SERVICES = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Custom-built sites, not templated"
  },
  {
    icon: Code2,
    title: "Web App Development",
    description: "React / Next.js full-stack builds"
  },
  {
    icon: Server,
    title: "Domain & Hosting Setup",
    description: "Registration, DNS, deployment (Vercel/Netlify)"
  },
  {
    icon: Sparkles,
    title: "AI-Powered Features",
    description: "Gemini/GPT integrations, chatbots, AI tooling"
  },
  {
    icon: PenTool,
    title: "Product/UX Design",
    description: "Figma-to-code, design systems"
  },
  {
    icon: ShoppingCart,
    title: "Online Store Setup",
    description: "E-commerce storefronts, payment integration"
  },
  {
    icon: Cpu,
    title: "IoT & Embedded Projects",
    description: "Sensor pipelines, hardware-software integration"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 relative" id="services">
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
              <span className="text-primary font-mono text-sm tracking-wider uppercase">— SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Service Offerings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="hud-bracket bg-card p-6 border border-white/10 hover:border-primary/40 transition-colors flex flex-col h-full box-glow group"
                >
                  <div className="w-10 h-10 rounded bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-grow">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
