import { useEffect, useRef } from 'react';

export interface AcidSquaresProps {
  color?: string;
  accentColor?: string;
  secondaryColor?: string;
  tileSize?: number;
  gap?: number;
  roundness?: number;
  rotation?: number;
  waves?: number;
  pulse?: number;
  lighting?: 'split' | 'radial' | 'top';
  tilt?: number;
  grain?: number;
  intro?: boolean;
  mouseInteraction?: boolean;
  softness?: number;
  bulge?: number;
  gloss?: number;
  waveScale?: number;
  speed?: number;
  shape?: 'square' | 'circle';
  pulseSpeed?: number;
  pulseSpacing?: number;
  pulseWidth?: number;
  pulseOrigin?: 'center' | 'corner';
  brightness?: number;
  zoom?: number;
  depth?: number;
  fade?: number;
  opacity?: number;
  hoverEffect?: 'press' | 'lift';
  mouseStrength?: number;
  mouseRadius?: number;
  pulseOnClick?: boolean;
  detail?: 'low' | 'medium' | 'high';
  lightMode?: boolean;
  className?: string;
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  const num = parseInt(
    clean.length === 3
      ? clean
          .split('')
          .map((c) => c + c)
          .join('')
      : clean,
    16
  );
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

export default function AcidSquares({
  color = '#091428',
  accentColor = '#c9a227',
  secondaryColor = '#285196',
  tileSize = 1,
  gap = 0.14,
  roundness = 0.25,
  rotation = 28,
  waves = 1,
  pulse = 1,
  mouseInteraction = true,
  speed = 0.55,
  pulseSpeed = 0.45,
  mouseStrength = 1,
  mouseRadius = 0.32,
  pulseOnClick = true,
  opacity = 0.92,
  className = '',
}: AcidSquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const baseRgb = hexToRgb(color);
    const accentRgb = hexToRgb(accentColor);
    const secRgb = hexToRgb(secondaryColor);

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = 0;

    const pointer = { x: -9999, y: -9999, active: false };
    const ripples: { x: number; y: number; start: number }[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const onPointerMove = (e: PointerEvent) => {
      if (!mouseInteraction) return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };

    const onPointerLeave = () => {
      pointer.active = false;
    };

    const onClick = (e: MouseEvent) => {
      if (!pulseOnClick) return;
      const rect = canvas.getBoundingClientRect();
      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        start: performance.now(),
      });
      if (ripples.length > 4) ripples.shift();
    };

    canvas.addEventListener('pointermove', onPointerMove, { passive: true });
    canvas.addEventListener('pointerleave', onPointerLeave, { passive: true });
    canvas.addEventListener('click', onClick);

    const drawRoundedRect = (
      x: number,
      y: number,
      s: number,
      r: number
    ) => {
      const rad = Math.min(s * 0.5, r);
      ctx.beginPath();
      ctx.moveTo(x + rad, y);
      ctx.lineTo(x + s - rad, y);
      ctx.quadraticCurveTo(x + s, y, x + s, y + rad);
      ctx.lineTo(x + s, y + s - rad);
      ctx.quadraticCurveTo(x + s, y + s, x + s - rad, y + s);
      ctx.lineTo(x + rad, y + s);
      ctx.quadraticCurveTo(x, y + s, x, y + s - rad);
      ctx.lineTo(x, y + rad);
      ctx.quadraticCurveTo(x, y, x + rad, y);
      ctx.closePath();
    };

    const render = (now: number) => {
      const t = now * 0.001 * speed;
      ctx.clearRect(0, 0, width, height);

      const cell = Math.max(36, 48 * tileSize);
      const pad = cell * gap;
      const box = cell - pad;
      const rad = box * roundness;
      const angle = (rotation * Math.PI) / 180;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      const diag = Math.hypot(width, height);
      const cols = Math.ceil(diag / cell) + 2;
      const rows = Math.ceil(diag / cell) + 2;
      const cx = width * 0.5;
      const cy = height * 0.5;
      const maxRadius = Math.max(width, height) * mouseRadius;

      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.translate(cx, cy);
      ctx.rotate(angle);

      for (let r = -rows >> 1; r <= rows >> 1; r++) {
        for (let c = -cols >> 1; c <= cols >> 1; c++) {
          const lx = c * cell;
          const ly = r * cell;

          // World coordinates for distance to center / pointer
          const wx = cx + lx * cosA - ly * sinA;
          const wy = cy + lx * sinA + ly * cosA;

          if (wx < -cell || wx > width + cell || wy < -cell || wy > height + cell) {
            continue;
          }

          const distCenter = Math.hypot(wx - cx, wy - cy) / (diag * 0.5);
          const waveVal =
            waves *
            0.5 *
            (Math.sin(c * 0.35 + t * 1.6) * Math.cos(r * 0.35 - t * 1.3) + 1);
          const pulseVal =
            pulse *
            Math.max(
              0,
              Math.sin(distCenter * 6 - now * 0.003 * pulseSpeed) * 0.5 + 0.5
            );

          let mouseFactor = 0;
          if (pointer.active) {
            const dMouse = Math.hypot(wx - pointer.x, wy - pointer.y);
            if (dMouse < maxRadius) {
              mouseFactor =
                Math.pow(1 - dMouse / maxRadius, 1.8) * mouseStrength;
            }
          }

          let rippleBoost = 0;
          for (let i = 0; i < ripples.length; i++) {
            const rp = ripples[i];
            const age = (now - rp.start) * 0.001;
            if (age < 1.8) {
              const dRip = Math.hypot(wx - rp.x, wy - rp.y);
              const ring = Math.abs(dRip - age * 280);
              if (ring < 65) {
                rippleBoost += (1 - ring / 65) * (1 - age / 1.8) * 0.85;
              }
            }
          }

          const energy = Math.min(
            1,
            waveVal * 0.25 + pulseVal * 0.22 + mouseFactor * 0.65 + rippleBoost
          );

          const scale = 1 - mouseFactor * 0.12 + rippleBoost * 0.08;
          const s = box * scale;
          const offset = (cell - s) * 0.5;

          const mixSec = Math.min(1, waveVal * 0.6 + pulseVal * 0.3);
          const mixAcc = Math.min(1, mouseFactor * 0.85 + rippleBoost + Math.pow(energy, 2.2) * 0.45);

          const rr = Math.round(
            baseRgb[0] * (1 - mixSec) + secRgb[0] * mixSec
          );
          const gg = Math.round(
            baseRgb[1] * (1 - mixSec) + secRgb[1] * mixSec
          );
          const bb = Math.round(
            baseRgb[2] * (1 - mixSec) + secRgb[2] * mixSec
          );

          const fr = Math.round(rr * (1 - mixAcc) + accentRgb[0] * mixAcc);
          const fg = Math.round(gg * (1 - mixAcc) + accentRgb[1] * mixAcc);
          const fb = Math.round(bb * (1 - mixAcc) + accentRgb[2] * mixAcc);

          drawRoundedRect(lx + offset, ly + offset, s, rad);
          ctx.fillStyle = `rgb(${fr}, ${fg}, ${fb})`;
          ctx.fill();

          // Split bevel lighting highlight
          ctx.strokeStyle =
            mixAcc > 0.22
              ? `rgba(${accentRgb[0]}, ${accentRgb[1]}, ${accentRgb[2]}, ${0.35 + mixAcc * 0.5})`
              : `rgba(255, 255, 255, ${0.05 + energy * 0.14})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      ctx.restore();

      // Subtle radial vignette so foreground typography stays crisp and readable
      const grad = ctx.createRadialGradient(
        cx,
        cy,
        diag * 0.08,
        cx,
        cy,
        diag * 0.58
      );
      grad.addColorStop(0, 'rgba(8, 16, 31, 0.38)');
      grad.addColorStop(1, 'rgba(8, 16, 31, 0.86)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      if (!reducedMotion) {
        rafId = requestAnimationFrame(render);
      }
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      canvas.removeEventListener('click', onClick);
    };
  }, [
    color,
    accentColor,
    secondaryColor,
    tileSize,
    gap,
    roundness,
    rotation,
    waves,
    pulse,
    mouseInteraction,
    speed,
    pulseSpeed,
    mouseStrength,
    mouseRadius,
    pulseOnClick,
    opacity,
  ]);

  return (
    <div className={`acid-squares-wrap ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="acid-squares-canvas" />
    </div>
  );
}

