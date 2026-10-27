# Faizan FC — Portfolio Data & IA (V8)

Portfolio en HTML / CSS / SVG / JavaScript, sans framework ni outil de build. Il fonctionne en local.

## Ouvrir le site

1. Décompresser l'archive.
2. Ouvrir `faizan-fc/index.html` dans un navigateur récent.
3. Pour tester le formulaire localement si nécessaire, exécuter `python -m http.server 8000` dans le dossier `faizan-fc`, puis ouvrir `http://localhost:8000`.

## Nouveautés de la V7

- Le tableau tactique ouvre les compétences (`Skills`).
- L'armoire à trophées ouvre les certifications (`Palmarès`).
- Le banc est déplacé sous le terrain, aligné à droite, avec trois remplaçants : AI Learning Coach et deux places pour de futurs projets.
- Les maillots/projets déjà présents sur le terrain sont conservés pour le moment.
- La vignette du coach est placée dans le coin supérieur droit et utilise un Liquid Glass plus clair.
- Le titre affiche « Bienvenue au stade. Mes projets, mon terrain de jeu. ».
- Le CV français fourni a été intégré dans `assets/CV-Faizan-Norat-FR.pdf`.
- Le bouton de CV choisit le PDF selon la langue. Le CV anglais sera activé dès que son PDF sera ajouté.
- Le formulaire conserve sa logique de validation et d'envoi Formspree.

## CV français et anglais

Le CV français est disponible à `assets/CV-Faizan-Norat-FR.pdf`.

Quand le CV anglais sera fourni, le déposer dans `assets/CV-Faizan-Norat-EN.pdf` et renseigner `cv.en` dans `js/projects.js` :

```js
cv: {
  fr: "assets/CV-Faizan-Norat-FR.pdf",
  en: "assets/CV-Faizan-Norat-EN.pdf"
}
```

Pour le moment, le bouton est désactivé en anglais afin d'éviter un lien cassé.

## Photo du coach

Déposer la photo choisie dans `assets/` puis renseigner `coachPhoto` dans `js/projects.js`, par exemple :

```js
coachPhoto: "assets/faizan-photo.jpg"
```

## Formulaire de contact (Formspree)

Le code utilise `siteConfig.formspreeId` dans `js/projects.js`. **L'archive V6 reçue pour cette modification ne contenait pas l'identifiant Formspree** (la valeur était vide). Pour retrouver le fonctionnement testé dans votre copie locale, recopier ici l'identifiant du formulaire Formspree qui a déjà envoyé le message de test :

```js
formspreeId: "VOTRE_IDENTIFIANT_FORMspree"
```

Ne pas partager l'identifiant publiquement si vous ne souhaitez pas le rendre visible ; notez toutefois qu'un endpoint de formulaire placé dans le JavaScript du navigateur est nécessairement visible aux visiteurs. Après avoir configuré cette valeur, envoyer un nouveau test et confirmer la réception.

## Projets

Les données modifiables sont dans `js/projects.js` : titre, description FR/EN, travail, technologies, position sur le terrain, lien GitHub et captures. Les liens et captures non fournis restent volontairement vides ; aucune URL ou réalisation personnelle n'est inventée.

## Structure

- `index.html` : structure de l'interface et modales.
- `css/base.css` : variables, en-tête et éléments généraux.
- `css/pitch.css` : terrain, maillots, coach, rail latéral et banc des remplaçants.
- `css/panels.css` : fiche projet et galerie.
- `css/cards.css` : panneau Liquid Glass, panneau Skills/Palmarès et formulaire.
- `css/responsive.css` : affichage tablette/mobile.
- `js/projects.js` : configuration et données des projets.
- `js/i18n.js` : textes français/anglais.
- `js/drawings.js` : SVG du terrain, des maillots, sièges, tableau tactique et armoire.
- `js/main.js` : interactions, passe, modales, formulaire et choix de CV.

Le site n'est ni publié ni versionné sur GitHub.

## Notes V8

- Banc des remplaçants : le banc de la V6 est placé à droite du terrain. Chaque siège correspond à une entrée de `reserve` dans `js/projects.js` (numéro, nom, fiche).
- Le ballon part des pieds du gardien (maillot 01) et non plus de la carte du coach.
- La carte du coach est une notification en liquid glass, à cheval sur le bord droit du terrain.
