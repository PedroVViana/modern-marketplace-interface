
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { CategoryGrid } from '@/components/CategoryGrid';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/productData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Index() {
  // Get featured products
  const featuredProducts = products.filter(product => product.isPromoted);
  // Get recent products (excluding featured)
  const recentProducts = products
    .filter(product => !product.isPromoted)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Layout>
      <Hero />
      <CategoryGrid />
      
      {/* Featured Products */}
      <section className="py-12 bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Featured Products
              </h2>
              <p className="mt-2 text-muted-foreground">
                Handpicked items that you might love
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 sm:mt-0">
              <Link to="/browse">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                style={{ 
                  animationName: 'fade-in',
                  animationDuration: '0.5s',
                  animationFillMode: 'both',
                  animationDelay: `${0.1 * index}s`
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Products */}
      <section className="py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Recent Products
              </h2>
              <p className="mt-2 text-muted-foreground">
                The latest items from our marketplace
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 sm:mt-0">
              <Link to="/browse">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recentProducts.slice(0, 8).map((product, index) => (
              <div 
                key={product.id}
                style={{ 
                  animationName: 'fade-in',
                  animationDuration: '0.5s',
                  animationFillMode: 'both',
                  animationDelay: `${0.1 * index}s`
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link to="/browse">Load More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Ready to sell your items?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              List your items for free and reach thousands of buyers in your area
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/post-ad">Post Your Ad Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
