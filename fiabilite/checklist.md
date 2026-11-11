# De junior à senior : la méthode et la checklist

## Ce que disent les sources

- **Fait** : le livre SRE de Google : objectifs de service chiffrés, budget d'erreur, post-mortems sans blâme, déploiement progressif ([table des matières](https://sre.google/sre-book/table-of-contents/), [post-mortems](https://sre.google/sre-book/postmortem-culture/)).
- **Fait** : Kleppmann, *Designing Data-Intensive Applications* (O'Reilly, 2017 ; 2e éd. 2025). Un réseau peut perdre, retarder ou dupliquer n'importe quel message. Transactions, isolation, mises à jour perdues, idempotence.
- **Fait** : [AWS Builders' Library](https://aws.amazon.com/builders-library/) : nouveaux essais avec délai croissant et aléa, idempotence, déploiement progressif avec retour arrière automatique.
- **Fait** : Gawande, *The Checklist Manifesto* (2009), et la checklist chirurgicale de l'OMS ([Haynes et al., NEJM 2009](https://www.nejm.org/doi/full/10.1056/NEJMsa0810119)). **Inférence** : une liste courte, aux points de passage, attrape les oublis bêtes en logiciel aussi.
- **Fait** : revue de code, [Bacchelli et Bird, ICSE 2013](https://www.microsoft.com/en-us/research/publication/expectations-outcomes-and-challenges-of-modern-code-review/). Le gain principal observé est le transfert de connaissance. Trouver des défauts arrive moins souvent que prévu.
- **Fait** : [DORA](https://dora.dev), *Accelerate* (2018) : fréquence de déploiement, délai, taux d'échec des changements, temps de restauration.

### L'IA qui écrit du code : études pour et contre

- **Fait** : [METR, juillet 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), essai randomisé : 16 développeurs expérimentés ont été 19 % plus lents avec l'IA, alors qu'ils se croyaient plus rapides.
- **Fait** : le [rapport DORA 2024](https://dora.dev/research/2024/dora-report/) associe l'adoption de l'IA à une baisse estimée de la stabilité des livraisons. Vérifie les chiffres dans le rapport avant de les citer.
- **Fait** : [GitClear](https://www.gitclear.com/ai_assistant_code_quality_2025_research) observe plus de code dupliqué et moins de refactorisation. Étude de l'éditeur, non revue par des pairs.
- **Fait** : [Peng et al. 2023](https://arxiv.org/abs/2302.06590), expérience contrôlée : une tâche simple finie nettement plus vite avec Copilot.
- **Inférence** : l'IA accélère l'écriture de code connu. Elle ne garantit ni la justesse ni la stabilité. Ce sont les tests, les contraintes et la relecture qui les donnent.

## La méthode en dix points (opinion fondée sur ce qui précède)

1. **Un critère chiffré, écrit avant le code.** « 50 appels parallèles donnent 1 livraison ; 10 rejeux du webhook donnent 1 débit. »
2. **Les invariants, listés.** Ce qui ne doit jamais arriver, en une phrase et en une requête SQL.
3. **Une fiche de pannes par fonction.** Appelée deux fois ? Morte au milieu ? Arrivée en retard ? L'acteur ment ? Le réseau coupe ?
4. **La base comme dernier rempart.** UNIQUE, CHECK, UPDATE conditionnel, trigger de transitions. Le code peut se tromper, la contrainte non.
5. **Des bibliothèques éprouvées**, pas d'algorithme maison.
6. **Des tests qui prouvent la garantie** : propriétés, concurrence, chaos. Un test qui ne peut pas échouer ne prouve rien.
7. **Un déploiement progressif** : un drapeau, un petit pourcentage ou une seule ville, un retour arrière prêt.
8. **De l'observabilité** : les invariants tournent en production, avec une alerte à zéro tolérance.
9. **Un second avis**, humain ou IA, sur la fiche de pannes. C'est une hypothèse, pas une preuve.
10. **Un post-mortem sans blâme** après chaque incident : cause, détection, garde ajoutée.

## Checklist avant de livrer une fonction critique

**Avant de coder**
- [ ] Critère de réussite écrit en chiffres.
- [ ] Invariants écrits : une phrase et une requête qui doit rendre 0 ligne.
- [ ] États et transitions permises dessinés, états terminaux marqués.
- [ ] Fiche de pannes : double appel, mort au milieu, retard, hors ligne, acteur malveillant.
- [ ] Règle externe vérifiée (ordre professionnel, régulateur, fournisseur de paiement). Sinon `non-verifie`, et on ne la promeut pas.

**Dans le code**
- [ ] Chaque effet externe (argent, SMS, livraison) porte une clé d'idempotence.
- [ ] Une contrainte UNIQUE ou CHECK pour chaque invariant possible.
- [ ] Tout changement d'état : `UPDATE ... WHERE statut = attendu`, puis on compte les lignes touchées. 0 ligne = échec.
- [ ] Aucun repli qui contourne la route serveur. Une file hors ligne rejoue l'appel d'API, jamais un UPDATE brut.
- [ ] L'interface n'affiche jamais « livré » ou « payé » avant la confirmation du serveur.
- [ ] Une erreur d'écriture dans un webhook rend une erreur 500, pour que le fournisseur rejoue.
- [ ] Chaque transition écrite dans un journal en ajout seul, avec sa preuve.
- [ ] Une seule valeur pour chaque état terminal. Deux noms pour « fini », c'est deux vérités.
- [ ] « Livrée » exige une preuve liée au colis.

**Tests**
- [ ] Test de propriétés sur doublons, désordre et retards.
- [ ] 50 appels parallèles donnent exactement 1 effet.
- [ ] Webhook rejoué 10 fois donne 1 effet.
- [ ] Processus tué au milieu : état cohérent au redémarrage.
- [ ] Réseau coupé, annulation serveur, reconnexion : reste annulée.
- [ ] La vérification de types et les tests tournent sur l'arbre réellement livré.

**Mise en production**
- [ ] Drapeau ou déploiement partiel, retour arrière testé.
- [ ] Requêtes d'invariants planifiées, avec alerte.
- [ ] Rapprochement quotidien entre le système et le réel.
- [ ] Second avis sur la fiche de pannes.
- [ ] Après incident : post-mortem et garde ajoutée.
