/**
 * Contact section interactivity:
 * - Builds live message preview and updates WhatsApp & mailto links with proper URI encoding
 * - Supports quick topic pill selection synced with #c-topic select
 * - Handles copy-to-clipboard buttons with selection fallback when Clipboard API is unavailable
 */
export function initContact(): void {
  const form = document.getElementById('cform') as HTMLFormElement | null;
  const preview = document.getElementById('preview');
  const waLink = document.getElementById('wa-contact') as HTMLAnchorElement | null;
  const mailLink = document.getElementById('mail-contact') as HTMLAnchorElement | null;

  if (form && preview && waLink && mailLink) {
    if (form.dataset.bound === 'true') return;
    form.dataset.bound = 'true';

    const greeting = form.dataset.greeting || '';
    const namePrefix = form.dataset.namePrefix || 'Nombre: ';
    const bizPrefix = form.dataset.bizPrefix || 'Negocio: ';
    const webPrefix = form.dataset.webPrefix || 'Web o Instagram: ';
    const needPrefix = form.dataset.needPrefix || 'Me interesa: ';
    const subjectBase = form.dataset.subjectBase || 'Diagnóstico gratis';
    const waBase = form.dataset.waBase || 'https://wa.me/50689712137';
    const email = form.dataset.email || 'kevin.arroyo@signumandco.com';

    const nameInput = document.getElementById('c-name') as HTMLInputElement | null;
    const bizInput = document.getElementById('c-biz') as HTMLInputElement | null;
    const webInput = document.getElementById('c-web') as HTMLInputElement | null;
    const needInput = document.getElementById('c-need') as HTMLTextAreaElement | null;
    const topicInput = document.getElementById('c-topic') as HTMLSelectElement | null;
    const quickTopicBtns = Array.from(form.querySelectorAll<HTMLButtonElement>('button[data-quick-topic]'));
    const topicPrefix = form.dataset.topicPrefix || 'Topic';
    const draftKey = 'sg-contact-draft';

    try {
      const draft = JSON.parse(sessionStorage.getItem(draftKey) || '{}');
      for (const input of [nameInput, bizInput, webInput, needInput, topicInput]) {
        if (input && typeof draft[input.name] === 'string') input.value = draft[input.name];
      }
    } catch {
      /* Keep empty fields if storage is unavailable or invalid. */
    }
    const requestedTopic = new URLSearchParams(location.search).get('topic');
    if (
      topicInput &&
      requestedTopic &&
      Array.from(topicInput.options).some((option) => option.value === requestedTopic)
    ) {
      topicInput.value = requestedTopic;
    }

    let flashTimer = 0;

    const getVal = (el: HTMLInputElement | HTMLTextAreaElement | null): string =>
      (el?.value || '').trim();

    const syncQuickTopicButtons = (): void => {
      const current = topicInput?.value || '';
      quickTopicBtns.forEach((btn) => {
        const isActive = btn.dataset.quickTopic === current;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
    };

    const buildMessage = (): void => {
      const n = getVal(nameInput);
      const b = getVal(bizInput);
      const w = getVal(webInput);
      const q = getVal(needInput);

      const lines: string[] = [greeting];
      if (topicInput?.value && topicInput.selectedOptions[0]) {
        lines.push(`${topicPrefix} ${topicInput.selectedOptions[0].textContent}`);
      }
      if (n) lines.push(`${namePrefix}${n}`);
      if (b) lines.push(`${bizPrefix}${b}`);
      if (w) lines.push(`${webPrefix}${w}`);
      if (q) lines.push(`${needPrefix}${q}`);

      const text = lines.join('\n');

      if (preview.textContent !== text) {
        preview.textContent = text;
        preview.classList.add('flash');
        if (flashTimer) window.clearTimeout(flashTimer);
        flashTimer = window.setTimeout(() => {
          preview.classList.remove('flash');
        }, 220);
      }

      waLink.href = `${waBase}?text=${encodeURIComponent(text)}`;
      const subject = `${subjectBase}${b ? ` · ${b}` : ''}`;
      mailLink.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      syncQuickTopicButtons();
      try {
        const draft = Object.fromEntries(
          [nameInput, bizInput, webInput, needInput, topicInput]
            .filter(
              (
                input
              ): input is HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement =>
                Boolean(input)
            )
            .map((input) => [input.name, input.value])
        );
        sessionStorage.setItem(draftKey, JSON.stringify(draft));
      } catch {
        /* Message generation does not depend on storage. */
      }
    };

    [nameInput, bizInput, webInput, needInput, topicInput].forEach((input) => {
      input?.addEventListener('input', buildMessage);
    });
    topicInput?.addEventListener('change', () => {
      buildMessage();
      const url = new URL(location.href);
      if (topicInput.value) url.searchParams.set('topic', topicInput.value);
      else url.searchParams.delete('topic');
      history.replaceState(null, '', url);
      window.dispatchEvent(new Event('hashchange'));
    });

    quickTopicBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const t = btn.dataset.quickTopic || '';
        if (!topicInput) return;
        topicInput.value = topicInput.value === t ? '' : t;
        topicInput.dispatchEvent(new Event('change'));
      });
    });

    document.querySelectorAll<HTMLAnchorElement>('[data-contact-topic]').forEach((link) => {
      link.addEventListener('click', (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const topic = link.dataset.contactTopic;
        if (
          !topicInput ||
          !topic ||
          !Array.from(topicInput.options).some((option) => option.value === topic)
        )
          return;
        event.preventDefault();
        topicInput.value = topic;
        buildMessage();
        const url = new URL(location.href);
        url.searchParams.set('topic', topic);
        url.hash = 'contacto';
        history.replaceState(null, '', url);
        window.dispatchEvent(new Event('hashchange'));
        form.scrollIntoView({
          behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
          block: 'start',
        });
        topicInput.focus({ preventScroll: true });
      });
    });

    form.addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault();
    });

    buildMessage();
  }

  // Direct contact copy buttons with fallback to text selection
  const copyButtons = document.querySelectorAll<HTMLButtonElement>('button.copy');
  copyButtons.forEach((button) => {
    if (button.dataset.bound === 'true') return;
    button.dataset.bound = 'true';
    let resetTimer = 0;
    const originalText = button.textContent || '';

    button.addEventListener('click', () => {
      const valueToCopy = button.dataset.copy || '';
      const copiedLabel = button.dataset.copiedLabel || 'Copied';

      const showFeedback = (): void => {
        button.textContent = copiedLabel;
        if (resetTimer) window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(() => {
          button.textContent = originalText;
        }, 1500);
      };

      const selectFallback = (): void => {
        const selEl = button.parentElement?.querySelector('.sel');
        if (!selEl) return;
        const range = document.createRange();
        range.selectNodeContents(selEl);
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
      };

      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard.writeText(valueToCopy).then(showFeedback, selectFallback);
      } else {
        selectFallback();
      }
    });
  });
}

initContact();
document.addEventListener('astro:page-load', initContact);
