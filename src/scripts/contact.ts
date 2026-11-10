/**
 * Contact section interactivity:
 * - Builds live message preview and updates WhatsApp & mailto links with proper URI encoding
 * - Handles copy-to-clipboard buttons with selection fallback when Clipboard API is unavailable
 */
export function initContact(): void {
  const form = document.getElementById('cform') as HTMLFormElement | null;
  const preview = document.getElementById('preview');
  const waLink = document.getElementById('wa-contact') as HTMLAnchorElement | null;
  const mailLink = document.getElementById('mail-contact') as HTMLAnchorElement | null;

  if (form && preview && waLink && mailLink) {
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

    let flashTimer = 0;

    const getVal = (el: HTMLInputElement | HTMLTextAreaElement | null): string =>
      (el?.value || '').trim();

    const buildMessage = (): void => {
      const n = getVal(nameInput);
      const b = getVal(bizInput);
      const w = getVal(webInput);
      const q = getVal(needInput);

      const lines: string[] = [greeting];
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
    };

    [nameInput, bizInput, webInput, needInput].forEach((input) => {
      input?.addEventListener('input', buildMessage);
    });

    form.addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault();
    });

    buildMessage();
  }

  // Direct contact copy buttons with fallback to text selection
  const copyButtons = document.querySelectorAll<HTMLButtonElement>('button.copy');
  copyButtons.forEach((button) => {
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

