import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { buildSeo, canonical, SITE } from "@/lib/site-data";
import { PageHero, ContentSection } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { FadeIn } from "@/components/site/FadeIn";

const TITLE = "Équipements piscine : pompes, filtres, PAC, couvertures | Xx Works";
const DESC = "Vente et installation d'équipements piscine : pompes à vitesse variable, filtres AFM, pompes à chaleur, couvertures, douches. Conseils de professionnel.";
const PATH = "/equipements";

export const Route = createFileRoute("/equipements")({
  head: () => ({
    meta: buildSeo({ title: TITLE, description: DESC, path: PATH }),
    links: canonical(PATH),
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", serviceType: "Vente et installation d'équipements piscine", provider: { "@type": "LocalBusiness", name: SITE.name, telephone: SITE.phone }, areaServed: "Suisse romande" }) }],
  }),
  component: Page,
});

const blocks = [
  {
    t: "Filtration",
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
    p: "Une filtration performante est la base d'une eau saine. Nous installons des pompes à vitesse variable et des filtres AFM (Dryden Aqua) pour une efficacité maximale.",
    items: ["Pompes à vitesse variable Badu", "Filtres AFM Dryden Aqua", "Remplacement du sable de filtre", "Vannes multivoies Besgo"],
  },
  {
    t: "Chauffage",
    img: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=1200&q=80",
    p: "Allongez votre saison de baignade grâce à un système de chauffage adapté à votre piscine et à votre installation existante.",
    items: ["Pompes à chaleur dernière génération", "Échangeurs raccordés au chauffage maison", "Solaire thermique", "Démarches administratives prises en charge"],
  },
  {
    t: "Couvertures",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    p: "Sécurité, isolation thermique et propreté du bassin : la couverture est un investissement essentiel.",
    items: ["Volets immergés", "Volets hors-sol", "Couvertures polycarbonate", "Couvertures à barres de sécurité"],
  },
  {
    t: "Confort et wellness",
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
    p: "Transformez votre piscine en véritable espace bien-être avec des équipements pensés pour le confort.",
    items: ["Douches extérieures", "Nage à contre-courant", "Buses de massage et hydro-jets", "Éclairage LED couleur"],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Équipements"
        title="Équipements piscine de qualité professionnelle"
        subtitle="Sélection et installation d'équipements fiables, performants et durables pour votre bassin."
        image="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=80"
      />

      {blocks.map((b, i) => (
        <ContentSection key={b.t} alt={i % 2 === 1}>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn className={i % 2 === 1 ? "lg:order-2" : ""}>
              <h2 className="text-3xl font-semibold">{b.t}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{b.p}</p>
              <ul className="mt-5 space-y-2">
                {b.items.map((x) => (
                  <li key={x} className="flex gap-2.5"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span>{x}</span></li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn className={i % 2 === 1 ? "lg:order-1" : ""}>
              <img src={b.img} alt={b.t} loading="lazy" className="rounded-lg shadow-card w-full object-cover aspect-[4/3]" />
            </FadeIn>
          </div>
        </ContentSection>
      ))}

      <SectionCta />
    </>
  );
}
