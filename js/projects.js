const siteConfig = {
  linkedin: "https://www.linkedin.com/in/faizannorat/",
  cv: {
    fr: "assets/CV-Faizan-Norat-FR.pdf",
    en: ""
  },
  coachPhoto: "assets/coach-faizan.png",
  formspreeId: "xjyyybew"
};

const projects = [
  {
    id: "jeu21",
    number: "01",
    name: "Jeu du 21",
    kit: "green",
    role: { fr: "Gardien", en: "Goalkeeper" },
    type: { fr: "Jeu de cartes · application desktop", en: "Card game · desktop application" },
    pos: { x: 8, y: 50 },
    posV: { x: 50, y: 8 },
    description: {
      fr: "Un jeu de cartes inspiré du blackjack, où le joueur doit se rapprocher de 21 sans dépasser ce total.",
      en: "A blackjack-inspired card game where the player aims to get as close to 21 as possible without going over."
    },
    work: {
      fr: ["Gestion des manches et des scores du joueur et du donneur", "Actions Hit / Stand et conseil stratégique ponctuel", "Affichage des règles, statistiques et changement de thème"],
      en: ["Round management and player/dealer scoring", "Hit / Stand actions and a one-use strategy hint", "Rules, statistics and theme switching"]
    },
    technologies: ["Python 3", "PyQt6", "UX thinking", "Conception d’interface", "Logique de jeu", "Statistiques"],
    note: {
      fr: "Application desktop développée dans le cadre d’un projet HCI & GUI.",
      en: "Desktop application developed as part of an HCI & GUI project."
    },
    link: "",
    screenshots: ["assets/screenshots/jeu21-main.jpg", "assets/screenshots/jeu21-hint.jpg", "assets/screenshots/jeu21-rules.jpg", "assets/screenshots/jeu21-about.jpg"]
  },
  {
    id: "stock",
    number: "04",
    name: "Stock Trade Market",
    kit: "green",
    role: { fr: "Défenseur central", en: "Centre-back" },
    type: { fr: "Projet réalisé à Dublin", en: "Project completed in Dublin" },
    pos: { x: 22, y: 34 },
    posV: { x: 28, y: 20 },
    description: {
      fr: "Projet lié au marché boursier, réalisé à Dublin. Les fonctionnalités, les données et les choix techniques seront précisés après vérification du projet.",
      en: "A stock-market project completed in Dublin. Features, data and technical choices will be specified once the project has been checked."
    },
    work: { fr: ["Détails à compléter"], en: ["Details to be completed"] },
    technologies: [],
    note: {
      fr: "À compléter : fonctionnalités, données, technologies et lien du projet.",
      en: "To complete: features, data, technologies and project link."
    },
    link: "",
    screenshots: ["assets/stock-trade-calculator.png"]
  },
  {
    id: "pictionary",
    number: "05",
    name: "Pictionary Game",
    kit: "green",
    role: { fr: "Défenseur central", en: "Centre-back" },
    type: { fr: "Jeu de dessin · deux joueurs", en: "Drawing game · two players" },
    pos: { x: 22, y: 66 },
    posV: { x: 72, y: 20 },
    description: {
      fr: "Un jeu de dessin et de devinettes à deux joueurs : chacun dessine un mot secret à tour de rôle pendant que l’autre essaie de le deviner.",
      en: "A two-player drawing and guessing game: players take turns drawing a secret word while the other player tries to guess it."
    },
    work: {
      fr: ["Gestion des tours, des scores et du chronomètre", "Outils de dessin : couleurs, tailles et styles de pinceau", "Modes de difficulté, indice, joker et sauvegarde du dessin"],
      en: ["Turn, score and countdown management", "Drawing tools: brush colours, sizes and styles", "Difficulty levels, hints, joker and drawing export"]
    },
    technologies: ["Python", "PyQt6", "QPainter", "Interface graphique", "Gestion d’événements", "CSV"],
    note: {
      fr: "Application développée dans le cadre d’un projet d’interface graphique.",
      en: "Application developed as part of a graphical user interface project."
    },
    link: "",
    screenshots: ["assets/screenshots/pictionary-main.jpg", "assets/screenshots/pictionary-drawing.jpg", "assets/screenshots/pictionary-rules.jpg", "assets/screenshots/pictionary-about.jpg"]
  },
  {
    id: "livin",
    number: "06",
    name: "Liv’In Paris",
    kit: "cream",
    role: { fr: "Milieu défensif", en: "Defensive midfielder" },
    type: { fr: "Projet académique · en groupe", en: "Academic project · group work" },
    pos: { x: 38, y: 50 },
    posV: { x: 50, y: 34 },
    description: {
      fr: "Projet de groupe réalisé à l'ESILV. La problématique et les fonctionnalités détaillées seront présentées après relecture du dépôt et des livrables.",
      en: "A group project carried out at ESILV. The problem statement and detailed features will be presented once the repository and deliverables have been reviewed."
    },
    work: {
      fr: ["Algorithmes de graphes", "Gestion de base de données", "Analyse statistique"],
      en: ["Graph algorithms", "Database management", "Statistical analysis"]
    },
    technologies: ["C#", "MySQL", "Algorithmes de graphes", "Statistiques"],
    note: {
      fr: "Les réalisations personnelles seront détaillées après vérification du projet.",
      en: "Individual contributions will be detailed after the project has been reviewed."
    },
    link: "https://github.com/fzn-72/Livin-paris",
    screenshots: []
  }
];

const upcoming = [
  { id: "upcoming-9", number: "09", role: { fr: "Attaquant de pointe", en: "Striker" }, pos: { x: 84, y: 50 }, posV: { x: 50, y: 78 } },
  { id: "upcoming-11", number: "11", role: { fr: "Ailier gauche", en: "Left winger" }, pos: { x: 72, y: 24 }, posV: { x: 27, y: 64 } },
  { id: "upcoming-7", number: "07", role: { fr: "Ailier droit", en: "Right winger" }, pos: { x: 72, y: 76 }, posV: { x: 73, y: 64 } }
].map(item => ({ ...item, kit: "grey", reserve: true }));

const skills = [
  {
    title: { fr: "Data & visualisation", en: "Data & visualisation" },
    items: ["Power BI", "DAX", "KPI", { fr: "Analyse & visualisation de données", en: "Data analysis & visualisation" }]
  },
  {
    title: { fr: "Programmation & données", en: "Programming & data" },
    items: ["C#", "Python", "SQL / MySQL"]
  },
  {
    title: { fr: "Ergonomie & conception", en: "Usability & design" },
    items: ["UX / UI", { fr: "Figma (découverte)", en: "Figma (introduction)" }]
  }
];

const honours = [
  {
    name: "IBM — AI Fundamentals",
    date: { fr: "Octobre 2026", en: "October 2026" },
    detail: { fr: "AI Fundamentals: Foundations for Understanding AI", en: "AI Fundamentals: Foundations for Understanding AI" }
  },
  {
    name: "IBM — Data Fundamentals",
    date: { fr: "Octobre 2026", en: "October 2026" },
    detail: { fr: "Fondamentaux de la donnée", en: "Data fundamentals" }
  },
  {
    name: "TOEFL ITP — B2+",
    date: { fr: "Mars 2025 · 597/677", en: "March 2025 · 597/677" },
    detail: { fr: "Certification d’anglais", en: "English-language certification" }
  },
  {
    name: "Unity Essentials",
    date: { fr: "Septembre 2026", en: "September 2026" },
    detail: { fr: "Parcours d’initiation à l’environnement Unity", en: "Introduction to the Unity environment" }
  }
];

const reserve = [
  {
    id: "reserve-ai-learning-coach",
    number: "12",
    name: "AI Learning Coach",
    kit: "grey",
    reserve: true,
    role: { fr: "Projet UX / IA", en: "UX / AI project" },
    type: { fr: "Projet en réserve", en: "Project on the bench" },
    description: {
      fr: "Projet AI Learning Coach associé à un travail avec Dassault Systèmes. La présentation complète sera ajoutée lorsque les captures et les éléments de démonstration seront prêts.",
      en: "AI Learning Coach project associated with work involving Dassault Systèmes. The full presentation will be added once the screenshots and demo materials are ready."
    },
    work: {
      fr: ["Présentation détaillée en préparation"],
      en: ["Detailed presentation in preparation"]
    },
    technologies: [],
    note: {
      fr: "Cette fiche sera complétée avec les livrables et la contribution détaillée.",
      en: "This card will be completed with deliverables and a detailed contribution summary."
    },
    link: "",
    screenshots: []
  },
  {
    id: "reserve-future-1",
    number: "13",
    name: { fr: "Projet à venir", en: "Upcoming project" },
    kit: "grey",
    reserve: true,
    role: { fr: "Place réservée", en: "Reserved spot" },
    type: { fr: "Projet en réserve", en: "Project on the bench" },
    description: {
      fr: "Une place est réservée pour un futur projet. Cette fiche pourra être personnalisée lorsque le projet sera choisi.",
      en: "A spot is reserved for a future project. This card can be customized once the project has been selected."
    },
    work: { fr: ["Contenu à définir"], en: ["Content to be defined"] },
    technologies: [],
    note: { fr: "Aucun projet n'est associé à cette place pour le moment.", en: "No project is assigned to this spot yet." },
    link: "",
    screenshots: []
  },
  {
    id: "reserve-future-2",
    number: "15",
    name: { fr: "Projet à venir", en: "Upcoming project" },
    kit: "grey",
    reserve: true,
    role: { fr: "Place réservée", en: "Reserved spot" },
    type: { fr: "Projet en réserve", en: "Project on the bench" },
    description: {
      fr: "Une seconde place est réservée pour un futur projet. Elle restera en attente jusqu'à ce que son contenu soit prêt à être présenté.",
      en: "A second spot is reserved for a future project. It will remain on hold until its content is ready to be presented."
    },
    work: { fr: ["Contenu à définir"], en: ["Content to be defined"] },
    technologies: [],
    note: { fr: "Aucun projet n'est associé à cette place pour le moment.", en: "No project is assigned to this spot yet." },
    link: "",
    screenshots: []
  }
];
