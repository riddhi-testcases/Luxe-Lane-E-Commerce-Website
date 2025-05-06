import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, Phone } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Logo size="medium" />
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xs">
              LUXE Lane offers timeless, elegant pieces for the modern woman who appreciates quality craftsmanship and sophisticated design.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Twitter size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/shop" className="footer-link">All Products</Link></li>
              <li><Link to="/collections/new-arrivals" className="footer-link">New Arrivals</Link></li>
              <li><Link to="/collections/best-sellers" className="footer-link">Best Sellers</Link></li>
              <li><Link to="/collections/sale" className="footer-link">Sale Items</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Information</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/sustainability" className="footer-link">Sustainability</Link></li>
              <li><Link to="/shipping" className="footer-link">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="text-primary dark:text-primary-light mr-2" />
                <a href="mailto:contact@luxelane.com" className="footer-link">contact@luxelane.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-primary dark:text-primary-light mr-2" />
                <a href="tel:+1-800-555-1234" className="footer-link">+1 (800) 555-1234</a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subscribe to our newsletter</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="p-2 text-sm border border-gray-300 dark:border-gray-700 rounded-l-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-primary-light flex-grow"
                />
                <button 
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white px-3 py-2 text-sm rounded-r-md dark:bg-primary-light dark:hover:bg-primary-light/90 dark:text-primary-dark transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 LUXE Lane. Made by Riddhi Chakraborty, All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;