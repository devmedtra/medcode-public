# Biais du statu quo

*Status quo bias* · famille : **Décision et biais cognitifs** · identifiant : `biais-statu-quo`

À valeur égale, on préfère garder la situation actuelle plutôt que changer. Le fournisseur en place profite d'un avantage que le nouveau doit compenser.

## Statut de la preuve

**Répliqué solidement**

- **Taille d'effet** : Effet présent dans 3 des 4 scénarios répliqués (Xiao et al. 2021) ; taille variable selon le scénario
- **Réplications** : Xiao et al. 2021, Meta-Psychology, réplication préenregistrée : 3 scénarios sur 4 confirmés. Lien étroit avec l'effet de défaut (méta-analyse Jachimowicz 2019).

[FAIT] Samuelson et Zeckhauser (1988) ont décrit le biais en laboratoire et sur des données réelles de régimes d'assurance. [FAIT] La réplication préenregistrée de Xiao, Lam, Piara et Feldman (2021, deux échantillons d'environ 300 personnes) retrouve le biais dans trois scénarios sur quatre. [INFÉRENCE] Le biais se confond en partie avec les coûts de changement réels (paperasse, risque), qu'il faut réduire autant que le biais lui-même. [OPINION] Pour une PME qui vole des clients à un concurrent, retirer l'effort du changement compte plus qu'un meilleur argument.

## Études fondatrices et méta-analyses

- *fondatrice* · Samuelson, W., & Zeckhauser, R. (1988). Status quo bias in decision making. *Journal of Risk and Uncertainty*. [10.1007/BF00055564](https://doi.org/10.1007/BF00055564)
- *revue* · Kahneman, D., Knetsch, J. L., & Thaler, R. H. (1991). Anomalies: The endowment effect, loss aversion, and status quo bias. *Journal of Economic Perspectives*. [10.1257/jep.5.1.193](https://doi.org/10.1257/jep.5.1.193)
- *replication* · Xiao, Q., Lam, C. S., Piara, M., & Feldman, G. (2021). Revisiting status quo bias: Replication of Samuelson and Zeckhauser (1988). *Meta-Psychology*. [10.15626/MP.2020.2470](https://doi.org/10.15626/MP.2020.2470)

## Trois applications pour une PME

Ce sont des exemples, des inférences à tester, pas des résultats garantis.

- **Site web** : Un comptable affiche « On récupère vos dossiers de l'ancien cabinet pour vous » avec la liste des documents qu'il demande lui-même. Le changement coûte une signature, pas une semaine.
- **Téléphone** : Un courtier hypothécaire propose au client de comparer son renouvellement actuel avec deux offres, sans rien signer. Le statu quo devient une option parmi d'autres, chiffrée.
- **Boutique** : Un garage offre la première vidange au prix coûtant affiché et transfère gratuitement l'historique d'entretien du véhicule. L'habitude du client passe au nouveau garage.

## Niches où il compte le plus

`comptable-cpa`, `courtier-hypothecaire`, `courtier-assurance`, `garage-mecanique`, `dentiste`, `agence-web`

## Limite éthique et légale

Exploiter le statu quo contre le client est le cœur des dark patterns d'abonnement : renouvellement automatique sans avis, résiliation volontairement difficile, hausse unilatérale du prix glissée dans le renouvellement. La résiliation doit être aussi simple que l'inscription.

- `QC-LPC-11.2` (Québec) LPC, art. 11.2 : Encadre strictement la clause permettant au commerçant de modifier unilatéralement le contrat. *[FAIT]*
- `QC-LPC-228` (Québec) LPC, art. 228 : Interdit de passer sous silence un fait important dans une représentation faite au consommateur. *[FAIT]*
- `US-ROSCA` (États-Unis) Restore Online Shoppers' Confidence Act (15 U.S.C. 8401-8405) et Negative Option Rule antérieure : Abonnement en ligne : divulgation claire des conditions, consentement exprès et moyen simple d'annuler. La règle 'click-to-cancel' de 2024 a été annulée par la Cour d'appel du 8e circuit le 8 juillet 2025 ; ROSCA et les lois des États s'appliquent toujours. *[SOURCE-SECONDAIRE]*
- `US-FTC-5` (États-Unis) FTC Act, section 5 (15 U.S.C. 45) : Interdit les actes ou pratiques déloyaux ou trompeurs ; base des poursuites de la FTC contre les dark patterns (rapport FTC 'Bringing Dark Patterns to Light', sept. 2022). *[SOURCE-SECONDAIRE]*
- `EU-DSA-25` (Union européenne) Règlement (UE) 2022/2065 sur les services numériques (DSA), art. 25 : Les plateformes en ligne ne peuvent concevoir ou organiser leur interface de façon à tromper, manipuler ou altérer la capacité des usagers à décider librement (dark patterns). *[SOURCE-SECONDAIRE]*
- `EU-UCPD` (Union européenne) Directive 2005/29/CE sur les pratiques commerciales déloyales, art. 5 à 9 et annexe I : Interdit les pratiques trompeuses et agressives ; annexe I (liste noire) : fausse offre limitée dans le temps (point 7), faux avis et avis non vérifiés présentés comme verifies (points 23 ter et 23 quater, ajoutés par la directive 2019/2161). *[SOURCE-SECONDAIRE]*

Ce rappel n'est pas un avis juridique.

## Mesurer l'effet

- **Méthode** : Test A/B de la page « Changer pour nous » : avec et sans prise en charge du transfert (documents, rendez-vous, historique).
- **Métrique principale** : Taux de demandes de transfert complétées.
- **Garde-fou** : Taux de clients transférés encore actifs après 6 mois.
- **Échantillon** : Faible volume en général : comparer par trimestre et suivre chaque transfert individuellement.

---
Utilité pour une PME (opinion de la rédaction) : 4/5 · Textes originaux, Medtra Inc., 2026. Les études sont citées, jamais reproduites.
