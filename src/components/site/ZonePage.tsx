import { Link } from "@tanstack/react-router";
import { Cog, Droplets, Wrench, Zap, Sparkles, Award, ShieldCheck, HeartHandshake, MapPin, Clock, Check } from "lucide-react";
import { SERVICES, SITE, type Zone } from "@/lib/site-data";
import { PageHero, ContentSection } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { FadeIn } from "@/components/site/FadeIn";

const serviceIcons: Record<string, React.ReactNode> = {
  automatisation: <Cog className="h-6 w-6" />,
  entretien: <Droplets className="h-6 w-6" />,
  depannage: <Wrench className="h-6 w-6" />,
  equipements: <Zap className="h-6 w-6" />,
  produits: <Sparkles className="h-6 w-6" />,
};

export function ZonePage({ zone }: { zone: Zone }) {
  const mapsSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${osmBbox(zone.name)}&layer=mapnik`;
  return (
    <>
      <PageHero
        eyebrow={`Pisciniste · ${zone.name}`}
        title={`Pisciniste à ${zone.name} : services piscine clé en main`}
        subtitle={`Votre pisciniste de confiance à ${zone.name} et dans toute la région. Automatisation, entretien et dépannage par un professionnel diplômé.`}
        image="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80"
      />

      <ContentSection>
        <div className="grid lg:grid-cols-3 gap-8">
          <FadeIn>
            <h2 className="text-2xl font-semibold">Xx Works à {zone.name}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Basés à Granges-de-Vesin, à {zone.distance.split(" depuis")[0]} de {zone.name}, nous intervenons régulièrement dans votre région pour les particuliers et les régies.
            </p>
          </FadeIn>
          <FadeIn>
            <h3 className="text-lg font-semibold">Particularités locales</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{zone.particularite}</p>
          </FadeIn>
          <FadeIn>
            <h3 className="text-lg font-semibold">Engagement local</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Service réactif, conseils sur-mesure et suivi de proximité pour les habitants de {zone.name} et des communes environnantes.
            </p>
          </FadeIn>
        </div>
      </ContentSection>

      <ContentSection alt>
        <FadeIn><h2 className="text-3xl font-semibold">Nos services à {zone.name}</h2></FadeIn>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <FadeIn key={s.slug}>
              <Link to={`/${s.slug}` as string} className="card-soft block h-full group">
                <div className="h-12 w-12 rounded-lg bg-accent text-primary grid place-items-center mb-3">{serviceIcons[s.slug]}</div>
                <h3 className="font-semibold group-hover:text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="card-soft h-full">
              <div className="flex items-center gap-3"><Clock className="h-6 w-6 text-primary" /><h2 className="text-xl font-semibold">Délai d'intervention</h2></div>
              <p className="mt-3 text-muted-foreground">{zone.delai}</p>
              <p className="mt-2 text-sm text-muted-foreground">Distance : {zone.distance}.</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="card-soft h-full">
              <div className="flex items-center gap-3"><MapPin className="h-6 w-6 text-primary" /><h2 className="text-xl font-semibold">Communes environnantes desservies</h2></div>
              <ul className="mt-3 grid grid-cols-2 gap-y-1.5 text-sm text-muted-foreground">
                {zone.communes.map((c) => (<li key={c} className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />{c}</li>))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </ContentSection>

      <ContentSection alt>
        <FadeIn><h2 className="text-3xl font-semibold text-center">{zone.name} sur la carte</h2></FadeIn>
        <div className="mt-8 rounded-lg overflow-hidden border shadow-card aspect-[16/8]">
          <iframe title={`Carte ${zone.name}`} src={mapsSrc} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </ContentSection>

      <ContentSection>
        <FadeIn><h2 className="text-3xl font-semibold text-center">Pourquoi choisir Xx Works</h2></FadeIn>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { i: <Award className="h-7 w-7 text-primary" />, t: "Expertise technique", d: "Maîtrise complète de la technique piscine moderne." },
            { i: <ShieldCheck className="h-7 w-7 text-primary" />, t: "Brevet fédéral", d: "Certification reconnue, gage de sérieux et de compétence." },
            { i: <HeartHandshake className="h-7 w-7 text-primary" />, t: "Service personnalisé", d: "Une approche sur-mesure adaptée à chaque client." },
          ].map((b) => (
            <FadeIn key={b.t}>
              <div className="card-soft h-full">
                <div className="h-12 w-12 rounded-lg bg-accent grid place-items-center mb-3">{b.i}</div>
                <h3 className="font-semibold">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </ContentSection>

      <SectionCta title={`Demandez votre devis à ${zone.name}`} subtitle={`Réponse rapide pour ${zone.name} et environs · ${SITE.phone}`} />
    </>
  );
}

// Approximate bounding box per city for OSM embed (lng_min,lat_min,lng_max,lat_max)
function osmBbox(name: string): string {
  const map: Record<string, string> = {
    "Estavayer-le-Lac": "6.82,46.83,6.92,46.88",
    "Payerne": "6.90,46.79,7.00,46.84",
    "Avenches": "7.00,46.85,7.10,46.91",
    "Morat": "7.07,46.90,7.17,46.96",
    "Yverdon-les-Bains": "6.60,46.74,6.70,46.81",
    "Lucens": "6.79,46.69,6.89,46.74",
    "Neuchâtel": "6.88,46.96,7.00,47.04",
    "Fribourg": "7.10,46.77,7.20,46.84",
  };
  return map[name] ?? "6.0,46.0,8.0,47.0";
}
