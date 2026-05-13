import { Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { ZONES } from "@/lib/site-data";
import { ContentSection } from "@/components/site/PageHero";
import { FadeIn } from "@/components/site/FadeIn";

interface Props {
  serviceLabel: string;
}

export function ZonesLinkBar({ serviceLabel }: Props) {
  return (
    <ContentSection alt>
      <FadeIn className="text-center max-w-2xl mx-auto">
        <span className="badge-eyebrow mb-4">Zones desservies</span>
        <h2 className="text-3xl md:text-4xl font-bold">{serviceLabel} dans toute la Suisse romande</h2>
        <p className="mt-4 text-muted-foreground">
          Nous intervenons depuis Granges-de-Vesin dans la Broye, le canton de Fribourg, le Nord vaudois et Neuchâtel.
        </p>
      </FadeIn>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {ZONES.map((z) => (
          <Link
            key={z.slug}
            to={`/zones/${z.slug}` as string}
            className="group flex items-center justify-between gap-2 bg-card border rounded-xl px-4 py-3 text-sm font-semibold hover:border-pool-deep hover:-translate-y-0.5 transition-all"
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-pool-deep" />
              {z.name}
            </span>
            <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>
    </ContentSection>
  );
}
