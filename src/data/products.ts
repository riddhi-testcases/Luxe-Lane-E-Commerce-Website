import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Diamond Tennis Bracelet',
    price: 2899.99,
    priceInr: 239999,
    images: [
      'https://images.pexels.com/photos/3641056/pexels-photo-3641056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3641056/pexels-photo-3641056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Elegant tennis bracelet featuring brilliant-cut diamonds set in 18k white gold.',
    category: 'Jewellery',
    tags: ['diamond', 'bracelet', 'luxury', 'gold'],
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '2',
    name: 'Classic Leather Tote',
    price: 549.99,
    priceInr: 45999,
    images: [
      'https://images.pexels.com/photos/30877733/pexels-photo-30877733/free-photo-of-vintage-bags-display-in-rustic-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/30877733/pexels-photo-30877733/free-photo-of-vintage-bags-display-in-rustic-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Sophisticated leather tote with gold-tone hardware and multiple compartments.',
    category: 'Handbags',
    tags: ['leather', 'tote', 'structured', 'luxury'],
    rating: 4.9,
    reviewCount: 87,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '3',
    name: 'Sapphire Chronograph Watch',
    price: 1299.99,
    priceInr: 108999,
    images: [
      'https://images.pexels.com/photos/3419331/pexels-photo-3419331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3419331/pexels-photo-3419331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Elegant timepiece featuring sapphire crystal and chronograph movement.',
    category: 'Watches',
    tags: ['sapphire', 'luxury', 'timepiece', 'elegant'],
    rating: 4.7,
    reviewCount: 56,
    isNew: true,
    inStock: true,
  },
  {
    id: '4',
    name: 'Evening Clutch',
    price: 329.99,
    priceInr: 27999,
    images: [
      'https://images.pexels.com/photos/6982563/pexels-photo-6982563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6982563/pexels-photo-6982563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Evening clutch adorned with crystals and chain strap.',
    category: 'Handbags',
    tags: ['clutch', 'crystal', 'evening', 'elegant'],
    rating: 4.6,
    reviewCount: 43,
    isFeatured: true,
    inStock: false,
  },
  {
    id: '5',
    name: 'Pearl Drop Earrings',
    price: 199.99,
    priceInr: 16999,
    images: [
      'https://images.pexels.com/photos/10112334/pexels-photo-10112334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/10112334/pexels-photo-10112334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Elegant pearl drop earrings with 18k gold plating.',
    category: 'Jewellery',
    tags: ['pearl', 'earrings', 'elegant', 'gold-plated'],
    rating: 4.8,
    reviewCount: 32,
    isNew: true,
    inStock: true,
  },
  {
    id: '6',
    name: 'Classic Chronograph Watch',
    price: 899.99,
    priceInr: 74999,
    images: [
      'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Sophisticated chronograph watch with leather strap.',
    category: 'Watches',
    tags: ['chronograph', 'leather', 'classic', 'luxury'],
    rating: 4.9,
    reviewCount: 45,
    isNew: true,
    inStock: true,
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};