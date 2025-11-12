'use client';

import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';

const projects = [
  {
    id: '1',
    title: 'Fire Alarm Installation',
    description: 'Installed state-of-the-art fire alarm systems in a multi-story apartment complex.',
    category: 'Residential',
  },
  {
    id: '2',
    title: 'Hospital Fire Solutions',
    description: 'Comprehensive fire protection system for a 500-bed hospital facility.',
    category: 'Healthcare',
  },
  {
    id: '3',
    title: 'Industrial Fire Safety',
    description: 'Advanced fire suppression systems for manufacturing facility.',
    category: 'Industrial',
  },
  {
    id: '4',
    title: 'Data Center Fire Protection',
    description: 'Specialized fire protection for critical data center infrastructure.',
    category: 'Technology',
  },
  {
    id: '5',
    title: 'Smart Fire Alarm System',
    description: 'IoT-enabled fire alarm system with remote monitoring capabilities.',
    category: 'Smart Building',
  },
  {
    id: '6',
    title: 'Commercial Building Safety',
    description: 'Complete fire safety solution for commercial office building.',
    category: 'Commercial',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Explore our work - trusted fire safety solutions for various industries
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-500 mb-4 rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

