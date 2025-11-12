'use client';

import { Flame, Droplet } from 'lucide-react';
import { motion } from 'framer-motion';

interface FireWaterLogoProps {
  size?: number;
  className?: string;
}

export function FireWaterLogo({ size = 24, className }: FireWaterLogoProps) {
  
  return (
    <div className={`relative inline-flex items-center justify-center ${className || ''}`} style={{ width: size + 10, height: size + 10 }}>
      {/* Water droplets - positioned diagonally around fire */}
      {[
        { angle: -30, distance: size * 0.5, delay: 0, size: 0.28 },
        { angle: 30, distance: size * 0.5, delay: 0.4, size: 0.28 },
        { angle: 150, distance: size * 0.48, delay: 0.2, size: 0.26 },
        { angle: -150, distance: size * 0.48, delay: 0.6, size: 0.26 },
      ].map((drop, i) => {
        const rad = (drop.angle * Math.PI) / 180;
        const x = Math.cos(rad) * drop.distance;
        const y = Math.sin(rad) * drop.distance;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [`${x}px`, `${x}px`, `${x}px`],
              y: [`${y}px`, `${y - 1}px`, `${y}px`],
              opacity: [0.4, 0.65, 0.4],
              scale: [0.9, 1.05, 0.9],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              delay: drop.delay,
              ease: 'easeInOut',
            }}
          >
            <Droplet 
              className="text-blue-400/60" 
              style={{ width: size * drop.size, height: size * drop.size }}
            />
          </motion.div>
        );
      })}

      {/* Main fire icon - center */}
      <motion.div
        className="relative z-10"
        animate={{
          scale: [1, 1.015, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Flame 
          className="text-amber-400" 
          style={{ 
            width: size, 
            height: size,
            filter: 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.4))',
          }}
          fill="currentColor"
        />
      </motion.div>
    </div>
  );
}

