import React, { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices and if user does not prefer reduced motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLargeScreen = window.innerWidth >= 1024;

    if (!isTouch && !prefersReducedMotion && isLargeScreen) {
      setEnabled(true);
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed z-30 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${pos.x - 175}px, ${pos.y - 175}px, 0)`,
        willChange: 'transform',
      }}
      aria-hidden="true"
    >
      <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-cyanAccent/10 via-logoBlue/8 to-gold/10 blur-[90px]" />
    </div>
  );
}
