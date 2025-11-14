'use client';

import { useState, useEffect } from 'react';
import { Button3D } from '@/components/ui/Button3D';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Award, Zap, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const heroSlides = [
  {
    id: 1,
    title: 'Safety is not just a priority,',
    subtitle: "it's a Responsibility",
    description: 'Your trusted partner for comprehensive fire and safety solutions. Protecting what matters most with reliable systems and expert service.',
    image: '/images/hero/hero-1.png',
    gradient: 'from-slate-900 via-slate-800 to-amber-900',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  {
    id: 2,
    title: 'Reliable Fire Safety',
    subtitle: 'Starts Here',
    description: 'State-of-the-art fire protection systems designed to keep your property safe. Professional installation and 24/7 support.',
    image: '/images/hero/hero-2.jpg',
    gradient: 'from-gray-900 via-amber-900 to-yellow-900',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  {
    id: 3,
    title: 'Certified Experts',
    subtitle: 'Trusted Solutions',
    description: 'Over 12 years of experience in fire safety. Certified professionals ready to protect what matters most to you.',
    image: '/images/hero/hero-3.png',
    gradient: 'from-slate-800 via-amber-800 to-yellow-800',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  {
    id: 4,
    title: 'Fire Protection System',
    subtitle: 'Advanced Solutions',
    description: 'Comprehensive fire protection systems with cutting-edge technology. From detection to suppression, we provide complete fire safety solutions for your business.',
    image: '/images/hero/hero-4.jpg',
    gradient: 'from-gray-900 via-slate-800 to-amber-800',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
];

const stats = [
  { icon: Shield, value: '12+', label: 'Years Experience', color: 'text-amber-400' },
  { icon: Award, value: '100+', label: 'Happy Clients', color: 'text-amber-400' },
  { icon: Zap, value: '50+', label: 'Projects Done', color: 'text-amber-400' },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || isHovered) {
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setProgress(0);
    }, 6000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / 60); // 60 updates per 6 seconds
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isAutoPlaying, isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setProgress(0);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    setProgress(0);
  };

  const currentSlideData = heroSlides[currentSlide];

  const handleImageError = (slideId: number) => {
    setImageErrors(prev => ({ ...prev, [slideId]: true }));
  };

  return (
    <section 
      className="relative min-h-[44vh] sm:min-h-[64vh] md:min-h-[72vh] lg:min-h-[82vh] overflow-hidden pt-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Slides with Clean Crossfade Animation */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => {
          const hasImageError = imageErrors[slide.id];
          const isActive = index === currentSlide;
          
          return (
            <motion.div
              key={slide.id}
              animate={{
                opacity: isActive ? 1 : 0,
              }}
              transition={{ 
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="absolute inset-0"
              style={{
                zIndex: isActive ? 1 : 0,
                willChange: 'opacity',
              }}
            >
              {/* Background Image */}
              {!hasImageError && (
                <motion.div 
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    scale: isActive ? [1.2, 1] : 1.05,
                  }}
                  transition={{
                    duration: isActive ? 8 : 1,
                    ease: 'linear',
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="100vw"
                    onError={() => handleImageError(slide.id)}
                    quality={90}
                    unoptimized={process.env.NODE_ENV === 'development'}
                  />
                </motion.div>
              )}
              
              {/* Gradient Background (fallback if image fails) */}
              {hasImageError && (
                <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}>
                  {/* Animated background particles */}
                  <div className="absolute inset-0">
                    <motion.div
                      className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                      }}
                    />
                  </div>
                </div>
              )}
              
              {/* Dark Overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60"></div>
              
              {/* Subtle gradient overlay blend with image */}
              {!hasImageError && (
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
                  style={{ opacity: 0.25 }}
                ></div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-10 md:py-12 lg:py-16 text-center w-full min-h-[44vh] sm:min-h-[64vh] md:min-h-[72vh] lg:min-h-[82vh] flex flex-col justify-center">
        {/* Badge - Static, no re-animation */}
        <div className="flex justify-center mb-1.5 sm:mb-3.5 md:mb-4.5 lg:mb-5.5">
          <div className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 max-w-[85%] sm:max-w-none">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-amber-400 rounded-full animate-pulse flex-shrink-0"></span>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm font-medium whitespace-nowrap">Trusted Fire Safety Solutions</span>
          </div>
        </div>

        {/* Changing Content - Improved animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.6,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className="text-white"
          >
            {/* Main Title */}
            <motion.h1 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-1.5 sm:mb-2.5 md:mb-3.5 lg:mb-4.5 leading-tight px-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                {currentSlideData.title}
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent mt-1 sm:mt-2"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                {currentSlideData.subtitle}
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-xs sm:text-sm md:text-base lg:text-lg mb-2.5 sm:mb-4.5 md:mb-5.5 lg:mb-7 max-w-2xl mx-auto opacity-95 leading-relaxed px-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.95, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              {currentSlideData.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* CTA Buttons - Static, no re-animation */}
        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 justify-center items-center mb-3.5 sm:mb-5.5 md:mb-7 lg:mb-11 px-4">
          <Link href="/contact" className="w-auto">
            <Button3D 
              variant="primary" 
              size="md" 
              className="group relative overflow-hidden bg-white text-gray-900 hover:bg-amber-50 shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3.5 text-xs sm:text-sm md:text-base font-semibold"
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
            </Button3D>
          </Link>
          <Link href="/services" className="w-auto">
            <Button3D 
              variant="outline" 
              size="md" 
              className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm bg-white/10 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3.5 text-xs sm:text-sm md:text-base font-semibold transition-all duration-500"
            >
              Our Services
            </Button3D>
          </Link>
        </div>

        {/* Stats Cards - Static, no re-animation */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 md:gap-3.5 max-w-3xl mx-auto px-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
              data-card="true"
            >
              <div 
                data-card="true"
                className="relative bg-white/10 backdrop-blur-xl rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3.5 border border-white/20 group-hover:border-amber-400/60 group-hover:bg-white/20 transition-all duration-300 shadow-lg sm:shadow-xl group-hover:shadow-2xl group-hover:shadow-amber-500/20"
              >
                <div className="flex flex-col items-center">
                  {/* Icon - stable, no animations */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-1 sm:mb-1.5 md:mb-2.5 group-hover:bg-amber-500/30 transition-colors duration-300">
                    <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${stat.color} transition-colors duration-300`} />
                  </div>
                  
                  {/* Value */}
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-0.5 sm:mb-0.5 md:mb-1.5 bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent leading-tight">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-medium text-white/90 group-hover:text-white transition-colors duration-300 uppercase tracking-wider text-center leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 group touch-manipulation"
        aria-label="Previous slide"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-amber-400/50 active:bg-white/30 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg sm:shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95">
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-amber-300 transition-colors duration-300" />
        </div>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 group touch-manipulation"
        aria-label="Next slide"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-amber-400/50 active:bg-white/30 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg sm:shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-amber-300 transition-colors duration-300" />
        </div>
      </button>

      {/* Modern Slide Indicators with Progress */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
        {/* Progress Bar */}
        <div className="w-24 sm:w-28 md:w-32 h-0.5 sm:h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: 'linear' }}
          />
        </div>

        {/* Slide Dots */}
        <div className="flex gap-2 sm:gap-2.5 md:gap-3 items-center">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative touch-manipulation"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`relative h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'bg-white w-8 sm:w-10 md:w-12' 
                  : 'bg-white/40 hover:bg-white/60 active:bg-white/80 w-6 sm:w-7 md:w-8'
              }`}>
                {index === currentSlide && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={toggleAutoPlay}
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-amber-400/50 active:bg-white/30 active:scale-95 transition-all duration-300 flex items-center justify-center mt-1 sm:mt-2 touch-manipulation"
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlaying ? (
            <Pause className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-white" />
          ) : (
            <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-white ml-0.5" />
          )}
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-8 z-30 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
