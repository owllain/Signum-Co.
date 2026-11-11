import { useState, useEffect } from 'react';
import { SmartPicture } from './SmartPicture';
import type { BrandImageKind } from '../../data/brand-images';
import type { Locale, ServiceRow } from '../../data/site';
import type { DevelopmentService } from '../../data/services';

export type ExplorerTab = 'all' | 'enterprise' | 'development' | 'growth';

interface ServiceCatalogExplorerProps {
  locale: Locale;
  initialTab?: ExplorerTab;
  enterpriseRows: ServiceRow[];
  growthRows: ServiceRow[];
  developmentRows: DevelopmentService[];
  contactUrl: string;
  compactMode?: boolean;
  servicesUrl?: string;
}

interface UnifiedCard {
  id: string;
  category: Exclude<ExplorerTab, 'all'>;
  code: string;
  badge: string;
  leadName: string;
  title: string;
  description: string;
  bullets: string[];
  image?: BrandImageKind;
}

const ENTERPRISE_BADGES: Record<Locale, string[]> = {
  es: [
    'RevOps · Atribución · Pipeline',
    'Snowflake · BigQuery · Databricks',
    'Tableau · Power BI · Looker',
    'LLM · Copilotos · Automatización',
    'SQL · Python · Controles AML',
  ],
  en: [
    'RevOps · Attribution · Pipeline',
    'Snowflake · BigQuery · Databricks',
    'Tableau · Power BI · Looker',
    'LLMs · Copilots · Automation',
    'SQL · Python · AML Controls',
  ],
};

const GROWTH_BADGES: Record<Locale, string[]> = {
  es: [
    'GA4 · Tag Manager · Looker Studio',
    'Meta Ads · Google Ads · SEO',
    'UX Móvil · Conversión · E-commerce',
    'WhatsApp IA · Atención 24/7',
  ],
  en: [
    'GA4 · Tag Manager · Looker Studio',
    'Meta Ads · Google Ads · SEO',
    'Mobile UX · Conversion · E-commerce',
    'WhatsApp AI · 24/7 Assistants',
  ],
};

export default function ServiceCatalogExplorer({
  locale,
  initialTab = 'all',
  enterpriseRows,
  growthRows,
  developmentRows,
  contactUrl,
  compactMode = false,
  servicesUrl,
}: ServiceCatalogExplorerProps) {
  const es = locale === 'es';
  const [activeTab, setActiveTab] = useState<ExplorerTab>(initialTab);

  const allCards: UnifiedCard[] = [
    ...enterpriseRows.map((row, index) => ({
      id: `enterprise-${index}`,
      category: 'enterprise' as const,
      code: `D-0${index + 1}`,
      badge: ENTERPRISE_BADGES[locale][index] || 'Data & Analytics',
      leadName: 'Kevin Arroyo',
      title: row.title,
      description: row.description,
      bullets: row.bullets,
      image: index === 0 ? ('data' as BrandImageKind) : index === 3 ? ('signal' as BrandImageKind) : undefined,
    })),
    ...developmentRows.map((service, index) => ({
      id: service.id,
      category: 'development' as const,
      code: `E-0${index + 1}`,
      badge: service.tag,
      leadName: 'Enrique Cascante',
      title: service.title,
      description: service.description,
      bullets: service.deliverables,
      image: service.image,
    })),
    ...growthRows.map((row, index) => ({
      id: `service-${index}`,
      category: 'growth' as const,
      code: `C-0${index + 1}`,
      badge: GROWTH_BADGES[locale][index] || 'Digital & Growth',
      leadName: 'Signum & Co.',
      title: row.title,
      description: row.description,
      bullets: row.bullets,
    })),
  ];

  useEffect(() => {
    const syncFromLocation = () => {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab') as ExplorerTab | null;
      if (tabParam && ['all', 'enterprise', 'development', 'growth'].includes(tabParam)) {
        setActiveTab(tabParam);
        return;
      }
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;
      if (hash === 'empresas' || hash === 'data-analytics' || hash.startsWith('enterprise-')) {
        setActiveTab('enterprise');
      } else if (
        hash === 'capacidades' ||
        ['automation', 'applications', 'integrations', 'technical-review'].includes(hash)
      ) {
        setActiveTab('development');
      } else if (hash === 'servicios' || hash.startsWith('service-')) {
        setActiveTab('growth');
      }
    };

    syncFromLocation();
    window.addEventListener('hashchange', syncFromLocation);
    return () => window.removeEventListener('hashchange', syncFromLocation);
  }, []);

  const handleSelectTab = (tab: ExplorerTab) => {
    setActiveTab(tab);
    if (typeof window !== 'undefined' && !compactMode) {
      const url = new URL(window.location.href);
      if (tab === initialTab) url.searchParams.delete('tab');
      else url.searchParams.set('tab', tab);
      window.history.replaceState({}, '', url.toString());
    }
  };

  const tabs: {
    id: ExplorerTab;
    label: string;
    sublabel: string;
    count: number;
    bannerImage: BrandImageKind;
    lead: string;
    summary: string;
  }[] = [
    {
      id: 'all',
      label: es ? 'Ecosistema completo' : 'Full ecosystem',
      sublabel: es ? 'Datos + Desarrollo + Crecimiento' : 'Data + Dev + Growth',
      count: allCards.length,
      bannerImage: 'systems',
      lead: 'Kevin Arroyo & Enrique Cascante',
      summary: es
        ? 'Arquitectura integral que conecta fuentes de datos, aplicaciones operativas y medición comercial en un solo equipo.'
        : 'End-to-end architecture connecting data sources, operational applications and commercial measurement in one team.',
    },
    {
      id: 'enterprise',
      label: es ? 'Datos y analítica' : 'Data & analytics',
      sublabel: es ? 'Liderado por Kevin Arroyo' : 'Led by Kevin Arroyo',
      count: enterpriseRows.length,
      bannerImage: 'data',
      lead: es ? 'Kevin Arroyo · Datos e Inteligencia de Ingresos' : 'Kevin Arroyo · Data & Revenue Intelligence',
      summary: es
        ? 'Almacenes de datos en la nube, tableros ejecutivos, atribución comercial y modelos de IA sobre sus propios números.'
        : 'Cloud data warehouses, executive dashboards, revenue attribution and AI models over your own numbers.',
    },
    {
      id: 'development',
      label: es ? 'Desarrollo y automatización' : 'Development & automation',
      sublabel: es ? 'Liderado por Enrique Cascante' : 'Led by Enrique Cascante',
      count: developmentRows.length,
      bannerImage: 'applications',
      lead: es ? 'Enrique Cascante · Aplicaciones e Integraciones' : 'Enrique Cascante · Applications & Integrations',
      summary: es
        ? 'Aplicaciones empresariales a medida, flujos de aprobación automatizados, puentes entre sistemas y revisión técnica con evidencia.'
        : 'Custom business applications, automated approval workflows, system bridges and traceable technical reviews.',
    },
    {
      id: 'growth',
      label: es ? 'Crecimiento y medición' : 'Growth & measurement',
      sublabel: es ? 'Comercio, web e IA práctica' : 'Commercial, web & practical AI',
      count: growthRows.length,
      bannerImage: 'signal',
      lead: es ? 'Soluciones ágiles para negocios en expansión' : 'Agile solutions for growing businesses',
      summary: es
        ? 'Analítica digital GA4/GTM, embudos de conversión, optimización web y asistentes de IA que atienden 24/7.'
        : 'GA4/GTM digital analytics, conversion funnels, web optimization and 24/7 AI assistants.',
    },
  ];

  const currentTabMeta = tabs.find((t) => t.id === activeTab) || tabs[0];

  const isCardVisible = (card: UnifiedCard) => {
    if (activeTab === 'all') {
      if (compactMode) {
        // In compact home mode, show 6 curated flagship cards across disciplines when 'all' is selected
        return [
          'enterprise-0',
          'enterprise-1',
          'enterprise-2',
          'automation',
          'applications',
          'integrations',
        ].includes(card.id);
      }
      return true;
    }
    return card.category === activeTab;
  };

  return (
    <div className="explorer-shell">
      {/* Segmented Interactive Control (Replaces the old full-page-reload submenus) */}
      <div
        className="explorer-tabs"
        role="tablist"
        aria-label={es ? 'Filtrar especialidades sin recargar' : 'Filter disciplines without reloading'}
      >
        {tabs.map((tab) => {
          const selected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`explorer-tab ${selected ? 'is-active' : ''}`}
              onClick={() => handleSelectTab(tab.id)}
            >
              <span className="explorer-tab-top">
                <span className="explorer-tab-title">{tab.label}</span>
                <span className="explorer-tab-badge">{tab.count}</span>
              </span>
              <span className="explorer-tab-sub">{tab.sublabel}</span>
            </button>
          );
        })}
      </div>

      {/* Discipline Spotlight Header */}
      <div className="explorer-spotlight">
        <div className="explorer-spotlight-copy">
          <div className="explorer-pill-row">
            <span className="explorer-lead-pill">
              <i className="explorer-pulse" aria-hidden="true" />
              {currentTabMeta.lead}
            </span>
          </div>
          <h3>{currentTabMeta.label}</h3>
          <p>{currentTabMeta.summary}</p>
          <div className="explorer-spotlight-actions">
            <a className="btn btn-gold btn-sm" href={contactUrl}>
              {es ? 'Solicitar diagnóstico de 15 min' : 'Request 15-min assessment'}
              <span aria-hidden="true">→</span>
            </a>
            {compactMode && servicesUrl && (
              <a className="text-link" href={servicesUrl}>
                {es ? 'Ver catálogo completo de 13 soluciones' : 'View full catalog of 13 solutions'}
                <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>
        <div className="explorer-spotlight-media">
          <SmartPicture
            kind={currentTabMeta.bannerImage}
            locale={locale}
            showBadge
            sizes="(max-width: 760px) 100vw, 420px"
          />
        </div>
      </div>

      {/* Anchor targets for legacy section IDs */}
      <div id="empresas" className="sr-only" aria-hidden="true" />
      <div id="capacidades" className="sr-only" aria-hidden="true" />
      <div id="servicios" className="sr-only" aria-hidden="true" />

      {/* Compact 3-Column Bento Grid */}
      <div className="bento-catalog-grid" role="region" aria-live="polite">
        {allCards.map((card) => {
          const visible = isCardVisible(card);
          return (
            <article
              key={card.id}
              id={card.id}
              hidden={!visible}
              className={`bento-service-card category-${card.category}`}
            >
              {card.image && !compactMode && (
                <div className="bento-card-thumb">
                  <SmartPicture
                    kind={card.image}
                    locale={locale}
                    alt=""
                    sizes="(max-width: 760px) 100vw, 340px"
                  />
                </div>
              )}
              <div className="bento-card-body">
                <div className="bento-card-meta">
                  <span className="bento-code">{card.code}</span>
                  <span className="bento-tech-tag">{card.badge}</span>
                </div>
                <h4>{card.title}</h4>
                <p className="bento-desc">{card.description}</p>
                <ul className="bento-deliverables">
                  {card.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <svg
                        aria-hidden="true"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="bento-card-footer">
                  <span className="bento-owner">{card.leadName}</span>
                  <a
                    className="bento-cta"
                    data-contact-topic={card.id}
                    href={`${contactUrl}?topic=${card.id}#contacto`}
                  >
                    <span>{es ? 'Cotizar / Consultar' : 'Inquire'}</span>
                    <svg
                      aria-hidden="true"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

