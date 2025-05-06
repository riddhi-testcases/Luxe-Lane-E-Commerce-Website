import React, { useState, useEffect } from 'react';
import { Filter, X, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import ProductGrid from '../components/product/ProductGrid';
import Button from '../components/ui/Button';

type SortOption = 'featured' | 'newest' | 'price-low' | 'price-high';

const ShopPage: React.FC = () => {
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));

  useEffect(() => {
    document.title = 'Shop | Luxe Lane';
  }, []);

  useEffect(() => {
    let sorted = [...products];
    
    // Apply category filters
    if (selectedCategories.length > 0) {
      sorted = sorted.filter(product => selectedCategories.includes(product.category));
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'newest':
        sorted = sorted.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      case 'price-low':
        sorted = sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted = sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        // Featured sorting - default order
        sorted = sorted.sort((a, b) => (a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1));
    }
    
    setFilteredProducts(sorted);
  }, [sortBy, selectedCategories]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSortBy('featured');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-8">Shop All Products</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar - Desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">Categories</h3>
                {selectedCategories.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary dark:text-primary-light hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:checked:bg-primary-light"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">{category}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          {/* Sort and Filter Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mr-2">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Mobile filter button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center"
                leftIcon={<SlidersHorizontal size={16} />}
              >
                Filters
              </Button>
              
              {/* Sort dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="flex-1 sm:flex-auto p-2 text-sm border border-gray-300 rounded-md bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-primary-light"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          {/* Active Filters */}
          {selectedCategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedCategories.map(category => (
                <span
                  key={category}
                  className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1.5 rounded-full"
                >
                  {category}
                  <button
                    onClick={() => toggleCategory(category)}
                    className="ml-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
              <button
                onClick={clearFilters}
                className="text-xs text-primary dark:text-primary-light hover:underline"
              >
                Clear All
              </button>
            </div>
          )}
          
          {/* Products Grid */}
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
      
      {/* Mobile Filter Sidebar */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium text-lg text-gray-900 dark:text-gray-100">Filters</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Categories</h4>
                {selectedCategories.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary dark:text-primary-light hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>
              <div className="space-y-3">
                {categories.map(category => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:checked:bg-primary-light"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">{category}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => setIsFilterOpen(false)}
            >
              View Results ({filteredProducts.length})
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;