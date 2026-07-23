import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import NebulaBackground from '@/components/NebulaBackground';
import { ArrowLeft } from 'lucide-react';

const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-[#241B10] font-sans relative selection:bg-[#C9972E]/30 selection:text-[#241B10] py-16 px-6 bg-[#FAF6EC]">
      <NebulaBackground />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-mono text-[#C9972E] font-bold hover:text-[#241B10] mb-8 transition-colors">
          <ArrowLeft size={16} /> // BACK_TO_HOME
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-panel p-8 md:p-12 bg-[#FFFDF8] border border-[#C9972E]/30 shadow-[0_4px_24px_rgba(120,90,40,0.08)] rounded-2xl"
        >
          <div className="mb-10 border-b border-[#C9972E]/20 pb-6">
            <div className="font-mono text-xs text-[#C9972E] font-semibold mb-2">// LEGAL_DOCUMENTATION</div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-[#241B10] mb-4">Terms &amp; Conditions</h1>
            <p className="text-sm text-[#7A6B55] font-mono">Effective Date: 18 July 2026</p>
          </div>

          <div className="max-w-none text-[#7A6B55] text-sm md:text-base leading-relaxed space-y-8 font-sans">
            <p>
              Welcome to <span className="text-[#241B10] font-bold">madhan-developer.vercel.app</span> ("the Site"), owned and operated by Madhan Kumar T ("I", "me", "my"). By accessing or using this Site, you agree to these Terms &amp; Conditions.
            </p>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#241B10] font-display flex items-center gap-2">
                <span className="text-[#C9972E] font-mono text-sm">// 01</span> About This Site
              </h2>
              <p>
                This Site is a personal portfolio showcasing my projects, skills, and work as a developer, and is not a commercial platform or SaaS product.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#241B10] font-display flex items-center gap-2">
                <span className="text-[#C9972E] font-mono text-sm">// 02</span> Intellectual Property
              </h2>
              <p>
                All original content on this Site — including design, layout, code, project write-ups, and media — is my property unless otherwise credited. Third-party libraries and open-source tools used to build this Site remain the property of their respective owners under their own licenses. You may not copy, reproduce, or redistribute this Site's design or content without my written permission.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#241B10] font-display flex items-center gap-2">
                <span className="text-[#C9972E] font-mono text-sm">// 03</span> Use of the Site
              </h2>
              <p>
                You agree to use this Site lawfully and not to attempt to disrupt, hack, scrape at scale, or misuse the Site or its contact form.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#241B10] font-display flex items-center gap-2">
                <span className="text-[#C9972E] font-mono text-sm">// 04</span> Third-Party Links &amp; Services
              </h2>
              <p>
                This Site links to third-party services (e.g., WhatsApp, LinkedIn, GitHub, email, hosting via Vercel). I do not control and am not responsible for the content, privacy practices, or availability of these third-party services. Your use of them is governed by their own terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#241B10] font-display flex items-center gap-2">
                <span className="text-[#C9972E] font-mono text-sm">// 05</span> No Warranty
              </h2>
              <p>
                This Site and its content are provided "as is" without warranties of any kind, express or implied, including accuracy, availability, or fitness for a particular purpose.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#241B10] font-display flex items-center gap-2">
                <span className="text-[#C9972E] font-mono text-sm">// 06</span> Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, I am not liable for any indirect, incidental, or consequential damages arising from your use of this Site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#241B10] font-display flex items-center gap-2">
                <span className="text-[#C9972E] font-mono text-sm">// 07</span> Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of India. If you access this Site from outside India, including the United States, you are responsible for compliance with your local laws; these Terms do not restrict any statutory consumer rights you may have under U.S. state or federal law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#241B10] font-display flex items-center gap-2">
                <span className="text-[#C9972E] font-mono text-sm">// 08</span> Changes to These Terms
              </h2>
              <p>
                I may update these Terms from time to time. The "Effective Date" above reflects the latest revision. Continued use of the Site after changes means you accept the updated Terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#241B10] font-display flex items-center gap-2">
                <span className="text-[#C9972E] font-mono text-sm">// 09</span> Contact
              </h2>
              <p>
                Questions about these Terms? Reach out at{' '}
                <a href="mailto:madhankumartbharathuniv@gmail.com" className="text-[#C9972E] hover:underline font-bold">
                  madhankumartbharathuniv@gmail.com
                </a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
