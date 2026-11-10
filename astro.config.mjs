import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://signumandco.com',
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-CR',
          en: 'en-US',
        },
      },
      filter: (page) => page !== 'https://signumandco.com/',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

