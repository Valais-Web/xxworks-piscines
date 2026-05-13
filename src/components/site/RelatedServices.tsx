import { Link } from "@tanstack/react-router";
import { ArrowRight, Cog, Droplets, Wrench, Zap, Sparkles, HardHat } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import { ContentSection } from "@/components/site/PageHero";
import { FadeIn } from "@/components/site/FadeIn";

const icons: Record<string, React.ReactNode> = {
  construction: <HardHat className="h-5 w-5" />,
  automatisation: <Cog className="h-5 w-5" />,
  entretien: <Droplets className="h-5 w-5" />,
  depannage: <Wrench className="h-5 w-5" />,
  equipements: <Zap className="h-5 w-5" />,
  produits: <Sparkles className="h-5 w-5" />,
};

export function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const others = SERVICES.filter((s) => s.slug !== currentSlug);
  return (
    <ContentSection>
      <FadeIn className="text-center max-w-2xl mx-auto">
        <span className="badge-eyebrow mb-4">Nos autres services</span>
        <h2 className="text-3xl md:text-4xl font-bold">Une expertise piscine complète</h2>
      </FadeIn>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {others.map((s) => (
          <FadeIn key={s.slug}>
            <Link to={`/${s.slug}` as string} className="card-feature block h-full group">
              <div className="icon-tile mb-4">{icons[s.slug]}</div>
              <h3 className="font-bold group-hover:text-pool-deep transition-colors">{s.title}</h3>
              <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-pool-deep">
                Découvrir <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>
    </ContentSection>
  );
}
