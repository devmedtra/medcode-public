# Affordances et signifiants

*Affordances and signifiers* · famille : **Design et UX** · identifiant : `affordances-et-signifiants`

Un objet doit montrer comment on s'en sert : un bouton doit avoir l'air cliquable, un champ l'air de se remplir. Quand le signal manque, l'utilisateur hésite ou ne voit pas l'action.

## Statut de la preuve

**Mitigé**

- **Taille d'effet** : Non standardisée. Burmistrov et al. (2015) : les interfaces « plates » sans signaux de cliquabilité ralentissent la recherche visuelle ; études d'oculométrie du Nielsen Norman Group (2017) dans le même sens.
- **Réplications** : Peu d'études contrôlées publiées ; pas de méta-analyse.

[FAIT] Gibson (1979) a défini l'affordance en psychologie de la perception ; Norman (1988, 1999) l'a appliquée au design et a précisé la notion de signifiant. [FAIT] Burmistrov et al. (2015) mesurent en laboratoire un coût du design plat sur la recherche d'éléments cliquables. [FAIT] Les études d'oculométrie du Nielsen Norman Group (2017) trouvent plus d'incertitude avec des signaux de clic faibles ; ce sont des études d'entreprise. [INFÉRENCE] L'effet dépend de l'habitude des usagers et de la convention. [OPINION] Pour une PME, un bouton doit ressembler à un bouton.

> Vérification : Étude NN/g 2017 non révisée par les pairs.

## Études fondatrices et méta-analyses

- *revue* · Norman, D. A. (1999). Affordance, conventions, and design. *Interactions*. [10.1145/301153.301168](https://doi.org/10.1145/301153.301168)
- *fondatrice* · Burmistrov, I., Zlokazova, T., Izmalkova, A., & Leonova, A. (2015). Flat design vs traditional design: Comparative experimental study. *INTERACT 2015, Lecture Notes in Computer Science*. [10.1007/978-3-319-22668-2_10](https://doi.org/10.1007/978-3-319-22668-2_10)
- *fondatrice* · Gibson, J. J. (1979). The ecological approach to visual perception. *Houghton Mifflin (livre)*. pas de DOI (livre ou rapport)

## Trois applications pour une PME

Ce sont des exemples, des inférences à tester, pas des résultats garantis.

- **Site web** : Un barbier transforme son lien texte « réserver » en bouton plein, avec fond de couleur et forme reconnaissable.
- **Application** : Une application de location d'outils ajoute une flèche visible sur les cartes qu'on peut ouvrir, et retire l'ombre des cartes inertes.
- **Boutique** : Un lave-auto remplace le panneau tactile sans bordure de sa borne par des boutons physiques nommés « Lavage simple » et « Lavage complet ».

## Niches où il compte le plus

`barbier`, `location-equipement-evenementiel`, `esthetique-auto-lave-auto`, `salon-de-coiffure`, `cils-et-sourcils`, `location-auto`

## Limite éthique et légale

Faire disparaître le signal sur les actions qui servent le client (lien de désabonnement sans apparence de lien, « Refuser » en texte gris sur gris) est un dark pattern. Les deux choix d'une décision doivent porter des signaux équivalents.

- `EU-DSA-25` (Union européenne) Règlement (UE) 2022/2065 sur les services numériques (DSA), art. 25 : Les plateformes en ligne ne peuvent concevoir ou organiser leur interface de façon à tromper, manipuler ou altérer la capacité des usagers à décider librement (dark patterns). *[SOURCE-SECONDAIRE]*
- `EU-RGPD-7` (Union européenne) RGPD (UE) 2016/679, art. 4(11) et 7, et directive ePrivacy 2002/58/CE art. 5(3) : Consentement libre, spécifique, éclairé et univoque, aussi simple à retirer qu'à donner ; cases précochées invalides (CJUE, Planet49, 2019). *[SOURCE-SECONDAIRE]*
- `QC-L25-CONSENT` (Québec) Loi sur la protection des renseignements personnels dans le secteur privé (RLRQ c. P-39.1, modifiée par la Loi 25), art. 14 : Le consentement doit être manifeste, libre, éclairé et donné à des fins spécifiques. *[FAIT]*
- `CA-LCAP` (Canada) Loi canadienne anti-pourriel (L.C. 2010, c. 23), art. 6 et 11 : Message électronique commercial : consentement préalable (exprès ou tacite encadré), identification de l'expéditeur, mécanisme de désabonnement exécuté dans les 10 jours ouvrables. *[SOURCE-SECONDAIRE]*
- `US-FTC-5` (États-Unis) FTC Act, section 5 (15 U.S.C. 45) : Interdit les actes ou pratiques déloyaux ou trompeurs ; base des poursuites de la FTC contre les dark patterns (rapport FTC 'Bringing Dark Patterns to Light', sept. 2022). *[SOURCE-SECONDAIRE]*

Ce rappel n'est pas un avis juridique.

## Mesurer l'effet

- **Méthode** : Test de premier clic (où cliqueriez-vous pour réserver ?) puis A/B du style de bouton.
- **Métrique principale** : Taux de clic sur l'action principale.
- **Garde-fou** : Clics morts sur des éléments non interactifs (carte de clics).
- **Échantillon** : 20 à 30 participants au test de clic ; 2 000 visiteurs par variante en A/B.

---
Utilité pour une PME (opinion de la rédaction) : 4/5 · Textes originaux, Medtra Inc., 2026. Les études sont citées, jamais reproduites.
