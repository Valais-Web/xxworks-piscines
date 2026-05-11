import { createFileRoute } from "@tanstack/react-router";
import { ZONES, buildSeo, canonical, SITE } from "@/lib/site-data";
import { ZonePage } from "@/components/site/ZonePage";

const ZONE = ZONES.find((z) => z.slug === "fribourg")!;
const TITLE = `Pisciniste à ${ZONE.name} | Installation, entretien, dépannage piscine`;
const DESC = `Pisciniste à ${ZONE.name} : automatisation, entretien, dépannage de piscine. Intervention à ${ZONE.name} et environs depuis Granges-de-Vesin. Devis gratuit.`;
const PATH = "/zones/fribourg";

export const Route = createFileRoute("/zones/fribourg")({
  head: () => ({
    meta: buildSeo({ title: TITLE, description: DESC, path: PATH }),
    links: canonical(PATH),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: SITE.name,
        telephone: SITE.phone,
        email: SITE.email,
        url: `${SITE.url}${PATH}`,
        address: { "@type": "PostalAddress", streetAddress: "Route du Couchon 37", addressLocality: "Granges-de-Vesin", postalCode: "1484", addressCountry: "CH" },
        areaServed: { "@type": "City", name: ZONE.name },
      }),
    }],
  }),
  component: () => <ZonePage zone={ZONE} />,
});
