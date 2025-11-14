'use client';

import { getProductBySlug, getCategoryBySlug } from '@/lib/products';
import { Card } from '@/components/ui/Card';
import { Button3D } from '@/components/ui/Button3D';
import { Flame, PanelTop, Droplet, UtensilsCrossed, Building2, Bell, Signpost, CheckCircle, ArrowLeft, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { use } from 'react';

const icons: Record<string, LucideIcon> = {
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
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-amber-900 to-yellow-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Back to Products</span>
            </Link>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <CategoryIcon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
                  {category.name}
                </h1>
                <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products List */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {category.products.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                  No products available in this category.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                        <div className="p-4 sm:p-6">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                            <ProductIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <h2 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white leading-tight">
                            {product.title}
                          </h2>
                          <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">
                            {product.description}
                          </p>
                          <Link href={`/products/${category.slug}/${product.id}`} aria-label={`View details for ${product.title}`}>
                            <Button3D variant="primary" className="w-full text-sm sm:text-base">
                              View Details
                            </Button3D>
                          </Link>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            )}
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
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-amber-900 to-yellow-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href={`/products/${category.slug}`} 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Back to {category.name}</span>
            </Link>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <ProductIcon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
                  {product.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                Product Features
              </h2>
              <ul className="space-y-3 sm:space-y-4" role="list">
                {product.features.map((feature, index) => (
                  <li key={`${product.id}-feature-${index}`} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {product.specifications && product.specifications.length > 0 && (
              <Card className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                  Specifications
                </h2>
                <ul className="space-y-2 sm:space-y-3" role="list">
                  {product.specifications.map((spec, index) => (
                    <li key={`${product.id}-spec-${index}`} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0 mt-1" aria-hidden="true" />
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{spec}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact" className="flex-1 sm:flex-initial">
                <Button3D variant="primary" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  Get a Quote
                </Button3D>
              </Link>
              <Link href={`/products/${category.slug}`} className="flex-1 sm:flex-initial">
                <Button3D variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
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
