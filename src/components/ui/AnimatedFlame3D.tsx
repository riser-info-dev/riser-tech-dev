'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Flame } from 'lucide-react';

interface AnimatedFlame3DProps {
  size?: number;
  className?: string;
}

export function AnimatedFlame3D({ size = 24, className }: AnimatedFlame3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block relative ${className || ''}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Back glow layer - larger, more transparent */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          scale: [1, 1.3, 1.1, 1.2, 1],
          opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
          y: [0, -2, -1, -2, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
        style={{
          transform: 'translateZ(5px)',
        }}
      >
        <Flame 
          className="text-amber-500/40 blur-sm" 
          style={{ width: size * 1.4, height: size * 1.4 }}
        />
      </motion.div>

      {/* Middle glow layer */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          scale: [1, 1.15, 1.05, 1.1, 1],
          opacity: [0.5, 0.8, 0.6, 0.7, 0.5],
          y: [0, -1, -0.5, -1, 0],
          rotateZ: [0, 3, -2, 2, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.3, 0.5, 0.7, 1],
        }}
        style={{
          transform: 'translateZ(10px)',
        }}
      >
        <Flame 
          className="text-amber-400/60 blur-[2px]" 
          style={{ width: size * 1.2, height: size * 1.2 }}
        />
      </motion.div>

      {/* Main flame - front layer */}
      <motion.div
        className="relative flex items-center justify-center"
        style={{
          transform: 'translateZ(20px)',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scaleY: [1, 1.2, 0.95, 1.15, 1.05, 1],
          scaleX: [1, 0.9, 1.1, 0.95, 1.05, 1],
          y: [0, -3, -1, -2, -1.5, 0],
          rotateZ: [0, -5, 3, -3, 2, 0],
          opacity: [1, 0.9, 1, 0.95, 1, 1],
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        }}
      >
        <motion.div
          animate={{
            filter: [
              'drop-shadow(0 0 6px rgba(251, 191, 36, 0.9)) drop-shadow(0 -2px 12px rgba(251, 146, 60, 0.6))',
              'drop-shadow(0 0 10px rgba(251, 191, 36, 1)) drop-shadow(0 -3px 16px rgba(251, 146, 60, 0.8))',
              'drop-shadow(0 0 8px rgba(251, 191, 36, 0.95)) drop-shadow(0 -2px 14px rgba(251, 146, 60, 0.7))',
              'drop-shadow(0 0 9px rgba(251, 191, 36, 1)) drop-shadow(0 -2.5px 15px rgba(251, 146, 60, 0.75))',
              'drop-shadow(0 0 7px rgba(251, 191, 36, 0.9)) drop-shadow(0 -2px 13px rgba(251, 146, 60, 0.65))',
              'drop-shadow(0 0 6px rgba(251, 191, 36, 0.9)) drop-shadow(0 -2px 12px rgba(251, 146, 60, 0.6))',
            ],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
        >
          <Flame 
            className="text-amber-400" 
            style={{ width: size, height: size }}
            fill="currentColor"
          />
        </motion.div>
      </motion.div>

      {/* Spark particles - bright and twinkling */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-visible"
        style={{
          transform: 'translateZ(25px)',
        }}
      >
        {[
          // Large bright sparks - upward
          { x: [0, -1, -3, -5], y: [0, -10, -18, -25], delay: 0, duration: 1.5, size: 2, color: 'bg-yellow-400', glow: 'rgba(250, 204, 21, 0.8)' },
          { x: [0, 1, 3, 5], y: [0, -12, -20, -28], delay: 0.3, duration: 1.8, size: 2.5, color: 'bg-amber-400', glow: 'rgba(251, 191, 36, 0.9)' },
          { x: [0, -0.5, -2, -4], y: [0, -9, -16, -22], delay: 0.6, duration: 1.4, size: 1.5, color: 'bg-orange-400', glow: 'rgba(251, 146, 60, 0.7)' },
          
          // Medium sparks - diagonal left
          { x: [0, -2, -5, -8], y: [0, -8, -14, -20], delay: 0.2, duration: 1.6, size: 1.5, color: 'bg-yellow-300', glow: 'rgba(253, 224, 71, 0.6)' },
          { x: [0, -1.5, -4, -7], y: [0, -7, -13, -18], delay: 0.7, duration: 1.5, size: 2, color: 'bg-amber-300', glow: 'rgba(252, 211, 77, 0.7)' },
          
          // Medium sparks - diagonal right
          { x: [0, 2, 5, 8], y: [0, -8, -14, -20], delay: 0.4, duration: 1.7, size: 1.5, color: 'bg-yellow-300', glow: 'rgba(253, 224, 71, 0.6)' },
          { x: [0, 1.5, 4, 7], y: [0, -7, -13, -18], delay: 0.9, duration: 1.6, size: 2, color: 'bg-amber-300', glow: 'rgba(252, 211, 77, 0.7)' },
          
          // Small fast sparks
          { x: [0, -1, -2, -3], y: [0, -6, -10, -14], delay: 0.1, duration: 1.0, size: 1, color: 'bg-yellow-200', glow: 'rgba(254, 240, 138, 0.5)' },
          { x: [0, 1, 2, 3], y: [0, -6, -10, -14], delay: 0.5, duration: 1.1, size: 1, color: 'bg-yellow-200', glow: 'rgba(254, 240, 138, 0.5)' },
          { x: [0, -0.8, -1.5, -2.5], y: [0, -5, -9, -12], delay: 0.8, duration: 1.2, size: 1, color: 'bg-amber-200', glow: 'rgba(253, 230, 138, 0.5)' },
          { x: [0, 0.8, 1.5, 2.5], y: [0, -5, -9, -12], delay: 1.1, duration: 1.0, size: 1, color: 'bg-amber-200', glow: 'rgba(253, 230, 138, 0.5)' },
        ].map((spark, i) => (
          <motion.div
            key={i}
            className={`absolute ${spark.color} rounded-full`}
            style={{
              left: '50%',
              top: '50%',
              width: `${spark.size * 4}px`,
              height: `${spark.size * 4}px`,
              boxShadow: `0 0 ${spark.size * 4}px ${spark.glow}, 0 0 ${spark.size * 6}px ${spark.glow}`,
            }}
            animate={{
              x: spark.x,
              y: spark.y,
              opacity: [0, 1, 0.9, 0.7, 0.4, 0],
              scale: [0, 1.2, 1, 0.8, 0.5, 0],
            }}
            transition={{
              duration: spark.duration,
              repeat: Infinity,
              delay: spark.delay,
              ease: 'easeOut',
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            }}
          />
        ))}
      </motion.div>

      {/* Additional twinkling sparks - smaller, faster */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-visible"
        style={{
          transform: 'translateZ(30px)',
        }}
      >
        {[
          { x: [0, -1.5, -4], y: [0, -6, -12], delay: 0.15, duration: 0.8, size: 0.8 },
          { x: [0, 1.5, 4], y: [0, -6, -12], delay: 0.45, duration: 0.9, size: 0.8 },
          { x: [0, -1, -3], y: [0, -5, -10], delay: 0.75, duration: 0.7, size: 0.6 },
          { x: [0, 1, 3], y: [0, -5, -10], delay: 1.05, duration: 0.85, size: 0.6 },
          { x: [0, -2, -5], y: [0, -7, -13], delay: 0.25, duration: 0.95, size: 0.7 },
          { x: [0, 2, 5], y: [0, -7, -13], delay: 0.55, duration: 1.0, size: 0.7 },
        ].map((spark, i) => (
          <motion.div
            key={`twinkle-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              left: '50%',
              top: '50%',
              width: `${spark.size * 3}px`,
              height: `${spark.size * 3}px`,
              boxShadow: `0 0 ${spark.size * 4}px rgba(255, 255, 255, 0.9), 0 0 ${spark.size * 6}px rgba(251, 191, 36, 0.6)`,
            }}
            animate={{
              x: spark.x,
              y: spark.y,
              opacity: [0, 1, 1, 0.5, 0],
              scale: [0, 1.5, 1, 0.8, 0],
            }}
            transition={{
              duration: spark.duration,
              repeat: Infinity,
              delay: spark.delay,
              ease: 'easeOut',
              times: [0, 0.3, 0.5, 0.7, 1],
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

