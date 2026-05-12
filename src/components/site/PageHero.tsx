import { type ReactNode } from "react";
import { FadeIn } from "@/components/site/FadeIn";

export function PageHero({ eyebrow, title, subtitle, image, children }: { eyebrow?: string; title: string; subtitle?: string; image?: string; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden">
      {image ? (
        <>
          <div className="absolute inset-0 -z-10">
            <img src={image} alt="" className="h-full w-full object-cover" loading="eager" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, oklch(0.18 0.05 240 / 0.85) 0%, oklch(0.32 0.13 245 / 0.55) 55%, oklch(0.36 0.08 150 / 0.35) 100%)" }} />
          </div>
          <div className="container-prose py-24 md:py-32 text-white">
            <FadeIn className="max-w-3xl">
              {eyebrow && <p className="badge-eyebrow-light mb-5">{eyebrow}</p>}
              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.08]">{title}</h1>
              {subtitle && <p className="mt-6 text-lg md:text-xl opacity-95 max-w-2xl leading-relaxed">{subtitle}</p>}
              {children && <div className="mt-8">{children}</div>}
            </FadeIn>
          </div>
        </>
      ) : (
        <div className="bg-mesh">
          <div className="container-prose py-20 md:py-28">
            <FadeIn className="max-w-3xl">
              {eyebrow && <p className="badge-eyebrow mb-5">{eyebrow}</p>}
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1]">{title}</h1>
              {subtitle && <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>}
              {children && <div className="mt-8">{children}</div>}
            </FadeIn>
          </div>
        </div>
      )}
    </section>
  );
}

export function ContentSection({ children, alt = false, mesh = false, className = "" }: { children: ReactNode; alt?: boolean; mesh?: boolean; className?: string }) {
  const bg = mesh ? "bg-mesh" : alt ? "bg-water-soft" : "bg-background";
  return (
    <section className={`${bg} section ${className}`}>
      <div className="container-prose">{children}</div>
    </section>
  );
}
