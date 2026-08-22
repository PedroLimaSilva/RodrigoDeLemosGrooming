import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site
// export default defineConfig({
//   site: 'https://pedrolimasilva.github.io',
//   base: '/RodrigoDeLemosGrooming',
// });

export default defineConfig({
  site: 'https://candoro.pt',
  integrations: [sitemap()],
});
