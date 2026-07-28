import { createFileRoute } from "@tanstack/react-router";
import { SERVICES, ZONES, absUrl } from "@/lib/site-data";

const paths = [
  "/",
  ...SERVICES.map((s) => `/${s.slug}`),
  ...ZONES.map((z) => `/zones/${z.slug}`),
  "/contact",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().slice(0, 10);
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) =>
      `  <url><loc>${absUrl(p)}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`
  )
  .join("\n")}
</urlset>`;
        return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
      },
    },
  },
});
