import React, { useRef, useEffect } from 'react';

interface Spark {
  x: number;
  y: number;
  angle: number;
  velocity: number;
  alpha: number;
}

export default function ButtonSpark({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const containerRef = useRef<HTMLButtonElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const resizeObserver = new ResizeObserver(() => resizeCanvas());
    resizeObserver.observe(container);
    resizeCanvas();

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparksRef.current = sparksRef.current.filter((spark) => {
        spark.x += Math.cos(spark.angle) * spark.velocity;
        spark.y += Math.sin(spark.angle) * spark.velocity;
        spark.velocity *= 0.94;
        spark.alpha -= 1 / 120;

        if (spark.alpha <= 0) return false;

        ctx.save();
        ctx.globalAlpha = spark.alpha;
        ctx.strokeStyle = '#fbcfe8'; 
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(spark.x, spark.y);
        ctx.lineTo(spark.x - Math.cos(spark.angle) * 15, spark.y - Math.sin(spark.angle) * 15);
        ctx.stroke();
        ctx.restore();
        return true;
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    const handleLocalClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12 + Math.random() * 0.5;
        sparksRef.current.push({
          x: clickX,
          y: clickY,
          angle,
          velocity: 4 + Math.random() * 3,
          alpha: 1,
        });
      }

      if (onClick) {
        setTimeout(() => onClick(), 150);
      }
    };

    container.addEventListener('click', handleLocalClick);

    return () => {
      resizeObserver.disconnect();
      container.removeEventListener('click', handleLocalClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [onClick]);

  return (
    <button
      ref={containerRef}
      className="relative px-10 py-4 bg-pink-500 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-pink-700 hover:text-white transition-all shadow-md overflow-hidden outline-none select-none block"
    >
      {/* Il canvas sta sopra a tutto (z-20) ma ignora i click fisici, così vedi le scintille volare sopra il testo */}
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-20" />
      <span className="relative z-10 pointer-events-none">{children}</span>
    </button>
  );
}
