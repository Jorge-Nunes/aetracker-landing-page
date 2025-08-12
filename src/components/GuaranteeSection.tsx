import { Shield, Users, Smartphone, Clock, CheckCircle, Headphones } from "lucide-react";
const GuaranteeSection = () => {
  const guarantees = [{
    icon: Shield,
    title: "Certificação ANATEL",
    description: "Equipamentos homologados e certificados pela ANATEL para total segurança e legalidade.",
    badge: "Certificado"
  }, {
    icon: Users,
    title: "15 Anos de Mercado",
    description: "Experiência sólida e confiança de milhares de clientes em todo o Brasil.",
    badge: "Experiência"
  }, {
    icon: Smartphone,
    title: "Tecnologia Nacional",
    description: "Desenvolvido no Brasil para as condições brasileiras, com suporte local especializado.",
    badge: "Nacional"
  }, {
    icon: Clock,
    title: "Garantia de 1 Ano",
    description: "Cobertura total do equipamento e assistência técnica gratuita por 12 meses.",
    badge: "Garantia"
  }, {
    icon: CheckCircle,
    title: "Satisfação Garantida",
    description: "Se não ficar satisfeito em 30 dias, devolvemos 100% do valor pago.",
    badge: "Satisfação"
  }, {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Atendimento humano 24 horas por dia, 7 dias por semana, em todo o Brasil.",
    badge: "Suporte"
  }];
  return <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            Certificações e <span className="text-brand-red">Garantias</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sua tranquilidade é nossa prioridade. Conheça nossas certificações e garantias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => {
          const IconComponent = guarantee.icon;
          return <div key={index} className="bg-card rounded-lg p-6 border border-brand-red/20 hover:border-brand-red/40 transition-all duration-300 hover:shadow-red">
                <div className="flex items-start justify-between mb-4">
                  <IconComponent className="w-8 h-8 text-brand-red" />
                  <span className="bg-gradient-red text-brand-white text-xs px-2 py-1 rounded-full">
                    {guarantee.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-brand-white mb-3">
                  {guarantee.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {guarantee.description}
                </p>
              </div>;
        })}
        </div>


        <div className="mt-16 text-center">
          <div className="bg-background rounded-lg p-8 border border-brand-red/20 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-brand-white mb-4">
              🛡️ Nossa Promessa de Segurança
            </h3>
            <p className="text-muted-foreground leading-relaxed">"Garantimos que seu veículo estará protegido 24 horas por dia com a mais alta tecnologia de rastreamento satelital."</p>
            <div className="mt-6 flex items-center justify-center text-brand-red">
              <Shield className="w-6 h-6 mr-2" />
              <span className="font-semibold">AETRACKER - Sua segurança é nossa missão</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default GuaranteeSection;