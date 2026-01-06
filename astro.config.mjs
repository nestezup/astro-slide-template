import { defineConfig } from 'astro/config';

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
      wrap: true,
    },
  },
  server: {
    allowedHosts: true, // Allow all hosts
  },
});
