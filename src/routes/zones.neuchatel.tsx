import { createFileRoute } from "@tanstack/react-router";
import { ZONES, buildSeo, canonical, zoneTitle, zoneDesc, zoneJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/site-data";
import { ZonePage } from "@/components/site/ZonePage";

const ZONE = ZONES.find((z) => z.slug === "neuchatel")!;
const TITLE = zoneTitle(ZONE.name);
const DESC = zoneDesc(ZONE.name);
const PATH = "/zones/neuchatel";

export const Route = createFileRoute("/zones/neuchatel")({
  head: () => ({
    meta: buildSeo({ title: TITLE, description: DESC, path: PATH }),
    links: canonical(PATH),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(zoneJsonLd(ZONE)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: `Pisciniste à ${ZONE.name}`, path: PATH },
          ])
        ),
      },
      ...(ZONE.faq ? [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(ZONE.faq)) }] : []),
    ],
  }),
  component: () => <ZonePage zone={ZONE} />,
});
