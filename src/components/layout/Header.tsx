import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, User, Menu, X, Search } from 'lucide-react';
import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo size={isScrolled ? 'small' : 'medium'} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/collections" className="nav-link">Collections</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>

        {/* Desktop Right Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button aria-label="Search" className="icon-button">
            <Search className="h-5 w-5" />
          </button>
          <ThemeToggle />
          <Link to="/wishlist" className="icon-button relative">
            <Heart className="h-5 w-5" />
          </Link>
          <Link to="/cart" className="icon-button relative">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center dark:bg-primary-light dark:text-primary-dark">
                {itemCount}
              </span>
            )}
          </Link>
          <Link to={isAuthenticated ? "/account" : "/login"} className="icon-button">
            <User className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-3 md:hidden">
          <ThemeToggle />
          <Link to="/cart" className="icon-button relative mr-2">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center dark:bg-primary-light dark:text-primary-dark">
                {itemCount}
              </span>
            )}
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md overflow-hidden transition-all duration-300 ease-in-out">
          <nav className="flex flex-col space-y-3 p-4">
            <Link to="/" className="mobile-nav-link">Home</Link>
            <Link to="/shop" className="mobile-nav-link">Shop</Link>
            <Link to="/collections" className="mobile-nav-link">Collections</Link>
            <Link to="/about" className="mobile-nav-link">About</Link>
            <Link to="/wishlist" className="mobile-nav-link">Wishlist</Link>
            <Link to={isAuthenticated ? "/account" : "/login"} className="mobile-nav-link">
              {isAuthenticated ? `Account (${user?.name})` : 'Login'}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;