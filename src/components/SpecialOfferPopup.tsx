import { useState, useEffect } from "react";
import { X, Clock, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpecialOfferPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Countdown timer
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-red rounded-xl p-8 max-w-md w-full text-center text-brand-white relative animate-scale-in shadow-elegant">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-brand-white hover:text-gray-300 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <Gift className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl font-bold mb-2">
            🎉 OFERTA ESPECIAL!
          </h2>
          <p className="text-lg opacity-90">
            30% OFF no primeiro mês
          </p>
        </div>

        <div className="bg-black/30 rounded-lg p-4 mb-6">
          <p className="text-sm mb-2 opacity-80">⏰ Oferta válida por:</p>
          <div className="flex justify-center gap-2 text-xl font-bold">
            <div className="bg-brand-white text-brand-red px-2 py-1 rounded">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <span>:</span>
            <div className="bg-brand-white text-brand-red px-2 py-1 rounded">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <span>:</span>
            <div className="bg-brand-white text-brand-red px-2 py-1 rounded">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-left bg-black/20 rounded-lg p-4">
            <p className="text-sm opacity-90 mb-2">✅ Com esta oferta você ganha:</p>
            <ul className="text-sm space-y-1">
              <li>• Instalação 100% GRATUITA</li>
              <li>• Primeiro mês por apenas R$ 20,30</li>
              <li>• Ativação imediata</li>
              <li>• Sem fidelidade</li>
            </ul>
          </div>

          <Button
            onClick={scrollToContact}
            variant="hero"
            className="w-full bg-brand-white text-brand-red hover:bg-gray-100 font-bold py-4 text-lg animate-pulse"
          >
            <Clock className="w-5 h-5 mr-2" />
            GARANTIR DESCONTO AGORA
          </Button>

          <p className="text-xs opacity-70">
            * Promoção válida apenas hoje para novos clientes
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferPopup;