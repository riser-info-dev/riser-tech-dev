'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { LensHeading } from '@/components/ui/LensHeading';
import { FAQPageSchema } from '@/components/seo/StructuredData';
import { Button3D } from '@/components/ui/Button3D';

const faqs = [
  {
    question: 'How often should fire safety systems be inspected in Chennai?',
    answer:
      'Fire safety systems should be inspected annually by a certified professional in Chennai. However, some systems may require more frequent inspections depending on local Tamil Nadu regulations and system type. Commercial properties typically need quarterly inspections.',
  },
  {
    question: 'What types of fire systems do you install in Chennai?',
    answer:
      'We install a wide range of fire safety systems in Chennai including fire alarms, sprinkler systems, emergency lighting, fire suppression systems, smoke detection systems, fire extinguishers, and hydrant systems. We serve commercial, industrial, and residential properties across Chennai and Tamil Nadu.',
  },
  {
    question: 'Do you offer maintenance services for fire systems in Chennai?',
    answer:
      'Yes, we provide comprehensive maintenance services in Chennai to ensure your fire safety systems remain in optimal working condition. Our maintenance plans include regular inspections, testing, repairs, and compliance certification. We offer Annual Maintenance Contracts (AMC) for all fire safety systems.',
  },
  {
    question: 'Can you customize fire systems for unique properties in Chennai?',
    answer:
      'Absolutely! We design and install customized fire safety solutions tailored to your specific property requirements in Chennai. Whether it is a commercial building, industrial facility, or residential property, we ensure optimal protection and compliance with Tamil Nadu fire safety regulations.',
  },
  {
    question: 'How often should fire alarms be tested in Chennai?',
    answer:
      'Fire alarms should be tested monthly by the property owner. Professional testing and inspection should be conducted annually by certified technicians in Chennai. Commercial properties may require more frequent testing as per Tamil Nadu fire safety regulations.',
  },
  {
    question: 'What is the cost of fire alarm installation in Chennai?',
    answer:
      'The cost of fire alarm installation in Chennai varies based on property size, system type, and complexity. For a free quote tailored to your specific requirements, contact RiserTech at 9787666104. We offer competitive pricing and flexible payment options.',
  },
  {
    question: 'Do you provide fire safety services in all areas of Chennai?',
    answer:
      'Yes, RiserTech provides fire safety services throughout Chennai including T Nagar, Anna Nagar, Adyar, Velachery, OMR, and all other areas. We also serve clients across Tamil Nadu. Our team can reach your location quickly for installations and emergency services.',
  },
  {
    question: 'Are your fire safety products certified and approved?',
    answer:
      'Yes, all our fire safety products are certified and approved by relevant authorities including BIS (Bureau of Indian Standards), EN3 standards, and meet Tamil Nadu fire safety regulations. We only supply certified, high-quality fire safety equipment.',
  },
  {
    question: 'How long does fire system installation take in Chennai?',
    answer:
      'Installation time depends on the system type and property size. A standard fire alarm system for a small commercial property typically takes 2-3 days. Larger installations may take 1-2 weeks. We provide accurate timelines during our free consultation.',
  },
  {
    question: 'Do you offer 24/7 emergency fire safety support in Chennai?',
    answer:
      'Yes, RiserTech offers 24/7 emergency support for fire safety systems in Chennai. Our emergency response team is available round the clock to address urgent issues, system malfunctions, or emergency repairs. Call 9787666104 for immediate assistance.',
  },
  {
    question: 'What fire safety regulations apply in Chennai and Tamil Nadu?',
    answer:
      'Fire safety regulations in Chennai and Tamil Nadu are governed by the Tamil Nadu Fire and Rescue Services Department. Commercial and industrial properties must comply with the National Building Code, local fire safety norms, and obtain necessary fire safety certificates. We help ensure full compliance.',
  },
  {
    question: 'Can you help with fire safety certification in Chennai?',
    answer:
      'Yes, RiserTech assists with fire safety certification in Chennai. We conduct inspections, ensure compliance with Tamil Nadu fire safety regulations, prepare necessary documentation, and help you obtain fire safety certificates from the relevant authorities.',
  },
];

// Number of FAQs to show initially
const INITIAL_FAQS_COUNT = 5;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  // Determine which FAQs to display
  const displayedFaqs = showAll ? faqs : faqs.slice(0, INITIAL_FAQS_COUNT);
  const hasMoreFaqs = faqs.length > INITIAL_FAQS_COUNT;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <FAQPageSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <LensHeading as="h2" className="text-4xl font-bold mb-4" magnify={2.5}>
            Frequently Asked Questions About Fire Safety in Chennai
          </LensHeading>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to know about fire safety services in Chennai
          </p>
        </div>

        <div className="space-y-4">
          {displayedFaqs.map((faq, index) => (
            <Card key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 dark:text-gray-400">{faq.answer}</p>
              )}
            </Card>
          ))}
        </div>

        {/* See More / See Less Button */}
        {hasMoreFaqs && (
          <div className="text-center mt-8">
            <Button3D
              variant="outline"
              onClick={() => {
                setShowAll(!showAll);
                // Reset open index when toggling
                setOpenIndex(null);
              }}
              className="px-6 py-3"
            >
              {showAll ? 'See Less' : 'See More'}
            </Button3D>
          </div>
        )}
      </div>
    </section>
  );
}

