import React from 'react';
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

  return (
    <div
      className={`brand-image ${meta.transparent ? 'brand-image-transparent' : ''} ${className}`}
      style={
        {
          '--img-aspect': meta.aspectRatio,
        } as React.CSSProperties
      }
      data-image-shell
      data-loaded="true"
    >
      <img
        src={meta.src}
        srcSet={meta.srcset}
        sizes={sizes}
        width={meta.width}
        height={meta.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        alt={alt !== undefined ? alt : meta.alt[locale]}
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

