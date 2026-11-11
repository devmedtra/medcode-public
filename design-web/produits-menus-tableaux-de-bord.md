# Pages produits, menus mobiles, tableaux de bord

Recherche du 11 novembre 2026. Mesures faites sur 8 pages produits publiques, à 390 et 1440 px, plus lecture de sources.

## Page produit, sur téléphone (390 px), de haut en bas

1. Bannière d'une ligne (seuil de livraison ou retours).
2. En-tête collant : menu à gauche, logo, recherche et panier à droite.
3. Fil d'Ariane d'une ligne, facultatif.
4. Galerie pleine largeur en 4:5, avec compteur ou vignettes, et zoom.
5. Titre et ce que c'est, visibles au pli.
6. Avis résumés (s'ils sont réels) et prix.
7. Variantes en boutons, guide des tailles à côté.
8. Bouton « Ajouter au panier » plein, 48 px de haut.
9. Paiement express, en secondaire.
10. Date de livraison et retours, en une à trois lignes près du bouton.
11. Accordéons : description, caractéristiques, entretien, livraison.
12. Produits complémentaires, avis détaillés, FAQ, alternatives, pied de page.

Une barre d'achat fixe apparaît en bas quand le bouton sort de l'écran. Aucune fenêtre surgissante plein écran à l'arrivée.

Sur ordinateur : deux colonnes. Galerie à gauche (55 à 60 %), infos et bouton dans une colonne droite collante de 400 à 480 px.

Sources : [Baymard Institute](https://baymard.com/), recherches sur les pages produits ; [Google, intrusive interstitials](https://developers.google.com/search/docs/appearance/avoid-intrusive-interstitials).

## Menu mobile (burger)

- **Ordinateur : jamais de burger.** NN/g a mesuré, sur 179 participants, des tâches 39 % plus lentes sur ordinateur avec la navigation cachée ([2016](https://www.nngroup.com/articles/hamburger-menus/)).
- **Téléphone : 4 destinations ou moins, montre-les.** Au-delà, burger plus liens visibles vers l'essentiel.
- **À gauche, icône et mot « Menu »** quand la place le permet. Tests de praticiens (CXL, goodui.org) positifs, mais en clics, pas en ventes, et un compte rendu dit que l'effet ne tenait pas.
- **Fermeture au même endroit**, plus Échap, plus toucher du fond. Animation de 200 à 300 ms, coupée sous `prefers-reduced-motion`. La page ne défile pas derrière.
- **Cibles de 44 x 44 px** pour le bouton, 48 px de haut pour les liens.
- **Accessibilité** : un vrai `<button>` avec `aria-expanded` et `aria-controls`. Pas de `role="menu"` pour une navigation de site ([W3C APG, Disclosure Navigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) ; [Adrian Roselli](https://adrianroselli.com/2017/10/dont-use-aria-menu-roles-for-site-nav.html)). Sans JavaScript, la navigation reste visible.
- **Ordre** : recherche, 4 à 7 pages principales, compte, aide et téléphone, langue.
- **L'action principale reste dans l'en-tête**, jamais seulement dans le menu.
- **Sous-menus** : panneau suivant avec « Retour », ou accordéon. Deux niveaux au maximum.

## Tableau de bord d'un espace client

- **Disposition** : barre latérale à gauche sur ordinateur (5 à 9 entrées), barre d'onglets en bas sur téléphone (3 à 5). Sources : [NN/g, vertical nav](https://www.nngroup.com/articles/vertical-nav/), [Apple, Sidebars](https://developer.apple.com/design/human-interface-guidelines/sidebars).
- **Hiérarchie** : en haut, ce qui attend une action (facture, rendez-vous à confirmer). Puis 3 ou 4 chiffres clés. Puis le détail, au clic. Sources : Stephen Few, [Dashboard Confusion](https://www.perceptualedge.com/articles/ie/dashboard_confusion.pdf) ; [NN/g, dashboards](https://www.nngroup.com/articles/dashboards-preattentive/). Le seuil de « 5 secondes » et le nombre de chiffres : non vérifiés.
- **Cartes** : une carte, un sujet, une action au plus. Pas de carte dans une carte.
- **État vide** : il remplace la zone, pas la page. Une phrase, un bouton, au même endroit que quand la zone est pleine.
- **Chargement** : peindre tout de suite ce qui est connu. Rien de « chargement » sous 1 s. Un squelette de la vraie structure entre 1 et 10 s. Une barre de progression au-delà. Jamais de roue plein écran ([NN/g, Skeleton Screens](https://www.nngroup.com/articles/skeleton-screens/)).
- **Densité moyenne** pour un client qui vient une fois par semaine : lignes de 48 px, texte de 14 à 16 px. Une seule densité par page.
- **Mode sombre** : suivre `prefers-color-scheme` avec un choix manuel. Surface d'environ #121212, jamais #000. Contraste vérifié dans les deux modes.
