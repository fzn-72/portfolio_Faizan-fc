const siteConfig = {
  linkedin: "https://www.linkedin.com/in/faizannorat/",
  cv: {
    fr: "assets/Faizan_s_Resume FR.pdf",
    en: "assets/Faizan_s_Resume EN.pdf"
  },
  coachPhoto: "assets/Avatar_Faizan.png",
  formspreeId: "xjyyybew"
};

const projects = [
  {
    id: "jeu21",
    number: "01",
    name: { fr: "Jeu du 21", en: "Game of 21" },
    kit: "green",
    role: { fr: "Gardien", en: "Goalkeeper" },
    type: { fr: "Jeu de cartes · projet en binôme", en: "Card game · pair project" },
    pos: { x: 8, y: 50 },
    posV: { x: 50, y: 8 },
    description: {
      fr: "Un jeu de cartes inspiré du blackjack, où le joueur doit se rapprocher du nombre 21 sans le dépasser.",
      en: "A blackjack-inspired card game where the player aims to get as close to the number 21 as possible without going over."
    },
    work: {
      fr: ["Gestion des manches et des scores du joueur et du donneur", "Actions Hit / Stand et conseil stratégique ponctuel", "Affichage des règles, statistiques et changement de thème"],
      en: ["Round management and player/dealer scoring", "Hit / Stand actions and a one-use strategy hint", "Rules, statistics and theme switching"]
    },
    technologies: ["Python 3", "PyQt6", "UX thinking", { fr: "Conception d’interface", en: "Interface design" }, { fr: "Logique de jeu", en: "Game logic" }],
    note: {
      fr: "Application desktop développée en binôme dans le cadre d’un projet HCI & GUI.",
      en: "Desktop application developed as a pair project as part of an HCI & GUI course."
    },
    link: "",
    screenshots: ["assets/screenshots/jeu21-main.jpg", "assets/screenshots/jeu21-hint.jpg", "assets/screenshots/jeu21-rules.jpg", "assets/screenshots/jeu21-about.jpg"]
  },
  {
    id: "stock",
    number: "04",
    name: "Stock Trade Market",
    individual: true,
    kit: "green",
    role: { fr: "Défenseur central", en: "Center back" },
    type: { fr: "Application desktop · analyse boursière", en: "Desktop application · stock analysis" },
    pos: { x: 22, y: 34 },
    posV: { x: 28, y: 20 },
    description: {
      fr: "Application desktop développée avec PyQt6 pour estimer le profit ou la perte d’une transaction à partir du cours d’achat et du cours de vente d’une action, des dates choisies et de la quantité. Une seconde vue permet de comparer plusieurs actifs.",
      en: "A desktop application developed with PyQt6 to estimate a trade’s profit or loss from a stock’s purchase and selling prices, selected dates and quantity. A second view allows users to compare multiple assets."
    },
    work: {
      fr: ["Calcul du total d’achat, du total de vente et du profit/perte selon les dates sélectionnées", "Comparaison de plusieurs actions dans un tableau, avec valeurs positives en vert et négatives en rouge", "Chargement et traitement des cours depuis un fichier CSV"],
      en: ["Calculate purchase total, selling total and profit/loss based on the selected dates", "Compare multiple stocks in a table, with positive values in green and negative values in red", "Load and process stock prices from a CSV file"]
    },
    technologies: ["Python", "PyQt6", "CSV", { fr: "Interface graphique", en: "Graphical user interface" }],
    note: {
      fr: "Projet individuel réalisé dans le cadre du cours HCI & GUI Programming.",
      en: "Individual project developed as part of the HCI & GUI Programming course."
    },
    link: "",
    screenshots: ["assets/screenshots/stock-calculator-main.jpg", "assets/screenshots/stock-calculator-comparison.jpg"]
  },
  {
    id: "pictionary",
    number: "05",
    name: "Pictionary Game",
    individual: true,
    kit: "green",
    role: { fr: "Défenseur central", en: "Center back" },
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
    technologies: ["Python", "PyQt6", "QPainter", { fr: "Interface graphique", en: "Graphical user interface" }],
    note: {
      fr: "Projet individuel réalisé dans le cadre d’un cours d’interface graphique.",
      en: "Individual project developed as part of a graphical user interface course."
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
    type: { fr: "Projet académique · en trinôme", en: "Academic project · three-person team" },
    pos: { x: 38, y: 50 },
    posV: { x: 50, y: 34 },
    description: {
      fr: "Application console réalisée en trinôme à l’ESILV pour gérer une plateforme de partage de repas entre voisins. Les clients peuvent consulter des plats et passer commande, tandis que les cuisiniers gèrent leurs offres. Le projet combine base de données relationnelle et algorithmes de graphes, notamment pour explorer les trajets dans le métro parisien.",
      en: "A three-person team console application developed at ESILV for a neighbourhood meal-sharing platform. Customers can browse dishes and place orders, while cooks manage their offers. The project combines a relational database with graph algorithms, including experiments with route planning on the Paris Metro network."
    },
    work: {
      fr: ["Gestion des profils et des rôles client, cuisinier et administrateur", "Consultation des plats, création et suivi des commandes", "Connexion à MySQL et export de données en JSON/XML", "Modélisation de graphes et calcul de plus courts chemins dans le réseau du métro parisien", "Visualisation et analyse des relations entre clients et cuisiniers"],
      en: ["Manage customer, cook and administrator profiles and workflows", "Browse dishes and create and track orders", "Connect to MySQL and export data to JSON/XML", "Model graphs and calculate shortest paths across the Paris Metro network", "Visualise and analyse customer–cook relationships"]
    },
    technologies: ["C#", "MySQL", "JSON / XML", { fr: "Algorithmes de graphes", en: "Graph algorithms" }, { fr: "Plus courts chemins", en: "Shortest-path algorithms" }],
    note: {
      fr: "Projet académique réalisé en trinôme. La fiche présente les fonctionnalités du projet collectif ; elle ne prétend pas attribuer chaque module à une contribution individuelle.",
      en: "Academic project completed in a three-person team. This card describes the group project’s features and does not claim that every module was an individual contribution."
    },
    link: "https://github.com/fzn-72/Livin-paris",
    screenshots: ["assets/screenshots/livin-main-menu.jpg", "assets/screenshots/livin-dishes.jpg", "assets/screenshots/livin-statistics.jpg", "assets/screenshots/livin-feedback.jpg", "assets/screenshots/livin-customer-cook-graph.jpg", "assets/screenshots/livin-metro-route.jpg"]
  }
  ,{
    id: "airbnb",
    number: "02",
    name: "Airbnb Price Prediction",
    kit: "cream",
    role: { fr: "Défenseur droit", en: "Right back" },
    type: { fr: "Machine learning · projet en binôme", en: "Machine learning · pair project" },
    pos: { x: 17, y: 90 }, posV: { x: 84, y: 20 },
    description: {
      fr: "Projet de machine learning réalisé en binôme pour prédire le prix de logements Airbnb à partir de caractéristiques des annonces. Le travail comprend une exploration des données, leur préparation et la comparaison de modèles de régression.",
      en: "Pair project using machine learning to predict Airbnb listing prices from listing features. The work includes exploratory data analysis, preprocessing and a comparison of regression models."
    },
    work: {
      fr: ["Exploration des distributions, corrélations et différences entre types de logements et villes", "Préparation des variables et encodage des catégories", "Comparaison de la régression linéaire et de Random Forest", "Génération des prédictions finales"],
      en: ["Explore distributions, correlations, room types and city-level differences", "Prepare features and encode categorical variables", "Compare linear regression with Random Forest", "Generate final predictions"]
    },
    technologies: ["Python", "pandas", "scikit-learn", "Matplotlib"],
    note: { fr: "Projet académique réalisé en binôme.", en: "Academic pair project." },
    link: "https://github.com/fzn-72/Project_AIRBNB_price_prediction",
    screenshots: ["assets/screenshots/log-price-distribution.png", "assets/screenshots/correlation-heatmap.png", "assets/screenshots/impact-roomType.png", "assets/screenshots/price_distribution_city.png"]
  },
  {
    id: "alterdune",
    number: "03",
    name: "Alterdune",
    kit: "cream",
    role: { fr: "Défenseur gauche", en: "Left back" },
    type: { fr: "Jeu vidéo C++ · projet en binôme", en: "C++ video game · pair project" },
    pos: { x: 17, y: 10 }, posV: { x: 16, y: 20 },
    description: {
      fr: "Jeu de rôle en console inspiré de la mythologie grecque, développé en binôme en C++. Le joueur progresse dans des combats au tour par tour, gère son inventaire et affronte différents ennemis, jusqu’aux mini-boss et boss.",
      en: "Greek mythology-inspired console RPG developed in a pair using C++. Players progress through turn-based combat, manage an inventory and face different enemies, including mini-bosses and bosses."
    },
    work: {
      fr: ["Conception orientée objet avec classes, héritage et polymorphisme", "Combats au tour par tour, objets et consommables", "Gestion des ennemis et des statistiques de partie"],
      en: ["Object-oriented design using classes, inheritance and polymorphism", "Turn-based combat, items and consumables", "Enemy management and game statistics"]
    },
    technologies: ["C++", { fr: "POO", en: "OOP" }, "CSV"],
    note: { fr: "Projet académique réalisé en binôme.", en: "Academic pair project." },
    link: "https://github.com/fzn-72/POO_2026_FaizBapt",
    screenshots: ["assets/screenshots/alterdune-menu.png", "assets/screenshots/alterdune-nymphe.png", "assets/screenshots/alterdune-inventory.png", "assets/screenshots/alterdune-minotaur.png", "assets/screenshots/alterdune-stats.png"]
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
    items: ["Power BI", "DAX", "KPI", "Power Automate", "SharePoint", { fr: "Analyse & visualisation de données", en: "Data analysis & visualisation" }]
  },
  {
    title: { fr: "Programmation & données", en: "Programming & data" },
    items: ["Python", "C#", "C++ (notions)", "MySQL", "Power Apps", "UML", "Git / GitHub"]
  },
  {
    title: { fr: "Conception & créativité", en: "Design & creativity" },
    items: ["UX / UI", "Canva", { fr: "Figma (notions)", en: "Figma (basic knowledge)" }]
  },
  {
    title: { fr: "3D", en: "3D" },
    items: ["SolidWorks", { fr: "Blender (notions)", en: "Blender (basic knowledge)" }]
  }
];

const honours = [
  {
    name: "IBM — AI Fundamentals",
    date: { fr: "Octobre 2026", en: "October 2026" },
    detail: { fr: "AI Fundamentals", en: "AI Fundamentals" }
  },
  {
    name: "IBM — Data Fundamentals",
    date: { fr: "Octobre 2026", en: "October 2026" },
    detail: { fr: "Data Fundamentals", en: "Data Fundamentals" }
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
    number: "10",
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
    id: "reserve-unity-game",
    number: "08",
    name: { fr: "Jeu Unity", en: "Unity game" },
    kit: "cream",
    reserve: true,
    role: { fr: "Place réservée", en: "Reserved spot" },
    type: { fr: "Projet en réserve", en: "Project on the bench" },
    description: {
      fr: "Projet de jeu vidéo réalisé avec Unity. La fiche sera détaillée lorsque les éléments de gameplay et les captures seront prêts.",
      en: "A video game project made with Unity. The card will be expanded when gameplay details and screenshots are ready."
    },
    work: { fr: ["Contenu à définir"], en: ["Content to be defined"] },
    technologies: [],
    note: { fr: "Projet en cours de préparation.", en: "Project in preparation." },
    link: "",
    screenshots: []
  },
  {
    id: "reserve-future-2",
    number: "12",
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
