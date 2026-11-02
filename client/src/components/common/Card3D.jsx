import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const Card3D = ({
  children,
  className = '',
  maxTilt = 12,
  scaleOnHover = 1.02,
  showGlare = true,
  glowColor = 'rgba(56, 189, 248, 0.15)',
  ...props
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Spring physics for butter-smooth tilt animation
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate relative mouse position (0 to 100%)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const percentX = (mouseX / width) * 100;
    const percentY = (mouseY / height) * 100;
    setMousePos({ x: percentX, y: percentY });

    // Calculate rotation (-maxTilt to +maxTilt)
    const rY = ((mouseX - width / 2) / (width / 2)) * maxTilt;
    const rX = -((mouseY - height / 2) / (height / 2)) * maxTilt;

    rotateX.set(rX);
    rotateY.set(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scale.set(scaleOnHover);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    setMousePos({ x: 50, y: 50 });
  };

  return (
    <div className="perspective-1000">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: isHovered ? 'preserve-3d' : 'flat',
        }}
        className={`relative transition-shadow duration-300 ${isHovered ? 'card-3d-glow' : ''} ${className}`}
        {...props}
      >
        {/* Dynamic Interactive Glare Spotlight */}
        {showGlare && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[inherit] z-30 transition-opacity duration-300 overflow-hidden"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, ${glowColor}, transparent 40%)`,
            }}
          />
        )}

        {/* Card Content with 3D Depth capability */}
        <div className={`relative z-10 w-full h-full ${isHovered ? 'preserve-3d' : ''}`}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Card3D;
