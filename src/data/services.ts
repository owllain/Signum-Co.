import type { Locale } from './site';
import type { BrandImageKind } from './brand-images';

export interface DevelopmentService {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: 'workflow' | 'app' | 'integration' | 'review';
  image: BrandImageKind;
  tag: string;
}

/** Commercial scope from PROPUESTA_SERVICIOS_Y_EQUIPO.md, not client claims. */
export const developmentServices: Record<Locale, DevelopmentService[]> = {
  es: [
    {
      id: 'automation',
      title: 'Microsoft 365 & Automatización de procesos',
      icon: 'workflow',
      image: 'automation',
      tag: 'Power Automate · RPA Desktop · Power Apps · SPFx',
      description:
        'Orquestación de solicitudes, aprobaciones, bots de escritorio (Power Automate Desktop), Power Apps e intranets documentales en SharePoint SPFx.',
      deliverables: [
        'Flujos en Power Automate y bots RPA con manejo de excepciones',
        'Aplicaciones operativas en Power Apps y componentes SharePoint SPFx',
        'Pruebas operativas, control de estados y transferencia al equipo',
      ],
    },
    {
      id: 'applications',
      title: 'Desarrollo de Aplicaciones (.NET) & Sitios Web',
      icon: 'app',
      image: 'applications',
      tag: '.NET · C# · React · Astro · SQL Server',
      description:
        'Aplicaciones empresariales a medida en .NET y React, portales web de alto rendimiento, expedientes digitales y herramientas internas con permisos por rol.',
      deliverables: [
        'Prototipo interactivo, arquitectura en .NET/React y alcance funcional',
        'Modelo de datos en SQL Server / PostgreSQL y roles de seguridad (RBAC)',
        'Código fuente documentado, versionado y mantenible',
      ],
    },
    {
      id: 'integrations',
      title: 'Dashboards (Dataverse & Power BI) e Integraciones',
      icon: 'integration',
      image: 'integrations',
      tag: 'Dataverse · Power BI · REST APIs · Conectores',
      description:
        'Conectamos sistemas dispersos (ERP, CRM, bases SQL) y modelamos datos gobernados en Dataverse y Power BI para eliminar pasos manuales.',
      deliverables: [
        'Modelado en Dataverse / SQL y tableros ejecutivos en Power BI',
        'Puentes API con validación automática, control de errores y reintentos',
        'Pruebas de extremo a extremo y plan de transición gradual',
      ],
    },
    {
      id: 'technical-review',
      title: 'Revisión técnica y control de procesos',
      icon: 'review',
      image: 'technical-review',
      tag: 'Auditoría .NET / Power Platform / BI · QA',
      description:
        'Examinamos aplicaciones .NET, flujos de Power Platform, modelos de Power BI y consistencia de datos. Priorizamos mejoras con hallazgos verificables.',
      deliverables: [
        'Alcance y matriz de criterios de revisión técnica',
        'Informe de hallazgos con evidencia trazable',
        'Hoja de ruta de mejoras priorizada por impacto',
      ],
    },
  ],
  en: [
    {
      id: 'automation',
      title: 'Microsoft 365 & Process Automation',
      icon: 'workflow',
      image: 'automation',
      tag: 'Power Automate · Desktop RPA · Power Apps · SPFx',
      description:
        'Request orchestration, multi-stage approvals, desktop bots (Power Automate Desktop), Power Apps and SharePoint SPFx document portals.',
      deliverables: [
        'Power Automate cloud flows and RPA bots with exception handling',
        'Operational Power Apps and custom SharePoint SPFx web parts',
        'Operational testing, status tracking and team handover',
      ],
    },
    {
      id: 'applications',
      title: 'Application (.NET) & Website Development',
      icon: 'app',
      image: 'applications',
      tag: '.NET · C# · React · Astro · SQL Server',
      description:
        'Custom enterprise applications in .NET and React, high-performance web portals, digital records and internal tools with role-based permissions.',
      deliverables: [
        'Interactive prototype, .NET/React architecture and functional scope',
        'SQL Server / PostgreSQL data model and security roles (RBAC)',
        'Documented, versioned and maintainable deployment',
      ],
    },
    {
      id: 'integrations',
      title: 'Dashboards (Dataverse & Power BI) & Integrations',
      icon: 'integration',
      image: 'integrations',
      tag: 'Dataverse · Power BI · REST APIs · Connectors',
      description:
        'Connect scattered platforms (ERP, CRM, SQL databases) and structure governed models in Dataverse and Power BI to eliminate manual steps.',
      deliverables: [
        'Dataverse / SQL data modeling and executive Power BI dashboards',
        'API bridges with automated validation, error handling and retries',
        'End-to-end testing and staged transition plan',
      ],
    },
    {
      id: 'technical-review',
      title: 'Technical and process review',
      icon: 'review',
      image: 'technical-review',
      tag: '.NET / Power Platform / BI Audit · QA',
      description:
        'Inspect .NET applications, Power Platform workflows, Power BI models and data consistency. Prioritize improvements with verifiable findings.',
      deliverables: [
        'Review scope and technical criteria matrix',
        'Findings report with traceable evidence',
        'Impact-prioritized improvement roadmap',
      ],
    },
  ],
};

export const team = {
  kevin: {
    name: 'Kevin Arroyo',
    initials: 'KA',
    linkedin: 'https://www.linkedin.com/in/kevinarroyo271293/',
  },
  enrique: {
    name: 'Enrique Cascante',
    initials: 'EC',
    linkedin: 'https://www.linkedin.com/in/enrique-cascante/',
  },
};
