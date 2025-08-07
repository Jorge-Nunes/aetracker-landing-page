import { useState, useEffect } from "react";
import { Clock, Users, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const UrgencySection = () => {
  const [availableSlots, setAvailableSlots] = useState(12);
  const [recentRecoveries, setRecentRecoveries] = useState(47);

  useEffect(() => {
    // Simulate decreasing available slots
    const interval = setInterval(() => {
      setAvailableSlots(prev => {
        const newValue = prev - Math.floor(Math.random() * 2);
        return newValue < 5 ? 5 : newValue;
      });
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simulate increasing recoveries
    const interval = setInterval(() => {
      setRecentRecoveries(prev => prev + Math.floor(Math.random() * 3));
    }, 45000); // Every 45 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-red">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center text-brand-white">
          <div className="mb-8">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚨 ATENÇÃO: Vagas Limitadas!
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Devido à alta procura, temos vagas limitadas para instalação nesta semana
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-black/30 rounded-lg p-6 backdrop-blur-sm">
              <Users className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
              <div className="text-2xl font-bold mb-2">{availableSlots}</div>
              <div className="text-sm opacity-90">Vagas Restantes Esta Semana</div>
              <div className="text-xs mt-2 text-yellow-300">
                ⚠️ Atualizando em tempo real
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-6 backdrop-blur-sm">
              <CheckCircle className="w-8 h-8 mx-auto mb-3 text-green-300" />
              <div className="text-2xl font-bold mb-2">{recentRecoveries}</div>
              <div className="text-sm opacity-90">Veículos Recuperados Este Mês</div>
              <div className="text-xs mt-2 text-green-300">
                ✅ Última recuperação: 2h atrás
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-6 backdrop-blur-sm">
              <Clock className="w-8 h-8 mx-auto mb-3 text-red-300" />
              <div className="text-2xl font-bold mb-2">2 MIN</div>
              <div className="text-sm opacity-90">Tempo Médio de Resposta</div>
              <div className="text-xs mt-2 text-red-300">
                ⏱️ Central 24/7 ativa
              </div>
            </div>
          </div>

          <div className="bg-black/40 rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold mb-4">
              🔥 PROMOÇÃO TERMINA EM:
            </h3>
            <div className="text-lg font-semibold mb-4">
              Instalação GRATUITA + 30% OFF no 1º mês
            </div>
            <div className="text-sm opacity-90">
              ⚠️ Apenas para os primeiros {availableSlots} clientes desta semana
            </div>
          </div>

          <div className="space-y-4">
            <Button
              onClick={scrollToContact}
              variant="hero"
              className="bg-brand-white text-brand-red hover:bg-gray-100 font-bold px-8 py-4 text-lg animate-pulse"
            >
              🚀 GARANTIR MINHA VAGA AGORA
            </Button>
            
            <p className="text-sm opacity-80">
              ✅ Sem compromisso • ✅ Sem fidelidade • ✅ Atendimento imediato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;