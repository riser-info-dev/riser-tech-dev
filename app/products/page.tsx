'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProductSection } from '@/components/sections/ProductSection';
import { ProductCard3D } from '@/components/sections/ProductCard3D';
import { ProductSlide } from '@/components/sections/ProductSlide';
import { ProductCardSlider } from '@/components/sections/ProductCardSlider';
import { ConeSlideDesign } from '@/components/sections/ConeSlideDesign';

// Product data
const fireExtinguishers = [
  {
    id: '1',
    title: 'ABC Powder Fire Extinguisher',
    description: 'Versatile multi-purpose fire extinguisher suitable for Class A, B, and C fires. Ideal for commercial and industrial applications.',
    image: '/images/products/fire-extinguishers/abc-powder-1.png',
  },
  {
    id: '2',
    title: 'CO2 Fire Extinguisher',
    description: 'Carbon dioxide extinguisher perfect for electrical fires and sensitive equipment. Clean discharge with no residue.',
    image: '/images/products/fire-extinguishers/co2-1.png',
  },
  {
    id: '3',
    title: 'Clean Agent Extinguisher',
    description: 'Advanced clean agent technology for safe and effective fire suppression. Suitable for multiple fire classes and sensitive equipment.',
    image: '/images/products/fire-extinguishers/clean-agent-1.png',
  },
];

const sprinklers = [
  {
    id: '1',
    title: 'Residential Sprinklers',
    description: 'Upright • Pendent • Horizontal Sidewall • Flat Plate Concealed • Domed Concealed',
    image: '/images/products/sprinklers/residential-1.jpg',
  },
  {
    id: '2',
    title: 'Standard Coverage - Standard Response',
    description: 'Upright & Conventional • Pendent, Sidewall • Stainless Steel, Fusible Link • Flat Plate Concealed • Flexible Sprinkler Series',
    image: '/images/products/sprinklers/standard-coverage-standard-response-1.jpg',
  },
  {
    id: '3',
    title: 'Standard Coverage - Quick Response',
    description: 'Upright & Conventional • Pendent, Sidewall • Stainless Steel, Fusible Link • Flat Plate Concealed • Flexible Sprinkler Series',
    image: '/images/products/sprinklers/standard-coverage-quick-response-1.jpg',
  },
  {
    id: '4',
    title: 'Extended Coverage Sprinklers',
    description: 'Upright & Pendent • Horizontal Sidewall • Fusible Link',
    image: '/images/products/sprinklers/extended-coverage-1.jpg',
  },
  {
    id: '5',
    title: 'Storage Sprinklers',
    description: 'Early Suppression Fast Response (ESFR) • Control Mode / Density Area (CMDA) • Control Mode Specific Application (CMSA) and EC Storage • Dry Storage and ESFR • Intermediate Level In-Rack',
    image: '/images/products/sprinklers/storage-1.jpg',
  },
  {
    id: '6',
    title: 'Dry Barrel Sprinklers',
    description: 'Standard Coverage – Standard Response • Storage Sprinklers • Residential Sprinklers • Dry Barrel Sprinklers',
    image: '/images/products/sprinklers/dry-barrel-1.jpg',
  },
  {
    id: '7',
    title: 'Spray Nozzles & Accessories',
    description: '• Frame Style Spray Nozzle • Model A-2,D-2 Solid Cone Spray Nozzle • Model C-1 Window Sprinkler • Model E Spray Nozzle • Model EM Low Pressure Mist Nozzle',
    image: '/images/products/sprinklers/spray-nozzles-1.jpg',
  },
];

const fireSuppressionSystems = [
  {
    id: '1',
    title: 'Total Flooding Fluoroketone (FK) Based Fire Suppression System',
    description: 'Advanced fluoroketone-based fire suppression system providing total flooding protection for critical facilities and sensitive equipment.',
    image: '/images/products/fire-suppression/fk-based-1.jpg',
  },
  {
    id: '2',
    title: 'IN-PANEL TUBE BASED SUPPRESSION: CQRS',
    description: 'Innovative in-panel tube-based suppression system with CQRS technology for targeted fire protection in electrical panels and control systems.',
    image: '/images/products/fire-suppression/cqrs-1.jpg',
  },
  {
    id: '3',
    title: 'LPCB Certified Commercial Kitchen Suppression System (Wet Chemical Based)',
    description: 'LPCB certified wet chemical-based suppression system specifically designed for commercial kitchen fire protection, meeting the highest safety standards.',
    image: '/images/products/fire-suppression/kitchen-suppression-1.jpg',
  },
];

const hydrantsAccessories = [
  {
    id: '1',
    title: 'Hydrants',
    description: 'Complete fire hydrant systems with reliable water supply for building fire protection and emergency response.',
    image: '/images/products/hydrants/hydrants-1.jpg',
  },
  {
    id: '2',
    title: 'Hose Reels & Cabinets',
    description: 'High-quality fire hose reels and cabinets for easy access and organized storage during emergencies.',
    image: '/images/products/hydrants/hose-reels-cabinets-1.jpg',
  },
  {
    id: '3',
    title: 'Gate Valve 200 PSI – OS&Y Type Flanged',
    description: 'Reliable valves for fire protection systems ensuring proper water flow control and system operation.',
    image: '/images/products/hydrants/valves-1.jpg',
  },
  {
    id: '4',
    title: 'Foam Equipment',
    description: 'Advanced foam equipment for fire suppression including foam generators, proportioners, and delivery systems.',
    image: '/images/products/hydrants/foam-equipment-1.jpg',
  },
  {
    id: '5',
    title: 'RRL Fire Hose',
    description: 'High-performance RRL (Rubber Reinforced Lining) fire hoses designed for durability and reliable water delivery.',
    image: '/images/products/hydrants/rrl-fire-hose-1.jpg',
  },
  {
    id: '6',
    title: 'Branch Pipes',
    description: 'Professional branch pipes for firefighting with adjustable flow control and reliable water stream delivery.',
    image: '/images/products/hydrants/branch-pipes-1.jpg',
  },
  {
    id: '7',
    title: 'Water Spray Nozzle',
    description: 'Efficient water spray nozzles for fire suppression with adjustable patterns and optimal water distribution.',
    image: '/images/products/hydrants/water-spray-nozzle-1.jpg',
  },
  {
    id: '8',
    title: 'Two-Way and Four Way Inlet Breeching',
    description: 'Versatile inlet breeching systems allowing multiple connection points for enhanced firefighting capabilities and water supply.',
    image: '/images/products/hydrants/inlet-breeching-1.jpg',
  },
];

const alarmSolutions = [
  {
    id: '1',
    title: 'Fire Alarm Control Panel',
    description: 'Advanced fire alarm control panel with intelligent detection and notification capabilities.',
    image: '/images/products/alarm/control-panel-1.jpg',
  },
  {
    id: '2',
    title: 'Smoke Detector',
    description: 'Reliable smoke detector with advanced sensing technology for early fire detection.',
    image: '/images/products/alarm/smoke-detector-1.jpg',
  },
  {
    id: '3',
    title: 'MANUAL CALL POINT (MCP)',
    description: 'A Manual Call Point is a crucial component of any fire alarm system, allowing individuals to manually trigger an alarm during an emergency',
    image: '/images/products/alarm/mcp-1.jpg',
  },
];

const valves = [
  {
    id: '1',
    title: 'Alarm Valve',
    description: 'Reliable alarm valve for fire protection systems with automatic alarm activation and water flow detection.',
    image: '/images/products/valves/alarm-valve-1.jpg',
  },
  {
    id: '2',
    title: 'Gate Valves / Sluice Valves',
    description: 'Heavy-duty gate valves and sluice valves for fire protection systems with reliable operation and long service life.',
    image: '/images/products/valves/gate-valve-1.jpg',
  },
  {
    id: '3',
    title: 'Deluge Valves & Systems',
    description: 'Advanced deluge valves and systems for rapid fire suppression with automatic activation and comprehensive coverage.',
    image: '/images/products/valves/deluge-valve-1.jpg',
  },
  {
    id: '4',
    title: 'Butterfly Valves',
    description: 'Compact butterfly valves designed for fire sprinkler systems with excellent flow control and reliable operation.',
    image: '/images/products/valves/butterfly-valve-1.jpg',
  },
  {
    id: '5',
    title: 'OS&Y VALVE UL/FM',
    description: 'UL/FM approved OS&Y (Outside Screw and Yoke) valves meeting international standards for fire protection systems.',
    image: '/images/products/valves/osy-valve-1.jpg',
  },
  {
    id: '6',
    title: 'Y-Type Strainers',
    description: 'High-quality Y-type strainers for fire protection systems preventing debris and ensuring clean water flow.',
    image: '/images/products/valves/y-strainer-1.jpg',
  },
  {
    id: '7',
    title: 'Pressure Gauges',
    description: 'Accurate pressure gauges for monitoring fire protection system pressure with reliable readings and durability.',
    image: '/images/products/valves/pressure-gauge-1.jpg',
  },
  {
    id: '8',
    title: 'Pressure Switches',
    description: 'Advanced pressure switches for fire protection systems with automatic activation and reliable pressure monitoring.',
    image: '/images/products/valves/pressure-switch-1.jpg',
  },
];

const services = [
  {
    id: '1',
    title: 'Fire System Installation',
    description: 'Professional installation of fire safety systems by certified technicians.',
    image: '/images/services/installation-1.jpg',
  },
  {
    id: '2',
    title: 'Maintenance & AMC',
    description: 'Comprehensive maintenance and Annual Maintenance Contract services for fire systems.',
    image: '/images/services/maintenance-1.jpg',
  },
  {
    id: '3',
    title: 'Refilling Services',
    description: 'Expert refilling services for fire extinguishers and suppression systems.',
    image: '/images/services/refilling-1.jpg',
  },
];

// Cone slide images for the full spectrum section
const coneSlideImages = [
  '/images/products/slides/ceasefire-slide-1.png',
  '/images/products/slides/slide-2.jpg',
  '/images/products/slides/slide-3.jpg',
  '/images/products/slides/slide-4.jpg',
  '/images/products/slides/slide-5.jpg',
];

export default function ProductsPage() {
  useEffect(() => {
    // Handle smooth scroll to section on page load if hash is present
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Section 1: Our Full Spectrum Fire Solutions */}
      <section
        id="full-spectrum"
        className="relative py-12 md:py-16 scroll-mt-20 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/products/full-spectrum-bg.png)',
            }}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Content - Left side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Content - Left side on desktop, top on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 md:space-y-5 text-base md:text-lg lg:text-xl text-white order-2 lg:order-1"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">OUR VISION</h3>
                <p className="text-xl md:text-2xl font-semibold mb-4 text-white">
                  Your Safety, Our Commitment.
                </p>
              </div>
              <p className="text-white/90 leading-relaxed text-sm md:text-base">
                At RiserTech, we are driven by a singular purpose — to build a safer planet for everyone.
In the battle against fire, there are no second chances. Every second counts, and every product we design is built with that responsibility in mind.

Through relentless innovation, advanced engineering, and uncompromising quality, we create life-saving fire protection systems that perform flawlessly when it matters most.
Our commitment goes beyond technology — it's about protecting people, their communities, and their livelihoods.

At RiserTech, safety isn't just our business — it's our promise to the world.</p>
            </motion.div>

            {/* Cone Slide Design - Right side on desktop, bottom on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <ConeSlideDesign 
                images={coneSlideImages} 
                autoPlay={true}
                autoPlayInterval={5000}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Fire Extinguishers */}
      <ProductSection
        id="fire-extinguishers"
        title="FIRE EXTINGUISHERS"
        description="Comprehensive range of fire extinguishers for all fire classes"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fireExtinguishers.map((product, index) => (
            <ProductCard3D
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              imageAlt={product.title}
              delay={index * 0.1}
            />
          ))}
        </div>
      </ProductSection>

      {/* Section 3: Sprinklers */}
      <ProductSection
        id="sprinklers"
        title="SPRINKLERS"
        description="Advanced sprinkler systems for comprehensive fire protection"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {sprinklers.map((product, index) => (
            <ProductCard3D
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              imageAlt={product.title}
              delay={index * 0.1}
            />
          ))}
        </div>
      </ProductSection>

      {/* Section 4: Fire Suppression Systems */}
      <ProductSection
        id="fire-suppression-systems"
        title="FIRE SUPPRESSION SYSTEMS"
        description="Advanced fire suppression solutions for critical applications"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fireSuppressionSystems.map((product, index) => (
            <ProductCard3D
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              imageAlt={product.title}
              delay={index * 0.1}
            />
          ))}
        </div>
      </ProductSection>

      {/* Section 5: Hydrants & Accessories */}
      <ProductSection
        id="hydrants-accessories"
        title="HYDRANTS & ACCESSORIES"
        description="Complete fire hydrant systems and accessories"
      >
        <ProductCardSlider 
          items={hydrantsAccessories} 
          cardsPerView={3}
          autoPlay={true}
          autoPlayInterval={6000}
          showNavigation={true}
          showIndicators={true}
        />
      </ProductSection>

      {/* Section 7: Alarm Solutions */}
      <ProductSection
        id="alarm-solutions"
        title="ALARM SOLUTIONS"
        description="Advanced fire detection and alarm systems"
        variant="gradient"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alarmSolutions.map((product, index) => (
            <ProductCard3D
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              imageAlt={product.title}
              delay={index * 0.1}
            />
          ))}
        </div>
      </ProductSection>

      {/* Section 8: Valves */}
      <ProductSection
        id="valves"
        title="VALVES"
        description="High-quality valves for fire protection systems"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {valves.map((product, index) => (
            <ProductCard3D
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              imageAlt={product.title}
              delay={index * 0.1}
            />
          ))}
        </div>
      </ProductSection>

      {/* Section 9: Services */}
      {/* <ProductSection
        id="services"
        title="SERVICES"
        description="Professional fire safety services and support"
        variant="dark"
      >
        <ProductSlide items={services} />
      </ProductSection> */}
    </div>
  );
}
