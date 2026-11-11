import React from 'react';
import { TabsWithIcons, Avatar, type TabItemData } from './FlowbitePrimitives';
import { SmartPicture } from './SmartPicture';
import type { BrandImageKind } from '../../data/brand-images';
import type { Locale } from '../../data/site';

interface SpecGroup {
  heading: string;
  items: string[];
}

interface DeepDiveTabConfig {
  id: string;
  title: string;
  badge: string;
  headline: string;
  lead: string;
  ownerName: string;
  ownerRole: string;
  ownerAvatar: string;
  imageKind: BrandImageKind;
  topicId: string;
  stackPills: string[];
  specs: SpecGroup[];
  icon: React.ReactNode;
}

export interface ServiceDeepDiveTabsProps {
  locale: Locale;
  contactPath: string;
  defaultTabId?: string;
}

const Icons = {
  web: (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
      <path
        fillRule="evenodd"
        d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 0 0 4.083 9ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4Zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0 1 15.917 9h-1.946Zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556Zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 0 1-2.783 4.118Zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 0 0 2.783 4.118Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  dotnet: (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
      <path
        fillRule="evenodd"
        d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm3.293 1.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L7.586 10 5.293 7.707a1 1 0 0 1 0-1.414ZM11 12a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  m365: (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
      <path d="M5 4a1 1 0 0 0-2 0v7.268a2 2 0 0 0 0 3.464V16a1 1 0 1 0 2 0v-1.268a2 2 0 0 0 0-3.464V4ZM11 4a1 1 0 1 0-2 0v1.268a2 2 0 0 0 0 3.464V16a1 1 0 1 0 2 0V8.732a2 2 0 0 0 0-3.464V4ZM16 3a1 1 0 0 1 1 1v7.268a2 2 0 0 1 0 3.464V16a1 1 0 1 1-2 0v-1.268a2 2 0 0 1 0-3.464V4a1 1 0 0 1 1-1Z" />
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
      <path d="M3 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm0 8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4Zm8-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4Zm0 8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4Z" />
    </svg>
  ),
  integrations: (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
      <path d="M9 2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2H9Z" />
      <path
        fillRule="evenodd"
        d="M4 5a2 2 0 0 1 2-2 3 3 0 0 0 3 3h2a3 3 0 0 0 3-3 2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Zm3 4a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2H7Zm3 0a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2h-3Zm-3 4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H7Zm3 0a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  review: (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
      <path
        fillRule="evenodd"
        d="M10 1.944A11.954 11.954 0 0 1 2.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0 1 10 1.944ZM13.707 8.707a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

export default function ServiceDeepDiveTabs({
  locale,
  contactPath,
  defaultTabId = 'dotnet-apps',
}: ServiceDeepDiveTabsProps) {
  const es = locale === 'es';

  const configs: DeepDiveTabConfig[] = es
    ? [
        {
          id: 'web-dev',
          title: 'Sitios Web & Portales',
          badge: 'Astro · React',
          headline:
            'Desarrollo de sitios web corporativos, portales digitales y experiencias B2B de alto rendimiento',
          lead:
            'Construimos sitios modernos con arquitectura de islas (Astro + React + TypeScript), tiempos de carga instantáneos, SEO técnico estructurado y analítica comercial lista desde el primer día.',
          ownerName: 'Enrique Cascante & Kevin Arroyo',
          ownerRole: 'Arquitectura Web, SEO Técnico & Analítica GA4/GTM',
          ownerAvatar: '/images/avatar-enrique.webp',
          imageKind: 'systems',
          topicId: 'service-2',
          icon: Icons.web,
          stackPills: [
            'Astro 5 + React 19',
            'TypeScript & Tailwind CSS',
            'WebP + LQIP Skeletons',
            'Schema.org & hreflang',
            'GA4 & Google Tag Manager',
          ],
          specs: [
            {
              heading: 'Qué construimos',
              items: [
                'Sitios corporativos bilingües y portales de servicios con arquitectura rápida sin recargas pesadas.',
                'Landing pages de conversión conectadas a CRM, WhatsApp y formularios con validación.',
                'Optimización de Core Web Vitals, accesibilidad WCAG AA y empaquetado de activos en WebP.',
              ],
            },
            {
              heading: 'Entregables verificables',
              items: [
                'Código fuente limpio y versionado en Git con despliegue automatizado.',
                'Instrumentación de eventos clave (clics, formularios, embudos) en GA4 y GTM.',
                'Documentación de mantenimiento y autonomía para el equipo.',
              ],
            },
          ],
        },
        {
          id: 'dotnet-apps',
          title: 'Apps Empresariales (.NET)',
          badge: '.NET · C# · SQL',
          headline:
            'Desarrollo de aplicaciones a medida en .NET, React y SQL Server adaptadas a sus reglas de negocio',
          lead:
            'Cuando el software comercial no se adapta a su operación, diseñamos y construimos sistemas modulares, expedientes digitales y aplicaciones internas robustas, seguras y escalables.',
          ownerName: 'Enrique Cascante',
          ownerRole: 'Líder de Ingeniería · .NET, C#, React & Arquitectura SQL',
          ownerAvatar: '/images/avatar-enrique.webp',
          imageKind: 'applications',
          topicId: 'applications',
          icon: Icons.dotnet,
          stackPills: [
            '.NET 8 / C# / ASP.NET Core',
            'Entity Framework & Web API',
            'React & TypeScript',
            'SQL Server / PostgreSQL',
            'Entra ID (Azure AD) & RBAC',
          ],
          specs: [
            {
              heading: 'Soluciones que desarrollamos',
              items: [
                'Sistemas de gestión operativa, control de expedientes, aprobaciones y seguimiento de casos.',
                'Aplicaciones transaccionales con roles, permisos por perfil y bitácora completa de auditoría.',
                'Modernización por etapas de sistemas heredados hacia arquitecturas web en .NET y React.',
              ],
            },
            {
              heading: 'Estándar de ingeniería',
              items: [
                'Prototipo funcional previo y modelo relacional normalizado en SQL Server o PostgreSQL.',
                'APIs RESTful documentadas (OpenAPI/Swagger) con validación de entradas y manejo de errores.',
                'Pruebas integrales, manual técnico y transferencia completa del repositorio.',
              ],
            },
          ],
        },
        {
          id: 'm365-power',
          title: 'Microsoft 365 & Power Platform',
          badge: 'Power Automate · SPFx',
          headline:
            'Automatización e intranets sobre Microsoft 365: Power Automate, RPA Desktop, Power Apps y SharePoint SPFx',
          lead:
            'Aprovechamos al máximo las licencias de Microsoft 365 de su organización para eliminar tareas manuales, orquestar aprobaciones y centralizar documentos con trazabilidad total.',
          ownerName: 'Enrique Cascante',
          ownerRole: 'Especialista en Power Platform, RPA & SharePoint SPFx',
          ownerAvatar: '/images/avatar-enrique.webp',
          imageKind: 'automation',
          topicId: 'automation',
          icon: Icons.m365,
          stackPills: [
            'Power Automate (Cloud Flows)',
            'Power Automate Desktop (RPA)',
            'Power Apps (Canvas & Model-Driven)',
            'SharePoint Online & SPFx',
            'Microsoft Lists & Teams Approvals',
          ],
          specs: [
            {
              heading: 'Capacidades en el ecosistema Microsoft',
              items: [
                'Power Automate & Power Automate Desktop (RPA): Bots para tareas repetitivas en sistemas legados, lectura de documentos/correos y aprobaciones multinivel.',
                'Power Apps: Aplicaciones ágiles conectadas a Dataverse, SharePoint o SQL para personal en campo y oficina.',
                'SharePoint & SPFx (SharePoint Framework): Portales documentales estructurados y componentes web en React/TypeScript.',
              ],
            },
            {
              heading: 'Control y gobernanza',
              items: [
                'Manejo de excepciones, reintentos automáticos y alertas inmediatas ante fallos de flujo.',
                'Permisos por biblioteca/rol y registro histórico de quién aprobó cada etapa y cuándo.',
                'Capacitación práctica para que su equipo administre el entorno sin bloqueos.',
              ],
            },
          ],
        },
        {
          id: 'dataverse-bi',
          title: 'Dashboards (Dataverse & Power BI)',
          badge: 'Power BI · Dataverse',
          headline:
            'Dashboards de datos empresariales y modelos gobernados en Dataverse, Power BI, SQL y Cloud Warehouses',
          lead:
            'Transformamos datos dispersos en una capa semántica confiable para dirección general, finanzas, ventas y operaciones: una sola versión de la verdad sin hojas de cálculo contradictorias.',
          ownerName: 'Kevin Arroyo',
          ownerRole: 'Socio Fundador · Ingeniería de Datos, BI & RevOps',
          ownerAvatar: '/images/avatar-kevin.webp',
          imageKind: 'data',
          topicId: 'enterprise-2',
          icon: Icons.dashboard,
          stackPills: [
            'Power BI & DAX Avanzado',
            'Microsoft Dataverse & Fabric',
            'Tableau & Looker Studio',
            'Snowflake / BigQuery / Databricks',
            'SQL Server & Python ETL',
          ],
          specs: [
            {
              heading: 'Arquitectura analítica empresarial',
              items: [
                'Modelado dimensional (esquema estrella) sobre Dataverse, SQL Server o almacenes en la nube.',
                'Tableros ejecutivos en Power BI y Tableau con métricas estandarizadas de ingresos, margen, inventario y SLA.',
                'Seguridad a nivel de fila (RLS) para que cada gerencia o sucursal vea exactamente lo que le corresponde.',
              ],
            },
            {
              heading: 'Gobernanza y confiabilidad',
              items: [
                'Diccionario de KPIs documentado y conciliado con finanzas y operación.',
                'Actualizaciones programadas con controles automáticos de calidad de datos.',
                'Diseño visual limpio enfocado en decisiones ejecutivas y detección temprana de desviaciones.',
              ],
            },
          ],
        },
        {
          id: 'integrations-ai',
          title: 'Integraciones & IA Aplicada',
          badge: 'APIs · Python · ML',
          headline:
            'Integración entre sistemas (ERP, CRM, APIs) y modelos predictivos de Inteligencia Artificial',
          lead:
            'Conectamos sus plataformas para evitar la doble digitación y aplicamos modelos estadísticos y de Machine Learning sobre datos limpios para anticipar demanda, rotación y oportunidades.',
          ownerName: 'Kevin Arroyo & Enrique Cascante',
          ownerRole: 'Integración de Sistemas, Pipelines de Datos & IA',
          ownerAvatar: '/images/avatar-kevin.webp',
          imageKind: 'integrations',
          topicId: 'integrations',
          icon: Icons.integrations,
          stackPills: [
            'REST APIs & Webhooks',
            'Python (Pandas / Scikit-learn)',
            'Sincronización ERP ↔ CRM',
            'Forecasting & Churn Models',
            'Colas de Eventos & Reintentos',
          ],
          specs: [
            {
              heading: 'Integraciones y automatización de datos',
              items: [
                'Puentes bidireccionales entre CRM (HubSpot, Salesforce), ERP (SAP, Softland, Exactus) y bases SQL.',
                'Validación de esquemas, deduplicación automática y bitácora de sincronización.',
                'Modelos de pronóstico de ventas, propensión de compra y detección de anomalías operativas.',
              ],
            },
            {
              heading: 'Resultados tangibles',
              items: [
                'Eliminación de exportaciones manuales en CSV/Excel entre departamentos.',
                'Modelos explicables integrados directamente en los tableros o flujos de trabajo.',
                'Contrato de integración documentado y pruebas de extremo a extremo.',
              ],
            },
          ],
        },
        {
          id: 'tech-review',
          title: 'Revisión Técnica & QA',
          badge: 'Auditoría · Evidencia',
          headline:
            'Revisión técnica de aplicaciones, flujos y calidad de datos con hallazgos verificables',
          lead:
            'Evaluamos plataformas existentes (.NET, Power Platform, bases SQL o modelos de Power BI) para identificar cuellos de botella, riesgos de seguridad y errores de consistencia.',
          ownerName: 'Enrique Cascante & Kevin Arroyo',
          ownerRole: 'Auditoría Técnica de Software, Procesos y Datos',
          ownerAvatar: '/images/avatar-enrique.webp',
          imageKind: 'technical-review',
          topicId: 'technical-review',
          icon: Icons.review,
          stackPills: [
            'Auditoría de Código .NET / SQL',
            'Revisión de Flujos Power Platform',
            'Validación de Modelos DAX / BI',
            'Matriz de Controles y Riesgos',
            'Hoja de Ruta Priorizada',
          ],
          specs: [
            {
              heading: 'Qué inspeccionamos',
              items: [
                'Arquitectura de código, consultas SQL lentas, permisos expuestos y acoplamiento técnico.',
                'Flujos de Power Automate o integraciones que fallan silenciosamente o carecen de bitácora.',
                'Discrepancias entre cifras de reportes ejecutivos y las tablas transaccionales de origen.',
              ],
            },
            {
              heading: 'Entregables de la revisión',
              items: [
                'Matriz de criterios evaluados con evidencia técnica reproducible.',
                'Clasificación de hallazgos por severidad e impacto en el negocio.',
                'Plan de remediación por etapas listo para ejecutar.',
              ],
            },
          ],
        },
      ]
    : [
        {
          id: 'web-dev',
          title: 'Websites & Portals',
          badge: 'Astro · React',
          headline:
            'High-performance corporate websites, digital portals, and B2B web experiences',
          lead:
            'We build modern web platforms with island architecture (Astro + React + TypeScript), instant load times, structured technical SEO, and commercial analytics ready from day one.',
          ownerName: 'Enrique Cascante & Kevin Arroyo',
          ownerRole: 'Web Architecture, Technical SEO & GA4/GTM Analytics',
          ownerAvatar: '/images/avatar-enrique.webp',
          imageKind: 'systems',
          topicId: 'service-2',
          icon: Icons.web,
          stackPills: [
            'Astro 5 + React 19',
            'TypeScript & Tailwind CSS',
            'WebP + LQIP Skeletons',
            'Schema.org & hreflang',
            'GA4 & Google Tag Manager',
          ],
          specs: [
            {
              heading: 'What we build',
              items: [
                'Bilingual corporate sites and service portals with fast architecture and zero heavy reloads.',
                'Conversion-focused landing pages connected to CRM, WhatsApp, and validated forms.',
                'Core Web Vitals optimization, WCAG AA accessibility, and packaged WebP assets.',
              ],
            },
            {
              heading: 'Verifiable deliverables',
              items: [
                'Clean, Git-versioned source code with automated deployment.',
                'Key event instrumentation (clicks, forms, funnels) in GA4 and GTM.',
                'Maintenance documentation and full team autonomy.',
              ],
            },
          ],
        },
        {
          id: 'dotnet-apps',
          title: 'Business Apps (.NET)',
          badge: '.NET · C# · SQL',
          headline:
            'Custom application development in .NET, React, and SQL Server tailored to your business rules',
          lead:
            'When off-the-shelf software falls short, we design and build modular systems, digital records, and internal applications that are secure, maintainable, and scalable.',
          ownerName: 'Enrique Cascante',
          ownerRole: 'Engineering Lead · .NET, C#, React & SQL Architecture',
          ownerAvatar: '/images/avatar-enrique.webp',
          imageKind: 'applications',
          topicId: 'applications',
          icon: Icons.dotnet,
          stackPills: [
            '.NET 8 / C# / ASP.NET Core',
            'Entity Framework & Web API',
            'React & TypeScript',
            'SQL Server / PostgreSQL',
            'Entra ID (Azure AD) & RBAC',
          ],
          specs: [
            {
              heading: 'Solutions we engineer',
              items: [
                'Operational management systems, digital case files, approval engines, and tracking portals.',
                'Transactional applications with role-based permissions and complete audit trails.',
                'Staged modernization of legacy tools into modern .NET and React web architectures.',
              ],
            },
            {
              heading: 'Engineering standard',
              items: [
                'Interactive functional prototype and normalized relational model in SQL Server or PostgreSQL.',
                'Documented RESTful APIs (OpenAPI/Swagger) with input validation and error handling.',
                'End-to-end testing, technical runbook, and full repository handoff.',
              ],
            },
          ],
        },
        {
          id: 'm365-power',
          title: 'Microsoft 365 & Power Platform',
          badge: 'Power Automate · SPFx',
          headline:
            'Workflow automation and intranets on Microsoft 365: Power Automate, Desktop RPA, Power Apps & SharePoint SPFx',
          lead:
            'We maximize your existing Microsoft 365 licensing to eliminate repetitive manual work, orchestrate approvals, and structure document management with full traceability.',
          ownerName: 'Enrique Cascante',
          ownerRole: 'Power Platform, RPA & SharePoint SPFx Specialist',
          ownerAvatar: '/images/avatar-enrique.webp',
          imageKind: 'automation',
          topicId: 'automation',
          icon: Icons.m365,
          stackPills: [
            'Power Automate (Cloud Flows)',
            'Power Automate Desktop (RPA)',
            'Power Apps (Canvas & Model-Driven)',
            'SharePoint Online & SPFx',
            'Microsoft Lists & Teams Approvals',
          ],
          specs: [
            {
              heading: 'Microsoft ecosystem capabilities',
              items: [
                'Power Automate & Power Automate Desktop (RPA): Bots for repetitive tasks across legacy systems, document/email parsing, and multi-stage approvals.',
                'Power Apps: Agile operational apps connected to Dataverse, SharePoint, or SQL for field and back-office teams.',
                'SharePoint & SPFx (SharePoint Framework): Structured document portals and custom web parts built with React/TypeScript.',
              ],
            },
            {
              heading: 'Control & governance',
              items: [
                'Exception handling, automated retries, and instant failure notifications.',
                'Role-based library permissions and full historical audit logs of every approval step.',
                'Hands-on training so your internal team can administer the environment independently.',
              ],
            },
          ],
        },
        {
          id: 'dataverse-bi',
          title: 'Dashboards (Dataverse & Power BI)',
          badge: 'Power BI · Dataverse',
          headline:
            'Enterprise data dashboards and governed semantic models in Dataverse, Power BI, SQL, and Cloud Warehouses',
          lead:
            'We turn scattered data into a reliable semantic layer for executive leadership, finance, sales, and operations: one version of the truth without conflicting spreadsheets.',
          ownerName: 'Kevin Arroyo',
          ownerRole: 'Founding Partner · Data Engineering, BI & RevOps',
          ownerAvatar: '/images/avatar-kevin.webp',
          imageKind: 'data',
          topicId: 'enterprise-2',
          icon: Icons.dashboard,
          stackPills: [
            'Power BI & Advanced DAX',
            'Microsoft Dataverse & Fabric',
            'Tableau & Looker Studio',
            'Snowflake / BigQuery / Databricks',
            'SQL Server & Python ETL',
          ],
          specs: [
            {
              heading: 'Enterprise analytics architecture',
              items: [
                'Dimensional modeling (star schema) on Dataverse, SQL Server, or cloud data warehouses.',
                'Executive dashboards in Power BI and Tableau with governed KPIs for revenue, margin, inventory, and SLAs.',
                'Row-Level Security (RLS) so each department or region sees its authorized slice of data.',
              ],
            },
            {
              heading: 'Governance & reliability',
              items: [
                'Documented KPI dictionary reconciled with finance and operations.',
                'Scheduled refreshes with automated data quality checks.',
                'Clean visual hierarchy built for fast executive decision-making.',
              ],
            },
          ],
        },
        {
          id: 'integrations-ai',
          title: 'Integrations & Applied AI',
          badge: 'APIs · Python · ML',
          headline:
            'System integrations (ERP, CRM, APIs) and predictive Artificial Intelligence models',
          lead:
            'We connect your platforms to eliminate double data entry and apply statistical and Machine Learning models over clean data to forecast demand, churn, and revenue opportunities.',
          ownerName: 'Kevin Arroyo & Enrique Cascante',
          ownerRole: 'System Integrations, Data Pipelines & Applied AI',
          ownerAvatar: '/images/avatar-kevin.webp',
          imageKind: 'integrations',
          topicId: 'integrations',
          icon: Icons.integrations,
          stackPills: [
            'REST APIs & Webhooks',
            'Python (Pandas / Scikit-learn)',
            'ERP ↔ CRM Synchronization',
            'Forecasting & Churn Models',
            'Event Queues & Retries',
          ],
          specs: [
            {
              heading: 'Data integration & automation',
              items: [
                'Two-way bridges across CRM (HubSpot, Salesforce), ERP (SAP, Softland, Exactus), and SQL databases.',
                'Schema validation, automated deduplication, and synchronization logs.',
                'Sales forecasting, propensity scoring, and operational anomaly detection models.',
              ],
            },
            {
              heading: 'Tangible outcomes',
              items: [
                'Elimination of manual CSV/Excel exports between departments.',
                'Explainable models embedded directly into dashboards or operational workflows.',
                'Documented integration contract and end-to-end validation.',
              ],
            },
          ],
        },
        {
          id: 'tech-review',
          title: 'Technical Review & QA',
          badge: 'Audit · Evidence',
          headline:
            'Technical review of applications, workflows, and data quality with verifiable findings',
          lead:
            'We evaluate existing platforms (.NET apps, Power Platform flows, SQL databases, or Power BI models) to uncover bottlenecks, security gaps, and data inconsistencies.',
          ownerName: 'Enrique Cascante & Kevin Arroyo',
          ownerRole: 'Software, Workflow & Data Technical Auditing',
          ownerAvatar: '/images/avatar-enrique.webp',
          imageKind: 'technical-review',
          topicId: 'technical-review',
          icon: Icons.review,
          stackPills: [
            '.NET / SQL Code Audit',
            'Power Platform Flow Review',
            'DAX / BI Model Validation',
            'Risk & Control Matrix',
            'Prioritized Remediation Roadmap',
          ],
          specs: [
            {
              heading: 'What we inspect',
              items: [
                'Code architecture, slow SQL queries, exposed permissions, and technical debt.',
                'Power Automate flows or integrations that fail silently or lack audit logs.',
                'Discrepancies between executive report figures and source transactional tables.',
              ],
            },
            {
              heading: 'Review deliverables',
              items: [
                'Evaluation criteria matrix backed by reproducible technical evidence.',
                'Findings classified by severity and operational impact.',
                'Staged remediation roadmap ready for execution.',
              ],
            },
          ],
        },
      ];

  const tabItems: TabItemData[] = configs.map((cfg) => ({
    id: cfg.id,
    title: cfg.title,
    badge: cfg.badge,
    icon: cfg.icon,
    content: (
      <div className="fb-deepdive-card">
        <div className="fb-deepdive-main">
          <div className="fb-deepdive-copy">
            <div className="fb-deepdive-pills">
              {cfg.stackPills.map((pill) => (
                <span key={pill} className="fb-stack-pill">
                  {pill}
                </span>
              ))}
            </div>
            <h3>{cfg.headline}</h3>
            <p className="fb-deepdive-lead">{cfg.lead}</p>

            <div className="fb-deepdive-specs">
              {cfg.specs.map((group) => (
                <div key={group.heading} className="fb-spec-box">
                  <h4>{group.heading}</h4>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width="15"
                          height="15"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="fb-deepdive-footer">
              <Avatar
                img={cfg.ownerAvatar}
                alt={cfg.ownerName}
                rounded
                size="sm"
              >
                <div className="fb-avatar-meta">
                  <div className="fb-avatar-name">{cfg.ownerName}</div>
                  <div className="fb-avatar-sub">{cfg.ownerRole}</div>
                </div>
              </Avatar>

              <a
                className="btn btn-gold btn-sm"
                data-contact-topic={cfg.topicId}
                href={`${contactPath}?topic=${cfg.topicId}#contacto`}
              >
                <span>
                  {es
                    ? 'Solicitar diagnóstico de esta especialidad'
                    : 'Request assessment for this specialty'}
                </span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="fb-deepdive-visual">
            <SmartPicture
              kind={cfg.imageKind}
              locale={locale}
              showBadge
              sizes="(max-width: 900px) 100vw, 420px"
            />
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <TabsWithIcons
      ariaLabel={
        es
          ? 'Especialidades técnicas en detalle'
          : 'Technical specialties in detail'
      }
      variant="underline"
      items={tabItems}
      defaultActiveId={defaultTabId}
    />
  );
}
