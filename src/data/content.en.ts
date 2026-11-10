import type { SiteContent } from './site';

export const contentEn: SiteContent = {
  locale: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  alternateLocale: 'es',
  alternatePath: '/es/',
  canonicalPath: '/en/',
  meta: {
    title: 'Signum & Co. — Data, Marketing, Technology and AI Consultancy',
    description:
      'Signum & Co. Costa Rican data, marketing, technology and AI consultancy. We measure what works, grow your marketing and implement AI that saves you hours of work.',
    skipToContent: 'Skip to main content',
  },
  nav: {
    homeHref: '#inicio',
    items: [
      { id: 'servicios', href: '#servicios', label: 'Services' },
      { id: 'empresas', href: '#empresas', label: 'Enterprise' },
      { id: 'precios', href: '#precios', label: 'Work with us' },
      { id: 'contacto', href: '#contacto', label: 'Contact' },
    ],
    langSwitchLabel: 'Idioma / Language',
    mobileMenuOpenLabel: 'Open navigation menu',
    mobileMenuCloseLabel: 'Close navigation menu',
  },
  hero: {
    headline: 'We show you what brings you customers, and what doesn’t.',
    lead: 'We are a Costa Rican data, marketing, technology and AI consultancy. We measure what works, grow your marketing and implement AI that saves you hours of work.',
    primaryCta: 'Get a free assessment on WhatsApp',
    secondaryCta: 'See services',
    secondaryCtaHref: '#servicios',
    whatsappDefaultText: 'Hi, I’d like a free assessment for my business.',
    chart: {
      svgTitle: 'Scattered dots resolving into a golden trend line',
      noiseLabel: 'What you see today: followers, likes, scattered visits',
      signalLabel: 'What we measure: leads that become sales',
      legendNoise: 'What you see today',
      legendSignal: 'What we measure',
      captionHint:
        'Move your cursor or finger across the chart: that’s how we organize your data. Illustration.',
      captionCode: 'utm_source=instagram&utm_medium=organico',
    },
  },
  questions: {
    heading: 'Questions most businesses can’t answer',
    items: [
      {
        quote: 'Which Instagram post brought in our last sale?',
        answer:
          'Many businesses tag their links with UTMs, but their website has nowhere to record them.',
      },
      {
        quote: 'How many calls come from Google?',
        answer:
          'Google’s business profile counts calls and directions, but almost nobody checks it.',
      },
      {
        quote: 'Does the email on our website even work?',
        answer:
          'In our reviews we find contact emails that bounce and broken forms.',
      },
    ],
  },
  services: {
    id: 'servicios',
    heading: 'What we do',
    intro:
      'We build on what you already have. We won’t propose rebuilding your website unless it needs it.',
    rows: [
      {
        title: 'Data and measurement',
        description:
          'We set up Google Analytics 4 and Tag Manager, and build you a Looker Studio dashboard that updates itself.',
        bullets: [
          'WhatsApp clicks, calls and quotes',
          'Campaigns and UTMs recorded',
          'Funnel from ad to sale',
        ],
      },
      {
        title: 'Digital marketing and social media',
        description:
          'Strategy, content and campaigns measured by customers, not likes.',
        bullets: [
          'Content strategy and calendar for Instagram, Facebook, TikTok and LinkedIn',
          'Paid campaigns on Meta and Google Ads',
          'Google profile, reviews and search engine optimization (SEO)',
          'Email marketing and customer follow-up',
        ],
      },
      {
        title: 'Technology and web',
        description:
          'Targeted fixes to your site, or a new one built to generate inquiries.',
        bullets: [
          'Size search, quote forms or online booking',
          'Readable text and large buttons on mobile',
          'Online stores and payments',
        ],
      },
      {
        title: 'AI implementation',
        description:
          'We put artificial intelligence to work in your business: it answers, replies, writes and organizes, so your team can focus on selling.',
        bullets: [
          'WhatsApp and website assistants that reply 24/7',
          'AI-assisted social content and review replies',
          'Automated quotes, bookings and repetitive tasks',
          'Training your team to use AI every day',
        ],
      },
    ],
  },
  enterprise: {
    id: 'empresas',
    heading: 'For companies: the data team you don’t have yet',
    intro:
      'For sales, marketing, finance and operations teams that need reliable answers without hiring a full department. We work by project or as your part-time head of data.',
    rows: [
      {
        title: 'Revenue intelligence',
        description:
          'Full pipeline visibility: where every opportunity comes from, which campaign created it and what will close this quarter.',
        bullets: [
          'Multi-channel marketing attribution',
          'Sales forecasting and pipeline health',
          'RevOps metrics for leadership',
        ],
      },
      {
        title: 'Data engineering',
        description:
          'A clean data warehouse where every source speaks the same language, ready for reporting and AI.',
        bullets: [
          'Snowflake, BigQuery, Databricks',
          'Dimensional modeling and SQL/Python pipelines',
          'Master data quality and governance',
        ],
      },
      {
        title: 'Executive dashboards',
        description:
          'One version of the numbers for Monday’s meeting, refreshed automatically, with no conflicting spreadsheets.',
        bullets: [
          'Tableau, Power BI, Looker Studio',
          'KPIs defined with your team',
          'Alerts when a number goes out of range',
        ],
      },
      {
        title: 'Enterprise AI',
        description:
          'We implement language models on your data and processes: from a pilot in weeks to production workflows.',
        bullets: [
          'Plain-language questions answered with your numbers',
          'Internal assistants over your documents and policies',
          'Classifying emails, tickets and reviews',
          'Reports and summaries that write themselves',
        ],
      },
      {
        title: 'Process, risk and compliance',
        description:
          'Process and control documentation to the standard international banking requires.',
        bullets: [
          'Process maps and control manuals',
          'Analytical code review (SQL, SAS, Python)',
          'AML and customer verification experience',
        ],
      },
    ],
  },
  funnel: {
    heading: 'Out of 1,000 visits, how many become a sale?',
    intro:
      'We measure every step between a visit and a purchase, so you know where customers drop off.',
    ariaLabel: 'Example funnel',
    steps: [
      {
        label: 'Website visits',
        code: 'page_view',
        widthPercent: 100,
        value: '1.000',
      },
      {
        label: 'View a product',
        code: 'view_item',
        widthPercent: 86,
        value: '380',
      },
      {
        label: 'Message or call',
        code: 'click_whatsapp',
        widthPercent: 65,
        value: '90',
      },
      {
        label: 'Quote or book',
        code: 'generate_lead',
        widthPercent: 51,
        value: '35',
      },
      {
        label: 'Buy',
        code: 'purchase',
        widthPercent: 36,
        value: '12',
        isLast: true,
      },
    ],
    note: 'Example figures on a log scale. Your dashboard shows your own, split by channel: Google, Instagram, TikTok or ads.',
  },
  process: {
    heading: 'How we work',
    intro:
      'Five weeks to your first dashboard with real data, with progress every week.',
    steps: [
      {
        title: 'Free assessment',
        description:
          'We review your website, social channels and Google profile, and tell you what we’d measure first.',
        when: '15 minutes',
      },
      {
        title: 'Proposal',
        description:
          'One page with the scope, the price and the weekly timeline.',
        when: 'Within 48 hours',
      },
      {
        title: 'Implementation',
        description:
          'Tracking, website fixes and Google profile, without taking your site down.',
        when: 'Weeks 1 to 5',
      },
      {
        title: 'Monthly report',
        description:
          'What worked, what didn’t, and what to change next month.',
        when: 'Every month',
      },
    ],
  },
  pricing: {
    id: 'precios',
    heading: 'Ways to work with us',
    intro:
      'Every business needs something different, so we don’t sell fixed packages. We start with a free assessment and send you a fixed-price proposal within 48 hours.',
    rows: [
      {
        title: 'Project',
        description:
          'A clear goal with a delivery date: set up tracking, build a data warehouse, create an executive dashboard or improve your website.',
        bullets: [
          'Fixed price, agreed before we start',
          'Weekly progress',
        ],
      },
      {
        title: 'Monthly partnership',
        description:
          'After the project, we keep measuring, reporting and adjusting with you every month.',
        bullets: ['Monthly results report', 'No minimum term'],
      },
      {
        title: 'Part-time head of data',
        description:
          'For companies that need senior data leadership without a full-time hire.',
        bullets: [
          'Monthly block of hours',
          'Strategy, team and vendors',
        ],
      },
    ],
    note: 'We quote in US dollars or Costa Rican colones. Founding-client terms are available for our first clients.',
  },
  about: {
    heading: 'Global-company rigor for your business',
    paragraphs: [
      'Signum & Co. was founded in Costa Rica by Kevin Arroyo, who has spent more than twelve years leading data, analytics and revenue intelligence at global software, banking, consumer goods and advertising companies.',
      'He has built revenue intelligence for a multinational software company, documented compliance controls for one of the world’s largest banks, organized supply-chain master data for a global food leader and led marketing analytics inside one of the world’s top advertising networks.',
      'In Costa Rica, he has worked in national banking and retail, so he knows how local businesses operate.',
    ],
    latinNotePrefix: 'The name is Latin: ',
    latinWord: 'signum',
    latinNoteSuffix: ' means sign or evidence. That is what we look for in your data.',
    facts: [
      {
        term: '12+',
        description: 'years in data and analytics',
      },
      {
        term: '5',
        description:
          'industries: software, banking, food, advertising and retail',
      },
      {
        term: 'End to end',
        description:
          'from raw cloud data to the boardroom decision',
      },
      {
        term: 'EN · ES',
        description:
          'work in English and Spanish, US-friendly hours',
      },
    ],
    stackHeading: 'Tools we work with',
    stack: [
      {
        category: 'Cloud and data',
        tools: 'Snowflake · BigQuery · Databricks · AWS · SQL · Python',
      },
      {
        category: 'Dashboards',
        tools: 'Tableau · Power BI · Looker Studio',
      },
      {
        category: 'Marketing and tracking',
        tools: 'Google Analytics 4 · Tag Manager · Google Business · Meta',
      },
      {
        category: 'AI and automation',
        tools: 'Large language models applied to analysis and reporting',
      },
      {
        category: 'Delivery',
        tools:
          'Scrum · dimensional modeling · process and control documentation',
      },
    ],
    certifications:
      'Certified in Databricks Data Engineering, AWS Cloud, Tableau and Scrum Master.',
  },
  contact: {
    id: 'contacto',
    heading: 'Start with a free 15-minute assessment',
    intro:
      'Tell us about your business and choose how you’d like to reach us. The message comes pre-written; you just send it. We reply the same business day.',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'Email',
    copyButton: 'Copy',
    copiedButton: 'Copied',
    form: {
      nameLabel: 'Your name',
      bizLabel: 'Business or company',
      webLabel: 'Website or Instagram',
      webPlaceholder: '@sunegocio',
      needLabel: 'What would you like to know or solve?',
      optionalLabel: '(optional)',
      previewLabel: 'Your message will look like this',
      sendWhatsapp: 'Send on WhatsApp',
      sendEmail: 'Send by email',
      hint: 'Each button opens WhatsApp or your email app with the message written. Nothing is sent until you confirm it.',
      msgGreeting: 'Hi, I’d like a free assessment.',
      msgNamePrefix: 'Name: ',
      msgBizPrefix: 'Business: ',
      msgWebPrefix: 'Website or Instagram: ',
      msgNeedPrefix: 'I’m interested in: ',
      mailSubjectBase: 'Free assessment',
    },
  },
  footer: {
    location: 'Signum & Co., San José, Costa Rica',
    copyright: '© 2026',
  },
};

