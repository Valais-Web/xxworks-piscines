import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SERVICES, ZONES, SITE } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background transition-shadow ${scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.06)]" : ""}`}
    >
      <div className="container-prose flex items-center justify-between py-4">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-primary">Xx Works Sàrl</span>
          <span className="text-[11px] uppercase tracking-widest text-muted-foreground">{SITE.tagline}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          <Link to="/" className="hover:text-primary" activeProps={{ className: "text-primary" }}>Accueil</Link>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-primary">
              Services <ChevronDown className="h-3 w-3" />
            </button>
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
              <div className="bg-card border rounded-md shadow-card py-2 w-56">
                {SERVICES.map((s) => (
                  <Link key={s.slug} to={`/${s.slug}` as string} className="block px-4 py-2 text-sm hover:bg-accent">{s.title}</Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-primary">
              Zones d'intervention <ChevronDown className="h-3 w-3" />
            </button>
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
              <div className="bg-card border rounded-md shadow-card py-2 w-60">
                {ZONES.map((z) => (
                  <Link key={z.slug} to={`/zones/${z.slug}` as string} className="block px-4 py-2 text-sm hover:bg-accent">{z.name}</Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/contact" className="hover:text-primary" activeProps={{ className: "text-primary" }}>Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={SITE.phoneHref} className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary">
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <Link to="/contact" className="btn-primary !py-2 !px-4 text-sm">Demander un devis</Link>
        </div>

        <button className="lg:hidden p-2" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background">
          <div className="container-prose py-4 flex flex-col gap-1">
            <Link to="/" onClick={() => setOpen(false)} className="py-2">Accueil</Link>
            <div className="py-1 text-xs uppercase text-muted-foreground tracking-wider mt-2">Services</div>
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/${s.slug}` as string} onClick={() => setOpen(false)} className="py-2 pl-2 text-sm">{s.title}</Link>
            ))}
            <div className="py-1 text-xs uppercase text-muted-foreground tracking-wider mt-2">Zones d'intervention</div>
            {ZONES.map((z) => (
              <Link key={z.slug} to={`/zones/${z.slug}` as string} onClick={() => setOpen(false)} className="py-2 pl-2 text-sm">{z.name}</Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2 mt-2">Contact</Link>
            <a href={SITE.phoneHref} className="py-2 flex items-center gap-2 text-primary font-medium">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">Demander un devis</Link>
          </div>
        </div>
      )}
    </header>
  );
}
