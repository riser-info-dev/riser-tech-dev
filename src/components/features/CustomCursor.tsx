'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  opacity: number;
  size: number;
}

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring physics for main cursor
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // Follower cursor (outer ring) - slower spring for trailing effect
  const followerX = useMotionValue(-100);
  const followerY = useMotionValue(-100);
  const followerXSpring = useSpring(followerX, { damping: 25, stiffness: 150, mass: 0.8 });
  const followerYSpring = useSpring(followerY, { damping: 25, stiffness: 150, mass: 0.8 });
  
  // Scale spring for hover effects
  const mainScale = useSpring(1, { damping: 30, stiffness: 300 });
  const followerScale = useSpring(1, { damping: 30, stiffness: 300 });
  
  // Refs
  const hoverTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const lastXRef = useRef<number>(-100);
  const lastYRef = useRef<number>(-100);
  const particleIdRef = useRef<number>(0);

  useEffect(() => {
    const checkTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    const isTouch = checkTouchDevice();
    setIsTouchDevice(isTouch);

    if (isTouch) {
      return;
    }

    // Check if element is interactive
    const isInteractiveElement = (element: HTMLElement | null): boolean => {
      if (!element) return false;
      
      const tagName = element.tagName.toLowerCase();
      const isClickable = 
        tagName === 'a' ||
        tagName === 'button' ||
        element.closest('a, button') !== null ||
        element.hasAttribute('data-card') ||
        element.closest('[data-card]') !== null ||
        element.closest('input, textarea, select') !== null;
      
      return isClickable;
    };

    // Create particle trail
    const createParticle = (x: number, y: number): void => {
      const newParticle: Particle = {
        x,
        y,
        opacity: 0.6,
        size: Math.random() * 3 + 2,
      };
      
      setParticles((prev) => {
        const updated = [...prev, newParticle].slice(-15); // Keep only last 15 particles
        return updated;
      });

      // Fade out particle
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p !== newParticle));
      }, 400);
    };

    const updateCursor = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      // Update cursor position
      cursorX.set(newX);
      cursorY.set(newY);
      followerX.set(newX);
      followerY.set(newY);
      
      // Create particles for trail effect (only when moving significantly)
      const dx = Math.abs(newX - lastXRef.current);
      const dy = Math.abs(newY - lastYRef.current);
      
      if (dx > 2 || dy > 2) {
        // Create particle occasionally for smooth trail
        if (Math.random() > 0.7) {
          createParticle(newX, newY);
        }
      }
      
      lastXRef.current = newX;
      lastYRef.current = newY;
      
      if (!isVisible) setIsVisible(true);
      
      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      
      // Clear previous timeout
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      
      // Debounce hover detection
      hoverTimeoutRef.current = setTimeout(() => {
        const isInteractive = isInteractiveElement(target);
        
        if (isInteractive) {
          setIsHovering(true);
          mainScale.set(1.5);
          followerScale.set(2);
        } else {
          setIsHovering(false);
          mainScale.set(1);
          followerScale.set(1);
        }
      }, 50);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      mainScale.set(0.8);
      followerScale.set(0.9);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      if (isHovering) {
        mainScale.set(1.5);
        followerScale.set(2);
      } else {
        mainScale.set(1);
        followerScale.set(1);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
      setParticles([]);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', updateCursor, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, followerX, followerY, isVisible, isHovering, mainScale, followerScale]);

  // Hide default cursor
  useEffect(() => {
    if (!isTouchDevice && window.matchMedia('(pointer: fine)').matches) {
      document.body.style.cursor = 'none';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [isTouchDevice]);

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return;
    
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, opacity: p.opacity * 0.95 }))
          .filter((p) => p.opacity > 0.1)
      );
    }, 50);

    return () => clearInterval(interval);
  }, [particles.length]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Particle Trail */}
      {particles.map((particle, index) => (
        <motion.div
          key={`particle-${index}`}
          className="fixed top-0 left-0 pointer-events-none z-[99999]"
          style={{
            x: particle.x,
            y: particle.y,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: particle.opacity, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="w-1 h-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(251, 191, 36, 0.6)`,
            }}
          />
        </motion.div>
      ))}

      {/* Follower Cursor (Outer Ring) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{
          x: followerXSpring,
          y: followerYSpring,
          scale: followerScale,
        }}
      >
        <div
          className="w-8 h-8 rounded-full border-2 transition-colors duration-300"
          style={{
            transform: 'translate(-50%, -50%)',
            borderColor: isHovering
              ? 'rgba(251, 191, 36, 0.6)'
              : 'rgba(156, 163, 175, 0.4)',
            boxShadow: isHovering
              ? '0 0 20px rgba(251, 191, 36, 0.4), inset 0 0 20px rgba(251, 191, 36, 0.1)'
              : '0 0 10px rgba(156, 163, 175, 0.2)',
            background: isHovering
              ? 'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%)'
              : 'transparent',
          }}
        />
      </motion.div>

      {/* Main Cursor (Inner Dot) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: mainScale,
        }}
      >
        <div
          className="transition-all duration-300"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Main cursor dot */}
          <div
            className="rounded-full transition-all duration-300"
            style={{
              width: isHovering ? '12px' : '8px',
              height: isHovering ? '12px' : '8px',
              background: isHovering
                ? 'linear-gradient(135deg, rgba(251, 191, 36, 1) 0%, rgba(234, 179, 8, 1) 100%)'
                : 'linear-gradient(135deg, rgba(75, 85, 99, 1) 0%, rgba(55, 65, 81, 1) 100%)',
              boxShadow: isHovering
                ? '0 0 15px rgba(251, 191, 36, 0.8), 0 0 30px rgba(251, 191, 36, 0.4)'
                : '0 0 8px rgba(75, 85, 99, 0.5)',
              border: isHovering
                ? '2px solid rgba(251, 191, 36, 0.3)'
                : '2px solid rgba(255, 255, 255, 0.1)',
            }}
          />
          
          {/* Click ripple effect */}
          {isClicking && (
            <motion.div
              className="absolute rounded-full border-2"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                borderColor: 'rgba(251, 191, 36, 0.6)',
              }}
              initial={{ width: 8, height: 8, opacity: 1 }}
              animate={{ width: 40, height: 40, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          )}
        </div>
      </motion.div>

      {/* Magnetic effect glow when hovering */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[99997]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="rounded-full"
            style={{
              transform: 'translate(-50%, -50%)',
              width: '60px',
              height: '60px',
              background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)',
              filter: 'blur(10px)',
            }}
          />
        </motion.div>
      )}
    </>
  );
}

