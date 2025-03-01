
export interface Product {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  description?: string;
  date: string;
  category: string;
  isPromoted?: boolean;
  seller: {
    name: string;
    rating: number;
    memberSince: string;
  };
}

export const products: Product[] = [
  {
    id: '1',
    title: 'iPhone 13 Pro - 256GB - Excellent Condition',
    price: 799,
    location: 'São Paulo, SP',
    image: 'https://images.unsplash.com/photo-1623045434020-5d9e266329ff?q=80&w=500',
    description: 'Selling my iPhone 13 Pro with 256GB storage. Excellent condition, no scratches. Comes with original box, charger, and unused earphones. Battery health at 92%. Reason for selling: upgraded to new model.',
    date: '2023-05-15',
    category: 'electronics',
    isPromoted: true,
    seller: {
      name: 'Carlos M.',
      rating: 4.8,
      memberSince: 'May 2020',
    },
  },
  {
    id: '2',
    title: 'Modern Sofa - 3 Seater - Grey',
    price: 450,
    location: 'Rio de Janeiro, RJ',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=500',
    description: 'Comfortable 3-seater sofa in grey. Used for only 1 year, in excellent condition. Removable, washable covers. Dimensions: 220cm width x 85cm depth x 90cm height.',
    date: '2023-05-10',
    category: 'furniture',
    seller: {
      name: 'Ana L.',
      rating: 4.9,
      memberSince: 'January 2019',
    },
  },
  {
    id: '3',
    title: 'Honda Civic 2020 - 30,000km',
    price: 22500,
    location: 'Belo Horizonte, MG',
    image: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?q=80&w=500',
    description: 'Honda Civic 2020 model with only 30,000km. Single owner, all services done at authorized dealer. Excellent condition, no accidents. Full option package including sunroof and leather seats.',
    date: '2023-05-08',
    category: 'vehicles',
    isPromoted: true,
    seller: {
      name: 'Roberto S.',
      rating: 4.7,
      memberSince: 'March 2018',
    },
  },
  {
    id: '4',
    title: 'PlayStation 5 - Disk Version - 2 Controllers',
    price: 599,
    location: 'Brasília, DF',
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=500',
    description: 'PlayStation 5 disk version in excellent condition. Comes with 2 controllers and 3 games (FIFA 23, God of War, Spider-Man). All original packaging included.',
    date: '2023-05-05',
    category: 'electronics',
    seller: {
      name: 'Pedro H.',
      rating: 4.6,
      memberSince: 'October 2021',
    },
  },
  {
    id: '5',
    title: 'Apartment for Rent - 2 Bedrooms - City Center',
    price: 1200,
    location: 'Curitiba, PR',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500',
    description: 'Modern 2-bedroom apartment available for rent in the city center. 75m², fully renovated, with built-in kitchen, air conditioning in all rooms. Great location, close to shops, restaurants, and public transport.',
    date: '2023-05-03',
    category: 'property',
    isPromoted: true,
    seller: {
      name: 'Imobiliária Central',
      rating: 4.9,
      memberSince: 'June 2015',
    },
  },
  {
    id: '6',
    title: 'Mountain Bike - Trek Marlin 7',
    price: 680,
    location: 'Porto Alegre, RS',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=500',
    description: 'Trek Marlin 7 mountain bike, 2022 model. Size medium, 29" wheels. Used only a few times, in excellent condition. Hydraulic disc brakes, lockout suspension. Selling due to injury.',
    date: '2023-05-01',
    category: 'hobbies',
    seller: {
      name: 'Marcelo D.',
      rating: 4.5,
      memberSince: 'December 2020',
    },
  },
  {
    id: '7',
    title: 'MacBook Pro 16" 2021 - M1 Pro - 16GB RAM - 512GB',
    price: 1800,
    location: 'Florianópolis, SC',
    image: 'https://images.unsplash.com/photo-1598495037740-2c360cf49e50?q=80&w=500',
    description: 'MacBook Pro 16" from 2021 with M1 Pro chip, 16GB RAM, and 512GB SSD. In perfect condition, battery cycle count under 100. Comes with original charger and box.',
    date: '2023-04-28',
    category: 'electronics',
    seller: {
      name: 'Julia F.',
      rating: 5.0,
      memberSince: 'August 2019',
    },
  },
  {
    id: '8',
    title: 'Graphic Designer Position - Remote Work',
    price: 3500,
    location: 'Remote',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500',
    description: 'Looking for an experienced Graphic Designer to join our growing team. Remote position, flexible hours. Requirements: 3+ years of experience, proficiency in Adobe Creative Suite, strong portfolio.',
    date: '2023-04-25',
    category: 'jobs',
    isPromoted: true,
    seller: {
      name: 'Creative Agency Inc.',
      rating: 4.7,
      memberSince: 'February 2017',
    },
  },
];
