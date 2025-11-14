'use client';

import { Card } from '@/components/ui/Card';
import { Card3D } from '@/components/ui/Card3D';
import { CheckCircle, Users, Award, Clock, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { TeamSection } from '@/components/sections/TeamSection';
import { WinningSteps } from '@/components/sections/WinningSteps';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 min-h-[233px] md:min-h-[329px] lg:min-h-[383px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/about-image-3-page.jpg"
            alt="About RiserTech Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized={process.env.NODE_ENV === 'development'}
          />
          
          {/* Overlay - Enhanced gradient for text readability and sunset effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/80 via-amber-600/70 to-slate-800/60"></div>
          
          {/* Additional depth overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Breadcrumb Navigation - Upper Left */}
        <div className="absolute top-24 left-4 sm:left-6 md:left-8 z-20">
          <nav className="flex items-center gap-2 text-sm sm:text-base">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-amber-500 font-semibold relative">
              About us
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></span>
            </span>
          </nav>
        </div>

        {/* Abstract Geometric Shapes - Far Right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="flex flex-col gap-2">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm transform rotate-45"></div>
            <div className="w-16 h-16 bg-gray-200/30 backdrop-blur-sm transform rotate-45 ml-4"></div>
            <div className="w-10 h-10 bg-white/15 backdrop-blur-sm transform rotate-45 ml-8"></div>
          </div>
        </div>

        {/* Text Box - Bottom Center on Mobile, Lower Left on Desktop */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-16 lg:bottom-20 left-1/2 md:left-4 lg:left-6 xl:left-8 -translate-x-1/2 md:translate-x-0 z-20 w-full max-w-[90%] sm:max-w-[85%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[45%] px-4 md:px-0">
          <div className="bg-gray-900/70 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 rounded-lg border border-gray-700/50 shadow-2xl text-center md:text-left"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)' }}
          >
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1">
              Facilitating Growth
            </p>
            <p className="text-amber-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              Through Fire Safety Excellence
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                At RiserTech, we are dedicated to protecting lives and property through innovative fire safety solutions.
                Our mission is to provide reliable, efficient, and compliant fire protection systems that give our
                clients peace of mind.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                With over 12 years of experience in the industry, we have built a reputation for excellence, reliability,
                and customer satisfaction. Our team of certified professionals is committed to delivering the highest
                quality service and solutions.
              </p>
            </div>
            <Card3D>
              <Card hover className="h-full group relative overflow-hidden">
                {/* Color overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-yellow-50/60 to-amber-100/80 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <Shield className="w-16 h-16 text-amber-600 mb-4 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors duration-300" />
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-300">Why Choose Us</h3>
                  <ul className="space-y-3">
                    {[
                      '12+ years of industry experience',
                      'Certified and licensed professionals',
                      '24/7 emergency support',
                      'Customized solutions for every need',
                      'Comprehensive maintenance services',
                      'Competitive pricing',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Card3D>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, number: '100+', label: 'Happy Clients', description: 'Satisfied customers across various industries' },
              { icon: Award, number: '12+', label: 'Years Experience', description: 'Over a decade of expertise in fire safety' },
              { icon: CheckCircle, number: '50+', label: 'Projects Done', description: 'Successfully completed projects' },
            ].map((item, index) => (
              <Card key={index} hover className="text-center">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-amber-600" />
                <h4 className="text-3xl font-bold mb-2">{item.number}</h4>
                <p className="text-lg font-semibold mb-2">{item.label}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Winning Steps Section */}
      <WinningSteps />

      {/* Team Section */}
      <TeamSection />
    </div>
  );
}

