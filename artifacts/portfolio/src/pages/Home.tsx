import React, { useEffect } from 'react';
import NebulaBackground from '@/components/NebulaBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import ServicesSection from '@/components/ServicesSection';
import SolutionsSection from '@/components/SolutionsSection';
import Credentials from '@/components/Credentials';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

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
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ServicesSection />
        <SolutionsSection />
        <Credentials />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
