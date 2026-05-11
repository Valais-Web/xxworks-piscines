import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site-data";
import { Phone } from "lucide-react";

export function SectionCta({ title = "Prêt à libérer votre temps libre ?", subtitle = "Demandez un devis gratuit. Réponse sous 48h." }: { title?: string; subtitle?: string }) {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container-prose text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
        <p className="mt-3 opacity-90 max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="bg-background text-primary hover:bg-pool hover:text-pool-foreground transition-colors font-semibold rounded-md px-6 py-3">Demander un devis</Link>
          <a href={SITE.phoneHref} className="border border-white/40 hover:bg-white/10 transition-colors font-semibold rounded-md px-6 py-3 inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}
