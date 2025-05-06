import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  React.useEffect(() => {
    document.title = 'FAQ | LUXE LANE';
  }, []);

  const faqs = [
    {
      question: "What makes LUXE LANE unique?",
      answer: "LUXE LANE uniquely combines international luxury fashion with traditional Indian craftsmanship, creating pieces that are both globally sophisticated and culturally rich."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package through our shipping partners' websites."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn items in their original packaging. Returns are free for customers within India."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide! Shipping times and costs vary by location. You can calculate shipping costs at checkout."
    },
    {
      question: "How do I care for my LUXE LANE pieces?",
      answer: "Each item comes with specific care instructions. Generally, we recommend dry cleaning for delicate pieces and hand washing for others using mild detergent."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-serif font-medium text-center mb-8">Frequently Asked Questions</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQPage;