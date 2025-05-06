import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../../types';
import { useWishlist } from '../../context/WishlistContext';
import Button from '../ui/Button';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const isWishlisted = isInWishlist(product.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-100 dark:bg-gray-800">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
          />
          {/* Badge */}
          {product.isNew && (
            <div className="absolute top-3 left-3 bg-primary px-2 py-1 text-xs font-medium text-white rounded dark:bg-primary-light dark:text-primary-dark">
              New
            </div>
          )}
          {/* Quick add */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 transform translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <div className="flex gap-2">
              <Button
                variant="primary"
                size="sm"
                fullWidth
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <button
                onClick={toggleWishlist}
                className={`p-2 rounded ${
                  isWishlisted
                    ? 'bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart
                  className="h-4 w-4"
                  fill={isWishlisted ? 'currentColor' : 'none'}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">{product.name}</h3>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">${product.price.toFixed(2)}</p>
            <div className="flex items-center">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < Math.floor(product.rating) ? (
                      <span>★</span>
                    ) : i < product.rating ? (
                      <span>⯨</span> // half star
                    ) : (
                      <span className="text-gray-300 dark:text-gray-600">★</span>
                    )}
                  </span>
                ))}
              </div>
              <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
                ({product.reviewCount})
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;