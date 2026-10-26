# Faizan FC — Portfolio Data & IA

**Faizan FC** est un portfolio personnel qui explore une manière plus visuelle de présenter des projets en Data & Intelligence Artificielle : un terrain de football interactif où les maillots représentent les projets.

Cette première version est un **prototype initial**. Elle pose la direction visuelle, le terrain, les quatre fiches projets et deux emplacements pour de futurs projets. Les descriptions détaillées et les technologies seront confirmées au fur et à mesure de l'évolution du portfolio.

## Aperçu du concept

- **Terrain interactif :** les maillots servent de points d'entrée vers les projets.
- **Fiches projet :** une sélection ouvre une fiche descriptive.
- **Animation de passe :** le ballon accompagne la sélection d'un maillot.
- **Identité visuelle :** vert stade, ivoire et or, avec une interface inspirée du football.

## Technologies

- **HTML5** — structure de la page.
- **CSS3** — mise en page, terrain, maillots et animations.
- **JavaScript** — génération des maillots et interactions.
- **SVG / CSS** — éléments graphiques du terrain.

Aucun framework ni outil de compilation n'est nécessaire pour cette version.

## Lancer le prototype en local

1. Téléchargez ou clonez le dépôt.
2. Ouvrez `index.html` dans un navigateur récent.

Si le navigateur bloque certaines ressources en ouverture directe, lancez un serveur local depuis le dossier du projet :

```bash
python -m http.server 8000
```

Puis ouvrez [http://localhost:8000](http://localhost:8000). Pour arrêter le serveur, faites `Ctrl + C` dans le terminal.

## Structure du projet

```text
faizan-fc/
├── index.html
├── css/
│   ├── base.css
│   ├── pitch.css
│   ├── panels.css
│   └── responsive.css
├── js/
│   ├── projects.js
│   └── main.js
├── DESIGN.md
└── README.md
```

- `index.html` : structure de la page.
- `css/` : styles généraux, terrain, fiches et adaptations responsive.
- `js/projects.js` : données descriptives des projets.
- `js/main.js` : génération des maillots et interactions.
- `DESIGN.md` : vision, palette, choix de conception et étapes envisagées.

## Projets présentés dans le prototype initial

1. **Liv'In Paris** — projet académique réalisé en groupe à l'ESILV.
2. **Pictionary Game** — projet réalisé pendant le semestre d'études à Dublin.
3. **Jeu du 21** — projet réalisé pendant le semestre d'études à Dublin.
4. **Stock Trade Market** — projet réalisé pendant le semestre d'études à Dublin.

La première version utilise des descriptions provisoires. Les technologies, contributions personnelles, captures et liens de dépôts seront précisés uniquement après vérification.

## Évolution du portfolio

Le portfolio évoluera par itérations : amélioration du terrain et des maillots, enrichissement des fiches projets, animations, profil, navigation et adaptation mobile. Les étapes importantes seront documentées au fil des commits et, lorsque pertinent, repérées par des tags ou des Releases GitHub.

Les prototypes importés après coup seront présentés comme des versions archivées, sans attribuer artificiellement aux commits des dates historiques qui ne correspondent pas à leur création réelle.

## Langue / English

**Faizan FC** is a personal Data & AI portfolio exploring a football-inspired interface. Project jerseys are used as navigation to open project cards. This first version is an initial prototype featuring an interactive pitch, four provisional projects and two future-project placeholders.

Built with **HTML, CSS and JavaScript**, with no framework or build step. To run it locally, open `index.html` in a recent browser, or run `python -m http.server 8000` and visit `http://localhost:8000`.

Project details, technologies, screenshots and repository links will be added once verified. The repository history will document the portfolio's evolution through commits and version tags.

## Auteur

**Faizan Norat** — étudiant ingénieur en Data & Intelligence Artificielle à l'ESILV.

- [LinkedIn](https://www.linkedin.com/in/faizannorat/)
