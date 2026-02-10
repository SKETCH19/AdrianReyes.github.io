import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'http://SKETCH19.github.io',
  integration: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false
    })
  ]
});
