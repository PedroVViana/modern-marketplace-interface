
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/Layout';
import { products } from '@/lib/productData';
import { ChevronLeft, MessageCircle, User, Phone, Heart, Share } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  
  // Find the product with the matching ID
  const product = products.find(p => p.id === id);
  
  // If product not found, render a message
  if (!product) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container py-6 animate-fade-in">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to listings
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Images */}
          <div className="md:col-span-2">
            <div 
              className={`relative rounded-lg overflow-hidden bg-muted ${isImageZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              onClick={() => setIsImageZoomed(!isImageZoomed)}
            >
              <div className="aspect-video md:aspect-auto md:h-[400px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className={`w-full h-full object-cover transition-transform duration-300 ${isImageZoomed ? 'scale-110' : 'scale-100'}`}
                />
              </div>
            </div>
            
            {/* Product Description */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-muted-foreground">
                {product.description || 'No description provided.'}
              </p>
            </div>
          </div>
          
          {/* Product Info & Actions */}
          <div className="space-y-6">
            <div className="rounded-lg border border-border p-6 space-y-4">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-muted-foreground text-sm">{product.location} • Posted on {product.date}</p>
              </div>
              
              <div className="pt-4 border-t border-border">
                <p className="text-3xl font-bold">R$ {product.price.toLocaleString('pt-BR')}</p>
              </div>
              
              <div className="pt-4 flex flex-col space-y-3">
                <Button className="w-full" size="lg">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat with Seller
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Show Phone Number
                </Button>
                <div className="flex gap-3 pt-2">
                  <Button variant="ghost" size="icon" className="flex-1">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="flex-1">
                    <Share className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Seller Info */}
            <div className="rounded-lg border border-border p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-muted rounded-full p-3">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">{product.seller.name}</h3>
                  <p className="text-sm text-muted-foreground">Member since {product.seller.memberSince}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm">
                  Seller rating: <span className="font-medium">{product.seller.rating} / 5</span>
                </p>
                <Button variant="outline" className="w-full mt-4">
                  See all ads by this seller
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Products */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-6">Similar Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(similarProduct => (
                <Link 
                  key={similarProduct.id}
                  to={`/product/${similarProduct.id}`}
                  className="block group overflow-hidden rounded-lg border border-border/30 bg-card card-hover"
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={similarProduct.image}
                      alt={similarProduct.title}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium leading-tight line-clamp-2">
                      {similarProduct.title}
                    </h3>
                    <p className="mt-1 text-base font-bold">
                      R$ {similarProduct.price.toLocaleString('pt-BR')}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
