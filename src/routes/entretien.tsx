import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { buildSeo, canonical, SITE } from "@/lib/site-data";
import { PageHero, ContentSection } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { FadeIn } from "@/components/site/FadeIn";

const TITLE = "Entretien piscine en Suisse romande | Suivi annuel, mise en service, hivernage";
const DESC = "Mise en service printemps, suivi saisonnier, mise en hivernage. Service d'entretien piscine à la carte et personnalisable. Estavayer, Payerne, Yverdon.";
const PATH = "/entretien";

export const Route = createFileRoute("/entretien")({
  head: () => ({
    meta: buildSeo({ title: TITLE, description: DESC, path: PATH }),
    links: canonical(PATH),
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", serviceType: "Entretien piscine", provider: { "@type": "LocalBusiness", name: SITE.name, telephone: SITE.phone }, areaServed: "Suisse romande" }) }],
  }),
  component: Page,
});

const services = [
  ["Mise en service printemps", true],
  ["Suivi hebdomadaire", true],
  ["Suivi bi-mensuel", true],
  ["Suivi mensuel", true],
  ["Interventions ponctuelles", true],
  ["Hivernage actif", true],
  ["Hivernage passif", true],
] as const;

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Entretien"
        title="Entretien piscine : déléguez, profitez"
        subtitle="Un programme d'entretien sur-mesure pour préserver durablement votre piscine et la qualité de l'eau."
        image="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=80"
      />

      <ContentSection>
        <FadeIn>
          <h2 className="text-3xl font-semibold">Service à la carte</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl">
            Chaque piscine est unique. Nous adaptons notre offre à votre installation, à votre rythme et à vos contraintes.
          </p>
        </FadeIn>
        <div className="mt-8 overflow-hidden rounded-lg border bg-card">
          <table className="w-full text-sm">
            <tbody>
              {services.map(([n]) => (
                <tr key={n} className="border-b last:border-0">
                  <td className="py-3 px-5 font-medium">{n}</td>
                  <td className="py-3 px-5 text-right text-primary"><Check className="h-5 w-5 inline" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      <ContentSection alt>
        <div className="grid lg:grid-cols-2 gap-10">
          <FadeIn>
            <h2 className="text-2xl font-semibold">Mise en service au printemps</h2>
            <ul className="mt-5 space-y-3">
              {["Contrôle complet de l'installation", "Paramétrage des automatismes", "Nettoyage du bassin", "Équilibrage chimique de l'eau", "Remise en route et tests"].map((t) => (
                <li key={t} className="flex gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span>{t}</span></li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn>
            <h2 className="text-2xl font-semibold">Suivi saisonnier</h2>
            <p className="mt-5 text-muted-foreground">Selon la fréquence choisie (hebdomadaire, bi-mensuelle ou mensuelle), nous assurons :</p>
            <ul className="mt-4 space-y-3">
              {["Analyse de l'eau et ajustement", "Nettoyage skimmers, paniers, ligne d'eau", "Contre-lavage du filtre", "Vérification des équipements", "Compte-rendu d'intervention"].map((t) => (
                <li key={t} className="flex gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span>{t}</span></li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </ContentSection>

      <ContentSection>
        <FadeIn><h2 className="text-3xl font-semibold">Mise en hivernage</h2></FadeIn>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card-soft">
            <h3 className="font-semibold text-lg">Hivernage actif</h3>
            <p className="mt-3 text-sm text-muted-foreground">La filtration tourne quelques heures par jour, par cycles courts. Idéal pour les piscines bien isolées et automatisées. Remise en route au printemps simplifiée.</p>
          </div>
          <div className="card-soft">
            <h3 className="font-semibold text-lg">Hivernage passif</h3>
            <p className="mt-3 text-sm text-muted-foreground">Vidange partielle, purge complète des canalisations, mise hors service de la filtration. Recommandé pour les régions à fort gel ou les longues absences.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection alt>
        <FadeIn>
          <h2 className="text-3xl font-semibold">Suivi durant vos absences</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl">
            Vacances ou résidence secondaire : nous prenons soin de votre installation pour que vous retrouviez votre piscine en parfait état, sans mauvaise surprise.
          </p>
        </FadeIn>
      </ContentSection>

      <SectionCta />
    </>
  );
}
