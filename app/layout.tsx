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
    default: 'Reliable Sprinkler India | Fire Protection Systems — RiserTech Chennai',
    template: '%s | RiserTech — Reliable Sprinkler Distributor India',
  },
  description:
    'Authorised Indian distributor of Reliable Sprinkler Co. USA. UL/FM/LPCB certified fire sprinkler systems, ESFR, DDX pre-action & LB11 Li-ion sprinklers. Chennai. Call 9787666104.',
  keywords: [
    // Branded
    'reliable sprinkler india',
    'reliable fire sprinkler',
    'reliable sprinkler distributor india',
    'reliable sprinkler chennai',
    'reliable automatic sprinkler co india',
    // Generic high-intent
    'fire sprinkler systems india',
    'ESFR sprinklers india',
    'UL FM approved sprinklers india',
    'commercial fire protection equipment india',
    'pre-action fire suppression system india',
    'warehouse fire protection system india',
    // Emerging vertical
    'lithium ion battery fire protection india',
    'EV gigafactory fire suppression india',
    'BESS fire protection system india',
    'data centre fire sprinkler system india',
    'cold storage fire protection india',
    // Local
    'fire safety Chennai',
    'fire sprinkler supplier Chennai',
    'fire protection Tamil Nadu',
    'fire safety solutions India',
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
    siteName: 'RiserTech — Reliable Sprinkler Distributor India',
    title: 'Reliable Sprinkler India | UL/FM Fire Sprinkler Systems — RiserTech',
    description:
      'Authorised Indian distributor of Reliable Sprinkler Co. USA. UL/FM/LPCB certified fire sprinkler systems, ESFR storage, DDX pre-action & LB11 Li-ion sprinklers. Chennai.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RiserTech — Reliable Sprinkler Distributor India, Chennai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reliable Sprinkler India | UL/FM Fire Systems — RiserTech',
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
