
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // In a real app, you would implement search functionality here
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl bg-primary text-primary-foreground px-2 py-1 rounded">OLX</span>
          </Link>
        </div>
        
        <div className="flex-1 mx-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search products, brands and categories..."
              className="w-full h-10 pl-10 pr-4 rounded-full border border-input bg-background py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Button 
              type="submit" 
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 rounded-full px-3"
            >
              Search
            </Button>
          </form>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="flex items-center gap-1" asChild>
              <Link to="/login">
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>
            </Button>
            
            <Button className="flex items-center gap-1 rounded-full" size="sm" asChild>
              <Link to="/post-ad">
                <Plus className="h-4 w-4" />
                <span>Post Ad</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 flex md:hidden animate-fade-in">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={toggleMenu}></div>
          <div className="relative w-full max-w-xs bg-background p-6 shadow-lg">
            <nav className="flex flex-col space-y-6">
              <Link to="/login" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMenu}>
                <User className="h-5 w-5" />
                <span>Login / Register</span>
              </Link>
              <Link to="/post-ad" className="flex items-center gap-2 text-primary font-medium" onClick={toggleMenu}>
                <Plus className="h-5 w-5" />
                <span>Post Ad</span>
              </Link>
              <div className="border-t pt-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Categories</h3>
                <div className="space-y-3">
                  {['Electronics', 'Vehicles', 'Property', 'Jobs', 'Furniture', 'Fashion'].map((category) => (
                    <Link
                      key={category}
                      to={`/category/${category.toLowerCase()}`}
                      className="block text-sm hover:text-primary transition-colors"
                      onClick={toggleMenu}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
