
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground animate-slide-down">
              <span className="block">Buy and sell with ease</span>
              <span className="block text-primary mt-2">directly in your area</span>
            </h1>
            <p className="mt-6 text-balance text-lg leading-8 text-muted-foreground max-w-2xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Discover thousands of items near you. From electronics to vehicles, find exactly what you need at the best prices.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6 animate-slide-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/post-ad">
                  Post Your Ad
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/browse">
                  Browse Items
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/80 to-background"></div>
    </div>
  );
}
