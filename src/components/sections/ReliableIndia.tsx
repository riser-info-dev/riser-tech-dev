'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button3D } from '@/components/ui/Button3D';
import { LensHeading } from '@/components/ui/LensHeading';
import { ProductCard3D } from '@/components/sections/ProductCard3D';
import {
  Battery,
  Server,
  Factory,
  Building2,
  FlaskConical,
  Warehouse,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

// ─── Core Product Categories (image cards) ────────────────────────────────────

const productCategories = [
  {
    title: 'Sprinklers',
    description:
      'Complete UL Listed and FM Approved fire sprinkler range — Quick Response, Standard Response, ESFR storage, residential, dry-pipe, and the LB11 lithium-ion battery sprinkler. The preferred sprinkler brand for India\'s warehouses, data centres, and commercial buildings.',
    image: '/images/reliable/re-sprinklers.jpg',
    imageAlt: 'Reliable Automatic Sprinkler fire sprinklers for India',
    href: '/products',
  },
  {
    title: 'System Valves',
    description:
      'Wet, dry, deluge, and pre-action system valves including the DDX double-interlock pre-action valve and E/E3 alarm check valves. NFPA-compliant fire suppression system components available across India.',
    image: '/images/reliable/re-system-valves.png',
    imageAlt: 'Reliable fire system valves for India',
    href: '/products',
  },
  {
    title: 'Grooved Connections',
    description:
      'High-performance grooved pipe couplings, elbows, tees, reducers, and flanges for fast, flexible, and leak-free fire protection piping. Engineered for MEP and fire engineering contractors across India.',
    image: '/images/reliable/re-grooved-connections.jpg',
    imageAlt: 'Reliable grooved connections for fire protection piping India',
    href: '/products',
  },
  {
    title: 'General Purpose Valves',
    description:
      'OS&Y gate valves, butterfly valves, check valves, ball valves, and pressure control valves — UL/FM-approved for fire sprinkler system isolation and control in commercial, industrial, and storage applications.',
    image: '/images/reliable/re-general-purpose-valves.png',
    imageAlt: 'Reliable general purpose fire protection valves India',
    href: '/products',
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────

const certifications = [
  { name: 'UL Listed',      detail: 'Underwriters Laboratories' },
  { name: 'FM Approved',    detail: 'Factory Mutual Global' },
  { name: 'LPCB Certified', detail: 'Loss Prevention Cert. Board' },
  { name: 'VdS Approved',   detail: 'German Fire Standard' },
];

// ─── Industry Verticals ───────────────────────────────────────────────────────

const industryVerticals = [
  { icon: Warehouse,    label: 'Warehouses & Logistics',     desc: 'ESFR high-bay protection' },
  { icon: Server,       label: 'Data Centres & IT Parks',    desc: 'DDX pre-action systems' },
  { icon: Battery,      label: 'EV & Battery Plants',        desc: 'LB11 Li-ion sprinklers' },
  { icon: FlaskConical, label: 'Pharmaceutical',             desc: 'Clean & compliant systems' },
  { icon: Factory,      label: 'Industrial & Manufacturing', desc: 'Heavy-duty suppression' },
  { icon: Building2,    label: 'Commercial Buildings',       desc: 'Wet alarm systems' },
];

// ─── Animation Variant ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────

export function ReliableIndia() {
  const [logoError, setLogoError] = useState(false);

  return (
    <section
      id="reliable-sprinkler-india"
      className="relative py-14 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden scroll-mt-20"
      aria-labelledby="reliable-india-heading"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-80 h-80 sm:w-96 sm:h-96 bg-amber-100 dark:bg-amber-900/30 opacity-25 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-80 h-80 sm:w-96 sm:h-96 bg-yellow-100 dark:bg-yellow-900/30 opacity-20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Reliable Logo ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex justify-center mb-4 sm:mb-5"
        >
          {!logoError ? (
            <div className="relative h-12 sm:h-14 md:h-16 w-44 sm:w-52 md:w-60">
              <Image
                src="/images/reliable/reliable-logo.png"
                alt="Reliable Automatic Sprinkler Co. — Authorised Distributor India"
                fill
                className="object-contain"
                priority
                onError={() => setLogoError(true)}
              />
            </div>
          ) : (
            /* Text fallback when logo image is not yet uploaded */
            <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <span className="text-sm sm:text-base font-bold tracking-wide text-gray-800 dark:text-gray-200 uppercase">
                Reliable<span className="text-amber-600">®</span> Automatic Sprinkler Co.
              </span>
            </div>
          )}
        </motion.div>

        {/* ── Section Label ── */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex justify-center mb-3 sm:mb-4"
        >
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse flex-shrink-0" />
            Authorised Distributor — Reliable Automatic Sprinkler Co., USA
          </span>
        </motion.div>

        {/* ── H2 Heading ── */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-4 sm:mb-5"
        >
          <LensHeading
            as="h2"
            id="reliable-india-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight"
            magnify={2.5}
          >
            <span className="text-gray-900 dark:text-white">
              Reliable Sprinkler Systems for
            </span>{' '}
            <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              India's Industrial Future
            </span>
          </LensHeading>

          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2"
          >
            As India's authorised distribution partner for Reliable Automatic Sprinkler Co. USA, RiserTech
            supplies UL Listed, FM Approved, and LPCB Certified fire sprinkler systems, valves, and
            pre-action systems — engineered for India's warehouses, data centres, EV plants, and
            commercial buildings.
          </motion.p>
        </motion.div>

        {/* ── Certification Trust Bar ── */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12 md:mb-14"
        >
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <ShieldCheck
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 flex-shrink-0"
                aria-hidden="true"
              />
              <div>
                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                  {cert.name}
                </span>
                <span className="hidden sm:inline text-xs text-gray-500 dark:text-gray-400 ml-1">
                  · {cert.detail}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Core Product Families heading ── */}
        <motion.h3
          variants={fadeUp}
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6 sm:mb-8"
        >
          Core Product Families Available in India
        </motion.h3>

        {/* ── 4 Image Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-14 md:mb-16">
          {productCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <ProductCard3D
                title={cat.title}
                description={cat.description}
                image={cat.image}
                imageAlt={cat.imageAlt}
                href={cat.href}
                variant="full-bleed"
              />
            </motion.div>
          ))}
        </div>

        {/* ── Industry Verticals heading ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-6 sm:mb-8 text-center"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Industries We Protect Across India
          </h3>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            From Tier III data centres in Hyderabad to EV gigafactories in Pune — Reliable systems
            protect India's most demanding applications.
          </p>
        </motion.div>

        {/* ── Industry Verticals Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12 sm:mb-14">
          {industryVerticals.map((vertical, index) => {
            const Icon = vertical.icon;
            return (
              <motion.div
                key={vertical.label}
                variants={fadeUp}
                custom={index * 0.5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="group"
                data-card="true"
              >
                <div
                  data-card="true"
                  className="flex flex-col items-center text-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 min-h-[100px] sm:min-h-[110px] justify-center cursor-default"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center mb-2 group-hover:bg-amber-200 dark:group-hover:bg-amber-800/60 transition-colors duration-300">
                    <Icon
                      className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-gray-900 dark:text-white leading-tight mb-0.5 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                    {vertical.label}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-gray-500 dark:text-gray-400 leading-tight">
                    {vertical.desc}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Manufacturer Credibility Strip ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 via-amber-900 to-yellow-900 rounded-2xl p-5 sm:p-6 md:p-8 mb-10 sm:mb-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 mb-1">
                467,000+
              </div>
              <div className="text-xs sm:text-sm text-white/80 leading-snug">
                sq. ft. manufacturing facility
                <br className="hidden sm:block" /> in Liberty, SC, USA
              </div>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0 md:pl-6">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 mb-1">
                Robotic
              </div>
              <div className="text-xs sm:text-sm text-white/80 leading-snug">
                Automated manufacturing —
                <br className="hidden sm:block" /> most advanced in fire protection
              </div>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0 md:pl-6">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 mb-1">
                UL · FM · LPCB
              </div>
              <div className="text-xs sm:text-sm text-white/80 leading-snug">
                Every product independently tested
                <br className="hidden sm:block" /> and globally listed
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── CTA Row ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <Link href="/contact">
            <Button3D variant="primary" size="md">
              Request a Quote for India
            </Button3D>
          </Link>
          <Link href="/products">
            <Button3D variant="outline" size="md">
              Browse All Products
            </Button3D>
          </Link>
        </motion.div>

        {/* ── Inline SEO paragraph ── */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 text-center text-xs text-gray-400 dark:text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
        >
          RiserTech is an authorised Indian distributor of Reliable Automatic Sprinkler Co. fire
          protection equipment — including UL/FM-approved fire sprinkler systems, ESFR storage
          sprinklers, DDX pre-action systems, alarm check valves, grooved connections, and the LB11
          lithium-ion battery storage sprinkler — serving Chennai, Bengaluru, Hyderabad, Pune, Mumbai,
          and all of Tamil Nadu.
        </motion.p>

      </div>
    </section>
  );
}
