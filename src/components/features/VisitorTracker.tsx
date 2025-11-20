'use client';

import { useEffect } from 'react';

export function VisitorTracker() {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const page = window.location.pathname;
        const referrer = document.referrer;
        const userAgent = navigator.userAgent;
        const language = navigator.language;

        const response = await fetch('/api/track-visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page,
            referrer,
            userAgent,
            language,
          }),
        });

        // Only log errors in development
        if (!response.ok && process.env.NODE_ENV === 'development') {
          console.warn('Visitor tracking response not ok:', response.status);
        }
      } catch (error) {
        // Silent fail - visitor tracking should not break the site
        // Only log in development mode
        if (process.env.NODE_ENV === 'development') {
          console.warn('Visitor tracking failed (silent):', error);
        }
      }
    };

    // Add small delay to ensure page is fully loaded
    const timer = setTimeout(() => {
      trackVisitor();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}

