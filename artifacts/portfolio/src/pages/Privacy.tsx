import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import NebulaBackground from '@/components/NebulaBackground';
import { ArrowLeft } from 'lucide-react';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-foreground font-sans relative selection:bg-primary/30 selection:text-primary-foreground py-16 px-6">
      <NebulaBackground />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-white mb-8 transition-colors">
          <ArrowLeft size={16} /> // BACK_TO_MISSION_CONTROL
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-panel p-8 md:p-12"
        >
          <div className="mb-10 border-b border-white/10 pb-6">
            <div className="font-mono text-xs text-primary mb-2">// LEGAL_DOCUMENTATION</div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-sm text-white/40 font-mono">Effective Date: 18 July 2026</p>
          </div>

          <div className="prose prose-invert max-w-none text-muted-foreground text-sm md:text-base leading-relaxed space-y-8 font-sans">
            <p>
              This Privacy Policy explains what information this Site collects when you use the contact form, and how it's used.
            </p>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <span className="text-primary font-mono text-sm">// 01</span> Information I Collect
              </h2>
              <p>
                When you submit the Contact form, I collect:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your name</li>
                <li>Your email address</li>
                <li>The message you send me</li>
              </ul>
              <p>
                I do not collect payment information, government IDs, or sensitive personal data through this Site. Standard technical data (like your browser type or general location) may be collected automatically by my hosting provider (Vercel) for security and performance purposes — I do not access this separately for tracking you.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <span className="text-primary font-mono text-sm">// 02</span> How I Use Your Information
              </h2>
              <p>
                Your information is used solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Respond to your inquiry, project request, or internship/collaboration message</li>
                <li>Keep a record of past conversations for my own reference</li>
              </ul>
              <p>
                I do not sell, rent, or share your information with third parties for marketing purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <span className="text-primary font-mono text-sm">// 03</span> Third-Party Services
              </h2>
              <p>
                If you choose to contact me via WhatsApp, LinkedIn, GitHub, or email links on this Site, those platforms have their own privacy policies governing that interaction — this Policy only covers data submitted directly through this Site's contact form.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <span className="text-primary font-mono text-sm">// 04</span> Data Retention
              </h2>
              <p>
                I retain contact form submissions only as long as needed to respond to you and keep basic records, and delete them on request (see Section 6).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <span className="text-primary font-mono text-sm">// 05</span> Your Rights
              </h2>
              <p>
                <span className="text-white font-semibold">If you are in India:</span> Under the Digital Personal Data Protection Act, 2023 and IT Act, 2000 (including the SPDI Rules, 2011), you have the right to access, correct, or request deletion of your personal data, and to withdraw consent at any time.
              </p>
              <p>
                <span className="text-white font-semibold">If you are in the United States:</span> Depending on your state of residence, you may have rights to know what personal information is collected, request its deletion, and opt out of its sale or sharing — this Site does not sell or share your information with third parties in any case.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <span className="text-primary font-mono text-sm">// 06</span> Exercising Your Rights
              </h2>
              <p>
                To access, correct, or delete your information, email me at{' '}
                <a href="mailto:madhankumartbharathuniv@gmail.com" className="text-primary hover:underline font-semibold">
                  madhankumartbharathuniv@gmail.com
                </a>{' '}
                with your request. I'll respond within a reasonable time.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <span className="text-primary font-mono text-sm">// 07</span> Security
              </h2>
              <p>
                I take reasonable measures to protect information submitted through this Site, but no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <span className="text-primary font-mono text-sm">// 08</span> Children's Privacy
              </h2>
              <p>
                This Site is not directed at children under 16, and I do not knowingly collect information from children under 16.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <span className="text-primary font-mono text-sm">// 09</span> Changes to This Policy
              </h2>
              <p>
                I may update this Privacy Policy from time to time. The "Effective Date" above reflects the latest revision.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <span className="text-primary font-mono text-sm">// 10</span> Contact
              </h2>
              <p>
                Questions about this Privacy Policy? Reach out at{' '}
                <a href="mailto:madhankumartbharathuniv@gmail.com" className="text-primary hover:underline font-semibold">
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

export default Privacy;
