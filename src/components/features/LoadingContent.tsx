'use client';

import { useLoading } from '@/contexts/LoadingContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

export function LoadingContent({ children }: { children: ReactNode }) {
  const { isLoading } = useLoading();

  return (
    <AnimatePresence mode="wait">
      {!isLoading && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ 
            minHeight: '100vh',
            backgroundColor: 'var(--background, #f9fafb)' // Match page background to prevent white flash
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

