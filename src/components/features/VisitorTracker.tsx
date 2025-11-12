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

        await fetch('/api/track-visitor', {
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
      } catch (error) {
        // Silent fail - visitor tracking should not break the site
        console.error('Visitor tracking failed:', error);
      }
    };

    trackVisitor();
  }, []);

  return null;
}

