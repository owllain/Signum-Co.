import React, { useState, useEffect, useRef } from 'react';
import { BRAND_IMAGES, type BrandImageKind } from '../../data/brand-images';
import type { Locale } from '../../data/site';

interface SmartPictureProps {
  kind: BrandImageKind;
  locale: Locale;
  alt?: string;
  sizes?: string;
  className?: string;
  showBadge?: boolean;
  priority?: boolean;
}

export function SmartPicture({
  kind,
  locale,
  alt,
  sizes = '(max-width: 760px) 100vw, (max-width: 1120px) 45vw, 420px',
  className = '',
  showBadge = false,
  priority = false,
}: SmartPictureProps) {
  const meta = BRAND_IMAGES[kind];
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setLoaded(false);
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [kind]);

  return (
    <div
      className={`brand-image ${meta.transparent ? 'brand-image-transparent' : ''} ${className}`}
      style={
        {
          '--img-aspect': meta.aspectRatio,
          '--img-lqip': `url("${meta.lqip}")`,
        } as React.CSSProperties
      }
      data-image-shell
      data-loaded={loaded ? 'true' : undefined}
    >
      <div className="brand-image-skeleton" aria-hidden="true" />
      <img
        ref={imgRef}
        src={meta.src}
        srcSet={meta.srcset}
        sizes={sizes}
        width={meta.width}
        height={meta.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        alt={alt !== undefined ? alt : meta.alt[locale]}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
      {showBadge && !meta.transparent && (
        <span className="brand-image-badge" aria-hidden="true">
          <i className="brand-image-dot" />
          {meta.tag[locale]}
        </span>
      )}
    </div>
  );
}

