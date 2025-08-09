
import { useState, useEffect } from "react";

const TrackingVideo = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "/lovable-uploads/517cc0a0-45b6-478b-afdd-340819f2e642.png",
      alt: "Pickup Amarok - Condições Especiais para Produtor Rural"
    },
    {
      src: "/lovable-uploads/8e7438fb-9fd3-45ee-a61b-732b8e5245f5.png", 
      alt: "Caminhão - Proteção Via Satélite"
    },
    {
      src: "/lovable-uploads/b1407e7e-4760-49d3-ac83-8e72b4182e06.png",
      alt: "Motos - Proteção para Todos os Tamanhos"
    },
    {
      src: "/lovable-uploads/be604ffc-6f19-4bc7-940c-d75755c5753e.png",
      alt: "Frota Protegida - Para Pessoas e Empresas"
    },
    {
      src: "/lovable-uploads/4efa5054-e06f-438f-9986-38b854737e5f.png",
      alt: "Fiat Pulse - Black Friday"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Troca a cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-elegant">
      {/* Container das imagens */}
      <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImage 
                ? 'opacity-100 scale-100 translate-x-0' 
                : index < currentImage
                ? 'opacity-0 scale-95 -translate-x-8'
                : 'opacity-0 scale-95 translate-x-8'
            }`}
          >
            <img 
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover bg-brand-dark rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Overlay com efeitos visuais */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/10 via-transparent to-brand-red/10 rounded-lg pointer-events-none"></div>
      
      {/* Scanlines para efeito de monitor */}
      <div 
        className="absolute inset-0 rounded-lg pointer-events-none opacity-20"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(220, 38, 38, 0.03) 2px,
            rgba(220, 38, 38, 0.03) 4px
          )`
        }}
      />
      
      {/* Reflexo de tela */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-lg pointer-events-none"></div>

      {/* Indicadores de navegação */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-brand-red scale-125 shadow-red' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Barra de progresso animada */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
        <div 
          className="h-full bg-gradient-to-r from-brand-red to-brand-red-hover transition-all duration-75 ease-linear"
          style={{
            width: `${((currentImage + 1) / images.length) * 100}%`,
            animation: 'pulse 0.5s ease-in-out'
          }}
        />
      </div>

      {/* Botões de navegação lateral */}
      <button
        onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
      >
        &#8249;
      </button>
      <button
        onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
      >
        &#8250;
      </button>

      {/* Efeito de brilho nas bordas */}
      <div className="absolute inset-0 rounded-lg pointer-events-none border-2 border-brand-red/20 animate-pulse"></div>
    </div>
  );
};

export default TrackingVideo;
