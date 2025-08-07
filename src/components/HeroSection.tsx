import { Button } from "@/components/ui/button";
import { MapPin, Shield, Clock, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-tracking.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-dark flex items-center pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white leading-tight">
                Proteção Para Seu <span className="text-brand-red">Veículo 24H</span><br/>
                <span className="text-brand-red">Via Satélite</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Alta tecnologia de bloqueio com localização GPS e travamento automático. 
                Planos a partir de <span className="text-brand-red font-bold">R$ 29,00/mês</span>.
              </p>
            </div>

            {/* Benefits Quick List */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-red" />
                <span className="text-brand-white">Localização via GPS</span>
              </div>
              <div className="flex items-center space-x-3">
                <Smartphone className="w-5 h-5 text-brand-red" />
                <span className="text-brand-white">Alerta pelo App</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-brand-red" />
                <span className="text-brand-white">Travamento Automático</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-brand-red" />
                <span className="text-brand-white">Bloqueio via Satélite</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('contato')}
                className="animate-pulse-glow"
              >
                <MapPin className="w-5 h-5" />
                Quero Rastrear Meu Veículo
              </Button>
              <Button 
                variant="outline-red" 
                size="lg"
                onClick={() => scrollToSection('como-funciona')}
              >
                Como Funciona
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="bg-brand-dark/50 rounded-lg p-4 border border-brand-red/20">
              <p className="text-brand-white text-sm">
                <span className="text-brand-red font-bold">+ Segurança + Tranquilidade</span> • 
                Para pessoas e empresas • Taxa de instalação reduzida
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <img 
              src={heroImage} 
              alt="Rastreamento Veicular AETRACKER" 
              className="w-full h-auto rounded-lg shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;