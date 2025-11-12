'use client';

import { motion } from 'framer-motion';
import { COMPANY_INFO } from '@/lib/constants';

export function AnimatedLogo() {
  const letters = COMPANY_INFO.name.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const letter = {
    hidden: { 
      opacity: 0, 
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex items-center"
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={letter}
          className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent inline-block cursor-default"
          whileHover={{ 
            scale: 1.3,
            rotateY: 360,
            rotateX: 15,
            transition: { duration: 0.6, type: 'spring', stiffness: 300 }
          }}
          animate={{
            y: [0, -8, 0, -4, 0],
            rotateX: [0, 10, -10, 5, 0],
            scale: [1, 1.05, 1, 1.02, 1],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.15,
            },
            rotateX: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.1,
            },
            scale: {
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.12,
            },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        className="ml-2 text-xs text-gray-500"
      >
        Fire & Safety
      </motion.span>
    </motion.div>
  );
}
