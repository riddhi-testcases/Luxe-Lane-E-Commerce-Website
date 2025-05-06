import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'About Us | LUXE LANE';
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-serif font-medium text-center mb-8">Our Story</h1>
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <p className="text-lg leading-relaxed mb-6">
            LUXE LANE represents the perfect fusion of global luxury and Indian craftsmanship. 
            Founded by Riddhi Chakraborty, our brand bridges the gap between contemporary international 
            fashion and the rich textile heritage of India.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Each piece in our collection tells a story of tradition meeting modernity, 
            where age-old techniques are reimagined for the contemporary woman who 
            appreciates both luxury and cultural authenticity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <img 
              src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg" 
              alt="LUXE LANE Craftsmanship" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg" 
              alt="LUXE LANE Design Studio" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-serif mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed mb-6">
            We envision a world where luxury fashion transcends geographical boundaries, 
            bringing together the best of global design with the unparalleled artistry 
            of Indian craftsmanship.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;