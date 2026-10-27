const siteConfig = {
  linkedin: "https://www.linkedin.com/in/faizannorat/",
  cv: "",
  coachPhoto: "",
  formspreeId: "xjyyybew"
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
  { id: "upcoming-9", number: "09", role: { fr: "Avant-centre", en: "Striker" }, pos: { x: 71, y: 30 }, posV: { x: 50, y: 62 } }
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
    name: "AI Learning Coach",
    status: { fr: "En préparation", en: "In preparation" },
    context: {
      fr: "Projet UX / IA lié à un travail pour Dassault Systèmes, à intégrer lorsque les captures et la présentation seront prêtes.",
      en: "A UX / AI project connected with work for Dassault Systèmes, to be added once screenshots and presentation are ready."
    }
  }
];
