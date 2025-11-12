'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ConeSlideDesignProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export function ConeSlideDesign({
  images,
  autoPlay = true,
  autoPlayInterval = 5000,
  className = '',
}: ConeSlideDesignProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  if (images.length === 0) return null;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Massive Container with Clean White Background */}
      <div className="relative w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-[400px] md:h-[450px] lg:h-[500px]">
        {/* Clean White Background - No Blue */}
        <div className="absolute inset-0 bg-white rounded-3xl">
          {/* Subtle Shadow for Depth */}
          <div 
            className="absolute inset-0 rounded-3xl"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)',
            }}
          />

          {/* Massive Static Oval Frame - Prominent and Clean */}
          <div className="absolute inset-4 md:inset-6 lg:inset-8 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Outer White Oval Border - Thick and Prominent */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: 'ellipse(90% 80% at 50% 50%)',
                }}
              >
                {/* Main White Border - Thick */}
                <div 
                  className="absolute inset-0 rounded-full border-[8px] md:border-[10px] lg:border-[12px] border-white"
                  style={{
                    borderRadius: '50%',
                    clipPath: 'ellipse(90% 80% at 50% 50%)',
                    boxShadow: `
                      0 0 0 2px rgba(0, 0, 0, 0.06),
                      0 8px 32px rgba(0, 0, 0, 0.12),
                      inset 0 2px 8px rgba(255, 255, 255, 0.8),
                      inset 0 -2px 8px rgba(0, 0, 0, 0.05)
                    `,
                    background: '#ffffff',
                  }}
                />

                {/* Inner Red Border - Thin and Vibrant (Like Reference) */}
                <div 
                  className="absolute inset-[10px] md:inset-[12px] lg:inset-[14px] rounded-full border-[2px] border-red-500"
                  style={{
                    borderRadius: '50%',
                    clipPath: 'ellipse(90% 80% at 50% 50%)',
                    boxShadow: 'inset 0 0 0 1px rgba(239, 68, 68, 0.2)',
                  }}
                />

                {/* Image Container Inside Oval - Only Images Slide */}
                <div 
                  className="absolute inset-[18px] md:inset-[22px] lg:inset-[26px] rounded-full overflow-hidden"
                  style={{
                    borderRadius: '50%',
                    clipPath: 'ellipse(90% 80% at 50% 50%)',
                    boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <AnimatePresence mode="wait">
                    {images.map((image, index) => {
                      if (index !== currentIndex) return null;
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 1.08 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          transition={{ 
                            duration: 0.7, 
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            sizes="(max-width: 768px) 400px, (max-width: 1200px) 500px, 600px"
                          />
                          {/* Subtle Lighting Overlay for 3D Depth */}
                          <div 
                            className="absolute inset-0"
                            style={{
                              background: `
                                radial-gradient(ellipse at 35% 25%, rgba(255, 255, 255, 0.15) 0%, transparent 60%),
                                linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.03) 100%)
                              `,
                            }}
                          />
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Slide Indicators - Below Oval */}
          {images.length > 1 && (
            <div className="absolute -bottom-12 md:-bottom-14 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'bg-amber-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  animate={{
                    width: index === currentIndex ? 40 : 10,
                    opacity: index === currentIndex ? 1 : 0.6,
                  }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                  aria-label={`Go to slide ${index + 1}`}
                  style={{
                    boxShadow: index === currentIndex 
                      ? '0 2px 8px rgba(245, 158, 11, 0.4)'
                      : '0 1px 3px rgba(0, 0, 0, 0.1)',
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

