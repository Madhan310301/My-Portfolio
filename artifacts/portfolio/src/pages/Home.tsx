import React, { useState } from 'react';
import PageLoader from '@/components/PageLoader';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import Philosophy from '@/sections/Philosophy';
import Projects from '@/sections/Projects';
import Achievements from '@/sections/Achievements';
import Experience from '@/sections/Experience';
import Contact from '@/sections/Contact';
import Footer from '@/components/Footer';
import { useLenis } from '@/hooks/useLenis';

const Home: React.FC = () => {
  const [loaderDone, setLoaderDone] = useState(false);

  // Initialize Lenis smooth scroll physics connected to GSAP ScrollTrigger
  useLenis();

  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f5f5] font-body selection:bg-[#00d4ff]/30 selection:text-[#00d4ff] relative overflow-x-hidden">
      {/* 1. Page Loader Overlay */}
      {!loaderDone && (
        <PageLoader onComplete={() => setLoaderDone(true)} />
      )}

      {/* 2. Top Minimal Navigation Bar */}
      <Navbar />

      {/* 3. Main V2 Cinematic Sections */}
      <main className="relative z-10">
        <Hero loaderDone={loaderDone} />
        <Philosophy />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </main>

      {/* 4. Minimal Footer */}
      <Footer />
    </div>
  );
};

export default Home;
