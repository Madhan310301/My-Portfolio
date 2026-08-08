import { createRoot } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import App from './App';
import './index.css';

// Register GSAP ScrollTrigger plugin globally before any component mounts
gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById('root')!).render(<App />);
