import React from 'react';
import { motion } from 'framer-motion';

const SizeGuidePage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Size Guide | LUXE LANE';
  }, []);

  const sizeChart = {
    XS: { bust: "32", waist: "24-25", hip: "35" },
    S: { bust: "34", waist: "26-27", hip: "37" },
    M: { bust: "36", waist: "28-29", hip: "39" },
    L: { bust: "38", waist: "30-31", hip: "41" },
    XL: { bust: "40", waist: "32-33", hip: "43" }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-serif font-medium text-center mb-8">Size Guide</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="p-4 border-b">Size</th>
                  <th className="p-4 border-b">Bust (inches)</th>
                  <th className="p-4 border-b">Waist (inches)</th>
                  <th className="p-4 border-b">Hip (inches)</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(sizeChart).map(([size, measurements]) => (
                  <tr key={size} className="border-b">
                    <td className="p-4 font-medium">{size}</td>
                    <td className="p-4">{measurements.bust}</td>
                    <td className="p-4">{measurements.waist}</td>
                    <td className="p-4">{measurements.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-serif mb-4">How to Measure</h2>
            <div className="space-y-4">
              <p><strong>Bust:</strong> Measure around the fullest part of your bust.</p>
              <p><strong>Waist:</strong> Measure around your natural waistline.</p>
              <p><strong>Hip:</strong> Measure around the fullest part of your hips.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SizeGuidePage;