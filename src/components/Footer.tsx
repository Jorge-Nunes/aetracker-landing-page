
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-brand-black border-t border-brand-red/20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="text-xl font-bold text-brand-white">
                AE<span className="text-brand-red">TRACKER</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              Proteção inteligente para seu veículo com tecnologia de ponta e suporte 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-brand-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-red transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-brand-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-brand-red transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('como-funciona')} className="text-muted-foreground hover:text-brand-red transition-colors">
                  Como Funciona
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('planos')} className="text-muted-foreground hover:text-brand-red transition-colors">
                  Planos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="text-muted-foreground hover:text-brand-red transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold text-brand-white mb-4">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Rastreamento de Carros</li>
              <li>Rastreamento de Motos</li>
              <li>Rastreamento de Caminhões</li>
              <li>Gestão de Frotas</li>
              <li>Instalação Técnica</li>
              <li>Suporte 24/7</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold text-brand-white mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-red" />
                <span className="text-muted-foreground">(11) 98773-3033</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-red" />
                <span className="text-muted-foreground">contato@aetracker.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-brand-red" />
                <span className="text-muted-foreground">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-red/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 AETRACKER. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-brand-red text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-red text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
