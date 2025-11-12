import { Button3D } from '@/components/ui/Button3D';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link href="/">
          <Button3D size="lg">Go Back Home</Button3D>
        </Link>
      </div>
    </div>
  );
}

