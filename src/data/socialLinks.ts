export interface SocialLink {
  name: string;
  url: string;
  color: string;
  /** key into the Icon component's icon map */
  icon: 'github' | 'linkedin' | 'email' | 'whatsapp' | 'resume';
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/YoelLazarte', color: '#ffffff', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yoel-lazarte/', color: '#0077B5', icon: 'linkedin' },
  { name: 'WhatsApp', url: 'https://wa.me/5491158486166', color: '#25D366', icon: 'whatsapp' },
  { name: 'Email', url: 'mailto:yoelazarte04@gmail.com', color: '#b3b3b3', icon: 'email' },
  { name: 'Resume', url: '/cv', color: '#b3b3b3', icon: 'resume' },
];

/** Subset shown as quick-link pills in the Hero */
export const heroSocialLinks = socialLinks.filter((l) =>
  ['GitHub', 'LinkedIn', 'Resume'].includes(l.name)
);
