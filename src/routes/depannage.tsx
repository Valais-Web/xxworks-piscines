import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, Droplets, Wrench, Cpu, FlaskConical, Flame, Phone } from "lucide-react";
import { buildSeo, canonical, SITE, ZONES } from "@/lib/site-data";
import { PageHero, ContentSection } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { ContactForm } from "@/components/site/ContactForm";
import { FadeIn } from "@/components/site/FadeIn";

const TITLE = "Dépannage piscine en Suisse romande | Estavayer, Payerne, Yverdon";
const DESC = "Dépannage piscine rapide : fuites, pompes, filtres, automatismes. Intervention sur Estavayer, Payerne, Avenches, Morat, Yverdon, Neuchâtel, Fribourg.";
const PATH = "/depannage";

export const Route = createFileRoute("/depannage")({
  head: () => ({
    meta: buildSeo({ title: TITLE, description: DESC, path: PATH }),
    links: canonical(PATH),
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", serviceType: "Dépannage piscine", provider: { "@type": "LocalBusiness", name: SITE.name, telephone: SITE.phone }, areaServed: "Suisse romande" }) }],
  }),
  component: Page,
});

const pannes = [
  { i: <Droplets />, t: "Fuites", d: "Recherche et réparation de fuites de bassin, canalisations et locaux techniques." },
  { i: <Wrench />, t: "Pompe en panne", d: "Diagnostic, réparation ou remplacement de pompes de filtration." },
  { i: <AlertTriangle />, t: "Filtre défectueux", d: "Vannes, joints, masse filtrante : remise en état complète." },
  { i: <Cpu />, t: "Automatisme HS", d: "Sondes, régulateurs, électrovannes : remise en service rapide." },
  { i: <FlaskConical />, t: "Qualité d'eau", d: "Eau verte, trouble ou agressive : analyse et plan de correction." },
  { i: <Flame />, t: "Chauffage", d: "PAC, échangeur, électrique : intervention sur tous types de chauffage." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Dépannage"
        title="Dépannage piscine : intervention rapide en Suisse romande"
        subtitle="Une panne ? Un problème de qualité d'eau ? Nous diagnostiquons et intervenons rapidement."
        image="https://images.unsplash.com/photo-1559113202-c916b8e44373?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-primary text-primary-foreground py-10">
        <div className="container-prose flex flex-wrap items-center justify-between gap-4">
          <div className="text-lg font-semibold">Urgence ? Appelez-nous immédiatement.</div>
          <a href={SITE.phoneHref} className="bg-background text-primary font-semibold rounded-md px-5 py-3 inline-flex items-center gap-2"><Phone className="h-4 w-4" /> Appeler maintenant : {SITE.phone}</a>
        </div>
      </section>

      <ContentSection>
        <FadeIn><h2 className="text-3xl font-semibold">Types de pannes traitées</h2></FadeIn>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pannes.map((p) => (
            <FadeIn key={p.t}>
              <div className="card-soft h-full">
                <div className="h-11 w-11 rounded-lg bg-accent text-primary grid place-items-center mb-3">{p.i}</div>
                <h3 className="font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </ContentSection>

      <ContentSection alt>
        <FadeIn><h2 className="text-3xl font-semibold">Notre approche</h2></FadeIn>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { n: 1, t: "Diagnostic", d: "Analyse complète de l'installation pour identifier la cause réelle." },
            { n: 2, t: "Devis avant intervention", d: "Vous validez les coûts avant toute réparation." },
            { n: 3, t: "Réparation propre", d: "Travail soigné, conseils pour éviter que le problème ne revienne." },
          ].map((s) => (
            <FadeIn key={s.t}>
              <div className="card-soft text-center">
                <div className="mx-auto h-10 w-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-semibold">{s.n}</div>
                <h3 className="mt-4 font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <FadeIn>
          <h2 className="text-3xl font-semibold">Délais d'intervention</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl">Les délais varient selon l'urgence et la localisation. Les pannes critiques (fuite majeure, eau impropre) sont traitées en priorité, le plus souvent dans la journée.</p>
        </FadeIn>
      </ContentSection>

      <ContentSection alt>
        <FadeIn><h2 className="text-3xl font-semibold">Zones desservies</h2></FadeIn>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {ZONES.map((z) => (
            <Link key={z.slug} to={`/zones/${z.slug}` as string} className="bg-card border rounded-md px-4 py-4 text-center font-medium hover:border-primary hover:text-primary transition-colors">{z.name}</Link>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold">Demande d'intervention</h2>
            <p className="mt-3 text-muted-foreground">Décrivez-nous le problème, nous vous recontactons rapidement.</p>
            <a href={SITE.phoneHref} className="mt-6 btn-primary inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {SITE.phone}</a>
          </div>
          <ContactForm />
        </div>
      </ContentSection>

      <SectionCta />
    </>
  );
}
