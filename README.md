# Faizan FC — Portfolio Data & IA

**Un portfolio interactif à l'univers footballistique, conçu pour présenter mon parcours, mes compétences et mes projets en Data & Intelligence Artificielle.**

[![Portfolio](https://img.shields.io/badge/Portfolio-En%20ligne-2ea44f)](https://fzn-72.github.io/portfolio_Faizan-fc/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)

🔗 **Accéder au portfolio :** https://fzn-72.github.io/portfolio_Faizan-fc/

---

## 🇫🇷 Présentation

Faizan FC est un portfolio personnel qui reprend les codes visuels et les mécaniques d'un univers footballistique pour proposer une autre manière de découvrir un profil.

Plutôt qu'une présentation classique, le visiteur explore un stade interactif : terrain, maillots, banc de touche, fiches de projets et espace de présentation des compétences. Chaque élément constitue un point d'entrée vers une partie de mon parcours.

Le projet est développé en **HTML, CSS et JavaScript natif**, sans framework ni outil de build. Il est pensé pour être accessible directement depuis un navigateur et continue d'évoluer au fil de mes expériences et de mes projets.

## ✨ Fonctionnalités

- **Navigation interactive :** un stade de football sert d'interface principale pour explorer les différentes sections.
- **Présentation des projets :** des maillots numérotés (selon les vrais postes de footballeurs) ouvrent des fiches détaillées avec descriptions, rôles, technologies et illustrations.
- **Terrain tactique :** une interface interactive permet de découvrir les compétences associées à différents postes.
- **Profil et expériences :** un espace dédié à la présentation de mon parcours et de mes expériences.
- **Certifications :** une armoire à trophées animée met en valeur les principales certifications obtenues.
- **Galerie interactive :** consultation et agrandissement des captures des projets.
- **Bilingue :** interface disponible en français et en anglais.
- **Formulaire de contact :** formulaire intégré avec Formspree.
- **Interface responsive :** feuilles de style dédiées à l'adaptation sur ordinateur, tablette et mobile.

## 🛠️ Technologies utilisées

| Technologie | Utilisation |
|---|---|
| HTML5 | Structure des pages et des composants |
| CSS3 | Mise en page, animations et responsive design |
| JavaScript | Interactions, navigation et contenu dynamique |
| SVG | Illustrations et éléments graphiques du stade |
| Formspree | Gestion du formulaire de contact |
| Git & GitHub | Versionnement et hébergement du projet |

Aucun framework JavaScript, aucune dépendance externe de build et aucun processus de compilation ne sont nécessaires.

## 🚀 Installation et lancement en local

Le projet peut être exécuté directement dans un navigateur ou depuis un serveur local.

### 1. Récupérer le projet

```bash
git clone https://github.com/fzn-72/portfolio_Faizan-fc.git
```

### 2. Accéder au dossier

```bash
cd portfolio_Faizan-fc
```

### 3. Lancer le portfolio

**Méthode simple :** ouvrir le fichier `index.html` dans un navigateur récent.

**Méthode recommandée :** lancer un serveur local depuis la racine du projet :

```bash
python -m http.server 8000
```

Puis ouvrir l'adresse suivante dans le navigateur :

```text
http://localhost:8000
```

Cette seconde méthode est notamment utile pour tester le formulaire de contact et vérifier le comportement du site dans un environnement proche de celui de l'hébergement.

## 📁 Structure du projet

```text
portfolio_Faizan-fc/
│
├── index.html
│
├── assets/
│   ├── images et illustrations
│   ├── captures des projets
│   └── ressources graphiques
│
├── css/
│   ├── base.css
│   ├── pitch.css
│   ├── panels.css
│   ├── cards.css
│   └── responsive.css
│
├── js/
│   ├── projects.js
│   ├── i18n.js
│   ├── drawings.js
│   └── main.js
│
└── README.md
```

### Rôle des principaux fichiers

- `index.html` : structure générale de l'interface et des fenêtres modales.
- `css/base.css` : styles généraux et éléments communs.
- `css/pitch.css` : terrain, maillots, coach, tableau latéral et banc.
- `css/panels.css` : fiches de projets et galerie.
- `css/cards.css` : panneaux de présentation, tableau tactique, trophées et formulaire.
- `css/responsive.css` : adaptations pour les différentes tailles d'écran.
- `js/projects.js` : configuration et données des projets.
- `js/i18n.js` : textes et traductions françaises et anglaises.
- `js/drawings.js` : illustrations SVG du terrain, des maillots et des sièges.
- `js/main.js` : interactions, navigation, animations et gestion des fonctionnalités.

## 📝 Personnalisation et évolutions

Le portfolio est conçu pour pouvoir être enrichi sans devoir reconstruire toute l'interface.

Les principales données de présentation sont centralisées dans `js/projects.js`. On peut notamment y modifier :

- Les noms et numéros des projets.
- Les descriptions en français et en anglais.
- Les rôles et les technologies utilisées.
- Les liens vers les dépôts GitHub.
- Les captures et illustrations associées.
- Les positions des projets sur le terrain.

Les textes généraux et les traductions sont regroupés dans `js/i18n.js`.

Les styles sont répartis dans plusieurs fichiers CSS afin de faciliter les modifications visuelles et les ajustements responsives.

**Le projet reste évolutif :** de nouveaux projets, expériences, illustrations et fonctionnalités pourront être ajoutés au fur et à mesure de mon parcours. Les prochaines améliorations pourront notamment porter sur l'enrichissement des études de cas, l'accessibilité et l'expérience mobile.

## 📚 Historique des versions

Le portfolio a été développé progressivement, à travers plusieurs versions successives. Par souci de concision et de clarté, toutes les versions ne font pas l'objet d'un commit distinct dans l'historique GitHub. Il est néanmoins possible d'en retrouver une partie à travers les commits disponibles.

Pour associer un commit à l'une des versions présentées ci-dessous, il suffit de consulter le numéro de version indiqué dans le README correspondant à ce commit.

Voici les principales étapes de l'évolution du projet :

| Version | Évolutions principales |
|---|---|
| **V1** | Création du premier prototype du portfolio et mise en place du concept d'une présentation personnelle inspirée du football. |
| **V5** | Refonte de plusieurs éléments visuels : pelouse, bandes, lignes, maillots et banc. Amélioration du widget coach avec un effet Liquid Glass et réduction des textes répétitifs, tout en conservant les animations existantes. |
| **V7** | Intégration du CV français, de la photo du coach et réorganisation du banc de touche sous le terrain. |
| **V8 bis** | Corrections graphiques de l'armoire à trophées, repositionnement des joueurs et mise à jour de leurs numéros. |
| **V9** | Introduction du tableau tactique interactif pour explorer les compétences par poste et animation de l'armoire à certifications IBM. |
| **V10** | Enrichissement de l'espace certifications avec quatre certifications et amélioration du tableau tactique. |
| **V10 bis** | Amélioration de l'ouverture de la vitrine, ajustements du tableau tactique et ajout du lien GitHub au projet Liv'In Paris. |
| **V12** | Enrichissement des fiches projets, notamment avec Alterdune et Airbnb, et mise à jour des compétences présentées. |
| **V12 bis** | Ajout de captures réelles pour le Jeu du 21 et Pictionary Game, actualisation des technologies et descriptions, et ajustements de l'animation de la vitrine. |
| **V13** | Ajout d'une légende, amélioration du zoom de la galerie et intégration de magnets interactifs. |
| **V13 bis** | Ajustements des positions des joueurs et des remplaçants, harmonisation des illustrations SVG et amélioration de certains éléments graphiques. |
| **V14** | Nouvelle identité visuelle pour Unity, harmonisation des couleurs et mise à jour de la numérotation des remplaçants. |

*Cet historique présente les principales versions et étapes de développement, et non chaque correction intermédiaire.*

## 🌐 Hébergement

Le portfolio est hébergé avec **GitHub Pages** et accessible publiquement à l'adresse :

https://fzn-72.github.io/portfolio_Faizan-fc/

Le déploiement est réalisé depuis la branche `main`, à la racine du dépôt.

---

## 🇬🇧 English version

# Faizan FC — Data & AI Portfolio

**An interactive portfolio inspired by football, designed to showcase my background, skills and projects in Data Science and Artificial Intelligence.**

## Overview

Faizan FC is a personal portfolio that uses football-inspired visuals and interactions to offer an alternative way to explore a professional profile.

Instead of a traditional portfolio layout, visitors navigate through an interactive stadium featuring a football pitch, numbered jerseys, a substitutes' bench, project details and a dedicated skills section.

The project is built with **vanilla HTML, CSS and JavaScript**, without any framework or build tools. It is accessible through a web browser and continues to evolve alongside my academic and professional journey.

## ✨ Features

- **Interactive navigation:** a football stadium serves as the main interface.
- **Project showcase:** numbered jerseys open detailed project descriptions, including roles, technologies and visuals.
- **Tactical board:** an interactive football formation reveals the skills associated with different positions.
- **Profile and experience:** dedicated sections to explore my background and professional experience.
- **Certifications:** an animated trophy cabinet showcases my certifications.
- **Interactive gallery:** project screenshots can be viewed and enlarged.
- **Bilingual interface:** available in French and English.
- **Contact form:** integrated contact form powered by Formspree.
- **Responsive interface:** dedicated stylesheets for desktop, tablet and mobile devices.

## 🛠️ Technologies

- **HTML5:** page structure and interface components.
- **CSS3:** layouts, animations and responsive design.
- **JavaScript:** interactions, navigation and dynamic content.
- **SVG:** stadium illustrations and graphical elements.
- **Formspree:** contact form management.
- **Git & GitHub:** version control and project hosting.

No JavaScript framework, build dependencies or compilation process are required.

## 🚀 Installation and local setup

### 1. Clone the repository

```bash
git clone https://github.com/fzn-72/portfolio_Faizan-fc.git
```

### 2. Navigate to the project folder

```bash
cd portfolio_Faizan-fc
```

### 3. Run the portfolio

**Quick method:** open `index.html` directly in a modern web browser.

**Recommended method:** start a local server from the project root:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

Running a local server is particularly useful for testing the contact form and checking the website in an environment closer to its hosted version.

## 📁 Project structure

```text
portfolio_Faizan-fc/
│
├── index.html
├── assets/
├── css/
│   ├── base.css
│   ├── pitch.css
│   ├── panels.css
│   ├── cards.css
│   └── responsive.css
├── js/
│   ├── projects.js
│   ├── i18n.js
│   ├── drawings.js
│   └── main.js
└── README.md
```

### Main files

- `index.html`: main interface structure and modal windows.
- `css/`: stylesheets for the interface, stadium, panels, cards and responsive layouts.
- `js/projects.js`: project data and configuration.
- `js/i18n.js`: French and English translations.
- `js/drawings.js`: SVG illustrations.
- `js/main.js`: interactions, navigation, animations and core functionality.

## 📝 Customization and future development

The portfolio is designed to be easily extended.

Project information is mainly managed in `js/projects.js`, including names, numbers, descriptions, roles, technologies, GitHub links, screenshots and pitch positions.

General interface text and translations are centralized in `js/i18n.js`.

The project is still evolving. New projects, experiences, visuals and features can be added as my academic and professional journey progresses. Potential future improvements include more detailed project case studies, accessibility enhancements and further mobile experience refinements.

## 📚 Version history

The portfolio has been developed through several iterations. The following milestones highlight its main stages of evolution.

| Version | Main updates |
|---|---|
| **V1** | Initial portfolio prototype and introduction of the football-inspired concept. |
| **V7** | Integration of the French CV, coach photo and rearrangement of the substitutes' bench. |
| **V8 bis** | Trophy cabinet visual corrections, player repositioning and updated jersey numbers. |
| **V9** | Introduction of the interactive tactical board and animated IBM certification cabinet. |
| **V10** | Expansion of the certification section to include four certifications and improvements to the tactical board. |
| **V12** | Enrichment of project details, including Alterdune and Airbnb, and updated skills. |
| **V12 bis** | Real screenshots and updated descriptions for the Game of 21 and Pictionary Game, alongside visual and animation adjustments. |
| **V13** | Addition of a legend, improved gallery zoom and interactive magnets. |
| **V13 bis** | Player and substitutes' positioning adjustments, SVG illustration consistency and visual refinements. |
| **V14** | Updated Unity visual identity, refined color palette and revised substitutes' numbering. |

*This history highlights the main development milestones rather than every intermediate fix.*

## 🌐 Deployment

The portfolio is hosted using **GitHub Pages** and is publicly available at:

https://fzn-72.github.io/portfolio_Faizan-fc/

Deployment is configured from the `main` branch, using the repository root directory.

---

**Developed by Faizan Norat.**
