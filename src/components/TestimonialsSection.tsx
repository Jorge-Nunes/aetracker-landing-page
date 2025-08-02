import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Empresário",
      image: testimonial1,
      content: "A AETRACKER salvou minha empresa! Quando meu caminhão foi roubado, conseguimos recuperá-lo em menos de 2 horas graças ao rastreamento preciso. Recomendo 100%!",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "Motorista de App",
      image: testimonial2,
      content: "Como trabalho com aplicativo, a segurança é fundamental. O rastreamento da AETRACKER me dá tranquilidade total. O app é super fácil de usar e o suporte é excelente.",
      rating: 5
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 border border-brand-red/20 hover:border-brand-red/40 transition-all duration-300 hover:shadow-red"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-brand-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-red fill-current" />
                ))}
              </div>

              <p className="text-brand-white italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-red rounded-lg p-8 text-brand-white">
            <h3 className="text-2xl font-bold mb-4">
              Junte-se a milhares de clientes satisfeitos!
            </h3>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold">10k+</div>
                <div className="text-sm opacity-90">Veículos Protegidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Tempo de Atividade</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Suporte Disponível</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;