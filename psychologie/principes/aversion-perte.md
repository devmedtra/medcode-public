# Aversion à la perte

*Loss aversion* · famille : **Décision et biais cognitifs** · identifiant : `aversion-perte`

Perdre une somme pèse plus lourd, psychologiquement, que gagner la même somme. On accepte donc mal un pari équilibré et on tient à ce qu'on a déjà.

## Statut de la preuve

**Répliqué solidement**

- **Taille d'effet** : Coefficient lambda moyen d'environ 1,8 à 2 dans la méta-analyse de Brown et al. (2024, 607 estimations) ; très variable selon la méthode
- **Réplications** : Ruggeri et al. 2020 (Nature Human Behaviour, 4 098 participants, 19 pays) : réplication de la théorie des perspectives. Méta-analyse Brown et al. 2024 (JEL). Critique Gal & Rucker 2018 et débat dans Journal of Consumer Psychology.

[FAIT] La méta-analyse de Brown, Imai, Vieider et Camerer (2024) estime qu'une perte pèse en moyenne environ deux fois plus qu'un gain équivalent, avec une forte hétérogénéité. [FAIT] Ruggeri et al. (2020) ont reproduit les choix classiques de la théorie des perspectives dans 19 pays. [FAIT] Gal et Rucker (2018) contestent la généralité : pour de petits montants ou des situations neutres, l'asymétrie s'efface souvent. [INFÉRENCE] Pour une PME, l'effet est plus fiable sur des enjeux réels et significatifs (assurance, dommage, garantie) que sur un rabais de 2 $.

> Vérification : Le chiffre exact de lambda dépend de la spécification retenue dans Brown et al. ; la fourchette 1,8 à 2 est celle rapportée dans le résumé.

## Études fondatrices et méta-analyses

- *fondatrice* · Kahneman, D., & Tversky, A. (1979). Prospect theory: An analysis of decision under risk. *Econometrica*. [10.2307/1914185](https://doi.org/10.2307/1914185)
- *meta-analyse* · Brown, A. L., Imai, T., Vieider, F. M., & Camerer, C. F. (2024). Meta-analysis of empirical estimates of loss aversion. *Journal of Economic Literature*. [10.1257/jel.20221698](https://doi.org/10.1257/jel.20221698)
- *replication* · Ruggeri, K., Alí, S., Berge, M. L., et al. (2020). Replicating patterns of prospect theory for decision under risk. *Nature Human Behaviour*. [10.1038/s41562-020-0886-x](https://doi.org/10.1038/s41562-020-0886-x)
- *critique* · Gal, D., & Rucker, D. D. (2018). The loss of loss aversion: Will it loom larger than its gain?. *Journal of Consumer Psychology*. [10.1002/jcpy.1047](https://doi.org/10.1002/jcpy.1047)

## Trois applications pour une PME

Ce sont des exemples, des inférences à tester, pas des résultats garantis.

- **Site web** : Un courtier en assurance montre ce que le client risque de payer seul après un refoulement d'égout non couvert, chiffre moyen à l'appui, plutôt que vanter « une meilleure protection ».
- **Courriel** : Un gym rappelle aux membres inactifs les séances déjà payées qui restent dans leur forfait ce mois-ci. C'est vrai, précis, et ça parle de ce qu'ils ont déjà.
- **Boutique** : Une boutique de vélos offre un essai de 30 jours à la maison avec retour gratuit : une fois le vélo dans le garage, le rendre devient une perte.

## Niches où il compte le plus

`courtier-assurance`, `gym-et-crossfit`, `boutique-velo-sport`, `plombier`, `planificateur-financier`, `extermination`

## Limite éthique et légale

On franchit la ligne en exagérant la perte (statistiques de sinistres inventées, « vous perdrez tout »), en jouant sur la peur de populations vulnérables, ou en culpabilisant le refus (« Non, je préfère perdre de l'argent »). Le bouton de refus doit rester neutre.

- `QC-LPC-219` (Québec) Loi sur la protection du consommateur (RLRQ c. P-40.1), art. 219 : Interdit toute représentation fausse ou trompeuse à un consommateur, par quelque moyen que ce soit. *[FAIT]*
- `QC-LPC-220` (Québec) LPC, art. 220 : Interdit d'attribuer faussement à un bien ou service un avantage particulier ou de promettre faussement un avantage pécuniaire. *[FAIT]*
- `CA-LC-74.01-1a` (Canada) Loi sur la concurrence, art. 74.01(1)a) : Comportement susceptible d'examen (civil) : indication au public fausse ou trompeuse sur un point important. *[SOURCE-SECONDAIRE]*
- `US-FTC-5` (États-Unis) FTC Act, section 5 (15 U.S.C. 45) : Interdit les actes ou pratiques déloyaux ou trompeurs ; base des poursuites de la FTC contre les dark patterns (rapport FTC 'Bringing Dark Patterns to Light', sept. 2022). *[SOURCE-SECONDAIRE]*
- `EU-UCPD` (Union européenne) Directive 2005/29/CE sur les pratiques commerciales déloyales, art. 5 à 9 et annexe I : Interdit les pratiques trompeuses et agressives ; annexe I (liste noire) : fausse offre limitée dans le temps (point 7), faux avis et avis non vérifiés présentés comme verifies (points 23 ter et 23 quater, ajoutés par la directive 2019/2161). *[SOURCE-SECONDAIRE]*
- `EU-DSA-25` (Union européenne) Règlement (UE) 2022/2065 sur les services numériques (DSA), art. 25 : Les plateformes en ligne ne peuvent concevoir ou organiser leur interface de façon à tromper, manipuler ou altérer la capacité des usagers à décider librement (dark patterns). *[SOURCE-SECONDAIRE]*

Ce rappel n'est pas un avis juridique.

## Mesurer l'effet

- **Méthode** : Test A/B du titre ou de l'objet de courriel : formulation en perte évitée contre formulation en gain, à contenu identique.
- **Métrique principale** : Taux de clic vers la demande de soumission ou de réservation.
- **Garde-fou** : Taux de désabonnement et de plaintes ; taux de conversion final, pas seulement le clic.
- **Échantillon** : Courriel : 2 000 envois par variante détectent un écart de 2 points sur un taux de clic de 5 %. Site : plusieurs semaines pour une PME locale.

---
Utilité pour une PME (opinion de la rédaction) : 4/5 · Textes originaux, Medtra Inc., 2026. Les études sont citées, jamais reproduites.
