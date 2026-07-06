import React, { useRef, useEffect } from 'react';

interface Spark {
  x: number;
  y: number;
  angle: number;
  velocity: number;
  alpha: number;
}

export default function ClickSpark({ children }: { children?: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let animationFrameId: number;

    const draw = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        spark.x += Math.cos(spark.angle) * spark.velocity;
        spark.y += Math.sin(spark.angle) * spark.velocity;
        spark.velocity *= 0.95;
        spark.alpha -= 1 / (400 / 16);

        if (spark.alpha <= 0) return false;

        ctx.save();
        ctx.globalAlpha = spark.alpha;
        ctx.strokeStyle = '#ec4899'; 
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(spark.x, spark.y);
        ctx.lineTo(spark.x - Math.cos(spark.angle) * 12, spark.y - Math.sin(spark.angle) * 12);
        ctx.stroke();
        ctx.restore();
        return true;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    const handleWindowClick = (e: MouseEvent) => {
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8 + Math.random() * 0.5;
        sparksRef.current.push({
          x: e.clientX,
          y: e.clientY,
          angle,
          velocity: 4 + Math.random() * 2,
          alpha: 1,
        });
      }
    };

    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('click', handleWindowClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[9999]" />
      {children}
    </div>
  );
}
