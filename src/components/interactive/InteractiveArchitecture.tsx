import { useState } from 'react';
import type { Locale } from '../../data/site';

interface InteractiveArchitectureProps {
  locale: Locale;
}

interface ArchStage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  lead: string;
  problemSolved: string;
  deliverable: string;
  stack: string[];
}

export default function InteractiveArchitecture({ locale }: InteractiveArchitectureProps) {
  const es = locale === 'es';
  const [activeIndex, setActiveIndex] = useState(1);

  const stages: ArchStage[] = es
    ? [
        {
          id: 'sources',
          step: '01',
          title: 'Fuentes y Captura',
          subtitle: 'CRM · ERP · Web · Operaciones',
          lead: 'Kevin Arroyo & Enrique Cascante',
          problemSolved:
            'Eliminamos puntos ciegos donde formularios, campañas con UTM, hojas de cálculo y sistemas internos registran datos desconectados o incompletos.',
          deliverable: 'Inventario de fuentes, trazabilidad de eventos (GA4/GTM) y contratos de captura.',
          stack: ['CRM / ERP', 'Google Tag Manager', 'SharePoint', 'Formularios Web', 'REST APIs'],
        },
        {
          id: 'engineering',
          step: '02',
          title: 'Ingeniería y Gobierno',
          subtitle: 'Integración · Calidad · Almacén',
          lead: 'Kevin Arroyo · Ingeniería de Datos',
          problemSolved:
            'Reemplazamos reportes manuales contradictorios por un modelo dimensional limpio donde ventas, finanzas y operaciones hablan el mismo idioma.',
          deliverable: 'Pipelines automatizados en SQL/Python, reglas de conciliación y diccionario de métricas.',
          stack: ['Snowflake', 'BigQuery', 'Databricks', 'SQL / Python', 'Data Governance'],
        },
        {
          id: 'automation',
          step: '03',
          title: 'Aplicaciones y Flujos',
          subtitle: 'Reglas · Aprobaciones · Puentes',
          lead: 'Enrique Cascante · Desarrollo y Automatización',
          problemSolved:
            'Conectamos los datos con la operación diaria: portales internos, aprobaciones con responsables claros y sincronización entre sistemas sin doble digitación.',
          deliverable: 'Aplicación o flujo automatizado con manejo de excepciones, permisos y bitácora.',
          stack: ['.NET / React', 'Power Platform', 'Webhooks / APIs', 'SQL Server', 'Control Técnico'],
        },
        {
          id: 'intelligence',
          step: '04',
          title: 'Decisiones e IA Aplicada',
          subtitle: 'Tableros · RevOps · Copilotos',
          lead: 'Kevin Arroyo · Inteligencia de Ingresos',
          problemSolved:
            'Convertimos datos conciliados en visibilidad ejecutiva cada lunes y asistentes de IA que responden consultas sobre sus propios números y documentos.',
          deliverable: 'Tableros ejecutivos auto-actualizables, pronóstico comercial y flujos con modelos LLM.',
          stack: ['Tableau', 'Power BI', 'Looker Studio', 'Modelos LLM', 'RevOps Analytics'],
        },
      ]
    : [
        {
          id: 'sources',
          step: '01',
          title: 'Sources & Capture',
          subtitle: 'CRM · ERP · Web · Operations',
          lead: 'Kevin Arroyo & Enrique Cascante',
          problemSolved:
            'We eliminate blind spots where forms, UTM campaigns, spreadsheets and internal tools record disconnected or incomplete records.',
          deliverable: 'Source inventory, event tracking (GA4/GTM) and data capture contracts.',
          stack: ['CRM / ERP', 'Google Tag Manager', 'SharePoint', 'Web Forms', 'REST APIs'],
        },
        {
          id: 'engineering',
          step: '02',
          title: 'Engineering & Governance',
          subtitle: 'Integration · Quality · Warehouse',
          lead: 'Kevin Arroyo · Data Engineering',
          problemSolved:
            'We replace conflicting manual spreadsheets with a clean dimensional model where sales, finance and operations share a single source of truth.',
          deliverable: 'Automated SQL/Python pipelines, reconciliation rules and shared KPI dictionary.',
          stack: ['Snowflake', 'BigQuery', 'Databricks', 'SQL / Python', 'Data Governance'],
        },
        {
          id: 'automation',
          step: '03',
          title: 'Apps & Workflows',
          subtitle: 'Rules · Approvals · Bridges',
          lead: 'Enrique Cascante · Development & Automation',
          problemSolved:
            'We connect data back to daily operations: internal portals, approval flows with clear ownership and cross-system sync without double entry.',
          deliverable: 'Business application or workflow with exception handling, permissions and audit trail.',
          stack: ['.NET / React', 'Power Platform', 'Webhooks / APIs', 'SQL Server', 'Technical QA'],
        },
        {
          id: 'intelligence',
          step: '04',
          title: 'Decisions & Applied AI',
          subtitle: 'Dashboards · RevOps · Copilots',
          lead: 'Kevin Arroyo · Revenue Intelligence',
          problemSolved:
            'We turn reconciled data into Monday-morning executive clarity and AI assistants that answer questions grounded in your own numbers and policies.',
          deliverable: 'Self-updating executive dashboards, pipeline forecasting and production LLM workflows.',
          stack: ['Tableau', 'Power BI', 'Looker Studio', 'LLM Agents', 'RevOps Analytics'],
        },
      ];

  const activeStage = stages[activeIndex];

  return (
    <div className="arch-blueprint">
      <div className="arch-nodes" role="tablist" aria-label={es ? 'Capas de arquitectura' : 'Architecture layers'}>
        {stages.map((stage, idx) => {
          const isSelected = idx === activeIndex;
          const isPassed = idx <= activeIndex;
          return (
            <button
              key={stage.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`arch-node ${isSelected ? 'is-selected' : ''} ${isPassed ? 'is-passed' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <div className="arch-node-top">
                <span className="arch-step-badge">{stage.step}</span>
                <span className="arch-node-connector" aria-hidden="true" />
              </div>
              <strong className="arch-node-title">{stage.title}</strong>
              <span className="arch-node-sub">{stage.subtitle}</span>
            </button>
          );
        })}
      </div>

      <div className="arch-inspector" role="tabpanel">
        <div className="arch-inspector-main">
          <div className="arch-inspector-header">
            <span className="arch-layer-pill">
              {es ? `Capa ${activeStage.step} de 04` : `Layer ${activeStage.step} of 04`} · {activeStage.lead}
            </span>
            <h3>{activeStage.title}</h3>
          </div>
          <p className="arch-problem">{activeStage.problemSolved}</p>
          <div className="arch-deliverable-box">
            <span className="arch-deliverable-label">
              {es ? 'Entregable verificable' : 'Verifiable deliverable'}
            </span>
            <strong>{activeStage.deliverable}</strong>
          </div>
        </div>

        <div className="arch-inspector-side">
          <span className="arch-stack-label">
            {es ? 'Tecnologías e instrumentos en esta capa' : 'Technologies & instruments in this layer'}
          </span>
          <ul className="arch-stack-chips">
            {activeStage.stack.map((item) => (
              <li key={item}>
                <i aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="arch-footnote">
            {es
              ? 'Esquema interactivo. Diseñamos cada arquitectura sobre sus herramientas actuales sin imponer licencias innecesarias.'
              : 'Interactive blueprint. We design each architecture around your existing tools without forcing unnecessary licenses.'}
          </p>
        </div>
      </div>
    </div>
  );
}

