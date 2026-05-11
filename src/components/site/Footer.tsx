import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { SERVICES, ZONES, SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container-prose py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="text-lg font-bold">Xx Works Sàrl</div>
          <div className="text-xs uppercase tracking-widest opacity-80 mb-4">{SITE.tagline}</div>
          <p className="text-sm opacity-90 leading-relaxed">
            Pisciniste spécialisé en automatisation, entretien et dépannage en Suisse romande.
          </p>
          <address className="not-italic mt-4 text-sm opacity-90 space-y-1">
            <div className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> {SITE.address}</div>
            <div className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> <a href={SITE.phoneHref} className="hover:underline">{SITE.phone}</a></div>
            <div className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> <a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a></div>
          </address>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
          <ul className="space-y-2 text-sm opacity-90">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link to={`/${s.slug}` as string} className="hover:underline">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Zones d'intervention</h3>
          <ul className="space-y-2 text-sm opacity-90">
            {ZONES.map((z) => (
              <li key={z.slug}><Link to={`/zones/${z.slug}` as string} className="hover:underline">{z.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
          <Link to="/contact" className="inline-block bg-background text-primary font-semibold rounded px-4 py-2 text-sm hover:bg-pool hover:text-pool-foreground transition-colors">Demander un devis</Link>
          <div className="flex gap-3 mt-5">
            <a href={SITE.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
            <a href={SITE.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
            <a href={SITE.social.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20"><MessageCircle className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose py-5 flex flex-wrap items-center justify-between gap-3 text-xs opacity-80">
          <div>© {new Date().getFullYear()} Xx Works Sàrl. Tous droits réservés.</div>
          <Link to="/contact" className="hover:underline">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
