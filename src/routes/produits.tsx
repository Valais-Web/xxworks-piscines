import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, Beaker, Sparkles, Droplets, ShieldCheck, Leaf } from "lucide-react";
import { buildSeo, canonical, SITE } from "@/lib/site-data";
import { PageHero, ContentSection } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { FadeIn } from "@/components/site/FadeIn";
import { ServiceFAQ } from "@/components/site/ServiceFAQ";
import { ZonesLinkBar } from "@/components/site/ZonesLinkBar";
import { RelatedServices } from "@/components/site/RelatedServices";
import heroImg from "/service-produits.png";

const TITLE = "Produits d'entretien piscine professionnels | Xx Works";
const DESC = "Produits de traitement piscine de qualité professionnelle : pH, chlore, brome, floculants, anti-calcaire. Conseil personnalisé pour votre bassin en Suisse romande.";
const PATH = "/produits";

const FAQ = [
  { q: "Quelle est la différence entre le chlore lent et le chlore choc ?", a: "Le chlore lent (galets trichlorés) assure la désinfection continue de fond sur 3 à 7 jours. Le chlore choc (granulé non stabilisé, dichloro ou calcium hypochlorite) agit en quelques heures pour traiter une contamination, une eau verte ou une forte fréquentation. Les deux se complètent : l'un ne remplace pas l'autre." },
  { q: "Mon pH baisse constamment — pourquoi et que faire ?", a: "Un pH qui baisse rapidement signale généralement un TAC (alcalinité totale) trop bas. La solution n'est pas de mettre constamment du pH+ mais d'augmenter le TAC entre 80 et 120 mg/l grâce à du bicarbonate de sodium. Nous analysons le problème à la source et proposons la correction adaptée." },
  { q: "Peut-on commander des produits sans passer par une visite ?", a: "Oui. Pour les clients avec qui nous travaillons déjà et dont nous connaissons l'installation, nous pouvons fournir les produits sur commande (livraison lors d'une prochaine visite ou remise en main propre). Pour les nouveaux clients, une première analyse de l'eau est fortement recommandée avant de définir le programme de traitement." },
  { q: "Quelle quantité de produits prévoir pour toute la saison ?", a: "Pour une piscine familiale de 50 m³ avec désinfection au chlore, prévoyez environ 5–8 kg de chlore lent, 2–3 kg de chlore choc, 2–3 litres de pH-minus ou pH-plus selon votre eau locale, et 1 litre d'anti-algues de fond. Ces quantités varient selon la fréquentation, l'ensoleillement et l'automatisation. Nous vous donnons une estimation personnalisée lors de la première visite." },
];

export const Route = createFileRoute("/produits")({
  head: () => ({
    meta: buildSeo({ title: TITLE, description: DESC, path: PATH }),
    links: canonical(PATH),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", serviceType: "Produits d'entretien piscine", provider: { "@type": "LocalBusiness", name: SITE.name, telephone: SITE.phone }, areaServed: "Suisse romande" }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }) },
    ],
  }),
  component: Page,
});

const cats = [
  { i: <FlaskConical className="h-6 w-6" />, t: "Désinfection", d: "Chlore lent, choc, brome, oxygène actif. Traitement efficace adapté à chaque type de bassin et à vos préférences." },
  { i: <Beaker className="h-6 w-6" />, t: "Régulation pH/TAC", d: "Correcteurs pH+/pH-, augmentateurs d'alcalinité pour une eau parfaitement équilibrée et confortable." },
  { i: <Droplets className="h-6 w-6" />, t: "Floculants & coagulants", d: "Clarification de l'eau, élimination des particules les plus fines pour une transparence cristalline." },
  { i: <Sparkles className="h-6 w-6" />, t: "Nettoyage", d: "Anti-calcaire, anti-algues, nettoyants ligne d'eau, dégraissants spécifiques piscine." },
];

const benefits = [
  { i: <ShieldCheck />, t: "Concentration supérieure", d: "Plus de principe actif, moins d'additifs inutiles." },
  { i: <Leaf />, t: "Plus respectueux", d: "Mieux dosés, mieux pour vos équipements et l'environnement." },
  { i: <Sparkles />, t: "Résultats rapides", d: "Action immédiate et durable sur la qualité d'eau." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Produits"
        title="Produits d'entretien piscine : qualité professionnelle"
        subtitle="Une gamme rigoureusement sélectionnée pour la qualité de l'eau, votre confort de baignade et la longévité de vos équipements."
        image={heroImg}
      />

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <FadeIn>
            <span className="badge-eyebrow mb-4">Pourquoi du professionnel ?</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Plus efficace, plus économique sur la durée</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Les produits grand public contiennent souvent des concentrations en principes actifs réduites et de nombreux additifs inutiles. Les produits professionnels offrent une <strong>concentration supérieure</strong>, des résultats plus rapides et un meilleur rapport qualité-prix sur la durée.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mieux dosés, ils sont aussi plus respectueux de votre installation, de la qualité de l'eau et de l'environnement.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="grid gap-4">
              {benefits.map((b) => (
                <div key={b.t} className="card-soft flex items-start gap-4">
                  <div className="icon-tile-primary shrink-0">{b.i}</div>
                  <div>
                    <div className="font-bold">{b.t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{b.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </ContentSection>

      <ContentSection alt>
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="badge-eyebrow mb-4">Notre catalogue</span>
          <h2 className="text-3xl md:text-4xl font-bold">Catalogue par catégorie</h2>
          <p className="mt-4 text-muted-foreground">Toutes les solutions pour chaque besoin de votre bassin.</p>
        </FadeIn>
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {cats.map((c) => (
            <FadeIn key={c.t}>
              <div className="card-feature h-full">
                <div className="icon-tile-primary mb-4">{c.i}</div>
                <h3 className="font-bold text-lg">{c.t}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <span className="badge-eyebrow mb-4">Conseil sur-mesure</span>
          <h2 className="text-3xl md:text-4xl font-bold">Conseil personnalisé pour votre bassin</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Chaque piscine est unique : volume, type de désinfection, exposition, fréquentation, dureté de l'eau locale. Nous analysons votre eau et recommandons le programme de traitement adapté à votre bassin et à vos habitudes — pas une recette générique.
          </p>
        </FadeIn>
      </ContentSection>

      <ServiceFAQ items={FAQ} />

      <ZonesLinkBar serviceLabel="Produits piscine" />
      <RelatedServices currentSlug="produits" />

      <SectionCta />
    </>
  );
}
