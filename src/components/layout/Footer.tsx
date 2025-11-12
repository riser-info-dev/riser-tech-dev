'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { COMPANY_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { Mail, Phone, MapPin, Clock, Flame } from 'lucide-react';
import { FireWaterLogo } from '@/components/ui/FireWaterLogo';
// import { ProductMenu } from './ProductMenu'; // Commented out - can be reused in future

const footerLinks = {
  quick: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    // { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/cookie-policy', label: 'Cookie Policy' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FireWaterLogo size={24} />
              {COMPANY_INFO.name}
            </h3>
            <p className="text-sm mb-4 flex items-center gap-2 group">
              <div className="flex items-center">
                <svg
                  className="text-amber-400"
                  width="32"
                  height="16"
                  viewBox="0 0 32 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Arrow shaft */}
                  <line
                    x1="2"
                    y1="8"
                    x2="22"
                    y2="8"
                    stroke="url(#arrowGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                  {/* Arrow head - filled triangle */}
                  <polygon
                    points="20,4 28,8 20,12"
                    fill="url(#arrowGradient)"
                    filter="url(#glow)"
                  />
                </svg>
              </div>
              <span className="text-white font-medium">
                {COMPANY_INFO.tagline}
              </span>
            </p>
            <p className="text-sm flex items-center gap-2 group">
              <div className="flex items-center">
                <svg
                  className="text-amber-400"
                  width="32"
                  height="16"
                  viewBox="0 0 32 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="arrowGradientHours" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                    <filter id="glowHours">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Arrow shaft */}
                  <line
                    x1="2"
                    y1="8"
                    x2="22"
                    y2="8"
                    stroke="url(#arrowGradientHours)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    filter="url(#glowHours)"
                  />
                  {/* Arrow head - filled triangle */}
                  <polygon
                    points="20,4 28,8 20,12"
                    fill="url(#arrowGradientHours)"
                    filter="url(#glowHours)"
                  />
                </svg>
              </div>
              <span className="text-white">
                {COMPANY_INFO.hours}
              </span>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-400" />
              Quick Links
            </h4>
            {/* ProductMenu - Commented out for future reuse */}
            {/* <div className="mb-4">
              <ProductMenu className="text-white" />
            </div> */}
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <Link href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-400" />
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <Link href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-sm">{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

