import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://signumandco.com',
  trailingSlash: 'always',
  compressHTML: true,
  redirects: { '/es/consultora': '/es/nosotros/', '/es/empresas': '/es/datos/' },
  integrations: [
    react(),
    sitemap({
      filter: (page) => page !== 'https://signumandco.com/',
    }),
  ],
  vite: {
    // Keep astro check/build from replacing the running dev server dependency cache.
    cacheDir: process.argv.includes('dev') ? 'node_modules/.vite-signum-dev' : 'node_modules/.vite-signum-build',
    optimizeDeps: { include: ['react/jsx-runtime', 'react/jsx-dev-runtime'] },
  },
});
