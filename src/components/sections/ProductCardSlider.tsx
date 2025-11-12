'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProductCard3D } from './ProductCard3D';

interface SlideItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}

interface ProductCardSliderProps {
  items: SlideItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  showNavigation?: boolean;
  showIndicators?: boolean;
  cardsPerView?: number; // Number of cards visible at once
  slideStep?: number; // Number of cards to slide at a time (default: 1 for one-by-one)
}

export function ProductCardSlider({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  className,
  showNavigation = true,
  showIndicators = true,
  cardsPerView = 3, // Default: 3 cards visible
  slideStep = 1, // Default: slide 1 card at a time
}: ProductCardSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  // Calculate total number of slides for one-by-one sliding
  // For 8 items with 3 cards per view, sliding 1 at a time:
  // We can start from index 0 to index (items.length - cardsPerView)
  // So: 0, 1, 2, 3, 4, 5 (6 slides total)
  // Slide 0: items 0-2, Slide 1: items 1-3, Slide 2: items 2-4, etc.
  const maxStartIndex = Math.max(0, items.length - cardsPerView);
  const totalSlides = maxStartIndex + 1;
  const maxSlideIndex = Math.max(0, totalSlides - 1);

  useEffect(() => {
    if (!isAutoPlaying || items.length <= cardsPerView) return;
    
    // Calculate max index inside effect to ensure consistency
    const calculatedMaxIndex = Math.max(0, items.length - cardsPerView);
    if (calculatedMaxIndex <= 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + slideStep;
        if (next > calculatedMaxIndex) {
          return 0;
        }
        return next;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, items.length, cardsPerView, slideStep]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + slideStep;
      if (next > maxSlideIndex) {
        return 0; // Loop back to start
      }
      return next;
    });
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - slideStep;
      if (prevIndex < 0) {
        return maxSlideIndex; // Loop to end
      }
      return prevIndex;
    });
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index <= maxSlideIndex) {
      setCurrentIndex(index);
      setIsAutoPlaying(false);
    }
  };

  if (items.length === 0) return null;

  // Calculate start index for current slide (sliding one by one)
  // currentIndex is the starting position (0, 1, 2, 3, etc.)
  const startIndex = currentIndex;
  // Get visible items for current slide (always show cardsPerView number of cards)
  const visibleItems = items.slice(startIndex, startIndex + cardsPerView);
  
  // Ensure we always have items to display
  if (visibleItems.length === 0 && items.length > 0) {
    // Fallback to first slide if current slide is empty
    const fallbackItems = items.slice(0, Math.min(cardsPerView, items.length));
    return (
      <div className={cn('relative px-4 md:px-8 lg:px-12', className)}>
        <div className="relative overflow-hidden">
          <div className="relative py-4">
            <div className={cn(
              'grid gap-5 md:gap-6',
              cardsPerView === 1 && 'grid-cols-1',
              cardsPerView === 2 && 'grid-cols-1 md:grid-cols-2',
              cardsPerView === 3 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
              cardsPerView === 4 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            )}>
              {fallbackItems.map((item, index) => (
                <ProductCard3D
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  imageAlt={item.imageAlt || item.title}
                  delay={index * 0.05}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('relative px-4 md:px-8 lg:px-12', className)}>
      <div className="relative overflow-hidden">
        {/* Cards Container */}
        <div className="relative py-4 bg-transparent" style={{ minHeight: '450px' }}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0.4, x: 30, filter: 'blur(4px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0.4, x: -30, filter: 'blur(4px)' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className={cn(
              'grid gap-5 md:gap-6',
              cardsPerView === 1 && 'grid-cols-1',
              cardsPerView === 2 && 'grid-cols-1 md:grid-cols-2',
              cardsPerView === 3 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
              cardsPerView === 4 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            )}
          >
            {visibleItems.map((item, index) => (
              <motion.div
                key={`${item.id}-${currentIndex}`}
                initial={{ 
                  opacity: 0, 
                  y: 30, 
                  scale: 0.9,
                  rotateY: -15,
                  filter: 'blur(8px) brightness(0.8)'
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotateY: 0,
                  filter: 'blur(0px) brightness(1)'
                }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: [0.34, 1.56, 0.64, 1], // Elastic ease for bounce effect
                  opacity: { duration: 0.5 },
                  filter: { duration: 0.6 }
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <ProductCard3D
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    imageAlt={item.imageAlt || item.title}
                    delay={0}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Arrows - White Design */}
        {showNavigation && totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 flex items-center justify-center group hover:bg-white dark:hover:bg-gray-800"
              aria-label="Previous cards"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 flex items-center justify-center group hover:bg-white dark:hover:bg-gray-800"
              aria-label="Next cards"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300" />
            </button>
          </>
        )}

        {/* Indicators - Improved Design */}
        {showIndicators && totalSlides > 1 && (
          <div className="flex justify-center mt-6 md:mt-8 gap-2.5">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  'h-2.5 rounded-full transition-all duration-300',
                  index === currentIndex
                    ? 'bg-amber-500 w-10 shadow-md shadow-amber-500/30'
                    : 'bg-gray-300 dark:bg-gray-600 w-2.5 hover:bg-gray-400 dark:hover:bg-gray-500 hover:w-3'
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

