import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import ShopPage from './pages/ShopPage';
import LoginPage from './pages/LoginPage';
import CollectionsPage from './pages/CollectionsPage';
import AboutPage from './pages/AboutPage';
import SustainabilityPage from './pages/SustainabilityPage';
import SizeGuidePage from './pages/SizeGuidePage';
import FAQPage from './pages/FAQPage';
import ShippingPage from './pages/ShippingPage';

import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/collections" element={<CollectionsPage />} />
                  <Route path="/collections/:category" element={<CollectionsPage />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/sustainability" element={<SustainabilityPage />} />
                  <Route path="/size-guide" element={<SizeGuidePage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/shipping" element={<ShippingPage />} />
                </Routes>
              </Layout>
            </Router>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;