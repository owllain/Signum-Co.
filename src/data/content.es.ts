import type { SiteContent } from './site';

export const contentEs: SiteContent = {
  locale: 'es',
  htmlLang: 'es',
  ogLocale: 'es_CR',
  canonicalPath: '/es/',
  meta: {
    title: 'Signum & Co. — Consultora de datos, marketing, tecnología e IA',
    description:
      'Signum & Co. Consultora costarricense de datos, marketing, tecnología e IA. Medimos lo que funciona, hacemos crecer su marketing e implementamos IA que le ahorra horas de trabajo.',
    skipToContent: 'Saltar al contenido principal',
  },
  nav: {
    homeHref: '#inicio',
    items: [
      { id: 'servicios', href: '#servicios', label: 'Servicios' },
      { id: 'empresas', href: '#empresas', label: 'Empresas' },
      { id: 'precios', href: '#precios', label: 'Cómo trabajar juntos' },
      { id: 'contacto', href: '#contacto', label: 'Contacto' },
    ],
    mobileMenuOpenLabel: 'Abrir menú de navegación',
    mobileMenuCloseLabel: 'Cerrar menú de navegación',
  },
  hero: {
    headline: 'Le decimos qué le trae clientes y qué no.',
    lead: 'Somos una consultora costarricense de datos, marketing, tecnología e inteligencia artificial. Medimos lo que funciona, hacemos crecer su marketing e implementamos IA que le ahorra horas de trabajo.',
    primaryCta: 'Pedir diagnóstico gratis por WhatsApp',
    secondaryCta: 'Ver servicios',
    secondaryCtaHref: '#servicios',
    whatsappDefaultText: 'Hola, quiero un diagnóstico gratis para mi negocio.',
    chart: {
      svgTitle: 'Puntos dispersos que se resuelven en una línea de tendencia dorada',
      noiseLabel: 'Lo que ve hoy: seguidores, likes, visitas sueltas',
      signalLabel: 'Lo que medimos: consultas que se vuelven ventas',
      legendNoise: 'Lo que ve hoy',
      legendSignal: 'Lo que medimos',
      captionHint:
        'Pase el cursor o el dedo por la gráfica: así ordenamos sus datos. Ilustración.',
      captionCode: 'utm_source=instagram&utm_medium=organico',
    },
  },
  questions: {
    heading: 'Preguntas que la mayoría de negocios no puede responder',
    items: [
      {
        quote: '¿Qué publicación de Instagram nos trajo la última venta?',
        answer:
          'Muchos negocios usan enlaces con UTM, pero su web no tiene dónde registrarlos.',
      },
      {
        quote: '¿Cuántas llamadas nos llegan desde Google?',
        answer:
          'El perfil de Google cuenta llamadas y rutas, pero casi nadie lo revisa.',
      },
      {
        quote: '¿Funciona el correo que publicamos en la web?',
        answer:
          'En nuestras revisiones encontramos correos de contacto que rebotan y formularios rotos.',
      },
    ],
  },
  services: {
    id: 'servicios',
    heading: 'Qué hacemos',
    intro:
      'Trabajamos sobre lo que ya tiene. No le proponemos rehacer su web si no hace falta.',
    rows: [
      {
        title: 'Datos y medición',
        description:
          'Instalamos Google Analytics 4 y Tag Manager, y le armamos un tablero en Looker Studio que se actualiza solo.',
        bullets: [
          'Clics a WhatsApp, llamadas y cotizaciones',
          'Campañas y UTMs registradas',
          'Embudo del anuncio a la venta',
        ],
      },
      {
        title: 'Marketing digital y redes sociales',
        description:
          'Estrategia, contenido y campañas que se miden por clientes, no por likes.',
        bullets: [
          'Estrategia y calendario de contenido para Instagram, Facebook, TikTok y LinkedIn',
          'Campañas pagadas en Meta y Google Ads',
          'Perfil de Google, reseñas y posicionamiento en buscadores (SEO)',
          'Email marketing y seguimiento a clientes',
        ],
      },
      {
        title: 'Tecnología y web',
        description:
          'Mejoras puntuales a su sitio, o uno nuevo pensado para generar consultas.',
        bullets: [
          'Búsqueda por medida, cotizador o citas en línea',
          'Letra legible y botones grandes en celular',
          'Tiendas en línea y pagos',
        ],
      },
      {
        title: 'Implementación de IA',
        description:
          'Ponemos la inteligencia artificial a trabajar en su negocio: atiende, responde, redacta y organiza, para que su equipo se enfoque en vender.',
        bullets: [
          'Asistentes de WhatsApp y chat en su web que responden 24/7',
          'Contenido para redes y respuestas a reseñas con IA',
          'Automatización de cotizaciones, citas y tareas repetitivas',
          'Capacitación a su equipo para usar IA en el día a día',
        ],
      },
    ],
  },
  enterprise: {
    id: 'empresas',
    heading: 'Para empresas: el equipo de datos que todavía no tiene',
    intro:
      'Para equipos de ventas, marketing, finanzas y operaciones que necesitan respuestas confiables sin contratar un departamento completo. Trabajamos por proyecto o como su líder de datos por horas.',
    rows: [
      {
        title: 'Inteligencia de ingresos',
        description:
          'Visibilidad completa del pipeline: de dónde viene cada oportunidad, qué campaña la generó y cuánto va a cerrar este trimestre.',
        bullets: [
          'Atribución de marketing multicanal',
          'Pronóstico de ventas y salud del pipeline',
          'Métricas de RevOps para dirección',
        ],
      },
      {
        title: 'Ingeniería de datos',
        description:
          'Un almacén de datos ordenado donde todas sus fuentes hablan el mismo idioma, listo para reportes y para IA.',
        bullets: [
          'Snowflake, BigQuery, Databricks',
          'Modelado dimensional y pipelines en SQL y Python',
          'Calidad y gobierno de datos maestros',
        ],
      },
      {
        title: 'Tableros ejecutivos',
        description:
          'Una sola versión de los números para la reunión de los lunes, actualizada sola y sin hojas de Excel que se contradicen.',
        bullets: [
          'Tableau, Power BI, Looker Studio',
          'KPIs definidos con su equipo',
          'Alertas cuando un número se sale de rango',
        ],
      },
      {
        title: 'IA para empresas',
        description:
          'Implementamos modelos de lenguaje sobre sus datos y procesos: desde un piloto en semanas hasta flujos de trabajo en producción.',
        bullets: [
          'Preguntas en español que se responden con sus números',
          'Asistentes internos sobre sus documentos y políticas',
          'Clasificación de correos, tickets y reseñas',
          'Reportes y resúmenes que se escriben solos',
        ],
      },
      {
        title: 'Procesos, riesgo y cumplimiento',
        description:
          'Documentación de procesos y controles con el nivel que exige la banca internacional.',
        bullets: [
          'Mapeo de procesos y manuales de control',
          'Revisión de código analítico (SQL, SAS, Python)',
          'Experiencia en antilavado (AML) y verificación de clientes',
        ],
      },
    ],
  },
  funnel: {
    heading: 'De 1.000 visitas, ¿cuántas terminan en venta?',
    intro:
      'Medimos cada paso entre la visita y la compra, para que sepa en cuál se pierden sus clientes.',
    ariaLabel: 'Embudo de ejemplo',
    steps: [
      {
        label: 'Visitas a la web',
        code: 'page_view',
        widthPercent: 100,
        value: '1.000',
      },
      {
        label: 'Ven un producto',
        code: 'view_item',
        widthPercent: 86,
        value: '380',
      },
      {
        label: 'Escriben o llaman',
        code: 'click_whatsapp',
        widthPercent: 65,
        value: '90',
      },
      {
        label: 'Cotizan o agendan',
        code: 'generate_lead',
        widthPercent: 51,
        value: '35',
      },
      {
        label: 'Compran',
        code: 'purchase',
        widthPercent: 36,
        value: '12',
        isLast: true,
      },
    ],
    note: 'Cifras de ejemplo en escala logarítmica. En su tablero verá las suyas, separadas por canal: Google, Instagram, TikTok o anuncios.',
  },
  process: {
    heading: 'Cómo trabajamos',
    intro:
      'Cinco semanas hasta su primer tablero con datos reales, con avances cada semana.',
    steps: [
      {
        title: 'Diagnóstico gratis',
        description:
          'Revisamos su web, redes y perfil de Google, y le decimos qué mediríamos primero.',
        when: '15 minutos',
      },
      {
        title: 'Propuesta',
        description:
          'Una página con qué haremos, cuánto cuesta y en qué semanas.',
        when: 'En 48 horas',
      },
      {
        title: 'Implementación',
        description:
          'Medición, mejoras a la web y perfil de Google, sin interrumpir su sitio.',
        when: 'Semanas 1 a 5',
      },
      {
        title: 'Reporte mensual',
        description: 'Qué funcionó, qué no y qué ajustar el próximo mes.',
        when: 'Cada mes',
      },
    ],
  },
  pricing: {
    id: 'precios',
    heading: 'Cómo puede trabajar con nosotros',
    intro:
      'Cada negocio necesita algo distinto, así que no tenemos paquetes cerrados. Empezamos con un diagnóstico gratis y le enviamos una propuesta con precio fijo en 48 horas.',
    rows: [
      {
        title: 'Proyecto',
        description:
          'Un objetivo claro con fecha de entrega: instalar la medición, construir un almacén de datos, armar un tablero ejecutivo o mejorar su web.',
        bullets: [
          'Precio fijo, acordado antes de empezar',
          'Avances cada semana',
        ],
      },
      {
        title: 'Acompañamiento mensual',
        description:
          'Después del proyecto, seguimos midiendo, reportando y ajustando con usted cada mes.',
        bullets: ['Reporte mensual de resultados', 'Sin plazo mínimo'],
      },
      {
        title: 'Líder de datos por horas',
        description:
          'Para empresas que necesitan criterio senior en datos sin contratar a alguien de tiempo completo.',
        bullets: [
          'Bolsa de horas al mes',
          'Estrategia, equipo y proveedores',
        ],
      },
    ],
    note: 'Cotizamos en dólares o colones. Para nuestros primeros clientes tenemos condiciones de cliente fundador.',
  },
  about: {
    heading: 'Rigor de empresa global, para su negocio',
    paragraphs: [
      'Signum & Co. fue fundada en Costa Rica por Kevin Arroyo, con más de doce años liderando datos, analítica e inteligencia de ingresos en empresas globales de software, banca, consumo masivo y publicidad.',
      'Ha construido la inteligencia de ingresos de una multinacional de software, documentado controles de cumplimiento para uno de los bancos más grandes del mundo, ordenado datos maestros de cadena de suministro para un líder global de alimentos y liderado analítica de marketing en una de las principales redes de publicidad del mundo.',
      'En Costa Rica, ha trabajado con banca y retail nacional, así que conoce cómo opera el negocio local.',
    ],
    latinNotePrefix: 'El nombre viene del latín: ',
    latinWord: 'signum',
    latinNoteSuffix: ' es señal o evidencia. Es lo que buscamos en sus datos.',
    facts: [
      {
        term: '12+',
        description: 'años en datos y analítica',
      },
      {
        term: '5',
        description:
          'industrias: software, banca, alimentos, publicidad y retail',
      },
      {
        term: 'De punta a punta',
        description:
          'del dato crudo en la nube a la decisión en la junta directiva',
      },
      {
        term: 'ES · EN',
        description:
          'trabajo en español e inglés, horario compatible con EE. UU.',
      },
    ],
    stackHeading: 'Herramientas con las que trabajamos',
    stack: [
      {
        category: 'Nube y datos',
        tools: 'Snowflake · BigQuery · Databricks · AWS · SQL · Python',
      },
      {
        category: 'Tableros',
        tools: 'Tableau · Power BI · Looker Studio',
      },
      {
        category: 'Marketing y medición',
        tools: 'Google Analytics 4 · Tag Manager · Google Business · Meta',
      },
      {
        category: 'IA y automatización',
        tools: 'Modelos de lenguaje (LLM) aplicados a análisis y reportes',
      },
      {
        category: 'Gestión',
        tools:
          'Scrum · modelado dimensional · documentación de procesos y controles',
      },
    ],
    certifications:
      'Certificado en Databricks Data Engineering, AWS Cloud, Tableau y Scrum Master.',
  },
  contact: {
    id: 'contacto',
    heading: 'Empiece con un diagnóstico gratis de 15 minutos',
    intro:
      'Cuéntenos de su negocio y elija cómo prefiere escribirnos. El mensaje sale listo; solo tiene que enviarlo. Respondemos el mismo día hábil.',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'Correo',
    copyButton: 'Copiar',
    copiedButton: 'Copiado',
    form: {
      nameLabel: 'Su nombre',
      bizLabel: 'Negocio o empresa',
      webLabel: 'Sitio web o Instagram',
      webPlaceholder: '@sunegocio',
      needLabel: '¿Qué le gustaría saber o resolver?',
      optionalLabel: '(opcional)',
      previewLabel: 'Así se verá su mensaje',
      sendWhatsapp: 'Enviar por WhatsApp',
      sendEmail: 'Enviar por correo',
      hint: 'Al tocar un botón se abre WhatsApp o su correo con el mensaje escrito. Nada se envía hasta que usted lo confirme.',
      msgGreeting: 'Hola, quiero un diagnóstico gratis.',
      msgNamePrefix: 'Nombre: ',
      msgBizPrefix: 'Negocio: ',
      msgWebPrefix: 'Web o Instagram: ',
      msgNeedPrefix: 'Me interesa: ',
      mailSubjectBase: 'Diagnóstico gratis',
    },
  },
  footer: {
    location: 'Signum & Co., San José, Costa Rica',
    copyright: '© 2026',
  },
};

