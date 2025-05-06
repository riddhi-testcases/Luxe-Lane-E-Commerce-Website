import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Heart } from 'lucide-react';

const SustainabilityPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Sustainability | LUXE LANE';
  }, []);

  const initiatives = [
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Eco-Friendly Materials",
      description: "We use sustainable and organic materials, prioritizing environmental responsibility without compromising on luxury."
    },
    {
      icon: <Recycle className="w-8 h-8 text-primary" />,
      title: "Zero Waste Production",
      description: "Our production process is designed to minimize waste, with excess materials being recycled or upcycled into new designs."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Ethical Manufacturing",
      description: "We partner with artisans and workshops that provide fair wages and safe working conditions."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-serif font-medium text-center mb-8">Our Commitment to Sustainability</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-center mb-12">
            At LUXE LANE, sustainability isn't just a trend—it's a core value that guides every decision we make.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <div className="flex justify-center mb-4">{initiative.icon}</div>
                <h3 className="text-xl font-medium mb-2">{initiative.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SustainabilityPage;