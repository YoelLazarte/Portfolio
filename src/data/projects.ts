export interface ProjectData {
  name: string;
  desc: string;
  tech: string[];
  github?: string;
  live?: string;
  demoWarning?: boolean;
  isUnderDevelopment?: boolean;
  isPrivate?: boolean;
  status: 'Terminado' | 'Pausado';
}

export const featuredProjects: ProjectData[] = [
  {
    name: 'Reemo',
    desc: 'Plataforma full stack de alquiler de vehículos entre particulares: registro de usuarios, gestión de autos, solicitudes de alquiler y seguimiento, con API REST propia (Api-Reemo).',
    tech: ['Vue.js', 'Firebase', 'API REST', 'Tailwind'],
    github: 'https://github.com/panadxro/Reemo',
    live: 'https://reemo-a8120.web.app/',
    demoWarning: true,
    status: 'Pausado',
  },
  {
    name: 'Netflix Clone',
    desc: 'Aplicación web inspirada en Netflix para explorar películas y series, con integración de API y componentes reutilizables.',
    tech: ['Vue.js', 'Tailwind', 'API'],
    github: 'https://github.com/YoelLazarte/Netflix',
    live: 'https://netflixclone-yoelazarte.vercel.app/',
    status: 'Pausado',
  },
  {
    name: 'Old Money',
    desc: 'Plataforma de e-commerce con carrito, panel de administración, gestión de productos y Eloquent ORM.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind'],
    github: 'https://github.com/YoelLazarte/old-money',
    status: 'Terminado',
  },
];

export const additionalProjects: ProjectData[] = [];

export const allProjects: ProjectData[] = [...featuredProjects, ...additionalProjects];
