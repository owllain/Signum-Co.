import { useState, type CSSProperties } from 'react';

export interface AccordionGalleryItem {
  image: string;
  srcset?: string;
  label: string;
  subtitle?: string;
  badge?: string;
  link: string;
}

export interface AccordionGalleryProps {
  items: AccordionGalleryItem[];
  defaultIndex?: number;
  expandRatio?: number;
  trigger?: 'hover' | 'click';
  accentColor?: string;
  overlayColor?: string;
  textColor?: string;
  grayscale?: boolean;
  showLabels?: boolean;
  duration?: number;
  ease?: string;
  parallax?: number;
  tilt?: number;
  stagger?: number;
  height?: number;
  gap?: number;
  radius?: number;
  orientation?: 'horizontal' | 'vertical';
}

export default function AccordionGallery({
  items,
  defaultIndex = 0,
  expandRatio = 0.48,
  trigger = 'hover',
  accentColor = '#c9a227',
  overlayColor = '#071124',
  textColor = '#ffffff',
  grayscale = false,
  showLabels = true,
  duration = 0.55,
  parallax = 0.4,
  tilt = 5,
  height = 430,
  gap = 12,
  radius = 16,
  orientation = 'horizontal',
}: AccordionGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const [tiltState, setTiltState] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (
    e: React.PointerEvent<HTMLElement>,
    index: number
  ) => {
    if (index !== activeIndex) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / Math.max(1, rect.width) - 0.5;
    const ny = (e.clientY - rect.top) / Math.max(1, rect.height) - 0.5;
    setTiltState({ x: nx, y: ny });
  };

  const handlePointerLeave = () => {
    setTiltState({ x: 0, y: 0 });
  };

  return (
    <div
      className={`accordion-gallery is-${orientation}`}
      style={
        {
          '--ag-height': `${height}px`,
          '--ag-gap': `${gap}px`,
          '--ag-radius': `${radius}px`,
          '--ag-duration': `${duration}s`,
          '--ag-accent': accentColor,
          '--ag-overlay': overlayColor,
          '--ag-text': textColor,
        } as CSSProperties
      }
    >
      {items.map((item, idx) => {
        const isActive = idx === activeIndex;
        const flexVal = isActive
          ? Math.max(2.6, expandRatio * items.length * 1.35)
          : 1;
        const rx = isActive ? (-tiltState.y * tilt).toFixed(2) : '0';
        const ry = isActive ? (tiltState.x * tilt).toFixed(2) : '0';
        const px = isActive ? (-tiltState.x * parallax * 26).toFixed(1) : '0';
        const py = isActive ? (-tiltState.y * parallax * 20).toFixed(1) : '0';

        return (
          <a
            key={idx}
            href={item.link}
            className={`accordion-gallery-panel ${isActive ? 'is-expanded' : ''} ${grayscale && !isActive ? 'is-grayscale' : ''}`}
            style={{
              flex: flexVal,
              transform: isActive
                ? `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`
                : undefined,
            }}
            onMouseEnter={() => {
              if (trigger === 'hover') setActiveIndex(idx);
            }}
            onFocus={() => setActiveIndex(idx)}
            onClick={(e) => {
              if (trigger === 'click' && !isActive) {
                e.preventDefault();
                setActiveIndex(idx);
              }
            }}
            onPointerMove={(e) => handlePointerMove(e, idx)}
            onPointerLeave={handlePointerLeave}
          >
            <div className="accordion-gallery-media">
              <img
                src={item.image}
                srcSet={item.srcset}
                sizes="(max-width: 760px) 100vw, 520px"
                alt={item.label}
                loading="lazy"
                decoding="async"
                style={{
                  transform: `scale(${isActive ? 1.06 : 1.12}) translate3d(${px}px, ${py}px, 0)`,
                }}
              />
              <div className="accordion-gallery-scrim" aria-hidden="true" />
            </div>

            {showLabels && (
              <div className="accordion-gallery-caption">
                <div className="accordion-gallery-top">
                  <span className="accordion-gallery-index">0{idx + 1}</span>
                  {item.badge && (
                    <span className="accordion-gallery-badge">{item.badge}</span>
                  )}
                </div>
                <div className="accordion-gallery-bottom">
                  <strong className="accordion-gallery-title">
                    {item.label}
                  </strong>
                  {item.subtitle && (
                    <p className="accordion-gallery-sub">{item.subtitle}</p>
                  )}
                </div>
              </div>
            )}
          </a>
        );
      })}
    </div>
  );
}

