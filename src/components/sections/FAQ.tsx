'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { LensHeading } from '@/components/ui/LensHeading';

const faqs = [
  {
    question: 'How often should fire safety systems be inspected?',
    answer:
      'Fire safety systems should be inspected annually by a certified professional. However, some systems may require more frequent inspections depending on local regulations and system type.',
  },
  {
    question: 'What types of fire systems do you install?',
    answer:
      'We install a wide range of fire safety systems including fire alarms, sprinkler systems, emergency lighting, fire suppression systems, and smoke detection systems.',
  },
  {
    question: 'Do you offer maintenance services for fire systems?',
    answer:
      'Yes, we provide comprehensive maintenance services to ensure your fire safety systems remain in optimal working condition. Our maintenance plans include regular inspections, testing, and repairs.',
  },
  {
    question: 'Can you customize fire systems for unique properties?',
    answer:
      'Absolutely! We design and install customized fire safety solutions tailored to your specific property requirements, ensuring optimal protection and compliance.',
  },
  {
    question: 'How often should fire alarms be tested?',
    answer:
      'Fire alarms should be tested monthly by the property owner. Professional testing and inspection should be conducted annually by certified technicians.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <LensHeading as="h2" className="text-4xl font-bold mb-4" magnify={2.5}>
            Frequently Asked Questions
          </LensHeading>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to know about fire safety
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
      </div>
    </section>
  );
}

