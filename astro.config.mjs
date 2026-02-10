import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'http://sketch19.github.io',
  integration: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false
    })
  ]
});
