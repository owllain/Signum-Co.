/**
 * Navigation controller:
 * - Marks document as JS-enabled for responsive mobile menu toggle
 * - Updates sticky header shadow on scroll (throttled via rAF)
 * - Highlights active section in navigation using IntersectionObserver
 * - Manages mobile menu disclosure state and keyboard accessibility
 */
export function initNavigation(): void {
  document.documentElement.classList.add('js');

  const nav = document.querySelector<HTMLElement>('.nav');
  const navLinksContainer = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle') as HTMLButtonElement | null;
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>('.nav-links a[href^="#"]')
  );

  // Scroll state throttled to animation frame
  if (nav) {
    let ticking = false;
    const updateScrolled = (): void => {
      nav.classList.toggle('scrolled', window.scrollY > 8);
      ticking = false;
    };
    updateScrolled();
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(updateScrolled);
        }
      },
      { passive: true }
    );
  }

  // Mobile menu toggle
  function setMenuOpen(open: boolean): void {
    if (!navLinksContainer || !navToggle) return;
    navLinksContainer.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    const openLabel = navToggle.dataset.openLabel || 'Open menu';
    const closeLabel = navToggle.dataset.closeLabel || 'Close menu';
    navToggle.setAttribute('aria-label', open ? closeLabel : openLabel);
  }

  if (navToggle && navLinksContainer) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      setMenuOpen(!isExpanded);
    });

    links.forEach((link) => {
      link.addEventListener('click', () => {
        setMenuOpen(false);
      });
    });

    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (
        e.key === 'Escape' &&
        navToggle.getAttribute('aria-expanded') === 'true'
      ) {
        setMenuOpen(false);
        navToggle.focus();
      }
    });
  }

  // Active section observer
  if ('IntersectionObserver' in window && links.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeHref = `#${entry.target.id}`;
            links.forEach((a) => {
              const isMatch = a.getAttribute('href') === activeHref;
              a.classList.toggle('on', isMatch);
            });
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    links.forEach((a) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.getElementById(href.slice(1));
        if (target) observer.observe(target);
      }
    });
  }
}

initNavigation();

