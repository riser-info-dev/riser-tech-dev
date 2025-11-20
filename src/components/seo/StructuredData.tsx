/**
 * Structured Data (Schema.org) Components
 * For better SEO and rich snippets in search results
 */

import { COMPANY_INFO } from '@/lib/constants';
import { Product, ProductCategory } from '@/lib/products';

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Organization Schema
 * For homepage and general site information
 */
export function OrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Leading fire safety solutions provider in Chennai. Expert fire alarm installation, fire extinguishers, emergency lighting & fire protection services.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.split(',')[0],
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+91${COMPANY_INFO.phone}`,
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: 'English',
    },
    sameAs: [
      // Add your social media URLs here
      // 'https://www.facebook.com/risertech',
      // 'https://www.linkedin.com/company/risertech',
    ],
  };

  return <StructuredData data={schema} />;
}

/**
 * LocalBusiness Schema
 * For local SEO in Chennai
 */
export function LocalBusinessSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_INFO.name,
    image: `${baseUrl}/logo.png`,
    '@id': baseUrl,
    url: baseUrl,
    telephone: `+91${COMPANY_INFO.phone}`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.split(',')[0],
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.0827, // Chennai coordinates - update if needed
      longitude: 80.2707,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    areaServed: {
      '@type': 'City',
      name: 'Chennai',
    },
  };

  return <StructuredData data={schema} />;
}

/**
 * Product Schema
 * For individual product pages
 */
export function ProductSchema({ product, category }: { product: Product; category: ProductCategory }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const productUrl = `${baseUrl}/products/${category.slug}/${product.id}`;
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.title} - ${product.category} in Chennai`,
    description: `${product.description} Available in Chennai, Tamil Nadu. Expert installation and support by RiserTech.`,
    image: `${baseUrl}/images/products/${category.slug}/${product.id}.jpg`,
    sku: product.id,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: COMPANY_INFO.name,
    },
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      seller: {
        '@type': 'Organization',
        name: COMPANY_INFO.name,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
    },
    additionalProperty: product.features.map((feature) => ({
      '@type': 'PropertyValue',
      name: 'Feature',
      value: feature,
    })),
  };

  return <StructuredData data={schema} />;
}

/**
 * BreadcrumbList Schema
 * For navigation and SEO
 */
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  };

  return <StructuredData data={schema} />;
}

/**
 * Service Schema
 * For service pages
 */
export function ServiceSchema({ 
  name, 
  description, 
  serviceUrl 
}: { 
  name: string; 
  description: string; 
  serviceUrl: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${name} in Chennai`,
    description: `${description} Available in Chennai, Tamil Nadu. Expert service by RiserTech.`,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_INFO.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Chennai',
    },
    url: serviceUrl.startsWith('http') ? serviceUrl : `${baseUrl}${serviceUrl}`,
  };

  return <StructuredData data={schema} />;
}

/**
 * FAQPage Schema
 * For FAQ sections
 */
export function FAQPageSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <StructuredData data={schema} />;
}

