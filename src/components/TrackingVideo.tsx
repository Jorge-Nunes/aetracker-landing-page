
import { useEffect, useRef } from 'react';

const TrackingVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (!canvas || !ctx) return;

    canvas.width = 800;
    canvas.height = 600;

    let animationId: number;
    let phase = 0;
    let progress = 0;
    let blinkCounter = 0;

    // Função para desenhar um carro SUV realístico
    const drawRealisticCar = (x: number, y: number, scale = 1, color = '#2c3e50') => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);

      // Sombra do carro
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(-5, 45, 120, 8);

      // Chassi principal
      ctx.fillStyle = color;
      ctx.fillRect(0, 10, 100, 30);
      
      // Capô e traseira
      ctx.fillRect(-5, 15, 15, 20);
      ctx.fillRect(90, 15, 15, 20);

      // Teto
      ctx.fillStyle = '#34495e';
      ctx.fillRect(15, -5, 70, 20);

      // Para-brisas dianteiro
      ctx.fillStyle = 'rgba(135, 206, 235, 0.7)';
      ctx.fillRect(75, -3, 12, 16);
      
      // Para-brisas traseiro
      ctx.fillRect(13, -3, 12, 16);

      // Janelas laterais
      ctx.fillStyle = 'rgba(135, 206, 235, 0.6)';
      ctx.fillRect(25, -1, 20, 12);
      ctx.fillRect(55, -1, 20, 12);

      // Rodas (com detalhes)
      ctx.fillStyle = '#1a1a1a';
      ctx.beginPath();
      ctx.arc(20, 45, 12, 0, Math.PI * 2);
      ctx.arc(80, 45, 12, 0, Math.PI * 2);
      ctx.fill();

      // Aros das rodas
      ctx.fillStyle = '#7f8c8d';
      ctx.beginPath();
      ctx.arc(20, 45, 8, 0, Math.PI * 2);
      ctx.arc(80, 45, 8, 0, Math.PI * 2);
      ctx.fill();

      // Centro das rodas
      ctx.fillStyle = '#34495e';
      ctx.beginPath();
      ctx.arc(20, 45, 4, 0, Math.PI * 2);
      ctx.arc(80, 45, 4, 0, Math.PI * 2);
      ctx.fill();

      // Faróis dianteiros
      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(95, 18, 8, 6);
      ctx.fillRect(95, 26, 8, 6);

      // Lanternas traseiras
      ctx.fillStyle = '#e74c3c';
      ctx.fillRect(-8, 18, 6, 6);
      ctx.fillRect(-8, 26, 6, 6);

      // Detalhes cromados
      ctx.strokeStyle = '#bdc3c7';
      ctx.lineWidth = 1;
      ctx.strokeRect(0, 10, 100, 30);

      ctx.restore();
    };

    const animate = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (phase === 0) {
        // Fase 1: Carro protegido estacionado (vista noturna realística)
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#0f172a');
        gradient.addColorStop(0.6, '#1e293b');
        gradient.addColorStop(1, '#334155');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Asfalto com textura
        ctx.fillStyle = '#374151';
        ctx.fillRect(0, canvas.height - 150, canvas.width, 150);

        // Textura do asfalto
        for (let i = 0; i < 50; i++) {
          ctx.fillStyle = `rgba(75, 85, 99, ${Math.random() * 0.3})`;
          ctx.fillRect(Math.random() * canvas.width, canvas.height - 150 + Math.random() * 150, 2, 1);
        }

        // Faixa da rua
        ctx.fillStyle = '#fbbf24';
        ctx.fillRect(0, canvas.height - 75, canvas.width, 3);

        // Postes de luz com iluminação realística
        for (let i = 0; i < 3; i++) {
          const poleX = 200 + i * 200;
          const poleY = canvas.height - 280;
          
          // Poste
          ctx.fillStyle = '#4b5563';
          ctx.fillRect(poleX - 3, poleY, 6, 130);
          
          // Luminária
          ctx.fillStyle = '#6b7280';
          ctx.fillRect(poleX - 15, poleY - 10, 30, 15);
          
          // Luz
          ctx.beginPath();
          ctx.arc(poleX, poleY - 3, 8, 0, Math.PI * 2);
          ctx.fillStyle = '#fef3c7';
          ctx.shadowBlur = 30;
          ctx.shadowColor = '#fef3c7';
          ctx.fill();
          ctx.shadowBlur = 0;

          // Cone de luz no chão
          const lightGradient = ctx.createRadialGradient(poleX, poleY, 0, poleX, canvas.height - 150, 80);
          lightGradient.addColorStop(0, 'rgba(254, 243, 199, 0.3)');
          lightGradient.addColorStop(1, 'rgba(254, 243, 199, 0)');
          ctx.fillStyle = lightGradient;
          ctx.beginPath();
          ctx.arc(poleX, canvas.height - 150, 80, 0, Math.PI * 2);
          ctx.fill();
        }

        // Carro SUV protegido
        drawRealisticCar(350, canvas.height - 200, 1.2, '#475569');

        // LED de status do rastreador (piscando verde)
        if (progress % 60 < 30) {
          ctx.beginPath();
          ctx.arc(400, canvas.height - 160, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#10b981';
          ctx.shadowBlur = 15;
          ctx.shadowColor = '#10b981';
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Interface do sistema
        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 16px Arial';
        ctx.fillText('🛡️ SISTEMA DE PROTEÇÃO ATIVO', 20, 40);
        
        ctx.fillStyle = '#e2e8f0';
        ctx.font = '14px Arial';
        ctx.fillText('● GPS: CONECTADO', 20, 65);
        ctx.fillText('● BLOQUEIO: STANDBY', 20, 85);
        ctx.fillText('● CENTRAL: MONITORANDO', 20, 105);

        progress++;
        if (progress > 200) {
          phase = 1;
          progress = 0;
        }
      }
      else if (phase === 1) {
        // Fase 2: Roubo em andamento (alerta crítico)
        const alertColor = Math.sin(progress * 0.5) > 0 ? 'rgba(239, 68, 68, 0.4)' : 'rgba(239, 68, 68, 0.1)';
        
        const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        bgGradient.addColorStop(0, '#450a0a');
        bgGradient.addColorStop(0.5, '#7f1d1d');
        bgGradient.addColorStop(1, '#374151');
        
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Overlay de alerta
        ctx.fillStyle = alertColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Asfalto
        ctx.fillStyle = '#374151';
        ctx.fillRect(0, canvas.height - 150, canvas.width, 150);

        // Carro sendo roubado (com movimento)
        const carShake = Math.sin(progress * 0.8) * 3;
        drawRealisticCar(350 + carShake, canvas.height - 200, 1.2, '#dc2626');

        // Figura do criminoso
        ctx.fillStyle = '#1f2937';
        // Corpo
        ctx.fillRect(320, canvas.height - 190, 12, 35);
        // Cabeça
        ctx.beginPath();
        ctx.arc(326, canvas.height - 200, 8, 0, Math.PI * 2);
        ctx.fill();
        // Braços
        ctx.fillRect(310, canvas.height - 180, 25, 6);

        // Alertas críticos piscando
        if (progress % 20 < 10) {
          ctx.fillStyle = '#ef4444';
          ctx.font = 'bold 20px Arial';
          ctx.fillText('🚨 ROUBO DETECTADO!', 20, 50);
          
          ctx.fillStyle = '#fbbf24';
          ctx.font = 'bold 16px Arial';
          ctx.fillText('● ACIONANDO BLOQUEIO SATELITAL', 20, 80);
          ctx.fillText('● ALERTANDO CENTRAL 24H', 20, 105);
          ctx.fillText('● ENVIANDO COORDENADAS GPS', 20, 130);
        }

        // LED vermelho crítico
        ctx.beginPath();
        ctx.arc(400, canvas.height - 160, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#ef4444';
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#ef4444';
        ctx.fill();
        ctx.shadowBlur = 0;

        progress++;
        if (progress > 150) {
          phase = 2;
          progress = 0;
        }
      }
      else if (phase === 2) {
        // Fase 3: Transição para central de monitoramento
        const fadeAlpha = Math.min(progress / 60, 1);
        
        // Fundo da central
        ctx.fillStyle = `rgba(15, 23, 42, ${fadeAlpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Monitor surgindo
        const monitorScale = fadeAlpha;
        const monitorWidth = (canvas.width - 100) * monitorScale;
        const monitorHeight = (canvas.height - 100) * monitorScale;
        const monitorX = (canvas.width - monitorWidth) / 2;
        const monitorY = (canvas.height - monitorHeight) / 2;

        if (monitorScale > 0) {
          // Moldura do monitor
          ctx.fillStyle = '#1e293b';
          ctx.fillRect(monitorX - 10, monitorY - 10, monitorWidth + 20, monitorHeight + 20);
          
          // Tela
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(monitorX, monitorY, monitorWidth, monitorHeight);
          
          // Borda metálica
          ctx.strokeStyle = '#64748b';
          ctx.lineWidth = 3;
          ctx.strokeRect(monitorX - 10, monitorY - 10, monitorWidth + 20, monitorHeight + 20);
        }

        if (fadeAlpha > 0.7) {
          ctx.fillStyle = '#10b981';
          ctx.font = 'bold 18px Arial';
          ctx.fillText('AETRACKER - CENTRAL 24H', monitorX + 20, monitorY + 40);
          
          ctx.fillStyle = '#e2e8f0';
          ctx.font = '14px Arial';
          ctx.fillText('Iniciando rastreamento satelital...', monitorX + 20, monitorY + 70);
        }

        progress++;
        if (progress > 80) {
          phase = 3;
          progress = 0;
        }
      }
      else if (phase === 3) {
        // Fase 4: Sistema de monitoramento completo com imagem satelital
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Monitor da central
        const monitorX = 50;
        const monitorY = 50;
        const monitorWidth = canvas.width - 100;
        const monitorHeight = canvas.height - 100;

        // Moldura
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(monitorX - 15, monitorY - 15, monitorWidth + 30, monitorHeight + 30);
        
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(monitorX, monitorY, monitorWidth, monitorHeight);

        // Header da interface
        ctx.fillStyle = '#dc2626';
        ctx.fillRect(monitorX, monitorY, monitorWidth, 40);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px Arial';
        ctx.fillText('AETRACKER - SISTEMA DE RASTREAMENTO SATELITAL', monitorX + 20, monitorY + 25);

        // Área do mapa satelital
        const mapX = monitorX + 20;
        const mapY = monitorY + 60;
        const mapWidth = monitorWidth - 40;
        const mapHeight = monitorHeight - 140;

        // Fundo satelital realístico
        const satGradient = ctx.createRadialGradient(
          mapX + mapWidth/2, mapY + mapHeight/2, 0,
          mapX + mapWidth/2, mapY + mapHeight/2, mapWidth/2
        );
        satGradient.addColorStop(0, '#374151');
        satGradient.addColorStop(0.3, '#4b5563');
        satGradient.addColorStop(0.6, '#6b7280');
        satGradient.addColorStop(1, '#374151');
        
        ctx.fillStyle = satGradient;
        ctx.fillRect(mapX, mapY, mapWidth, mapHeight);

        // Padrão de satélite com textura urbana
        for (let i = 0; i < 200; i++) {
          const x = mapX + Math.random() * mapWidth;
          const y = mapY + Math.random() * mapHeight;
          const size = Math.random() * 3 + 1;
          
          ctx.fillStyle = `rgba(${100 + Math.random() * 50}, ${120 + Math.random() * 50}, ${140 + Math.random() * 50}, 0.6)`;
          ctx.fillRect(x, y, size, size);
        }

        // Ruas principais
        ctx.strokeStyle = '#9ca3af';
        ctx.lineWidth = 3;
        ctx.setLineDash([]);
        
        // Rua horizontal principal
        ctx.beginPath();
        ctx.moveTo(mapX, mapY + mapHeight * 0.4);
        ctx.lineTo(mapX + mapWidth, mapY + mapHeight * 0.4);
        ctx.stroke();

        // Rua vertical principal  
        ctx.beginPath();
        ctx.moveTo(mapX + mapWidth * 0.6, mapY);
        ctx.lineTo(mapX + mapWidth * 0.6, mapY + mapHeight);
        ctx.stroke();

        // Trajeto do veículo roubado
        const pathPoints = [
          { x: mapX + mapWidth * 0.3, y: mapY + mapHeight * 0.4 },
          { x: mapX + mapWidth * 0.6, y: mapY + mapHeight * 0.4 },
          { x: mapX + mapWidth * 0.6, y: mapY + mapHeight * 0.7 },
          { x: mapX + mapWidth * 0.8, y: mapY + mapHeight * 0.7 }
        ];

        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 4;
        ctx.setLineDash([10, 5]);
        ctx.lineDashOffset = -progress * 0.5;

        ctx.beginPath();
        ctx.moveTo(pathPoints[0].x, pathPoints[0].y);
        for (let i = 1; i < pathPoints.length; i++) {
          ctx.lineTo(pathPoints[i].x, pathPoints[i].y);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // Veículo em tempo real (ícone detalhado)
        const vehicleX = pathPoints[pathPoints.length - 1].x;
        const vehicleY = pathPoints[pathPoints.length - 1].y;

        // Pulsos de radar
        blinkCounter++;
        for (let i = 1; i <= 3; i++) {
          const radius = 15 + (i * 10) + Math.sin(progress * 0.1 + i) * 4;
          ctx.beginPath();
          ctx.arc(vehicleX, vehicleY, radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(220, 38, 38, ${0.8 - (i * 0.2)})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Ícone do veículo
        drawRealisticCar(vehicleX - 25, vehicleY - 15, 0.5, '#dc2626');

        // Painel de informações
        const infoY = mapY + mapHeight + 20;
        
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(mapX, infoY, mapWidth, 60);
        
        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('● VEÍCULO LOCALIZADO EM TEMPO REAL', mapX + 20, infoY + 20);
        
        ctx.fillStyle = '#dc2626';
        ctx.fillText('● COORDENADAS: -23.5505° S, -46.6333° W', mapX + 20, infoY + 40);
        
        ctx.fillStyle = '#fbbf24';
        ctx.fillText(`VELOCIDADE: ${Math.floor(Math.random() * 50 + 20)} km/h`, mapX + 350, infoY + 20);
        
        ctx.fillStyle = '#e2e8f0';
        ctx.fillText(`ÚLTIMA ATUALIZAÇÃO: ${new Date().toLocaleTimeString()}`, mapX + 350, infoY + 40);

        // Botão de emergência
        if (blinkCounter % 60 < 30) {
          ctx.fillStyle = '#dc2626';
          ctx.fillRect(mapX + mapWidth - 160, infoY + 5, 150, 25);
          
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 12px Arial';
          ctx.fillText('🚔 ACIONAR FORÇAS POLICIAIS', mapX + mapWidth - 155, infoY + 20);
        }

        progress++;
        if (progress > 500) {
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
