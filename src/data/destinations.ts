import { maharashtraDestinations } from './maharashtra';
import type { Destination } from '../types';

const otherDestinations: Destination[] = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal, Agra',
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80',
    rating: 4.8,
    reviewCount: 2453,
    price: 1500,
    state: 'Uttar Pradesh',
    description: 'Symbol of eternal love, this magnificent marble monument is a must-visit wonder of the world.',
    highlights: ['UNESCO World Heritage Site', 'Mughal Architecture', 'Sunrise Views', 'Garden Complex']
  },
  {
    id: 'golden-temple',
    name: 'Golden Temple, Amritsar',
    imageUrl: 'https://images.unsplash.com/photo-1589308454676-22c0253cd8a1?auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewCount: 3245,
    price: 0,
    state: 'Punjab',
    description: 'The holiest shrine of Sikhism, known for its stunning golden architecture and spiritual atmosphere.',
    highlights: ['Spiritual Experience', 'Golden Architecture', 'Langar Hall', 'Night Views']
  },
  {
    id: 'qutub-minar',
    name: 'Qutub Minar, Delhi',
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80',
    rating: 4.7,
    reviewCount: 1876,
    price: 600,
    state: 'Delhi',
    description: 'UNESCO World Heritage site featuring the tallest brick minaret in the world.',
    highlights: ['Islamic Architecture', 'Historical Complex', 'Iron Pillar', 'Archaeological Site']
  },
  {
    id: 'mysore-palace',
    name: 'Mysore Palace',
    imageUrl: 'https://images.unsplash.com/photo-1600689486936-77acb75bd114?auto=format&fit=crop&q=80',
    rating: 4.8,
    reviewCount: 2198,
    price: 400,
    state: 'Karnataka',
    description: 'One of India\'s grandest royal buildings, featuring Indo-Saracenic architecture.',
    highlights: ['Royal Architecture', 'Light Show', 'Art Gallery', 'Royal Heritage']
  },
  {
    id: 'khajuraho',
    name: 'Khajuraho Temples',
    imageUrl: 'https://images.unsplash.com/photo-1624809781812-9129f2c58a08?auto=format&fit=crop&q=80',
    rating: 4.7,
    reviewCount: 1543,
    price: 750,
    state: 'Madhya Pradesh',
    description: 'Famous for their Nagara-style architectural symbolism and erotic sculptures.',
    highlights: ['Temple Architecture', 'Ancient Art', 'UNESCO Site', 'Cultural Heritage']
  }
];

export const destinations = [...otherDestinations, ...maharashtraDestinations];