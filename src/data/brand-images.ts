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
  lqip: string;
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
    lqip: 'data:image/webp;base64,UklGRqIAAABXRUJQVlA4IJYAAABwBACdASoYABAAPt1qqU4opqQiMAgBEBuJZQDE2YvOtXYmY3kTC/jmkbdgAAD+/OB2axkLpnTua6VvYXPRHH8y265txK43cgrLxSu3/9qELQ3vGK+zs46hOcqs2N+P2/rsm/70VhbW8bELPoPzvxotHXegnMoAikA2gu36HNVGtiKYndfHFILzNVv0lVGwMXJQ8BnAAAA=',
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
    lqip: 'data:image/webp;base64,UklGRroAAABXRUJQVlA4IK4AAAAwBACdASoYABAAPt1apkyopSOiMAgBEBuJZQAD5RIGwuy4PUfJ6L4SxgAA/pwkOb2/Xy4v6ubXzy/HQLS6SJ4fuLBiZd0+QKvZjf5gYkltthk4bYlwVUG2utG+DetpGxjmVGc6YXnsOybP/7c0DVhX9+afkij4z257PPkpIpUB7G6JXz0JCXnXkR7wSUl9Ptnxncc2CRXGJE4MzlqNuE6F8J3WhqHYST7sOwIAAAA=',
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
    lqip: 'data:image/webp;base64,UklGRugAAABXRUJQVlA4INwAAADwBACdASoYABAAPt1apkyopSOiMAgBEBuJZwARAA7LnziMDGcLphtbpmlYjLD/CgAA/vHMEiSUMW7vMlC2hBJANf5r+yR46692hFn5nh7kO/1o8SwOcCQy+c0doJkA1Gk1/afKjUr42FB+Ap7Fj5VbytdoQFHgsv1mTj7DNDn8AT3qM4OHes4hBUdqfqMHaKykkaO+veeGov6R4I1t/rfkEkluAVFfW9X7UV+Ad92utJ6TkqbfzonVVIUr5vjW0DS7f/4mSldPCw5ph2BQRF5XMKeRoQAACx/BAAAA',
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
    lqip: 'data:image/webp;base64,UklGRrAAAABXRUJQVlA4IKQAAACQBACdASoYABAAPt1qqU4opqQiMAgBEBuJZQDG9Ys23215pnD/4u7QmBGGAAAA/u+/QhOWOC1uIM5/WEre7K4U0dfNl8HsItdDCusPgz0Jksbdd8QkipzDWJ5YSes6CFBzl6vboJ1TSx1BajMdZ09eGkbh/JmnMsFpbfPPH/PZQ+XDa8qTQ3LzytFukfUPsF+ADPGyNT9GeItuFKuOc/FLjAAAAA==',
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
    lqip: 'data:image/webp;base64,UklGRqAAAABXRUJQVlA4IJQAAADwAwCdASoYABAAPt1cpkyopSOiMAgBEBuJZwDImB6QdqyDMByquWEAAP7tX2kRGgObEvTdOKdGN4TPOcq+f7vhiXNV3pfsr91ZqreuOKJHV8OWu3KPhaISUKkko1yd2ZXSkkrTjgpv9fOdew3agflIuk/8bH9Nla9mcPv98JvQu479BjGCO2vzyTD+ih8govEzPAAA',
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
    lqip: 'data:image/webp;base64,UklGRrQAAABXRUJQVlA4IKgAAABQBACdASoYABAAPt1cp0yopSOiMAgBEBuJZQDE2CHiEGIfdaw+j2/pTxeAAP7vvBgt1fZKaR9e9LhNDPcnO8sZhTH9FvAx9GNoZYkw+gIEuveEPSurcRKl78CJRK0hROndJn3JzMKcF3D/BS7V74h2V+TI6Hh/K6K+6xfgxb7gW6NGb9YG830zJmixtEKSlM7fOXrFAUSh6JOpEG08ErAIbMo2LSpR4AA=',
    alt: {
      es: 'Dos sistemas empresariales sincronizados a través de un puente de integración.',
      en: 'Two business systems synchronized across an integration bridge.',
    },
    tag: {
      es: 'APIs · Conector de datos · Modernización',
      en: 'APIs · Data connector · Modernization',
    },
  },
  'technical-review': {
    kind: 'technical-review',
    src: '/images/technical-review-1200.webp',
    srcset: '/images/technical-review-640.webp 640w, /images/technical-review-1200.webp 1200w',
    width: 1200,
    height: 800,
    aspectRatio: '3 / 2',
    lqip: 'data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAACQBACdASoYABAAPt1cpkyopSOiMAgBEBuJZwDIn3gGx7MpXcyB2JewqwMlMoAA/u/VVUBMziwVA2WwuCfXibZ5xA+UBY/9Uucy32FjrHfkyyvhizLjBXNKCfLE9EjDn7RsLBj05rlP4olNbUKYqvP7z+3RIo9PKnxOa4ykwMv+ReigsfzO5FR7UWFlQPYlBXJbKLwqiBSHF7xRiKW+Aovat846Nv/2I9Ob6ahmITfL0zb35QJKBTl0USAAAA==',
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
    lqip: 'data:image/webp;base64,UklGRtgBAABXRUJQVlA4WAoAAAAQAAAAFwAAFwAAQUxQSLoAAAARf6AkABA0RnWHSkQEYHxzWNbEuTSgZtu2bLl+d1+ASHJ3JpAVflagandbgMgANJjAoWl3d73D83z/DBH9nwCCi0vZGhhN1DDUg1sslcZ+B4G68Y2di71/ZaB6LT/G0J/8gxDHChyG14CJMLw7250AX9LDbEcY+yM91EPJ/ErSXAX7b3TQFQK+HWkiDNVfTwNA84m3CFBc+zPThuZLM2I2/2UHgSb5DcDMg5cFjuSngfWL+/v7i72tCABWUDgg+AAAAHAGAJ0BKhgAGAA+yVKdS6ekoqGwDADwGQlkAJ0zkfVeaqyVSIX0gAYCRkHUK8jHP/fPI/f4kpDUqv9TQAD+7qMqhO6cRN6jaoXfRSvFcPMvPCyxsA959saC3fRaiWVBuQbked8HOpOlgIoxOD1k0avBO5/4W0gECEJGnZfuKaLgbClE7xGqX7FHQnI3fNUrixfuVcYJS2D2fJnNZuhsD9zsjiQj7TD+etHOvhYa8l5nrLD+Cbw+A3v//BPYarZ0HzJPfqSDkWWfDpLMn3mO1SPRrwES9iApqVh26T6ztbBtvQygpmqAE1/xYfwToa9kK4i6KDNQAAAA',
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

