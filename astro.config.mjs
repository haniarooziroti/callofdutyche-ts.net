import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
import { resolveSiteOrigin } from './scripts/site-origin.mjs';

/** Production origin only — previews use Workers host but must not affect sitemap/SEO output. */
const site = resolveSiteOrigin();

export default defineConfig({
  site,
  trailingSlash: 'always',
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/go/') &&
        !page.includes('/cheats/') &&
        !page.includes('/contact/') &&
        !page.includes('/dota-2-cheats/') &&
        !page.includes('/products/cs2-cheats/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'never',
  },
});
