import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Droplets, Cloud, Home, Check } from "lucide-react";
import { buildSeo, canonical, SITE } from "@/lib/site-data";
import { PageHero, ContentSection } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { FadeIn } from "@/components/site/FadeIn";

const TITLE = "Automatisation piscine en Suisse romande | Smart pool, domotique";
const DESC = "Automatisez votre piscine : régulation pH/chlore, contre-lavage, suivi à distance. Économisez du temps, des produits et de l'eau. Devis gratuit.";
const PATH = "/automatisation";

export const Route = createFileRoute("/automatisation")({
  head: () => ({
    meta: buildSeo({ title: TITLE, description: DESC, path: PATH }),
    links: canonical(PATH),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        serviceType: "Automatisation piscine", provider: { "@type": "LocalBusiness", name: SITE.name, telephone: SITE.phone },
        areaServed: "Suisse romande",
      }),
    }],
  }),
  component: Page,
});

const features = [
  { icon: <Droplets className="h-6 w-6" />, t: "Régulation automatique pH/chlore", d: "Maintien permanent d'une eau parfaitement équilibrée et désinfectée." },
  { icon: <Cpu className="h-6 w-6" />, t: "Contre-lavage automatique", d: "Filtration entretenue automatiquement, sans manipulation." },
  { icon: <Cloud className="h-6 w-6" />, t: "Suivi à distance", d: "Pilotez et surveillez votre installation depuis votre smartphone." },
  { icon: <Home className="h-6 w-6" />, t: "Domotique intégrée", d: "Intégration avec votre maison connectée pour un confort total." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Automatisation"
        title="Automatisation piscine : libérez-vous de l'entretien manuel"
        subtitle="Une piscine intelligente qui s'entretient seule. Économies de temps, de produits chimiques et d'énergie."
        image="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80"
      />

      <ContentSection>
        <FadeIn>
          <h2 className="text-3xl font-semibold">Le constat</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
            L'entretien manuel d'une piscine demande entre 2 et 5 heures de travail par semaine : tests d'eau, ajustement chimique, contre-lavage du filtre, contrôle des paramètres. Ces tâches répétitives, souvent négligées, dégradent rapidement la qualité de l'eau et l'état des équipements.
          </p>
        </FadeIn>
      </ContentSection>

      <ContentSection alt>
        <FadeIn><h2 className="text-3xl font-semibold">Notre solution Smart Pool</h2></FadeIn>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <FadeIn key={f.t}>
              <div className="card-soft h-full">
                <div className="h-12 w-12 rounded-lg bg-accent text-primary grid place-items-center mb-3">{f.icon}</div>
                <h3 className="font-semibold text-lg">{f.t}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{f.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <FadeIn>
          <h2 className="text-3xl font-semibold">Marques partenaires</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl">Nous travaillons exclusivement avec des marques reconnues pour leur fiabilité et leurs performances.</p>
        </FadeIn>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { n: "Bayrol Poolmanager", d: "Pilotage centralisé pH/Rx" },
            { n: "Dryden Aqua SPACE", d: "Filtration nouvelle génération" },
            { n: "Besgo", d: "Vannes multivoies automatiques" },
            { n: "Badu", d: "Pompes à vitesse variable" },
            { n: "OSF", d: "Régulation et électronique" },
          ].map((b) => (
            <div key={b.n} className="card-soft text-center">
              <div className="font-semibold">{b.n}</div>
              <div className="text-xs text-muted-foreground mt-1">{b.d}</div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection alt>
        <FadeIn>
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold">Retour sur investissement</h2>
            <p className="mt-3 opacity-95 max-w-3xl">
              Une pompe à vitesse variable, par exemple, se rentabilise en moyenne en <strong>2 ans</strong> grâce aux économies d'électricité réalisées. Ajoutez-y la diminution de la consommation de produits chimiques et la réduction des appels au technicien : l'automatisation est un investissement rentable.
            </p>
          </div>
        </FadeIn>
      </ContentSection>

      <ContentSection>
        <FadeIn><h2 className="text-3xl font-semibold">Cas d'usage</h2></FadeIn>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { t: "En vacances", d: "Votre piscine continue de tourner parfaitement, sans intervention. Vous recevez une alerte si quelque chose cloche." },
            { t: "Au quotidien", d: "Plus besoin de doser, tester ou contre-laver manuellement. La piscine s'entretient pendant que vous vivez votre vie." },
            { t: "En cas de panne", d: "Le système vous alerte immédiatement. Nous pouvons souvent diagnostiquer à distance." },
          ].map((c) => (
            <FadeIn key={c.t}>
              <div className="card-soft h-full">
                <Check className="h-5 w-5 text-primary mb-3" />
                <h3 className="font-semibold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </ContentSection>

      <SectionCta />
    </>
  );
}
