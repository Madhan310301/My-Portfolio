import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, CheckCircle, Github, Linkedin, FileText, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— Reply to: ${email}`);
    const mailtoUrl = `mailto:maddymadhan3103@gmail.com?subject=${subject}&body=${body}`;

    window.open(mailtoUrl, '_blank');

    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto select-none">
      {/* Massive Centered Headline */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="font-mono text-xs text-[#00d4ff] uppercase tracking-widest font-semibold mb-3">
          // GET IN TOUCH
        </div>

        <h2
          ref={titleRef}
          className="font-display text-[clamp(3rem,6vw,5.5rem)] text-[#f5f5f5] tracking-tight font-bold leading-none uppercase"
        >
          Let's Build Something Real<span className="text-[#00d4ff]">.</span>
        </h2>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Contact Details Panel */}
        <div className="lg:col-span-5 bg-[#0f0f0f] border border-[#1a1a1a] p-8 sm:p-10 rounded-xl flex flex-col justify-between shadow-xl">
          <div className="space-y-8">
            <div>
              <div className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-2 font-semibold">
                EMAIL
              </div>
              <a
                href="mailto:maddymadhan3103@gmail.com"
                className="font-body text-base sm:text-lg text-[#f5f5f5] hover:text-[#00d4ff] transition-colors font-medium flex items-center gap-2"
              >
                <Mail size={18} className="text-[#00d4ff]" />
                <span>maddymadhan3103@gmail.com</span>
              </a>
            </div>

            <div>
              <div className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-2 font-semibold">
                LOCATION
              </div>
              <div className="font-body text-base text-[#f5f5f5] font-medium flex items-center gap-2">
                <MapPin size={18} className="text-[#00d4ff]" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-2 font-semibold">
                AVAILABILITY
              </div>
              <div className="font-body text-sm text-[#f5f5f5] font-medium flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] pulse-dot inline-block" />
                <span>Open to Internships & Freelance</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-8 border-t border-[#1a1a1a] mt-8">
            <div className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-3 font-semibold">
              CONNECT & RESUME
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Madhan310301"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#161616] border border-[#222222] hover:border-[#00d4ff] text-xs font-mono text-[#f5f5f5] hover:text-[#00d4ff] rounded-lg transition-all flex items-center gap-1.5"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/madhankumart"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#161616] border border-[#222222] hover:border-[#00d4ff] text-xs font-mono text-[#f5f5f5] hover:text-[#00d4ff] rounded-lg transition-all flex items-center gap-1.5"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#161616] border border-[#00d4ff]/40 text-xs font-mono text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#080808] rounded-lg transition-all flex items-center gap-1.5"
              >
                <FileText size={14} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Flat Editorial Contact Form */}
        <div className="lg:col-span-7 bg-[#0f0f0f] border border-[#1a1a1a] p-8 sm:p-10 rounded-xl shadow-xl flex flex-col justify-between">
          {isSubmitted ? (
            <div className="my-auto text-center py-12 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff] text-[#00d4ff] flex items-center justify-center mx-auto">
                <CheckCircle size={32} />
              </div>
              <h3 className="font-display text-3xl text-[#f5f5f5] font-bold">
                Message Sent<span className="text-[#00d4ff]">.</span>
              </h3>
              <p className="font-body text-sm text-[#888888]">
                Opening mail client. I will respond to your inquiry shortly!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {errorMsg && (
                <div className="font-mono text-xs text-red-400 bg-red-950/40 border border-red-800/60 p-3 rounded">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block font-mono text-xs text-[#888888] uppercase tracking-wider mb-1">
                  // YOUR NAME
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full bg-transparent border-b border-[#444444] focus:border-[#00d4ff] text-[#f5f5f5] font-body text-base py-3 outline-none transition-colors placeholder:text-[#444444]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[#888888] uppercase tracking-wider mb-1">
                  // YOUR EMAIL
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  className="w-full bg-transparent border-b border-[#444444] focus:border-[#00d4ff] text-[#f5f5f5] font-body text-base py-3 outline-none transition-colors placeholder:text-[#444444]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[#888888] uppercase tracking-wider mb-1">
                  // YOUR MESSAGE
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, idea, or role opportunity..."
                  className="w-full bg-transparent border-b border-[#444444] focus:border-[#00d4ff] text-[#f5f5f5] font-body text-base py-3 outline-none transition-colors placeholder:text-[#444444] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#00d4ff] text-[#080808] font-body text-sm font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,212,255,0.3)] mt-2"
              >
                <span>SEND MESSAGE</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
