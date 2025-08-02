import { MapPin, Shield, Smartphone, Clock, Users, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Monitoramento em Tempo Real",
      description: "Acompanhe a localização do seu veículo 24/7 com precisão GPS de alta qualidade."
    },
    {
      icon: Shield,
      title: "Máxima Segurança",
      description: "Criptografia avançada e protocolos de segurança para proteger seus dados."
    },
    {
      icon: Smartphone,
      title: "Aplicativo Próprio",
      description: "App intuitivo para Android e iOS com todas as funcionalidades na palma da mão."
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Equipe especializada disponível 24 horas por dia, todos os dias da semana."
    },
    {
      icon: Users,
      title: "Gestão de Frotas",
      description: "Gerencie múltiplos veículos com relatórios detalhados e alertas personalizados."
    },
    {
      icon: Zap,
      title: "Alertas Inteligentes",
      description: "Receba notificações instantâneas sobre movimentações suspeitas e eventos importantes."
    }
  ];

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            Por que escolher a <span className="text-brand-red">AETRacker</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologia de ponta, suporte especializado e a melhor experiência em rastreamento veicular do Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 border border-brand-red/20 hover:border-brand-red/40 transition-all duration-300 hover:shadow-red group"
            >
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-brand-red group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-brand-white mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;