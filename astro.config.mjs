import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'http://AdrianReyes.github.io',
  integration: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false
    })
  ]
});
