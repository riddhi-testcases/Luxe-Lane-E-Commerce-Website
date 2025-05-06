import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen max-h-[800px] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        <img
          src="https://images.pexels.com/photos/4355673/pexels-photo-4355673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Luxe Lane Hero"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center md:items-start md:text-left md:ml-16 px-4 md:px-0">
        <div className="max-w-md md:max-w-xl">
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-none mb-4">
            Timeless Elegance for the Modern Woman
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl mb-8 max-w-md">
            Discover our curated collection of sophisticated essentials that transcend seasons.
          </p>
          <div className="space-x-4">
            <Button
              variant="primary"
              size="lg"
              as={Link}
              to="/shop"
              className="min-w-[150px]"
            >
              Shop Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              as={Link}
              to="/collections/new-arrivals"
              className="border-white text-white hover:bg-white/20 min-w-[150px]"
            >
              New Arrivals
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;