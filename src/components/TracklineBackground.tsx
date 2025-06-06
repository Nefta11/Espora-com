import React, { useEffect, useRef } from 'react';

const TracklineBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isTracklinePage = window.location.pathname === '/trackline';
  const baseColor = '#0a0514';
  const gradientColor = '#1a0b2e';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    
    class Wave {
      amplitude: number;
      period: number;
      phase: number;
      color: string;

      constructor(amplitude: number, period: number, phase: number, color: string) {
        this.amplitude = amplitude;
        this.period = period;
        this.phase = phase;
        this.color = color;
      }

      draw(ctx: CanvasRenderingContext2D, time: number, mouseInfluence: number) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x += 2) {
          const distanceFromMouse = Math.abs(x - mouseRef.current.x);
          const mouseEffect = Math.max(0, 1 - distanceFromMouse / 200) * mouseInfluence;
          
          const y = canvas.height / 2 +
            Math.sin(x * this.period + time + this.phase) * this.amplitude * (1 + mouseEffect) +
            Math.cos(x * this.period * 0.6 + time + this.phase) * this.amplitude * 0.5;

          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const waves = [
      new Wave(30, 0.003, 0, 'rgba(88, 51, 139, 0.1)'),
      new Wave(25, 0.004, 1, 'rgba(72, 52, 117, 0.1)'),
      new Wave(20, 0.005, 2, 'rgba(58, 53, 95, 0.1)'),
      new Wave(15, 0.006, 3, 'rgba(44, 54, 73, 0.1)')
    ];

    const drawScene = () => {
      ctx.fillStyle = baseColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.02;
      waves.forEach(wave => wave.draw(ctx, time, 2));
    };

    const animate = () => {
      drawScene();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ 
        background: `linear-gradient(135deg, ${baseColor} 0%, ${gradientColor} 100%)`,
        filter: 'blur(1px)'
      }}
    />
  );
};

export default TracklineBackground;