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
  imageHeight?: string;
  variant?: 'default' | 'full-bleed';
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
  imageHeight = 'h-48 sm:h-56 md:h-64 lg:h-72',
  variant = 'default',
  delay = 0,
}: ProductCard3DProps) {
  const [imageError, setImageError] = useState(false);

  // ── Full-bleed variant: image covers entire card, title overlaid at bottom ──
  if (variant === 'full-bleed') {
    const bleedContent = (
      <div
        className={cn(
          'group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1',
          className
        )}
        data-card="true"
      >
        {!imageError ? (
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-500 text-sm font-medium">{title}</span>
          </div>
        )}

        {/* Title strip — always visible */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pb-3 pt-8 px-3 text-center">
          <h3 className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight">
            {title}
          </h3>
        </div>

        {/* Hover overlay — description slides up */}
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center p-3 sm:p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
          <h3 className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight mb-1.5">
            {title}
          </h3>
          {description.includes('•') ? (
            <ul className="inline-block text-left mx-auto space-y-0.5 mt-0.5">
              {description.split('•').map((item) => item.trim()).filter(Boolean).map((item, i) => (
                <li key={i} className="flex items-start gap-1 text-white/80 text-[10px] sm:text-xs leading-snug">
                  <span className="text-amber-400 mt-px shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white/80 text-[10px] sm:text-xs leading-snug text-center">
              {description}
            </p>
          )}
          {href && (
            <span className="inline-block mt-2 text-[10px] sm:text-xs text-amber-300 font-semibold">
              View Products →
            </span>
          )}
        </div>

        {/* Amber border on hover */}
        <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/60 rounded-xl transition-all duration-500 pointer-events-none" />
      </div>
    );

    if (href) {
      return (
        <Link href={href} className="block">
          {bleedContent}
        </Link>
      );
    }
    return bleedContent;
  }

  // ── Default variant ────────────────────────────────────────────────────────
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
      <div className={cn('product-image relative bg-gray-50 dark:bg-gray-700/50 overflow-hidden', imageHeight)}>
        {!imageError && (
          <div className="absolute inset-x-0 inset-y-2 sm:inset-y-3 md:inset-y-4">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              onError={() => setImageError(true)}
            />
          </div>
        )}
        {imageError && (
          <div className="absolute inset-x-0 inset-y-2 sm:inset-y-3 md:inset-y-4 flex items-center justify-center">
            <div className="text-gray-400 text-xs sm:text-sm text-center p-4">
              Image not available
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="product-content p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed flex-1">
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




