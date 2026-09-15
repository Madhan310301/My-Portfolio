import React, { useEffect } from 'react';
import NebulaBackground from '@/components/NebulaBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import ServicesSection from '@/components/ServicesSection';
import Credentials from '@/components/Credentials';
import HackathonsSection from '@/components/hackathons/HackathonsSection';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

import SectionErrorBoundary from '@/components/SectionErrorBoundary';

const Home: React.FC = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen text-foreground font-sans relative selection:bg-primary/30 selection:text-primary-foreground">

      <NebulaBackground />
      <Navbar />
      
      <main id="main-content" className="portfolio-main" tabIndex={-1}>
        <SectionErrorBoundary sectionName="Hero">
          <Hero />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="About">
          <About />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Projects">
          <Projects />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Skills">
          <Skills />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Services">
          <ServicesSection />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Credentials">
          <Credentials />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Hackathons">
          <HackathonsSection />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Education">
          <Education />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Contact">
          <Contact />
        </SectionErrorBoundary>
      </main>
    </div>
  );
};

export default Home;
