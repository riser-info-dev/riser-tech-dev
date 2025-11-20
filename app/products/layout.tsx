import { Metadata } from 'next';
import { OrganizationSchema, LocalBusinessSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Fire Safety Products in Chennai | Complete Range - RiserTech',
  description:
    'Browse our complete range of fire safety products in Chennai. Fire extinguishers, sprinklers, suppression systems, hydrants, alarms, and valves. Expert installation and support. 12+ years experience.',
  keywords: [
    'fire safety products Chennai',
    'fire extinguishers Chennai',
    'fire sprinklers Chennai',
    'fire suppression systems Chennai',
    'fire hydrants Chennai',
    'fire alarms Chennai',
    'fire safety equipment Chennai',
    'buy fire safety products Chennai',
    'fire safety products Tamil Nadu',
    'best fire safety products Chennai',
  ],
  openGraph: {
    title: 'Fire Safety Products in Chennai | RiserTech',
    description:
      'Complete range of fire safety products in Chennai. Fire extinguishers, sprinklers, suppression systems, and more. Expert installation and support.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/products`,
    type: 'website',
  },
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      {children}
    </>
  );
}


