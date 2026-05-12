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
import { CookieBanner } from "@/components/site/CookieBanner";
import { SITE } from "@/lib/site-data";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">La page recherchée n'existe pas ou a été déplacée.</p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Retour à l'accueil</Link>
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

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  image: `${SITE.url}/og-default.jpg`,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Route du Couchon 37",
    addressLocality: "Granges-de-Vesin",
    postalCode: "1484",
    addressCountry: "CH",
  },
  areaServed: ["Estavayer-le-Lac", "Payerne", "Avenches", "Morat", "Yverdon-les-Bains", "Lucens", "Neuchâtel", "Fribourg"],
  priceRange: "$$",
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pisciniste & technique piscine en Suisse romande | Xx Works" },
      { name: "description", content: "Spécialiste piscine, automatisation, entretien et dépannage en Suisse romande." },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: "Pisciniste & technique piscine en Suisse romande | Xx Works" },
      { name: "twitter:title", content: "Pisciniste & technique piscine en Suisse romande | Xx Works" },
      { property: "og:description", content: "Spécialiste piscine, automatisation, entretien et dépannage en Suisse romande." },
      { name: "twitter:description", content: "Spécialiste piscine, automatisation, entretien et dépannage en Suisse romande." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9a010742-580f-46a8-9aa1-3067a935bb4d/id-preview-754ecda3--914b03b5-6313-4c88-8682-90b256e58f60.lovable.app-1778584655821.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9a010742-580f-46a8-9aa1-3067a935bb4d/id-preview-754ecda3--914b03b5-6313-4c88-8682-90b256e58f60.lovable.app-1778584655821.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
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
      </head>
      <body>
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
      <CookieBanner />
    </QueryClientProvider>
  );
}
