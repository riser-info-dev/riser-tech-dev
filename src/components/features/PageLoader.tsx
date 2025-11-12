'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '@/lib/constants';
import { useLoading } from '@/contexts/LoadingContext';

export function PageLoader() {
  const { isLoading, setLoading } = useLoading();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Prevent body scroll while loading
    document.body.style.overflow = 'hidden';

    let loadTimer: NodeJS.Timeout | undefined;
    let exitTimer: NodeJS.Timeout | undefined;
    let fallbackTimer: NodeJS.Timeout | undefined;

    const cleanup = () => {
      if (loadTimer) clearTimeout(loadTimer);
      if (exitTimer) clearTimeout(exitTimer);
      if (fallbackTimer) clearTimeout(fallbackTimer);
      document.body.style.overflow = '';
    };

    if (document.readyState === 'complete') {
      loadTimer = setTimeout(() => {
        setIsExiting(true);
        exitTimer = setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = '';
        }, 500);
      }, 1500);
    } else {
      const onLoad = () => {
        loadTimer = setTimeout(() => {
          setIsExiting(true);
          exitTimer = setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = '';
          }, 500);
        }, 1500);
      };
      
      window.addEventListener('load', onLoad);
      // Fallback timer in case load event doesn't fire
      fallbackTimer = setTimeout(() => {
        onLoad();
      }, 2500);
      
      return () => {
        window.removeEventListener('load', onLoad);
        cleanup();
      };
    }

    return cleanup;
  }, [setLoading]);

  if (!isLoading) return null;

  const letters = COMPANY_INFO.name.split('');

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isExiting ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-700 to-amber-900"
          style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
        >
          <div className="text-center">
            {/* Company Name with Simple Animation */}
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  className="text-6xl md:text-8xl font-bold text-white"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 200,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.div>

            {/* Loading Rings */}
            <div className="flex justify-center space-x-2">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-3 h-3 bg-amber-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-6 text-white/70 text-sm uppercase tracking-wider"
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
