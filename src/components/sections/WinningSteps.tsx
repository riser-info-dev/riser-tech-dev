'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Award, Target, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Foundation',
    description: 'Building the foundation of excellence in fire safety',
    icon: Target,
  },
  {
    id: 2,
    title: 'Growth',
    description: 'Expanding our reach and expertise across industries',
    icon: TrendingUp,
  },
  {
    id: 3,
    title: 'Recognition',
    description: 'Earning certifications and industry recognition',
    icon: Award,
  },
  {
    id: 4,
    title: 'Innovation',
    description: 'Leading with cutting-edge fire safety solutions',
    icon: Rocket,
  },
];

export function WinningSteps() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000); // Change step every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 dark:text-white">
            Our Winning Steps
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Journey of excellence, one step at a time
          </p>
        </div>

        <div className="relative">
          {/* Progress Line - Desktop */}
          <div className="absolute top-10 sm:top-12 left-0 right-0 h-0.5 sm:h-1 bg-gray-200 dark:bg-gray-700 hidden md:block">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-500"
              initial={{ width: '0%' }}
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>

          {/* Steps - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isActive || isCompleted ? 1 : 0.6,
                    y: 0,
                    scale: isActive ? 1.03 : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  className="relative"
                >
                  {/* Step Card - Mobile Optimized */}
                  <div
                    className={`relative bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-md sm:shadow-lg transition-all duration-500 ${
                      isActive
                        ? 'ring-2 ring-amber-500 shadow-xl sm:shadow-2xl shadow-amber-500/20 scale-[1.02] sm:scale-105'
                        : isCompleted
                        ? 'ring-1 ring-amber-300 shadow-lg sm:shadow-xl'
                        : 'ring-1 ring-gray-200 dark:ring-gray-700'
                    }`}
                  >
                    {/* Step Number Badge - Mobile Optimized */}
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10">
                      <motion.div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg transition-all duration-500 ${
                          isActive
                            ? 'bg-amber-500 text-white scale-105 sm:scale-110'
                            : isCompleted
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                        }`}
                        animate={{
                          scale: isActive ? [1, 1.08, 1] : 1,
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: isActive ? Infinity : 0,
                          repeatDelay: 1,
                        }}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                        ) : (
                          step.id
                        )}
                      </motion.div>
                    </div>

                    {/* Icon - Mobile Optimized */}
                    <div className="mt-3 sm:mt-4 mb-3 sm:mb-4 flex justify-center">
                      <motion.div
                        className={`p-3 sm:p-4 rounded-full transition-all duration-500 ${
                          isActive
                            ? 'bg-amber-100 dark:bg-amber-900/30'
                            : isCompleted
                            ? 'bg-green-100 dark:bg-green-900/30'
                            : 'bg-gray-100 dark:bg-gray-700'
                        }`}
                        animate={{
                          rotate: isActive ? [0, 5, -5, 0] : 0,
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: isActive ? Infinity : 0,
                          repeatDelay: 1,
                        }}
                      >
                        <Icon
                          className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-colors duration-500 ${
                            isActive
                              ? 'text-amber-600 dark:text-amber-400'
                              : isCompleted
                              ? 'text-green-600 dark:text-green-400'
                              : 'text-gray-400 dark:text-gray-500'
                          }`}
                        />
                      </motion.div>
                    </div>

                    {/* Content - Mobile Optimized */}
                    <h3
                      className={`text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 text-center transition-colors duration-500 ${
                        isActive
                          ? 'text-amber-600 dark:text-amber-400'
                          : isCompleted
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                      {step.description}
                    </p>

                    {/* Active Indicator - Mobile Optimized */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-lg sm:rounded-xl border-2 border-amber-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    )}
                  </div>

                  {/* Connecting Line for Mobile - Vertical Layout */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 sm:top-12 -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 w-0.5 sm:w-1 h-4 sm:h-6 bg-gray-200 dark:bg-gray-700 md:hidden">
                      <motion.div
                        className="w-full bg-gradient-to-b from-amber-500 to-yellow-500"
                        initial={{ height: '0%' }}
                        animate={{
                          height: isCompleted ? '100%' : isActive ? '50%' : '0%',
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

