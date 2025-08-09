
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
    let phase = 0; // 0: carro estacionado, 1: roubo, 2: perseguição, 3: localização
    let progress = 0;
    let blinkCounter = 0;

    const animate = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (phase === 0) {
        // Fase 1: Carro estacionado tranquilamente (visão noturna)
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(0.7, '#16213e');
        gradient.addColorStop(1, '#0f0f23');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Rua com asfalto
        ctx.fillStyle = '#2a2a2a';
        ctx.fillRect(0, canvas.height - 150, canvas.width, 150);

        // Linhas da rua
        ctx.strokeStyle = '#4a4a4a';
        ctx.lineWidth = 3;
        ctx.setLineDash([20, 10]);
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - 75);
        ctx.lineTo(canvas.width, canvas.height - 75);
        ctx.stroke();
        ctx.setLineDash([]);

        // Carro estacionado (vista lateral)
        const carX = 350;
        const carY = canvas.height - 120;
        
        // Corpo do carro
        ctx.fillStyle = '#4a5568';
        ctx.fillRect(carX, carY - 30, 100, 25);
        ctx.fillRect(carX + 15, carY - 50, 70, 20);
        
        // Rodas
        ctx.fillStyle = '#2d3748';
        ctx.beginPath();
        ctx.arc(carX + 20, carY - 5, 8, 0, Math.PI * 2);
        ctx.arc(carX + 80, carY - 5, 8, 0, Math.PI * 2);
        ctx.fill();

        // Faróis apagados
        ctx.fillStyle = '#e2e8f0';
        ctx.fillRect(carX + 95, carY - 25, 5, 8);
        ctx.fillRect(carX + 95, carY - 15, 5, 8);

        // Luzes de rua
        for (let i = 0; i < 4; i++) {
          const x = 150 + i * 150;
          const y = canvas.height - 250;
          
          // Poste
          ctx.fillStyle = '#4a5568';
          ctx.fillRect(x - 2, y, 4, 100);
          
          // Luz
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fillStyle = '#ffd700';
          ctx.shadowBlur = 20;
          ctx.shadowColor = '#ffd700';
          ctx.fill();
          ctx.shadowBlur = 0;

          // Cone de luz
          ctx.fillStyle = 'rgba(255, 215, 0, 0.1)';
          ctx.beginPath();
          ctx.moveTo(x - 30, canvas.height - 150);
          ctx.lineTo(x, y);
          ctx.lineTo(x + 30, canvas.height - 150);
          ctx.closePath();
          ctx.fill();
        }

        // Texto de status
        ctx.fillStyle = '#00ff88';
        ctx.font = '14px Arial';
        ctx.fillText('● VEÍCULO PROTEGIDO - SISTEMA ATIVO', 20, 30);

        progress++;
        if (progress > 180) {
          phase = 1;
          progress = 0;
        }
      } 
      else if (phase === 1) {
        // Fase 2: Momento do roubo (alerta vermelho)
        // Fundo com efeito de alerta
        const alertIntensity = Math.sin(progress * 0.3) * 0.5 + 0.5;
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, `rgba(139, 0, 0, ${alertIntensity * 0.3})`);
        gradient.addColorStop(0.7, '#16213e');
        gradient.addColorStop(1, '#0f0f23');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Rua
        ctx.fillStyle = '#2a2a2a';
        ctx.fillRect(0, canvas.height - 150, canvas.width, 150);

        // Carro sendo roubado (movimento)
        const carX = 350 + Math.sin(progress * 0.2) * 10;
        const carY = canvas.height - 120;
        
        // Corpo do carro (tremulando)
        ctx.fillStyle = '#4a5568';
        ctx.fillRect(carX, carY - 30, 100, 25);
        ctx.fillRect(carX + 15, carY - 50, 70, 20);
        
        // Rodas girando
        ctx.fillStyle = '#2d3748';
        ctx.beginPath();
        ctx.arc(carX + 20, carY - 5, 8, 0, Math.PI * 2);
        ctx.arc(carX + 80, carY - 5, 8, 0, Math.PI * 2);
        ctx.fill();

        // Faróis ligados (piscando)
        if (progress % 20 < 10) {
          ctx.fillStyle = '#ffffff';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#ffffff';
          ctx.fillRect(carX + 95, carY - 25, 5, 8);
          ctx.fillRect(carX + 95, carY - 15, 5, 8);
          ctx.shadowBlur = 0;
        }

        // Figura do ladrão (silhueta)
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(carX - 20, carY - 40, 15, 35);
        ctx.beginPath();
        ctx.arc(carX - 12, carY - 45, 8, 0, Math.PI * 2);
        ctx.fill();

        // Alertas visuais piscando
        if (progress % 15 < 8) {
          ctx.fillStyle = '#ff0000';
          ctx.font = 'bold 18px Arial';
          ctx.fillText('🚨 ALERTA: VEÍCULO SENDO ROUBADO!', 20, 50);
          
          ctx.fillStyle = '#ffff00';
          ctx.font = '14px Arial';
          ctx.fillText('● Sistema de Rastreamento Ativado', 20, 80);
          ctx.fillText('● Enviando Localização...', 20, 100);
        }

        progress++;
        if (progress > 120) {
          phase = 2;
          progress = 0;
        }
      }
      else if (phase === 2) {
        // Fase 3: Transição para o sistema de monitoramento
        const alpha = progress / 80;
        
        // Fundo escuro do centro de controle
        ctx.fillStyle = `rgba(42, 42, 42, ${alpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Tela do monitor emergindo
        const monitorWidth = (canvas.width - 100) * alpha;
        const monitorHeight = (canvas.height - 100) * alpha;
        const monitorX = (canvas.width - monitorWidth) / 2;
        const monitorY = (canvas.height - monitorHeight) / 2;
        
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(monitorX, monitorY, monitorWidth, monitorHeight);
        
        // Borda do monitor
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 4;
        ctx.strokeRect(monitorX, monitorY, monitorWidth, monitorHeight);

        // Texto de inicialização
        if (alpha > 0.5) {
          ctx.fillStyle = '#00ff88';
          ctx.font = '16px Arial';
          ctx.fillText('SISTEMA DE RASTREAMENTO ATIVO', monitorX + 20, monitorY + 40);
          
          ctx.fillStyle = '#ffffff';
          ctx.font = '12px Arial';
          ctx.fillText('Conectando ao satélite...', monitorX + 20, monitorY + 70);
          ctx.fillText('Triangulando posição...', monitorX + 20, monitorY + 90);
        }

        progress++;
        if (progress > 80) {
          phase = 3;
          progress = 0;
        }
      }
      else if (phase === 3) {
        // Fase 4: Sistema de monitoramento completo
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Monitor principal
        const monitorX = 50;
        const monitorY = 50;
        const monitorWidth = canvas.width - 100;
        const monitorHeight = canvas.height - 100;
        
        ctx.fillStyle = '#2a2a2a';
        ctx.fillRect(monitorX, monitorY, monitorWidth, monitorHeight);
        
        // Borda do monitor
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 8;
        ctx.strokeRect(monitorX, monitorY, monitorWidth, monitorHeight);

        // Área do mapa
        const mapX = monitorX + 30;
        const mapY = monitorY + 60;
        const mapWidth = monitorWidth - 60;
        const mapHeight = monitorHeight - 120;

        // Fundo do mapa (satelital)
        const mapGradient = ctx.createRadialGradient(
          mapX + mapWidth/2, mapY + mapHeight/2, 0,
          mapX + mapWidth/2, mapY + mapHeight/2, mapWidth/2
        );
        mapGradient.addColorStop(0, '#1e3a5f');
        mapGradient.addColorStop(0.5, '#2c4f7a');
        mapGradient.addColorStop(1, '#1a2332');
        
        ctx.fillStyle = mapGradient;
        ctx.fillRect(mapX, mapY, mapWidth, mapHeight);

        // Grid do mapa
        ctx.strokeStyle = '#4a6fa5';
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.6;
        for (let i = 0; i <= 12; i++) {
          const x = mapX + (mapWidth / 12) * i;
          const y = mapY + (mapHeight / 12) * i;
          
          ctx.beginPath();
          ctx.moveTo(x, mapY);
          ctx.lineTo(x, mapY + mapHeight);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(mapX, y);
          ctx.lineTo(mapX + mapWidth, y);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;

        // Ruas simuladas
        ctx.strokeStyle = '#3a5f7a';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(mapX, mapY + mapHeight * 0.3);
        ctx.lineTo(mapX + mapWidth, mapY + mapHeight * 0.3);
        ctx.moveTo(mapX + mapWidth * 0.4, mapY);
        ctx.lineTo(mapX + mapWidth * 0.4, mapY + mapHeight);
        ctx.moveTo(mapX, mapY + mapHeight * 0.7);
        ctx.lineTo(mapX + mapWidth, mapY + mapHeight * 0.7);
        ctx.stroke();

        // Trajeto do veículo roubado (linha animada)
        const pathPoints = [
          { x: mapX + mapWidth * 0.2, y: mapY + mapHeight * 0.3 },
          { x: mapX + mapWidth * 0.4, y: mapY + mapHeight * 0.3 },
          { x: mapX + mapWidth * 0.4, y: mapY + mapHeight * 0.5 },
          { x: mapX + mapWidth * 0.6, y: mapY + mapHeight * 0.5 },
          { x: mapX + mapWidth * 0.6, y: mapY + mapHeight * 0.7 },
          { x: mapX + mapWidth * 0.8, y: mapY + mapHeight * 0.7 }
        ];

        ctx.strokeStyle = '#00ff88';
        ctx.lineWidth = 3;
        ctx.setLineDash([8, 4]);
        ctx.lineDashOffset = -progress * 0.8;

        ctx.beginPath();
        ctx.moveTo(pathPoints[0].x, pathPoints[0].y);
        for (let i = 1; i < pathPoints.length; i++) {
          ctx.lineTo(pathPoints[i].x, pathPoints[i].y);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // Veículo atual (ponto vermelho pulsante)
        const vehicleX = pathPoints[pathPoints.length - 1].x;
        const vehicleY = pathPoints[pathPoints.length - 1].y;
        
        blinkCounter++;
        const pulseSize = 12 + Math.sin(progress * 0.15) * 4;
        
        // Círculos de radar
        for (let i = 1; i <= 3; i++) {
          const radius = pulseSize + (i * 8) + Math.sin(progress * 0.1 + i) * 3;
          ctx.beginPath();
          ctx.arc(vehicleX, vehicleY, radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 68, 68, ${0.8 - (i * 0.2)})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Ponto do veículo
        ctx.beginPath();
        ctx.arc(vehicleX, vehicleY, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = '#ff4444';
        ctx.shadowBlur = 25;
        ctx.shadowColor = '#ff4444';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Informações do sistema
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px Arial';
        ctx.fillText('CENTRO DE MONITORAMENTO AETRACKER', monitorX + 20, monitorY + 30);
        
        ctx.fillStyle = '#00ff88';
        ctx.font = '14px Arial';
        ctx.fillText('● VEÍCULO LOCALIZADO EM TEMPO REAL', mapX, mapY - 20);
        
        ctx.fillStyle = '#ff4444';
        ctx.font = '14px Arial';
        ctx.fillText(`● COORDENADAS: -23.5505° -46.6333°`, mapX, mapY + mapHeight + 25);
        
        ctx.fillStyle = '#ffaa00';
        ctx.font = '12px Arial';
        ctx.fillText(`VELOCIDADE: ${Math.floor(Math.random() * 40 + 30)} km/h`, mapX + 250, mapY + mapHeight + 25);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Arial';
        ctx.fillText(`ÚLTIMO UPDATE: ${new Date().toLocaleTimeString()}`, mapX + 400, mapY + mapHeight + 25);

        // Botão de ação
        if (blinkCounter % 60 < 30) {
          ctx.fillStyle = '#ff0000';
          ctx.fillRect(mapX + mapWidth - 150, mapY + mapHeight + 35, 140, 30);
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 12px Arial';
          ctx.fillText('🚔 ACIONAR POLÍCIA', mapX + mapWidth - 145, mapY + mapHeight + 52);
        }

        progress++;
        
        // Resetar após ciclo completo
        if (progress > 400) {
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
