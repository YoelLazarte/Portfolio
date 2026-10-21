// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Set this to the deployed domain so canonical / og:url get absolute URLs
  // site: 'https://yoellazarte-portfolio.netlify.app/',
  integrations: [tailwind()],
});
