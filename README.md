# Faizan FC — Portfolio Data & IA

Portfolio personnel inspiré du football. Les projets sont représentés par des maillots sur un terrain ; la sélection d'un joueur déclenche une passe animée et ouvre une fiche projet.

## Lancer le site
1. Télécharger et extraire le dossier.
2. Ouvrir `index.html` dans un navigateur récent.
3. Aucune installation ni dépendance externe n'est requise pour le prototype.

## Modifier les projets
Les données se trouvent dans `js/projects.js`. Les descriptions, technologies, liens et captures doivent être confirmés à partir des projets réels avant publication.

## Structure
- `index.html` — structure et navigation.
- `css/` — styles globaux, terrain, fiches et responsive.
- `js/projects.js` — contenu des projets.
- `js/main.js` — interactions, animation du ballon, cartes et langue.
- `DESIGN.md` — décisions de conception et étapes suivantes.

## État du prototype
Prototype local en cours d'amélioration. Les liens de projets, les captures d'écran et le PDF du CV ne sont pas encore ajoutés. Le site ne doit pas être publié avant validation du contenu.


## V4 — développement local

- Ouvre `index.html` dans Chrome pour tester le portfolio.
- Le banc propose `Skills`, `Palmarès` et `Remplaçants`.
- Les animations de passe et d'ouverture des fiches ont été conservées ; les changements portent surtout sur les éléments visuels et les interactions de navigation.
- Les captures, les URL de dépôts et la photo du coach restent à compléter avec des éléments réels.

### Configuration du formulaire de contact

Le formulaire utilise Formspree pour permettre l'envoi depuis un site statique. Pour l'activer, crée un formulaire dans ton compte Formspree, confirme l'adresse de réception, puis remplace `YOUR_FORM_ID` dans `index.html` par l'identifiant fourni (ex. `https://formspree.io/f/xyzabcde`). Tant que cet identifiant de formulaire n'est pas configuré, le site affiche un message explicite et n'annonce pas que le message a été envoyé. Après configuration, fais un essai réel et vérifie la réception du mail avant de publier le site.

Aucune publication ou création de dépôt GitHub n'est faite automatiquement.

## V5 — notes avant personnalisation finale

- Le CV n'est pas fourni à ce stade : le bouton « Ma fiche d'entraîneur (CV) » est donc désactivé plutôt que de pointer vers un fichier inexistant. Quand le PDF est prêt, le remplacer par un lien `href="assets/cv-faizan-norat.pdf"` avec l'attribut `download`.
- Le formulaire de contact utilise Formspree comme prévu, mais `YOUR_FORM_ID` doit être remplacé par l'identifiant réel du formulaire avant de pouvoir envoyer des messages.
- Le panneau du coach conserve un emplacement réservé à la photo ; aucune photo fictive n'est intégrée.
- Les captures de projets et les URL de dépôts doivent être ajoutées seulement lorsqu'elles sont disponibles et vérifiées.
- Le site reste local : aucune publication ni création de dépôt GitHub n'est effectuée.
