# Biais des coûts irrécupérables

*Sunk cost fallacy* · famille : **Décision et biais cognitifs** · identifiant : `cout-irrecupere`

On continue un projet ou on utilise un service parce qu'on y a déjà mis de l'argent ou du temps, même si ce passé ne devrait plus compter. La dépense passée pousse à l'usage présent.

## Statut de la preuve

**Mitigé**

- **Taille d'effet** : d ≈ 0,3 environ dans Many Labs 1 (réplication réussie, effet plus petit que l'original)
- **Réplications** : Many Labs 1 (Klein et al. 2014) : effet reproduit, plus faible. Effets de terrain partagés selon le délai entre paiement et usage.

[FAIT] Arkes et Blumer (1985) ont montré que des gens ayant payé plus cher des billets de théâtre y allaient davantage. [FAIT] Le scénario des coûts irrécupérables a été reproduit dans Many Labs 1, avec un effet petit à modéré. [FAIT] Les études de terrain sont plus partagées : l'effet sur l'usage s'estompe avec le temps (Gourville et Soman 1998, paiement et consommation). [INFÉRENCE] Utile pour réduire les absences, pas pour retenir un client mécontent.

> Vérification : Taille d'effet Many Labs 1 de mémoire, ordre de grandeur seulement.

## Études fondatrices et méta-analyses

- *fondatrice* · Arkes, H. R., & Blumer, C. (1985). The psychology of sunk cost. *Organizational Behavior and Human Decision Processes*. [10.1016/0749-5978(85)90049-4](https://doi.org/10.1016/0749-5978(85)90049-4)
- *replication* · Klein, R. A., Ratliff, K. A., Vianello, M., et al. (2014). Investigating variation in replicability. *Social Psychology*. [10.1027/1864-9335/a000178](https://doi.org/10.1027/1864-9335/a000178)
- *revue* · Gourville, J. T., & Soman, D. (1998). Payment depreciation: The behavioral effects of temporally separating payments from consumption. *Journal of Consumer Research*. [10.1086/209533](https://doi.org/10.1086/209533)

## Trois applications pour une PME

Ce sont des exemples, des inférences à tester, pas des résultats garantis.

- **Courriel** : Un studio de yoga rappelle, la veille, que la place est réservée et payée. Le rappel réduit les absences sans pression : c'est une information.
- **Prix** : Une école de musique facture la session en début de trimestre plutôt qu'au cours : les élèves qui ont payé d'avance se présentent davantage.
- **Vente** : Un consultant, à l'inverse, aide son client à arrêter un projet qui ne rapporte plus. Dire « oubliez ce qui est déjà dépensé » bâtit une confiance qui ramène des mandats.

## Niches où il compte le plus

`yoga-et-pilates`, `ecole-musique-danse`, `consultant`, `gym-et-crossfit`, `entraineur-personnel`, `camp-de-jour`

## Limite éthique et légale

Exploiter les coûts irrécupérables pour empêcher une sortie est abusif : frais de résiliation disproportionnés, « vous perdrez tout ce que vous avez payé » quand c'est faux, ou rendre l'annulation coûteuse pour que le client reste par dépit.

- `QC-LPC-219` (Québec) Loi sur la protection du consommateur (RLRQ c. P-40.1), art. 219 : Interdit toute représentation fausse ou trompeuse à un consommateur, par quelque moyen que ce soit. *[FAIT]*
- `QC-LPC-11.2` (Québec) LPC, art. 11.2 : Encadre strictement la clause permettant au commerçant de modifier unilatéralement le contrat. *[FAIT]*
- `US-ROSCA` (États-Unis) Restore Online Shoppers' Confidence Act (15 U.S.C. 8401-8405) et Negative Option Rule antérieure : Abonnement en ligne : divulgation claire des conditions, consentement exprès et moyen simple d'annuler. La règle 'click-to-cancel' de 2024 a été annulée par la Cour d'appel du 8e circuit le 8 juillet 2025 ; ROSCA et les lois des États s'appliquent toujours. *[SOURCE-SECONDAIRE]*
- `EU-DSA-25` (Union européenne) Règlement (UE) 2022/2065 sur les services numériques (DSA), art. 25 : Les plateformes en ligne ne peuvent concevoir ou organiser leur interface de façon à tromper, manipuler ou altérer la capacité des usagers à décider librement (dark patterns). *[SOURCE-SECONDAIRE]*
- `EU-UCPD` (Union européenne) Directive 2005/29/CE sur les pratiques commerciales déloyales, art. 5 à 9 et annexe I : Interdit les pratiques trompeuses et agressives ; annexe I (liste noire) : fausse offre limitée dans le temps (point 7), faux avis et avis non vérifiés présentés comme verifies (points 23 ter et 23 quater, ajoutés par la directive 2019/2161). *[SOURCE-SECONDAIRE]*

Ce rappel n'est pas un avis juridique.

## Mesurer l'effet

- **Méthode** : Test A/B du rappel de rendez-vous : rappel neutre contre rappel qui mentionne la place payée et réservée.
- **Métrique principale** : Taux de présence aux rendez-vous ou cours.
- **Garde-fou** : Taux d'annulation tardive et de désabonnement aux rappels.
- **Échantillon** : Environ 500 rendez-vous par variante pour détecter une baisse de 3 points d'absences.

---
Utilité pour une PME (opinion de la rédaction) : 3/5 · Textes originaux, Medtra Inc., 2026. Les études sont citées, jamais reproduites.
