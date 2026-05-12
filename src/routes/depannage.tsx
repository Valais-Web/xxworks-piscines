import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, Droplets, Wrench, Cpu, FlaskConical, Flame, Phone, Clock, MapPin } from "lucide-react";
import { buildSeo, canonical, SITE, ZONES } from "@/lib/site-data";
import { PageHero, ContentSection } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { ContactForm } from "@/components/site/ContactForm";
import { FadeIn } from "@/components/site/FadeIn";
import heroImg from "@/assets/service-depannage.jpg";

const TITLE = "Dépannage piscine en Suisse romande | Estavayer, Payerne, Yverdon";
const DESC = "Dépannage piscine rapide : fuites, pompes, filtres, automatismes, chauffage. Intervention sur Estavayer, Payerne, Avenches, Morat, Yverdon, Neuchâtel, Fribourg.";
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
  { i: <Droplets className="h-6 w-6" />, t: "Fuites", d: "Recherche et réparation de fuites de bassin, canalisations et locaux techniques avec matériel professionnel." },
  { i: <Wrench className="h-6 w-6" />, t: "Pompe en panne", d: "Diagnostic, réparation ou remplacement de pompes de filtration toutes marques." },
  { i: <AlertTriangle className="h-6 w-6" />, t: "Filtre défectueux", d: "Vannes multivoies, joints, masse filtrante : remise en état complète du système." },
  { i: <Cpu className="h-6 w-6" />, t: "Automatisme HS", d: "Sondes, régulateurs, électrovannes : remise en service rapide des automatismes." },
  { i: <FlaskConical className="h-6 w-6" />, t: "Qualité d'eau", d: "Eau verte, trouble ou agressive : analyse complète et plan de correction immédiat." },
  { i: <Flame className="h-6 w-6" />, t: "Chauffage", d: "PAC, échangeur, électrique : intervention sur tous types de systèmes de chauffage." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Dépannage"
        title="Dépannage piscine : intervention rapide en Suisse romande"
        subtitle="Une panne ? Un problème de qualité d'eau ? Nous diagnostiquons précisément et intervenons rapidement pour remettre votre piscine en service."
        image={heroImg}
      />

      <section className="relative overflow-hidden text-white" style={{ backgroundImage: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(at 90% 50%, rgba(255,255,255,0.3), transparent 50%)" }} />
        <div className="container-prose py-8 relative flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-full bg-white/15 backdrop-blur grid place-items-center"><AlertTriangle className="h-5 w-5" /></span>
            <div className="text-lg font-bold">Urgence ? Appelez-nous immédiatement.</div>
          </div>
          <a href={SITE.phoneHref} className="bg-white text-pool-deep font-semibold rounded-lg px-6 py-3 inline-flex items-center gap-2 hover:bg-white/95 transition-all hover:-translate-y-0.5 shadow-lg"><Phone className="h-4 w-4" /> {SITE.phone}</a>
        </div>
      </section>

      <ContentSection>
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="badge-eyebrow mb-4">Notre expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold">Types de pannes traitées</h2>
          <p className="mt-4 text-muted-foreground">Toute la chaîne hydraulique, électrique et chimique de votre piscine.</p>
        </FadeIn>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pannes.map((p) => (
            <FadeIn key={p.t}>
              <div className="card-feature h-full">
                <div className="icon-tile mb-4">{p.i}</div>
                <h3 className="font-bold">{p.t}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </ContentSection>

      <ContentSection alt>
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="badge-eyebrow mb-4">Notre approche</span>
          <h2 className="text-3xl md:text-4xl font-bold">Une méthode claire et transparente</h2>
        </FadeIn>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { n: 1, t: "Diagnostic", d: "Analyse complète de l'installation pour identifier la cause réelle de la panne, pas juste les symptômes." },
            { n: 2, t: "Devis avant intervention", d: "Vous validez les coûts et la solution proposée avant toute réparation. Aucune surprise." },
            { n: 3, t: "Réparation propre", d: "Travail soigné, conseils personnalisés pour éviter que le problème ne revienne." },
          ].map((s) => (
            <FadeIn key={s.t}>
              <div className="card-soft text-center h-full">
                <div className="mx-auto h-12 w-12 rounded-xl grid place-items-center font-bold text-white text-lg" style={{ backgroundImage: "var(--gradient-hero)" }}>{s.n}</div>
                <h3 className="mt-4 font-bold">{s.t}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <FadeIn>
          <span className="badge-eyebrow mb-4"><Clock className="h-3.5 w-3.5" /> Réactivité</span>
          <h2 className="text-3xl md:text-4xl font-bold">Délais d'intervention</h2>
          <p className="mt-5 text-muted-foreground max-w-3xl leading-relaxed">
            Les délais varient selon l'urgence et la localisation. Les pannes critiques (fuite majeure, eau impropre, panne de filtration en pleine saison) sont traitées en priorité, le plus souvent dans la journée pour les zones proches. Pour les demandes non-urgentes, nous planifions sous 24 à 72h.
          </p>
        </FadeIn>
      </ContentSection>

      <ContentSection alt>
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="badge-eyebrow mb-4"><MapPin className="h-3.5 w-3.5" /> Couverture</span>
          <h2 className="text-3xl md:text-4xl font-bold">Zones desservies</h2>
        </FadeIn>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {ZONES.map((z) => (
            <Link key={z.slug} to={`/zones/${z.slug}` as string} className="bg-card border rounded-xl px-4 py-4 text-center font-semibold hover:border-pool hover:text-pool-deep hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm">
              <MapPin className="h-3.5 w-3.5 text-pool-deep" />
              {z.name}
            </Link>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2">
            <span className="badge-eyebrow mb-4">Demande d'intervention</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Décrivez-nous votre panne</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Plus votre description est précise, plus notre intervention sera efficace dès la première visite.</p>
            <a href={SITE.phoneHref} className="mt-7 btn-primary"><Phone className="h-4 w-4" /> {SITE.phone}</a>
          </div>
          <div className="lg:col-span-3"><ContactForm /></div>
        </div>
      </ContentSection>

      <SectionCta />
    </>
  );
}
