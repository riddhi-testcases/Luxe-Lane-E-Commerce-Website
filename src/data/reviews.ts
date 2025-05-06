import { Review } from '../types';

export const reviews: Review[] = [
  {
    id: '1',
    userId: 'user1',
    userName: 'Eleanor Thompson',
    productId: '1',
    rating: 5,
    comment: 'This dress exceeded my expectations. The silk is of exceptional quality and the fit is perfect. I received so many compliments when I wore it to a gallery opening.',
    date: '2025-01-15'
  },
  {
    id: '2',
    userId: 'user2',
    userName: 'James Wilson',
    productId: '1',
    rating: 4,
    comment: 'Purchased this for my wife\'s birthday and she absolutely loves it. The color is slightly different from the pictures but still beautiful.',
    date: '2025-01-10'
  },
  {
    id: '3',
    userId: 'user3',
    userName: 'Sophia Chen',
    productId: '2',
    rating: 5,
    comment: 'The cashmere is incredibly soft and luxurious. The oversized fit is perfect for the current season and it pairs well with everything in my wardrobe.',
    date: '2025-01-20'
  },
  {
    id: '4',
    userId: 'user4',
    userName: 'Alexander Davis',
    productId: '3',
    rating: 5,
    comment: 'These boots are a work of art. The leather is butter-soft yet durable, and they were comfortable from the first wear. Worth every penny.',
    date: '2025-01-05'
  },
  {
    id: '5',
    userId: 'user5',
    userName: 'Olivia Martinez',
    productId: '4',
    rating: 4,
    comment: 'A beautiful piece that elevates any outfit. The chain is slightly shorter than I expected, but the pendant is exactly as pictured.',
    date: '2025-01-18'
  }
];

export const getReviewsByProductId = (productId: string): Review[] => {
  return reviews.filter(review => review.productId === productId);
};