import { type ReactNode } from "react";
import { FadeIn } from "@/components/site/FadeIn";

export function PageHero({ eyebrow, title, subtitle, image }: { eyebrow?: string; title: string; subtitle?: string; image?: string }) {
  return (
    <section className="relative isolate overflow-hidden">
      {image && (
        <div className="absolute inset-0 -z-10">
          <img src={image} alt="" className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
        </div>
      )}
      <div className={`container-prose py-20 md:py-28 ${image ? "text-white" : ""}`}>
        <FadeIn className="max-w-3xl">
          {eyebrow && <p className="uppercase tracking-widest text-xs text-primary-light mb-3">{eyebrow}</p>}
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">{title}</h1>
          {subtitle && <p className="mt-5 text-lg opacity-90 max-w-2xl">{subtitle}</p>}
        </FadeIn>
      </div>
    </section>
  );
}

export function ContentSection({ children, alt = false, className = "" }: { children: ReactNode; alt?: boolean; className?: string }) {
  return (
    <section className={`${alt ? "bg-secondary" : "bg-background"} py-16 md:py-20 ${className}`}>
      <div className="container-prose">{children}</div>
    </section>
  );
}
