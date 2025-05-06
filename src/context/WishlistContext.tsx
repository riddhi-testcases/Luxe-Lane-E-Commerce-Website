import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';
import { getProductById } from '../data/products';

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    // Load wishlist from localStorage on initial render
    const savedWishlistIds = localStorage.getItem('wishlist');
    if (savedWishlistIds) {
      const ids = JSON.parse(savedWishlistIds) as string[];
      const products = ids.map(id => getProductById(id)).filter(Boolean) as Product[];
      setWishlist(products);
    }
  }, []);

  useEffect(() => {
    // Update localStorage when wishlist changes
    const wishlistIds = wishlist.map(product => product.id);
    localStorage.setItem('wishlist', JSON.stringify(wishlistIds));
  }, [wishlist]);

  const addToWishlist = (product: Product) => {
    setWishlist(prevWishlist => {
      if (prevWishlist.some(item => item.id === product.id)) {
        return prevWishlist;
      }
      return [...prevWishlist, product];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist(prevWishlist => 
      prevWishlist.filter(product => product.id !== productId)
    );
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(product => product.id === productId);
  };

  return (
    <WishlistContext.Provider value={{
      wishlist,
      addToWishlist,
      removeFromWishlist,
      isInWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};