// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact, tailwindcss,
// tsConfigPaths, the cloudflare plugin (disabled below), componentTagger (dev-only),
// VITE_* env injection, the @ path alias, React/TanStack dedupe, error logger plugins,
// and sandbox detection.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

// Target: Netlify (instead of Cloudflare Workers). The Netlify plugin configures
// `vite build` to emit a Netlify Functions bundle for SSR and emulates the
// Netlify platform locally during `vite dev`.
export default defineConfig({
  cloudflare: false,
  plugins: [netlify()],
  tanstackStart: {
    server: { entry: "server" },
    // Prerender every route to static HTML at build time (SSG). This guarantees
    // fully-rendered, JS-free HTML for crawlers and LLM bots (many don't execute
    // JS), with the Netlify SSR function remaining as a fallback. All 16 routes
    // are static, so crawlLinks discovers them from the homepage.
    prerender: {
      enabled: true,
      crawlLinks: true,
      concurrency: 14,
      failOnError: false,
    },
  },
});
