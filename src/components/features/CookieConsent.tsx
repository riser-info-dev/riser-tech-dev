'use client';

import { useState, useEffect } from 'react';
import { Button3D } from '@/components/ui/Button3D';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black bg-opacity-50">
      <Card className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We use cookies to enhance your browsing experience and analyze site traffic. By clicking &quot;Accept&quot;,
              you consent to our use of cookies.{' '}
              <Link href="/cookie-policy" className="text-blue-600 hover:underline">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex gap-3">
            <Button3D variant="outline" size="sm" onClick={handleReject}>
              Reject
            </Button3D>
            <Button3D variant="primary" size="sm" onClick={handleAccept}>
              Accept
            </Button3D>
          </div>
        </div>
      </Card>
    </div>
  );
}

