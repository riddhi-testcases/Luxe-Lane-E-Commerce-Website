import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ProductGrid from '../components/product/ProductGrid';
import FeaturedCategories from '../components/home/FeaturedCategories';
import Newsletter from '../components/home/Newsletter';
import Testimonials from '../components/home/Testimonials';
import { getFeaturedProducts, getNewArrivals } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  useEffect(() => {
    // Update page title
    document.title = 'Luxe Lane | by Riddhi';
  }, []);

  return (
    <div>
      <Hero />
      
      <div className="container mx-auto px-4">
        <ProductGrid 
          products={newArrivals}
          title="New Arrivals"
          subtitle="Discover our latest pieces, thoughtfully designed for the modern woman."
        />
      </div>

      <FeaturedCategories />

      <div className="container mx-auto px-4">
        <ProductGrid 
          products={featuredProducts}
          title="Featured Collection"
          subtitle="Curated selection of our most coveted pieces this season."
        />
      </div>

      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;