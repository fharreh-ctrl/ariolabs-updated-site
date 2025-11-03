import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-heading text-2xl font-bold text-primary">ArioLabs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-secondary">
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-secondary">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-popover">
              <DropdownMenuItem asChild>
                <Link to="/us-businesses" className="cursor-pointer">🇺🇸 U.S. Businesses</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/ph-businesses" className="cursor-pointer">🇵🇭 PH Businesses</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/case-studies" className="text-sm font-medium transition-colors hover:text-secondary">
            Case Studies
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-secondary">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium transition-colors hover:text-secondary">
            Contact
          </Link>
          <Link to="/schedule">
            <Button variant="default" size="sm">Book Free Call</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col space-y-4 py-4">
            <Link
              to="/"
              className="text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/us-businesses"
              className="text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🇺🇸 U.S. Businesses
            </Link>
            <Link
              to="/ph-businesses"
              className="text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🇵🇭 PH Businesses
            </Link>
            <Link
              to="/case-studies"
              className="text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link to="/schedule" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="default" size="sm" className="w-full">Book Free Call</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
