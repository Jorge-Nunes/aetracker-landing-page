import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Empresário - Frota de 12 veículos",
      image: testimonial1,
      content: "A AETRACKER salvou minha empresa! Quando meu caminhão foi roubado, conseguimos recuperá-lo em menos de 2 horas graças ao rastreamento preciso. Já recuperei 3 veículos em 2 anos. ROI fantástico!",
      rating: 5,
      recovery: "Recuperou 3 veículos"
    },
    {
      name: "Maria Santos",
      role: "Motorista de App - Uber/99",
      image: testimonial2,
      content: "Como trabalho com aplicativo, a segurança é fundamental. O rastreamento da AETRACKER me dá tranquilidade total. O app é super fácil de usar e o suporte é excelente. Já indiquei para 15 amigos!",
      rating: 5,
      recovery: "Cliente há 3 anos"
    },
    {
      name: "João Oliveira",
      role: "Comerciante - Dono de Moto",
      image: testimonial1,
      content: "Minha moto foi roubada na sexta-feira às 18h. No sábado às 8h já estava de volta na minha garagem! A AETRACKER não só localizou como a polícia conseguiu prender os ladrões. Incrível!",
      rating: 5,
      recovery: "Moto recuperada em 14h"
    },
    {
      name: "Ana Costa",
      role: "Médica - BMW recuperada",
      image: testimonial2,
      content: "Achei que nunca mais veria meu carro. Em 4 horas a AETRACKER localizou e a polícia recuperou. O sistema funcionou perfeitamente mesmo em área rural. Vale cada centavo!",
      rating: 5,
      recovery: "BMW X3 recuperada"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            O que nossos <span className="text-brand-red">clientes dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milhares de clientes confiam na AETRACKER para proteger seus veículos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 border border-brand-red/20 hover:border-brand-red/40 transition-all duration-300 hover:shadow-red"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="bg-gradient-red text-brand-white text-xs px-2 py-1 rounded-full">
                  ✅ Verificado
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-red fill-current" />
                  ))}
                </div>
                <div className="text-xs text-brand-red font-semibold">
                  {testimonial.recovery}
                </div>
              </div>

              <p className="text-brand-white italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-red rounded-lg p-8 text-brand-white">
            <h3 className="text-2xl font-bold mb-6">
              🎯 Resultados Reais de Clientes AETRACKER
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">50k+</div>
                <div className="text-sm opacity-90">Veículos Protegidos</div>
                <div className="text-xs text-green-300 mt-1">✅ Ativo agora</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">1.247</div>
                <div className="text-sm opacity-90">Recuperados Este Ano</div>
                <div className="text-xs text-yellow-300 mt-1">🚗 Última: hoje</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">2 MIN</div>
                <div className="text-sm opacity-90">Tempo Médio Resposta</div>
                <div className="text-xs text-red-300 mt-1">⚡ 24/7 ativo</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-sm opacity-90">Taxa Recuperação</div>
                <div className="text-xs text-blue-300 mt-1">📊 Comprovado</div>
              </div>
            </div>
            <div className="mt-6 text-sm opacity-90">
              ⭐ 4.9/5 estrelas no Google • 🏆 Melhor Rastreador 2023
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;