import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300',
        'backdrop-blur-sm',
        hover && 'hover:shadow-2xl hover:-translate-y-1 hover:scale-105',
        className
      )}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

