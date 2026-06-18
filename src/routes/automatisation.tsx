import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Droplets, Cloud, Home, Check, Smartphone, Zap, TrendingDown, Shield } from "lucide-react";
import { buildSeo, canonical, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/site-data";
import { PageHero, ContentSection } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { FadeIn } from "@/components/site/FadeIn";
import { ServiceFAQ } from "@/components/site/ServiceFAQ";
import { ZonesLinkBar } from "@/components/site/ZonesLinkBar";
import { RelatedServices } from "@/components/site/RelatedServices";
import heroImg from "@/assets/service-automatisation.jpg";

const TITLE = "Automatisation piscine en Suisse romande | Smart pool, domotique";
const DESC = "Automatisez votre piscine : régulation pH/chlore, contre-lavage, suivi à distance. Économisez du temps, des produits et de l'eau. Devis gratuit en Suisse romande.";
const PATH = "/automatisation";

const FAQ = [
  { q: "Peut-on automatiser une piscine existante ou seulement les nouvelles installations ?", a: "Une automatisation (régulation pH/Rx, pompes doseuses, contre-lavage automatique) se greffe sur la grande majorité des installations existantes. Aucune rénovation structurelle n'est nécessaire. Nous évaluons la faisabilité lors d'une visite préalable gratuite." },
  { q: "Combien coûte une installation d'automatisation complète ?", a: "Un système de régulation pH/Rx avec pompes doseuses et tableau de bord à distance est facturé entre 2 500 et 8 000 CHF fourni-posé, selon le matériel choisi (Bayrol Poolmanager, Dryden Aqua SPACE, OSF, Speck Badu) et la complexité de l'installation existante. Une pompe à vitesse variable s'ajoute pour 1 500–3 500 CHF. Le retour sur investissement moyen est de 2 ans sur les seuls coûts d'énergie." },
  { q: "L'automatisation fonctionne-t-elle en cas de coupure internet ?", a: "Oui. La régulation pH/Rx et le contre-lavage fonctionnent en local, sans connexion internet. L'accès à distance (app smartphone, alertes) nécessite internet, mais la piscine continue de tourner normalement si la connexion est interrompue. Les alarmes sont mémorisées et transmises dès que la connexion est rétablie." },
  { q: "Quelle marque de régulateur automatique recommandez-vous ?", a: "Nous travaillons principalement avec Bayrol Poolmanager et Dryden Aqua SPACE pour la régulation et la supervision intelligente, et avec Badu pour les pompes à vitesse variable. Ces marques offrent le meilleur rapport fiabilité/fonctionnalités/SAV en Suisse. Nous déconseillons les marques low-cost dont le support technique est inexistant après 18 mois." },
  { q: "Comment se passe la maintenance d'un système automatisé ?", a: "Un système bien installé nécessite un calibrage des sondes pH et Rx environ toutes les 8 semaines selon les évolutions de température, et un contrôle visuel lors de chaque remplissage de produits. Une révision annuelle par un technicien garantit la durée de vie des équipements. Nous proposons des contrats de maintenance annuels qui incluent cette révision." },
];

export const Route = createFileRoute("/automatisation")({
  head: () => ({
    meta: buildSeo({ title: TITLE, description: DESC, path: PATH }),
    links: canonical(PATH),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd({ serviceType: "Automatisation de piscine", name: "Automatisation de piscine", description: DESC, path: PATH })) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQ)) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Automatisation", path: PATH }])) },
    ],
  }),
  component: Page,
});

const features = [
  { icon: <Droplets className="h-6 w-6" />, t: "Régulation pH & chlore", d: "Sondes professionnelles et pompes doseuses pilotées en continu pour une eau toujours équilibrée." },
  { icon: <Cpu className="h-6 w-6" />, t: "Contre-lavage automatique", d: "Vannes Besgo et programmation intelligente : la filtration se nettoie sans intervention." },
  { icon: <Cloud className="h-6 w-6" />, t: "Suivi à distance", d: "Tableau de bord temps réel sur votre smartphone, alertes en cas d'anomalie." },
  { icon: <Home className="h-6 w-6" />, t: "Domotique intégrée", d: "Intégration avec votre maison connectée (KNX, scénarios) pour un confort total." },
  { icon: <Zap className="h-6 w-6" />, t: "Pompe à vitesse variable", d: "Adaptation automatique du débit, jusqu'à 70% d'économie d'énergie." },
  { icon: <Shield className="h-6 w-6" />, t: "Sécurité enfant", d: "Pilotage du volet de sécurité, alarmes et notifications en temps réel." },
];

const benefits = [
  { i: <TrendingDown />, t: "−40% de produits", d: "Dosage précis, pas de gaspillage." },
  { i: <TrendingDown />, t: "−70% d'électricité", d: "Pompes à vitesse variable optimisées." },
  { i: <Smartphone />, t: "Pilotage 24/7", d: "Surveillance et contrôle à distance." },
  { i: <Shield />, t: "Eau toujours saine", d: "Régulation continue, jamais de mauvaise surprise." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Automatisation"
        title="Automatisation piscine : libérez-vous de l'entretien manuel"
        subtitle="Une piscine intelligente qui s'entretient seule. Économies de temps, de produits chimiques et d'énergie, le tout piloté depuis votre smartphone."
        image={heroImg}
      />

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <FadeIn>
            <span className="badge-eyebrow mb-4">Le constat</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Pourquoi automatiser sa piscine ?</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              L'entretien manuel d'une piscine demande entre <strong>2 et 5 heures de travail par semaine</strong> : tests d'eau, ajustement chimique, contre-lavage du filtre, contrôle des paramètres. Ces tâches répétitives, souvent négligées, dégradent rapidement la qualité de l'eau et l'état des équipements.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              L'automatisation moderne change radicalement la donne : votre piscine devient un système intelligent qui mesure, dose, filtre et alerte sans intervention humaine. Vous reprenez le contrôle de votre temps libre.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.t} className="card-soft text-center">
                  <div className="icon-tile mx-auto mb-3">{b.i}</div>
                  <div className="font-bold text-sm">{b.t}</div>
                  <div className="text-xs text-muted-foreground mt-1">{b.d}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </ContentSection>

      <ContentSection alt>
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="badge-eyebrow mb-4">Smart Pool by Xx Works</span>
          <h2 className="text-3xl md:text-4xl font-bold">Notre solution complète</h2>
          <p className="mt-4 text-muted-foreground">Six briques technologiques qui s'intègrent à toute installation existante ou neuve.</p>
        </FadeIn>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FadeIn key={f.t}>
              <div className="card-feature h-full">
                <div className="icon-tile-primary mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg">{f.t}</h3>
                <p className="mt-2 text-muted-foreground text-[15px] leading-relaxed">{f.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <FadeIn>
          <span className="badge-eyebrow mb-4">Marques partenaires</span>
          <h2 className="text-3xl md:text-4xl font-bold">Une sélection rigoureuse de marques professionnelles</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl">Nous travaillons exclusivement avec des marques reconnues en technique piscine pour leur fiabilité, leurs performances et leur durabilité.</p>
        </FadeIn>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { n: "Bayrol Poolmanager", d: "Pilotage centralisé pH/Rx" },
            { n: "Dryden Aqua SPACE", d: "Filtration nouvelle génération" },
            { n: "Besgo", d: "Vannes multivoies automatiques" },
            { n: "Badu", d: "Pompes à vitesse variable" },
            { n: "OSF", d: "Régulation et électronique" },
          ].map((b) => (
            <div key={b.n} className="card-soft text-center">
              <div className="font-bold">{b.n}</div>
              <div className="text-xs text-muted-foreground mt-1">{b.d}</div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection alt>
        <FadeIn>
          <div className="rounded-2xl p-8 md:p-12 text-white relative overflow-hidden" style={{ backgroundImage: "var(--gradient-hero)" }}>
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(at 80% 20%, rgba(255,255,255,0.25), transparent 50%)" }} />
            <div className="relative grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <span className="badge-eyebrow-light mb-4">Retour sur investissement</span>
                <h2 className="text-2xl md:text-3xl font-bold">Un investissement rapidement rentabilisé</h2>
                <p className="mt-3 opacity-95">
                  Une pompe à vitesse variable se rentabilise en moyenne en <strong>2 ans</strong> grâce aux économies d'électricité. Ajoutez la diminution de la consommation de produits chimiques, la réduction des appels au technicien et l'allongement de la durée de vie des équipements : l'automatisation devient l'un des meilleurs investissements pour votre piscine.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold">2 ans</div>
                <div className="text-sm opacity-90 mt-1">Retour sur investissement moyen</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </ContentSection>

      <ContentSection>
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="badge-eyebrow mb-4">Cas d'usage</span>
          <h2 className="text-3xl md:text-4xl font-bold">L'automatisation au quotidien</h2>
        </FadeIn>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { t: "En vacances", d: "Votre piscine continue de tourner parfaitement, sans intervention. Vous recevez une alerte si quelque chose cloche." },
            { t: "Au quotidien", d: "Plus besoin de doser, tester ou contre-laver manuellement. La piscine s'entretient pendant que vous vivez votre vie." },
            { t: "En cas de panne", d: "Le système vous alerte immédiatement. Nous pouvons souvent diagnostiquer et résoudre à distance." },
          ].map((c) => (
            <FadeIn key={c.t}>
              <div className="card-feature h-full">
                <Check className="h-5 w-5 text-pool-deep mb-3" />
                <h3 className="font-bold">{c.t}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </ContentSection>

      <ServiceFAQ items={FAQ} />

      <ZonesLinkBar serviceLabel="Automatisation piscine" />
      <RelatedServices currentSlug="automatisation" />

      <SectionCta />
    </>
  );
}
