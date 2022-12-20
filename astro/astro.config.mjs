import { defineConfig } from 'astro/config';
import prefetch from '@astrojs/prefetch';
import sanity from 'astro-sanity';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://haikoerinkveld.dev',
  integrations: [
    prefetch(),
    sanity({
      projectId: 'dql1ver2',
      dataset: 'production',
      apiVersion: '2021-03-25',
      useCdn: true,
    }),
    sitemap(),
  ],
});
