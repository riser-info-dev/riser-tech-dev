'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '@/lib/constants';
import { useLoading } from '@/contexts/LoadingContext';

export function PageLoader() {
  const { isLoading, setLoading } = useLoading();
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // Prevent body scroll while loading and set background to match loader
    document.body.style.overflow = 'hidden';
    document.body.style.backgroundColor = '#111827'; // Match loader background

    let loadTimer: NodeJS.Timeout | undefined;
    let exitTimer: NodeJS.Timeout | undefined;
    let fallbackTimer: NodeJS.Timeout | undefined;

    const cleanup = () => {
      if (loadTimer) clearTimeout(loadTimer);
      if (exitTimer) clearTimeout(exitTimer);
      if (fallbackTimer) clearTimeout(fallbackTimer);
      document.body.style.overflow = '';
    };

    // Minimum display time: 2.5 seconds to ensure loader is visible
    const MIN_DISPLAY_TIME = 2500;
    const EXIT_DURATION = 400; // Reduced to overlap with content fade-in
    
    if (document.readyState === 'complete') {
      loadTimer = setTimeout(() => {
        setIsExiting(true);
        // Start content fade-in while loader is still fading out
        exitTimer = setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = '';
          // Reset body background after content is visible
          setTimeout(() => {
            document.body.style.backgroundColor = '';
          }, 500);
        }, EXIT_DURATION);
      }, MIN_DISPLAY_TIME);
    } else {
      const onLoad = () => {
        loadTimer = setTimeout(() => {
          setIsExiting(true);
          // Start content fade-in while loader is still fading out
          exitTimer = setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = '';
            // Reset body background after content is visible
            setTimeout(() => {
              document.body.style.backgroundColor = '';
            }, 500);
          }, EXIT_DURATION);
        }, MIN_DISPLAY_TIME);
      };
      
      window.addEventListener('load', onLoad);
      // Fallback timer in case load event doesn't fire - ensure minimum display time
      fallbackTimer = setTimeout(() => {
        onLoad();
      }, MIN_DISPLAY_TIME + 1000);
      
      return () => {
        window.removeEventListener('load', onLoad);
        cleanup();
      };
    }

    return cleanup;
  }, [setLoading, isMounted]);

  if (!isMounted || !isLoading) return null;

  const letters = COMPANY_INFO.name.split('');

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isExiting ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-700 to-amber-900"
          style={{ 
            backgroundColor: '#111827',
            pointerEvents: isLoading ? 'auto' : 'none' 
          }}
        >
          <div className="text-center px-4 sm:px-6 md:px-8">
            {/* Company Name with Simple Animation - Mobile Responsive */}
            <motion.div
              className="flex items-center justify-center mb-4 sm:mb-6 md:mb-8 flex-wrap gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white"
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

            {/* Loading Rings - Mobile Responsive */}
            <div className="flex justify-center space-x-1.5 sm:space-x-2 md:space-x-2.5">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 bg-amber-500 rounded-full"
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

            {/* Loading Text - Mobile Responsive */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-4 sm:mt-5 md:mt-6 text-white/70 text-xs sm:text-sm md:text-base uppercase tracking-wider"
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
