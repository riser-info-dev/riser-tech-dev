'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { LensHeading } from '@/components/ui/LensHeading';
import { FAQPageSchema } from '@/components/seo/StructuredData';


const faqs = [
  {
    question: 'Is RiserTech an authorised distributor of Reliable Sprinkler in India?',
    answer:
      'Yes. RiserTech is an authorised Indian distribution partner for Reliable Automatic Sprinkler Co., USA — one of the world\'s leading manufacturers of UL Listed and FM Approved fire sprinkler systems. We supply genuine Reliable Sprinkler products including sprinkler heads, system valves, grooved connections, and pre-action systems across India from our base in Chennai, Tamil Nadu.',
  },
  {
    question: 'What Reliable Sprinkler products does RiserTech supply in India?',
    answer:
      'RiserTech supplies the complete Reliable Sprinkler product portfolio in India: fire sprinkler heads (Quick Response, Standard Response, ESFR, residential), system valves (alarm check valves, deluge, dry-pipe, pre-action), grooved pipe connections (couplings, fittings, flanges), general purpose valves (OS&Y gate, butterfly, check), and the LB11 lithium-ion battery storage sprinkler. All products are UL Listed and/or FM Approved.',
  },
  {
    question: 'What is an ESFR sprinkler and do I need it for my warehouse in India?',
    answer:
      'ESFR (Early Suppression Fast Response) sprinklers are high-flow sprinklers designed to suppress fires at the point of ignition in high-bay warehouses and storage facilities — eliminating the need for in-rack sprinklers. If your warehouse stores goods more than 4.5 metres high, ESFR sprinklers are typically required under NFPA 13. RiserTech supplies Reliable\'s P22, M336, JL14, and JL17 ESFR models, which are among the most widely used in India\'s logistics and cold-storage sector.',
  },
  {
    question: 'What is the LB11 sprinkler and is it available in India?',
    answer:
      'The Reliable LB11 (Bulletin 083) is the world\'s first UL Listed sprinkler specifically designed to suppress lithium-ion battery fires — used in EV gigafactories, BESS energy storage plants, and data centres. It delivers a high-density water application pattern engineered for the unique thermal runaway characteristics of Li-ion batteries. RiserTech is able to source and supply the LB11 sprinkler in India. Contact us at 9787666104 to discuss your project.',
  },
  {
    question: 'What is a DDX pre-action fire suppression system?',
    answer:
      'The Reliable DDX (Bulletin 749) is a double-interlock pre-action valve that requires both a detection signal and sprinkler activation before water is released — making it ideal for data centres, IT parks, server rooms, and cold storage facilities where accidental water discharge must be avoided. RiserTech designs and supplies complete DDX pre-action systems including the valve, detection, and control panel in India.',
  },
  {
    question: 'Are Reliable Sprinkler products UL Listed and FM Approved?',
    answer:
      'Yes. Reliable Automatic Sprinkler Co. products are independently tested and listed by Underwriters Laboratories (UL), Factory Mutual (FM), LPCB (Loss Prevention Certification Board), and VdS (German fire standard). These are the highest internationally recognised fire protection certifications. All products supplied by RiserTech in India carry the relevant listings and approvals.',
  },
  {
    question: 'How often should fire sprinkler systems be inspected in Chennai?',
    answer:
      'Under NFPA 25 (the standard for inspection, testing and maintenance of water-based fire protection systems), wet-pipe sprinkler systems require quarterly inspections of gauges, annual inspector\'s test, and a 5-year internal inspection. In Chennai and Tamil Nadu, the Tamil Nadu Fire and Rescue Services Department may also mandate inspections as part of your building\'s fire NOC renewal. RiserTech offers Annual Maintenance Contracts (AMC) for all Reliable Sprinkler systems.',
  },
  {
    question: 'Can RiserTech design and install a complete fire sprinkler system in Chennai?',
    answer:
      'Yes. RiserTech provides end-to-end fire sprinkler services in Chennai — from hydraulic design and product supply to installation and commissioning. Our team handles wet-pipe, dry-pipe, deluge, and pre-action sprinkler systems for warehouses, data centres, commercial buildings, industrial plants, and cold-storage facilities. We ensure NFPA 13 compliance and assist with fire NOC documentation for Tamil Nadu authorities.',
  },
  {
    question: 'What is the cost of a fire sprinkler system installation in Chennai?',
    answer:
      'The cost varies significantly based on system type (wet, dry, ESFR, pre-action), area to be protected, ceiling height, and occupancy hazard classification. Typically, a wet-pipe system for a commercial building starts from ₹80–120 per sq. ft. ESFR warehouse systems and DDX pre-action systems are priced based on hydraulic design. Contact RiserTech at 9787666104 for a free site assessment and detailed quotation.',
  },
  {
    question: 'Does RiserTech serve locations outside Chennai?',
    answer:
      'Yes. While RiserTech is headquartered in Chennai, Tamil Nadu, we supply Reliable Sprinkler products and provide fire protection services across India — including Bengaluru, Hyderabad, Pune, Mumbai, Delhi NCR, Ahmedabad, and Kolkata. For large infrastructure, logistics, and industrial projects across India, reach out to us at 9787666104 or through our contact page.',
  },
  {
    question: 'What fire safety regulations apply to sprinkler systems in Tamil Nadu?',
    answer:
      'Fire sprinkler systems in Tamil Nadu must comply with the National Building Code of India (NBC 2016), NFPA 13 (for sprinkler design), and the Tamil Nadu Fire Services Act. Commercial, industrial, and high-rise buildings require a fire NOC from the Tamil Nadu Fire and Rescue Services Department. RiserTech helps clients navigate compliance, prepare documentation, and obtain fire safety clearances.',
  },
  {
    question: 'Can I get a free consultation for Reliable Sprinkler products in India?',
    answer:
      'Yes. RiserTech offers free technical consultations for fire sprinkler system design, product selection, and compliance guidance across India. Whether you are specifying ESFR for a new warehouse, DDX for a data centre, or LB11 for an EV battery plant, our team will help you select the right Reliable Sprinkler solution. Call 9787666104 or submit a request through our Contact page.',
  },
];

// Show only top 5 in UI — all 12 remain in FAQPageSchema for Google rich results
const VISIBLE_FAQS = faqs.slice(0, 5);

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      {/* All 12 FAQs sent as JSON-LD structured data for Google — not rendered in UI */}
      <FAQPageSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <LensHeading as="h2" className="text-4xl font-bold mb-4" magnify={2.5}>
            RiserTech Chennai — Reliable Sprinkler India FAQs
          </LensHeading>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            RiserTech, Chennai's authorised Reliable Sprinkler distributor — answers to common questions about fire sprinkler systems, products, and services across India
          </p>
        </div>

        <div className="space-y-4">
          {VISIBLE_FAQS.map((faq, index) => (
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

