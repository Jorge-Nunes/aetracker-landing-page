
const TrackingVideo = () => {
  return (
    <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-elegant">
      <img 
        src="/lovable-uploads/8cbcbb2f-5bce-4495-af11-e84b830c434f.png"
        alt="Sistema de Rastreamento Veicular - Proteção 24h Via Satélite"
        className="w-full h-auto bg-brand-dark rounded-lg object-cover"
        style={{ aspectRatio: '4/3' }}
      />
      
      {/* Efeito de borda elegante */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 via-transparent to-brand-red/20 rounded-lg pointer-events-none"></div>
      
      {/* Scanlines para efeito de monitor */}
      <div 
        className="absolute inset-0 rounded-lg pointer-events-none opacity-30"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(220, 38, 38, 0.05) 2px,
            rgba(220, 38, 38, 0.05) 4px
          )`
        }}
      />
      
      {/* Reflexo de tela */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-lg pointer-events-none"></div>
    </div>
  );
};

export default TrackingVideo;
