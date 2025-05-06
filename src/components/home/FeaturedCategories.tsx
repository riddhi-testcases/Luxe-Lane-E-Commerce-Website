import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCard {
  title: string;
  image: string;
  link: string;
}

const categories: CategoryCard[] = [
  {
    title: 'Jewellery',
    image: 'https://images.pexels.com/photos/6718757/pexels-photo-6718757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/collections/jewellery'
  },
  {
    title: 'Handbags',
    image: 'https://images.pexels.com/photos/27298414/pexels-photo-27298414/free-photo-of-a-woman-in-black-boots-and-a-black-crocodile-skin-bag.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/collections/handbags'
  },
  {
    title: 'Watches',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
    link: '/collections/watches'
  },
  {
    title: 'Accessories',
    image: 'https://images.pexels.com/photos/30988733/pexels-photo-30988733/free-photo-of-elegant-flat-lay-of-beauty-and-hair-accessories.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/collections/accessories'
  }
];

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-serif font-medium tracking-tight text-center mb-12 text-gray-900 dark:text-gray-100">Shop by Category</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <Link 
            key={index} 
            to={category.link}
            className="group overflow-hidden relative rounded-lg aspect-[3/4]"
          >
            <img 
              src={category.image} 
              alt={category.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 transition-opacity duration-300">
              <div>
                <h3 className="text-white text-2xl font-serif mb-2">{category.title}</h3>
                <span className="inline-block text-white border-b border-white pb-1 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Explore Now
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;