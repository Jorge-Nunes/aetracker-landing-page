
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona a instalação do equipamento?",
      answer: "Nossa equipe técnica agenda uma visita gratuita em local de sua escolha. A instalação é feita por profissionais certificados em cerca de 30 minutos, sem danificar o veículo."
    },
    {
      question: "Posso cancelar o serviço a qualquer momento?",
      answer: "Sim! Não há fidelidade. Você pode cancelar quando quiser sem multas ou taxas extras. Basta entrar em contato conosco."
    },
    {
      question: "O equipamento funciona em qualquer lugar do Brasil?",
      answer: "Sim! Nosso sistema utiliza tecnologia satelital que funciona em todo território nacional, incluindo áreas rurais e estradas."
    },
    {
      question: "Preciso ter nome limpo para contratar?",
      answer: "Não! Não consultamos SPC/Serasa. Aceitamos negativados. Nossa análise é simples e rápida."
    },
    {
      question: "Quanto tempo leva para ativar o serviço?",
      answer: "Após a instalação, o serviço é ativado imediatamente. Você já sai com seu veículo protegido e recebe as credenciais do app na hora."
    },
    {
      question: "O app funciona em qualquer celular?",
      answer: "Sim! Nosso app está disponível para Android e iOS, e também funciona via WhatsApp para maior facilidade."
    },
    {
      question: "Há taxa de instalação?",
      answer: "A instalação é GRATUITA! Nossa promoção atual inclui instalação sem custo em toda região metropolitana."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            Perguntas <span className="text-brand-red">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-brand-red/20 hover:border-brand-red/40 transition-all duration-300"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-brand-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-red flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-red flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511987733033"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              📱 WhatsApp: (11) 98773-3033
            </a>
            <a
              href="tel:+5511987733033"
              className="bg-brand-red hover:bg-brand-red-hover text-brand-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              📞 Central: (11) 98773-3033
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
