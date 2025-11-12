'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Flame, 
  Box, 
  Droplet, 
  UtensilsCrossed, 
  Building2,
  Bell,
  Signpost,
  Wrench,
  Home,
  Briefcase,
  Factory,
  ChefHat,
  Server,
  PanelTop,
  Wind,
  Settings,
  Car,
  Battery,
  FlaskConical,
  Power
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: MenuItem[];
}

const productMenuItems: MenuItem[] = [
  {
    label: 'Fire Extinguishers',
    icon: Flame,
    href: '/products#fire-extinguishers',
  },
  {
    label: 'Sprinklers',
    icon: Droplet,
    href: '/products#sprinklers',
  },
  {
    label: 'Fire Suppression Systems',
    icon: Droplet,
    href: '/products#fire-suppression-systems',
  },
  // {
  //   label: 'Total Flooding Systems',
  //   icon: Building2,
  //   href: '/products#total-flooding-systems',
  // },
  {
    label: 'Hydrants & Accessories',
    icon: Building2,
    href: '/products#hydrants-accessories',
  },
  {
    label: 'Alarm Solutions',
    icon: Bell,
    href: '/products#alarm-solutions',
  },
  {
    label: 'Valves',
    icon: PanelTop,
    href: '/products#valves',
  },
  {
    label: 'Services',
    icon: Wrench,
    href: '/products#services',
  },
];

const applicationAreas = [
  { label: 'Homes', icon: Home, href: '/applications/homes' },
  { label: 'Offices', icon: Briefcase, href: '/applications/offices' },
  { label: 'Manufacturing', icon: Factory, href: '/applications/manufacturing' },
  { label: 'Commercial Kitchens', icon: ChefHat, href: '/applications/commercial-kitchens' },
  { label: 'Server Racks', icon: Server, href: '/applications/server-racks' },
  { label: 'Electrical Panels', icon: PanelTop, href: '/applications/electrical-panels' },
  { label: 'Wind Turbines', icon: Wind, href: '/applications/wind-turbines' },
  { label: 'CNC Machines', icon: Settings, href: '/applications/cnc-machines' },
  { label: 'Vehicle Engines', icon: Car, href: '/applications/vehicle-engines' },
  { label: 'Battery Banks', icon: Battery, href: '/applications/battery-banks' },
  { label: 'Fume Hoods', icon: FlaskConical, href: '/applications/fume-hoods' },
  { label: 'Generators', icon: Power, href: '/applications/generators' },
];

interface ProductMenuProps {
  className?: string;
}

export function ProductMenu({ className }: ProductMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    
    if (href.startsWith('/products#')) {
      // If we're already on products page, smooth scroll to section
      if (typeof window !== 'undefined' && window.location.pathname === '/products') {
        e.preventDefault();
        const hash = href.split('#')[1];
        setTimeout(() => {
          const element = document.querySelector(`#${hash}`);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
      // Otherwise, let Next.js handle navigation and scroll after page load
    }
  };

  const handleProductsClick = (e: React.MouseEvent) => {
    // Toggle dropdown on click
    setIsOpen(!isOpen);
  };

  return (
    <div 
      ref={menuRef}
      className={cn('relative', className)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Products Button - Click to go to products page, hover to show dropdown */}
      <div className="relative group">
        <Link
          href="/products"
          className={cn(
            'flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300',
            'group',
            isOpen ? 'text-amber-600 dark:text-amber-400' : 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
          )}
          onMouseEnter={() => setIsOpen(true)}
        >
          <span className="relative z-10">Products</span>
          <ChevronDown 
            className={cn(
              'w-4 h-4 transition-transform duration-300',
              isOpen ? 'rotate-180 text-amber-600' : 'group-hover:text-amber-600'
            )} 
          />
          
          {/* Active Background */}
          {isOpen && (
            <motion.div
              layoutId="activeProductMenu"
              className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-xl"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
        </Link>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/10 backdrop-blur-sm z-[45]"
                style={{ top: '80px' }}
                onClick={() => setIsOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 z-[50] overflow-hidden"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <div className="p-2">
                  {/* All Products Link */}
                  <Link
                    href="/products"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 dark:hover:from-amber-900/20 dark:hover:to-yellow-900/20 hover:text-amber-600 dark:hover:text-amber-400 font-semibold border-b border-gray-200 dark:border-gray-700 mb-1"
                  >
                    <Flame className="w-5 h-5 text-amber-600" />
                    <span>All Products</span>
                  </Link>
                  
                  {/* Section Links */}
                  {productMenuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        href={item.href || '#'}
                        onClick={(e) => handleLinkClick(e, item.href || '')}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 dark:hover:from-amber-900/20 dark:hover:to-yellow-900/20 hover:text-amber-600 dark:hover:text-amber-400"
                      >
                        {Icon && (
                          <Icon className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors duration-300" />
                        )}
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

interface ApplicationAreasProps {
  className?: string;
  variant?: 'hero' | 'default';
}

export function ApplicationAreas({ className, variant = 'default' }: ApplicationAreasProps) {
  if (variant === 'hero') {
    return (
      <div className={cn('grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-6xl mx-auto', className)}>
        {applicationAreas.map((area) => {
          const Icon = area.icon;
          return (
            <Link
              key={area.label}
              href={area.href}
              data-card="true"
              className="group relative bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-white/20 hover:border-amber-400/60 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors duration-300">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                </div>
                <span className="text-[10px] md:text-xs font-medium text-white/90 group-hover:text-white text-center leading-tight">
                  {area.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn('grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4', className)}>
      {applicationAreas.map((area) => {
        const Icon = area.icon;
        return (
          <Link
            key={area.label}
            href={area.href}
            data-card="true"
            className="group relative bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 hover:border-amber-400/60 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors duration-300">
                <Icon className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
              </div>
              <span className="text-xs font-medium text-white/90 group-hover:text-white text-center">
                {area.label}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

