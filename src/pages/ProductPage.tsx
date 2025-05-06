import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Star, ShoppingBag, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductById } from '../data/products';
import { getReviewsByProductId } from '../data/reviews';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  
  const product = id ? getProductById(id) : undefined;
  const reviews = id ? getReviewsByProductId(id) : [];
  const isProductInWishlist = product ? isInWishlist(product.id) : false;

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Luxe Lane`;
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-medium mb-4">Product Not Found</h2>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button variant="primary" onClick={() => navigate('/shop')}>
          Back to Shop
        </Button>
      </div>
    );
  }

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const toggleWishlist = () => {
    if (isProductInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light mb-8 transition-colors"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="relative">
          <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={product.images[activeImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {product.images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
          
          {product.images.length > 1 && (
            <div className="flex space-x-4 mt-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-16 h-16 rounded-md overflow-hidden border-2 ${
                    activeImageIndex === index
                      ? 'border-primary dark:border-primary-light'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div>
          {product.isNew && (
            <div className="inline-block bg-primary text-white text-xs font-medium px-2.5 py-1 rounded dark:bg-primary-light dark:text-primary-dark mb-4">
              New Arrival
            </div>
          )}
          
          <h1 className="text-3xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
            {product.name}
          </h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5"
                  fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              {product.rating.toFixed(1)} ({product.reviewCount} reviews)
            </span>
          </div>
          
          <p className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-6">
            ${product.price.toFixed(2)}
          </p>
          
          <div className="prose prose-sm dark:prose-invert mb-6">
            <p>{product.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <label htmlFor="quantity" className="block text-sm font-medium mb-2">
              Quantity
            </label>
            <div className="flex items-center">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="p-2 border border-gray-300 dark:border-gray-700 rounded-l-md bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="p-2 w-16 border-y border-gray-300 dark:border-gray-700 text-center focus:outline-none bg-white dark:bg-gray-800"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-gray-300 dark:border-gray-700 rounded-r-md bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                +
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={handleAddToCart}
              leftIcon={<ShoppingBag size={18} />}
            >
              Add to Cart
            </Button>
            <Button
              variant={isProductInWishlist ? 'secondary' : 'outline'}
              size="lg"
              onClick={toggleWishlist}
              leftIcon={<Heart size={18} fill={isProductInWishlist ? 'currentColor' : 'none'} />}
            >
              {isProductInWishlist ? 'Wishlisted' : 'Add to Wishlist'}
            </Button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-serif font-medium mb-8">Customer Reviews</h2>
        
        {reviews.length > 0 ? (
          <div className="space-y-8">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 dark:border-gray-800 pb-8">
                <div className="flex items-center mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4"
                        fill={i < review.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {review.userName}
                  </span>
                  <span className="mx-2 text-gray-300 dark:text-gray-700">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No reviews yet for this product.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;