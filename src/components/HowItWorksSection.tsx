import { Car, Settings, Smartphone, Shield } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Car,
      title: "1. Instalação Rápida",
      description: "Nossos técnicos especializados instalam o rastreador em seu veículo de forma discreta e segura."
    },
    {
      icon: Settings,
      title: "2. Configuração Personalizada",
      description: "Configuramos alertas, cercas eletrônicas e preferências de acordo com suas necessidades."
    },
    {
      icon: Smartphone,
      title: "3. Acompanhe pelo App",
      description: "Baixe nosso aplicativo e tenha controle total sobre seu veículo na palma da mão."
    },
    {
      icon: Shield,
      title: "4. Proteção Garantida",
      description: "Monitoramento 24/7 com suporte especializado e resposta rápida em emergências."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            Como Funciona o <span className="text-brand-red">Rastreamento</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo simples e eficiente para garantir a proteção do seu veículo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 relative">
                <div className="w-20 h-20 bg-gradient-red rounded-full flex items-center justify-center mx-auto shadow-red group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-brand-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-brand-red/30">
                    <div className="w-0 h-full bg-brand-red animate-pulse"></div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-brand-white mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-brand-dark rounded-lg p-8 border border-brand-red/20">
            <h3 className="text-2xl font-bold text-brand-white mb-4">
              Instalação Profissional Inclusa
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe técnica realiza a instalação sem custo adicional, 
              garantindo o funcionamento perfeito do seu rastreador.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-brand-red/20 text-brand-red px-3 py-1 rounded-full">
                ✓ Instalação gratuita
              </span>
              <span className="bg-brand-red/20 text-brand-red px-3 py-1 rounded-full">
                ✓ Técnicos certificados
              </span>
              <span className="bg-brand-red/20 text-brand-red px-3 py-1 rounded-full">
                ✓ Garantia total
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;