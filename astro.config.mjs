import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://5250ng.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
