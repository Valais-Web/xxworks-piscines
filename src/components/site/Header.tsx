import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SERVICES, ZONES, SITE } from "@/lib/site-data";
import logoMark from "@/assets/logo-mark.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-[0_2px_20px_rgba(0,0,0,0.05)]"
          : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="container-prose flex items-center justify-between py-3.5">
        <Link to="/" className="flex items-center gap-3 leading-tight" aria-label="Xx Works Sàrl - Accueil">
          <img src={logoMark} alt="Logo Xx Works Sàrl" className="h-11 w-11 object-contain" width={44} height={44} />
          <span className="flex flex-col">
            <span className="text-[15px] font-bold tracking-tight text-primary">Xx Works <span className="text-muted-foreground font-normal">Sàrl</span></span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-pool-deep font-semibold">{SITE.tagline}</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-pool transition-colors" activeProps={{ className: "text-pool" }} activeOptions={{ exact: true }}>Accueil</Link>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-pool transition-colors">
              Services <ChevronDown className="h-3 w-3" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 hidden group-hover:block">
              <div className="bg-card border rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] py-2 w-60">
                {SERVICES.map((s) => (
                  <Link key={s.slug} to={`/${s.slug}` as string} className="block px-4 py-2.5 text-sm hover:bg-accent hover:text-pool-deep transition-colors">{s.title}</Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-pool transition-colors">
              Zones <ChevronDown className="h-3 w-3" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 hidden group-hover:block">
              <div className="bg-card border rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] py-2 w-60">
                {ZONES.map((z) => (
                  <Link key={z.slug} to={`/zones/${z.slug}` as string} className="block px-4 py-2.5 text-sm hover:bg-accent hover:text-pool-deep transition-colors">{z.name}</Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/contact" className="hover:text-pool transition-colors" activeProps={{ className: "text-pool" }}>Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={SITE.phoneHref} className="flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-pool transition-colors">
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-sm">Devis gratuit</Link>
        </div>

        <button className="lg:hidden p-2" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background">
          <div className="container-prose py-4 flex flex-col gap-1">
            <Link to="/" onClick={() => setOpen(false)} className="py-2.5 font-medium">Accueil</Link>
            <div className="py-1 text-[11px] uppercase text-pool-deep tracking-widest font-semibold mt-2">Services</div>
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/${s.slug}` as string} onClick={() => setOpen(false)} className="py-2 pl-2 text-sm">{s.title}</Link>
            ))}
            <div className="py-1 text-[11px] uppercase text-pool-deep tracking-widest font-semibold mt-3">Zones d'intervention</div>
            {ZONES.map((z) => (
              <Link key={z.slug} to={`/zones/${z.slug}` as string} onClick={() => setOpen(false)} className="py-2 pl-2 text-sm">{z.name}</Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2.5 mt-2 font-medium">Contact</Link>
            <a href={SITE.phoneHref} className="py-2 flex items-center gap-2 text-pool-deep font-semibold">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">Devis gratuit</Link>
          </div>
        </div>
      )}
    </header>
  );
}
