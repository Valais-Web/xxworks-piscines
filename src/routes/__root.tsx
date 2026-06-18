import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SITE, businessJsonLd, siteEntityJsonLd } from "@/lib/site-data";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #e6f4fb 0%, #b9e0f2 35%, #6fb9dc 75%, #2b6cb0 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 30%, rgba(255,255,255,0.6), transparent 40%), radial-gradient(ellipse at 70% 60%, rgba(255,255,255,0.5), transparent 45%), radial-gradient(ellipse at 50% 80%, rgba(255,255,255,0.4), transparent 50%)",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {[
          { left: "10%", size: 14, delay: "0s", duration: "9s" },
          { left: "22%", size: 8, delay: "1.5s", duration: "7s" },
          { left: "35%", size: 18, delay: "3s", duration: "11s" },
          { left: "50%", size: 10, delay: "0.5s", duration: "8s" },
          { left: "63%", size: 22, delay: "2s", duration: "12s" },
          { left: "78%", size: 12, delay: "4s", duration: "9s" },
          { left: "88%", size: 16, delay: "1s", duration: "10s" },
        ].map((b, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-white/40 ring-1 ring-white/60"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animation: `pool404-bubble ${b.duration} linear ${b.delay} infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes pool404-bubble {
          0%   { transform: translateY(0) scale(0.8); opacity: 0; }
          15%  { opacity: 0.9; }
          100% { transform: translateY(-90vh) scale(1.1); opacity: 0; }
        }
        @keyframes pool404-float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50%      { transform: translateY(-10px) rotate(2deg); }
        }
      `}</style>

      <div className="relative max-w-xl text-center">
        <div
          className="mx-auto mb-6 h-32 w-32"
          style={{ animation: "pool404-float 5s ease-in-out infinite" }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 120 120" className="h-full w-full drop-shadow-lg">
            <defs>
              <radialGradient id="ring-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#e5e7eb" />
              </radialGradient>
            </defs>
            <circle cx="60" cy="60" r="50" fill="url(#ring-grad)" />
            <circle cx="60" cy="60" r="22" fill="#ffffff" />
            {[0, 90, 180, 270].map((a) => (
              <path
                key={a}
                d="M60 10 A50 50 0 0 1 95.36 24.64 L78.28 41.72 A22 22 0 0 0 60 32 Z"
                fill="#e63946"
                transform={`rotate(${a} 60 60)`}
              />
            ))}
            <circle cx="60" cy="60" r="50" fill="none" stroke="#1a1a1a" strokeOpacity="0.15" strokeWidth="1" />
            <circle cx="60" cy="60" r="22" fill="none" stroke="#1a1a1a" strokeOpacity="0.15" strokeWidth="1" />
          </svg>
        </div>

        <p className="text-xs uppercase tracking-[0.2em] text-white/90">Erreur 404</p>
        <h1 className="mt-3 text-4xl font-semibold text-white drop-shadow-sm md:text-5xl">
          Cette page a coulé au fond du bassin
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-white/95">
          Pas de panique : on remonte à la surface. La page que vous cherchez
          a peut-être été déplacée, renommée ou n'existe plus.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-medium text-primary shadow-md transition hover:bg-white/90"
          >
            Retour à l'accueil
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md border border-white/70 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Une erreur est survenue</h1>
        <p className="mt-2 text-sm text-muted-foreground">Veuillez réessayer dans un instant.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Réessayer</button>
          <a href="/" className="btn-outline">Accueil</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Xx Works Sàrl — Pisciniste en Suisse romande" },
      { name: "description", content: "Xx Works Sàrl, pisciniste basé à Granges-de-Vesin. Services piscine en Suisse romande." },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0d4a2c" },
      { name: "google-site-verification", content: "REpNPp7fkttetVDsjoRAfNZ6g0siwrgYnd0Z5r7OHYE" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE.url}/og-default.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(businessJsonLd()) },
      { type: "application/ld+json", children: JSON.stringify(siteEntityJsonLd()) },
      {
        children:
          "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M7KJZLQP');",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
        {/* Scroll-reveal animations hide content via opacity until JS runs.
            For no-JS clients and crawlers, keep the prerendered content visible. */}
        <noscript>
          <style>{`.fade-in{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7KJZLQP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2 focus:rounded">Aller au contenu principal</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
