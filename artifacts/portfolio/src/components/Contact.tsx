import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import HireMeButton from './HireMeButton';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    const newErrors = { name: '', email: '', message: '' };
    let hasError = false;

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      hasError = true;
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
      hasError = true;
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    setIsSubmitting(true);
    
    // Construct pre-filled Gmail compose URL
    const subject = encodeURIComponent(name);
    const body = encodeURIComponent(`${message}\n\n— Reply to: ${email}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=madhannarayanan.t@gmail.com&su=${subject}&body=${body}`;

    // Open in a new tab
    window.open(gmailUrl, '_blank');

    setIsSubmitting(false);
    setToastMessage('Opening Gmail — finish sending from there.');
    
    // Clear fields
    setName('');
    setEmail('');
    setMessage('');
    
    // Clear toast after 5s
    setTimeout(() => setToastMessage(''), 5000);
  };

  return (
    <section className="py-24 relative mt-12" id="contact">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-panel mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-16">
          
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
              <a href="mailto:madhannarayanan.t@gmail.com" className="px-6 py-3 border border-white/10 rounded-full text-sm font-bold text-white hover:border-primary hover:bg-primary/10 transition-colors">
                Email
              </a>
              <a href="https://linkedin.com/in/madhankumart" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/10 rounded-full text-sm font-bold text-white hover:border-[#0077b5] hover:bg-[#0077b5]/10 transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/Madhan310301" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/10 rounded-full text-sm font-bold text-white hover:border-white/50 hover:bg-white/10 transition-colors">
                GitHub
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-primary/30 rounded-full text-sm font-bold text-primary hover:bg-primary hover:text-white transition-colors">
                Resume
              </a>
              <HireMeButton className="px-6 py-3 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary/90 transition-all hover:shadow-[0_0_15px_rgba(225,29,72,0.5)]" />
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
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-white/50 mb-2 uppercase">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                    }}
                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary transition-all font-sans`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs mt-1 block font-mono">{errors.name}</span>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-white/50 mb-2 uppercase">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                    }}
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary transition-all font-sans`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs mt-1 block font-mono">{errors.email}</span>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-white/50 mb-2 uppercase">Message</label>
                  <textarea 
                    id="message" 
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
                    }}
                    rows={4}
                    className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary transition-all font-sans resize-none`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-400 text-xs mt-1 block font-mono">{errors.message}</span>
                  )}
                </div>
                
                <div className="flex items-start gap-3 mt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-4 h-4 mt-0.5 accent-primary cursor-pointer rounded border-white/10 bg-white/5"
                  />
                  <label htmlFor="consent" className="text-xs text-white/60 font-sans leading-normal cursor-pointer select-none">
                    I agree to the{' '}
                    <Link to="/privacy" className="text-primary hover:underline font-semibold">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link to="/terms" className="text-primary hover:underline font-semibold">
                      Terms &amp; Conditions
                    </Link>
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting || !agreed}
                  className="w-full bg-primary text-white font-bold py-4 rounded hover:bg-primary/90 transition-all hover:shadow-[0_0_15px_rgba(225,29,72,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-2 cursor-pointer"
                >
                  {isSubmitting ? 'Transmitting...' : '→ Send Message'}
                </button>

                {toastMessage && (
                  <div className="mt-4 bg-green-500/20 border border-green-500/50 text-green-400 text-sm py-3 px-4 rounded text-center font-medium animate-in fade-in slide-in-from-bottom-2">
                    {toastMessage}
                  </div>
                )}
              </form>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/5 to-transparent blur-xl -z-10 rounded-lg pointer-events-none"></div>
          </motion.div>

        </div>
      </motion.div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="italic text-muted-foreground text-sm">"Every idea starts as a prototype."</p>
          
          <p className="text-xs font-mono text-white/30">
            © 2025 Madhan Kumar. Built with passion. ·{' '}
            <Link to="/terms" className="hover:text-primary hover:underline transition-colors">Terms</Link> ·{' '}
            <Link to="/privacy" className="hover:text-primary hover:underline transition-colors">Privacy</Link>
          </p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-mono text-primary hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
