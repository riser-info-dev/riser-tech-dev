'use client';

import { LoadingProvider } from '@/contexts/LoadingContext';
import { PageLoader } from '@/components/features/PageLoader';
import { LoadingContent } from '@/components/features/LoadingContent';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { VisitorTracker } from '@/components/features/VisitorTracker';
import { CookieConsent } from '@/components/features/CookieConsent';
import { ScrollToTop } from '@/components/features/ScrollToTop';
import { CustomCursor } from '@/components/features/CustomCursor';
import { ReactNode } from 'react';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LoadingProvider>
      <PageLoader />
      <CustomCursor />
      <LoadingContent>
        <VisitorTracker />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <ScrollToTop />
      </LoadingContent>
    </LoadingProvider>
  );
}

