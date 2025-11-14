'use client';

import { Contact } from '@/components/sections/Contact';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 min-h-[233px] md:min-h-[329px] lg:min-h-[383px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/about-image-3-page.jpg"
            alt="Contact RiserTech Background"
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
        <div className="absolute top-20 sm:top-24 left-4 sm:left-6 md:left-8 z-20">
          <nav className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-amber-500 font-semibold relative">
              Contact
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
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-16 lg:bottom-20 left-1/2 md:left-4 lg:left-6 xl:left-8 -translate-x-1/2 md:translate-x-0 z-20 w-full max-w-[75%] sm:max-w-[70%] md:max-w-[55%] lg:max-w-[45%] xl:max-w-[40%] px-4 md:px-0">
          <div className="bg-gray-900/70 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 rounded-lg border border-gray-700/50 shadow-2xl text-center md:text-left"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)' }}
          >
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1">
              Get In Touch
            </p>
            <p className="text-amber-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              For Fire Safety Solutions
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}

