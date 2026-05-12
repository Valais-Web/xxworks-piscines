import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site-data";
import { Phone, ArrowRight } from "lucide-react";

export function SectionCta({ title = "Prêt à profiter pleinement de votre piscine ?", subtitle = "Demandez un devis gratuit et personnalisé. Réponse sous 24h ouvrées." }: { title?: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden text-white" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: "radial-gradient(at 15% 20%, rgba(255,255,255,0.25), transparent 45%), radial-gradient(at 85% 80%, oklch(0.55 0.15 235 / 0.6), transparent 50%)" }} />
      <div className="container-prose relative py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto leading-tight">{title}</h2>
        <p className="mt-5 opacity-95 max-w-2xl mx-auto text-lg">{subtitle}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="bg-white text-pool-deep hover:bg-white/95 transition-all hover:-translate-y-0.5 font-semibold rounded-lg px-7 py-3.5 inline-flex items-center gap-2 shadow-lg">
            Demander un devis <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={SITE.phoneHref} className="btn-glass !py-3.5 !px-7"><Phone className="h-4 w-4" /> {SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}
