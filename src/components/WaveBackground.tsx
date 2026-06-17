import React, { useEffect, useRef } from 'react';

// Tipizzazione rigorosa per la configurazione delle singole onde
interface WaveConfig {
  yRatio: number;      // Posizione verticale percentuale (0-1)
  length: number;      // Frequenza dell'onda (lunghezza)
  amplitude: number;   // Altezza dei picchi in pixel
  speed: number;       // Velocità del movimento fluido
  opacity: number;     // Trasparenza della linea (0-1)
}

export const WaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let increment = 0;

    // Configurazione delle onde conforme allo stile minimale del video stock
    const waves: WaveConfig[] = [
      { yRatio: 0.5, length: 0.003, amplitude: 60, speed: 0.015, opacity: 0.15 },
      { yRatio: 0.53, length: 0.002, amplitude: 40, speed: 0.01, opacity: 0.25 },
      { yRatio: 0.47, length: 0.004, amplitude: 50, speed: 0.02, opacity: 0.1 },
      { yRatio: 0.5, length: 0.0015, amplitude: 80, speed: 0.007, opacity: 0.05 }
    ];

    // Gestione reattiva del ridimensionamento della finestra del browser
    const resizeCanvas = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Esecuzione immediata al montaggio del componente

    // Loop di animazione a bassa latenza ottimizzato
    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave) => {
        ctx.beginPath();
        const startY = canvas.height * wave.yRatio;
        ctx.moveTo(0, startY);

        // Calcolo matematico della curva sinusoidale per ogni pixel orizzontale
        for (let x = 0; x < canvas.width; x++) {
          const yOffset = Math.sin(x * wave.length + increment * wave.speed) * wave.amplitude;
          ctx.lineTo(x, startY + yOffset);
        }

        ctx.strokeStyle = `rgba(255, 255, 255, ${wave.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      increment += 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Pulizia della memoria al ciclo di vita dello smontaggio (Unmount)
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Classi Tailwind applicate per bloccare lo sfondo in posizione fixed dietro i contenuti
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none"
    />
  );
};
