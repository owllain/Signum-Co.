export type Locale = 'es' | 'en';

export interface NavItem {
  id: string;
  href: string;
  label: string;
}

export interface QuestionItem {
  quote: string;
  answer: string;
}

export interface ServiceRow {
  title: string;
  description: string;
  bullets: string[];
}

export interface FunnelStep {
  label: string;
  code: string;
  widthPercent: number;
  value: string;
  isLast?: boolean;
}

export interface ProcessStep {
  title: string;
  description: string;
  when: string;
}

export interface FactItem {
  term: string;
  description: string;
}

export interface StackItem {
  category: string;
  tools: string;
}

export interface SiteContent {
  locale: Locale;
  htmlLang: string;
  ogLocale: string;
  alternateLocale: Locale;
  alternatePath: string;
  canonicalPath: string;
  meta: {
    title: string;
    description: string;
    skipToContent: string;
  };
  nav: {
    homeHref: string;
    items: NavItem[];
    langSwitchLabel: string;
    mobileMenuOpenLabel: string;
    mobileMenuCloseLabel: string;
  };
  hero: {
    headline: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryCtaHref: string;
    whatsappDefaultText: string;
    chart: {
      svgTitle: string;
      noiseLabel: string;
      signalLabel: string;
      legendNoise: string;
      legendSignal: string;
      captionHint: string;
      captionCode: string;
    };
  };
  questions: {
    heading: string;
    items: QuestionItem[];
  };
  services: {
    id: string;
    heading: string;
    intro: string;
    rows: ServiceRow[];
  };
  enterprise: {
    id: string;
    heading: string;
    intro: string;
    rows: ServiceRow[];
  };
  funnel: {
    heading: string;
    intro: string;
    ariaLabel: string;
    steps: FunnelStep[];
    note: string;
  };
  process: {
    heading: string;
    intro: string;
    steps: ProcessStep[];
  };
  pricing: {
    id: string;
    heading: string;
    intro: string;
    rows: ServiceRow[];
    note: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    latinNotePrefix: string;
    latinWord: string;
    latinNoteSuffix: string;
    facts: FactItem[];
    stackHeading: string;
    stack: StackItem[];
    certifications: string;
  };
  contact: {
    id: string;
    heading: string;
    intro: string;
    whatsappLabel: string;
    emailLabel: string;
    copyButton: string;
    copiedButton: string;
    form: {
      nameLabel: string;
      bizLabel: string;
      webLabel: string;
      webPlaceholder: string;
      needLabel: string;
      optionalLabel: string;
      previewLabel: string;
      sendWhatsapp: string;
      sendEmail: string;
      hint: string;
      msgGreeting: string;
      msgNamePrefix: string;
      msgBizPrefix: string;
      msgWebPrefix: string;
      msgNeedPrefix: string;
      mailSubjectBase: string;
    };
  };
  footer: {
    location: string;
    copyright: string;
  };
}

export const SITE_CONFIG = {
  name: 'Signum & Co.',
  domain: 'https://signumandco.com',
  founder: 'Kevin Arroyo',
  location: {
    city: 'San José',
    country: 'Costa Rica',
    countryCode: 'CR',
  },
  contact: {
    phoneDisplay: '+506 6024-2091',
    phoneE164: '+50660242091',
    whatsappNumber: '50660242091',
    whatsappBaseUrl: 'https://wa.me/50660242091',
    email: 'kevin.arroyo@signumandco.com',
  },
  year: 2026,
} as const;

export function buildWhatsappUrl(message: string): string {
  return `${SITE_CONFIG.contact.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(subject: string, body: string): string {
  return `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

