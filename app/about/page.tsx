import { Card } from '@/components/ui/Card';
import { Card3D } from '@/components/ui/Card3D';
import { CheckCircle, Users, Award, Clock, Shield } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="relative py-12 md:py-16 min-h-[300px] md:min-h-[350px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/about-image-3-page.jpg"
            alt="About RiserTech Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized={process.env.NODE_ENV === 'development'}
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-amber-800/70 to-yellow-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            About RiserTech
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-white/95 drop-shadow-md">
            Your trusted partner in fire and safety solutions for over 12 years
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                At RiserTech, we are dedicated to protecting lives and property through innovative fire safety solutions.
                Our mission is to provide reliable, efficient, and compliant fire protection systems that give our
                clients peace of mind.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                With over 12 years of experience in the industry, we have built a reputation for excellence, reliability,
                and customer satisfaction. Our team of certified professionals is committed to delivering the highest
                quality service and solutions.
              </p>
            </div>
            <Card3D>
              <Card hover className="h-full group relative overflow-hidden">
                {/* Color overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-yellow-50/60 to-amber-100/80 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <Shield className="w-16 h-16 text-amber-600 mb-4 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors duration-300" />
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-300">Why Choose Us</h3>
                  <ul className="space-y-3">
                    {[
                      '12+ years of industry experience',
                      'Certified and licensed professionals',
                      '24/7 emergency support',
                      'Customized solutions for every need',
                      'Comprehensive maintenance services',
                      'Competitive pricing',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Card3D>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, number: '100+', label: 'Happy Clients', description: 'Satisfied customers across various industries' },
              { icon: Award, number: '12+', label: 'Years Experience', description: 'Over a decade of expertise in fire safety' },
              { icon: CheckCircle, number: '50+', label: 'Projects Done', description: 'Successfully completed projects' },
            ].map((item, index) => (
              <Card key={index} hover className="text-center">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-amber-600" />
                <h4 className="text-3xl font-bold mb-2">{item.number}</h4>
                <p className="text-lg font-semibold mb-2">{item.label}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

