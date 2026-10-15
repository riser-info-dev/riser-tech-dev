'use client';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Services } from '@/components/sections/Services';
import { ReliableIndia } from '@/components/sections/ReliableIndia';
import { Projects } from '@/components/sections/Projects';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ReliableIndia />
      <WhyChooseUs />
      <Services />
      <Projects />
     {/* <Testimonials /> */}
      <FAQ />
      <Contact />
    </>
  );
}
