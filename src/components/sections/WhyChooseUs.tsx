'use client';

import { Card } from '@/components/ui/Card';
import { Scroll3D } from '@/components/ui/Scroll3D';
import { LensHeading } from '@/components/ui/LensHeading';
import { Shield, Heart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: 'Certified experts',
    description:
      'Our team comprises certified professionals with extensive knowledge in fire system installation and maintenance, with years of experience.',
    image: 'bg-gradient-to-br from-amber-500 to-yellow-500',
    tooltip: 'Licensed and certified fire safety professionals',
  },
  {
    icon: Heart,
    title: 'Customized solutions',
    description:
      'We understand that every property has unique fire safety requirements. That\'s why we design and install systems tailored to your specific needs.',
    image: 'bg-gradient-to-br from-yellow-500 to-amber-600',
    tooltip: 'Solutions designed specifically for your property',
  },
  {
    icon: Zap,
    title: '24/7 emergency support',
    description:
      'Emergencies can happen anytime. Our dedicated team is available around the clock to provide swift assistance and ensure your safety.',
    image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    tooltip: 'Round-the-clock emergency assistance available',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100 dark:bg-amber-900 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 dark:bg-yellow-900 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-[90%] sm:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-10 sm:mb-12 md:mb-16">
          {/* Image Section - Left Side */}
          <Scroll3D className="relative">
            <div className="relative h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Main Image - Person with Fire Extinguisher */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
                {/* Placeholder for actual image - Replace with: /images/why-choose-us/fire-safety-expert.jpg */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-amber-900 to-yellow-900">
                  {/* Person representation */}
                  <div className="absolute left-16 bottom-16 w-40 h-64">
                    {/* Head with hard hat */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-orange-500 rounded-full shadow-xl">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-8 bg-orange-600 rounded-t-full"></div>
                    </div>
                    {/* Body */}
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-32 h-40 bg-gradient-to-b from-orange-400 to-orange-600 rounded-lg shadow-xl">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-32 bg-slate-800 rounded"></div>
                    </div>
                    {/* Arms */}
                    <div className="absolute top-20 left-4 w-8 h-24 bg-slate-800 rounded-full rotate-12"></div>
                    <div className="absolute top-20 right-4 w-8 h-24 bg-slate-800 rounded-full -rotate-12"></div>
                  </div>
                  
                  {/* Fire extinguisher */}
                  <div className="absolute right-20 bottom-32 w-16 h-40 bg-gradient-to-b from-red-600 to-red-800 rounded-lg shadow-xl border-4 border-red-700">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-8 bg-red-700 rounded"></div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-6 bg-gray-800 rounded"></div>
                  </div>
                  <div className="absolute right-24 bottom-28 w-8 h-8 bg-gray-800 rounded-full border-2 border-gray-600 shadow-lg"></div>
                  
                  {/* Background elements */}
                  <div className="absolute top-8 right-8 w-32 h-32 bg-amber-800/30 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-8 left-8 w-40 h-40 bg-yellow-800/30 rounded-full blur-3xl"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </Scroll3D>

          {/* Content Section - Right Side */}
          <div>
            <div className="text-sm uppercase tracking-wider text-amber-600 mb-3 sm:mb-4 font-semibold flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
              WHY CHOOSE US
            </div>
            <LensHeading as="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" magnify={2.5}>
              <span className="text-gray-900 dark:text-white">WE&apos;RE THE TRUSTED CHOICE FOR</span>
              <br />
              <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 cursor-default inline-block">
                FIRE SAFETY SOLUTIONS
              </span>
            </LensHeading>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
              When it comes to fire protection, choosing the right partner is critical. We are committed to delivering
              reliable, customized solutions that meet your specific needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
                <motion.div
                key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                data-card="true"
              >
                <Card 
                  hover 
                  data-card="true"
                  className="h-full group transition-all duration-300 relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group-hover:border-amber-300/60 dark:group-hover:border-amber-600/50 shadow-lg hover:shadow-xl"
                >
                      <div className={`${feature.image} aspect-video rounded-lg mb-6 flex items-center justify-center relative overflow-hidden`}>
                        <feature.icon className="w-16 h-16 text-white z-10 drop-shadow-2xl" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>
                      <h4 className="text-2xl font-bold mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </Card>
                </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

