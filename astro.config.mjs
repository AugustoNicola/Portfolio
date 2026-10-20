import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://augustonicola.netlify.app',
  // "/harmonium" -> harmonium.html, matching the URLs of the previous static site.
  build: { format: 'preserve' },
})
