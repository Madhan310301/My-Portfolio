import { useEffect, useRef } from 'react';

export default function GlobalGooeyCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const allowed = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    const move = (event: PointerEvent) => {
      if (!cursor.current || !allowed.matches) return;
      cursor.current.style.opacity = '1';
      cursor.current.style.transform = `translate3d(${event.clientX - 15}px, ${event.clientY - 15}px, 0)`;
    };
    const hide = () => { if (cursor.current) cursor.current.style.opacity = '0'; };
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);
    allowed.addEventListener('change', hide);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
      allowed.removeEventListener('change', hide);
    };
  }, []);
  return <div ref={cursor} className="portfolio-cursor" aria-hidden="true" />;
}
