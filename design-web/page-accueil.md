# Anatomie d'une page d'accueil de petite entreprise

Recherche du 10 et 11 novembre 2026. Chaque règle porte un statut :

- **vérifié** : au moins cinq sources indépendantes concordent ;
- **norme** : texte normatif (WCAG, guide Apple ou Google) ;
- **convention** : pratique d'experts, sans mesure publiée ;
- **hypothèse** : notre déduction, à tester.

## 15 règles chiffrées

| # | Règle | Statut |
|---|---|---|
| 1 | **5 sections au minimum** : en-tête, haut de page, preuve, services ou offre, contact et pied de page. **7 à 9 typiques.** Ordre courant : en-tête, haut de page, preuve courte, services, réalisations, à propos, avis, FAQ, contact, pied. | Contenu des blocs : vérifié. Le nombre : convention |
| 2 | **Haut de page** : on comprend quoi, pour qui, où, et quoi faire, en moins de 10 s. Titre de 4 à 10 mots, une phrase dessous, un bouton. Visible sans défiler à 390 x 660 px utiles et à 1440 x 800 px. | Vérifié |
| 3 | **Espaces en multiples de 4 px**. Échelle fixe : 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. L'espace entre groupes vaut au moins deux fois l'espace dans un groupe. | Grille : vérifié. Valeurs entre sections : convention |
| 4 | **Marge latérale de 16 px au minimum** sur téléphone. Contenu de 1200 à 1280 px au maximum sur ordinateur. Aucun défilement horizontal à 320 px. | 320 px : norme (WCAG 1.4.10). 16 px : convention |
| 5 | **Lignes de 45 à 75 caractères**, cible environ 65. En CSS : `max-width: 65ch`. | Vérifié, bornes discutées |
| 6 | **Texte courant de 16 px au minimum**, interligne 1,4 à 1,6. Titres : interligne 1,1 à 1,25. Rien sous 12 px. | Vérifié |
| 7 | **Contraste de 4,5:1** pour le texte, **3:1** pour le gros texte et les contours de contrôles. | Norme |
| 8 | **4 tailles de texte au maximum** par page, une police de texte et une de titres. | Règle maison, cohérente avec Refactoring UI. Pas une norme |
| 9 | **Un seul bouton principal par écran.** Libellé verbe + objet (« Demander une soumission »), répété en bas de page. | Convention vérifiée. Aucun test A/B public sur « un seul » |
| 10 | **Cibles tactiles de 44 x 44 px** (48 dp sur Android), 8 px entre deux cibles. Plancher WCAG AA : 24 x 24 px. | Vérifié |
| 11 | **Formulaire de contact de 3 à 5 champs.** Chaque champ en plus se justifie. | Mesuré, études anciennes |
| 12 | **Confiance** : nom, adresse, téléphone cliquable et heures sur la page. Vrais avis, vraies photos. Jamais de faux avis, de compteurs ni de badges sans preuve. | Vérifié |
| 13 | **Images** : une image forte par section au plus, de vraies photos. Pas de carrousel automatique. | Vérifié. Ratios d'image : convention |
| 14 | **Performance** : LCP 2,5 s, INP 200 ms, CLS 0,1 au maximum, au 75e centile. Image du haut de page jamais en lazy-load. | Seuils : vérifié. Budget de 1 Mo : hypothèse |
| 15 | **App mobile** : barre d'onglets de 3 à 5 entrées. Premier écran = l'action principale, pas un tutoriel. | 3 à 5 onglets : vérifié |

## Sources principales

- Nielsen Norman Group : [Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/), [The Fold Manifesto](https://www.nngroup.com/articles/page-fold-manifesto/), [How Long Do Users Stay on Web Pages?](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/), [Photos as Web Content](https://www.nngroup.com/articles/photos-as-web-content/), [Zigzag layouts](https://www.nngroup.com/articles/zigzag-page-layout/)
- W3C : [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- Apple : [Human Interface Guidelines, Layout](https://developer.apple.com/design/human-interface-guidelines/layout), [Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars)
- Google : [Material Design 3](https://m3.material.io/), [Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds)
- Baymard Institute : [Line length](https://baymard.com/blog/line-length-readability), [Form fields](https://baymard.com/blog/checkout-flow-average-form-fields)
- Stanford Persuasive Technology Lab : [Web Credibility Guidelines](https://credibility.stanford.edu/guidelines)
- HTTP Archive : [Web Almanac 2024, Page Weight](https://almanac.httparchive.org/en/2024/page-weight)
- Nanavati et Bias, [Optimal Line Length in Reading](https://journals.uc.edu/index.php/vl/article/view/5765), *Visible Language*, 2005
- Erik Runyon, [Carousel Stats](https://erikrunyon.com/2013/01/carousel-stats/), 2013
- Wathan et Schoger, [Refactoring UI](https://www.refactoringui.com/), 2018

## Ce qui reste non vérifié

- Le nombre exact de sections. Aucune étude ne le mesure.
- Les espaces précis entre sections (48 à 64 px sur téléphone, 80 à 128 px sur ordinateur).
- Un budget de poids de page à 1 Mo.
