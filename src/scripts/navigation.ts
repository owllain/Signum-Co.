/**
 * Navigation controller:
 * - Marks document as JS-enabled for responsive mobile menu toggle
 * - Updates sticky header shadow on scroll (throttled via rAF)
 * - Manages mobile menu disclosure state and keyboard accessibility
 * - Works seamlessly with Astro View Transitions (ClientRouter)
 */
export function initNavigation(): void {
  document.documentElement.classList.add('js');

  if (location.hash === '#contacto' && !document.getElementById('contacto')) {
    const locale = document.documentElement.lang.startsWith('es') ? 'es' : 'en';
    location.replace(
      locale === 'es' ? '/es/contacto/#contacto' : '/en/contact/#contacto'
    );
    return;
  }

  const nav = document.querySelector<HTMLElement>('.nav');
  const navLinksContainer = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle') as HTMLButtonElement | null;
  const allLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>('.nav-links a')
  );

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

  function setMenuOpen(open: boolean): void {
    if (!navLinksContainer || !navToggle) return;
    navLinksContainer.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    const openLabel = navToggle.dataset.openLabel || 'Open menu';
    const closeLabel = navToggle.dataset.closeLabel || 'Close menu';
    navToggle.setAttribute('aria-label', open ? closeLabel : openLabel);
  }

  if (navToggle && navLinksContainer && navToggle.dataset.bound !== 'true') {
    navToggle.dataset.bound = 'true';
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      setMenuOpen(!isExpanded);
    });

    allLinks.forEach((link) => {
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

}

initNavigation();
