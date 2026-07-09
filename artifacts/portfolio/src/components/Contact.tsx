import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage('Message launched! I\'ll respond soon 🚀');
      (e.target as HTMLFormElement).reset();
      
      // Clear toast after 3s
      setTimeout(() => setToastMessage(''), 3000);
    }, 1000);
  };

  return (
    <section className="relative mt-12 bg-card border-t border-white/5 pt-24 pb-12" id="contact">
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-primary"></div>
              <span className="text-primary font-mono text-sm tracking-wider uppercase">— CONTACT</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-[1.1]">
              Got a project, internship, or idea worth building?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-md">
              Reach out directly below, or connect through LinkedIn and GitHub. Open to internships, full-stack roles, AI/ML collaboration, and IoT projects.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#" className="px-6 py-3 border border-white/10 rounded-full text-sm font-bold text-white hover:border-primary hover:bg-primary/10 transition-colors">
                Email
              </a>
              <a href="#" className="px-6 py-3 border border-white/10 rounded-full text-sm font-bold text-white hover:border-[#0077b5] hover:bg-[#0077b5]/10 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="px-6 py-3 border border-white/10 rounded-full text-sm font-bold text-white hover:border-white/50 hover:bg-white/10 transition-colors">
                GitHub
              </a>
              <a href="#" className="px-6 py-3 border border-primary/30 rounded-full text-sm font-bold text-primary hover:bg-primary hover:text-white transition-colors">
                Resume
              </a>
            </div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="hud-bracket bg-[#0A0A0F] p-8 border border-white/10 relative z-10 box-glow">
              <div className="font-mono text-xs text-primary mb-6">// SECURE_CHANNEL_OPEN</div>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-white/50 mb-2 uppercase">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-white/50 mb-2 uppercase">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-white/50 mb-2 uppercase">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-bold py-4 rounded hover:bg-primary/90 transition-all hover:shadow-[0_0_15px_rgba(225,29,72,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-2"
                >
                  {isSubmitting ? 'Transmitting...' : '→ Send Message'}
                </button>

                {toastMessage && (
                  <div className="absolute -bottom-16 left-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-sm py-3 px-4 rounded text-center font-medium animate-in fade-in slide-in-from-bottom-2">
                    {toastMessage}
                  </div>
                )}
              </form>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/5 to-transparent blur-xl -z-10 rounded-lg pointer-events-none"></div>
          </motion.div>

        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="italic text-muted-foreground text-sm">"Every idea starts as a prototype."</p>
          
          <p className="text-xs font-mono text-white/30">© 2025 Madhan Kumar. Built with passion.</p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-mono text-primary hover:text-white transition-colors flex items-center gap-1"
          >
            Back to top ↑
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
