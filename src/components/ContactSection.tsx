import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em até 1 hora útil.",
    });
    setFormData({ name: "", phone: "", email: "", vehicle: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511943453069?text=Olá! Gostaria de saber mais sobre os planos de rastreamento da AETRACKER.", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            Fale com nossos <span className="text-brand-red">Especialistas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas e solicite uma demonstração gratuita. Nossa equipe está pronta para ajudar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div className="bg-card rounded-lg p-8 border border-brand-red/20">
            <h3 className="text-2xl font-bold text-brand-white mb-6">
              Solicite uma Demonstração
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-brand-red/20 text-brand-white placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Seu telefone/WhatsApp"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-background border-brand-red/20 text-brand-white placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-brand-red/20 text-brand-white placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="vehicle"
                  placeholder="Tipo de veículo (carro, moto, caminhão, etc.)"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="bg-background border-brand-red/20 text-brand-white placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Conte-nos suas necessidades ou dúvidas..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background border-brand-red/20 text-brand-white placeholder:text-muted-foreground min-h-[120px]"
                />
              </div>
              <Button type="submit" variant="cta" className="w-full">
                <Mail className="w-4 h-4" />
                Solicitar Demonstração
              </Button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-background rounded-lg p-8 border border-brand-red/20">
              <h3 className="text-2xl font-bold text-brand-white mb-6">
                Entre em Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-red rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-white">Telefones</h4>
                    <p className="text-muted-foreground">(11) 94345-3069</p>
                    <p className="text-muted-foreground">(11) 98773-3033</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-red rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-white">E-mail</h4>
                    <p className="text-muted-foreground">suporte@aetracker.com.br</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-red rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-white">Endereço</h4>
                    <p className="text-muted-foreground">São Paulo, SP - Cobertura Nacional</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-red rounded-lg p-8 text-brand-white">
              <h3 className="text-xl font-bold mb-4">
                Atendimento Rápido pelo WhatsApp
              </h3>
              <p className="mb-6">
                Fale conosco agora mesmo e receba um orçamento personalizado em minutos!
              </p>
              <Button 
                variant="hero" 
                className="w-full bg-brand-white text-brand-red hover:bg-brand-white/90"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-4 h-4" />
                Chamar no WhatsApp
              </Button>
            </div>

            <div className="bg-card rounded-lg p-6 border border-brand-red/20">
              <h4 className="font-semibold text-brand-white mb-3">Horário de Atendimento</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Segunda a Sexta:</span>
                  <span className="text-brand-white">08:00 às 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado:</span>
                  <span className="text-brand-white">08:00 às 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Emergências:</span>
                  <span className="text-brand-red font-semibold">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;