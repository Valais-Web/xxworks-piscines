import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Wrench, Phone, Cog, Droplets, ShieldCheck, Award, Zap, HeartHandshake, Check, ArrowRight, Star, MapPin, Clock, Quote, Waves, HardHat } from "lucide-react";
import { SERVICES, ZONES, SITE, buildSeo, canonical } from "@/lib/site-data";
import { ContactForm } from "@/components/site/ContactForm";
import { FadeIn } from "@/components/site/FadeIn";
import heroImg from "@/assets/hero-home.jpg";
import teamImg from "@/assets/about-team.jpg";
import waterImg from "@/assets/service-produits.jpg";

const TITLE = "Pisciniste en Suisse romande | Xx Works Sàrl";
const DESC = "Automatisation, entretien et dépannage de piscines en Suisse romande. 15 ans d'expérience, brevet fédéral. Devis gratuit sous 24h.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildSeo({ title: TITLE, description: DESC, path: "/" }),
    links: canonical("/"),
  }),
  component: Index,
});

const serviceIcons: Record<string, React.ReactNode> = {
  construction: <HardHat className="h-6 w-6" />,
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
          <img src={heroImg} alt="Piscine luxueuse au crépuscule en Suisse romande" className="h-full w-full object-cover" loading="eager" width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, oklch(0.18 0.05 240 / 0.85) 0%, oklch(0.32 0.13 245 / 0.55) 50%, oklch(0.36 0.08 150 / 0.30) 100%)" }} />
        </div>
        <div className="container-prose py-24 md:py-36 text-white">
          <FadeIn className="max-w-3xl">
            <span className="badge-eyebrow-light mb-6"><Waves className="h-3.5 w-3.5" /> Suisse romande · Brevet fédéral</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-bold leading-[1.05]">
              Votre pisciniste expert en <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #ffffff 0%, #a8d4ff 100%)" }}>technique & automatisation</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl opacity-95 max-w-2xl leading-relaxed">
              Conception, automatisation, entretien et dépannage de piscines privées en Suisse romande. Un service clé en main par un professionnel diplômé.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="bg-white text-pool-deep hover:bg-white/95 transition-all hover:-translate-y-0.5 font-semibold rounded-lg px-7 py-3.5 inline-flex items-center gap-2 shadow-xl">
                Demander un devis gratuit <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#services" className="btn-glass !py-3.5 !px-7">Découvrir nos services</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <span className="flex items-center gap-2 opacity-95"><ShieldCheck className="h-4 w-4 text-pool-light" /> Brevet fédéral</span>
              <span className="flex items-center gap-2 opacity-95"><Award className="h-4 w-4 text-pool-light" /> 15 ans d'expérience</span>
              <span className="flex items-center gap-2 opacity-95"><Clock className="h-4 w-4 text-pool-light" /> Réponse sous 24h</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-10 px-4">
        <div className="container-prose">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] bg-card">
            {[
              { v: "15+", l: "Années d'expertise" },
              { v: "8", l: "Zones desservies" },
              { v: "200+", l: "Piscines suivies" },
              { v: "24h", l: "Délai de réponse" },
            ].map((s) => (
              <div key={s.l} className="bg-card px-4 py-7 text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{s.v}</div>
                <div className="mt-1 text-sm text-muted-foreground font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 piliers */}
      <section className="section">
        <div className="container-prose">
          <h2 className="sr-only">Pourquoi choisir Xx Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Award className="h-6 w-6" />, t: "Expertise certifiée", d: "Brevet fédéral en technique piscine et 15 ans de pratique sur des installations variées en Suisse romande." },
              { icon: <HeartHandshake className="h-6 w-6" />, t: "Service personnalisé", d: "Structure indépendante : prestations à la carte, accompagnement direct et flexibilité maximale." },
              { icon: <ShieldCheck className="h-6 w-6" />, t: "Suivi de A à Z", d: "De la conception au suivi annuel, un seul interlocuteur de confiance, des conseils transparents." },
            ].map((b, i) => (
              <FadeIn key={i}>
                <div className="card-feature h-full">
                  <div className="icon-tile-primary mb-5">{b.icon}</div>
                  <h3 className="text-lg font-bold">{b.t}</h3>
                  <p className="mt-2.5 text-muted-foreground text-[15px] leading-relaxed">{b.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-water-soft" />
        <div className="container-prose">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <span className="badge-eyebrow mb-4">Nos prestations</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Une expertise complète pour votre piscine</h2>
            <p className="text-muted-foreground mt-5 text-lg">De l'automatisation au dépannage, profitez d'une eau parfaite sans effort.</p>
          </FadeIn>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <FadeIn key={s.slug}>
                <Link to={`/${s.slug}` as string} className="card-feature block h-full group">
                  <div className="icon-tile mb-5">{serviceIcons[s.slug]}</div>
                  <h3 className="text-lg font-bold group-hover:text-pool-deep transition-colors">{s.title}</h3>
                  <p className="mt-2.5 text-[15px] text-muted-foreground leading-relaxed">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-pool-deep">
                    En savoir plus <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi - split image */}
      <section className="section">
        <div className="container-prose grid lg:grid-cols-2 gap-14 items-center">
          <FadeIn>
            <span className="badge-eyebrow mb-4">Pourquoi Xx Works</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Un partenaire de confiance pour chaque saison</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Nous mettons notre expertise technique au service de votre tranquillité. Chaque intervention est l'occasion de prolonger la vie de votre installation, d'optimiser sa consommation et de garantir une qualité d'eau irréprochable.
            </p>
            <ul className="mt-7 space-y-3.5">
              {[
                "Brevet fédéral en technique piscine",
                "Maîtrise de la chimie et de l'hydraulique",
                "Marques pro : Bayrol, Dryden Aqua, Badu, Besgo, OSF",
                "Devis transparents, validés avant intervention",
                "Réactivité : structure indépendante et locale",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full grid place-items-center mt-0.5 shrink-0" style={{ backgroundImage: "var(--gradient-water)" }}>
                    <Check className="h-3.5 w-3.5 text-white" />
                  </span>
                  <span className="text-[15px]">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/contact" className="btn-primary">Discuter de mon projet <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="relative">
              <img src={teamImg} alt="Technicien Xx Works en intervention" loading="lazy" className="rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] w-full object-cover aspect-[4/5]" />
              <div className="absolute -bottom-6 -left-6 bg-card border rounded-xl p-5 shadow-xl max-w-[230px] hidden md:block">
                <div className="flex gap-0.5 text-pool-deep">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-2 text-sm font-medium leading-snug">"Service impeccable, automatisation au top."</p>
                <p className="mt-1 text-xs text-muted-foreground">— Client à Estavayer</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-water-soft">
        <div className="container-prose">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <span className="badge-eyebrow mb-4">Notre méthode</span>
            <h2 className="text-3xl md:text-4xl font-bold">Un processus simple et transparent</h2>
          </FadeIn>
          <div className="mt-14 grid md:grid-cols-4 gap-6 relative">
            {[
              { t: "Premier contact", d: "Téléphone, email ou formulaire — vous décrivez votre besoin." },
              { t: "Visite & écoute", d: "Évaluation sur place de votre installation et de vos attentes." },
              { t: "Devis détaillé", d: "Proposition claire, sans engagement, validée avec vous." },
              { t: "Réalisation", d: "Intervention soignée et suivi post-prestation." },
            ].map((step, i) => (
              <FadeIn key={step.t}>
                <div className="card-soft text-center h-full">
                  <div className="mx-auto h-12 w-12 rounded-xl grid place-items-center font-bold text-white text-lg" style={{ backgroundImage: "var(--gradient-hero)" }}>{i + 1}</div>
                  <h3 className="mt-4 font-bold">{step.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section">
        <div className="container-prose">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <span className="badge-eyebrow mb-4">Ils nous font confiance</span>
            <h2 className="text-3xl md:text-4xl font-bold">Témoignages clients</h2>
          </FadeIn>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { n: "Marc D.", c: "Avenches", t: "Installation d'une régulation Bayrol et d'une pompe à vitesse variable. Travail propre, conseils pertinents, économie d'énergie immédiate." },
              { n: "Sophie L.", c: "Yverdon-les-Bains", t: "Suivi annuel de notre piscine depuis 3 ans. Toujours ponctuel, professionnel, et l'eau est parfaite en permanence." },
              { n: "Famille Rey", c: "Fribourg", t: "Dépannage d'urgence un dimanche. Intervention rapide, problème résolu, très bon contact. Je recommande." },
            ].map((tm) => (
              <FadeIn key={tm.n}>
                <div className="card-soft h-full">
                  <Quote className="h-7 w-7 text-pool-deep/60" />
                  <p className="mt-3 text-[15px] leading-relaxed">{tm.t}</p>
                  <div className="mt-5 pt-4 border-t flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-sm">{tm.n}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" />{tm.c}</div>
                    </div>
                    <div className="flex gap-0.5 text-pool-deep">
                      {[1,2,3,4,5].map(i => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Zones avec image */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 -z-10">
          <img src={waterImg} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.32 0.13 245 / 0.92) 0%, oklch(0.36 0.08 150 / 0.85) 100%)" }} />
        </div>
        <div className="container-prose section">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <span className="badge-eyebrow-light mb-4">Zones desservies</span>
            <h2 className="text-3xl md:text-4xl font-bold">Nous intervenons dans toute la Suisse romande</h2>
            <p className="mt-4 opacity-90">Basés à Granges-de-Vesin, nous couvrons l'ensemble de la Broye, du canton de Fribourg, du Nord vaudois et de Neuchâtel.</p>
          </FadeIn>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {ZONES.map((z) => (
              <Link key={z.slug} to={`/zones/${z.slug}` as string} className="group bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 hover:border-white/40 rounded-xl px-4 py-4 text-center font-semibold transition-all text-sm flex items-center justify-center gap-2">
                <MapPin className="h-3.5 w-3.5 opacity-70" />
                {z.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA + form */}
      <section className="section bg-water-soft">
        <div className="container-prose grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2">
            <span className="badge-eyebrow mb-4">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Parlons de votre projet piscine</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Devis gratuit et personnalisé, réponse sous 24h ouvrées. Conseils sans engagement.</p>
            <div className="mt-8 space-y-4">
              <a href={SITE.phoneHref} className="flex items-center gap-3 group">
                <span className="icon-tile-primary"><Phone className="h-5 w-5" /></span>
                <span>
                  <span className="block text-xs text-muted-foreground font-medium uppercase tracking-wider">Téléphone</span>
                  <span className="block font-semibold group-hover:text-pool-deep transition-colors">{SITE.phone}</span>
                </span>
              </a>
              <div className="flex items-center gap-3">
                <span className="icon-tile"><MapPin className="h-5 w-5" /></span>
                <span>
                  <span className="block text-xs text-muted-foreground font-medium uppercase tracking-wider">Adresse</span>
                  <span className="block font-semibold text-sm">{SITE.address}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
