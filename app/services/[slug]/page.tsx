import { SERVICES } from '@/lib/constants';
import { Card } from '@/components/ui/Card';
import { Button3D } from '@/components/ui/Button3D';
import { Bell, Lightbulb, Shield, Droplet, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const icons: Record<string, any> = {
  bell: Bell,
  lightbulb: Lightbulb,
  shield: Shield,
  droplet: Droplet,
  upgrade: TrendingUp,
  'check-circle': CheckCircle,
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  const Icon = icons[service.icon] || Shield;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Icon className="w-16 h-16 mb-4" />
          <h1 className="text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl max-w-3xl opacity-90">{service.description}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <h2 className="text-3xl font-bold mb-6">Service Features</h2>
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

