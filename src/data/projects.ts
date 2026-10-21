import type { ImageMetadata } from 'astro';
import reemoImg from '../assets/projects/reemo.png';
import netflixImg from '../assets/projects/Netflix.png';
import oldMoneyImg from '../assets/projects/old-money.jpg';
import jsCartImg from '../assets/projects/js-cart.jpg';
import fodaImg from '../assets/projects/foda.png';

export interface ProjectData {
  name: string;
  desc: string;
  tech: string[];
  /** imported from src/assets so Astro optimizes it */
  image?: ImageMetadata;
  github?: string;
  live?: string;
  /** label for the live link, defaults to "Demo" */
  liveLabel?: string;
  demoWarning?: boolean;
  isUnderDevelopment?: boolean;
  isPrivate?: boolean;
  status: 'Terminado' | 'Pausado' | 'Prototipo';
}

export const featuredProjects: ProjectData[] = [
  {
    name: 'Reemo',
    desc: 'Plataforma full stack de alquiler de vehículos entre particulares: registro de usuarios, gestión de autos, solicitudes de alquiler y seguimiento, con API REST propia (Api-Reemo).',
    tech: ['Vue.js', 'Firebase', 'API REST', 'Tailwind'],
    image: reemoImg,
    github: 'https://github.com/panadxro/Reemo',
    live: 'https://reemo-a8120.web.app/',
    demoWarning: true,
    status: 'Pausado',
  },
  {
    name: 'Netflix Clone',
    desc: 'Aplicación web inspirada en Netflix para explorar películas y series, con integración de API y componentes reutilizables.',
    tech: ['Vue.js', 'Tailwind', 'API'],
    image: netflixImg,
    github: 'https://github.com/YoelLazarte/Netflix',
    live: 'https://netflixclone-yoelazarte.vercel.app/',
    status: 'Pausado',
  },
  {
    name: 'Old Money',
    desc: 'Plataforma de e-commerce con carrito, panel de administración, gestión de productos y Eloquent ORM.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind'],
    image: oldMoneyImg,
    github: 'https://github.com/YoelLazarte/old-money',
    status: 'Terminado',
  },
];

export const additionalProjects: ProjectData[] = [
  {
    name: 'JS Cart',
    desc: 'E-commerce de zapatillas para entender cómo funciona un carrito de compras, hecho solo con JavaScript Vanilla y carga dinámica del DOM.',
    tech: ['JavaScript', 'Bootstrap'],
    image: jsCartImg,
    github: 'https://github.com/YoelLazarte/sneaker-shop',
    live: 'https://yoellazarte.github.io/sneaker-shop/',
    status: 'Terminado',
  },
  {
    name: 'FODA',
    desc: 'Prototipo UX/UI en Figma de un marketplace para vender productos hechos con impresión 3D, explorando la experiencia de compra digital.',
    tech: ['Figma', 'UX/UI'],
    image: fodaImg,
    live: 'https://www.figma.com/proto/Zz7LpfVcCS5I27f5237BwO/Untitled?node-id=71-1953&t=yx6HzQ3JTCX6ihJA-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    liveLabel: 'Prototipo',
    status: 'Prototipo',
  },
];

export const allProjects: ProjectData[] = [...featuredProjects, ...additionalProjects];
