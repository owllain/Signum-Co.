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
  headline: string;
  lead: string;
  ownerName: string;
  ownerRole: string;
  ownerAvatar: string;
  imageKind: BrandImageKind;
  topicId: string;
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

  const configs: DeepDiveTabConfig[] = [
    {
      id: 'web-dev',
      title: 'Sitios Web & Portales',
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
  ];

  const tabItems: TabItemData[] = configs.map((cfg) => ({
    id: cfg.id,
    title: cfg.title,
    icon: cfg.icon,
    content: (
      <div className="fb-deepdive-card">
        <div className="fb-deepdive-main">
          <div className="fb-deepdive-copy">
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
