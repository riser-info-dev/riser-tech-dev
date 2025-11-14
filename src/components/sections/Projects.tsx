'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { LensHeading } from '@/components/ui/LensHeading';
import { 
  Building2, 
  Factory, 
  Home, 
  Hospital,
  Server,
  ShoppingBag,
} from 'lucide-react';

const projects: Array<{
  id: string;
  title: string;
  category: string;
  description: string;
  icon: any;
  image: string;
  stats: { clients: number; completed: string };
}> = [
  {
    id: '1',
    title: 'Fire Alarm Installation',
    category: 'Commercial',
    description: 'State-of-the-art fire alarm systems installed in multi-story commercial buildings with 24/7 monitoring capabilities.',
    icon: Building2,
    image: '/images/projects/fire-alarm-installation.jpg',
    stats: { clients: 250, completed: '2024' },
  },
  {
    id: '2',
    title: 'Hospital Fire Solutions',
    category: 'Healthcare',
    description: 'Advanced fire suppression and alarm systems designed for healthcare facilities with patient safety in mind.',
    icon: Hospital,
    image: '/images/projects/hospital-fire-solutions.jpg',
    stats: { clients: 45, completed: '2024' },
  },
  {
    id: '3',
    title: 'Industrial Fire Safety',
    category: 'Industrial',
    description: 'Comprehensive fire protection solutions for large-scale industrial facilities and manufacturing plants.',
    icon: Factory,
    image: '/images/projects/industrial-fire-safety.jpg',
    stats: { clients: 120, completed: '2024' },
  },
  {
    id: '4',
    title: 'Data Center Fire Protection',
    category: 'Technology',
    description: 'Specialized fire suppression systems for data centers with zero-downtime requirements and clean agent technology.',
    icon: Server,
    image: '/images/projects/data-center-protection.jpg',
    stats: { clients: 35, completed: '2024' },
  },
  {
    id: '5',
    title: 'Smart Fire Alarm System',
    category: 'Residential',
    description: 'AI-powered smart fire alarm systems with mobile app integration for modern residential buildings.',
    icon: Home,
    image: '/images/projects/smart-fire-alarm.jpg',
    stats: { clients: 500, completed: '2024' },
  },
  {
    id: '6',
    title: 'Retail Fire Safety',
    category: 'Retail',
    description: 'Complete fire safety solutions for retail stores and shopping centers with minimal business disruption.',
    icon: ShoppingBag,
    image: '/images/projects/retail-fire-safety.jpg',
    stats: { clients: 180, completed: '2024' },
  },
];

function ProjectCard({ 
  project, 
  Icon, 
  index 
}: { 
  project: typeof projects[0]; 
  Icon: any; 
  index: number;
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

            return (
              <motion.div
      initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
      data-card="true"
    >
      <div 
        data-card="true"
        className="group relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50 hover:border-amber-300/80 dark:hover:border-amber-600/60"
      >
        {/* Image Header */}
        <div className="h-[104px] sm:h-[125px] md:h-52 relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
          {!imageError ? (
            <>
              {/* Project Image with Next.js Image component */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`object-cover transition-all duration-1000 ease-out ${
                  imageLoaded 
                    ? 'opacity-100 group-hover:scale-110 group-hover:brightness-[1.05]' 
                    : 'opacity-0'
                }`}
                onError={() => setImageError(true)}
                onLoad={() => setImageLoaded(true)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Loading placeholder - subtle */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-700/50 dark:to-slate-800/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-slate-400/40 animate-pulse" />
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Fallback Gradient Background - elegant silver/gold */
            <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-amber-700 to-yellow-800">
              {/* Subtle animated pattern */}
              <div className="absolute inset-0 opacity-15">
                <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                      </div>
                      
              {/* Icon centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 group-hover:scale-125 transition-all duration-700"></div>
                  <Icon className="w-20 h-20 text-white/90 relative z-10 transform group-hover:scale-105 transition-all duration-500 drop-shadow-lg" />
                </div>
              </div>
            </div>
          )}
                      
          {/* Elegant overlay - subtle dark gradient that lightens on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent group-hover:from-black/8 group-hover:via-transparent transition-all duration-700 z-[1]"></div>
                      
          {/* Category Badge - clean and premium */}
          <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-500 z-10 border border-gray-200/40 dark:border-gray-700/40">
            <span className="text-gray-800 dark:text-gray-100 text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                      </div>
                    </div>
                    
        {/* Content Section */}
        <div className="p-4 sm:p-5 md:p-6 bg-white dark:bg-gray-800 relative">
          {/* Title - refined hover effect */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-500 line-clamp-2">
                          {project.title}
                        </h3>
                      
          {/* Description - smooth text transition */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-500">
                        {project.description}
                      </p>
                      
          {/* Stats Footer - elegant divider */}
          <div className="flex items-center justify-between pt-5 border-t border-gray-100 dark:border-gray-700/50 group-hover:border-amber-200/60 dark:group-hover:border-amber-900/40 transition-colors duration-500">
            <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  {project.stats.clients}
                          </span>
                        </div>
              <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {project.stats.completed}
                          </span>
                        </div>
            
            {/* Premium Arrow Button */}
            <div className="w-9 h-9 rounded-full bg-gray-50 dark:bg-gray-700/30 flex items-center justify-center group-hover:bg-amber-50 dark:group-hover:bg-amber-900/30 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 border border-gray-200/30 dark:border-gray-600/30 group-hover:border-amber-300/60 dark:group-hover:border-amber-700/60">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-amber-500 transform group-hover:translate-x-0.5 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
                      </div>
                    </div>
                    
        {/* Premium border glow - elegant ring effect */}
        <div className="absolute inset-0 rounded-2xl ring-[1.5px] ring-amber-400/0 group-hover:ring-amber-400/40 dark:group-hover:ring-amber-600/40 transition-all duration-700 pointer-events-none"></div>
        
        {/* Very subtle inner glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-[0.015] transition-opacity duration-700 pointer-events-none"></div>
      </div>
              </motion.div>
  );
}

export function Projects() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-[90%] sm:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <LensHeading as="h2" className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4" magnify={2.5}>
            Our Projects
          </LensHeading>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our work - trusted fire safety solutions for various industries and property types.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <ProjectCard 
                key={project.id} 
                project={project} 
                Icon={Icon}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
