import type { Locale, SiteContent } from './site';
import { developmentServices } from './services';

export type PageId =
  | 'home'
  | 'services'
  | 'enterprise'
  | 'development'
  | 'method'
  | 'about'
  | 'faq'
  | 'terms'
  | 'privacy'
  | 'contact';

export const pageIds: PageId[] = [
  'home',
  'services',
  'enterprise',
  'development',
  'method',
  'about',
  'faq',
  'terms',
  'privacy',
  'contact',
];

export const routes: Record<Locale, Record<PageId, string>> = {
  es: {
    home: '/es/',
    services: '/es/servicios/',
    development: '/es/desarrollo/',
    contact: '/es/contacto/',
    enterprise: '/es/datos/',
    method: '/es/metodologia/',
    about: '/es/nosotros/',
    faq: '/es/preguntas-frecuentes/',
    terms: '/es/terminos/',
    privacy: '/es/privacidad/',
  },
  en: {
    home: '/en/',
    services: '/en/services/',
    development: '/en/development/',
    contact: '/en/contact/',
    enterprise: '/en/data-analytics/',
    method: '/en/approach/',
    about: '/en/about/',
    faq: '/en/faq/',
    terms: '/en/terms/',
    privacy: '/en/privacy/',
  },
};

interface ExperienceContent {
  nav: Record<PageId, string>;
  page: Record<Exclude<PageId, 'home'>, { title: string; lead: string }>;
  eyebrow: string;
  homeTitle: string;
  homeLead: string;
  contact: string;
  explore: string;
  discuss: string;
  theme: string;
  audienceTitle: string;
  audiences: { title: string; description: string; cta: string }[];
  methodTitle: string;
  methodLead: string;
  steps: { title: string; text: string; deliverable: string }[];
  deliverable: string;
  validationTitle: string;
  validations: { title: string; text: string }[];
  diagram: {
    title: string;
    note: string;
    stages: { title: string; text: string }[];
  };
  faqTitle: string;
  faq: { question: string; answer: string }[];
  aboutTitle: string;
  aboutLead: string;
  founderLabel: string;
  interestsLabel: string;
  interestsPlaceholder: string;
  nextTitle: string;
  nextSteps: string[];
  scopeNote: string;
}

export const experience: Record<Locale, ExperienceContent> = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      enterprise: 'Datos y analítica',
      development: 'Desarrollo y automatización',
      method: 'Metodología',
      about: 'Sobre nosotros',
      faq: 'Preguntas frecuentes',
      terms: 'Términos de servicio',
      privacy: 'Privacidad y legalidad',
      contact: 'Conversemos',
    },
    page: {
      services: {
        title: 'Soluciones empresariales que conectan datos y operación.',
        lead: 'La oferta de Signum & Co. combina ingeniería de datos, analítica ejecutiva, desarrollo de aplicaciones y automatización de procesos. Definimos qué necesita su empresa y conectamos las especialidades adecuadas para resolverlo.',
      },
      development: {
        title: 'Menos tareas repetidas. Más trabajo que avanza.',
        lead: 'Aplicaciones empresariales, automatización e integraciones construidas alrededor de su operación. Con reglas claras, seguimiento y una entrega que su equipo puede mantener.',
      },
      contact: {
        title: 'Empecemos por lo que necesita resolver.',
        lead: 'Cuéntenos el contexto. Definimos juntos si el siguiente paso es una revisión técnica, un piloto o una solución a medida.',
      },
      enterprise: {
        title: 'Gestión de datos y analítica para decidir.',
        lead: 'Kevin Arroyo lidera esta especialidad: inteligencia de ingresos, ingeniería de datos, tableros ejecutivos y medición comercial. Organizamos sus fuentes y convertimos la información en respuestas para ventas, marketing, finanzas y operaciones.',
      },
      method: {
        title: 'Claridad en cada etapa. Evidencia en cada entrega.',
        lead: 'Empezamos por una necesidad concreta. Acordamos qué vamos a resolver, cómo lo comprobaremos y qué recibirá su equipo al terminar.',
      },
      about: {
        title: 'Dos perspectivas. Un equipo que conecta.',
        lead: 'Signum & Co. reúne liderazgo en ingeniería de datos, desarrollo de software y automatización para ayudar a las organizaciones a transformar su información y su operación.',
      },
      faq: {
        title: 'Centro de preguntas frecuentes y criterios de trabajo.',
        lead: 'Todo lo que necesita saber sobre nuestro diagnóstico inicial, arquitectura de datos, desarrollo de aplicaciones, propiedad intelectual y modalidades de contratación.',
      },
      terms: {
        title: 'Términos de servicio y condiciones comerciales.',
        lead: 'Marco contractual, propiedad intelectual de entregables, gestión de licencias y alcances de consultoría de Signum & Co.',
      },
      privacy: {
        title: 'Política de privacidad, confidencialidad y aviso legal.',
        lead: 'Cómo protegemos su información de contacto, nuestros estándares de confidencialidad (NDA) y cumplimiento con la Ley N.º 8968 de Costa Rica.',
      },
    },
    eyebrow: 'Datos, Desarrollo e IA · Costa Rica',
    homeTitle: 'Menos ruido. Más claridad para su negocio.',
    homeLead:
      'Datos, desarrollo y automatización para entender su negocio, conectar procesos y construir herramientas que mejoren su operación.',
    contact: 'Conversemos',
    explore: 'Explorar servicios',
    discuss: 'Consultar este servicio',
    theme: 'Cambiar entre tema claro y oscuro',
    audienceTitle: '¿Qué necesita resolver hoy?',
    audiences: [
      {
        title: 'Quiero entender qué trae clientes.',
        description:
          'Medición GA4/GTM, embudos de conversión, marketing y mejoras a su presencia digital con retorno medible.',
        cta: 'Ver soluciones de crecimiento',
      },
      {
        title: 'Necesitamos confiar en nuestros datos y sistemas.',
        description:
          'Ingeniería de datos en la nube, tableros ejecutivos, aplicaciones a medida y flujos automatizados.',
        cta: 'Explorar arquitectura empresarial',
      },
    ],
    methodTitle: 'Un objetivo claro antes de escribir la primera solución.',
    methodLead:
      'Del diagnóstico a la transferencia, cada etapa tiene una decisión y un entregable verificable.',
    steps: [
      {
        title: 'Entender',
        text: 'Conversamos sobre su objetivo, las fuentes disponibles y la decisión que necesita tomar.',
        deliverable: 'Problema y prioridades definidos.',
      },
      {
        title: 'Acordar',
        text: 'Delimitamos alcance, responsables, inversión fija, dependencias y criterios de aceptación.',
        deliverable: 'Propuesta con entregables y calendario.',
      },
      {
        title: 'Construir',
        text: 'Implementamos por etapas semanales y revisamos avances reales con su equipo.',
        deliverable: 'Solución y avances revisables.',
      },
      {
        title: 'Validar',
        text: 'Contrastamos indicadores, fuentes y reglas de negocio con los casos acordados.',
        deliverable: 'Validación y conciliación documentadas.',
      },
      {
        title: 'Transferir',
        text: 'Entregamos documentación operativa, accesos y capacitación para autonomía de su equipo.',
        deliverable: 'Documentación y sesión de entrega.',
      },
    ],
    deliverable: 'Qué recibe',
    validationTitle: 'Una entrega se comprueba. No solo se presenta.',
    validations: [
      {
        title: 'Definiciones compartidas',
        text: 'Acordamos qué significa cada indicador y de qué fuente proviene antes de interpretarlo.',
      },
      {
        title: 'Datos que concilian',
        text: 'Revisamos muestras, períodos y reglas de cálculo con su equipo para garantizar exactitud.',
      },
      {
        title: 'Continuidad del trabajo',
        text: 'Dejamos documentados responsables, arquitectura, accesos y manuales de operación.',
      },
    ],
    diagram: {
      title: 'De fuentes dispersas a una operación conectada.',
      note: 'Esquema interactivo. La arquitectura se diseña según sus fuentes, herramientas y objetivos.',
      stages: [
        { title: 'Fuentes', text: 'CRM · ERP · campañas' },
        { title: 'Datos confiables', text: 'Integración · calidad · definición' },
        { title: 'Decisiones', text: 'Indicadores · reportes · dirección' },
      ],
    },
    faqTitle: 'Preguntas frecuentes antes de empezar',
    faq: [
      {
        question: '¿Necesito cambiar todas mis herramientas actuales?',
        answer:
          'No. Primero auditamos las plataformas que ya utiliza y qué información está disponible. La propuesta define qué conservar, integrar o modernizar por etapas.',
      },
      {
        question: '¿Qué incluye la conversación inicial de 15 minutos?',
        answer:
          'Una sesión ejecutiva sin costo para entender su cuello de botella y definir el mejor punto de partida. En 48 horas recibe una propuesta clara con alcance y precio fijo.',
      },
      {
        question: '¿Cómo se define el precio y el plazo de entrega?',
        answer:
          'Según el objetivo, las fuentes y los módulos requeridos. Trabajamos con propuestas de precio cerrado por proyecto, acompañamiento mensual o liderazgo técnico por horas.',
      },
      {
        question: '¿Podemos empezar por un proyecto acotado o piloto?',
        answer:
          'Sí. Podemos iniciar con un primer tablero ejecutivo, una revisión de medición o la automatización de un flujo crítico, y escalar según los resultados obtenidos.',
      },
      {
        question: '¿Quién lidera y ejecuta cada especialidad?',
        answer:
          'Kevin Arroyo lidera ingeniería de datos, analítica e inteligencia de ingresos. Enrique Cascante lidera desarrollo de aplicaciones, automatización, integraciones y revisión técnica.',
      },
      {
        question: '¿Qué sucede después de la entrega final?',
        answer:
          'Su empresa conserva el control total y la documentación de la solución. Si desea evolución continua, ofrecemos planes de acompañamiento mensual o bolsa de horas senior.',
      },
    ],
    aboutTitle: 'Rigor técnico y visión de negocio.',
    aboutLead:
      'Kevin Arroyo y Enrique Cascante combinan trayectoria internacional en ingeniería de datos, analítica ejecutiva y desarrollo de sistemas empresariales.',
    founderLabel: 'Liderazgo · Signum & Co.',
    interestsLabel: '¿Sobre qué quiere conversar?',
    interestsPlaceholder: 'Seleccione un tema (opcional)',
    nextTitle: 'El siguiente paso es una conversación.',
    nextSteps: [
      'Nos cuenta qué necesita resolver.',
      'Evaluamos la arquitectura e intervención ideal.',
      'Recibe una propuesta con alcance y precio fijo en 48h.',
    ],
    scopeNote:
      'El alcance, los entregables y el calendario se formalizan por escrito en cada propuesta.',
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      enterprise: 'Data & analytics',
      development: 'Development & automation',
      method: 'Our approach',
      about: 'About us',
      faq: 'FAQ',
      terms: 'Terms of service',
      privacy: 'Privacy & legal',
      contact: 'Let’s talk',
    },
    page: {
      services: {
        title: 'Business solutions connecting data and operations.',
        lead: 'Signum & Co. combines data engineering, executive analytics, application development and process automation. We identify what your business needs and bring together the right disciplines to solve it.',
      },
      development: {
        title: 'Less repetitive work. More progress.',
        lead: 'Business applications, automation and integrations built around your operations, with clear rules, traceability and a maintainable handover.',
      },
      contact: {
        title: 'Let’s start with what you need to solve.',
        lead: 'Tell us the context. Together, we decide whether the next step is a technical review, a pilot or a custom solution.',
      },
      enterprise: {
        title: 'Data management and analytics for better decisions.',
        lead: 'Kevin Arroyo leads this discipline: revenue intelligence, data engineering, executive dashboards and business measurement. We organize your sources and turn information into answers for sales, marketing, finance and operations.',
      },
      method: {
        title: 'Clarity at every stage. Evidence in every delivery.',
        lead: 'We start with a specific need. Together, we agree on what to solve, how to validate it and what your team will receive.',
      },
      about: {
        title: 'Two perspectives. One connected team.',
        lead: 'Based in Costa Rica, Signum & Co. brings together senior leadership in data engineering, software development and automation to help organizations transform their information and operations.',
      },
      faq: {
        title: 'Frequently asked questions & working standards.',
        lead: 'Everything you need to know about our initial assessment, data architecture, application development, intellectual property and engagement models.',
      },
      terms: {
        title: 'Terms of service & commercial conditions.',
        lead: 'Contractual framework, deliverable intellectual property, third-party licensing and consulting scope for Signum & Co.',
      },
      privacy: {
        title: 'Privacy policy, confidentiality & legal notice.',
        lead: 'How we protect your contact information, our NDA confidentiality standards and compliance with Costa Rican Law No. 8968.',
      },
    },
    eyebrow: 'Data, Development & AI · Costa Rica',
    homeTitle: 'Less noise. More clarity for your business.',
    homeLead:
      'Data, development and automation to understand your business, connect processes and build tools that improve your operations.',
    contact: 'Let’s talk',
    explore: 'Explore services',
    discuss: 'Discuss this service',
    theme: 'Switch between light and dark theme',
    audienceTitle: 'What do you need to solve today?',
    audiences: [
      {
        title: 'I want to know what brings customers.',
        description:
          'GA4/GTM tracking, conversion funnels, digital marketing and web improvements with measurable ROI.',
        cta: 'Explore growth solutions',
      },
      {
        title: 'We need to trust our data and systems.',
        description:
          'Cloud data engineering, executive dashboards, custom business apps and automated workflows.',
        cta: 'Explore enterprise architecture',
      },
    ],
    methodTitle: 'A clear objective before building the first solution.',
    methodLead:
      'From discovery to handover, each stage has a decision and a verifiable outcome.',
    steps: [
      {
        title: 'Understand',
        text: 'We discuss your goal, available sources and the decision you need to make.',
        deliverable: 'Defined problem and priorities.',
      },
      {
        title: 'Agree',
        text: 'We define scope, owners, fixed investment, dependencies and acceptance criteria.',
        deliverable: 'Proposal with deliverables and timeline.',
      },
      {
        title: 'Build',
        text: 'We implement in weekly stages and review tangible progress with your team.',
        deliverable: 'A solution and reviewable progress.',
      },
      {
        title: 'Validate',
        text: 'We verify metrics, sources and business rules against agreed examples.',
        deliverable: 'Documented validation and reconciliation.',
      },
      {
        title: 'Hand over',
        text: 'We deliver operational documentation, access credentials and team training.',
        deliverable: 'Documentation and handover session.',
      },
    ],
    deliverable: 'What you receive',
    validationTitle: 'A delivery should be verified, not just presented.',
    validations: [
      {
        title: 'Shared definitions',
        text: 'We agree on what each metric means and where it comes from before interpreting it.',
      },
      {
        title: 'Reconciled data',
        text: 'We check samples, periods and calculation rules with your team to ensure accuracy.',
      },
      {
        title: 'Continuity',
        text: 'We document owners, architecture, required access and operational playbooks at handover.',
      },
    ],
    diagram: {
      title: 'From scattered sources to a connected operation.',
      note: 'Interactive diagram. Your architecture is tailored to your sources, tools and goals.',
      stages: [
        { title: 'Sources', text: 'CRM · ERP · campaigns' },
        { title: 'Trusted data', text: 'Integration · quality · definitions' },
        { title: 'Decisions', text: 'Metrics · reports · leadership' },
      ],
    },
    faqTitle: 'Frequently asked questions before we start',
    faq: [
      {
        question: 'Do I need to replace all my existing tools?',
        answer:
          'No. We first audit the platforms you already use and what data is available. The proposal defines what to keep, connect or modernize in stages.',
      },
      {
        question: 'What does the free 15-minute initial assessment include?',
        answer:
          'A direct executive call to understand your bottleneck and identify the highest-impact starting point. Within 48 hours you receive a fixed-price proposal.',
      },
      {
        question: 'How are price and delivery timing determined?',
        answer:
          'By the objective, sources and required modules. We offer fixed-price project proposals, monthly partnerships or fractional senior leadership.',
      },
      {
        question: 'Can we start with a small pilot project?',
        answer:
          'Yes. We can start with an executive dashboard, a tracking audit or a single automated workflow, then expand based on proven results.',
      },
      {
        question: 'Who leads and executes each discipline?',
        answer:
          'Kevin Arroyo leads data engineering, analytics and revenue intelligence. Enrique Cascante leads application development, automation, integrations and technical review.',
      },
      {
        question: 'What happens after final delivery?',
        answer:
          'Your team retains full ownership and documentation of the solution. For ongoing evolution, we offer monthly retainers or flexible senior hours.',
      },
    ],
    aboutTitle: 'Technical rigor meets business clarity.',
    aboutLead:
      'Kevin Arroyo and Enrique Cascante combine international experience in data engineering, executive analytics and enterprise software development.',
    founderLabel: 'Leadership · Signum & Co.',
    interestsLabel: 'What would you like to discuss?',
    interestsPlaceholder: 'Select a topic (optional)',
    nextTitle: 'The next step is a conversation.',
    nextSteps: [
      'Tell us what you need to solve.',
      'We evaluate the ideal architecture and approach.',
      'Receive a fixed-price proposal within 48 hours.',
    ],
    scopeNote:
      'Scope, deliverables and timelines are formalized in writing in every proposal.',
  },
};

export function contactTopics(content: SiteContent) {
  return [
    ...developmentServices[content.locale].map((service) => ({
      id: service.id,
      label: service.title,
    })),
    ...content.services.rows.map((row, index) => ({
      id: `service-${index}`,
      label: row.title,
    })),
    ...content.enterprise.rows.map((row, index) => ({
      id: `enterprise-${index}`,
      label: row.title,
    })),
    ...content.pricing.rows.map((row, index) => ({
      id: `engagement-${index}`,
      label: row.title,
    })),
  ];
}

export function pageContent(base: SiteContent, page: PageId): SiteContent {
  const text = experience[base.locale];
  const home = routes[base.locale].home;
  return {
    ...base,
    canonicalPath: routes[base.locale][page],
    alternatePath: routes[base.alternateLocale][page],
    meta: {
      ...base.meta,
      ...(page === 'home'
        ? {
            title: `Signum & Co. — ${text.eyebrow}`,
            description: text.homeLead,
          }
        : {
            title: `${text.nav[page]} | Signum & Co.`,
            description: text.page[page].lead,
          }),
    },
    nav: {
      ...base.nav,
      homeHref: home,
      items: [
        {
          id: 'services',
          label: text.nav.services,
          href: routes[base.locale].services,
        },
        ...(['method', 'about', 'faq'] as const).map((id) => ({
          id,
          label: text.nav[id],
          href: routes[base.locale][id],
        })),
        {
          id: 'contact',
          label: text.contact,
          href: routes[base.locale].contact,
        },
      ],
    },
    hero: {
      ...base.hero,
      headline: text.homeTitle,
      lead: text.homeLead,
      primaryCta: text.contact,
      secondaryCta: text.explore,
      secondaryCtaHref: routes[base.locale].services,
    },
  };
}
