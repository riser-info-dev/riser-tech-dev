import { Card } from '@/components/ui/Card';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Information about how we use cookies on our website
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <h2 className="text-3xl font-bold mb-6">What are Cookies?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-8">How We Use Cookies</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We use cookies to enhance your browsing experience and analyze site traffic. Our cookies help us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Improve our website performance and user experience</li>
              <li>Provide relevant content and advertisements</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-8">Types of Cookies We Use</h2>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  These cookies are necessary for the website to function properly. They enable basic functions like page
                  navigation and access to secure areas of the website.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  These cookies help us understand how visitors interact with our website by collecting and reporting
                  information anonymously.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Functional Cookies</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  These cookies allow the website to remember choices you make and provide enhanced, more personal
                  features.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-8">Managing Cookies</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies
              can impact your user experience and parts of our website may no longer be fully accessible.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Most browsers automatically accept cookies, but you can modify your browser settings to decline cookies if
              you prefer. You can also delete cookies that have already been set.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

