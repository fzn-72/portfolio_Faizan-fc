# Faizan FC — document de conception

## Vision
Un portfolio personnel Data & IA inspiré du football, original mais compréhensible pour un recruteur.

## Identité visuelle
- Vert stade : `#163D2B`
- Blanc cassé : `#F0EBDD`
- Or : `#D7A84A`
- Direction artistique : hybride, terrain immersif et interface claire.

## Terrain
Le terrain représente uniquement les projets. Chaque maillot affiche le nom court du projet et un numéro lié au projet (à confirmer). La première version contient quatre projets confirmés et deux emplacements « À venir ».

## Projets retenus
1. Liv’In Paris — projet académique en groupe.
2. Pictionary Game — projet réalisé à Dublin.
3. Jeu du 21 — projet réalisé à Dublin.
4. Stock Trade Market — projet réalisé à Dublin.

Les descriptions détaillées restent volontairement provisoires tant que les technologies et contributions exactes ne sont pas vérifiées.

## Interaction
Cliquer sur un maillot ouvre une fiche projet. Une animation de ballon accompagne la sélection. Un bouton permet de revenir au terrain. Les emplacements futurs affichent une fiche « projet en préparation ».

## Architecture technique
- `index.html` : structure de la page.
- `css/base.css` : couleurs, typographie et éléments généraux.
- `css/pitch.css` : terrain et maillots.
- `css/panels.css` : fiches projet.
- `css/responsive.css` : adaptations mobile et réduction des animations.
- `js/projects.js` : données des projets.
- `js/main.js` : génération des maillots et interactions.

## Prochaines étapes
1. Vérifier le rendu localement.
2. Ajuster la composition et les dimensions du terrain.
3. Confirmer les numéros des maillots.
4. Compléter les descriptions et contributions individuelles.
5. Tester clavier et mobile.
6. Publier sur GitHub Pages seulement après validation.
