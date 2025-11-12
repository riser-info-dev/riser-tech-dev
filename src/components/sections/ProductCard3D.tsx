'use client';

import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ProductCard3DProps {
  id?: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  href?: string;
  className?: string;
  delay?: number;
}

export function ProductCard3D({
  id,
  title,
  description,
  image,
  imageAlt,
  href,
  className,
  delay = 0,
}: ProductCard3DProps) {
  const [imageError, setImageError] = useState(false);

  const cardContent = (
    <div
      className={cn(
        'group relative h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 flex flex-col border border-gray-100 dark:border-gray-700',
        'transform hover:-translate-y-1',
        className
      )}
      data-card="true"
    >
      {/* Image Container */}
      <div className="relative h-72 bg-gray-50 dark:bg-gray-700/50 overflow-hidden">
        {!imageError && (
          <div className="absolute inset-x-0 inset-y-2 md:inset-y-3">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          </div>
        )}
        {imageError && (
          <div className="absolute inset-x-0 inset-y-2 md:inset-y-3 flex items-center justify-center">
            <div className="text-gray-400 text-sm text-center p-4">
              Image not available
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">
          {description}
        </p>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border border-amber-500/0 group-hover:border-amber-500/30 rounded-xl transition-all duration-500 pointer-events-none" />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}




