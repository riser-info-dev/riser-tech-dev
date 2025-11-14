'use client';

import { Card } from '@/components/ui/Card';
import { Scroll3D } from '@/components/ui/Scroll3D';
import { Button3D } from '@/components/ui/Button3D';
import { Counter } from '@/components/ui/Counter';
import { LensHeading } from '@/components/ui/LensHeading';
import { CheckCircle, Users, Award, Clock, Shield, Zap, Heart } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export function About() {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 dark:bg-amber-900 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 dark:bg-yellow-900 opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-[90%] sm:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Image Section - Left Side */}
          <Scroll3D className="relative group">
            <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Background Image */}
              {!imageError ? (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/images/about/about-image.png"
                    alt="Fire Safety Solutions"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => {
                      console.error('Failed to load about image');
                      setImageError(true);
                    }}
                    unoptimized={process.env.NODE_ENV === 'development'}
                  />
                  {/* Minimal overlay only at bottom for text readability */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                </div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              )}
              
              {/* Overlay Card 1 - Years of Experience (Above Image) */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="absolute top-6 left-6 md:top-8 md:left-8 bg-gray-900/95 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-2xl border-2 border-amber-500/50 z-20"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-1 md:mb-2">
                    <span className="counter">
                      <Counter end={12} start={0} suffix="+" />
                    </span>
                  </h2>
                  <p className="text-white text-xs md:text-sm font-medium uppercase tracking-wider">Years of Experience</p>
                </motion.div>
              </motion.div>
            </div>
          </Scroll3D>

          {/* Content Section - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm uppercase tracking-wider text-amber-600 mb-3 sm:mb-4 font-semibold">ABOUT US</div>
            <LensHeading as="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 md:mb-6" magnify={2.5}>
              <span className="text-gray-900 dark:text-white">DEDICATION TO DELIVERING BEST</span>
              <br />
              <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent hover:from-yellow-600 hover:to-amber-700 transition-all duration-300">
                FIRE SAFETY SOLUTIONS
              </span>
            </LensHeading>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
              We are your trusted emergency fire ally, dedicated to protecting your home or business with reliable fire
              system installations. Our expert team is ready to provide top-tier fire safety solutions tailored to your
              needs.
            </p>
            
            {/* Feature Icons */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-7 md:mb-8">
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full border-2 border-amber-600 flex items-center justify-center group-hover:bg-amber-600 transition-all">
                  <Zap className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-amber-600 transition-colors font-medium">
                  Fast reliable services
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full border-2 border-amber-600 flex items-center justify-center group-hover:bg-amber-600 transition-all">
                  <Award className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-amber-600 transition-colors font-medium">
                  Certified expert & team
                </span>
              </div>
            </div>
            
            {/* Bullet Points */}
            <div className="space-y-2 sm:space-y-2.5 md:space-y-3 mb-6 sm:mb-7 md:mb-8">
              {['We offer flexible hours to fit.', 'We offer flexible hours to fit.', 'We offer flexible hours to fit.'].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">{item}</span>
                </div>
              ))}
            </div>
            
            <Link href="/about">
              <Button3D disable3D={true} className="group">
                <span>More about us</span>
                <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button3D>
            </Link>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {[
            { icon: Users, number: 100, start: 90, suffix: '+', label: 'Happy Clients', tooltip: 'Satisfied customers worldwide', isCounter: true },
            { icon: Award, number: '12+', label: 'Years Experience', tooltip: 'Over a decade of expertise', isCounter: false },
            { icon: CheckCircle, number: 50, start: 40, suffix: '+', label: 'Projects Done', tooltip: 'Completed projects successfully', isCounter: true },
          ].map((item, index) => (
                <motion.div
                key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
                data-card="true"
              >
                <Card 
                  hover 
                  data-card="true"
                  className="text-center group h-full relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group-hover:border-amber-300/60 dark:group-hover:border-amber-600/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                      {/* Icon - no scale animations to prevent cursor shake */}
                      <div className="relative mb-4 flex justify-center">
                        <item.icon className="w-12 h-12 mx-auto mb-4 text-amber-600 relative z-10 group-hover:text-amber-500 transition-colors duration-300" />
                      </div>
                      
                      <h4 className="text-3xl font-bold mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-300">
                        {item.isCounter ? (
                          <Counter 
                            end={item.number as number} 
                            start={item.start} 
                            suffix={item.suffix || ''} 
                          />
                        ) : (
                          item.number
                        )}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-300">
                        {item.label}
                      </p>
                    </Card>
                </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
