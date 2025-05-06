export interface Product {
  id: string;
  name: string;
  price: number;
  priceInr: number;
  images: string[];
  description: string;
  category: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
  inStock?: boolean;
  discount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  productId: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  wishlist: string[];
}

export type ThemeMode = 'light' | 'dark';