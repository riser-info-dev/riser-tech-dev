import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProviders } from '@/components/providers/AppProviders';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'RiserTech - Fire & Safety Solutions',
  description: 'Your trusted partner for comprehensive fire and safety solutions. Protecting what matters most with reliable systems and expert service.',
  keywords: 'fire safety, fire alarm, fire protection, safety solutions, emergency lighting',
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
