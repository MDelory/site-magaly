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

  // Textes de la page de connexion (Gatekeeper)
  gatekeeper: {
    badge: "Couronnement Académique 2026",
    title: "Le Portail Royal",
    subtitle: "Par décret, l'accès à la célébration officielle de remise de diplôme est strictement réservé aux invités d'honneur.",
    emailPlaceholder: "Votre adresse email d'invitation...",
    submitButton: "Pénétrer dans le Palais",
    successTitle: "ACCÈS ACCORDÉ",
    successSuffix: "Ouverture des portes...",
    errorMessage: "Accès non autorisé : Votre adresse ne figure pas sur le registre. Veuillez vérifier l'orthographe ou contacter l'organisatrice.",
    footerNote: "🏛️ Gala de Célébration • Palette Nude, Ivoire & Or Impérial",
    footerRule: "Règle de courtoisie : Tenues roses strictement proscrites.",
  },

  // Textes de la section Hero
  hero: {
    badge: "PAR DÉCRET OFFICIEL",
    subtitle: "Le Couronnement Académique de",
    countdownLabel: "Temps restant avant l'ouverture des portes royales",
    countdownUnits: ["Jours", "Heures", "Minutes", "Secondes"],
    ctaProtocol: "Le Protocole & Dress Code",
    ctaCalendar: "Ajouter au Calendrier",
    guestConvocation: "Ordre de convocation délivré à :",
  },

  // Textes de la section Proclamation
  proclamation: {
    badge: "ÉDIT SOUMIS À LA NATION",
    sectionTitle: "La Proclamation Impériale",
    manuscriptLabel: "MANUSCRIT DU PALAIS ACADÉMIQUE",
    cardTitle: "\"Des Années d'Efforts, un Instant de Gloire Éternelle\"",
    paragraph1: "Qu'il soit su de tous les sujets et bienaimés : au terme d'un chemin rigoureux, jalonné de nuits d'étude, d'audace intellectuelle et d'une détermination sans faille, Magaly s'est élevée aux plus hauts honneurs.",
    paragraph2: "Ce diplôme ne consacre pas seulement un grade universitaire ; il marque son avènement en tant que Reine de son destin. Pour célébrer cette apogée, les portes du Pavillon s'ouvrent à ceux qui ont partagé ses doutes et soutenu ses triomphes.",
    diplomaCaption: "Promotion d'Excellence & Grand Mérite",
    honorPoints: ["Mention Triomphale", "Nuit Festive Royale", "Champagne & Banquet", "Tenues Nude & Gold"],
    queenAttribution: "— Magaly",
  },

  // Section photo de l'organisatrice
  organizer: {
    badge: "L'ORGANISATRICE DE LA SOIRÉE",
    sectionTitle: "Derrière la Magie",
    subtitle: "Celle qui a tout orchestré pour que cette nuit soit inoubliable.",
    photo1Alt: "L'organisatrice du gala - photo 1",
    photo2Alt: "L'organisatrice du gala - photo 2",
    photo1Caption: "Organisatrice & Cheffe de Cérémonie",
    photo2Caption: "La passion derrière chaque détail",
    description: "Avec une attention méticuleuse aux détails et une passion débordante pour les célébrations d'exception, elle a conçu chaque instant de cette soirée royale pour que Magaly soit à l'honneur, entourée de ses proches dans un cadre somptueux.",
  },

  // Textes de la section RSVP
  rsvp: {
    badge: "CONFIRMATION OFFICIELLE",
    sectionTitle: "Le Décret de Présence",
    subtitle: "La confirmation de votre présence permet d'ajuster les honneurs du banquet et les bulles de champagne.",
    attendingLabel: "VOTRE RÉPONSE :",
    yesLabel: "👑 Je réponds présent(e) !",
    yesCaption: "Je célébrerai ce couronnement avec éclat.",
    noLabel: "🕊️ Avec le plus grand regret",
    noCaption: "Je serai absent(e) mais de tout cœur avec la Reine.",
    plusOneLabel: "Je serai accompagné(e) d'un invité (+1 inclus dans mon invitation)",
    plusOnePlaceholder: "Nom & Prénom de votre accompagnant(e)...",
    banquetLabel: "PRÉFÉRENCE POUR LE BANQUET :",
    messageLabel: "UN MOT PERSONNEL POUR MAGALY :",
    messagePlaceholder: "Écrivez un mot doux, un toast ou une pensée bienveillante...",
    submitButton: "Signer le Décret de Présence",
    ticketBadgePrefix: "RÉFÉRENCE OFFICIELLE :",
    confirmedYesTitle: "Votre Présence est Enregistrée !",
    confirmedNoTitle: "Votre Message a été Transmis",
    confirmedYesText: "Votre place au Pavillon Royal est réservée pour cette nuit mémorable.",
    confirmedNoText: "Magaly a bien reçu votre réponse. Vos pensées bienveillantes illumineront cette célébration.",
    printButton: "Imprimer / Sauvegarder mon Pass",
    editButton: "Modifier ma réponse",
    guestLabel: "Invité(e) :",
    plusOneSummaryLabel: "Accompagnant (+1) :",
    dietLabel: "Régime au banquet :",
    dressCodeLabel: "Dress Code :",
    dressCodeValue: "Nude & Gold (Zéro Rose)",
    dietOptions: [
      { value: "standard", label: "Menu Gastronomique d'Apparat (Viande & Poisson)" },
      { value: "vegetarien", label: "Menu Végétarien Gourmand" },
      { value: "sans-gluten", label: "Menu Sans Gluten & Allergènes" },
      { value: "halal", label: "Menu Spécial / Halal" },
      { value: "sans-alcool", label: "Option Sans Alcool (Cocktails & Bulles Pétillantes)" },
    ],
  },

  // Textes du Livre d'Or
  guestbook: {
    badge: "REGISTRE DES ÉLOGES",
    sectionTitle: "Le Livre d'Or de la Reine",
    subtitle: "Laissez une dédicace, portez un toast ou partagez vos vœux les plus chaleureux pour Magaly.",
    nameLabel: "VOTRE NOM :",
    namePlaceholder: "Votre nom...",
    badgeLabel: "SCEAU DU TOAST :",
    messageLabel: "VOTRE MESSAGE À MAGALY :",
    messagePlaceholder: "Écrivez vos félicitations mémorables...",
    submitButton: "Apposer mon Sceau au Livre d'Or",
    formTitle: "Porter un Toast Royal",
    roleDefault: "Ami(e) de Magaly",
  },

  // Textes de la section Timeline
  timeline: {
    badge: "DÉROULEMENT DU PROTOCOLE",
    sectionTitle: "Le Programme de la Nuit Royale",
    subtitle: "De l'accueil solennel jusqu'au bal festif, chaque instant a été orchestré pour célébrer le triomphe de la Reine.",
  },

  // Textes de la FAQ
  faqSection: {
    badge: "ÉCLAIRCISSEMENTS DE LA COUR",
    sectionTitle: "Questions Fréquentes",
    subtitle: "Les réponses aux interrogations des invités pour une soirée sans le moindre faux pas.",
  },

  // Textes du footer
  footer: {
    title: "THE QUEEN'S GRADUATION GALA",
    quote: "\"Que cette nuit royale résonne à jamais dans la mémoire de la Cour.\"",
    protocol: "✨ Protocole d'Excellence • Palette Bordeaux, Nudes & Or Impérial",
    scrollTop: "Regagner le Haut du Palais",
    copyright: "© 2026 The Queen's Gala. Tous droits royaux réservés.",
  },

  // Textes de la Navbar
  navbar: {
    logoTitle: "QUEEN MAGALY",
    logoSubtitle: "Graduation Gala 2026",
    linkAnnonce: "L'Annonce",
    linkProtocole: "Protocole",
    linkProgramme: "Programme",
    celebrateLabel: "Célébrer !",
  },

  // Liste des convives autorisés à franchir les portes royales
  guests: [
    {
      email: "invite@royale.com",
      name: "Invité(e) d'Honneur",
      plusOne: true,
      greeting: "C'est un privilège de vous compter parmi les convives de cette célébration.",
    },
    {
      email: "martin@delory.fr",
      name: "Martin Delory",
      plusOne: true,
      greeting: "Votre présence et votre dévouement honorent cette célébration.",
    },
    {
      email: "queen@magaly.fr",
      name: "Magaly",
      plusOne: true,
      greeting: "Toute la cour est prête à célébrer votre triomphe !",
    },
    {
      email: "famille@magaly.fr",
      name: "La Famille",
      plusOne: true,
      greeting: "Le cercle le plus cher à Magaly est attendu aux premières loges.",
    },
    {
      email: "ami@magaly.fr",
      name: "Cercle des Amis",
      plusOne: true,
      greeting: "Venez porter un toast inoubliable avec la Reine !",
    },
    {
      email: "diplome@queen.fr",
      name: "Promotion Triomphante",
      plusOne: true,
      greeting: "Après des années d'efforts, le couronnement est enfin là !",
    },
    {
      email: "vip@diplome.com",
      name: "Invité VIP",
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
      author: "La Cour",
      role: "Vœux d'Honneur",
      date: "Il y a 2 jours",
      badge: "👑 Majesté",
      message: "Toutes nos félicitations pour ce parcours exemplaire. Tu portes déjà la couronne avec une grâce infinie !",
    },
    {
      id: 2,
      author: "Martin",
      role: "Ami fidèle",
      date: "Hier",
      badge: "🍾 Champagne",
      message: "Des nuits de révisions jusqu'à cette victoire éclatante... Bravo Magaly, tu mérites la plus royale des fêtes !",
    },
    {
      id: 3,
      author: "Cercle des Amis",
      role: "Fidèles Amis",
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
      a: "Votre invitation personnalisée vous indique si un accompagnant (+1) est inclus. Vous pourrez confirmer son nom dans le formulaire RSVP.",
    },
    {
      q: "Y a-t-il une cagnotte pour la diplômée ?",
      a: "Votre présence est le plus beau cadeau. Pour ceux qui souhaitent gâter Magaly dans ses futurs projets, une urne et un QR Code sécurisé seront à disposition dans le salon d'honneur.",
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
