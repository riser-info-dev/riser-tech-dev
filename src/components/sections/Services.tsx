import { Card } from '@/components/ui/Card';
import { Button3D } from '@/components/ui/Button3D';
import { LensHeading } from '@/components/ui/LensHeading';
import { SERVICES } from '@/lib/constants';
import { Bell, Lightbulb, Shield, Droplet, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const icons: Record<string, any> = {
  bell: Bell,
  lightbulb: Lightbulb,
  shield: Shield,
  droplet: Droplet,
  upgrade: TrendingUp,
  'check-circle': CheckCircle,
};

export function Services() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <LensHeading as="h2" className="text-4xl font-bold mb-4" magnify={2.5}>
            Our Services
          </LensHeading>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our comprehensive range of fire safety services designed to keep your property safe and compliant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = icons[service.icon] || Shield;
            return (
              <div key={service.id} className="group relative" data-card="true">
                <Card 
                  hover 
                  data-card="true"
                  className="group h-full relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group-hover:border-amber-300/60 dark:group-hover:border-amber-600/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                      {/* Icon - stable */}
                      <Icon className="w-12 h-12 text-amber-600 mb-4 group-hover:text-amber-500 transition-colors duration-300" />
                      
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Read More button - disabled for now */}
                    {/* <Link href={`/services/${service.id}`} className="block">
                        <Button3D 
                          variant="outline" 
                          disable3D={true}
                          className="w-full group-hover:bg-amber-50 dark:group-hover:bg-amber-900/20 group-hover:border-amber-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-all duration-300"
                        >
                        Read more
                      </Button3D>
                    </Link> */}
                  </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

