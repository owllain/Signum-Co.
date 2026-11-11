import { useState, useEffect, type CSSProperties } from 'react';

export interface StaggeredMenuItem {
  label: string;
  ariaLabel?: string;
  link: string;
  sublabel?: string;
}

export interface StaggeredSocialItem {
  label: string;
  link: string;
}

export interface StaggeredMenuProps {
  position?: 'right' | 'left';
  items: StaggeredMenuItem[];
  socialItems?: StaggeredSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  changeMenuColorOnOpen?: boolean;
  colors?: [string, string];
  logoUrl?: string;
  accentColor?: string;
  currentPath?: string;
  menuLabel?: string;
  closeLabel?: string;
  socialsTitle?: string;
}

export default function StaggeredMenu({
  position = 'right',
  items,
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  colors = ['#c9a227', '#162c54'],
  accentColor = '#c9a227',
  currentPath = '/',
  menuLabel = 'Menú',
  closeLabel = 'Cerrar',
  socialsTitle = 'Conexión directa',
}: StaggeredMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      className={`staggered-menu-root pos-${position} ${open ? 'is-open' : ''}`}
      style={
        {
          '--sm-accent': accentColor,
          '--sm-layer-1': colors[0],
          '--sm-layer-2': colors[1],
        } as CSSProperties
      }
    >
      <button
        type="button"
        className={`staggered-menu-btn ${open ? 'is-open' : ''}`}
        aria-expanded={open}
        aria-controls="staggered-drawer-panel"
        aria-label={open ? closeLabel : menuLabel}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sm-btn-text-wrap" aria-hidden="true">
          <span className="sm-btn-text-inner">
            <span>{menuLabel}</span>
            <span>{closeLabel}</span>
          </span>
        </span>
        <span className="sm-btn-icon" aria-hidden="true">
          <span className="sm-line sm-line-1" />
          <span className="sm-line sm-line-2" />
        </span>
      </button>

      {/* Backdrop */}
      <div
        className={`sm-backdrop ${open ? 'is-open' : ''}`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      {/* Staggered Color Pre-layers + Main Drawer */}
      <div
        id="staggered-drawer-panel"
        className={`sm-drawer-wrap ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <div className="sm-prelayer sm-prelayer-1" aria-hidden="true" />
        <div className="sm-prelayer sm-prelayer-2" aria-hidden="true" />

        <aside
          className="sm-panel"
          aria-label={menuLabel}
        >
          <div className="sm-panel-header">
            <div className="sm-panel-brand">
              <img
                src="/images/sig-128.webp"
                width="42"
                height="42"
                alt=""
                className="sm-panel-sig"
              />
              <div>
                <strong>Signum &amp; Co.</strong>
                <span>San José, Costa Rica · ES / EN</span>
              </div>
            </div>
            <button
              type="button"
              className="sm-panel-close"
              onClick={() => setOpen(false)}
              aria-label={closeLabel}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="sm-item-list">
            {items.map((item, idx) => {
              const isCurrent = item.link === currentPath;
              return (
                <li
                  key={item.link}
                  className="sm-item-row"
                  style={{ '--sm-idx': idx } as CSSProperties}
                >
                  <a
                    href={item.link}
                    aria-label={item.ariaLabel || item.label}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={`sm-item-link ${isCurrent ? 'is-active' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {displayItemNumbering && (
                      <span className="sm-item-num">0{idx + 1}</span>
                    )}
                    <span className="sm-item-label-group">
                      <span className="sm-item-label">{item.label}</span>
                      {item.sublabel && (
                        <span className="sm-item-sub">{item.sublabel}</span>
                      )}
                    </span>
                    <span className="sm-item-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {displaySocials && socialItems.length > 0 && (
            <div className="sm-socials-footer">
              <span className="sm-socials-title">{socialsTitle}</span>
              <ul className="sm-socials-list">
                {socialItems.map((soc) => (
                  <li key={soc.label}>
                    <a
                      href={soc.link}
                      target={soc.link.startsWith('http') ? '_blank' : undefined}
                      rel={
                        soc.link.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {soc.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

