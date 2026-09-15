import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', id: 'about' }, { label: 'Work', id: 'projects' },
  { label: 'Skills', id: 'skills' }, { label: 'Services', id: 'services' },
  { label: 'Credentials', id: 'credentials' }, { label: 'Hackathons', id: 'hackathons' },
  { label: 'Education', id: 'education' }, { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-15% 0px -60% 0px' });
    NAV_LINKS.forEach(({ id }) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const key = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    const outside = (event: PointerEvent) => { if (!nav.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener('keydown', key);
    document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', key); document.removeEventListener('pointerdown', outside); };
  }, [open]);

  return (
    <header className="portfolio-header">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav ref={nav} className="portfolio-nav" aria-label="Main navigation">
        <a href="/#hero" className="brand-mark" aria-label="Madhan Kumar home"><span className="brand-monogram">m<span>.</span></span><span>MADHAN KUMAR<span className="brand-subtitle">DEVELOPER & BUILDER</span></span></a>
        <div className="desktop-links">{NAV_LINKS.slice(0, 4).map(link => <a key={link.id} href={`/#${link.id}`} aria-current={active === link.id ? 'location' : undefined}>{link.label}</a>)}</div>
        <div className="nav-actions"><a href="/#contact" className="nav-contact">Let&apos;s connect <ArrowUpRight size={15} /></a><button ref={toggle} type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="portfolio-menu" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} className="nav-menu-button">{open ? <X size={19} /> : <Menu size={19} />}</button></div>
        <AnimatePresence>{open && <motion.div id="portfolio-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="portfolio-menu">{NAV_LINKS.map((link, i) => <a href={`/#${link.id}`} key={link.id} onClick={() => setOpen(false)} aria-current={active === link.id ? 'location' : undefined}><span>{String(i + 1).padStart(2, '0')}</span>{link.label}<ArrowUpRight size={15} /></a>)}<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}><span>CV</span>View resume<ArrowUpRight size={15} /></a></motion.div>}</AnimatePresence>
      </nav>
      <motion.div className="reading-progress" style={{ scaleX: scrollYProgress }} />
    </header>
  );
}
