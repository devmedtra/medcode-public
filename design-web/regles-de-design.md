# 29 règles de design pour un site de petite entreprise

Recherche du 11 novembre 2026, lecture de sources publiques seulement. Ce document complète [page-accueil.md](page-accueil.md) sur l'en-tête, le pied de page, l'espace, la grille, la typographie, la couleur, les images et le mouvement.

## En-tête

1. **Logo en haut à gauche**, lien vers l'accueil. Convention vérifiée (NN/g).
2. **Navigation visible sur ordinateur.** Le menu caché, seulement sur téléphone. Sur ordinateur, la navigation cachée ralentit les tâches ([NN/g, 2016](https://www.nngroup.com/articles/hamburger-menus/)).
3. **5 à 7 liens au maximum.** Convention.
4. **En-tête collant : petit, opaque, sans animation.** Pas obligatoire.
5. **Téléphone dans l'en-tête, cliquable** (`tel:`). Voir [Brad Frost, A tel-tale sign](https://bradfrost.com/blog/post/a-tel-tale-sign/).

## Pied de page

6. **Le minimum** : nom, adresse, téléphone, courriel, heures, liens légaux.
7. **Deux niveaux au maximum.** Pas de plan complet au-delà d'environ 25 pages.
8. **Témoignages et distinctions dans le pied** : avec mesure.
9. **Numéro de licence visible** quand la loi l'exige (au Québec, la licence RBQ pour les entrepreneurs).

## Haut de page et images

10. **Une image doit informer.** Les images décoratives sont ignorées par les lecteurs (oculométrie NN/g).
11. **Photo générée ou photo de banque : à juger une par une.** Pour un commerce local, la vraie photo du lieu et du travail reste la règle.
12. **Pas de défilement détourné ni de parallaxe.**

## Espace et grille

13. **Une échelle d'espacement fixe**, en multiples de 4 ou 8. Désaccord : gov.uk utilise des multiples de 5.
14. **Proximité** : l'espace dans un groupe est plus petit que l'espace entre groupes. Un titre à égale distance du bloc d'avant et de son texte « flotte ». C'est souvent ce qu'on ressent comme un mauvais découpage des sections.
15. **Espace entre sections** régulier, plus petit sur téléphone.
16. **Largeur maximale** et colonne de lecture d'environ 65 caractères.
17. **Marges latérales** : 16 px sur téléphone, 24 px sur tablette.

## Typographie

18. **Texte de 16 à 18 px, interligne 1,4 à 1,6.**
19. **Titres moins gros qu'on croit.** Échelle de 1,2 à 1,33 entre deux niveaux.
20. **Tailles fluides, jamais en `vw` pur.** Utiliser `clamp()` avec une base en `rem`, sinon le zoom ne marche plus.
21. **Pas de majuscules au-delà d'un mot ou deux.** Tinker (1955) mesurait une lecture plus lente en majuscules. Étude ancienne, nuancée depuis.
22. **Deux polices au maximum**, une de texte, une de titres.

## Couleur

23. **Une couleur d'action, rare.** Elle sert aux boutons et aux points clés.
24. **La règle 60-30-10 n'a aucune base mesurée.** Utile pour démarrer, pas une loi.
25. **Le contraste reste le défaut numéro 1 du web** ([WebAIM Million](https://webaim.org/projects/million/)).

## Images

26. **Ratios et recadrage** : 3:2 ou 4:3 pour les photos, 16:9 en haut de page sur ordinateur, 4:5 ou 1:1 sur téléphone. Convention.

## Mouvement

27. **Durées de 100 à 400 ms** (Material Motion).
28. **Respecter `prefers-reduced-motion`** ([W3C, Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)).
29. **Pas de contenu invisible qui attend le défilement.** Si le script ne tourne pas, le texte doit être là.
