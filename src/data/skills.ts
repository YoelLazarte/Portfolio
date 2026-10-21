export interface SkillItem {
  name: string;
  color: string;
  /** simple-icons slug (https://simpleicons.org). Without one the marquee shows a colored dot */
  icon?: string;
}

export const technologies: SkillItem[] = [
  { name: 'Vue.js', color: '#42b883', icon: 'vuedotjs' },
  { name: 'React', color: '#61dafb', icon: 'react' },
  { name: 'Astro', color: '#ff5d01', icon: 'astro' },
  { name: 'JavaScript', color: '#f7df1e', icon: 'javascript' },
  { name: 'TypeScript', color: '#3178c6', icon: 'typescript' },
  { name: 'PHP', color: '#8892be', icon: 'php' },
  { name: 'Laravel', color: '#ff2d20', icon: 'laravel' },
  { name: 'Node.js', color: '#68a063', icon: 'nodedotjs' },
  { name: 'Express', color: '#e0e2e4', icon: 'express' },
  { name: 'MySQL', color: '#00a2d6', icon: 'mysql' },
  { name: 'Firebase', color: '#ffca28', icon: 'firebase' },
  { name: 'HTML5', color: '#e34f26', icon: 'html5' },
  { name: 'CSS3', color: '#1572b6', icon: 'css3' },
  { name: 'Tailwind', color: '#38bdf8', icon: 'tailwindcss' },
  { name: 'Bootstrap', color: '#7952b3', icon: 'bootstrap' },
];

export const tools: SkillItem[] = [
  { name: 'n8n', color: '#ea4b71', icon: 'n8n' },
  { name: 'Webhooks', color: '#4ade80' },
  { name: 'REST APIs', color: '#60a5fa' },
  { name: 'Git', color: '#f05032', icon: 'git' },
  { name: 'GitHub', color: '#ffffff', icon: 'github' },
  { name: 'Docker', color: '#2496ed', icon: 'docker' },
  { name: 'VS Code', color: '#4aa8ff' },
  { name: 'Figma', color: '#a259ff', icon: 'figma' },
  { name: 'AWS', color: '#ff9900', icon: 'amazonwebservices' },
  { name: 'Vercel', color: '#ffffff', icon: 'vercel' },
  { name: 'Postman', color: '#ff6c37', icon: 'postman' },
  { name: 'GoHighLevel', color: '#ff6b35' },
  { name: 'Meta Ads', color: '#1877f2', icon: 'meta' },
  { name: 'Google Ads', color: '#4285f4', icon: 'googleads' },
];
