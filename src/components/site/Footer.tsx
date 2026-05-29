import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { SERVICES, ZONES, SITE } from "@/lib/site-data";
import logoMark from "@/assets/logo-mark.png";

export function Footer() {
  return (
    <footer className="relative text-white overflow-hidden" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(at 20% 0%, rgba(255,255,255,0.25) 0px, transparent 50%), radial-gradient(at 90% 100%, rgba(43,108,176,0.6) 0px, transparent 60%)" }} />
      <div className="container-prose relative py-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-12 w-12 rounded-xl grid place-items-center bg-white p-1.5 shadow-md">
              <img src={logoMark} alt="Logo Xx Works Sàrl" className="h-full w-full object-contain" width={48} height={48} />
            </span>
            <div>
              <div className="text-base font-bold">Xx Works Sàrl</div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">{SITE.tagline}</div>
            </div>
          </div>
          <p className="text-sm opacity-90 leading-relaxed max-w-sm">
            Pisciniste indépendant spécialisé en automatisation, entretien et dépannage de piscines privées en Suisse romande.
          </p>
          <address className="not-italic mt-5 text-sm space-y-2">
            <div className="flex gap-2.5"><MapPin className="h-4 w-4 mt-0.5 shrink-0 opacity-80" /> <span className="opacity-95">{SITE.address}</span></div>
            <div className="flex gap-2.5"><Phone className="h-4 w-4 mt-0.5 shrink-0 opacity-80" /> <a href={SITE.phoneHref} className="hover:underline opacity-95">{SITE.phone}</a></div>
            <div className="flex gap-2.5"><Mail className="h-4 w-4 mt-0.5 shrink-0 opacity-80" /> <a href={`mailto:${SITE.email}`} className="hover:underline opacity-95">{SITE.email}</a></div>
          </address>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-80">Services</h3>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link to={`/${s.slug}` as string} className="opacity-90 hover:opacity-100 hover:underline transition-opacity">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-80">Zones d'intervention</h3>
          <ul className="space-y-2.5 text-sm columns-2 gap-4">
            {ZONES.map((z) => (
              <li key={z.slug}><Link to={`/zones/${z.slug}` as string} className="opacity-90 hover:opacity-100 hover:underline transition-opacity">{z.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-80">Restons en contact</h3>
          <Link to="/contact" className="inline-flex items-center bg-white text-pool-deep font-semibold rounded-lg px-5 py-2.5 text-sm hover:bg-white/90 transition-colors shadow-lg">Demander un devis</Link>
          <div className="flex gap-2.5 mt-5">
            <a href={SITE.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/25 border border-white/15 transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href={SITE.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/25 border border-white/15 transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href={SITE.social.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/25 border border-white/15 transition-colors"><MessageCircle className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 relative">
        <div className="container-prose py-5 flex flex-wrap items-center justify-between gap-3 text-xs opacity-80">
          <div>© {new Date().getFullYear()} Xx Works Sàrl. Tous droits réservés.</div>
          <div className="flex flex-wrap gap-5">
            <Link to="/contact" className="hover:underline">Mentions légales</Link>
            <Link to="/contact" className="hover:underline">Politique de confidentialité</Link>
          </div>
        </div>
        <div className="container-prose pb-5 flex justify-center">
          <a
            href="https://valaisweb.ch"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-xs opacity-80 hover:opacity-100 transition-opacity"
          >
            <span>Site internet créé par</span>
            <span className="inline-flex items-center bg-white rounded px-2 py-1">
              <img src={valaisWebLogo} alt="Valais Web" className="h-4 w-auto" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
