import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Don't render on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let animId;

    const onMove = (e) => {
      dotX = e.clientX;
      dotY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    const interactives = 'a, button, [role="button"], input, textarea, label, select, .btn-primary, .btn-secondary, .skill-icon-wrapper';

    const attachListeners = () => {
      document.querySelectorAll(interactives).forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    // Re-attach on DOM mutations (dynamic content)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    attachListeners();

    // Smooth ring follow with lerp
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      ringX = lerp(ringX, dotX, 0.12);
      ringY = lerp(ringY, dotY, 0.12);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener('mousemove', onMove);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.querySelectorAll(interactives).forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Dot — precise pointer */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: hovered ? '10px' : '7px',
          height: hovered ? '10px' : '7px',
          marginLeft: hovered ? '-5px' : '-3.5px',
          marginTop: hovered ? '-5px' : '-3.5px',
          borderRadius: '50%',
          background: '#00d4b4',
          boxShadow: '0 0 8px rgba(0,212,180,0.9)',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.2s, height 0.2s, background 0.2s, margin 0.2s',
          willChange: 'transform',
        }}
      />
      {/* Ring — smooth follower */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: hovered ? '44px' : '32px',
          height: hovered ? '44px' : '32px',
          marginLeft: hovered ? '-22px' : '-16px',
          marginTop: hovered ? '-22px' : '-16px',
          borderRadius: '50%',
          border: `1.5px solid ${hovered ? '#a78bfa' : '#00d4b4'}`,
          boxShadow: hovered
            ? '0 0 16px rgba(167,139,250,0.4)'
            : '0 0 10px rgba(0,212,180,0.25)',
          background: hovered ? 'rgba(167,139,250,0.06)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 99998,
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, margin 0.25s ease',
          willChange: 'transform',
        }}
      />
    </>
  );
}
