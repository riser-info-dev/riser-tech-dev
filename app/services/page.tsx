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
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 min-h-[233px] md:min-h-[329px] lg:min-h-[383px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/about-image-3-page.jpg"
            alt="Our Services Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized={process.env.NODE_ENV === 'development'}
          />
          
          {/* Overlay - Enhanced gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/80 via-indigo-700/70 to-slate-800/60"></div>
          
          {/* Additional depth overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Breadcrumb Navigation - Upper Left */}
        <div className="absolute top-20 sm:top-24 left-4 sm:left-6 md:left-8 z-20">
          <nav className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-amber-500 font-semibold relative">
              Services
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></span>
            </span>
          </nav>
        </div>

        {/* Abstract Geometric Shapes - Far Right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="flex flex-col gap-2">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm transform rotate-45"></div>
            <div className="w-20 h-20 bg-gray-200/30 backdrop-blur-sm transform rotate-45 ml-4"></div>
            <div className="w-14 h-14 bg-white/15 backdrop-blur-sm transform rotate-45 ml-8"></div>
          </div>
        </div>

        {/* Text Box - Lower Left - Mobile Adjusted */}
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-4 sm:left-6 md:left-8 lg:left-12 z-20 max-w-[calc(100vw-2rem)] sm:max-w-none">
          <div className="bg-gray-900/70 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-5 md:px-8 md:py-6 rounded-lg border border-gray-700/50 shadow-2xl"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)' }}
          >
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1">
              Comprehensive Solutions
            </p>
            <p className="text-amber-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              For Fire Safety Excellence
            </p>
          </div>
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

