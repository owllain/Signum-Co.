import type { Locale } from './site';

export type BrandImageKind =
  | 'signal'
  | 'data'
  | 'systems'
  | 'automation'
  | 'applications'
  | 'integrations'
  | 'technical-review'
  | 'sig';

export interface BrandImageMeta {
  kind: BrandImageKind;
  src: string;
  srcset: string;
  width: number;
  height: number;
  aspectRatio: string;
  transparent?: boolean;
  alt: Record<Locale, string>;
  tag: Record<Locale, string>;
}

export const BRAND_IMAGES: Record<BrandImageKind, BrandImageMeta> = {
  signal: {
    kind: 'signal',
    src: '/images/signal-1200.webp',
    srcset: '/images/signal-640.webp 640w, /images/signal-1200.webp 1200w',
    width: 1200,
    height: 800,
    aspectRatio: '3 / 2',
    alt: {
      es: 'Elementos dispersos que se ordenan en una señal dorada clara.',
      en: 'Scattered elements aligning into a clear golden signal.',
    },
    tag: {
      es: 'Señal · Evidencia · Dirección',
      en: 'Signal · Evidence · Direction',
    },
  },
  data: {
    kind: 'data',
    src: '/images/data-1200.webp',
    srcset: '/images/data-640.webp 640w, /images/data-1200.webp 1200w',
    width: 1200,
    height: 800,
    aspectRatio: '3 / 2',
    alt: {
      es: 'Módulos de datos conectados para orientar decisiones ejecutivas.',
      en: 'Connected data modules supporting executive decisions.',
    },
    tag: {
      es: 'Ingeniería de datos · BI · RevOps',
      en: 'Data engineering · BI · RevOps',
    },
  },
  systems: {
    kind: 'systems',
    src: '/images/systems-1200.webp',
    srcset: '/images/systems-640.webp 640w, /images/systems-1200.webp 1200w',
    width: 1200,
    height: 800,
    aspectRatio: '3 / 2',
    alt: {
      es: 'Herramientas y procesos empresariales conectados en un flujo común.',
      en: 'Business tools and processes connected through a shared flow.',
    },
    tag: {
      es: 'Ecosistema conectado · Datos + Operación',
      en: 'Connected ecosystem · Data + Operations',
    },
  },
  automation: {
    kind: 'automation',
    src: '/images/automation-1200.webp',
    srcset: '/images/automation-640.webp 640w, /images/automation-1200.webp 1200w',
    width: 1200,
    height: 800,
    aspectRatio: '3 / 2',
    alt: {
      es: 'Flujo documental automatizado con etapas de aprobación y trazabilidad.',
      en: 'Automated document workflow with approval stages and traceability.',
    },
    tag: {
      es: 'Flujos · Aprobaciones · Alertas',
      en: 'Workflows · Approvals · Alerts',
    },
  },
  applications: {
    kind: 'applications',
    src: '/images/applications-1200.webp',
    srcset: '/images/applications-640.webp 640w, /images/applications-1200.webp 1200w',
    width: 1200,
    height: 800,
    aspectRatio: '3 / 2',
    alt: {
      es: 'Módulos de formularios, expedientes y seguimiento que componen una aplicación.',
      en: 'Form, record and tracking modules composing a business application.',
    },
    tag: {
      es: 'Portales · Expedientes · Reglas de negocio',
      en: 'Portals · Records · Business rules',
    },
  },
  integrations: {
    kind: 'integrations',
    src: '/images/integrations-1200.webp',
    srcset: '/images/integrations-640.webp 640w, /images/integrations-1200.webp 1200w',
    width: 1200,
    height: 800,
    aspectRatio: '3 / 2',
    alt: {
      es: 'Dos sistemas empresariales sincronizados a través de un puente de integración.',
      en: 'Two business systems synchronized across an integration bridge.',
    },
    tag: {
      es: 'APIs · Conector de datos · Modernización',
      en: 'APIs · Conector de datos · Modernización',
    },
  },
  'technical-review': {
    kind: 'technical-review',
    src: '/images/technical-review-1200.webp',
    srcset: '/images/technical-review-640.webp 640w, /images/technical-review-1200.webp 1200w',
    width: 1200,
    height: 800,
    aspectRatio: '3 / 2',
    alt: {
      es: 'Inspección técnica que identifica hallazgos y los vincula con evidencia trazable.',
      en: 'Technical inspection identifying findings and linking them to traceable evidence.',
    },
    tag: {
      es: 'Auditoría de código · Controles · Evidencia',
      en: 'Code review · Controls · Evidence',
    },
  },
  sig: {
    kind: 'sig',
    src: '/images/sig-256.webp',
    srcset: '/images/sig-128.webp 128w, /images/sig-256.webp 256w, /images/sig-512.webp 512w',
    width: 256,
    height: 256,
    aspectRatio: '1 / 1',
    transparent: true,
    alt: {
      es: 'Sig, insignia de Signum & Co., cinta azul marino con destello dorado.',
      en: 'Sig, Signum & Co. emblem, navy ribbon with a golden flare.',
    },
    tag: {
      es: 'Sig · Del ruido a la señal',
      en: 'Sig · From noise to signal',
    },
  },
};

