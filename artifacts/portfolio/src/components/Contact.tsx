import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import HireMeButton from './HireMeButton';
import { Mail, ArrowUp } from 'lucide-react';

import SectionWatermark from './SectionWatermark';

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
    
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— Reply to: ${email}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=madhankumartbharathuniv@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');

    setIsSubmitting(false);
    setToastMessage('Opening Gmail — finish sending from there.');
    
    setName('');
    setEmail('');
    setMessage('');
    
    setTimeout(() => setToastMessage(''), 5000);
  };

  return (
    <section className="pt-32 pb-12 relative overflow-hidden" id="contact">
      <SectionWatermark word="CONTACT" />

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-panel mb-16"
        >
          <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: HOW CAN I HELP? */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-[#C9972E]"></div>
                <span className="text-[#C9972E] font-mono text-xs tracking-widest uppercase font-semibold">// GET_IN_TOUCH</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#241B10] mb-6 leading-[0.95]">
                HOW CAN I <br />
                <span className="text-[#C9972E]">HELP?</span>
              </h2>
              
              <p className="text-base sm:text-lg text-[#7A6B55] mb-8 max-w-lg leading-relaxed">
                Got a project, internship opportunity, hackathon collaboration, or custom software build in mind? Let's connect and transform your vision into production-grade systems.
              </p>

              {/* Direct Email CTA Button */}
              <div className="mb-10">
                <a 
                  href="mailto:madhankumartbharathuniv@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D9A94A] to-[#B9821F] text-white font-bold text-sm rounded-full hover:brightness-105 transition-all hover:scale-105 shadow-[0_4px_16px_rgba(201,151,46,0.3)]"
                >
                  <Mail size={18} className="text-white" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>
            
            {/* Social & Contact Pills */}
            <div>
              <div className="font-mono text-xs text-[#7A6B55] mb-4 uppercase tracking-widest font-semibold">// QUICK_CHANNELS</div>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:madhankumartbharathuniv@gmail.com" className="px-5 py-2.5 border border-[#C9972E]/30 rounded-full text-xs font-bold text-[#241B10] bg-[#FFFDF8] hover:border-[#C9972E] hover:bg-[#FAF6EC] transition-colors">
                  Email
                </a>
                <a href="https://linkedin.com/in/madhankumart" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-[#C9972E]/30 rounded-full text-xs font-bold text-[#241B10] bg-[#FFFDF8] hover:border-[#C9972E] hover:bg-[#FAF6EC] transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/Madhan310301" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-[#C9972E]/30 rounded-full text-xs font-bold text-[#241B10] bg-[#FFFDF8] hover:border-[#C9972E] hover:bg-[#FAF6EC] transition-colors">
                  GitHub
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-[#C9972E] rounded-full text-xs font-bold text-[#C9972E] bg-[#FFFDF8] hover:bg-[#C9972E] hover:text-white transition-colors">
                  Resume
                </a>
                <HireMeButton className="px-5 py-2.5 bg-gradient-to-r from-[#D9A94A] to-[#B9821F] text-white rounded-full text-xs font-bold hover:brightness-105 transition-all shadow-[0_2px_10px_rgba(201,151,46,0.3)]" />
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-6">
            <div className="hud-bracket bg-[#FFFDF8] p-6 sm:p-8 border border-[#C9972E]/30 relative z-10 shadow-[0_4px_24px_rgba(120,90,40,0.08)] rounded-xl">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#C9972E]/20">
                <div className="font-mono text-xs text-[#C9972E] font-semibold">// SECURE_TRANSMISSION_FORM</div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-[#7A6B55] mb-2 uppercase font-semibold">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                    }}
                    className={`w-full bg-[#FAF6EC] border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-[#C9972E]/30 focus:border-[#C9972E]'} rounded-lg px-4 py-3 text-[#241B10] placeholder:text-[#7A6B55]/60 focus:outline-none focus:ring-1 focus:ring-[#C9972E] transition-all font-sans text-sm`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <span className="text-red-600 text-xs mt-1 block font-mono">{errors.name}</span>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[#7A6B55] mb-2 uppercase font-semibold">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                    }}
                    className={`w-full bg-[#FAF6EC] border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-[#C9972E]/30 focus:border-[#C9972E]'} rounded-lg px-4 py-3 text-[#241B10] placeholder:text-[#7A6B55]/60 focus:outline-none focus:ring-1 focus:ring-[#C9972E] transition-all font-sans text-sm`}
                    placeholder="name@domain.com"
                  />
                  {errors.email && (
                    <span className="text-red-600 text-xs mt-1 block font-mono">{errors.email}</span>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-[#7A6B55] mb-2 uppercase font-semibold">Message</label>
                  <textarea 
                    id="message" 
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
                    }}
                    rows={4}
                    className={`w-full bg-[#FAF6EC] border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-[#C9972E]/30 focus:border-[#C9972E]'} rounded-lg px-4 py-3 text-[#241B10] placeholder:text-[#7A6B55]/60 focus:outline-none focus:ring-1 focus:ring-[#C9972E] transition-all font-sans text-sm resize-none`}
                    placeholder="Describe your project, timeline, or inquiry..."
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-600 text-xs mt-1 block font-mono">{errors.message}</span>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3 mt-1">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-4 h-4 mt-0.5 accent-[#C9972E] cursor-pointer rounded border-[#C9972E]/30 bg-[#FAF6EC]"
                  />
                  <label htmlFor="consent" className="text-xs text-[#7A6B55] font-sans leading-normal cursor-pointer select-none">
                    I agree to the{' '}
                    <Link to="/privacy" className="text-[#C9972E] hover:underline font-semibold">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link to="/terms" className="text-[#C9972E] hover:underline font-semibold">
                      Terms &amp; Conditions
                    </Link>
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting || !agreed}
                  className="w-full bg-gradient-to-r from-[#D9A94A] to-[#B9821F] text-white font-bold py-3.5 rounded-lg hover:brightness-105 transition-all shadow-[0_4px_16px_rgba(201,151,46,0.3)] disabled:opacity-40 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-2 cursor-pointer text-sm"
                >
                  {isSubmitting ? 'Transmitting...' : '→ Send Message'}
                </button>

                {toastMessage && (
                  <div className="mt-3 bg-green-500/10 border border-green-500/40 text-green-700 text-xs py-2.5 px-4 rounded text-center font-mono animate-in fade-in slide-in-from-bottom-2 font-semibold">
                    {toastMessage}
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </motion.div>

        {/* Footer Navigation & Copyright */}
        <div className="border-t border-[#C9972E]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-mono text-[#7A6B55] flex items-center gap-4 font-medium">
            <a href="#about" className="hover:text-[#C9972E] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#C9972E] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#C9972E] transition-colors">Skills</a>
            <a href="#services" className="hover:text-[#C9972E] transition-colors">Services</a>
            <a href="#credentials" className="hover:text-[#C9972E] transition-colors">Credentials</a>
          </div>
          
          <p className="text-xs font-mono text-[#7A6B55] text-center">
            © {new Date().getFullYear()} Madhan Kumar. All rights reserved. ·{' '}
            <Link to="/terms" className="hover:text-[#C9972E] hover:underline transition-colors">Terms</Link> ·{' '}
            <Link to="/privacy" className="hover:text-[#C9972E] hover:underline transition-colors">Privacy</Link>
          </p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs font-mono text-[#C9972E] font-bold hover:text-[#241B10] transition-colors flex items-center gap-1.5 cursor-pointer bg-[#FFFDF8] border border-[#C9972E]/30 px-3 py-1.5 rounded-full shadow-sm"
          >
            Back to top <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
