# Faizan FC — Portfolio Data & IA (V6)

Portfolio en HTML / CSS / SVG / JavaScript, sans dépendance ni outil de build. Il fonctionne en local.

## Ouvrir le site

Double-cliquer sur `index.html` (Chrome, Edge, Firefox ou Safari récents). Aucun serveur n'est nécessaire.

## Ce qui est à remplacer

| Élément | Où | Comment |
| --- | --- | --- |
| CV PDF | `js/projects.js` → `siteConfig.cv` | Déposer le PDF dans `assets/` puis renseigner `"assets/cv-faizan.pdf"`. Tant que la valeur est vide, le bouton est grisé et affiche un message : aucun téléchargement n'est simulé. |
| Photo du coach | `js/projects.js` → `siteConfig.coachPhoto` | Déposer l'image dans `assets/` puis renseigner son chemin. Elle remplace le placeholder dans la carte du terrain et dans le panneau. |
| Formulaire de contact | `js/projects.js` → `siteConfig.formspreeId` | Voir ci-dessous. |
| Projets | `js/projects.js` → `projects` | Titre, texte FR/EN, technologies, `link` (dépôt GitHub) et `screenshots` (liste de chemins d'images). |
| Skills, Palmarès, Projets à venir | `js/projects.js` → `skills`, `honours`, `reserve` | Contenu des trois groupes de sièges du banc. |
| Maillots | `js/projects.js` → `projects`, `upcoming` | Numéro, poste (`role`) et position (`pos` pour ordinateur, `posV` pour mobile) de chaque maillot. |
| Textes de l'interface | `js/i18n.js` | Un bloc `fr` et un bloc `en`. |

Les liens de dépôt et les captures sont volontairement vides : rien n'est inventé. Dès que `link` est renseigné, le bouton « Voir le dépôt GitHub » apparaît. Dès que `screenshots` contient des images, la galerie les affiche.

## Configurer le formulaire de contact (Formspree)

1. Créer un compte sur formspree.io et un nouveau formulaire.
2. Confirmer l'adresse e-mail de réception demandée par Formspree.
3. Copier l'identifiant du formulaire (la fin de l'URL `https://formspree.io/f/xxxxxxxx`).
4. Le coller dans `siteConfig.formspreeId` dans `js/projects.js`.
5. Envoyer un message de test depuis le site et vérifier sa réception.

Tant que l'identifiant est vide, le site affiche que le service n'est pas configuré et n'annonce jamais « message envoyé ». Le message de confirmation n'apparaît que si Formspree répond avec succès. Formspree peut refuser les envois depuis un fichier ouvert en `file://` ; en cas d'échec en local, tester via un petit serveur (`python3 -m http.server`) ou après hébergement.

## Structure

- `index.html` : structure, modales (projet, coach, banc, contact).
- `css/base.css` : variables, en-tête, boutons, fond des modales.
- `css/pitch.css` : banc, terrain, maillots, ballon, carte du coach.
- `css/panels.css` : fiche projet et galerie.
- `css/cards.css` : panneau Liquid Glass du coach, panneaux crème (banc, contact).
- `css/responsive.css` : adaptation tablette et mobile (terrain vertical sous 900 px).
- `fonts/` : Oswald et Inter, embarquées (aucune connexion nécessaire).
- `js/projects.js` : configuration et données éditables.
- `js/i18n.js` : textes FR / EN.
- `js/drawings.js` : dessin SVG du terrain, des maillots et des sièges.
- `js/main.js` : interactions, passe du ballon, modales, formulaire, langue.

## Notes de conception

- Le terrain est un SVG aux dimensions réelles (105 × 68 m) : surfaces, arc de surface centré sur le point de penalty et placé hors du rectangle, cercle central, arcs de corner, buts avec filets alignés sur les lignes de but, drapeaux sur les quatre intersections.
- Sur mobile, le même terrain est dessiné à la verticale et les maillots utilisent les coordonnées `posV`.
- L'animation de passe (`runPass`) et l'animation d'ouverture de la fiche projet (`panel-enter`) sont reprises à l'identique de la V4. Seul le point de départ du ballon change : il part maintenant de la carte du coach.

Le site n'est ni publié ni versionné sur GitHub.
