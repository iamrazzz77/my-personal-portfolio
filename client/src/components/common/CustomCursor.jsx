import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Smooth spring physics for lag-free motion
  const cursorX = useSpring(-100, { stiffness: 400, damping: 28 });
  const cursorY = useSpring(-100, { stiffness: 400, damping: 28 });

  const ringX = useSpring(-100, { stiffness: 150, damping: 20 });
  const ringY = useSpring(-100, { stiffness: 150, damping: 20 });

  useEffect(() => {
    // Detect if device supports touch to gracefully disable custom cursor on mobile
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e) => {
      setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('.card-3d-glow') ||
        target.closest('[role="button"]');

      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Glowing Cyber Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-sky-400/60 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.9)' : 'rgba(56, 189, 248, 0.5)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      />

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 8 : 6,
          height: isHovered ? 8 : 6,
        }}
      />
    </>
  );
};

export default CustomCursor;
