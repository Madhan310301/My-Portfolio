import { Component, lazy, Suspense, useRef, type PropsWithChildren } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, MapPin } from 'lucide-react';
import profilePhoto from '@assets/Professional_Photo_1783621096294.jpeg';
import { TiltSurface } from './ScrollReveal';

const PortfolioScene = lazy(() => import('./PortfolioScene'));

function StaticSculpture() {
  return <div className="static-sculpture" aria-hidden="true"><i /><i /><i /></div>;
}

class SceneBoundary extends Component<PropsWithChildren, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <StaticSculpture /> : this.props.children; }
}

export default function Hero() {
  const hero = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const active = useInView(hero);
  const { scrollYProgress } = useScroll({ target: hero, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return (
    <>
      <section ref={hero} id="hero" className="portfolio-hero">
        <div className="hero-topline"><span>INDEPENDENT DEVELOPER & CREATIVE THINKER</span><span><MapPin size={12} /> CHENNAI, INDIA</span></div>
        <div className="hero-composition">
          <motion.div className="hero-copy" style={{ y: reduced ? 0 : textY }}>
            <div className="hero-intro"><span className="status-dot" /> Hello, I&apos;m Madhan Kumar</div>
            <h1>Turning ideas<br />into <span className="hero-serif">impact.</span><span className="hero-title-dot">*</span></h1>
            <p className="hero-description">Full-stack developer. AI explorer. IoT builder.<br />I connect thoughtful design with real engineering<br className="hidden sm:block" /> to build things that make a difference.</p>
            <div className="hero-actions">
              <a href="#projects" className="editorial-button">Explore my work <ArrowUpRight size={17} /></a>
              <a href="#contact" className="editorial-text-link">Let&apos;s talk <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/Madhan310301" target="_blank" rel="noopener noreferrer" aria-label="Madhan on GitHub"><Github size={17} /></a>
              <a href="https://linkedin.com/in/madhankumart" target="_blank" rel="noopener noreferrer" aria-label="Madhan on LinkedIn"><Linkedin size={17} /></a>
              <span className="social-divider" />
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download CV <ArrowDown size={13} /></a>
            </div>
          </motion.div>
          <div className="hero-art">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <span className="art-cross cross-one" aria-hidden="true">+</span><span className="art-cross cross-two" aria-hidden="true">+</span>
            <div className="sculpture-stage" aria-hidden="true">
              {reduced ? <StaticSculpture /> : <SceneBoundary><Suspense fallback={<StaticSculpture />}><PortfolioScene progress={scrollYProgress} active={active} /></Suspense></SceneBoundary>}
            </div>
            <div className="art-caption"><span>01 — THE INTERSECTION</span><span>DESIGN × CODE × CURIOSITY</span></div>
            <motion.div className="hero-identity" style={{ y: reduced ? 0 : portraitY }}>
              <TiltSurface className="identity-card">
                <img src={profilePhoto} alt="Madhan Kumar, full-stack developer" width={68} height={80} fetchPriority="high" />
                <div><span className="identity-eyebrow">THE PERSON BEHIND THE CODE</span><strong>Madhan Kumar</strong><span>B.Tech CSE · BIHER, Chennai</span><a href="#about">A little about me <ArrowUpRight size={12} /></a></div>
              </TiltSurface>
            </motion.div>
            <div className="art-footnote"><span className="status-dot" /> {reduced ? 'DESIGNED WITH INTENTION' : 'SCROLL TO SET THINGS IN MOTION'}</div>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#about" className="scroll-cue"><span className="scroll-cue-icon"><ArrowDownRight size={21} /></span><span>GOOD THINGS<br />ARE JUST BELOW</span></a>
          <div className="hero-stats">{[{ value: '25+', label: 'Projects shipped' }, { value: '25+', label: 'Skills mapped' }, { value: '9.5', label: 'Current CGPA' }].map(stat => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
          <span className="hero-edition">PORTFOLIO — VOL. 2026</span>
        </div>
      </section>
      <div className="expertise-band" aria-label="Areas of expertise"><span>FULL-STACK DEVELOPMENT</span><i aria-hidden="true">✳</i><span>ARTIFICIAL INTELLIGENCE</span><i aria-hidden="true">✳</i><span>INTERNET OF THINGS</span><i aria-hidden="true">✳</i><span>THOUGHTFUL EXPERIENCES</span></div>
      <div className="hero-context container mx-auto px-6"><span className="section-index">A LITTLE CONTEXT</span><p>I&apos;m a 3rd-year B.Tech Computer Science student at BIHER who loves building real, working systems. From hackathon-winning IoT safety wearables to cross-modal AI, I&apos;ve shipped 25+ projects successfully.</p><div><span>Currently building full-stack, AI, and IoT systems — one prototype at a time.</span><span>Training predictive ML models for the AI Financial Coach.</span><span>Optimizing edge inference latency for IoT healthcare wearables.</span></div></div>
    </>
  );
}
