'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedLogo } from '@/components/ui/AnimatedLogo';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductMenu } from './ProductMenu';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  // { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-800/50'
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatedLogo />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Home Link */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
            >
              <Link
                href="/"
                className={cn(
                  'relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300',
                  'group',
                  pathname === '/'
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                )}
              >
                <span className="relative z-10">Home</span>
                
                {/* Active Background */}
                {pathname === '/' && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Hover Background */}
                {pathname !== '/' && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                )}
                
                {/* Bottom Border */}
                <motion.div
                  className={cn(
                    'absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-8 rounded-full',
                    'bg-gradient-to-r from-blue-600 to-indigo-600',
                    pathname === '/' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100',
                    'transition-all duration-300'
                  )}
                />
              </Link>
            </motion.div>

            {/* ProductMenu - After Home */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <ProductMenu />
            </motion.div>

            {/* Rest of Navigation Links */}
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 2) * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300',
                      'group',
                      isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    )}
                  >
                    <span className="relative z-10">{link.label}</span>
                    
                    {/* Active Background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover Background */}
                    {!isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    )}
                    
                    {/* Bottom Border */}
                    <motion.div
                      className={cn(
                        'absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-8 rounded-full',
                        'bg-gradient-to-r from-blue-600 to-indigo-600',
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100',
                        'transition-all duration-300'
                      )}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-4 space-y-2">
              {/* Home Link */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
              >
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300',
                    'relative',
                    pathname === '/'
                      ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20'
                  )}
                >
                  Home
                  {pathname === '/' && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-r-full"
                      layoutId="activeMobileNav"
                    />
                  )}
                </Link>
              </motion.div>

              {/* ProductMenu - After Home */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="mb-2">
                  <ProductMenu />
                </div>
              </motion.div>

              {/* Rest of Navigation Links */}
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 2) * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300',
                        'relative',
                        isActive
                          ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20'
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-r-full"
                          layoutId="activeMobileNav"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
