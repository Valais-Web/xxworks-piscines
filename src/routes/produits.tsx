import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, Beaker, Sparkles, Droplets } from "lucide-react";
import { buildSeo, canonical, SITE } from "@/lib/site-data";
import { PageHero, ContentSection } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { FadeIn } from "@/components/site/FadeIn";

const TITLE = "Produits d'entretien piscine professionnels | Xx Works";
const DESC = "Produits de traitement piscine de qualité professionnelle : pH, chlore, brome, floculants, anti-calcaire. Conseil personnalisé pour votre bassin.";
const PATH = "/produits";

export const Route = createFileRoute("/produits")({
  head: () => ({
    meta: buildSeo({ title: TITLE, description: DESC, path: PATH }),
    links: canonical(PATH),
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", serviceType: "Produits d'entretien piscine", provider: { "@type": "LocalBusiness", name: SITE.name, telephone: SITE.phone }, areaServed: "Suisse romande" }) }],
  }),
  component: Page,
});

const cats = [
  { i: <FlaskConical />, t: "Désinfection", d: "Chlore lent, choc, brome, oxygène actif. Traitement efficace adapté à chaque bassin." },
  { i: <Beaker />, t: "Régulation pH/TAC", d: "Correcteurs pH+/pH-, augmentateurs d'alcalinité pour une eau parfaitement équilibrée." },
  { i: <Droplets />, t: "Floculants/Coagulants", d: "Clarification de l'eau, élimination des particules les plus fines." },
  { i: <Sparkles />, t: "Nettoyage", d: "Anti-calcaire, anti-algues, nettoyants ligne d'eau, dégraissants spécifiques." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Produits"
        title="Produits d'entretien piscine : qualité professionnelle"
        subtitle="Une gamme rigoureusement sélectionnée pour la qualité de l'eau et la durée de vie de vos équipements."
        image="https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=1600&q=80"
      />

      <ContentSection>
        <FadeIn>
          <h2 className="text-3xl font-semibold">Pourquoi du professionnel ?</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
            Les produits grand public contiennent souvent des concentrations en principes actifs réduites et de nombreux additifs inutiles. Les produits professionnels offrent une <strong>concentration supérieure</strong>, des résultats plus rapides et un meilleur rapport qualité-prix sur la durée. Mieux dosés, ils sont aussi plus respectueux de votre installation.
          </p>
        </FadeIn>
      </ContentSection>

      <ContentSection alt>
        <FadeIn><h2 className="text-3xl font-semibold">Catalogue par catégorie</h2></FadeIn>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {cats.map((c) => (
            <FadeIn key={c.t}>
              <div className="card-soft h-full">
                <div className="h-12 w-12 rounded-lg bg-accent text-primary grid place-items-center mb-3">{c.i}</div>
                <h3 className="font-semibold text-lg">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <FadeIn>
          <h2 className="text-3xl font-semibold">Conseil personnalisé</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
            Chaque piscine est unique : volume, type de désinfection, exposition, fréquentation, dureté de l'eau. Nous analysons votre eau et recommandons le programme de traitement adapté à votre bassin et à vos habitudes.
          </p>
        </FadeIn>
      </ContentSection>

      <SectionCta />
    </>
  );
}
