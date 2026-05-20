import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-blue/50 pointer-events-none z-[100] mix-blend-multiply hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.5,
        }}
      />
      {/* Inner Dot / Hover State */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] mix-blend-multiply hidden md:block"
        animate={{
          x: isHovering ? mousePosition.x - 24 : mousePosition.y === 0 ? mousePosition.x : mousePosition.x - 4,
          y: isHovering ? mousePosition.y - 24 : mousePosition.y === 0 ? mousePosition.y : mousePosition.y - 4,
          scale: isHovering ? 1 : 1,
          width: isHovering ? 48 : 8,
          height: isHovering ? 48 : 8,
          backgroundColor: isHovering ? 'rgba(52, 211, 153, 0.4)' : 'rgba(16, 185, 129, 1)',
          backdropFilter: isHovering ? 'blur(4px)' : 'none',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
          mass: 0.2,
        }}
      >
        {isHovering && (
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-display font-medium text-emerald-950 tracking-widest uppercase">
            Interact
          </div>
        )}
      </motion.div>
    </>
  );
}
