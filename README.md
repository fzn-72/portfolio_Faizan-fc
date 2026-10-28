# Faizan FC — Portfolio Data & IA (V9)

Portfolio interactif en HTML, CSS, SVG et JavaScript, sans framework ni outil de build. Le projet est conçu pour être lancé en local et n'est pas publié.

## Ouvrir le site

1. Décompresser l'archive.
2. Ouvrir `faizan-fc/index.html` dans un navigateur récent.
3. Si vous souhaitez tester le formulaire depuis un serveur local, ouvrir un terminal dans le dossier `faizan-fc` puis lancer `python -m http.server 8000`, et visiter `http://localhost:8000`.

## Nouveautés de la V9

- Les deux défenseurs centraux retrouvent exactement les positions qu'ils avaient dans la V8.
- Le tableau tactique ouvre un mini-terrain avec trois postes sélectionnables. Chaque poste révèle les compétences associées sous forme de tags, plutôt qu'une liste simple.
- L'armoire à trophées s'ouvre avec une animation et présente les deux certifications IBM sous forme de médailles sur deux étagères.
- Les deux expériences sont compatibles avec les textes français et anglais et restent utilisables au clavier.
- Le reste du site, le formulaire de contact et les animations de projets restent basés sur la V8 bis.

## CV et photo du coach

Le CV français se trouve dans `assets/CV-Faizan-Norat-FR.pdf`. Le bouton de CV utilise le fichier correspondant à la langue sélectionnée ; le bouton reste désactivé en anglais tant que le PDF anglais n'est pas ajouté.

La photo du coach se trouve dans `assets/coach-faizan.png`. Le chemin de la photo et les chemins des CV sont configurés dans `js/projects.js`.

## Formulaire de contact

Le formulaire utilise Formspree. L'identifiant du formulaire se trouve dans `siteConfig.formspreeId`, dans `js/projects.js`. Il est configuré dans cette version. Il reste conseillé d'effectuer un test de réception après toute modification du formulaire ou déploiement.

## Projets et modifications futures

Les données modifiables sont dans `js/projects.js` : nom, numéro, description FR/EN, rôle, position sur le terrain, technologies, lien GitHub et captures. Les URL, contributions et captures qui n'ont pas été fournies restent volontairement vides ; aucune information n'est inventée.

## Structure du projet

- `index.html` : structure de l'interface et modales.
- `css/base.css` : en-tête et éléments généraux.
- `css/pitch.css` : terrain, maillots, coach, tableau latéral et banc.
- `css/panels.css` : fiches projet et galerie.
- `css/cards.css` : panneaux du coach, tableau tactique, armoire à trophées et formulaire.
- `css/responsive.css` : affichage tablette et mobile.
- `js/projects.js` : configuration et données des projets.
- `js/i18n.js` : textes français/anglais.
- `js/drawings.js` : dessins SVG du terrain, des maillots et des sièges.
- `js/main.js` : interactions, passe, modales, formulaire et téléchargement du CV.

## Historique rapide

- **V7 :** intégration du CV français, de la photo du coach et réorganisation du banc sous le terrain.
- **V8 bis :** correction du dessin de l'armoire, repositionnement des attaquants/ailiers et mise à jour des numéros.
- **V9 :** mini-terrain tactique interactif pour les skills et animation d'ouverture de la vitrine à certifications.

Le projet n'est ni publié ni déployé automatiquement depuis ce dossier.
