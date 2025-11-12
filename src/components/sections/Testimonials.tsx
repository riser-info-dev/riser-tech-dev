import { Card } from '@/components/ui/Card';
import { LensHeading } from '@/components/ui/LensHeading';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    name: 'Oliver Spaltn',
    role: 'CEO',
    company: 'D.B.A Pvt. Ltd',
    content:
      'As a restaurant owner, fire safety is a top priority. RiserTech installed a kitchen fire suppression system that meets all regulations and gives me peace of mind during busy hours.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ronald Richards',
    role: 'MD',
    company: 'D.B.A Pvt. Ltd',
    content:
      'Professional service from start to finish. The team was knowledgeable, efficient, and ensured our office building is fully compliant with fire safety regulations.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Brooklyn Simmons',
    role: 'BOD',
    company: 'D.B.A Pvt. Ltd',
    content:
      'Outstanding work on our fire alarm system upgrade. The new system is more reliable and the installation was completed with minimal disruption to our operations.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <LensHeading as="h2" className="text-4xl font-bold mb-4" magnify={2.5}>
            Testimonials
          </LensHeading>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Why our clients trust us for fire safety solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} hover className="group">
              <Quote className="w-8 h-8 text-blue-600 mb-4 group-hover:text-indigo-600 transition-colors duration-300" />
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                {testimonial.content}
              </p>
              <div>
                <h4 className="font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 cursor-default">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

