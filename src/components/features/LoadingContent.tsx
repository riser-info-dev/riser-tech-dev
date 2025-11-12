'use client';

import { useLoading } from '@/contexts/LoadingContext';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function LoadingContent({ children }: { children: ReactNode }) {
  const { isLoading } = useLoading();

  if (isLoading) {
    return null; // Don't render content at all while loading
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

