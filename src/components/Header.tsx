import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/95 backdrop-blur-md border-b border-brand-red/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="AETRacker" className="h-10 w-10" />
            <div className="text-xl font-bold text-brand-white">
              AE<span className="text-brand-red">Tracker</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-brand-white hover:text-brand-red transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-brand-white hover:text-brand-red transition-colors duration-300"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('planos')}
              className="text-brand-white hover:text-brand-red transition-colors duration-300"
            >
              Planos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-brand-white hover:text-brand-red transition-colors duration-300"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button variant="cta" onClick={() => scrollToSection('contato')}>
              <MapPin className="w-4 h-4" />
              Solicitar Demonstração
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-brand-white p-2"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-dark/95 backdrop-blur-md border-t border-brand-red/20">
            <nav className="flex flex-col py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-brand-white hover:text-brand-red transition-colors duration-300 text-left px-4"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className="text-brand-white hover:text-brand-red transition-colors duration-300 text-left px-4"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('planos')}
                className="text-brand-white hover:text-brand-red transition-colors duration-300 text-left px-4"
              >
                Planos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-brand-white hover:text-brand-red transition-colors duration-300 text-left px-4"
              >
                Contato
              </button>
              <div className="px-4 pt-2">
                <Button variant="cta" className="w-full" onClick={() => scrollToSection('contato')}>
                  <MapPin className="w-4 h-4" />
                  Solicitar Demonstração
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;