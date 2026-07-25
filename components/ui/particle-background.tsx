'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  const createParticle = useCallback((width: number, height: number): Particle => {
    const edge = Math.floor(Math.random() * 4);
    let x: number, y: number;

    switch (edge) {
      case 0: x = Math.random() * width; y = -10; break;
      case 1: x = width + 10; y = Math.random() * height; break;
      case 2: x = Math.random() * width; y = height + 10; break;
      default: x = -10; y = Math.random() * height; break;
    }

    const angle = Math.random() * Math.PI * 2;
    const speed = 0.3 + Math.random() * 0.7;

    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: 1 + Math.random() * 2,
      opacity: 0.1 + Math.random() * 0.3,
      life: 0,
      maxLife: 300 + Math.random() * 400,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const particleCount = 60;
    particlesRef.current = Array.from({ length: particleCount }, () =>
      createParticle(canvas.width, canvas.height)
    );

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        particle.opacity = Math.sin((particle.life / particle.maxLife) * Math.PI) * 0.3;

        if (particle.life >= particle.maxLife) {
          particlesRef.current[index] = createParticle(canvas.width, canvas.height);
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108, 59, 255, ${particle.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}