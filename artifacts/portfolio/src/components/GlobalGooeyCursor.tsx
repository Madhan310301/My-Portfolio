import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  initialRadius: number;
  maxLife: number;
  life: number;
  vx: number;
  vy: number;
}

const GlobalGooeyCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const isLoopRunningRef = useRef<boolean>(false);
  const lastSpawnTimeRef = useRef<number>(0);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const currentPosRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Disable on touch devices for maximum mobile performance
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Cap DPR at 1.5 for ultra-fast GPU rendering
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const startLoop = () => {
      if (!isLoopRunningRef.current) {
        isLoopRunningRef.current = true;
        let lastTime = performance.now();

        const render = (time: number) => {
          const dt = time - lastTime;
          lastTime = time;

          const ctx = canvas.getContext('2d');
          const particles = particlesRef.current;

          if (ctx) {
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (particles.length === 0 && !currentPosRef.current) {
              isLoopRunningRef.current = false;
              return; // Stop animation loop when idle to save GPU/CPU 100%
            }

            ctx.save();
            ctx.scale(dpr, dpr);

            // Draw trailing liquid particles with GPU shadow blur for smooth liquid effect
            for (let i = particles.length - 1; i >= 0; i--) {
              const p = particles[i];
              p.life += dt;

              if (p.life >= p.maxLife) {
                particles.splice(i, 1);
                continue;
              }

              p.x += p.vx;
              p.y += p.vy;

              const lifeRatio = p.life / p.maxLife;
              const progress = lifeRatio < 0.2 ? 0 : (lifeRatio - 0.2) / 0.8;
              const currentRadius = Math.max(0, p.initialRadius * (1 - progress * 0.8));
              const opacity = Math.max(0, 1 - progress);

              ctx.save();
              ctx.globalAlpha = opacity * 0.85;
              ctx.beginPath();
              ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
              ctx.fillStyle = '#C9972E';
              ctx.shadowColor = 'rgba(201, 151, 46, 0.4)';
              ctx.shadowBlur = 12;
              ctx.fill();
              ctx.restore();
            }

            // Draw lead cursor point
            if (currentPosRef.current) {
              ctx.beginPath();
              ctx.arc(currentPosRef.current.x, currentPosRef.current.y, 18, 0, Math.PI * 2);
              ctx.fillStyle = '#C9972E';
              ctx.shadowColor = 'rgba(201, 151, 46, 0.6)';
              ctx.shadowBlur = 14;
              ctx.fill();
            }

            ctx.restore();
          }

          animFrameRef.current = requestAnimationFrame(render);
        };

        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    const handlePointerMove = (e: MouseEvent | PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      currentPosRef.current = { x, y };

      startLoop();

      const now = performance.now();
      if (now - lastSpawnTimeRef.current < 24) return; // Throttled spawn rate for smooth flow
      lastSpawnTimeRef.current = now;

      const particles = particlesRef.current;
      if (particles.length > 20) {
        particles.splice(0, particles.length - 20); // Cap at 20 particles
      }

      let speed = 0;
      if (lastPosRef.current) {
        const dx = x - lastPosRef.current.x;
        const dy = y - lastPosRef.current.y;
        speed = Math.sqrt(dx * dx + dy * dy);
      }
      lastPosRef.current = { x, y };

      const baseRadius = Math.min(Math.max(speed * 0.3 + 16, 18), 32);

      particles.push({
        x,
        y,
        radius: baseRadius,
        initialRadius: baseRadius,
        maxLife: Math.random() * 200 + 600, // 0.6s - 0.8s
        life: 0,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    };

    const handlePointerLeave = () => {
      currentPosRef.current = null;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden select-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default GlobalGooeyCursor;
