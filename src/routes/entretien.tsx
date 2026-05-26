import { createFileRoute } from "@tanstack/react-router";
import { Check, Calendar, Sun, Snowflake, FlaskConical, Sparkles, ClipboardList } from "lucide-react";
import { buildSeo, canonical, SITE } from "@/lib/site-data";
import { PageHero, ContentSection } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { FadeIn } from "@/components/site/FadeIn";
import { ServiceFAQ } from "@/components/site/ServiceFAQ";
import { ZonesLinkBar } from "@/components/site/ZonesLinkBar";
import { RelatedServices } from "@/components/site/RelatedServices";
import heroImg from "@/assets/service-entretien.jpg";

const TITLE = "Entretien piscine en Suisse romande | Xx Works";
const DESC = "Mise en service printemps, suivi saisonnier et hivernage. Service d'entretien piscine à la carte en Suisse romande.";
const PATH = "/entretien";

const FAQ = [
  { q: "À quelle fréquence faut-il faire entretenir une piscine familiale ?", a: "Pour une piscine familiale de 40 à 70 m³ fréquentée 3 à 5 fois par semaine, un entretien bi-mensuel est le bon compromis. Une piscine très fréquentée ou soumise à forte chaleur peut nécessiter un suivi hebdomadaire en juillet-août. Une piscine automatisée peut se contenter d'un suivi mensuel." },
  { q: "Que comprend une mise en service au printemps ?", a: "Notre mise en service comprend : contrôle complet de l'installation hydraulique et électrique, paramétrage des automatismes, nettoyage du bassin et des équipements internes, équilibrage chimique (pH, TAC, TH, désinfection), remise en route et tests de bon fonctionnement. Durée : 2 à 4 heures selon l'état. Compte-rendu transmis par email." },
  { q: "Peut-on souscrire un contrat d'entretien en cours de saison ?", a: "Oui, il n'est pas nécessaire d'attendre le printemps. Nous prenons en charge les contrats à tout moment de la saison, après une première visite de diagnostic permettant d'évaluer l'état de l'installation et de l'eau." },
  { q: "Quelle est la différence entre un hivernage actif et un hivernage passif ?", a: "L'hivernage actif maintient une filtration courte quotidienne (2–4h) ou en continu (24h/24h) avec une pompe à vitesse variable : l'eau reste en circulation, le traitement préventif est maintenu. Il convient particulièrement aux installations automatisées. L'hivernage passif vide partiellement la piscine, purge les canalisations et arrête complètement la filtration : adapté aux hivers rigoureux ou aux longues absences." },
  { q: "L'entretien inclut-il la fourniture des produits chimiques ?", a: "Les produits chimiques peuvent être fournis par Xx Works (gamme professionnelle) ou apportés par le client. Nous recommandons nos gammes professionnelles car leur concentration supérieure offre un meilleur rendement et une action plus homogène. Les produits grande surface sont souvent sous-dosés et peuvent créer des déséquilibres." },
];

export const Route = createFileRoute("/entretien")({
  head: () => ({
    meta: buildSeo({ title: TITLE, description: DESC, path: PATH }),
    links: canonical(PATH),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", serviceType: "Entretien piscine", provider: { "@type": "LocalBusiness", name: SITE.name, telephone: SITE.phone }, areaServed: "Suisse romande" }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }) },
    ],
  }),
  component: Page,
});

const formules = [
  { i: <Sun className="h-5 w-5" />, t: "Mise en service", d: "Démarrage complet au printemps : contrôle, paramétrage, équilibrage, remise en route." },
  { i: <Calendar className="h-5 w-5" />, t: "Suivi hebdomadaire", d: "Visite chaque semaine pour les piscines très fréquentées ou exigeantes." },
  { i: <Calendar className="h-5 w-5" />, t: "Suivi bi-mensuel", d: "Le bon compromis pour la majorité des piscines familiales." },
  { i: <Calendar className="h-5 w-5" />, t: "Suivi mensuel", d: "Suivi léger pour piscines automatisées ou peu sollicitées." },
  { i: <ClipboardList className="h-5 w-5" />, t: "Interventions ponctuelles", d: "Sur demande : nettoyage, analyse, conseil, intervention spécifique." },
  { i: <Snowflake className="h-5 w-5" />, t: "Hivernage actif/passif", d: "Préparation pour l'hiver, sécurisation des équipements, redémarrage facile." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Entretien"
        title="Entretien piscine : déléguez, profitez"
        subtitle="Un programme d'entretien sur-mesure pour préserver durablement votre piscine, garantir une eau cristalline et prolonger la vie de vos équipements."
        image={heroImg}
      />

      <ContentSection>
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="badge-eyebrow mb-4">Service à la carte</span>
          <h2 className="text-3xl md:text-4xl font-bold">Choisissez la formule qui vous convient</h2>
          <p className="mt-4 text-muted-foreground">Chaque piscine est unique. Nous adaptons notre offre à votre installation, à votre rythme et à vos contraintes.</p>
        </FadeIn>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {formules.map((f) => (
            <FadeIn key={f.t}>
              <div className="card-feature h-full">
                <div className="icon-tile-primary mb-4">{f.i}</div>
                <h3 className="font-bold">{f.t}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </ContentSection>

      <ContentSection alt>
        <div className="grid lg:grid-cols-2 gap-12">
          <FadeIn>
            <span className="badge-eyebrow mb-4"><Sun className="h-3.5 w-3.5" /> Printemps</span>
            <h2 className="text-2xl md:text-3xl font-bold">Mise en service au printemps</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Une remise en route soignée garantit toute la saison sans accrocs. Notre intervention typique :</p>
            <ul className="mt-6 space-y-3">
              {["Contrôle complet de l'installation hydraulique et électrique", "Paramétrage et calibration des automatismes", "Nettoyage du bassin et des équipements internes", "Équilibrage chimique de l'eau (pH, TAC, désinfection)", "Remise en route et tests de bon fonctionnement", "Compte-rendu détaillé et conseils pour la saison"].map((t) => (
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
            <span className="badge-eyebrow mb-4"><FlaskConical className="h-3.5 w-3.5" /> Saison</span>
            <h2 className="text-2xl md:text-3xl font-bold">Suivi saisonnier</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Selon la fréquence choisie, nous assurons à chaque visite :</p>
            <ul className="mt-6 space-y-3">
              {["Analyse complète de l'eau et ajustement chimique", "Nettoyage skimmers, paniers de pompe, ligne d'eau", "Contre-lavage du filtre et nettoyage du préfiltre", "Vérification des équipements et pression de filtration", "Test des automatismes et calibration des sondes", "Compte-rendu d'intervention envoyé par email"].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <span className="h-5 w-5 rounded-full grid place-items-center mt-0.5 shrink-0" style={{ backgroundImage: "var(--gradient-water)" }}>
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  <span className="text-[15px]">{t}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </ContentSection>

      <ContentSection>
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="badge-eyebrow mb-4"><Snowflake className="h-3.5 w-3.5" /> Hivernage</span>
          <h2 className="text-3xl md:text-4xl font-bold">Préparer la piscine pour l'hiver</h2>
          <p className="mt-4 text-muted-foreground">Deux approches selon votre installation et la rigueur de votre microclimat.</p>
        </FadeIn>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="card-feature">
            <div className="icon-tile mb-4"><Snowflake className="h-5 w-5" /></div>
            <h3 className="font-bold text-lg">Hivernage actif</h3>
            <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">La filtration tourne quelques heures par jour (2–4h), voire en continu (24h/24h) avec une pompe à vitesse variable. Convient particulièrement aux installations automatisées. Remise en route au printemps simplifiée, eau préservée.</p>
          </div>
          <div className="card-feature">
            <div className="icon-tile-primary mb-4"><Snowflake className="h-5 w-5" /></div>
            <h3 className="font-bold text-lg">Hivernage passif</h3>
            <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">Vidange partielle, purge complète des canalisations, mise hors service de la filtration. Recommandé pour les régions à fort gel ou les longues absences hivernales.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection alt>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <span className="badge-eyebrow mb-4">Vacances et résidences secondaires</span>
            <h2 className="text-3xl font-bold">Suivi durant vos absences</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Vous partez en vacances ou possédez une résidence secondaire ? Nous prenons soin de votre installation pour que vous retrouviez votre piscine en parfait état, sans mauvaise surprise. Suivi de la qualité de l'eau, vérifications régulières, alertes en cas d'anomalie.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="card-soft">
              <Sparkles className="h-7 w-7 text-pool-deep" />
              <h3 className="mt-4 font-bold text-lg">Bon à savoir</h3>
              <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">Un contrat d'entretien annuel garantit un tarif préférentiel, une planification anticipée et une priorité en cas d'urgence pendant la saison.</p>
            </div>
          </FadeIn>
        </div>
      </ContentSection>

      <ServiceFAQ items={FAQ} />

      <ZonesLinkBar serviceLabel="Entretien piscine" />
      <RelatedServices currentSlug="entretien" />

      <SectionCta />
    </>
  );
}
