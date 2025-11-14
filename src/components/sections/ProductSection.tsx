'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProductSectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'gradient';
}

export function ProductSection({
  id,
  title,
  description,
  children,
  className,
  variant = 'default',
}: ProductSectionProps) {
  const variants = {
    default: 'bg-gray-50 dark:bg-gray-900',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-slate-900 via-amber-900 to-yellow-900 text-white',
  };

  return (
    <section
      id={id}
      className={cn('py-20 scroll-mt-20', variants[variant], className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}












