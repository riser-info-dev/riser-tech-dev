'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HoverTextProps {
  children: ReactNode;
  className?: string;
  hoverColor?: string;
}

export function HoverText({ children, className, hoverColor = 'text-blue-600' }: HoverTextProps) {
  return (
    <span
      className={cn(
        'transition-colors duration-300 cursor-default',
        `hover:${hoverColor}`,
        className
      )}
    >
      {children}
    </span>
  );
}

