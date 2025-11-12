import { Contact } from '@/components/sections/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Get in touch with us for expert fire safety solutions
          </p>
        </div>
      </section>

      <Contact />
    </div>
  );
}

