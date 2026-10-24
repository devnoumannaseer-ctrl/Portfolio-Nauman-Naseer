import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive particle count (fewer on mobile)
    const particleCount = width < 768 ? 35 : 75;
    const maxDistance = width < 768 ? 90 : 130;
    const mouseRadius = 140;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Mouse interaction: gentle repulsion
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius && dist > 0) {
            const force = (mouseRadius - dist) / mouseRadius;
            p.x += (dx / dist) * force * 1.8;
            p.y += (dy / dist) * force * 1.8;
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        // Netflix Red and silver-white mixed particles
        if (i % 4 === 0) {
          ctx.fillStyle = `rgba(229, 9, 20, ${p.alpha * 0.9})`;
        } else {
          ctx.fillStyle = `rgba(240, 240, 245, ${p.alpha * 0.5})`;
        }
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            // If one of the particles is Netflix Red, tint the line red
            if (i % 4 === 0 || j % 4 === 0) {
              ctx.strokeStyle = `rgba(229, 9, 20, ${lineAlpha * 1.1})`;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha * 0.8})`;
            }
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep dark base overlay */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#FF4D12]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-[#FF4D12]/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Subtle tech grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Interactive Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-40" />

      {/* Vignette border shading */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,8,8,0.75)_100%)]" />
    </div>
  );
};
