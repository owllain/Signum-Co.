/**
 * Interactive SVG hero chart controller.
 * The initial SVG geometry (grid, scattered dots, trend line, endpoint) is pre-rendered
 * at build time in Hero.astro so the chart is 100% visible without JavaScript.
 * This script progressively enhances the chart with pointer/keyboard interaction
 * and load-in line drawing while respecting prefers-reduced-motion and limiting
 * updates to at most one cycle per animation frame without layout thrashing.
 */
export function initHeroChart(): void {
  const svg = document.getElementById('sig') as SVGSVGElement | null;
  const dotsGroup = document.getElementById('g-dots');
  const line = document.getElementById('g-line') as SVGPathElement | null;

  if (!svg || !dotsGroup || !line) return;

  const VIEWBOX_WIDTH = 1080;
  const BAND_RADIUS = 110;

  interface DotRecord {
    el: SVGCircleElement;
    x: number;
    home: number;
    sig: number;
    isPulled: boolean;
  }

  const dotElements = Array.from(
    dotsGroup.querySelectorAll<SVGCircleElement>('circle.dot')
  );

  const dots: DotRecord[] = dotElements.map((el) => ({
    el,
    x: Number(el.dataset.x ?? 0),
    home: Number(el.dataset.home ?? 0),
    sig: Number(el.dataset.sig ?? 0),
    isPulled: false,
  }));

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let prefersReducedMotion = motionQuery.matches;
  motionQuery.addEventListener('change', (e) => {
    prefersReducedMotion = e.matches;
    if (prefersReducedMotion) {
      releaseDots();
    }
  });

  // Cache bounding rect to avoid synchronous layout reads on every pointermove
  let cachedRect: DOMRect | null = null;
  const invalidateRect = (): void => {
    cachedRect = null;
  };

  window.addEventListener('resize', invalidateRect, { passive: true });
  window.addEventListener('scroll', invalidateRect, { passive: true });

  let pendingClientX: number | null = null;
  let rafId = 0;
  let releaseTimer = 0;

  function applyBandAtSvgX(px: number): void {
    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];
      const near = Math.abs(d.x - px) < BAND_RADIUS;
      if (near !== d.isPulled) {
        d.isPulled = near;
        const targetY = near ? d.sig : d.home;
        const yStr = targetY.toFixed(1);
        d.el.style.cy = `${yStr}px`;
        d.el.setAttribute('cy', yStr);
        d.el.classList.toggle('pulled', near);
      }
    }
  }

  function processFrame(): void {
    rafId = 0;
    if (pendingClientX === null || !svg) return;
    if (!cachedRect) {
      cachedRect = svg.getBoundingClientRect();
    }
    if (cachedRect.width <= 0) return;

    const px = ((pendingClientX - cachedRect.left) / cachedRect.width) * VIEWBOX_WIDTH;
    pendingClientX = null;
    applyBandAtSvgX(px);
  }

  function schedulePull(clientX: number): void {
    if (prefersReducedMotion) return;
    pendingClientX = clientX;
    if (!rafId) {
      rafId = requestAnimationFrame(processFrame);
    }
  }

  function releaseDots(): void {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
    pendingClientX = null;
    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];
      if (d.isPulled) {
        d.isPulled = false;
        const homeStr = d.home.toFixed(1);
        d.el.style.cy = `${homeStr}px`;
        d.el.setAttribute('cy', homeStr);
        d.el.classList.remove('pulled');
      }
    }
  }

  svg.addEventListener(
    'pointerenter',
    () => {
      if (releaseTimer) {
        window.clearTimeout(releaseTimer);
        releaseTimer = 0;
      }
      cachedRect = svg.getBoundingClientRect();
    },
    { passive: true }
  );

  svg.addEventListener(
    'pointermove',
    (ev: PointerEvent) => {
      schedulePull(ev.clientX);
    },
    { passive: true }
  );

  svg.addEventListener('pointerleave', releaseDots, { passive: true });

  svg.addEventListener(
    'pointerup',
    (ev: PointerEvent) => {
      if (ev.pointerType !== 'mouse') {
        if (releaseTimer) window.clearTimeout(releaseTimer);
        releaseTimer = window.setTimeout(releaseDots, 900);
      }
    },
    { passive: true }
  );

  // Keyboard support for exploring the chart band
  let keyboardX: number | null = null;
  svg.addEventListener('keydown', (ev: KeyboardEvent) => {
    if (prefersReducedMotion) return;
    if (ev.key === 'ArrowRight' || ev.key === 'ArrowLeft') {
      ev.preventDefault();
      const step = ev.key === 'ArrowRight' ? 120 : -120;
      keyboardX =
        keyboardX === null
          ? VIEWBOX_WIDTH / 2
          : Math.max(24, Math.min(VIEWBOX_WIDTH - 24, keyboardX + step));
      applyBandAtSvgX(keyboardX);
    } else if (ev.key === 'Escape') {
      keyboardX = null;
      releaseDots();
    }
  });

  svg.addEventListener('blur', () => {
    keyboardX = null;
    releaseDots();
  });

  // Initial trend line draw animation
  if (!prefersReducedMotion && typeof line.getTotalLength === 'function') {
    try {
      const len = line.getTotalLength();
      if (len > 0) {
        line.style.strokeDasharray = `${len}`;
        line.style.strokeDashoffset = `${len}`;
        line.getBoundingClientRect();
        line.style.transition =
          'stroke-dashoffset 1.8s cubic-bezier(0.2, 0.7, 0.2, 1)';
        requestAnimationFrame(() => {
          line.style.strokeDashoffset = '0';
        });
      }
    } catch {
      // Ignore if SVG is hidden or getTotalLength fails in non-standard environments
    }
  }
}

initHeroChart();
document.addEventListener('astro:page-load', initHeroChart);

