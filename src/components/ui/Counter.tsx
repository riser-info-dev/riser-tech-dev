'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function Counter({ 
  end, 
  start, 
  duration = 2000, 
  suffix = '', 
  prefix = '', 
  className = '' 
}: CounterProps) {
  const [count, setCount] = useState(start ?? 0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    // Reset to start value when in view
    const startValue = start ?? 0;
    setCount(startValue);

    let startTime: number | null = null;
    const endValue = end;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
        setHasAnimated(true);
      }
    };

    // Small delay to ensure smooth start
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [isInView, end, start, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
