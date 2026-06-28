import { useRef, useEffect } from 'react';

const PRESETS = {
  smoke: {
    particleCount: 40,
    minSize: 50,
    maxSize: 150,
    opacityMin: 0.01,
    opacityMax: 0.06,
    speedMin: 0.2,
    speedMax: 1.2,
    color: [200, 225, 255],
    blendMode: 'source-over',
  },
  mist: {
    particleCount: 48,
    minSize: 28,
    maxSize: 110,
    opacityMin: 0.12,
    opacityMax: 0.38,
    speedMin: 0.45,
    speedMax: 1.1,
    color: [255, 255, 255],
    blendMode: 'screen',
  },
};

export const SmokeBackground = ({
  variant = 'smoke',
  className = 'absolute inset-0 pointer-events-none',
  xMin = 0,
  xMax = 1,
  ...overrides
}) => {
  const canvasRef = useRef(null);
  const config = { ...PRESETS[variant], ...overrides };
  const {
    particleCount,
    minSize,
    maxSize,
    opacityMin,
    opacityMax,
    speedMin,
    speedMax,
    color,
    blendMode,
  } = config;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = reducedMotion ? Math.min(particleCount, 18) : particleCount;
    const motionScale = reducedMotion ? 0.45 : 1;
    const [r, g, b] = color;

    let animationFrameId;
    let particles = [];

    const getSize = () => {
      const { width, height } = container.getBoundingClientRect();
      return { width, height };
    };

    const resize = () => {
      const { width, height } = getSize();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    const easeOutCubic = (t) => 1 - (1 - t) ** 3;
    const easeInQuad = (t) => t * t;

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        const { width, height } = getSize();
        const left = width * xMin;
        const span = width * (xMax - xMin);
        this.x = left + Math.random() * span;
        this.targetSize = Math.random() * (maxSize - minSize) + minSize;
        this.maxOpacity = Math.random() * (opacityMax - opacityMin) + opacityMin;
        this.fadeInDuration = 110 + Math.random() * 80;
        this.speedY = (Math.random() * (speedMax - speedMin) + speedMin) * motionScale;
        this.speedX = (Math.random() - 0.5) * 0.55 * motionScale;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = 0.012 + Math.random() * 0.018;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.025 + Math.random() * 0.035;
        this.lifeFactor = 0;

        if (initial) {
          this.y = height * (0.1 + Math.random() * 0.75);
          this.age = Math.random() * (this.fadeInDuration + 120);
          this.size = this.targetSize * (0.55 + Math.random() * 0.45);
        } else {
          this.y = height + this.targetSize * (0.4 + Math.random() * 0.8);
          this.age = 0;
          this.size = this.targetSize * 0.25;
        }
      }

      update() {
        const { width, height } = getSize();
        this.age += 1;
        this.y -= this.speedY;
        this.wobble += this.wobbleSpeed;
        this.pulse += this.pulseSpeed;
        this.x += this.speedX + Math.sin(this.wobble) * 0.35 * motionScale;

        const left = width * xMin;
        const right = width * xMax;
        if (this.x < left - this.size) this.x = right + this.size * 0.2;
        if (this.x > right + this.size) this.x = left - this.size * 0.2;

        let lifeFactor = 1;
        if (this.age < this.fadeInDuration) {
          const t = this.age / this.fadeInDuration;
          lifeFactor = easeOutCubic(t);
          this.size = this.targetSize * (0.3 + 0.7 * lifeFactor);
        } else {
          this.size = this.targetSize;
        }

        const fadeOutZone = height * 0.22;
        if (this.y < fadeOutZone) {
          lifeFactor *= easeInQuad(Math.max(0, this.y / fadeOutZone));
        }

        this.lifeFactor = lifeFactor;

        if (this.y < -this.size) this.reset();
      }

      draw() {
        if (this.lifeFactor <= 0.01) return;

        const pulse = 0.82 + Math.sin(this.pulse) * 0.18;
        const alpha = this.maxOpacity * this.lifeFactor * pulse;
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
        gradient.addColorStop(0.35, `rgba(${r}, ${g}, ${b}, ${alpha * 0.55})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    particles = Array.from({ length: count }, () => new Particle());

    const animate = () => {
      const { width, height } = getSize();
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = blendMode;
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      ctx.globalCompositeOperation = 'source-over';
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [
    particleCount,
    minSize,
    maxSize,
    opacityMin,
    opacityMax,
    speedMin,
    speedMax,
    color,
    blendMode,
    xMin,
    xMax,
  ]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};
