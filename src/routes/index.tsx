import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Wrench, Phone, Cog, Droplets, ShieldCheck, Award, Zap, HeartHandshake, Check } from "lucide-react";
import { SERVICES, ZONES, SITE, buildSeo, canonical } from "@/lib/site-data";
import { ContactForm } from "@/components/site/ContactForm";
import { FadeIn } from "@/components/site/FadeIn";

const TITLE = "Pisciniste & technique piscine en Suisse romande | Xx Works";
const DESC = "Spécialiste piscine, automatisation, entretien et dépannage à Estavayer, Payerne, Yverdon, Neuchâtel et Fribourg. 15 ans d'expérience, service clé en main.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildSeo({ title: TITLE, description: DESC, path: "/" }),
    links: canonical("/"),
  }),
  component: Index,
});

const HERO_IMG = "https://images.unsplash.com/photo-1601928224417-9d10131c2d76?auto=format&fit=crop&w=1600&q=80";

const serviceIcons: Record<string, React.ReactNode> = {
  automatisation: <Cog className="h-6 w-6" />,
  entretien: <Droplets className="h-6 w-6" />,
  depannage: <Wrench className="h-6 w-6" />,
  equipements: <Zap className="h-6 w-6" />,
  produits: <Sparkles className="h-6 w-6" />,
};

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={HERO_IMG} alt="Piscine moderne avec technique professionnelle" className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/30" />
        </div>
        <div className="container-prose py-24 md:py-32 text-white">
          <FadeIn className="max-w-2xl">
            <p className="uppercase tracking-widest text-xs text-primary-light mb-4">Suisse romande · Brevet fédéral</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Votre pisciniste spécialisé en technique piscine et automatisation
            </h1>
            <p className="mt-6 text-lg opacity-90 max-w-xl">
              Automatisation, entretien et dépannage de votre piscine en Suisse romande. Un service clé en main par un professionnel diplômé.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Demander un devis</Link>
              <a href="#services" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary">Découvrir nos services</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3 piliers */}
      <section className="py-20">
        <div className="container-prose grid md:grid-cols-3 gap-8">
          {[
            { icon: <Award className="h-7 w-7 text-primary" />, t: "Expertise technique", d: "Brevet fédéral en technique piscine et 15 ans d'expérience sur le terrain." },
            { icon: <HeartHandshake className="h-7 w-7 text-primary" />, t: "Service personnalisé", d: "Prestations à la carte, structure indépendante, flexibilité maximale." },
            { icon: <ShieldCheck className="h-7 w-7 text-primary" />, t: "Accompagnement complet", d: "De la conception au suivi annuel, un seul interlocuteur de confiance." },
          ].map((b, i) => (
            <FadeIn key={i}>
              <div className="card-soft h-full">
                <div className="h-12 w-12 rounded-lg bg-accent grid place-items-center mb-4">{b.icon}</div>
                <h3 className="text-lg font-semibold">{b.t}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{b.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary py-20">
        <div className="container-prose">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-center">Nos services</h2>
            <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto">Une offre complète pour profiter de votre piscine sans contrainte.</p>
          </FadeIn>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <FadeIn key={s.slug}>
                <Link to={`/${s.slug}` as string} className="card-soft block h-full group">
                  <div className="h-12 w-12 rounded-lg bg-accent text-primary grid place-items-center mb-4">{serviceIcons[s.slug]}</div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-primary">En savoir plus →</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="py-20">
        <div className="container-prose grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold">Pourquoi Xx Works</h2>
            <ul className="mt-6 space-y-4">
              {[
                "Brevet fédéral en technique piscine",
                "15 ans d'expérience dans le domaine",
                "Structure indépendante et réactive",
                "Maîtrise des connaissances techniques et chimiques",
              ].map((t) => (
                <li key={t} className="flex gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span>{t}</span></li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn>
            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80" alt="Local technique piscine professionnel" loading="lazy" className="rounded-lg shadow-card w-full object-cover aspect-[4/3]" />
          </FadeIn>
        </div>
      </section>

      {/* Zones */}
      <section className="bg-secondary py-20">
        <div className="container-prose">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-center">Nous intervenons dans toute la Suisse romande</h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {ZONES.map((z) => (
              <Link key={z.slug} to={`/zones/${z.slug}` as string} className="bg-card border rounded-md px-4 py-4 text-center font-medium hover:border-primary hover:text-primary transition-colors">
                {z.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container-prose">
          <FadeIn><h2 className="text-3xl md:text-4xl font-semibold text-center">Notre processus</h2></FadeIn>
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {["Contact", "Évaluation sur place", "Devis détaillé", "Réalisation"].map((step, i) => (
              <FadeIn key={step}>
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-items-center font-semibold">{i + 1}</div>
                  <h3 className="mt-4 font-semibold">{step}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-prose grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Prêt à libérer votre temps libre ?</h2>
            <p className="mt-4 opacity-90">Contactez-nous pour un devis gratuit et personnalisé. Réponse rapide garantie.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="bg-background text-primary font-semibold rounded-md px-5 py-3 inline-flex items-center gap-2"><Phone className="h-4 w-4" />{SITE.phone}</a>
            </div>
          </div>
          <div className="bg-background text-foreground rounded-lg p-2">
            <ContactForm compact />
          </div>
        </div>
      </section>
    </>
  );
}
