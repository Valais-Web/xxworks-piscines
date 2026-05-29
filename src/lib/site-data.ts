export const SITE = {
  name: "Xx Works Sàrl",
  tagline: "Garden Technics",
  phone: "+41 78 258 53 58",
  phoneHref: "tel:+41782585358",
  email: "info@xxworks.ch",
  address: "Route du Couchon 37, 1484 Granges-de-Vesin",
  url: "https://pisciniste.xxworks.ch",
  social: {
    facebook: "https://www.facebook.com/Pare.vue.ch.XxWorks",
    instagram: "https://instagram.com/xxworks.ch",
    whatsapp: "https://wa.me/41782585358",
  },
};

export const SERVICES = [
  { slug: "construction", title: "Construction & installation", short: "Conception et installation de piscines neuves clé en main." },
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
  localDescription?: string;
  conseil?: string;
  faq?: Array<{ q: string; a: string }>;
};

export const ZONES: Zone[] = [
  {
    slug: "estavayer-le-lac",
    name: "Estavayer-le-Lac",
    distance: "7 km depuis Granges-de-Vesin",
    communes: ["Cheyres", "Cugy", "Murist", "Lully", "Sévaz", "Vuissens", "Bussy"],
    particularite: "Au bord du lac de Neuchâtel, climat doux favorable aux longues saisons de baignade. Eau du réseau modérément dure.",
    delai: "Intervention sous 24-48h pour les demandes non-urgentes, urgences traitées le jour-même.",
    localDescription: "Estavayer-le-Lac bénéficie d'un microclimat exceptionnel sur les rives du lac de Neuchâtel, permettant des saisons de baignade parmi les plus longues de la région. La douceur du climat lacustre limite les chocs thermiques sur les équipements et favorise un démarrage précoce dès avril. Xx Works intervient régulièrement chez les particuliers et les régies de la région estavayerande, à seulement 7 km de notre base de Granges-de-Vesin.",
    conseil: "L'eau du réseau d'Estavayer présente une dureté modérée (environ 20–25 °fH). Un léger traitement anti-calcaire préventif sur les sondes et les résistances de chauffage est recommandé pour éviter l'entartrage prématuré, surtout sur les piscines chauffées au-dessus de 28 °C.",
    faq: [
      { q: "Combien coûte une mise en service printemps à Estavayer-le-Lac ?", a: "Une mise en service standard comprend le contrôle de l'installation, l'équilibrage chimique et la remise en route des équipements. La tarification est effectuée sur devis, après évaluation de votre installation." },
      { q: "Intervenez-vous en urgence à Estavayer-le-Lac ?", a: "Oui. Les urgences (fuite, panne de filtration en saison) sont traitées en priorité, généralement dans la journée. Appelez directement le +41 78 258 53 58." },
      { q: "Quelle eau de remplissage utiliser pour ma piscine à Estavayer ?", a: "L'eau du réseau communal est bien adaptée. Sa dureté modérée permet une désinfection au chlore sans sur-correction de l'alcalinité. Nous procédons à une analyse complète lors de la mise en service." },
      { q: "Proposez-vous des contrats d'entretien annuels sur Estavayer ?", a: "Oui, nous proposons des formules bi-mensuelles ou hebdomadaires incluant mise en service, suivi saisonnier et hivernage. Un contrat annuel garantit un tarif préférentiel et une priorité de planification." },
    ],
  },
  {
    slug: "payerne",
    name: "Payerne",
    distance: "10 km depuis Granges-de-Vesin",
    communes: ["Corcelles-près-Payerne", "Grandcour", "Trey", "Granges-près-Marnand", "Henniez", "Cheiry"],
    particularite: "Au cœur de la plaine de la Broye, eau du réseau modérément calcaire. Région avec forte densité de piscines résidentielles.",
    delai: "Intervention sous 24h pour la plupart des demandes.",
    localDescription: "Payerne est l'un des centres les plus actifs de la plaine de la Broye, avec une forte concentration de piscines résidentielles dans ses quartiers pavillonnaires. La proximité de Granges-de-Vesin (10 km) en fait notre zone d'intervention la plus rapide après notre localité de base. Nous y assurons aussi bien l'entretien régulier que le dépannage d'urgence pour particuliers et propriétaires de villa.",
    conseil: "L'eau du réseau de Payerne est légèrement calcaire (25–30 °fH). Pour les installations avec pompe à chaleur ou échangeur, l'entartrage des plaques est la principale cause d'usure prématurée : un détartrage annuel et un ajustement du TAC entre 80 et 120 mg/l protègent efficacement vos équipements.",
    faq: [
      { q: "Quel délai pour une intervention à Payerne ?", a: "Payerne est à 10 km de notre base. Pour les demandes non-urgentes nous planifions sous 24h. Les urgences (panne de pompe, fuite active) sont généralement traitées le jour même." },
      { q: "Pouvez-vous intervenir sur n'importe quelle marque de pompe à Payerne ?", a: "Oui. Nous intervenons sur toutes les marques courantes (Badu, Pentair, Hayward, Speck, AstralPool). Pour les pièces rares, le délai peut s'allonger de 24h selon le fournisseur." },
      { q: "Gérez-vous aussi les piscines de petites régies à Payerne ?", a: "Absolument. Nous travaillons avec plusieurs régies de la région Broye pour l'entretien de piscines en copropriété. Contrat cadre sur mesure, rapport d'intervention transmis par email." },
      { q: "Comment préparer ma piscine pour l'hiver à Payerne ?", a: "L'hivernage actif est adapté aux installations avec bon isolant et automatismes en état. L'hivernage passif (vidange partielle, purge) est préférable pour les installations vieillissantes ou les longues absences. Nous évaluons la meilleure approche lors d'une visite." },
    ],
  },
  {
    slug: "avenches",
    name: "Avenches",
    distance: "17 km depuis Granges-de-Vesin",
    communes: ["Faoug", "Donatyre", "Oleyres", "Vallamand", "Cudrefin", "Salavaux"],
    particularite: "Proximité immédiate du lac de Morat. Terrain souvent calcaire, attention particulière à la dureté de l'eau.",
    delai: "Intervention sous 24-48h.",
    localDescription: "Avenches et sa région cumulent deux particularités : la proximité immédiate du lac de Morat, qui tempère le climat et favorise une bonne saison de baignade, et un terrain calcaire marqué lié à la géologie locale. Cette combinaison impose une attention particulière à la chimie de l'eau, domaine dans lequel Xx Works apporte un savoir-faire précis acquis sur plusieurs centaines d'installations.",
    conseil: "La dureté de l'eau à Avenches dépasse souvent 30 °fH. Un anti-calcaire liquide en dosage continu est fortement recommandé, surtout pour les piscines chauffées. Cela protège les résistances et sondes aussi bien que la masse filtrante, et évite les dépôts blancs sur les parois.",
    faq: [
      { q: "L'eau très calcaire d'Avenches pose-t-elle vraiment un problème pour ma piscine ?", a: "Oui, surtout si vous chauffez votre bassin au-dessus de 28 °C. Le calcaire précipite plus vite à température élevée, encrassant les échangeurs, sondes et lignes. Un anti-calcaire préventif et un TAC maîtrisé entre 80 et 100 mg/l suffisent à éviter 80 % des problèmes." },
      { q: "Puis-je utiliser l'eau du lac de Morat pour remplir ma piscine ?", a: "Techniquement possible mais non recommandé : l'eau de lac peut contenir des algues, bactéries et matières organiques qui déséquilibrent rapidement votre traitement. L'eau du réseau est préférable, même si elle est plus calcaire." },
      { q: "Combien de temps dure une intervention de dépannage à Avenches ?", a: "Une intervention standard (diagnostic + réparation simple) dure 1 à 3 heures. Pour les fuites ou remplacements de pièces majeures, une deuxième visite peut être nécessaire. Devis fourni avant toute réparation." },
      { q: "Proposez-vous le hivernage pour les piscines d'Avenches ?", a: "Oui, hivernage actif ou passif selon votre installation. Nous intervenons généralement de mi-octobre à mi-novembre pour la mise en hivernage, et en mars-avril pour la mise en service." },
    ],
  },
  {
    slug: "morat",
    name: "Morat",
    distance: "21 km depuis Granges-de-Vesin",
    communes: ["Faoug", "Sugiez", "Greng", "Meyriez", "Courgevaux", "Merlach"],
    particularite: "Région bilingue français/allemand au bord du lac de Morat. Climat tempéré, saison de baignade prolongée.",
    delai: "Intervention sous 48h.",
    localDescription: "Morat (Murten) est une ville bilingue au bord du lac éponyme, dotée d'un patrimoine architectural exceptionnel et d'un bassin de vie aisé favorable à l'entretien de piscines privées de qualité. La région bénéficie d'un microclimat lacustre similaire à celui d'Estavayer, avec des étés chauds et peu venteux. Xx Works dessert Morat et les communes riveraines du lac en proposant la totalité de ses prestations, de l'automatisation au dépannage.",
    conseil: "Le climat lacustre de Morat peut engendrer des proliférations algales plus rapides en juillet-août lors des canicules. Une surveillance renforcée de l'indice d'équilibre et un désinfectant rémanent bien dosé en été permettent d'anticiper ces pointes sans recourir à des chocs chlore fréquents.",
    faq: [
      { q: "Intervenez-vous en allemand à Morat (Murten) ?", a: "Notre équipe communique principalement en français, mais nous comprenons le Schwyzerditsch et pouvons rédiger les devis et rapports d'intervention en allemand sur demande." },
      { q: "Combien coûte l'automatisation d'une piscine à Morat ?", a: "La tarification est effectuée sur devis selon le matériel choisi et la complexité de votre installation. La rentabilité moyenne d'une pompe à vitesse variable est de 2 ans sur les coûts d'énergie." },
      { q: "Pouvez-vous intervenir le week-end à Morat ?", a: "Les urgences sont traitées 7j/7. Pour les interventions planifiées, nous organisons occasionnellement des visites le samedi matin selon le planning. Précisez votre besoin lors de la prise de contact." },
      { q: "Ma piscine est installée sur un terrain en pente à Morat — est-ce un problème ?", a: "Pas un problème, mais cela influe sur le positionnement du local technique et la conception hydraulique. Nous en tenons systématiquement compte lors du diagnostic et du chiffrage." },
    ],
  },
  {
    slug: "yverdon-les-bains",
    name: "Yverdon-les-Bains",
    distance: "30 km depuis Granges-de-Vesin",
    communes: ["Grandson", "Cheseaux-Noréaz", "Cuarny", "Pomy", "Treycovagnes", "Ependes"],
    particularite: "Plaine de l'Orbe, eau du réseau dure nécessitant un traitement anti-calcaire adapté. Ville thermale.",
    delai: "Intervention sous 48h, planification recommandée.",
    localDescription: "Yverdon-les-Bains, ville thermale sur les rives du lac de Neuchâtel, combine une tradition balnéaire forte avec un tissu de villas et propriétés privées parmi les plus denses du Nord vaudois. La plaine de l'Orbe présente une eau de réseau particulièrement dure, ce qui constitue le principal défi technique pour les piscines de la région. Xx Works a développé une expertise spécifique sur ce terrain, avec des solutions adaptées pour protéger durablement les équipements contre l'entartrage.",
    conseil: "L'eau de Yverdon peut dépasser 35 °fH selon le quartier — parmi les plus calcaires de nos zones d'intervention. Pour toute installation chauffée, un doseur automatique d'anti-calcaire liquide (Bayrol Calcinex ou équivalent) est indispensable. Planifiez systématiquement une vérification des sondes pH/Rx en début et fin de saison.",
    faq: [
      { q: "L'eau très dure d'Yverdon est-elle compatible avec toutes les formes de désinfection ?", a: "Avec le chlore, un TAC élevé entrave la désinfection efficace. Nous ajustons systématiquement le pH entre 7.0 et 7.2 pour compenser. Pour les piscines très chargées en calcaire, le brome ou l'électrolyse au sel peuvent être plus robustes sur le long terme." },
      { q: "Combien de temps faut-il pour rejoindre Yverdon en cas d'urgence ?", a: "Yverdon est à 30 km de Granges-de-Vesin, soit environ 25–30 minutes de trajet. En cas d'urgence avérée (fuite majeure, équipement HS en pleine saison) nous visons une intervention le jour même." },
      { q: "Proposez-vous l'installation de pompes à chaleur à Yverdon ?", a: "Oui. Nous installons et mettons en service des PAC air-eau pour piscines (marques IDS, Hayward, Zodiac). Nous gérons également les démarches administratives si nécessaire, certaines communes du Nord vaudois pouvant exiger un permis." },
      { q: "Est-il possible d'automatiser une piscine ancienne à Yverdon sans repartir de zéro ?", a: "Très souvent oui. Un kit de régulation pH/Rx se greffe sur la grande majorité des installations existantes disposant d'un départ de by-pass sur le circuit de filtration. Nous évaluons la faisabilité lors d'une visite préalable gratuite." },
    ],
  },
  {
    slug: "lucens",
    name: "Lucens",
    distance: "18 km depuis Granges-de-Vesin",
    communes: ["Curtilles", "Henniez", "Trey", "Moudon", "Brenles", "Sarzens"],
    particularite: "Vallée de la Broye, région agricole, eau du réseau de bonne qualité avec dureté modérée.",
    delai: "Intervention sous 24-48h.",
    localDescription: "La vallée de la Broye autour de Lucens offre un cadre agricole paisible avec une eau de réseau de qualité supérieure à la moyenne régionale. La dureté modérée et la faible minéralisation de l'eau facilitent l'équilibrage chimique et prolongent la durée de vie des équipements de filtration. Xx Works intervient dans toute la région, depuis Moudon jusqu'à Henniez, en incluant les communes de la plaine.",
    conseil: "L'eau de la région de Lucens est de bonne qualité mais peut présenter des pics de fer et de manganèse en début de saison si la piscine a hiverné avec l'eau du réseau. Un choc chlore et une filtration prolongée lors de la mise en service évitent les colorations brunâtres indésirables en début de saison.",
    faq: [
      { q: "Combien coûte un entretien saisonnier bi-mensuel autour de Lucens ?", a: "Un contrat bi-mensuel couvre la mise en service, les visites toutes les deux semaines pendant la saison et la mise en hivernage. La tarification est effectuée sur devis selon le volume et l'équipement de votre installation." },
      { q: "Pouvez-vous intervenir sur des anciens systèmes de filtration à Lucens ?", a: "Oui. Nous maîtrisons les anciens systèmes aussi bien que les marques actuelles. Pour les pièces obsolètes, nous proposons une mise à niveau partielle ou complète selon votre budget et les possibilités de l'installation." },
      { q: "Gérez-vous les piscines couvertes ou intérieures dans la région de Lucens ?", a: "Oui, avec une attention particulière à la ventilation et à la gestion de l'humidité. Les piscines intérieures demandent une chimie plus stricte pour éviter les efflorescences sur les parois et les corrosions sur les équipements électriques." },
      { q: "Proposez-vous des interventions en soirée dans la région de Lucens ?", a: "Pour les urgences uniquement. Les interventions planifiées se font en journée, du lundi au vendredi, avec des créneaux possibles le samedi matin selon le planning." },
    ],
  },
  {
    slug: "neuchatel",
    name: "Neuchâtel",
    distance: "35 km depuis Granges-de-Vesin",
    communes: ["Saint-Blaise", "Hauterive", "Marin-Epagnier", "Cortaillod", "Auvernier", "Colombier"],
    particularite: "Région lacustre, eau du réseau douce car issue partiellement du lac. Climat tempéré.",
    delai: "Intervention sous 48h, planification recommandée.",
    localDescription: "Neuchâtel et sa couronne lacustre concentrent des installations haut de gamme, souvent dotées de piscines à débordement, de spas ou de piscines intérieures. La douceur de l'eau (partiellement issue du lac) simplifie la chimie mais l'éloignement (35 km) impose une planification des interventions. Xx Works dessert Neuchâtel avec les mêmes prestations complètes qu'en zone proche, avec un délai de planification raisonnable de 48h.",
    conseil: "L'eau douce de Neuchâtel présente parfois un TAC insuffisant en début de saison (< 80 mg/l). Un ajout d'hydrogénocarbonate de sodium lors de la mise en service stabilise le pH et réduit les variations brusques liées au dégazage du CO2. Nous réalisons systématiquement cette correction à l'ouverture de la saison.",
    faq: [
      { q: "Pourquoi faire appel à un pisciniste de la Broye plutôt qu'un prestataire local de Neuchâtel ?", a: "Notre spécialisation exclusive dans la technique piscine (brevet fédéral, équipements pro Bayrol/Dryden Aqua/Badu) et notre structure indépendante nous permettent d'offrir un niveau d'expertise que les généralistes locaux ne peuvent souvent pas égaler. Nos tarifs sont transparents et notre réactivité est forte pour les clients sous contrat annuel." },
      { q: "Gérez-vous les piscines à débordement fréquentes sur les hauteurs de Neuchâtel ?", a: "Oui, c'est une de nos spécialités. Les piscines à débordement nécessitent un dimensionnement hydraulique précis du bac tampon, une régulation de niveau automatique et une gestion des variations liées au vent ou à l'évaporation. Nous avons réalisé plusieurs installations de ce type." },
      { q: "Quel est le délai pour obtenir un devis sur Neuchâtel ?", a: "Nous répondons aux demandes de devis sous 24–48h ouvrées. Une visite de chiffrage est planifiée dans les 5–7 jours suivant la demande initiale." },
      { q: "Proposez-vous la domotique piscine intégrée au système maison à Neuchâtel ?", a: "Oui, notamment les intégrations KNX et les modules compatibles avec les principales interfaces domotiques (HomeKit, Z-Wave). Nous travaillons en coordination avec votre électricien ou votre intégrateur domotique." },
    ],
  },
  {
    slug: "fribourg",
    name: "Fribourg",
    distance: "25 km depuis Granges-de-Vesin",
    communes: ["Marly", "Givisiez", "Granges-Paccot", "Düdingen", "Belfaux", "Avry"],
    particularite: "Eau du réseau de la Sarine, dureté variable selon le quartier. Terrain vallonné, attention au positionnement des locaux techniques.",
    delai: "Intervention sous 48h.",
    localDescription: "Fribourg et son agglomération (Marly, Givisiez, Granges-Paccot) présentent un terrain vallonné caractéristique qui influe directement sur l'installation et l'entretien des piscines : locaux techniques en dénivelé, terrains pentus, pression de refoulement variable. Xx Works connaît bien ces contraintes spécifiques au terrain fribourgeois et les prend en compte systématiquement dans son approche technique et ses chiffrages.",
    conseil: "La dureté de l'eau à Fribourg varie selon le secteur : l'eau de la Sarine (Fribourg-ville) est plus douce que l'eau de nappe des quartiers périphériques. Avant tout nouveau démarrage, une analyse complète (pH, TAC, TH, Ca) est indispensable pour définir le programme de traitement adapté à votre quartier.",
    faq: [
      { q: "Comment gérez-vous les contraintes du terrain vallonné à Fribourg ?", a: "Sur terrain en pente, le local technique doit être positionné de manière à garantir une pression d'aspiration correcte et à éviter les phénomènes de désamorçage. Nous évaluons systématiquement la topographie lors de la visite de chiffrage, sans surcoût." },
      { q: "Proposez-vous vos services en allemand pour les clients de Düdingen ou Belfaux ?", a: "Nos rapports d'intervention et devis peuvent être rédigés en allemand sur demande. Nous intervenons dans tout le district du Lac et la couronne fribourgeoise sans distinction linguistique." },
      { q: "Puis-je automatiser ma piscine à Fribourg si elle est déjà équipée ?", a: "Oui. Nous greffons une régulation automatique (pH, Rx, contre-lavage) sur la grande majorité des installations existantes, quelle que soit la marque ou l'ancienneté. Une visite de diagnostic permet de confirmer la faisabilité." },
      { q: "Intervenez-vous à Belfaux, Avry et Granges-Paccot ?", a: "Oui, ces communes font partie de notre zone Fribourg. Le délai d'intervention est identique à celui de la ville de Fribourg : 48h pour les demandes planifiées, jour-même pour les urgences avérées." },
    ],
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
