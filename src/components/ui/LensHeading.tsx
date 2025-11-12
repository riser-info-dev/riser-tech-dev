'use client';

import { ReactNode, useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface LensHeadingProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  magnify?: number;
}

export function LensHeading({
  children,
  className = '',
  as: Component = 'h2',
  magnify = 2.2,
}: LensHeadingProps) {
  const headingRef = useRef<HTMLElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0, localX: 0, localY: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  const lensX = useMotionValue(0);
  const lensY = useMotionValue(0);
  
  // Smooth spring for lens position
  const lensXSpring = useSpring(lensX, { damping: 25, stiffness: 250 });
  const lensYSpring = useSpring(lensY, { damping: 25, stiffness: 250 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!headingRef.current || !isHovering) return;

      const rect = headingRef.current.getBoundingClientRect();
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;

      // Check if cursor is within heading bounds
      if (localX >= -10 && localX <= rect.width + 10 && localY >= -10 && localY <= rect.height + 10) {
        setIsVisible(true);
        setLensPosition({ 
          x: e.clientX, 
          y: e.clientY,
          localX,
          localY,
        });
        lensX.set(e.clientX);
        lensY.set(e.clientY);
      } else {
        setIsVisible(false);
      }
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsVisible(false);
    };

    if (headingRef.current) {
      const heading = headingRef.current;
      heading.addEventListener('mousemove', handleMouseMove);
      heading.addEventListener('mouseenter', handleMouseEnter);
      heading.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        heading.removeEventListener('mousemove', handleMouseMove);
        heading.removeEventListener('mouseenter', handleMouseEnter);
        heading.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [isHovering, lensX, lensY]);

  // Get the heading element based on the 'as' prop
  const HeadingComponent = Component as any;
  const lensSize = 140;

  return (
    <>
      <HeadingComponent
        ref={headingRef}
        className={`relative inline-block ${className}`}
        style={{ cursor: 'none' }}
      >
        {children}
      </HeadingComponent>

      {/* Lens Effect */}
      {isVisible && isHovering && headingRef.current && (
        <>
          {/* Lens Glass - Circular magnifier with glassmorphism */}
          <motion.div
            className="fixed pointer-events-none z-[99999]"
            style={{
              x: lensXSpring,
              y: lensYSpring,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Outer Lens Ring with Glow */}
            <div
              className="rounded-full relative"
              style={{
                width: `${lensSize}px`,
                height: `${lensSize}px`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Outer Glow Ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-amber-400/60"
                style={{
                  boxShadow: `
                    0 0 0 3px rgba(251, 191, 36, 0.2),
                    0 0 40px rgba(251, 191, 36, 0.4),
                    0 0 80px rgba(251, 191, 36, 0.2),
                    inset 0 0 60px rgba(251, 191, 36, 0.1)
                  `,
                }}
              />

              {/* Glass Lens Surface */}
              <div
                className="absolute inset-2 rounded-full overflow-hidden"
                style={{
                  background: `
                    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(251, 191, 36, 0.05) 100%)
                  `,
                  backdropFilter: 'blur(8px) saturate(180%)',
                  border: '2px solid rgba(251, 191, 36, 0.3)',
                  boxShadow: `
                    inset 0 2px 10px rgba(255, 255, 255, 0.3),
                    inset 0 -2px 10px rgba(0, 0, 0, 0.1),
                    0 0 20px rgba(251, 191, 36, 0.3)
                  `,
                }}
              >
                {/* Magnified Text Reflection - creates the illusion of magnification */}
                <div
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `
                      translate(-50%, -50%) 
                      translate(${-lensPosition.localX + (headingRef.current?.offsetWidth || 0) / 2}px, ${-lensPosition.localY + (headingRef.current?.offsetHeight || 0) / 2}px)
                      scale(${magnify})
                    `,
                    pointerEvents: 'none',
                    whiteSpace: 'nowrap',
                    filter: 'brightness(1.1) contrast(1.2)',
                  }}
                >
                  <div 
                    className="font-bold"
                    style={{
                      color: 'inherit',
                      fontSize: 'inherit',
                    }}
                  >
                    {children}
                  </div>
                </div>

                {/* Lens Reflection Highlights */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: '40px',
                    height: '40px',
                    top: '20%',
                    left: '25%',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 70%)',
                    filter: 'blur(8px)',
                  }}
                />
              </div>

              {/* Lens Handle - Decorative */}
              <motion.div
                className="absolute"
                style={{
                  left: 'calc(50% + 65px)',
                  top: 'calc(50% + 65px)',
                  transform: 'translate(-50%, -50%) rotate(45deg)',
                  width: '6px',
                  height: '35px',
                  background: 'linear-gradient(180deg, rgba(251, 191, 36, 0.9) 0%, rgba(234, 179, 8, 0.7) 100%)',
                  borderRadius: '3px',
                  boxShadow: '0 2px 8px rgba(251, 191, 36, 0.5)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Ambient Glow Effect */}
          <motion.div
            className="fixed pointer-events-none z-[99998]"
            style={{
              x: lensXSpring,
              y: lensYSpring,
            }}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 0.4, scale: 2 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className="rounded-full"
              style={{
                width: '250px',
                height: '250px',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.25) 0%, rgba(251, 191, 36, 0.1) 40%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />
          </motion.div>
        </>
      )}
    </>
  );
}

