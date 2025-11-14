'use client';

import { Card } from '@/components/ui/Card';
import { TeamMember as TeamMemberType } from '@/types/team';
import { CheckCircle, Mail, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface TeamMemberProps {
  member: TeamMemberType;
  index: number;
}

export function TeamMember({ member, index }: TeamMemberProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card hover className="h-full group relative overflow-hidden">
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6">
          {/* Image Section */}
          <div className="relative w-full sm:w-48 lg:w-full h-64 sm:h-48 lg:h-64 rounded-xl overflow-hidden flex-shrink-0">
            {!imageError ? (
              <>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={`object-cover transition-all duration-500 ${
                    imageLoaded ? 'opacity-100 group-hover:scale-110' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 192px, 100%"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
                )}
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-amber-600 dark:text-amber-400">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              {member.name}
            </h3>
            <p className="text-sm sm:text-base text-amber-600 dark:text-amber-400 font-semibold mb-3">
              {member.position}
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {member.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-4">
              {member.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Contact Links */}
            {(member.email || member.linkedin) && (
              <div className="flex gap-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

