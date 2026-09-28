/**
 * Configuration Centrale de l'Événement & Liste des Invités Autorisés
 * Thème : "Queen" - Célébration Royale & Festive de Remise de Diplôme
 * Charte Graphique : Nudes, Champagne, Crème, Ivoire, Or Royal (STRICTEMENT AUCUN ROSE)
 */

export const EVENT_CONFIG = {
  queen: {
    firstName: "Magaly",
    fullName: "Magaly",
    title: "Magaly",
    degree: "Diplômée d'Honneur & Félicitations du Jury",
    academy: "Université d'Excellence & Promotion Triomphante",
    quote: "Une couronne ne se donne pas, elle se conquiert avec passion, travail et persévérance.",
    badge: "Couronnement Académique 2026",
  },

  event: {
    title: "The Queen's Graduation Gala",
    subtitle: "Célébration Royale & Nuit d'Élégance",
    dateFormatted: "Samedi 24 Octobre 2026",
    // Target ISO date for the live countdown timer
    isoDate: "2026-10-24T18:00:00",
    time: "18h00 - Jusqu'au bout de la nuit",
    doorsOpen: "17h30",
    location: {
      name: "Le Pavillon Royal & Ses Salons Dorés",
      address: "Carrefour du Bout des Lacs, 75016 Paris",
      accessNote: "Service de voiturier royal disponible & Parking privé d'honneur",
      mapQuery: "Pavillon Royal Paris",
    },
    dressCode: {
      title: "Majesté & Élégance Nude",
      paletteName: "Palette Royale : Nudes, Champagne, Sable, Ivoire & Or",
      description: "Tenue de gala ou cocktail d'apparat. Privilégiez les étoffes soyeuses, lins fins, satins chauds, beiges solaires et reflets dorés.",
      warning: "DÉCRET ROYAL STRICT : Aucune couleur rose ne sera admise dans l'enceinte du palais !",
      warningShort: "Aucune touche de rose ne sera tolérée au gala.",
      paletteLabel: "Échantillons de la palette autorisée :",
      paletteSwatches: [
        { name: "Champagne Royal", hex: "#EAD7B7" },
        { name: "Nude Poudré Chaud", hex: "#DFCBB5" },
        { name: "Sable Doré", hex: "#CDB397" },
        { name: "Or Impérial", hex: "#D4AF37" },
        { name: "Mocha & Noyer", hex: "#5C4638" },
      ],
    },

    // Labels UI centralisés pour EventDetails
    ui: {
      protocol: {
        badge: "DÉCRETS & DISPOSITIONS DU PALAIS",
        title: "Le Protocole Festif",
        subtitle: "Toutes les indications pour honorer l'invitation dans les règles de l'art royal.",
      },
      dateCard: {
        badge: "HORAIRE DES RÉJOUISSANCES",
        doorsLabel: "Arrivée & Tapis d'Honneur",
        startLabel: "Lancement solennel du Gala",
        endLabel: "Bal & Nuit Royale",
        startTime: "18h00",
        endTime: "Jusqu'à 04h00",
        footnote: "La ponctualité est la politesse des rois et reines.",
      },
      locationCard: {
        badge: "RÉSIDENCE DE RÉCEPTION",
        mapButton: "Ouvrir le Plan d'Accès GPS",
      },
      dressCard: {
        badge: "CODE VESTIMENTAIRE IMPÉRIAL",
        warningLabel: "DÉCRET ROYAL STRICT :",
        paletteSelection: "Sélection :",
      },
      map: {
        badge: "LOCALISATION DU GALA",
        title: "Rejoindre le Palais",
        subtitle: "Itinéraire et plan d'accès pour se rendre au Pavillon Royal le soir du gala.",
        note: "Arrivée recommandée à partir de 17h30. Accès et parking privé disponibles sur place.",
      },
    },
  },

  // Liste des convives autorisés à franchir les portes royales
  guests: [
    {
      email: "invite@royale.com",
      name: "Invité(e) d'Honneur",
      role: "Dignitaire de la Cour",
      plusOne: true,
      greeting: "C'est un privilège royal de vous compter parmi les convives d'apparat.",
    },
    {
      email: "martin@delory.fr",
      name: "Martin Delory",
      role: "Grand Chambellan de la Célébration",
      plusOne: true,
      greeting: "Votre présence et votre dévouement honorent la Souveraine.",
    },
    {
      email: "queen@magaly.fr",
      name: "Reine Magaly",
      role: "La Souveraine & Diplômée",
      plusOne: true,
      greeting: "Majesté, tous vos dignitaires sont prêts à célébrer votre gloire !",
    },
    {
      email: "famille@magaly.fr",
      name: "La Famille Royale",
      role: "Maison Royale",
      plusOne: true,
      greeting: "Le cercle le plus cher à la Reine est attendu aux premières loges.",
    },
    {
      email: "ami@magaly.fr",
      name: "Cercle des Fidèles",
      role: "Ordre Royal de l'Amitié",
      plusOne: true,
      greeting: "Venez porter un toast inoubliable avec la Reine !",
    },
    {
      email: "diplome@queen.fr",
      name: "Promotion Triomphante",
      role: "Confrère / Consœur Académique",
      plusOne: true,
      greeting: "Après des années d'efforts, le couronnement est enfin là !",
    },
    {
      email: "vip@diplome.com",
      name: "Invité VIP",
      role: "Haute Délégation",
      plusOne: false,
      greeting: "Un siège de prestige vous est d'ores et déjà réservé.",
    },
  ],

  // Protocole et chronologie festive
  schedule: [
    {
      time: "17h30",
      title: "L'Arrivée des Dignitaires",
      description: "Accueil sur le tapis d'honneur, contrôle du sceau royal et vestiaire privé.",
      icon: "Sparkles",
    },
    {
      time: "18h15",
      title: "Cocktail Champagne & Canapés",
      description: "Bulles dorées, amuse-bouches gastronomiques et ambiance jazz festif.",
      icon: "Wine",
    },
    {
      time: "19h30",
      title: "Le Couronnement Académique",
      description: "Discours solennel de la Reine Magaly, éloges impériaux et acclamations.",
      icon: "Crown",
    },
    {
      time: "20h30",
      title: "Banquet des Souverains",
      description: "Dîner gastronomique assis sous les lustres de cristal du Pavillon.",
      icon: "Utensils",
    },
    {
      time: "22h30",
      title: "Ouverture du Bal & Dancefloor Royal",
      description: "Set DJ exclusif, tubes d'anthologie, hymnes légendaires de Queen et fête jusqu'à l'aube.",
      icon: "Music",
    },
    {
      time: "03h00",
      title: "Buffet Nocturne & Souvenirs",
      description: "Gourmandises de nuit, signature du parchemin royal et photos souvenirs.",
      icon: "Moon",
    },
  ],

  // Messages d'accueil et toasts initiaux dans le Livre d'Or
  initialToasts: [
    {
      id: 1,
      author: "La Cour Impériale",
      role: "Conseil des Sages",
      date: "Il y a 2 jours",
      badge: "👑 Majesté",
      message: "Toutes nos félicitations pour ce parcours exemplaire. Tu portes déjà la couronne avec une grâce infinie !",
    },
    {
      id: 2,
      author: "Martin",
      role: "Grand Chambellan",
      date: "Hier",
      badge: "🍾 Champagne",
      message: "Des nuits de révisions jusqu'à cette victoire éclatante... Bravo Magaly, tu mérites la plus royale des fêtes !",
    },
    {
      id: 3,
      author: "Cercle des Amis",
      role: "Fidèles Alliés",
      date: "Aujourd'hui",
      badge: "✨ Pure Légende",
      message: "On a hâte de brûler le dancefloor pour célébrer notre Queen préférée. Prépare ta couronne !",
    },
  ],

  // Playlist festive recommandée & suggestions
  royalAnthems: [
    { title: "Don't Stop Me Now", artist: "Queen", mood: "L'Hymne Festif Absolu" },
    { title: "We Are The Champions", artist: "Queen", mood: "Le Triomphe du Diplôme" },
    { title: "Dancing Queen", artist: "ABBA (Orchestral & Disco)", mood: "L'Élégance du Bal" },
    { title: "Cuff It", artist: "Beyoncé", mood: "Groove Royal" },
    { title: "Celebration", artist: "Kool & The Gang", mood: "Feux de Joie" },
  ],

  faq: [
    {
      q: "Quel est le dress code exact ?",
      a: "Tenue chic, festive et élégante. La palette imposée est : Nude, Crème, Ivoire, Champagne, Sable, Doré ou Noir profond. RAPPEL DÉCISIF : Aucun rose n'est toléré.",
    },
    {
      q: "Puis-je venir accompagné(e) ?",
      a: "Votre invitation personnalisée vous indique si un accompagnant (+1) est inclus dans votre décret royal. Vous pourrez confirmer son nom dans le formulaire RSVP.",
    },
    {
      q: "Y a-t-il une cagnotte royale pour la diplômée ?",
      a: "Votre présence est le plus beau joyau. Pour ceux qui souhaitent gâter la Reine dans ses futurs projets, une urne royale et un QR Code sécurisé seront à disposition dans le salon d'honneur.",
    },
    {
      q: "Comment rejoindre le Pavillon ?",
      a: "Accès par l'Avenue de la Victoire. Parking d'honneur surveillé gratuit sur place, ou taxi / VTC directement aux marches du péristyle.",
    },
  ],
}

/**
 * Vérifie si l'email saisi figure sur la liste des invités
 * Insensible à la casse et aux espaces superflus
 */
export function verifyGuestEmail(inputEmail) {
  if (!inputEmail || typeof inputEmail !== 'string') return null
  const cleaned = inputEmail.trim().toLowerCase()
  return EVENT_CONFIG.guests.find((g) => g.email.toLowerCase() === cleaned) || null
}
