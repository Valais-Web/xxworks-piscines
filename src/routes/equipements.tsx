import { createFileRoute } from "@tanstack/react-router";
import { Check, Filter, Flame, ShieldCheck, Sparkles } from "lucide-react";
import { buildSeo, canonical, SITE } from "@/lib/site-data";
import { PageHero, ContentSection } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { FadeIn } from "@/components/site/FadeIn";
import heroImg from "@/assets/service-equipements.jpg";
import equipImg from "@/assets/service-equipements.jpg";
import autoImg from "@/assets/service-automatisation.jpg";
import waterImg from "@/assets/service-produits.jpg";
import zonesImg from "@/assets/hero-zones.jpg";

const TITLE = "Équipements piscine : pompes, filtres, PAC, couvertures | Xx Works";
const DESC = "Vente et installation d'équipements piscine en Suisse romande : pompes à vitesse variable, filtres AFM, pompes à chaleur, couvertures, douches. Marques pro.";
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
    icon: <Filter className="h-5 w-5" />,
    t: "Filtration",
    img: equipImg,
    p: "Une filtration performante est la base d'une eau saine. Nous installons des pompes à vitesse variable et des filtres AFM (Dryden Aqua) pour une efficacité maximale tout en réduisant la consommation d'énergie et d'eau.",
    items: ["Pompes à vitesse variable Badu", "Filtres AFM Dryden Aqua nouvelle génération", "Remplacement de la masse filtrante", "Vannes multivoies Besgo automatisées"],
  },
  {
    icon: <Flame className="h-5 w-5" />,
    t: "Chauffage",
    img: autoImg,
    p: "Allongez votre saison de baignade grâce à un système de chauffage adapté à votre piscine, votre installation existante et votre source d'énergie principale.",
    items: ["Pompes à chaleur dernière génération", "Échangeurs raccordés au chauffage maison", "Solaire thermique, énergies renouvelables", "Démarches administratives prises en charge"],
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    t: "Couvertures",
    img: zonesImg,
    p: "Sécurité, isolation thermique, propreté du bassin et économies de produits : la couverture est l'un des investissements les plus rentables pour votre piscine.",
    items: ["Volets immergés (intégrés)", "Volets hors-sol motorisés", "Couvertures polycarbonate", "Couvertures à barres conformes sécurité"],
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    t: "Confort & wellness",
    img: waterImg,
    p: "Transformez votre piscine en véritable espace bien-être avec des équipements pensés pour le confort, le plaisir et l'esthétique.",
    items: ["Douches extérieures design", "Nage à contre-courant", "Buses de massage et hydro-jets", "Éclairage LED couleur RGB"],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Équipements"
        title="Équipements piscine de qualité professionnelle"
        subtitle="Sélection et installation d'équipements fiables, performants et durables pour votre bassin. Une approche centrée sur la longévité, l'efficacité énergétique et le confort d'usage."
        image={heroImg}
      />

      {blocks.map((b, i) => (
        <ContentSection key={b.t} alt={i % 2 === 1}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn className={i % 2 === 1 ? "lg:order-2" : ""}>
              <span className="badge-eyebrow mb-4">{b.icon} {b.t}</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">{b.t}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{b.p}</p>
              <ul className="mt-6 space-y-3">
                {b.items.map((x) => (
                  <li key={x} className="flex gap-3 items-start">
                    <span className="h-5 w-5 rounded-full grid place-items-center mt-0.5 shrink-0" style={{ backgroundImage: "var(--gradient-water)" }}>
                      <Check className="h-3 w-3 text-white" />
                    </span>
                    <span className="text-[15px]">{x}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn className={i % 2 === 1 ? "lg:order-1" : ""}>
              <img src={b.img} alt={b.t} loading="lazy" className="rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] w-full object-cover aspect-[4/3]" />
            </FadeIn>
          </div>
        </ContentSection>
      ))}

      <SectionCta />
    </>
  );
}
