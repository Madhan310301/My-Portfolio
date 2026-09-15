import { type PropsWithChildren, type PointerEvent, useRef } from 'react';
import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

export function ScrollReveal({ children, className = '', delay = 0 }: PropsWithChildren<{ className?: string; delay?: number }>) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });
  const reduced = useReducedMotion();
  return (
    <motion.div ref={ref} className={className}
      initial={false}
      animate={{ opacity: reduced || visible ? 1 : 0, y: reduced || visible ? 0 : 40, rotateX: reduced || visible ? 0 : 3 }}
      transition={{ duration: reduced ? 0 : 0.75, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1200 }}
    >{children}</motion.div>
  );
}

export function TiltSurface({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 120, damping: 25 });
  const rotateY = useSpring(y, { stiffness: 120, damping: 25 });
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (reduced || event.pointerType !== 'mouse') return;
    const box = event.currentTarget.getBoundingClientRect();
    x.set(-((event.clientY - box.top) / box.height - 0.5) * 5);
    y.set(((event.clientX - box.left) / box.width - 0.5) * 5);
  };
  return (
    <motion.div className={className} onPointerMove={move} onPointerLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY, transformPerspective: 1200 }}
    >{children}</motion.div>
  );
}
