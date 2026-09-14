// @ts-check
import { defineConfig } from 'astro/config';

// TODO(fork): set `site` to your deployed URL, and `base` if you are hosting
// under a subpath such as a GitHub Pages project site.
export default defineConfig({
  site: 'https://example.internal',
  // base: '/my-demo',
  build: { format: 'directory' },
});
