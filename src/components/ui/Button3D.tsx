'use client';

import { ButtonHTMLAttributes, ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Button3DProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  disable3D?: boolean;
}

export function Button3D({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disable3D = false,
  ...props
}: Button3DProps) {
  const ref = useRef<HTMLButtonElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disable3D || !ref.current) return;

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
    if (disable3D) return;
    x.set(0);
    y.set(0);
  };

  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';
  
  const variants = {
    primary: 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white shadow-lg hover:shadow-2xl',
    secondary: 'bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white shadow-lg hover:shadow-2xl',
    outline: 'border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={(e) => handleMouseMove(e as React.MouseEvent<HTMLButtonElement>)}
      onMouseLeave={handleMouseLeave}
      style={disable3D ? {} : {
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={disable3D ? {} : { scale: 1.05 }}
      whileTap={disable3D ? {} : { scale: 0.95 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...(props as any)}
    >
      <motion.span
        style={disable3D ? { display: 'block' } : {
          transform: 'translateZ(20px)',
          display: 'block',
        }}
        className="relative z-10"
      >
        {children}
      </motion.span>
      {/* Shine effect */}
      {!disable3D && (
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
        style={{ transform: 'translateZ(10px)' }}
      />
      )}
    </motion.button>
  );
}

