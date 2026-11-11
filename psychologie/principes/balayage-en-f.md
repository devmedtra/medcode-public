# Lecture en F (balayage)

*F-shaped scanning pattern* · famille : **Perception et attention** · identifiant : `balayage-en-f`

Sur une page de texte peu structurée, beaucoup d'internautes lisent le haut, puis le début des lignes en descendant, ce qui dessine un F. C'est un symptôme d'une page mal hiérarchisée plus qu'une loi de lecture.

## Statut de la preuve

**Mitigé** · `non-verifie`

- **Taille d'effet** : Non chiffrée de façon standard ; motif observé en oculométrie sur des pages de texte, absent quand la page a des titres, listes et mises en valeur claires
- **Réplications** : Observations industrielles répétées (NN/g 2006, 2017) et études académiques d'oculométrie convergentes sur la prédominance haut-gauche ; pas de méta-analyse.

[FAIT] Nielsen Norman Group a décrit le motif en F en 2006 en oculométrie, et l'a revu en 2017 en notant qu'il apparaît surtout avec du texte dense et sans repères. [FAIT] Buscher, Cutrell et Morris (2009) montrent que le haut et la gauche des pages attirent plus de fixations, mais que l'attention dépend fortement de la tâche. [INFÉRENCE] La leçon utile est de placer l'information porteuse dans les premiers mots des titres et des lignes. [OPINION] Le « F » n'est pas un gabarit à imiter.

> Vérification : Le motif en F lui-même repose surtout sur les études NN/g (non révisées par les pairs) : non-verifie comme loi générale.

## Études fondatrices et méta-analyses

- *fondatrice* · Nielsen, J. (2006). F-shaped pattern for reading web content. *Nielsen Norman Group (rapport en ligne)*. pas de DOI (livre ou rapport)
- *replication* · Pernice, K. (2017). F-shaped pattern of reading on the web: Misunderstood, but still relevant (even on mobile). *Nielsen Norman Group (rapport en ligne)*. pas de DOI (livre ou rapport)
- *revue* · Buscher, G., Cutrell, E., & Morris, M. R. (2009). What do you see when you're surfing?. *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems*. [10.1145/1518701.1518705](https://doi.org/10.1145/1518701.1518705)

## Trois applications pour une PME

Ce sont des exemples, des inférences à tester, pas des résultats garantis.

- **Site web** : Un chiropraticien commence chaque titre de section par le mot que le patient cherche (« Mal de dos : ... », « Torticolis : ... »).
- **Courriel** : Un courtier hypothécaire met le taux et la date d'échéance dans les trois premiers mots de l'objet et de la première ligne.
- **Site web** : Un service d'entreposage présente ses tailles d'unités en liste à puces commençant par la dimension, pas en paragraphe.

## Niches où il compte le plus

`chiropratique`, `courtier-hypothecaire`, `entreposage`, `avocat`, `clinique-medicale-privee`, `comptable-cpa`

## Limite éthique et légale

Placer volontairement les conditions défavorables là où l'on sait que l'œil ne passe pas (bas de paragraphe, fin de ligne, colonne de droite) relève de l'omission d'un fait important.

- `QC-LPC-228` (Québec) LPC, art. 228 : Interdit de passer sous silence un fait important dans une représentation faite au consommateur. *[FAIT]*
- `EU-UCPD` (Union européenne) Directive 2005/29/CE sur les pratiques commerciales déloyales, art. 5 à 9 et annexe I : Interdit les pratiques trompeuses et agressives ; annexe I (liste noire) : fausse offre limitée dans le temps (point 7), faux avis et avis non vérifiés présentés comme verifies (points 23 ter et 23 quater, ajoutés par la directive 2019/2161). *[SOURCE-SECONDAIRE]*
- `US-FTC-5` (États-Unis) FTC Act, section 5 (15 U.S.C. 45) : Interdit les actes ou pratiques déloyaux ou trompeurs ; base des poursuites de la FTC contre les dark patterns (rapport FTC 'Bringing Dark Patterns to Light', sept. 2022). *[SOURCE-SECONDAIRE]*

Ce rappel n'est pas un avis juridique.

## Mesurer l'effet

- **Méthode** : Test A/B : page restructurée (titres porteurs, listes) contre page en paragraphes.
- **Métrique principale** : Profondeur de défilement et taux de clic sur l'action principale.
- **Garde-fou** : Questions répétées au service client sur des informations déjà sur la page.
- **Échantillon** : Environ 1 000 visiteurs par variante ; carte de défilement en complément.

---
Utilité pour une PME (opinion de la rédaction) : 3/5 · Textes originaux, Medtra Inc., 2026. Les études sont citées, jamais reproduites.
