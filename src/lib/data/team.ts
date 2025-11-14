import { TeamMember } from '@/types/team';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Smith',
    position: 'Chief Executive Officer',
    image: '/images/team/ceo.jpg',
    description: 'Leading RiserTech with over 15 years of experience in fire safety solutions and business development.',
    highlights: [
      '15+ years in fire safety industry',
      'Certified Fire Safety Professional',
      'Led 200+ successful projects',
      'Expert in fire suppression systems',
    ],
    email: 'john.smith@risertech.com',
    linkedin: 'https://linkedin.com/in/johnsmith',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    position: 'Director of Operations',
    image: '/images/team/director.jpg',
    description: 'Overseeing operations and ensuring the highest quality standards in all our fire safety installations.',
    highlights: [
      '12+ years operational experience',
      'ISO 9001 Certified Manager',
      'Managed 100+ installation teams',
      'Specialist in compliance and safety',
    ],
    email: 'sarah.johnson@risertech.com',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
  },
];

