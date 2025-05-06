import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, Globe, Shield } from 'lucide-react';

const ShippingPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Shipping & Returns | LUXE LANE';
  }, []);

  const shippingInfo = [
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Free Domestic Shipping",
      description: "Enjoy free shipping on all orders within India above ₹5000."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Express Delivery",
      description: "2-3 business days for metro cities, 4-5 days for other locations."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "International Shipping",
      description: "We ship worldwide with delivery times of 7-14 business days."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Easy Returns",
      description: "30-day return policy with free returns within India."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-serif font-medium text-center mb-8">Shipping & Returns</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {shippingInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-4">
                  {info.icon}
                  <h3 className="text-xl font-medium ml-3">{info.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{info.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-serif mb-4">Shipping Details</h2>
              <div className="prose dark:prose-invert">
                <p>
                  We process all orders within 24-48 hours of receipt. Once your order ships, 
                  you'll receive a confirmation email with tracking information.
                </p>
                <ul>
                  <li>Standard Domestic: 2-5 business days</li>
                  <li>Express Domestic: 1-2 business days</li>
                  <li>International: 7-14 business days</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">Returns Policy</h2>
              <div className="prose dark:prose-invert">
                <p>
                  We want you to love your LUXE LANE purchase. If you're not completely satisfied, 
                  you can return unworn items within 30 days of delivery.
                </p>
                <ul>
                  <li>Items must be unworn with original tags attached</li>
                  <li>Returns are free within India</li>
                  <li>International returns are subject to shipping charges</li>
                  <li>Exchange requests are processed within 3-5 business days</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShippingPage;