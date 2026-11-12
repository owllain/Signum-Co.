import React, { useState } from 'react';

/* ============================================================================
 * 1. Flowbite-style Avatar Component
 * ========================================================================== */
export interface AvatarProps {
  img?: string;
  alt?: string;
  rounded?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
}

export function Avatar({
  img,
  alt = '',
  rounded = true,
  size = 'md',
  children,
  className = '',
}: AvatarProps) {
  const dim = size === 'xs' ? 34 : size === 'sm' ? 44 : size === 'lg' ? 72 : 56;
  return (
    <div className={`fb-avatar fb-avatar--${size} ${className}`.trim()}>
      <div
        className={`fb-avatar-img-wrap ${rounded ? 'is-rounded' : ''}`.trim()}
      >
        {img ? (
          <img
            src={img}
            alt={alt}
            width={dim}
            height={dim}
            loading="lazy"
            decoding="async"
            className="fb-avatar-img"
          />
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
            className="fb-avatar-fallback"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
          </svg>
        )}
      </div>
      {children && <div className="fb-avatar-content">{children}</div>}
    </div>
  );
}

/* ============================================================================
 * 2. Flowbite-style Tabs with Icons (variant="underline")
 * ========================================================================== */
export interface TabItemData {
  id: string;
  title: string;
  badge?: string;
  icon: React.ReactNode;
  disabled?: boolean;
  content: React.ReactNode;
}

export interface TabsWithIconsProps {
  ariaLabel?: string;
  variant?: 'underline' | 'pills';
  items: TabItemData[];
  defaultActiveId?: string;
}

export function TabsWithIcons({
  ariaLabel = 'Tabs with icons',
  variant = 'underline',
  items,
  defaultActiveId,
}: TabsWithIconsProps) {
  const firstEnabled = items.find((i) => !i.disabled)?.id ?? items[0]?.id;
  const [activeId, setActiveId] = useState<string>(
    defaultActiveId && items.some((i) => i.id === defaultActiveId)
      ? defaultActiveId
      : firstEnabled
  );

  const activeItem = items.find((i) => i.id === activeId) ?? items[0];

  return (
    <div className={`fb-tabs fb-tabs--${variant}`}>
      <div
        role="tablist"
        aria-label={ariaLabel}
        className="fb-tabs-list"
      >
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              disabled={item.disabled}
              className={`fb-tab-btn ${isActive ? 'is-active' : ''} ${
                item.disabled ? 'is-disabled' : ''
              }`.trim()}
              onClick={() => {
                if (!item.disabled) setActiveId(item.id);
              }}
            >
              <span className="fb-tab-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="fb-tab-title">{item.title}</span>
              {item.badge && (
                <span className="fb-tab-badge">{item.badge}</span>
              )}
            </button>
          );
        })}
      </div>

      {activeItem && (
        <div
          role="tabpanel"
          className="fb-tab-panel"
          key={activeItem.id}
        >
          {activeItem.content}
        </div>
      )}
    </div>
  );
}

/* ============================================================================
 * 3. Flowbite-style Horizontal Timeline Components
 * ========================================================================== */
export interface TimelineProps {
  horizontal?: boolean;
  children: React.ReactNode;
}

export function Timeline({ horizontal = true, children }: TimelineProps) {
  return (
    <ol
      className={`fb-timeline ${
        horizontal ? 'fb-timeline--horizontal' : 'fb-timeline--vertical'
      }`}
    >
      {children}
    </ol>
  );
}

export function TimelineItem({ children }: { children: React.ReactNode }) {
  return <li className="fb-timeline-item">{children}</li>;
}

export function TimelinePoint({ icon }: { icon?: React.ReactNode }) {
  return (
    <div className="fb-timeline-point-wrap" aria-hidden="true">
      <span className="fb-timeline-point">
        {icon ?? (
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            width="14"
            height="14"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm0 5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>
      <div className="fb-timeline-line" />
    </div>
  );
}

export function TimelineContent({ children }: { children: React.ReactNode }) {
  return <div className="fb-timeline-content">{children}</div>;
}

export function TimelineTime({ children }: { children: React.ReactNode }) {
  return <time className="fb-timeline-time">{children}</time>;
}

export function TimelineTitle({ children }: { children: React.ReactNode }) {
  return <h4 className="fb-timeline-title">{children}</h4>;
}

export function TimelineBody({ children }: { children: React.ReactNode }) {
  return <p className="fb-timeline-body">{children}</p>;
}

export function TimelineButton({
  href,
  children,
  topic,
}: {
  href: string;
  children: React.ReactNode;
  topic?: string;
}) {
  return (
    <a
      href={href}
      data-contact-topic={topic}
      className="fb-timeline-btn"
    >
      <span>{children}</span>
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        width="15"
        height="15"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
}

/* ============================================================================
 * 4. Flowbite-style Blockquote + Avatar Founder Quote Component
 * ========================================================================== */
export interface BlockquoteProps {
  children: React.ReactNode;
}

export function Blockquote({ children }: BlockquoteProps) {
  return <blockquote className="fb-blockquote">{children}</blockquote>;
}

export interface FounderQuoteProps {
  quote: string;
  authorName: string;
  authorRole: string;
  avatarImg: string;
  secondaryQuote?: {
    quote: string;
    authorName: string;
    authorRole: string;
    avatarImg: string;
  };
}

export function FounderQuote({
  quote,
  authorName,
  authorRole,
  avatarImg,
}: FounderQuoteProps) {
  return (
    <figure className="fb-quote-figure">
      <svg
        className="fb-quote-svg"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <Blockquote>
        <p className="fb-quote-text">"{quote}"</p>
      </Blockquote>
      <figcaption className="fb-quote-figcaption">
        <Avatar rounded size="xs" img={avatarImg} alt={authorName} />
        <div className="fb-quote-cite-group">
          <cite className="fb-quote-cite-name">{authorName}</cite>
          <cite className="fb-quote-cite-role">{authorRole}</cite>
        </div>
      </figcaption>
    </figure>
  );
}

