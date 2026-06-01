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
  },
});
