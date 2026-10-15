import {
  Flame,
  PanelTop,
  Droplet,
  UtensilsCrossed,
  Building2,
  Signpost,
  Shield,
  Layers,
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
  // ── Reliable Automatic Sprinkler Co. product families ─────────────────────
  {
    id: 'sprinklers',
    slug: 'sprinklers',
    name: 'Sprinklers',
    icon: Droplet,
    description: 'Complete UL Listed and FM Approved Reliable Sprinkler fire sprinkler range — Quick Response, Standard Response, ESFR storage, residential, dry-pipe, and LB11 lithium-ion battery sprinklers.',
    products: [
      {
        id: 'residential',
        title: 'Residential Sprinklers',
        category: 'Sprinklers',
        categorySlug: 'sprinklers',
        description: 'UL Listed residential sprinklers — Upright, Pendent, Horizontal Sidewall, Flat Plate Concealed, and Domed Concealed. Designed for low-pressure residential fire protection.',
        features: ['UL Listed', 'Multiple orientations', 'Concealed options', 'Low pressure rated'],
        icon: 'droplet',
      },
      {
        id: 'standard-response',
        title: 'Standard Coverage — Standard Response',
        category: 'Sprinklers',
        categorySlug: 'sprinklers',
        description: 'Upright & Conventional, Pendent, Sidewall, Stainless Steel, Fusible Link, Flat Plate Concealed, and Flexible Sprinkler Series for commercial and industrial applications.',
        features: ['UL/FM Approved', 'Multiple frame styles', 'Stainless steel option', 'Fusible link'],
        icon: 'droplet',
      },
      {
        id: 'quick-response',
        title: 'Standard Coverage — Quick Response',
        category: 'Sprinklers',
        categorySlug: 'sprinklers',
        description: 'Fast-response sprinklers for life-safety applications — Upright, Pendent, Sidewall, Stainless Steel, Fusible Link, Flat Plate Concealed, and Flexible Series.',
        features: ['UL/FM Approved', 'Quick response element', 'Life safety focus', 'Multiple styles'],
        icon: 'droplet',
      },
      {
        id: 'esfr-storage',
        title: 'ESFR Storage Sprinklers',
        category: 'Sprinklers',
        categorySlug: 'sprinklers',
        description: 'Early Suppression Fast Response sprinklers for high-bay warehouses — P22, M336, JL14, JL17 models. Eliminates in-rack sprinkler requirement for storage up to 12m.',
        features: ['UL/FM Approved', 'ESFR rated', 'High-bay warehouses', 'No in-rack required'],
        icon: 'droplet',
      },
      {
        id: 'lb11-lithium-battery',
        title: 'LB11 Lithium Battery Sprinkler',
        category: 'Sprinklers',
        categorySlug: 'sprinklers',
        description: 'World\'s first UL Listed sprinkler engineered specifically for lithium-ion battery fire suppression. Designed for EV gigafactories, BESS plants, and data centres storing battery arrays.',
        features: ['UL Listed', 'Li-ion battery fires', 'Thermal runaway response', 'EV & BESS plants'],
        icon: 'droplet',
      },
      {
        id: 'extended-coverage',
        title: 'Extended Coverage Sprinklers',
        category: 'Sprinklers',
        categorySlug: 'sprinklers',
        description: 'Wider coverage area per sprinkler — reduces total sprinkler count and installation cost. Available in Upright, Pendent, and Horizontal Sidewall orientations.',
        features: ['UL/FM Approved', 'Wider coverage', 'Cost-efficient', 'Multiple orientations'],
        icon: 'droplet',
      },
    ],
  },
  {
    id: 'pre-action',
    slug: 'pre-action',
    name: 'Pre-Action Systems',
    icon: Shield,
    description: 'Reliable DDX double-interlock and single-interlock pre-action fire suppression systems for data centres, IT parks, cold storage, and mission-critical facilities requiring zero-accidental-discharge protection.',
    products: [
      {
        id: 'ddx-double-interlock',
        title: 'DDX Double-Interlock Pre-Action System',
        category: 'Pre-Action Systems',
        categorySlug: 'pre-action',
        description: 'Reliable Bulletin 749 DDX valve — requires both detection signal AND sprinkler activation before releasing water. The preferred pre-action solution for data centres and IT parks in India.',
        features: ['UL/FM Listed', 'Double-interlock', 'Zero accidental discharge', 'Data centres & IT parks'],
        icon: 'shield',
      },
      {
        id: 'single-interlock',
        title: 'Single-Interlock Pre-Action System',
        category: 'Pre-Action Systems',
        categorySlug: 'pre-action',
        description: 'Single-interlock pre-action valve requiring a detection signal before water enters the dry piping. Suitable for freezer warehouses, cold storage, and areas where accidental discharge must be minimised.',
        features: ['UL/FM Listed', 'Single-interlock', 'Cold storage suitable', 'NFPA 13 compliant'],
        icon: 'shield',
      },
      {
        id: 'non-interlock',
        title: 'Non-Interlock Pre-Action System',
        category: 'Pre-Action Systems',
        categorySlug: 'pre-action',
        description: 'Non-interlock pre-action system where either detection or sprinkler activation fills the piping with water. Provides faster response in areas with high fire risk and deluge-like response needs.',
        features: ['UL/FM Listed', 'Faster response', 'High-risk areas', 'NFPA 13 compliant'],
        icon: 'shield',
      },
    ],
  },
  // ── Other fire protection categories ──────────────────────────────────────
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
  {
    id: 'fire-extinguishers',
    slug: 'fire-extinguishers',
    name: 'Fire Extinguishers',
    icon: Flame,
    description: 'Comprehensive range of fire extinguishers for all fire classes and applications.',
    products: [
      {
        id: 'abc-powder',
        title: 'ABC Powder Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Versatile ABC powder extinguishers effective against Class A, B, and C fires. Ideal for general purpose use.',
        features: ['Multi-class protection', 'Quick fire suppression', 'Long shelf life', 'Cost-effective solution'],
        icon: 'flame',
      },
      {
        id: 'water-foam',
        title: 'Water & Foam Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Water and foam based extinguishers for Class A and B fires. Environmentally friendly and effective.',
        features: ['Class A and B protection', 'Environmentally safe', 'High effectiveness', 'Easy to refill'],
        icon: 'flame',
      },
      {
        id: 'co2',
        title: 'CO2 Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Carbon dioxide extinguishers for Class B and electrical fires. Clean discharge with no residue.',
        features: ['No residue', 'Safe for electrical equipment', 'Fast acting', 'Ideal for server rooms'],
        icon: 'flame',
      },
      {
        id: 'clean-agent',
        title: 'Clean Agent Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Clean agent fire suppression systems using environmentally safe agents. Perfect for sensitive environments.',
        features: ['Environmentally safe', 'No residue', 'Safe for sensitive equipment', 'Fast suppression'],
        icon: 'flame',
      },
      {
        id: 'watermist',
        title: 'Watermist Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Advanced watermist technology for safe and effective fire suppression. Suitable for multiple fire classes.',
        features: ['Multi-class protection', 'Safe for electrical fires', 'Minimal water damage', 'Advanced technology'],
        icon: 'flame',
      },
      {
        id: 'wet-chemical',
        title: 'Wet Chemical Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Wet chemical extinguishers for Class F cooking oil fires. Perfect for commercial kitchens.',
        features: ['Class F protection', 'Kitchen specific', 'Saponification process', 'Prevents re-ignition'],
        icon: 'flame',
      },
      {
        id: 'lithium-battery',
        title: 'Lithium Battery Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Specialized extinguishers designed for lithium battery fires. Essential for modern electronics and vehicles.',
        features: ['Battery fire specific', 'Advanced technology', 'Safe for electronics', 'Modern solution'],
        icon: 'flame',
      },
      {
        id: 'automatic',
        title: 'Automatic Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Automatic fire suppression systems that activate without human intervention. Ideal for unattended areas.',
        features: ['Automatic activation', '24/7 protection', 'No human intervention', 'Reliable detection'],
        icon: 'flame',
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












