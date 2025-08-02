import { Button } from "@/components/ui/button";
import { Check, Star, Crown } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Essencial",
      price: "49,90",
      description: "Ideal para veículos de uso pessoal",
      popular: false,
      features: [
        "Monitoramento 24/7",
        "Aplicativo mobile",
        "Localização em tempo real",
        "Histórico de rotas",
        "Suporte por chat",
        "1 veículo"
      ]
    },
    {
      name: "Profissional",
      price: "89,90",
      description: "Perfeito para pequenas empresas",
      popular: true,
      features: [
        "Todos os recursos do Essencial",
        "Cercas eletrônicas ilimitadas",
        "Relatórios detalhados",
        "Suporte prioritário 24/7",
        "Alertas personalizados",
        "Até 3 veículos"
      ]
    },
    {
      name: "Empresarial",
      price: "149,90",
      description: "Solução completa para frotas",
      popular: false,
      features: [
        "Todos os recursos do Profissional",
        "Gestão completa de frotas",
        "API para integração",
        "Suporte técnico dedicado",
        "Relatórios avançados",
        "Veículos ilimitados"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planos" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            Escolha o <span className="text-brand-red">Plano Ideal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Sem consulta ao SPC/Serasa. Negativados são aceitos. Contrate agora e proteja seu veículo!
          </p>
          <div className="bg-gradient-red text-brand-white px-6 py-3 rounded-full inline-block font-semibold">
            🔥 Promoção: Primeiro mês 50% OFF!
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative bg-card rounded-lg p-8 border-2 transition-all duration-300 hover:shadow-red
                ${plan.popular 
                  ? 'border-brand-red shadow-red scale-105' 
                  : 'border-brand-red/20 hover:border-brand-red/40'
                }
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-red text-brand-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-white mb-2 flex items-center justify-center">
                  {plan.name}
                  {plan.name === "Empresarial" && <Crown className="w-5 h-5 ml-2 text-brand-red" />}
                </h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-brand-red">R$ {plan.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-brand-white">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "cta" : "outline-red"}
                className="w-full"
                onClick={scrollToContact}
              >
                {plan.popular ? "Contratar Agora" : "Escolher Plano"}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-background rounded-lg p-8 border border-brand-red/20">
            <h3 className="text-2xl font-bold text-brand-white mb-4">
              Garantias e Facilidades
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-brand-red mb-2">✓ Sem Burocracia</h4>
                <p className="text-muted-foreground text-sm">
                  Não consultamos SPC/Serasa. Negativados são aceitos.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-red mb-2">✓ Instalação Grátis</h4>
                <p className="text-muted-foreground text-sm">
                  Técnicos especializados instalam sem custo adicional.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-red mb-2">✓ Sem Fidelidade</h4>
                <p className="text-muted-foreground text-sm">
                  Cancele quando quiser, sem multas ou taxas extras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;