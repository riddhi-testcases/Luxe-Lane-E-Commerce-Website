import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Luxe Lane has completely transformed my wardrobe. The quality of their pieces is unmatched, and I always feel confident wearing their designs.",
    author: "Emma Davis",
    role: "Fashion Editor",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    quote: "As someone who values sustainability, I appreciate Luxe Lane's commitment to ethical production. Their pieces aren't just beautiful—they're responsibly made.",
    author: "Sophia Wilson",
    role: "Environmental Activist",
    avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    quote: "The attention to detail in each garment is extraordinary. From the stitching to the silhouette, everything speaks of craftsmanship and care.",
    author: "Olivia Johnson",
    role: "Interior Designer",
    avatar: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-medium tracking-tight text-center mb-12 text-gray-900 dark:text-gray-100">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm relative">
              <svg className="absolute text-primary/10 dark:text-primary-light/10 h-16 w-16 -top-6 -left-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="relative z-10">
                <p className="text-gray-600 dark:text-gray-400 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">{testimonial.author}</h4>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;