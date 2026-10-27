const siteConfig = {
  linkedin: "https://www.linkedin.com/in/faizannorat/",
  cv: {
    fr: "assets/CV-Faizan-Norat-FR.pdf",
    en: ""
  },
  coachPhoto: "",
  formspreeId: ""
};

const projects = [
  {
    id: "jeu21",
    number: "01",
    name: "Jeu du 21",
    kit: "green",
    role: { fr: "Gardien", en: "Goalkeeper" },
    type: { fr: "Projet réalisé à Dublin", en: "Project completed in Dublin" },
    pos: { x: 8, y: 50 },
    posV: { x: 50, y: 8 },
    description: {
      fr: "Jeu réalisé à Dublin. Les règles, les fonctionnalités et les choix techniques seront ajoutés après vérification des fichiers du projet.",
      en: "A game completed in Dublin. The rules, features and technical choices will be added once the project files have been checked."
    },
    work: { fr: ["Détails à compléter"], en: ["Details to be completed"] },
    technologies: [],
    note: {
      fr: "À compléter : règles, technologies, captures et contribution personnelle.",
      en: "To complete: rules, technologies, screenshots and individual contribution."
    },
    link: "",
    screenshots: []
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
    type: { fr: "Projet réalisé à Dublin", en: "Project completed in Dublin" },
    pos: { x: 22, y: 66 },
    posV: { x: 72, y: 20 },
    description: {
      fr: "Projet réalisé à Dublin. La description détaillée sera ajoutée après vérification des fichiers du projet.",
      en: "A project completed in Dublin. The detailed description will be added once the project files have been checked."
    },
    work: { fr: ["Détails à compléter"], en: ["Details to be completed"] },
    technologies: [],
    note: {
      fr: "À compléter : technologies, captures et lien du projet.",
      en: "To complete: technologies, screenshots and project link."
    },
    link: "",
    screenshots: []
  },
  {
    id: "livin",
    number: "10",
    name: "Liv’In Paris",
    kit: "cream",
    role: { fr: "Meneur de jeu", en: "Playmaker" },
    type: { fr: "Projet académique · en groupe", en: "Academic project · group work" },
    pos: { x: 57, y: 50 },
    posV: { x: 73, y: 50 },
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
    link: "",
    screenshots: []
  }
];

const upcoming = [
  { id: "upcoming-6", number: "06", role: { fr: "Milieu défensif", en: "Defensive midfielder" }, pos: { x: 38, y: 50 }, posV: { x: 50, y: 33 } },
  { id: "upcoming-8", number: "08", role: { fr: "Milieu relayeur", en: "Box-to-box midfielder" }, pos: { x: 50, y: 24 }, posV: { x: 27, y: 46 } },
  { id: "upcoming-9", number: "09", role: { fr: "Avant-centre", en: "Striker" }, pos: { x: 80, y: 50 }, posV: { x: 50, y: 70 } }
].map(item => ({ ...item, kit: "grey", reserve: true }));

const skills = [
  {
    title: { fr: "Data & visualisation", en: "Data & visualisation" },
    items: ["Power BI", "DAX", "KPI", { fr: "Lisibilité des tableaux de bord", en: "Dashboard readability" }]
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
    detail: { fr: "AI Fundamentals: Foundations for Understanding AI", en: "AI Fundamentals: Foundations for Understanding AI" }
  },
  {
    name: "IBM — Data Fundamentals",
    detail: { fr: "Certification autour des fondamentaux de la donnée", en: "Certification focused on data fundamentals" }
  }
];

const reserve = [
  {
    id: "reserve-ai-learning-coach",
    number: "07",
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
    number: "12",
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
