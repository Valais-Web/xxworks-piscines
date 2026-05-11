export const SITE = {
  name: "Xx Works Sàrl",
  tagline: "Garden Technics",
  phone: "+41 78 258 53 58",
  phoneHref: "tel:+41782585358",
  email: "info@xxworks.ch",
  address: "Route du Couchon 37, 1484 Granges-de-Vesin",
  url: "https://xxworks.ch",
  social: {
    facebook: "https://www.facebook.com/Pare.vue.ch.XxWorks",
    instagram: "https://instagram.com/xxworks.ch",
    whatsapp: "https://wa.me/41782585358",
  },
};

export const SERVICES = [
  { slug: "automatisation", title: "Automatisation", short: "Régulation, domotique et pilotage à distance de votre piscine." },
  { slug: "entretien", title: "Entretien", short: "Mise en service, suivi saisonnier et hivernage." },
  { slug: "depannage", title: "Dépannage", short: "Intervention rapide pour fuites, pompes, filtres et automatismes." },
  { slug: "equipements", title: "Équipements", short: "Pompes, filtres, chauffage, couvertures et confort." },
  { slug: "produits", title: "Produits", short: "Traitement professionnel adapté à votre bassin." },
];

export type Zone = {
  slug: string;
  name: string;
  distance: string;
  communes: string[];
  particularite: string;
  delai: string;
};

export const ZONES: Zone[] = [
  {
    slug: "estavayer-le-lac",
    name: "Estavayer-le-Lac",
    distance: "7 km depuis Granges-de-Vesin",
    communes: ["Cheyres", "Cugy", "Murist", "Lully", "Sévaz", "Vuissens", "Bussy"],
    particularite: "Au bord du lac de Neuchâtel, climat doux favorable aux longues saisons de baignade. Eau du réseau modérément dure.",
    delai: "Intervention sous 24-48h pour les demandes non-urgentes, urgences traitées le jour-même.",
  },
  {
    slug: "payerne",
    name: "Payerne",
    distance: "10 km depuis Granges-de-Vesin",
    communes: ["Corcelles-près-Payerne", "Grandcour", "Trey", "Granges-près-Marnand", "Henniez", "Cheiry"],
    particularite: "Au cœur de la plaine de la Broye, eau du réseau modérément calcaire. Région avec forte densité de piscines résidentielles.",
    delai: "Intervention sous 24h pour la plupart des demandes.",
  },
  {
    slug: "avenches",
    name: "Avenches",
    distance: "17 km depuis Granges-de-Vesin",
    communes: ["Faoug", "Donatyre", "Oleyres", "Vallamand", "Cudrefin", "Salavaux"],
    particularite: "Proximité immédiate du lac de Morat. Terrain souvent calcaire, attention particulière à la dureté de l'eau.",
    delai: "Intervention sous 24-48h.",
  },
  {
    slug: "morat",
    name: "Morat",
    distance: "21 km depuis Granges-de-Vesin",
    communes: ["Faoug", "Sugiez", "Greng", "Meyriez", "Courgevaux", "Merlach"],
    particularite: "Région bilingue français/allemand au bord du lac de Morat. Climat tempéré, saison de baignade prolongée.",
    delai: "Intervention sous 48h.",
  },
  {
    slug: "yverdon-les-bains",
    name: "Yverdon-les-Bains",
    distance: "30 km depuis Granges-de-Vesin",
    communes: ["Grandson", "Cheseaux-Noréaz", "Cuarny", "Pomy", "Treycovagnes", "Ependes"],
    particularite: "Plaine de l'Orbe, eau du réseau dure nécessitant un traitement anti-calcaire adapté. Ville thermale.",
    delai: "Intervention sous 48h, planification recommandée.",
  },
  {
    slug: "lucens",
    name: "Lucens",
    distance: "18 km depuis Granges-de-Vesin",
    communes: ["Curtilles", "Henniez", "Trey", "Moudon", "Brenles", "Sarzens"],
    particularite: "Vallée de la Broye, région agricole, eau du réseau de bonne qualité avec dureté modérée.",
    delai: "Intervention sous 24-48h.",
  },
  {
    slug: "neuchatel",
    name: "Neuchâtel",
    distance: "35 km depuis Granges-de-Vesin",
    communes: ["Saint-Blaise", "Hauterive", "Marin-Epagnier", "Cortaillod", "Auvernier", "Colombier"],
    particularite: "Région lacustre, eau du réseau douce car issue partiellement du lac. Climat tempéré.",
    delai: "Intervention sous 48h, planification recommandée.",
  },
  {
    slug: "fribourg",
    name: "Fribourg",
    distance: "25 km depuis Granges-de-Vesin",
    communes: ["Marly", "Givisiez", "Granges-Paccot", "Düdingen", "Belfaux", "Avry"],
    particularite: "Eau du réseau de la Sarine, dureté variable selon le quartier. Terrain vallonné, attention au positionnement des locaux techniques.",
    delai: "Intervention sous 48h.",
  },
];

export function buildSeo(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const url = `${SITE.url}${opts.path}`;
  const image = opts.image ?? `${SITE.url}/og-default.jpg`;
  return [
    { title: opts.title },
    { name: "description", content: opts.description },
    { name: "author", content: SITE.name },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:locale", content: "fr_CH" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
    { name: "twitter:image", content: image },
  ];
}

export function canonical(path: string) {
  return [{ rel: "canonical", href: `${SITE.url}${path}` }];
}
