import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import { buildSeo, canonical, SITE, BUSINESS_ID, faqJsonLd, breadcrumbJsonLd } from "@/lib/site-data";
import { ContentSection, PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { FadeIn } from "@/components/site/FadeIn";

const TITLE = "Contact | Xx Works Sàrl, pisciniste en Suisse romande";
const DESC = "Contactez Xx Works pour votre projet piscine : automatisation, entretien, dépannage. Téléphone, email ou formulaire. Devis gratuit en Suisse romande.";
const PATH = "/contact";

const faqs = [
  { q: "Quel est le délai pour recevoir un devis ?", a: "Vous recevez un devis détaillé sous 48h après la visite ou les informations transmises." },
  { q: "Quelles sont vos zones d'intervention ?", a: "Nous intervenons dans toute la Suisse romande, principalement entre Estavayer-le-Lac, Payerne, Yverdon, Neuchâtel et Fribourg." },
  { q: "Comment se passe la tarification ?", a: "Nos prestations sont facturées sur devis ou au temps passé selon la nature de l'intervention. Tout est validé en amont." },
  { q: "Quelles garanties proposez-vous ?", a: "Tous les équipements installés bénéficient de la garantie constructeur. Nos interventions sont garanties contre tout défaut de pose." },
  { q: "Assurez-vous le suivi après-vente ?", a: "Oui, nous proposons des contrats d'entretien annuels et restons disponibles pour toute question post-intervention." },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: buildSeo({ title: TITLE, description: DESC, path: PATH }),
    links: canonical(PATH),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: TITLE,
          url: `${SITE.url}${PATH}`,
          mainEntity: { "@type": "LocalBusiness", "@id": BUSINESS_ID, name: SITE.name, telephone: SITE.phone, email: SITE.email },
        }),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Contact", path: PATH },
          ])
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contactez-nous pour votre projet piscine"
        subtitle="Une question, une demande de devis, une urgence : nous sommes à votre écoute."
      />

      <ContentSection>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <FadeIn><ContactForm /></FadeIn>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="card-soft">
                <h2 className="text-xl font-semibold">Coordonnées</h2>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex gap-3"><MapPin className="h-5 w-5 text-primary mt-0.5" /><span>{SITE.address}</span></li>
                  <li className="flex gap-3"><Phone className="h-5 w-5 text-primary mt-0.5" /><a className="hover:underline" href={SITE.phoneHref}>{SITE.phone}</a></li>
                  <li className="flex gap-3"><Mail className="h-5 w-5 text-primary mt-0.5" /><a className="hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
                  <li className="flex gap-3"><Clock className="h-5 w-5 text-primary mt-0.5" /><span>Lun – Ven : 8h – 18h<br />Sam : sur rendez-vous</span></li>
                </ul>
                <div className="mt-6 flex gap-2">
                  <a href={SITE.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="h-10 w-10 grid place-items-center rounded-full bg-accent text-primary hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook className="h-4 w-4" /></a>
                  <a href={SITE.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="h-10 w-10 grid place-items-center rounded-full bg-accent text-primary hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="h-4 w-4" /></a>
                  <a href={SITE.social.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="h-10 w-10 grid place-items-center rounded-full bg-accent text-primary hover:bg-primary hover:text-primary-foreground transition-colors"><MessageCircle className="h-4 w-4" /></a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </ContentSection>

      <ContentSection alt>
        <FadeIn><h2 className="text-3xl font-semibold">Nous trouver</h2></FadeIn>
        <div className="mt-6 rounded-lg overflow-hidden border shadow-card aspect-[16/8]">
          <iframe
            title="Carte Granges-de-Vesin"
            src="https://www.openstreetmap.org/export/embed.html?bbox=6.80%2C46.79%2C6.90%2C46.84&layer=mapnik&marker=46.817%2C6.850"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </ContentSection>

      <ContentSection>
        <FadeIn><h2 className="text-3xl font-semibold">Questions fréquentes</h2></FadeIn>
        <div className="mt-8 grid gap-4 max-w-3xl">
          {faqs.map((f) => (
            <details key={f.q} className="card-soft group">
              <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                <span>{f.q}</span>
                <span className="text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
