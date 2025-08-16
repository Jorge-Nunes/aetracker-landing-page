
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie, Shield, Settings } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('aetracker-cookie-consent');
    if (!consent) {
      // Show after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('aetracker-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('aetracker-cookie-consent', 'essential');
    setIsVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem('aetracker-cookie-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end lg:items-center justify-center p-4">
      <div className="bg-card rounded-lg border border-brand-red/20 p-6 max-w-2xl w-full animate-scale-in shadow-elegant">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Cookie className="w-6 h-6 text-brand-red" />
            <h2 className="text-xl font-bold text-brand-white">
              Política de Cookies
            </h2>
          </div>
          <button
            onClick={rejectAll}
            className="text-muted-foreground hover:text-brand-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Utilizamos cookies para melhorar sua experiência, personalizar conteúdo e analisar nosso tráfego. 
            Ao continuar navegando, você concorda com nossa política de cookies.
          </p>

          {showDetails && (
            <div className="bg-background rounded-lg p-4 space-y-3 animate-fade-in">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-brand-white text-sm">Cookies Essenciais</h3>
                  <p className="text-xs text-muted-foreground">
                    Necessários para o funcionamento básico do site e não podem ser desabilitados.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Settings className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-brand-white text-sm">Cookies de Funcionalidade</h3>
                  <p className="text-xs text-muted-foreground">
                    Melhoram a funcionalidade e personalização do site, como lembrar suas preferências.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Cookie className="w-5 h-5 text-brand-red mt-0.5" />
                <div>
                  <h3 className="font-semibold text-brand-white text-sm">Cookies de Analytics</h3>
                  <p className="text-xs text-muted-foreground">
                    Nos ajudam a entender como os visitantes interagem com o site para melhorarmos nossos serviços.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              variant="cta"
              onClick={acceptAll}
              className="flex-1"
            >
              Aceitar Todos
            </Button>
            <Button
              variant="outline-red"
              onClick={acceptEssential}
              className="flex-1"
            >
              Apenas Essenciais
            </Button>
            <Button
              variant="ghost"
              onClick={() => setShowDetails(!showDetails)}
              className="text-brand-white hover:text-brand-red"
            >
              {showDetails ? 'Menos Detalhes' : 'Mais Detalhes'}
            </Button>
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-muted-foreground">
              Ao clicar em "Aceitar Todos", você concorda com o armazenamento de cookies em seu dispositivo.{' '}
              <a href="#" className="text-brand-red hover:underline">
                Saiba mais sobre nossa política de privacidade
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
