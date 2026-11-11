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

  const languageLink = document.querySelector<HTMLAnchorElement>('#lang');
  if (languageLink) {
    const updateLanguageLink = (): void => {
      const url = new URL(languageLink.href);
      url.hash = location.hash;
      const params = new URLSearchParams(location.search);
      const topic = params.get('topic');
      const tab = params.get('tab');
      if (topic) url.searchParams.set('topic', topic);
      else url.searchParams.delete('topic');
      if (tab) url.searchParams.set('tab', tab);
      else url.searchParams.delete('tab');
      languageLink.href = url.toString();
    };
    updateLanguageLink();
    window.addEventListener('hashchange', updateLanguageLink);
  }

  const themeToggle = document.querySelector<HTMLButtonElement>('#theme-toggle');
  if (themeToggle && themeToggle.dataset.bound !== 'true') {
    themeToggle.dataset.bound = 'true';
    themeToggle.hidden = false;
    const systemTheme = matchMedia('(prefers-color-scheme: dark)');
    const isDark = (): boolean =>
      document.documentElement.dataset.theme
        ? document.documentElement.dataset.theme === 'dark'
        : systemTheme.matches;
    const sync = (): void =>
      themeToggle.setAttribute('aria-pressed', String(isDark()));
    sync();
    systemTheme.addEventListener('change', sync);
    themeToggle.addEventListener('click', () => {
      const theme = isDark() ? 'light' : 'dark';
      document.documentElement.dataset.theme = theme;
      try {
        localStorage.setItem('sg-theme', theme);
      } catch {
        /* Theme still works for this page. */
      }
      sync();
    });
  } else if (themeToggle) {
    themeToggle.hidden = false;
  }
}

initNavigation();
document.addEventListener('astro:page-load', initNavigation);
