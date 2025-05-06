import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  React.useEffect(() => {
    document.title = 'Shopping Cart | Luxe Lane';
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-8">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <svg
            className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button as={Link} to="/shop" variant="primary" size="lg">
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="border-b border-gray-200 dark:border-gray-800 pb-4 mb-4 hidden md:grid md:grid-cols-12 gap-4">
              <div className="md:col-span-6">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Product</span>
              </div>
              <div className="md:col-span-2 text-center">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Price</span>
              </div>
              <div className="md:col-span-2 text-center">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Quantity</span>
              </div>
              <div className="md:col-span-2 text-right">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Total</span>
              </div>
            </div>

            {cart.map((item) => (
              <div
                key={item.product.id}
                className="border-b border-gray-200 dark:border-gray-800 py-6 grid md:grid-cols-12 gap-4 items-center"
              >
                {/* Product Info */}
                <div className="md:col-span-6 flex items-center">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                      <Link to={`/product/${item.product.id}`} className="hover:text-primary dark:hover:text-primary-light">
                        {item.product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {item.product.category}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="md:col-span-2 text-center">
                  <span className="text-gray-900 dark:text-gray-100">
                    ${item.product.price.toFixed(2)}
                  </span>
                </div>

                {/* Quantity */}
                <div className="md:col-span-2 flex justify-center">
                  <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-md">
                    <button
                      type="button"
                      className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="w-10 text-center border-x border-gray-300 dark:border-gray-700 py-1 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100"
                      value={item.quantity}
                      readOnly
                    />
                    <button
                      type="button"
                      className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total and Remove */}
                <div className="md:col-span-2 flex justify-between items-center md:justify-end">
                  <span className="text-gray-900 dark:text-gray-100 font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    type="button"
                    className="ml-4 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="text-gray-900 dark:text-gray-100 font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                  <span className="text-gray-900 dark:text-gray-100 font-medium">Calculated at checkout</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
                  <span className="text-lg font-medium text-gray-900 dark:text-gray-100">Total</span>
                  <span className="text-lg font-bold text-gray-900 dark:text-gray-100">${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  as={Link}
                  to="/checkout"
                  rightIcon={<ArrowRight size={18} />}
                >
                  Proceed to Checkout
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  fullWidth
                  as={Link}
                  to="/shop"
                  className="mt-3"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;