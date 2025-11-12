import { SERVICES } from '@/lib/constants';
import { Card } from '@/components/ui/Card';
import { Button3D } from '@/components/ui/Button3D';
import { Bell, Lightbulb, Shield, Droplet, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const icons: Record<string, any> = {
  bell: Bell,
  lightbulb: Lightbulb,
  shield: Shield,
  droplet: Droplet,
  upgrade: TrendingUp,
  'check-circle': CheckCircle,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="relative py-12 md:py-16 min-h-[300px] md:min-h-[350px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/about-image-2-page.jpg"
            alt="Our Services Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized={process.env.NODE_ENV === 'development'}
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-800/70 to-blue-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-white/95 drop-shadow-md">
            Comprehensive fire safety solutions tailored to your needs
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = icons[service.icon] || Shield;
              return (
                <Card key={service.id} hover>
                  <Icon className="w-16 h-16 text-red-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.id}`}>
                    <Button3D variant="outline" className="w-full">
                      Learn More
                    </Button3D>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

