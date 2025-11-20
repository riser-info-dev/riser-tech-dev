import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProviders } from '@/components/providers/AppProviders';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Performance: swap fonts for better loading
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'RiserTech - Fire & Safety Solutions in Chennai | Expert Fire Protection Services',
    template: '%s | RiserTech - Fire Safety Experts Chennai',
  },
  description:
    'Leading fire safety solutions provider in Chennai. Expert fire alarm installation, fire extinguishers, emergency lighting & fire protection services. 12+ years experience. Call 9787666104',
  keywords: [
    'fire safety Chennai',
    'fire alarm installation Chennai',
    'fire extinguisher Chennai',
    'fire protection services Chennai',
    'emergency lighting Chennai',
    'fire safety equipment Chennai',
    'fire safety inspection Chennai',
    'fire suppression systems Chennai',
    'fire safety solutions Tamil Nadu',
    'best fire safety company Chennai',
  ],
  authors: [{ name: 'RiserTech' }],
  creator: 'RiserTech',
  publisher: 'RiserTech',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'RiserTech - Fire & Safety Solutions',
    title: 'RiserTech - Fire & Safety Solutions in Chennai | Expert Fire Protection',
    description:
      'Leading fire safety solutions provider in Chennai. Expert fire alarm installation, fire extinguishers & emergency lighting. 12+ years experience.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RiserTech - Fire & Safety Solutions Chennai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RiserTech - Fire & Safety Solutions Chennai',
    description: 'Expert fire safety solutions in Chennai. Fire alarms, extinguishers, emergency lighting & more.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
