'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Scroll3DProps {
  children: ReactNode;
  className?: string;
}

export function Scroll3D({ children, className }: Scroll3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        opacity,
        scale,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

