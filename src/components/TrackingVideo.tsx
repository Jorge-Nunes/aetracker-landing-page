
import { useEffect, useRef } from 'react';

const TrackingVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (!canvas || !ctx) return;

    // Configurar canvas
    canvas.width = 800;
    canvas.height = 600;

    let animationId: number;
    let phase = 0; // 0: rua noturna, 1: transição, 2: monitor com mapa
    let progress = 0;
    let blinkCounter = 0;

    const animate = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (phase === 0) {
        // Rua noturna - gradiente escuro com pontos de luz
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(0.7, '#16213e');
        gradient.addColorStop(1, '#0f0f23');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Simular luzes da rua
        for (let i = 0; i < 8; i++) {
          const x = (canvas.width / 8) * i + 50;
          const y = canvas.height - 200 + Math.sin(progress * 0.02 + i) * 20;
          
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#ffd700';
          ctx.shadowBlur = 20;
          ctx.shadowColor = '#ffd700';
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        progress++;
        if (progress > 150) {
          phase = 1;
          progress = 0;
        }
      } 
      else if (phase === 1) {
        // Transição suave para monitor
        const alpha = progress / 100;
        
        // Fundo do monitor
        ctx.fillStyle = '#2a2a2a';
        ctx.fillRect(50, 50, canvas.width - 100, canvas.height - 100);
        
        // Borda do monitor
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 8;
        ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);

        progress++;
        if (progress > 100) {
          phase = 2;
          progress = 0;
        }
      }
      else if (phase === 2) {
        // Monitor com mapa digital
        ctx.fillStyle = '#2a2a2a';
        ctx.fillRect(50, 50, canvas.width - 100, canvas.height - 100);
        
        // Borda do monitor
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 8;
        ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);

        // Área do mapa
        const mapX = 80;
        const mapY = 80;
        const mapWidth = canvas.width - 160;
        const mapHeight = canvas.height - 160;

        // Fundo do mapa (tons de azul e cinza)
        const mapGradient = ctx.createLinearGradient(mapX, mapY, mapX + mapWidth, mapY + mapHeight);
        mapGradient.addColorStop(0, '#1e3a5f');
        mapGradient.addColorStop(0.5, '#2c4f7a');
        mapGradient.addColorStop(1, '#1a2332');
        
        ctx.fillStyle = mapGradient;
        ctx.fillRect(mapX, mapY, mapWidth, mapHeight);

        // Grid do mapa
        ctx.strokeStyle = '#4a6fa5';
        ctx.lineWidth = 1;
        for (let i = 0; i < 10; i++) {
          const x = mapX + (mapWidth / 10) * i;
          const y = mapY + (mapHeight / 10) * i;
          
          ctx.beginPath();
          ctx.moveTo(x, mapY);
          ctx.lineTo(x, mapY + mapHeight);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(mapX, y);
          ctx.lineTo(mapX + mapWidth, y);
          ctx.stroke();
        }

        // Trajeto do carro (linhas animadas)
        const pathPoints = [
          { x: mapX + 100, y: mapY + 150 },
          { x: mapX + 200, y: mapY + 180 },
          { x: mapX + 350, y: mapY + 200 },
          { x: mapX + 450, y: mapY + 250 },
          { x: mapX + 500, y: mapY + 300 }
        ];

        ctx.strokeStyle = '#00ff88';
        ctx.lineWidth = 3;
        ctx.setLineDash([10, 5]);
        ctx.lineDashOffset = -progress * 0.5;

        ctx.beginPath();
        ctx.moveTo(pathPoints[0].x, pathPoints[0].y);
        for (let i = 1; i < pathPoints.length; i++) {
          ctx.lineTo(pathPoints[i].x, pathPoints[i].y);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // Ponto vermelho piscando (veículo roubado)
        const vehicleX = pathPoints[pathPoints.length - 1].x;
        const vehicleY = pathPoints[pathPoints.length - 1].y;
        
        blinkCounter++;
        if (blinkCounter % 30 < 15) { // Piscar a cada 30 frames
          ctx.beginPath();
          ctx.arc(vehicleX, vehicleY, 12, 0, Math.PI * 2);
          ctx.fillStyle = '#ff4444';
          ctx.shadowBlur = 20;
          ctx.shadowColor = '#ff4444';
          ctx.fill();
          ctx.shadowBlur = 0;

          // Círculo externo pulsante
          ctx.beginPath();
          ctx.arc(vehicleX, vehicleY, 20 + Math.sin(progress * 0.1) * 5, 0, Math.PI * 2);
          ctx.strokeStyle = '#ff6666';
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Zoom effect no ponto
        if (progress > 200) {
          const zoomFactor = 1 + Math.sin((progress - 200) * 0.05) * 0.1;
          ctx.save();
          ctx.translate(vehicleX, vehicleY);
          ctx.scale(zoomFactor, zoomFactor);
          ctx.translate(-vehicleX, -vehicleY);
          
          ctx.beginPath();
          ctx.arc(vehicleX, vehicleY, 8, 0, Math.PI * 2);
          ctx.fillStyle = '#ff0000';
          ctx.fill();
          
          ctx.restore();
        }

        // Texto informativo
        ctx.fillStyle = '#ffffff';
        ctx.font = '16px Arial';
        ctx.fillText('VEÍCULO LOCALIZADO', mapX + 20, mapY + mapHeight - 20);
        
        ctx.fillStyle = '#ff4444';
        ctx.font = '14px Arial';
        ctx.fillText('● ATIVO', mapX + mapWidth - 80, mapY + mapHeight - 20);

        progress++;
        
        // Resetar após um ciclo completo
        if (progress > 600) {
          phase = 0;
          progress = 0;
          blinkCounter = 0;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-elegant">
      <canvas 
        ref={canvasRef}
        className="w-full h-auto bg-brand-dark rounded-lg"
        style={{ aspectRatio: '4/3' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/10 to-transparent rounded-lg pointer-events-none"></div>
      
      {/* Overlay com efeito de tela */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-dark/20 rounded-lg pointer-events-none"></div>
      
      {/* Scanlines effect para simular monitor */}
      <div 
        className="absolute inset-0 rounded-lg pointer-events-none opacity-20"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )`
        }}
      ></div>
    </div>
  );
};

export default TrackingVideo;
