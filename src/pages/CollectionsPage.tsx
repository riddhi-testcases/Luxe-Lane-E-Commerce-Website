import React, { useState, useEffect } from 'react';
import { Filter, X, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import ProductGrid from '../components/product/ProductGrid';
import Button from '../components/ui/Button';

type SortOption = 'featured' | 'newest' | 'price-low' | 'price-high';
type StockFilter = 'all' | 'in-stock' | 'out-of-stock';

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  stockStatus: StockFilter;
  sortBy: SortOption;
}

const CollectionsPage: React.FC = () => {
  const initialFilters: FilterState = {
    categories: [],
    priceRange: [0, 1000],
    stockStatus: 'all',
    sortBy: 'featured'
  };

  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Get unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));

  useEffect(() => {
    document.title = 'Collections | LUXE LANE';
  }, []);

  const applyFilters = () => {
    let filtered = [...products];

    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => filters.categories.includes(product.category));
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Stock status filter
    if (filters.stockStatus !== 'all') {
      filtered = filtered.filter(product => 
        filters.stockStatus === 'in-stock' ? product.inStock : !product.inStock
      );
    }

    // Sorting
    switch (filters.sortBy) {
      case 'newest':
        filtered.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        filtered.sort((a, b) => (a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1));
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  const toggleCategory = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-medium text-gray-900 dark:text-gray-100">Our Collections</h1>
        <Button
          variant="outline"
          size="sm"
          onClick={resetFilters}
          leftIcon={<RotateCcw size={16} />}
        >
          Reset Filters
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="mb-6">
              <h3 className="font-medium mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-700"
                    />
                    <span className="ml-2 text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-4">Price Range</h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={filters.priceRange[1]}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                  }))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-4">Availability</h3>
              <select
                value={filters.stockStatus}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  stockStatus: e.target.value as StockFilter
                }))}
                className="w-full p-2 border rounded-md"
              >
                <option value="all">All Items</option>
                <option value="in-stock">In Stock</option>
                <option value="out-of-stock">Out of Stock</option>
              </select>
            </div>

            <div>
              <h3 className="font-medium mb-4">Sort By</h3>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  sortBy: e.target.value as SortOption
                }))}
                className="w-full p-2 border rounded-md"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;