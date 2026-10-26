# Faizan FC — Portfolio Data & IA

## Direction artistique
- Palette : vert stade `#163D2B`, blanc cassé `#F0EBDD`, or `#D7A84A`.
- Interface hybride : terrain immersif + fiches de projets soignées inspirées des cartes de joueur de football.
- Le terrain présente uniquement les projets ; les expériences et la formation ne constituent pas des lignes de joueurs.
- Le gardien représente Faizan et initie la passe vers le projet sélectionné.

## Parcours principal
1. L'utilisateur choisit un maillot.
2. Un ballon de football dessiné en SVG part des pieds du gardien et rejoint le joueur sélectionné.
3. Une fiche grand format s'ouvre avec description, compétences, zone de captures et lien vers le projet lorsque le lien est confirmé.
4. L'utilisateur ferme la fiche pour retrouver le terrain.

## Navigation secondaire
- Bouton « Ma fiche joueur (CV) » : ouvre une carte de profil. Le PDF du CV sera relié quand sa version définitive sera choisie.
- Bouton Contact : ouvre le LinkedIn du portfolio.
- Bouton FR/EN : change la langue de l'interface. Les descriptions de projets disposent de versions françaises et anglaises provisoires.

## Projets actuellement affichés
- Liv’In Paris — projet académique en groupe.
- Pictionary Game — projet réalisé à Dublin.
- Jeu du 21 — projet réalisé à Dublin.
- Stock Trade Market — projet réalisé à Dublin.

Les descriptions, technologies, numéros de maillot, captures et liens sont provisoires tant que les fichiers des projets n'ont pas été revus. Ne pas inventer de détails et distinguer le travail personnel du travail de groupe.

## Structure des fichiers
- `index.html` : structure de la page et modales.
- `css/base.css` : styles globaux et navigation.
- `css/pitch.css` : terrain, maillots, gardien et animation du ballon.
- `css/panels.css` : fiche projet et fiche profil.
- `css/responsive.css` : adaptation mobile/tablette.
- `js/projects.js` : contenu éditable des projets.
- `js/main.js` : interactions, animation, fiches et traduction FR/EN.

## Prochaines étapes
1. Tester les interactions et la mise en page sur ordinateur et mobile.
2. Remplacer les placeholders par des captures authentiques.
3. Vérifier les descriptions, technologies et contributions individuelles.
4. Ajouter le vrai PDF de CV et les liens de projets validés.
5. Créer le dépôt GitHub uniquement après validation locale.
