import { useState, type ReactNode } from 'react';
import { SmartPicture } from './SmartPicture';
import type { BrandImageKind } from '../../data/brand-images';
import type { Locale } from '../../data/site';

export interface ScrollStackItemProps {
  children: ReactNode;
  index?: number;
  accent?: string;
}

export function ScrollStackItem({
  children,
  index = 0,
}: ScrollStackItemProps) {
  return (
    <div
      className="scroll-stack-card"
      style={{
        top: `calc(96px + ${index * 22}px)`,
        zIndex: 10 + index,
      }}
    >
      {children}
    </div>
  );
}

export interface ScrollStackProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollStack({
  children,
  className = '',
}: ScrollStackProps) {
  return <div className={`scroll-stack-container ${className}`}>{children}</div>;
}

export interface SolutionBlueprintCard {
  id: string;
  tag: string;
  lead: string;
  title: string;
  problem: string;
  solution: string;
  outcomes: string[];
  image: BrandImageKind;
  ctaHref: string;
}

export function SolutionsScrollStack({
  locale,
  contactUrl,
}: {
  locale: Locale;
  contactUrl: string;
}) {
  const es = locale === 'es';
  const [focusedIdx, setFocusedIdx] = useState(0);

  const blueprints: SolutionBlueprintCard[] = es
    ? [
        {
          id: 'enterprise-0',
          tag: 'CASO ARQUITECTÓNICO 01 · REVOPS & BI',
          lead: 'Kevin Arroyo · Inteligencia de Ingresos',
          title: 'De 8 hojas de Excel contradictorias a un tablero ejecutivo único los lunes',
          problem:
            'Equipos comerciales y financieros invirtiendo horas cada semana en cruzar CRM, facturación y pauta digital sin saber qué campaña trajo cada oportunidad.',
          solution:
            'Almacén de datos centralizado en Snowflake/BigQuery con reglas de atribución multicanal y tablero ejecutivo en Power BI / Tableau actualizado automáticamente.',
          outcomes: [
            '100% de oportunidades vinculadas a su canal y campaña de origen',
            'Conciliación automática entre CRM comercial y cierres reales',
            'Pronóstico de ingresos trimestral auditable por dirección',
          ],
          image: 'data',
          ctaHref: `${contactUrl}?topic=enterprise-0#contacto`,
        },
        {
          id: 'automation',
          tag: 'CASO ARQUITECTÓNICO 02 · WORKFLOW AUTOMATION',
          lead: 'Enrique Cascante · Automatización e Integraciones',
          title: 'Automatización de solicitudes, aprobaciones y control documental sin cuellos de botella',
          problem:
            'Solicitudes operativas dispersas en correos y chats, sin trazabilidad de quién aprobó, qué versión de documento está vigente o dónde se detuvo un trámite.',
          solution:
            'Flujo automatizado en Microsoft Power Platform / .NET con estados en tiempo real, alertas por vencimiento, manejo de excepciones y bitácora completa.',
          outcomes: [
            'Trazabilidad completa de responsables, fechas y aprobaciones',
            'Eliminación de reprocesos manuales y doble digitación entre sistemas',
            'Transferencia documentada para que el equipo interno opere sin dependencia',
          ],
          image: 'automation',
          ctaHref: `${contactUrl}?topic=automation#contacto`,
        },
        {
          id: 'applications',
          tag: 'CASO ARQUITECTÓNICO 03 · APLICACIONES & PUENTES',
          lead: 'Enrique Cascante & Kevin Arroyo · Sistemas Conectados',
          title: 'Modernización gradual de sistemas e implementación de copilotos IA sobre datos propios',
          problem:
            'Sistemas heredados aislados que obligan a copiar registros a mano y dificultan responder preguntas operativas con rapidez.',
          solution:
            'Puentes de integración por API con validación y reintentos, portales modulares en React/.NET y asistentes LLM conectados a políticas y métricas reales.',
          outcomes: [
            'Sincronización segura entre ERP, CRM y portales operativos',
            'Consultas en lenguaje natural respondidas con evidencia verificable',
            'Revisión técnica y matriz de control con estándar bancario',
          ],
          image: 'integrations',
          ctaHref: `${contactUrl}?topic=integrations#contacto`,
        },
      ]
    : [
        {
          id: 'enterprise-0',
          tag: 'ARCHITECTURAL BLUEPRINT 01 · REVOPS & BI',
          lead: 'Kevin Arroyo · Revenue Intelligence',
          title: 'From 8 conflicting spreadsheets to a single Monday executive dashboard',
          problem:
            'Sales and finance teams spending hours every week cross-checking CRM, billing and ad spend without knowing which campaign generated each opportunity.',
          solution:
            'Centralized cloud warehouse in Snowflake/BigQuery with multi-touch attribution rules and self-updating Power BI / Tableau executive dashboards.',
          outcomes: [
            '100% of pipeline opportunities tied to source channel and campaign',
            'Automated reconciliation between CRM pipeline and actual revenue',
            'Board-ready quarterly revenue forecasting with traceable rules',
          ],
          image: 'data',
          ctaHref: `${contactUrl}?topic=enterprise-0#contacto`,
        },
        {
          id: 'automation',
          tag: 'ARCHITECTURAL BLUEPRINT 02 · WORKFLOW AUTOMATION',
          lead: 'Enrique Cascante · Automation & Integrations',
          title: 'End-to-end request, approval and document workflow automation',
          problem:
            'Operational requests scattered across emails and chats, with no visibility into who approved what, which document version is current or where bottlenecks sit.',
          solution:
            'Automated workflow in Microsoft Power Platform / .NET with real-time state tracking, SLA alerts, exception handling and full audit logs.',
          outcomes: [
            'Complete traceability of owners, timestamps and approvals',
            'Elimination of manual re-entry across disconnected tools',
            'Full documentation and handover for internal team autonomy',
          ],
          image: 'automation',
          ctaHref: `${contactUrl}?topic=automation#contacto`,
        },
        {
          id: 'integrations',
          tag: 'ARCHITECTURAL BLUEPRINT 03 · APPS & SYSTEM BRIDGES',
          lead: 'Enrique Cascante & Kevin Arroyo · Connected Systems',
          title: 'Staged system modernization and AI copilots grounded in your data',
          problem:
            'Legacy silos forcing manual copy-pasting and preventing teams from answering operational questions quickly.',
          solution:
            'API integration bridges with validation and retries, modular React/.NET portals and LLM assistants grounded in internal policies and verified metrics.',
          outcomes: [
            'Reliable synchronization across ERP, CRM and internal portals',
            'Plain-language queries answered with verifiable data evidence',
            'Technical code & process review built to international banking standards',
          ],
          image: 'integrations',
          ctaHref: `${contactUrl}?topic=integrations#contacto`,
        },
      ];

  return (
    <div className="scroll-stack-wrapper">
      <div className="scroll-stack-nav" role="tablist" aria-label={es ? 'Vista previa de soluciones' : 'Solutions preview'}>
        {blueprints.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={focusedIdx === idx}
            className={`scroll-stack-pill ${focusedIdx === idx ? 'is-active' : ''}`}
            onClick={() => {
              setFocusedIdx(idx);
              const el = document.getElementById(`stack-card-${idx}`);
              el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }}
          >
            <span>0{idx + 1}</span>
            <strong>{item.title.split(' ').slice(0, 4).join(' ')}…</strong>
          </button>
        ))}
      </div>

      <ScrollStack>
        {blueprints.map((card, index) => (
          <ScrollStackItem key={card.id} index={index}>
            <article
              id={`stack-card-${index}`}
              className={`stack-blueprint-grid ${focusedIdx === index ? 'is-highlighted' : ''}`}
              onMouseEnter={() => setFocusedIdx(index)}
            >
              <div className="stack-blueprint-copy">
                <div className="stack-blueprint-meta">
                  <span className="bento-code">{card.tag}</span>
                  <span className="stack-blueprint-lead">{card.lead}</span>
                </div>
                <h3>{card.title}</h3>
                <div className="stack-problem-solution">
                  <div className="stack-ps-box is-problem">
                    <span>{es ? 'El desafío habitual' : 'Typical challenge'}</span>
                    <p>{card.problem}</p>
                  </div>
                  <div className="stack-ps-box is-solution">
                    <span>{es ? 'Intervención Signum' : 'Signum intervention'}</span>
                    <p>{card.solution}</p>
                  </div>
                </div>
                <ul className="bento-deliverables">
                  {card.outcomes.map((outcome, oIdx) => (
                    <li key={oIdx}>
                      <svg
                        aria-hidden="true"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
                <div className="stack-blueprint-actions">
                  <a
                    className="btn btn-gold btn-sm"
                    data-contact-topic={card.id}
                    href={card.ctaHref}
                  >
                    {es ? 'Implementar esta arquitectura' : 'Implement this architecture'}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="stack-blueprint-visual">
                <SmartPicture
                  kind={card.image}
                  locale={locale}
                  showBadge
                  sizes="(max-width: 760px) 100vw, 440px"
                />
              </div>
            </article>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
}

