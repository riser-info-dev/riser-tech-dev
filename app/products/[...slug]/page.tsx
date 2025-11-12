'use client';

import { getProductBySlug, getCategoryBySlug, PRODUCT_CATEGORIES } from '@/lib/products';
import { Card } from '@/components/ui/Card';
import { Button3D } from '@/components/ui/Button3D';
import { Flame, PanelTop, Droplet, UtensilsCrossed, Building2, Bell, Signpost, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { use } from 'react';

const icons: Record<string, any> = {
  flame: Flame,
  panel: PanelTop,
  droplet: Droplet,
  utensils: UtensilsCrossed,
  building: Building2,
  bell: Bell,
  signpost: Signpost,
};

interface ProductPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  
  // Handle category listing page (e.g., /products/fire-extinguishers)
  if (slug.length === 1) {
    const category = getCategoryBySlug(slug[0]);
    if (!category) {
      notFound();
    }
    
    const CategoryIcon = category.icon;
    
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-amber-900 to-yellow-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Products</span>
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <CategoryIcon className="w-16 h-16" />
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-2">
                  {category.name}
                </h1>
                <p className="text-xl opacity-90">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products List */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product, index) => {
                const ProductIcon = icons[product.icon] || Flame;
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                      <div className="p-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <ProductIcon className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                          {product.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                          {product.description}
                        </p>
                        <Link href={`/products/${category.slug}/${product.id}`}>
                          <Button3D variant="primary" className="w-full">
                            View Details
                          </Button3D>
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  // Handle individual product page (e.g., /products/fire-extinguishers/multimax)
  if (slug.length === 2) {
    const product = getProductBySlug(slug);
    if (!product) {
      notFound();
    }
    
    const category = getCategoryBySlug(slug[0]);
    if (!category) {
      notFound();
    }
    
    const ProductIcon = icons[product.icon] || Flame;
    const CategoryIcon = category.icon;
    
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-amber-900 to-yellow-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href={`/products/${category.slug}`} 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to {category.name}</span>
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <ProductIcon className="w-16 h-16" />
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-2">
                  {product.title}
                </h1>
                <p className="text-xl opacity-90">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Product Features
              </h2>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {product.specifications && product.specifications.length > 0 && (
              <Card className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Specifications
                </h2>
                <ul className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                      <span className="text-base text-gray-700 dark:text-gray-300">{spec}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            <div className="flex gap-4">
              <Link href="/contact">
                <Button3D variant="primary" size="lg">
                  Get a Quote
                </Button3D>
              </Link>
              <Link href={`/products/${category.slug}`}>
                <Button3D variant="outline" size="lg">
                  View All {category.name}
                </Button3D>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  // Invalid route
  notFound();
}

