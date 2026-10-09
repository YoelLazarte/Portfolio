export interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  status: 'present' | 'past';
  description: string[];
  links?: { label: string; url: string }[];
}

export const experienceEntries: ExperienceEntry[] = [
  {
    company: 'LEVN',
    role: 'Co-fundador & Desarrollador',
    dates: '2026 — Presente',
    status: 'present',
    description: [
      'Agencia de servicios tecnológicos creada junto a socios, enfocada en aplicaciones y sistemas de gestión para PyMEs.',
      'Automatizaciones con n8n, marketing, programación y CRM.',
      'Captación de leads además del desarrollo.',
      'Caso actual: una inmobiliaria llevó una idea y el equipo está ayudando a bajarla y construir la aplicación.',
    ],
    links: [{ label: 'levn.com.ar', url: 'https://levn.com.ar' }],
  },
  {
    company: 'Grownest',
    role: 'Analista de Marketing & AI Automation',
    dates: '2026 — 2025',
    status: 'past',
    description: [
      'Gestión y optimización de pauta en Meta Ads y Google Ads.',
      'Diseño y desarrollo de automatizaciones con IA para marketing.',
      'Participación en un CRM interno desarrollado con Laravel.',
      'Optimización de carga de Excel y grandes volúmenes de datos.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Desarrollador Web',
    dates: '2024 — 2025',
    status: 'past',
    description: [
      'Mancruz - Dogos de Burdeos: primer proyecto web, HTML/CSS/JS/Bootstrap.',
      'Obra Social Luis Pasteur: rediseño en GoHighLevel + integración de Zoho Forms.',
      'Dashboards de e-commerce: integración de Meta Ads, Tienda Nube, GA4 y Kommo CRM.',
      'Funnel de conversión implementado en GoHighLevel.',
    ],
  },
];
