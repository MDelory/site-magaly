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
    dateFormatted: "Vendredi 09 Octobre 2026",
    // Target ISO date for the live countdown timer
    isoDate: "2026-10-09T19:30:00",
    time: "19h30 - 23h00 (puis virée en ville)",
    doorsOpen: "19h30",
    location: {
      name: "Restaurant de l'Hippodrome",
      address: "137 Bd Clemenceau, 59700 Marcq-en-Barœul",
      accessNote: "Restaurant situé au sein de l'Hippodrome de Marcq-en-Barœul. Parking facile et gratuit sur place.",
      mapQuery: "Hippodrome 137 Bd Clemenceau 59700 Marcq-en-Barœul",
    },
    dressCode: {
      title: "Élégance Festive",
      paletteName: "Palette Royale : Nudes, Champagne, Sable, Ivoire & Or",
      description: "Tenue chic et festive.",
      warning: "",
      warningShort: "",
      paletteLabel: "",
      paletteSwatches: [],
    },

    // Labels UI centralisés pour EventDetails
    ui: {
      protocol: {
        badge: "INFORMATIONS PRATIQUES",
        title: "Lieu & Horaires de la Soirée",
        subtitle: "Toutes les indications pour nous rejoindre au restaurant et célébrer le diplôme de Magaly.",
      },
      dateCard: {
        badge: "HORAIRES DE LA SOIRÉE",
        doorsLabel: "Arrivée & Apéritif d'accueil",
        startLabel: "Dîner festif au restaurant",
        endLabel: "Clôture du restaurant (Max)",
        startTime: "20h15",
        endTime: "23h00",
        footnote: "Next step après 23h : Virée en ville pour boire un verre et continuer la fête pour ceux qui le souhaitent ! (Heure de fin : ???)",
      },
      locationCard: {
        badge: "LIEU DE RÉCEPTION",
        mapButton: "Ouvrir l'itinéraire Google Maps",
      },
      map: {
        badge: "LOCALISATION",
        title: "Rejoindre le Restaurant",
        subtitle: "Restaurant de l'Hippodrome, 137 Bd Clemenceau, 59700 Marcq-en-Barœul.",
        note: "Arrivée à partir de 19h30. Parking gratuit sur place à l'Hippodrome.",
        gpsButton: "Itinéraire GPS",
      },
    },
  },

  // Textes de la page de connexion (Gatekeeper)
  gatekeeper: {
    badge: "Couronnement Académique 2026",
    title: "Le Portail Royal",
    subtitle: "L'accès à la célébration officielle de remise de diplôme de Magaly est réservé aux invités d'honneur.",
    emailPlaceholder: "Votre adresse email d'invitation...",
    submitButton: "Pénétrer dans le Palais",
    successTitle: "ACCÈS ACCORDÉ",
    welcomePrefix: "Bienvenue,",
    successSuffix: "Ouverture des portes...",
    errorMessage: "Accès non autorisé : Votre adresse ne figure pas sur le registre. Veuillez vérifier l'orthographe ou contacter l'organisatrice.",
    footerNote: "🔒 Invitation privée & confidentielle",
    footerRule: "Veuillez renseigner votre email d'invitation pour accéder au lieu, aux horaires et aux détails de la soirée.",
  },

  // Textes de la section Hero
  hero: {
    badge: "PAR DÉCRET OFFICIEL",
    subtitle: "Le Couronnement Académique de",
    countdownLabel: "Temps restant avant l'arrivée au restaurant",
    countdownUnits: ["Jours", "Heures", "Minutes", "Secondes"],
    ctaProtocol: "Lieu & Horaires",
    ctaCalendar: "Ajouter au Calendrier",
    guestConvocation: "Invitation officielle délivrée à :",
    icsSummary: "Célébration Diplôme Magaly - Restaurant de l'Hippodrome",
    icsDescription: "Dîner au Restaurant de l'Hippodrome (137 Bd Clemenceau, Marcq-en-Barœul) à 19h30, clôture restaurant 23h, puis verre en ville pour ceux qui veulent !",
  },

  // Textes de la section Proclamation
  proclamation: {
    badge: "ÉDIT SOUMIS À LA NATION",
    sectionTitle: "La Proclamation Impériale",
    manuscriptLabel: "MANUSCRIT DU PALAIS ACADÉMIQUE",
    cardTitle: "\"Des Années d'Efforts, un Instant de Gloire Éternelle\"",
    paragraph1: "Qu'il soit su de tous les sujets et bienaimés : au terme d'un chemin rigoureux, jalonné de nuits d'étude, d'audace intellectuelle et d'une détermination sans faille, Magaly s'est élevée aux plus hauts honneurs.",
    paragraph2: "Ce diplôme ne consacre pas seulement un grade universitaire ; il marque son avènement en tant que Reine de son destin. Pour célébrer cette apogée, les portes s'ouvrent à ceux qui ont partagé ses doutes et soutenu ses triomphes.",
    diplomaCaption: "Promotion d'Excellence & Grand Mérite",
    honorPoints: ["Mention Triomphale", "Dîner à l'Hippodrome", "Bulles & Célébration", "Virée en Ville Ensuite"],
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
    tag1: "✨ Organisatrice",
    tag2: "👑 Gala 2026",
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
    linkOrganisatrice: "L'Organisatrice",
    linkProtocole: "Lieu & Horaires",
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
