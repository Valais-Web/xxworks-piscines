import { createFileRoute } from "@tanstack/react-router";
import { Check, HardHat, Ruler, Sparkles, Layers, Compass, Lightbulb, ShieldCheck } from "lucide-react";
import { buildSeo, canonical, SITE } from "@/lib/site-data";
import { PageHero, ContentSection } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { FadeIn } from "@/components/site/FadeIn";
import { ServiceFAQ } from "@/components/site/ServiceFAQ";
import heroImg from "@/assets/service-construction.jpg";

const TITLE = "Construction de piscine en Suisse romande | Xx Works";
const DESC = "Conception et installation de piscines neuves clé en main en Suisse romande : piscines enterrées, coque, inox RivieraPool, mini-piscines et spas.";
const PATH = "/construction";

const FAQ = [
  { q: "Quel est le délai pour construire une piscine en Suisse romande ?", a: "Pour une piscine enterrée standard, comptez 8 à 16 semaines entre la signature du devis et la mise en eau, hors démarches administratives. Les piscines coque ou inox préfabriquées (type RivieraPool) sont plus rapides : 3 à 6 semaines une fois les autorisations obtenues. Les délais varient selon la saison, l'accès au chantier et la complexité du local technique." },
  { q: "Faut-il un permis de construire pour une piscine privée en Suisse ?", a: "Oui, dans la grande majorité des cas. Les règles dépendent du canton et de la commune : surface, profondeur, distance aux limites, hauteur du plan d'eau et impact paysager sont systématiquement examinés. Nous accompagnons nos clients sur la constitution du dossier et la coordination avec la commune et les éventuels mandataires (architecte, géomètre)." },
  { q: "Quelle est la différence entre une piscine maçonnée, une coque et une piscine inox ?", a: "La piscine maçonnée (béton + revêtement liner ou carrelage) offre une liberté totale de forme et une grande durabilité, pour un budget et un délai plus élevés. La coque polyester est livrée d'un bloc, installée en quelques jours, avec un excellent rapport qualité/prix. L'inox (RivieraPool) combine longévité exceptionnelle, esthétique contemporaine et gamme préfabriquée modulable, idéale pour les projets premium ou les terrains complexes." },
  { q: "Peut-on installer une mini-piscine ou un spa dans un petit jardin ?", a: "Oui. Les mini-piscines (généralement < 10 m² et < 1.5 m de profondeur) bénéficient souvent d'une procédure administrative simplifiée et s'intègrent dans des terrains réduits ou en terrasse. Les spas et nages à contre-courant compacts permettent une vraie expérience aquatique sans les contraintes d'un bassin classique. Nous installons régulièrement ces solutions, notamment la gamme RivieraPool." },
  { q: "Quel budget prévoir pour une piscine neuve clé en main ?", a: "Un budget réaliste se situe entre 35 000 et 80 000 CHF pour une piscine coque ou inox de taille familiale équipée correctement (filtration, traitement automatique, couverture). Une piscine maçonnée sur-mesure avec aménagements complets dépasse fréquemment 100 000 CHF. Nous établissons un chiffrage transparent ligne par ligne après visite du terrain." },
  { q: "Travaillez-vous avec d'autres corps de métier (terrassement, maçonnerie, électricité) ?", a: "Oui. Nous coordonnons l'ensemble des intervenants nécessaires (terrassier, maçon, électricien, paysagiste) ou nous intégrons votre installation à un chantier déjà en cours avec d'autres entreprises. Notre rôle est de garantir la cohérence technique du projet : implantation, hydraulique, électricité, automatisation et finitions." },
];

export const Route = createFileRoute("/construction")({
  head: () => ({
    meta: buildSeo({ title: TITLE, description: DESC, path: PATH }),
    links: canonical(PATH),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", serviceType: "Construction et installation de piscine", provider: { "@type": "LocalBusiness", name: SITE.name, telephone: SITE.phone }, areaServed: "Suisse romande" }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }) },
    ],
  }),
  component: Page,
});

const types = [
  { i: <Layers className="h-5 w-5" />, t: "Piscines maçonnées", d: "Bassins béton sur-mesure avec revêtement liner, membrane armée ou carrelage. Liberté de formes et de dimensions, durabilité maximale." },
  { i: <Compass className="h-5 w-5" />, t: "Piscines coque polyester", d: "Bassins monoblocs préfabriqués, installés en quelques jours. Excellente étanchéité, entretien simplifié, rapport qualité-prix imbattable." },
  { i: <Sparkles className="h-5 w-5" />, t: "Piscines inox RivieraPool", d: "Solution premium en acier inoxydable AISI 316L. Esthétique contemporaine, longévité exceptionnelle, idéal pour projets architecturaux ambitieux." },
  { i: <Ruler className="h-5 w-5" />, t: "Mini-piscines & spas", d: "Bassins compacts (< 10 m²), spas de nage et nages à contre-courant. Parfait pour petits jardins, terrasses ou rénovations." },
];

const steps = [
  { t: "1. Étude & visite", d: "Visite du terrain, analyse des contraintes (accès, sol, dénivelé, raccordements), discussion de vos envies et de votre budget." },
  { t: "2. Conception & devis", d: "Proposition technique détaillée : type de bassin, dimensions, équipements, finitions. Devis transparent ligne par ligne, validé avec vous." },
  { t: "3. Démarches administratives", d: "Constitution du dossier de demande d'autorisation, coordination avec la commune et les mandataires (architecte, géomètre) si nécessaire." },
  { t: "4. Terrassement & gros œuvre", d: "Coordination des corps de métier : terrassier, maçon, électricien. Implantation rigoureuse, mise en place du bassin et du local technique." },
  { t: "5. Installation technique", d: "Hydraulique, filtration, automatisation pH/Rx, chauffage, éclairage, couverture. Mise en eau, équilibrage et tests complets." },
  { t: "6. Mise en service & formation", d: "Démonstration des automatismes, remise du dossier technique et formation à l'usage quotidien. Suivi rapproché la première saison." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Construction & installation"
        title="Construction de piscine clé en main en Suisse romande"
        subtitle="De la conception à la mise en eau, un accompagnement intégral par un pisciniste diplômé. Piscines maçonnées, coque, inox RivieraPool, mini-piscines et spas."
        image={heroImg}
      />

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <FadeIn>
            <span className="badge-eyebrow mb-4">Notre approche</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Une piscine pensée pour durer 30 ans, pas 10</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Construire une piscine, c'est un investissement sur plusieurs décennies. Notre rôle est de concevoir un bassin qui restera <strong>performant, économe et plaisant à vivre</strong> pendant toute sa durée de vie — pas seulement les premières saisons.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Cela passe par un dimensionnement hydraulique précis, le choix d'équipements professionnels (Bayrol, Dryden Aqua, Badu), une automatisation pensée dès le départ et des finitions soignées. Notre brevet fédéral en technique piscine garantit le sérieux de chaque étape.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="grid gap-4">
              {[
                { i: <ShieldCheck className="h-5 w-5" />, t: "Pisciniste diplômé", d: "Brevet fédéral et 15 ans de pratique. Vous traitez avec un spécialiste, pas un revendeur." },
                { i: <HardHat className="h-5 w-5" />, t: "Coordination intégrale", d: "Terrassement, maçonnerie, électricité, paysage : nous orchestrons tous les corps de métier." },
                { i: <Sparkles className="h-5 w-5" />, t: "Marques pro garanties", d: "Bayrol, Dryden Aqua, Badu, Besgo, RivieraPool : matériel professionnel et pièces détachées disponibles longtemps." },
              ].map((b) => (
                <div key={b.t} className="card-soft flex gap-4 items-start">
                  <div className="icon-tile-primary shrink-0">{b.i}</div>
                  <div>
                    <div className="font-bold">{b.t}</div>
                    <div className="text-[15px] text-muted-foreground mt-1 leading-relaxed">{b.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </ContentSection>

      <ContentSection alt>
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="badge-eyebrow mb-4">Types de piscines</span>
          <h2 className="text-3xl md:text-4xl font-bold">Quel type de bassin pour votre projet ?</h2>
          <p className="mt-4 text-muted-foreground">Chaque solution a ses forces. Nous vous orientons selon votre terrain, votre budget et vos usages.</p>
        </FadeIn>
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {types.map((f) => (
            <FadeIn key={f.t}>
              <div className="card-feature h-full">
                <div className="icon-tile-primary mb-4">{f.i}</div>
                <h3 className="font-bold">{f.t}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="badge-eyebrow mb-4">Notre méthode</span>
          <h2 className="text-3xl md:text-4xl font-bold">Les 6 étapes d'un chantier réussi</h2>
          <p className="mt-4 text-muted-foreground">Un processus éprouvé pour que votre projet avance sans surprise.</p>
        </FadeIn>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <FadeIn key={s.t}>
              <div className="card-soft h-full">
                <h3 className="font-bold text-lg">{s.t}</h3>
                <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </ContentSection>

      <ContentSection alt>
        <div className="grid lg:grid-cols-2 gap-12">
          <FadeIn>
            <span className="badge-eyebrow mb-4">RivieraPool</span>
            <h2 className="text-2xl md:text-3xl font-bold">Partenaire RivieraPool : piscines inox et mini-piscines</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nous installons les piscines préfabriquées <strong>RivieraPool</strong>, référence européenne du bassin inox AISI 316L. Cette technologie offre une longévité exceptionnelle (50 ans et plus), une esthétique contemporaine et une installation rapide grâce à un montage en éléments préfabriqués.
            </p>
            <ul className="mt-6 space-y-3">
              {["Piscines inox enterrées et hors-sol sur-mesure", "Mini-piscines pour terrasses et petits jardins", "Spas de nage avec contre-courant intégré", "Garantie longue durée sur la structure inox"].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <span className="h-5 w-5 rounded-full grid place-items-center mt-0.5 shrink-0" style={{ backgroundImage: "var(--gradient-water)" }}>
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  <span className="text-[15px]">{t}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn>
            <span className="badge-eyebrow mb-4">Conception</span>
            <h2 className="text-2xl md:text-3xl font-bold">Pensée dès le départ pour l'automatisation</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Une piscine neuve doit être <strong>conçue dès le départ pour accueillir les automatismes</strong> : régulation Bayrol Poolmanager, contre-lavage automatique Besgo, pompe à vitesse variable Badu, supervision à distance. Cela évite les bricolages coûteux quelques années plus tard.
            </p>
            <ul className="mt-6 space-y-3">
              {["Local technique dimensionné et ventilé correctement", "Câblages et tubages pré-installés pour évolution future", "Choix du matériel pensé pour 20 ans de service", "Documentation complète remise à la mise en service"].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <span className="h-5 w-5 rounded-full grid place-items-center mt-0.5 shrink-0" style={{ backgroundImage: "var(--gradient-water)" }}>
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  <span className="text-[15px]">{t}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </ContentSection>

      <ServiceFAQ items={FAQ} />

      <SectionCta />
    </>
  );
}
