'use client';

import { TeamMember } from './TeamMember';
import { LensHeading } from '@/components/ui/LensHeading';
import { teamMembers } from '@/lib/data/team';
import { FEATURES } from '@/lib/config/features';

export function TeamSection() {
  // Check if feature is enabled
  if (!FEATURES.TEAM_SECTION.enabled) {
    return null;
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="text-sm uppercase tracking-wider text-amber-600 mb-3 sm:mb-4 font-semibold">
            OUR LEADERSHIP
          </div>
          <LensHeading as="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" magnify={2.5}>
            <span className="text-gray-900 dark:text-white">MEET OUR</span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              LEADERSHIP TEAM
            </span>
          </LensHeading>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experienced professionals dedicated to delivering exceptional fire safety solutions
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

