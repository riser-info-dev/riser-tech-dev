import { Card } from '@/components/ui/Card';
import { LensHeading } from '@/components/ui/LensHeading';
import { EnquiryForm } from './EnquiryForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export function Contact() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <LensHeading as="h2" className="text-4xl font-bold mb-4" magnify={2.5}>
            Contact Us
          </LensHeading>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Your safety partner is just a call away. Get in touch with us for expert fire safety solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card hover className="text-center">
            <Phone className="w-12 h-12 mx-auto mb-4 text-amber-600" />
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <a href={`tel:${COMPANY_INFO.phone}`} className="text-amber-600 hover:underline">
              {COMPANY_INFO.phone}
            </a>
          </Card>

          <Card hover className="text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 text-amber-600" />
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-amber-600 hover:underline">
              {COMPANY_INFO.email}
            </a>
          </Card>

          <Card hover className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-600" />
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{COMPANY_INFO.address}</p>
          </Card>
        </div>


      </div>
    </section>
  );
}

