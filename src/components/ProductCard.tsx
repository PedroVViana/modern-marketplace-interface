
import { Link } from 'react-router-dom';
import { Product } from '@/lib/productData';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link 
      to={`/product/${product.id}`}
      className="block group overflow-hidden rounded-lg border border-border/30 bg-card card-hover"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {product.isPromoted && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
            Destaque
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <p className="mt-2 text-xl font-bold text-foreground">
          R$ {product.price.toLocaleString('pt-BR')}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          {product.location}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          {product.date}
        </p>
      </div>
    </Link>
  );
}
