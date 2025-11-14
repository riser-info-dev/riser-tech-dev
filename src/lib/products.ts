import { 
  Flame, 
  PanelTop, 
  Droplet, 
  UtensilsCrossed, 
  Building2,
  Bell,
  Signpost,
} from 'lucide-react';

export interface Product {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  features: string[];
  specifications?: string[];
  icon: string;
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  icon: any;
  description: string;
  products: Product[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'fire-extinguishers',
    slug: 'fire-extinguishers',
    name: 'Fire Extinguishers',
    icon: Flame,
    description: 'Comprehensive range of fire extinguishers for all fire classes and applications.',
    products: [
      {
        id: 'multimax',
        title: 'MultiMax Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Advanced multi-purpose fire extinguishers suitable for Class A, B, and C fires. Ideal for commercial and industrial applications.',
        features: [
          'Suitable for Class A, B, and C fires',
          'Long-lasting discharge time',
          'Environmentally friendly',
          'Easy to use and maintain',
          'Certified and approved',
        ],
        specifications: [
          'Capacity: 1kg to 9kg',
          'Discharge time: 8-15 seconds',
          'Operating temperature: -20°C to +60°C',
          'Standards: EN3, BIS approved',
        ],
        icon: 'flame',
      },
      {
        id: 'en-approved',
        title: 'EN Approved Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'European standard approved fire extinguishers meeting all EN3 requirements for safety and performance.',
        features: [
          'EN3 certified',
          'High performance',
          'Reliable operation',
          'Long service life',
        ],
        icon: 'flame',
      },
      {
        id: 'home-car',
        title: 'Home & Car Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Compact and portable fire extinguishers designed for home and vehicle use. Easy to store and operate.',
        features: [
          'Compact design',
          'Lightweight',
          'Easy to use',
          'Perfect for home and car',
        ],
        icon: 'flame',
      },
      {
        id: 'abc-powder',
        title: 'ABC Powder Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Versatile ABC powder extinguishers effective against Class A, B, and C fires. Ideal for general purpose use.',
        features: [
          'Multi-class protection',
          'Quick fire suppression',
          'Long shelf life',
          'Cost-effective solution',
        ],
        icon: 'flame',
      },
      {
        id: 'water-foam',
        title: 'Water & Foam Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Water and foam based extinguishers for Class A and B fires. Environmentally friendly and effective.',
        features: [
          'Class A and B protection',
          'Environmentally safe',
          'High effectiveness',
          'Easy to refill',
        ],
        icon: 'flame',
      },
      {
        id: 'co2',
        title: 'CO2 Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Carbon dioxide extinguishers for Class B and electrical fires. Clean discharge with no residue.',
        features: [
          'No residue',
          'Safe for electrical equipment',
          'Fast acting',
          'Ideal for server rooms',
        ],
        icon: 'flame',
      },
      {
        id: 'clean-agent',
        title: 'Clean Agent Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Clean agent fire suppression systems using environmentally safe agents. Perfect for sensitive environments.',
        features: [
          'Environmentally safe',
          'No residue',
          'Safe for sensitive equipment',
          'Fast suppression',
        ],
        icon: 'flame',
      },
      {
        id: 'watermist',
        title: 'Watermist Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Advanced watermist technology for safe and effective fire suppression. Suitable for multiple fire classes.',
        features: [
          'Multi-class protection',
          'Safe for electrical fires',
          'Minimal water damage',
          'Advanced technology',
        ],
        icon: 'flame',
      },
      {
        id: 'foam-mist',
        title: 'Foam Mist Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Foam mist extinguishers combining the benefits of foam and mist technology for superior fire suppression.',
        features: [
          'Enhanced coverage',
          'Better penetration',
          'Long-lasting protection',
          'Versatile application',
        ],
        icon: 'flame',
      },
      {
        id: 'caf',
        title: 'Compressed Air Foam Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Compressed air foam systems providing superior firefighting capabilities with enhanced foam quality.',
        features: [
          'Superior foam quality',
          'Extended range',
          'Better coverage',
          'Professional grade',
        ],
        icon: 'flame',
      },
      {
        id: 'fluorine-free',
        title: 'Fluorine Free Foam Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Environmentally responsible fluorine-free foam extinguishers meeting latest environmental standards.',
        features: [
          'Environmentally friendly',
          'No PFAS chemicals',
          'Effective suppression',
          'Compliant with regulations',
        ],
        icon: 'flame',
      },
      {
        id: 'metal',
        title: 'Metal Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Specialized extinguishers for Class D metal fires. Designed for industrial and laboratory applications.',
        features: [
          'Class D protection',
          'Specialized for metal fires',
          'Industrial grade',
          'Laboratory safe',
        ],
        icon: 'flame',
      },
      {
        id: 'class-b',
        title: 'Class B Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Dedicated Class B fire extinguishers for flammable liquid fires. Essential for industrial and commercial settings.',
        features: [
          'Class B specialized',
          'Flammable liquid protection',
          'High effectiveness',
          'Industrial application',
        ],
        icon: 'flame',
      },
      {
        id: 'wet-chemical',
        title: 'Wet Chemical Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Wet chemical extinguishers for Class F cooking oil fires. Perfect for commercial kitchens.',
        features: [
          'Class F protection',
          'Kitchen specific',
          'Saponification process',
          'Prevents re-ignition',
        ],
        icon: 'flame',
      },
      {
        id: 'lithium-battery',
        title: 'Lithium Battery Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Specialized extinguishers designed for lithium battery fires. Essential for modern electronics and vehicles.',
        features: [
          'Battery fire specific',
          'Advanced technology',
          'Safe for electronics',
          'Modern solution',
        ],
        icon: 'flame',
      },
      {
        id: 'automatic',
        title: 'Automatic Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Automatic fire suppression systems that activate without human intervention. Ideal for unattended areas.',
        features: [
          'Automatic activation',
          '24/7 protection',
          'No human intervention',
          'Reliable detection',
        ],
        icon: 'flame',
      },
      {
        id: 'accessories',
        title: 'Fire Extinguisher Accessories',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Complete range of accessories including brackets, signs, maintenance kits, and safety equipment.',
        features: [
          'Mounting brackets',
          'Safety signs',
          'Maintenance kits',
          'Complete solutions',
        ],
        icon: 'flame',
      },
    ],
  },
  {
    id: 'in-panel',
    slug: 'in-panel',
    name: 'In-Panel Systems',
    icon: PanelTop,
    description: 'Specialized fire suppression systems for electrical panels and control cabinets.',
    products: [
      {
        id: 'mini',
        title: 'Mini Systems',
        category: 'In-Panel Systems',
        categorySlug: 'in-panel',
        description: 'Compact fire suppression systems designed for small electrical panels and control cabinets.',
        features: [
          'Compact design',
          'Easy installation',
          'Reliable detection',
          'Quick suppression',
        ],
        icon: 'panel',
      },
      {
        id: 'tube-based',
        title: 'Tube Based Systems',
        category: 'In-Panel Systems',
        categorySlug: 'in-panel',
        description: 'Tube-based fire suppression systems providing targeted protection for electrical equipment.',
        features: [
          'Targeted protection',
          'Tube detection',
          'Automatic activation',
          'Minimal space requirement',
        ],
        icon: 'panel',
      },
    ],
  },
  {
    id: 'suppression',
    slug: 'suppression',
    name: 'Suppression Systems',
    icon: Droplet,
    description: 'Advanced fire suppression systems for total flooding and specialized applications.',
    products: [
      {
        id: 'clean-gas',
        title: 'Clean Gas Based Systems',
        category: 'Suppression Systems',
        categorySlug: 'suppression',
        description: 'Clean agent gas suppression systems for critical facilities and sensitive equipment.',
        features: [
          'Clean discharge',
          'No residue',
          'Safe for equipment',
          'Environmentally responsible',
        ],
        icon: 'droplet',
      },
      {
        id: 'watermist',
        title: 'Watermist Based Systems',
        category: 'Suppression Systems',
        categorySlug: 'suppression',
        description: 'Advanced watermist suppression systems providing effective fire protection with minimal water usage.',
        features: [
          'Minimal water usage',
          'Fast suppression',
          'Safe for electronics',
          'Environmentally friendly',
        ],
        icon: 'droplet',
      },
      {
        id: 'retrofittable',
        title: 'Retrofittable Fire Suppression',
        category: 'Suppression Systems',
        categorySlug: 'suppression',
        description: 'Retrofittable fire suppression systems that can be installed in existing facilities without major modifications.',
        features: [
          'Easy retrofitting',
          'Minimal disruption',
          'Cost-effective',
          'Flexible installation',
        ],
        icon: 'droplet',
      },
      {
        id: 'transport',
        title: 'Transport Suppression',
        category: 'Suppression Systems',
        categorySlug: 'suppression',
        description: 'Fire suppression systems designed for transportation applications including vehicles and mobile equipment.',
        features: [
          'Mobile applications',
          'Vibration resistant',
          'Compact design',
          'Reliable operation',
        ],
        icon: 'droplet',
      },
    ],
  },
  {
    id: 'kitchen',
    slug: 'kitchen',
    name: 'Kitchen Systems',
    icon: UtensilsCrossed,
    description: 'Specialized fire suppression systems for commercial and residential kitchens.',
    products: [
      {
        id: 'commercial',
        title: 'Commercial Kitchen Systems',
        category: 'Kitchen Systems',
        categorySlug: 'kitchen',
        description: 'Complete fire suppression systems for commercial kitchens including hoods, ducts, and cooking equipment.',
        features: [
          'UL listed',
          'Automatic activation',
          'Complete coverage',
          'Kitchen specific',
        ],
        icon: 'utensils',
      },
      {
        id: 'residential',
        title: 'Residential Kitchen Systems',
        category: 'Kitchen Systems',
        categorySlug: 'kitchen',
        description: 'Residential kitchen fire suppression systems for home safety and protection.',
        features: [
          'Home friendly',
          'Easy installation',
          'Affordable',
          'Reliable protection',
        ],
        icon: 'utensils',
      },
    ],
  },
  {
    id: 'standalone',
    slug: 'standalone',
    name: 'Standalone Systems',
    icon: Building2,
    description: 'Standalone fire protection systems including hydrants and specialized solutions.',
    products: [
      {
        id: 'hydrant',
        title: 'Hydrant Systems',
        category: 'Standalone Systems',
        categorySlug: 'standalone',
        description: 'Fire hydrant systems for buildings and facilities providing reliable water supply for firefighting.',
        features: [
          'Reliable water supply',
          'Building integration',
          'Compliance ready',
          'Professional installation',
        ],
        icon: 'building',
      },
      {
        id: 'tetra-quad',
        title: 'Ceasefire Tetra Quad',
        category: 'Standalone Systems',
        categorySlug: 'standalone',
        description: 'Advanced Tetra Quad fire suppression system providing comprehensive protection for multiple areas.',
        features: [
          'Multi-zone protection',
          'Advanced technology',
          'Centralized control',
          'Scalable solution',
        ],
        icon: 'building',
      },
    ],
  },
  {
    id: 'alarm',
    slug: 'alarm',
    name: 'Alarm Solutions',
    icon: Bell,
    description: 'Fire alarm and detection systems for early warning and safety.',
    products: [
      {
        id: 'standalone',
        title: 'Standalone System',
        category: 'Alarm Solutions',
        categorySlug: 'alarm',
        description: 'Standalone fire alarm systems for small to medium facilities.',
        features: [
          'Easy installation',
          'Self-contained',
          'Reliable detection',
          'Cost-effective',
        ],
        icon: 'bell',
      },
      {
        id: 'detectors',
        title: 'Standalone Detectors',
        category: 'Alarm Solutions',
        categorySlug: 'alarm',
        description: 'Standalone fire detectors with built-in alarms for immediate notification.',
        features: [
          'Battery operated',
          'Self-contained',
          'Easy installation',
          'Reliable detection',
        ],
        icon: 'bell',
      },
    ],
  },
  {
    id: 'signages',
    slug: 'signages',
    name: 'Signages',
    icon: Signpost,
    description: 'Fire safety signs and emergency evacuation signage for compliance and safety.',
    products: [
      {
        id: 'signages',
        title: 'Fire Safety Signages',
        category: 'Signages',
        categorySlug: 'signages',
        description: 'Complete range of fire safety signs including exit signs, equipment location signs, and emergency evacuation signs.',
        features: [
          'Compliance ready',
          'Durable materials',
          'Clear visibility',
          'Multiple options',
        ],
        icon: 'signpost',
      },
    ],
  },
];

// Helper function to get product by slug path
export function getProductBySlug(slugs: string[]): Product | null {
  if (slugs.length < 2) return null;
  
  const categorySlug = slugs[0];
  const productSlug = slugs[1];
  
  const category = PRODUCT_CATEGORIES.find(cat => cat.slug === categorySlug);
  if (!category) return null;
  
  return category.products.find(prod => prod.id === productSlug) || null;
}

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): ProductCategory | null {
  return PRODUCT_CATEGORIES.find(cat => cat.slug === slug) || null;
}

// Helper function to get all products
export function getAllProducts(): Product[] {
  return PRODUCT_CATEGORIES.flatMap(category => 
    category.products.map(product => product)
  );
}












