import { SERVICES } from '@/lib/constants';
import { Card } from '@/components/ui/Card';
import { Button3D } from '@/components/ui/Button3D';
import { Bell, Lightbulb, Shield, Droplet, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

const icons: Record<string, any> = {
  bell: Bell,
  lightbulb: Lightbulb,
  shield: Shield,
  droplet: Droplet,
  upgrade: TrendingUp,
  'check-circle': CheckCircle,
};

// Generate metadata for service pages
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = SERVICES.find((s) => s.id === params.slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const serviceTitle = `${service.title} in Chennai | Fire Safety Services - RiserTech`;
  const serviceDescription = `${service.description} Available in Chennai, Tamil Nadu. Expert installation and support by RiserTech. ${service.features.slice(0, 3).join('. ')}. Call 9787666104 for a free quote.`;

  return {
    title: serviceTitle,
    description: serviceDescription,
    keywords: [
      `${service.title} Chennai`,
      `${service.title} Tamil Nadu`,
      `fire safety ${service.title.toLowerCase()} Chennai`,
      `best ${service.title.toLowerCase()} company Chennai`,
      `professional ${service.title.toLowerCase()} Chennai`,
      `fire safety services Chennai`,
    ],
    openGraph: {
      title: `${service.title} in Chennai | RiserTech`,
      description: serviceDescription,
      url: `${baseUrl}/services/${service.id}`,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/services/${service.id}.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.title} - RiserTech Chennai`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} in Chennai | RiserTech`,
      description: serviceDescription,
    },
    alternates: {
      canonical: `/services/${service.id}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  const Icon = icons[service.icon] || Shield;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Breadcrumbs for service page
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.id}` },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ServiceSchema 
        name={service.title}
        description={service.description}
        serviceUrl={`/services/${service.id}`}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-white font-semibold">{service.title}</li>
            </ol>
          </nav>
          
          <Icon className="w-16 h-16 mb-4" />
          <h1 className="text-5xl font-bold mb-6">{service.title} in Chennai</h1>
          <p className="text-xl max-w-3xl opacity-90">
            {service.description} Available in Chennai, Tamil Nadu. Expert installation and support by RiserTech.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Content Section */}
          <div className="mb-8 text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Professional {service.title} Services in Chennai
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Looking for expert <strong>{service.title}</strong> in Chennai? RiserTech provides comprehensive 
              {service.title.toLowerCase()} services for commercial, industrial, and residential properties across Chennai and Tamil Nadu. 
              With over 12 years of experience, we deliver certified, reliable fire safety solutions tailored to your needs.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Our {service.title.toLowerCase()} services include professional installation, regular maintenance, 
              compliance certification, and 24/7 emergency support. We serve clients throughout Chennai including 
              areas like T Nagar, Anna Nagar, Adyar, and across Tamil Nadu.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Contact RiserTech today for a free consultation and quote. Call us at <strong>9787666104</strong> or 
              fill out our enquiry form to discuss your fire safety requirements.
            </p>
          </div>
          
          <Card className="mb-8">
            <h2 className="text-3xl font-bold mb-6">Key Features of Our {service.title} Service</h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="flex gap-4">
            <Link href="/contact">
              <Button3D size="lg">Get a Quote</Button3D>
            </Link>
            <Link href="/services">
              <Button3D variant="outline" size="lg">
                View All Services
              </Button3D>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

