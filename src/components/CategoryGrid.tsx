
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
}

export function CategoryGrid() {
  const categories: Category[] = [
    { id: 'electronics', name: 'Electronics', icon: <Search className="h-6 w-6" />, count: 1243 },
    { id: 'vehicles', name: 'Vehicles', icon: <Search className="h-6 w-6" />, count: 872 },
    { id: 'property', name: 'Property', icon: <Search className="h-6 w-6" />, count: 543 },
    { id: 'jobs', name: 'Jobs', icon: <Search className="h-6 w-6" />, count: 321 },
    { id: 'furniture', name: 'Furniture', icon: <Search className="h-6 w-6" />, count: 765 },
    { id: 'fashion', name: 'Fashion', icon: <Search className="h-6 w-6" />, count: 987 },
    { id: 'services', name: 'Services', icon: <Search className="h-6 w-6" />, count: 432 },
    { id: 'hobbies', name: 'Hobbies', icon: <Search className="h-6 w-6" />, count: 678 },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Browse By Category
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find what you need in our curated categories
          </p>
        </div>
        
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group glass flex flex-col items-center justify-center p-6 rounded-xl card-hover text-center"
              style={{ 
                animationName: 'fade-in',
                animationDuration: '0.5s',
                animationFillMode: 'both',
                animationDelay: `${0.1 * index}s`
              }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="mt-4 text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {category.count} listings
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
