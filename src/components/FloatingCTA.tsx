import { useState, useEffect } from "react";
import { Phone, MessageCircle, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {!isExpanded ? (
        // Collapsed state - floating button
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-red text-brand-white p-4 rounded-full shadow-elegant hover:shadow-red transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <Phone className="w-6 h-6" />
        </button>
      ) : (
        // Expanded state - contact options
        <div className="bg-card rounded-lg shadow-elegant border border-brand-red/20 p-4 min-w-[250px] animate-scale-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-brand-white font-semibold">Fale Conosco</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-muted-foreground hover:text-brand-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            <a
              href="https://wa.me/5511999999999?text=Olá! Tenho interesse no rastreamento AETRACKER. Podem me ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <div>
                <div className="font-semibold text-sm">WhatsApp</div>
                <div className="text-xs opacity-90">(11) 99999-9999</div>
              </div>
            </a>

            <a
              href="tel:+551140004000"
              className="flex items-center gap-3 bg-brand-red hover:bg-brand-red-hover text-brand-white p-3 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              <div>
                <div className="font-semibold text-sm">Ligue Agora</div>
                <div className="text-xs opacity-90">(11) 4000-4000</div>
              </div>
            </a>

            <button
              onClick={scrollToContact}
              className="w-full bg-secondary hover:bg-secondary/80 text-brand-white p-3 rounded-lg transition-colors text-sm font-semibold"
            >
              📝 Formulário de Contato
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              ⚡ Resposta em até 2 minutos
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;