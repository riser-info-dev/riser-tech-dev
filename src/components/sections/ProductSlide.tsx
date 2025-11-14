'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SlideItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}

interface ProductSlideProps {
  items: SlideItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  showNavigation?: boolean;
  showIndicators?: boolean;
}

export function ProductSlide({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  className,
  showNavigation = true,
  showIndicators = true,
}: ProductSlideProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isAutoPlaying || items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, items.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  if (items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className={cn('relative', className)}>
      <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={currentItem.image}
              alt={currentItem.imageAlt || currentItem.title}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              sizes="100vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 md:p-12 text-white max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {currentItem.title}
                </h3>
                <p className="text-lg md:text-xl opacity-90">
                  {currentItem.description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {showNavigation && items.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 flex items-center justify-center group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-amber-300 transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 flex items-center justify-center group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-amber-300 transition-colors" />
            </button>
          </>
        )}

        {/* Indicators */}
        {showIndicators && items.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  index === currentIndex
                    ? 'bg-amber-400 w-8'
                    : 'bg-white/40 hover:bg-white/60'
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}












