import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isPointer = false;
    let isVisible = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable = target.closest('a, button, input, textarea, [role="button"], select');
        const nextIsPointer = !!clickable;
        if (nextIsPointer !== isPointer) {
          isPointer = nextIsPointer;
          if (ringRef.current) {
            ringRef.current.style.width = isPointer ? '44px' : '26px';
            ringRef.current.style.height = isPointer ? '44px' : '26px';
            ringRef.current.style.borderColor = isPointer ? '#FF4D12' : 'rgba(255, 77, 18, 0.45)';
            ringRef.current.style.backgroundColor = isPointer ? 'rgba(255, 77, 18, 0.12)' : 'transparent';
          }
        }
      }
    };

    const follow = () => {
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      if (ringRef.current) {
        const offset = isPointer ? 22 : 13;
        ringRef.current.style.transform = `translate3d(${ringX - offset}px, ${ringY - offset}px, 0)`;
      }

      animId = requestAnimationFrame(follow);
    };

    animId = requestAnimationFrame(follow);

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Inner sharp red dot - Zero React re-render overhead */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 rounded-full bg-[#FF4D12] shadow-[0_0_8px_#FF4D12] opacity-0 will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />

      {/* Trailing smooth glow ring - GPU accelerated translate3d */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#FF4D12]/45 opacity-0 will-change-transform transition-[width,height,background-color,border-color] duration-150 ease-out"
        style={{ width: '26px', height: '26px', transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </>
  );
};
