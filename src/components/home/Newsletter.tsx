import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // In a real app, you would send this to your API
      console.log('Newsletter signup:', email);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-primary/5 dark:bg-primary-light/5">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-serif font-medium mb-3 text-gray-900 dark:text-gray-100">Join Our Newsletter</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Subscribe to receive updates on new arrivals, special offers, and styling inspiration.
        </p>

        {isSubmitted ? (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm mx-auto max-w-xl">
            <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">Thank You For Subscribing!</h3>
            <p className="text-gray-600 dark:text-gray-400">
              You've been added to our newsletter list. Get ready for the latest updates and exclusive offers.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light bg-white dark:bg-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-primary-light dark:text-primary-dark dark:hover:bg-primary-light/90"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;