import { Link } from "@tanstack/react-router";
import { Cog, Droplets, Wrench, Zap, Sparkles, Award, ShieldCheck, HeartHandshake, MapPin, Clock, Check, ArrowRight, Lightbulb } from "lucide-react";
import { SERVICES, SITE, type Zone } from "@/lib/site-data";
import { PageHero, ContentSection } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { FadeIn } from "@/components/site/FadeIn";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import zonesImg from "@/assets/hero-zones.jpg";

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
        image={zonesImg}
      />

      <ContentSection>
        {zone.localDescription && (
          <FadeIn className="max-w-3xl mb-8">
            <p className="text-[15px] text-muted-foreground leading-relaxed">{zone.localDescription}</p>
          </FadeIn>
        )}
        <div className="grid lg:grid-cols-3 gap-8">
          <FadeIn>
            <div className="card-feature h-full">
              <div className="icon-tile-primary mb-4"><MapPin className="h-5 w-5" /></div>
              <h2 className="text-xl font-bold">Xx Works à {zone.name}</h2>
              <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">
                Basés à Granges-de-Vesin, à {zone.distance.split(" depuis")[0]} de {zone.name}, nous intervenons régulièrement dans votre région pour les particuliers et les régies.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="card-feature h-full">
              <div className="icon-tile mb-4"><Droplets className="h-5 w-5" /></div>
              <h3 className="text-xl font-bold">Particularités locales</h3>
              <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">{zone.particularite}</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="card-feature h-full">
              <div className="icon-tile-primary mb-4"><HeartHandshake className="h-5 w-5" /></div>
              <h3 className="text-xl font-bold">Engagement local</h3>
              <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">
                Structure indépendante, un seul interlocuteur. Pas de centre d'appel, pas de sous-traitant : vous avez toujours Guillaume en direct, du premier contact au suivi annuel.
              </p>
            </div>
          </FadeIn>
        </div>
      </ContentSection>

      <ContentSection alt>
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="badge-eyebrow mb-4">Prestations locales</span>
          <h2 className="text-3xl md:text-4xl font-bold">Nos services à {zone.name}</h2>
        </FadeIn>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <FadeIn key={s.slug}>
              <Link to={`/${s.slug}` as string} className="card-feature block h-full group">
                <div className="icon-tile mb-4">{serviceIcons[s.slug]}</div>
                <h3 className="font-bold group-hover:text-pool-deep transition-colors">{s.title}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-pool-deep">
                  Découvrir <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn>
            <div className="card-soft h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-tile-primary"><Clock className="h-5 w-5" /></div>
                <h2 className="text-xl font-bold">Délais d'intervention</h2>
              </div>
              <p className="text-[15px] text-muted-foreground leading-relaxed">{zone.delai}</p>
              <p className="mt-3 text-sm text-muted-foreground">Distance depuis notre base : <strong className="text-foreground">{zone.distance}</strong>.</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="card-soft h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-tile"><Check className="h-5 w-5" /></div>
                <h2 className="text-xl font-bold">Ce que nous faisons pour vous</h2>
              </div>
              <ul className="space-y-2.5 text-[15px]">
                {[
                  "Diagnostic précis avant toute intervention",
                  "Devis écrit validé avant réparation",
                  "Un seul interlocuteur de la visite au suivi",
                  "Rapport d'intervention transmis par email",
                  "Contrats annuels à tarif préférentiel",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5 items-start">
                    <Check className="h-4 w-4 text-pool-deep shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </ContentSection>

      {zone.conseil && (
        <ContentSection>
          <FadeIn>
            <div className="card-soft flex gap-5 items-start">
              <div className="icon-tile-primary shrink-0"><Lightbulb className="h-5 w-5" /></div>
              <div>
                <h2 className="font-bold text-lg">Conseil local</h2>
                <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{zone.conseil}</p>
              </div>
            </div>
          </FadeIn>
        </ContentSection>
      )}

      <ContentSection alt>
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <FadeIn className="lg:col-span-2">
            <span className="badge-eyebrow mb-4">Zone d'intervention</span>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">Nous intervenons à {zone.name} et dans ses environs</h2>
            <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed">
              Depuis notre base de Granges-de-Vesin, à {zone.distance.split(" depuis")[0]} de {zone.name}, nous couvrons toute la région sans frais de déplacement excessifs. La carte montre notre périmètre habituel d'intervention.
            </p>
            <ul className="mt-5 space-y-2">
              {zone.communes.map((c) => (
                <li key={c} className="flex gap-2 items-center text-sm">
                  <MapPin className="h-3.5 w-3.5 text-pool-deep shrink-0" />{c}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden border shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] aspect-[4/3]">
              <iframe title={`Zone d'intervention ${zone.name}`} src={mapsSrc} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </FadeIn>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <FadeIn>
            <span className="badge-eyebrow mb-4">Pourquoi Xx Works</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Un spécialiste, pas un généraliste</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Beaucoup de paysagistes proposent des services piscine. Peu ont la formation technique et chimique pour les assurer correctement. Guillaume Risson détient un <strong>brevet fédéral en technique piscine</strong> et 15 ans d'expérience dédiés à ce métier — hydraulique, automatisation, chimie de l'eau.
            </p>
            <ul className="mt-7 space-y-3.5">
              {[
                "Brevet fédéral en technique piscine (formation professionnelle supérieure)",
                "Maîtrise complète de la chimie, de l'hydraulique et de l'automatisation",
                "Marques pro exclusives : Bayrol, Dryden Aqua, Badu, Besgo, OSF",
                "Devis transparent, validé avec vous avant toute intervention",
                "Structure indépendante : réactivité et flexibilité maximales",
              ].map((t) => (
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
            <div className="grid gap-4">
              {[
                { i: <Award className="h-5 w-5" />, t: "Brevet fédéral", d: "Seule certification suisse reconnue en technique piscine. Gage de formation continue et de maîtrise réelle du métier." },
                { i: <ShieldCheck className="h-5 w-5" />, t: "15 ans d'expérience", d: "Des centaines d'installations connues dans la région. Chaque diagnostic est posé avec recul et précision." },
                { i: <HeartHandshake className="h-5 w-5" />, t: "Accompagnement complet", d: "De la mise en service au suivi hivernal, un seul interlocuteur qui connaît votre installation." },
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

      {zone.faq && zone.faq.length > 0 && (
        <ContentSection>
          <FadeIn className="max-w-3xl mx-auto">
            <span className="badge-eyebrow mb-4">Questions fréquentes</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">FAQ — {zone.name}</h2>
            <div className="mt-10">
              <Accordion type="single" collapsible>
                {zone.faq.map((item, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`}>
                    <AccordionTrigger className="text-left font-semibold text-base py-5">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed pb-5">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </ContentSection>
      )}

      <SectionCta title={`Demandez votre devis à ${zone.name}`} subtitle={`Réponse rapide pour ${zone.name} et environs · ${SITE.phone}`} />
    </>
  );
}

function osmBbox(name: string): string {
  const map: Record<string, string> = {
    "Estavayer-le-Lac": "6.62,46.74,7.07,46.96",
    "Payerne": "6.72,46.71,7.17,46.93",
    "Avenches": "6.82,46.77,7.27,46.99",
    "Morat": "6.89,46.82,7.34,47.04",
    "Yverdon-les-Bains": "6.42,46.67,6.87,46.89",
    "Lucens": "6.62,46.60,7.07,46.82",
    "Neuchâtel": "6.71,46.89,7.16,47.11",
    "Fribourg": "6.93,46.69,7.38,46.91",
  };
  return map[name] ?? "6.0,46.0,8.0,47.0";
}
