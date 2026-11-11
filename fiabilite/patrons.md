# Les patrons d'une livraison fiable

## Les deux pannes, nommées

1. **Effet en double** (*duplicate side effect*). Une même intention produit deux effets : deux livraisons, deux débits.
   Causes classiques : nouvel essai réseau après un délai dépassé, double clic, webhook redélivré, file hors ligne rejouée, deux processus qui prennent la même tâche.
2. **Complétion fantôme ou mise à jour perdue** (*phantom completion*, *lost update*). Le système dit « livré » alors que rien n'est arrivé, ou un état juste est écrasé par un état périmé.
   Causes : interface optimiste qui affiche « livré » avant la confirmation du serveur ; un UPDATE qui ne touche aucune ligne mais ne signale pas d'erreur ; une app hors ligne qui se resynchronise tard et écrase « annulée » par « livrée » (la dernière écriture gagne) ; deux écritures concurrentes sans verrou ni version.

**Fait** : Stripe documente que ses webhooks peuvent arriver en double et dans le désordre, et recommande de dédupliquer par identifiant d'événement ([doc](https://docs.stripe.com/webhooks)). Voir aussi ses [clés d'idempotence](https://docs.stripe.com/api/idempotent_requests), l'[article de Brandur Leach](https://stripe.com/blog/idempotency) et l'[Amazon Builders' Library sur les nouveaux essais sûrs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-apis/).

## Les patrons, du plus fondamental au plus spécifique

| Patron | Ce qu'il garantit | Source |
|---|---|---|
| Clé d'idempotence et contrainte UNIQUE en base | Deux requêtes identiques, un seul effet. La base refuse le doublon même si le code se trompe. | Stripe, AWS ci-dessus ; PostgreSQL [`INSERT ... ON CONFLICT`](https://www.postgresql.org/docs/current/sql-insert.html) |
| Machine à états, transitions permises seulement | « Livrée » n'est atteignable que depuis « en livraison ». Un état terminal ne change plus. | **Inférence** : mieux appliquée dans la base (trigger ou `UPDATE ... WHERE statut = 'attendu'`) que dans l'app seule |
| Verrou optimiste, numéro de version | Une écriture fondée sur un état périmé échoue au lieu d'écraser. | Kleppmann, *Designing Data-Intensive Applications*, ch. 7 |
| Outbox transactionnelle | L'événement et le changement d'état sont écrits dans la même transaction. Jamais de notification sans écriture, ni l'inverse. | [microservices.io](https://microservices.io/patterns/data/transactional-outbox.html) |
| « Exactement une fois » = au moins une fois + traitement idempotent | Le réseau ne garantit pas l'exactement-une-fois. On l'obtient en dédupliquant chez le récepteur. | Kleppmann ch. 11 ; [Kafka, sémantique de livraison](https://kafka.apache.org/documentation/#semantics) |
| Preuve de livraison | Le passage à « livrée » exige une preuve liée au colis : scan à la remise, code à usage unique dit par le destinataire, signature, photo, position. | **Inférence** : le code prouve la présence du destinataire. La photo seule prouve le dépôt, pas la réception |
| Double vérification humaine pour les stupéfiants | Un second contrôle à la préparation et à la remise. | non-verifie (voir plus bas) |
| Rapprochement | Un travail périodique compare le système au réel : colis sortis, livrés, retournés ; paiements contre courses. Tout écart déclenche une alerte. | [Google SRE, Monitoring](https://sre.google/sre-book/monitoring-distributed-systems/) |
| Journal d'audit en ajout seul | Chaque transition est une ligne (qui, quand, d'où, quelle preuve) qu'on ne modifie jamais. L'état courant se recalcule à partir du journal. | Kleppmann ch. 11 (event sourcing) |

## Québec et Canada : stupéfiants

- **Fait, une seule source** : le questionnaire de pré-inspection de l'Ordre des pharmaciens du Québec sur la méthadone et les stupéfiants demande s'il existe une procédure de traçabilité des stupéfiants livrés et si la signature du destinataire est recueillie ([OPQ, PDF](https://www.opq.org/wp-content/uploads/2019/05/2019_05_10_methadone_stup.pdf)).
- **Fait** : le [Règlement sur les stupéfiants](https://laws-lois.justice.gc.ca/fra/reglements/C.R.C.,_ch._1041/) impose des registres et le [signalement des pertes et vols](https://www.canada.ca/fr/sante-canada/services/substances-controlees-precurseurs-chimiques/substances-controlees/conformite-surveillance/signalement-perte-vol.html) à Santé Canada.
- Normes de pratique de l'OPQ : [guide.standards.opq.org](https://guide.standards.opq.org).
- **non-verifie** : la preuve exacte exigée à la remise (signature seule, pièce d'identité, remise en main propre), le droit d'un livreur non pharmacien de transporter un stupéfiant, la double vérification. Moins de cinq sources pour chacun. Rien ne se code comme « conforme » avant une confirmation écrite de l'Ordre ou d'un pharmacien partenaire.
- **Inférence** : la pharmacie reste responsable. Le transporteur et elle doivent écrire au contrat qui garde la preuve, et combien de temps.

## Prouver les garanties par des tests

1. **Tests de propriétés** ([fast-check](https://fast-check.dev) en TypeScript, [Hypothesis](https://hypothesis.readthedocs.io) en Python). On génère des suites aléatoires d'événements (doublons, désordre, retards) et on vérifie les invariants : au plus une transition vers « livrée », jamais « livrée » après « annulée », débit total au plus égal au prix affiché.
2. **Concurrence** : 50 requêtes « livrer » en parallèle sur la même course. Critère : exactement 1 succès, 49 refus, 1 ligne d'audit.
3. **Chaos** : tuer le processus entre l'écriture en base et l'appel au fournisseur de paiement ; rejouer 10 fois le même webhook ; couper le réseau du téléphone, annuler côté serveur, reconnecter. Critère : l'état final est « annulée ». [Jepsen](https://jepsen.io/analyses) montre que des bases réputées violent leurs garanties sous partition réseau.
4. **Invariants en production** : une requête SQL planifiée qui doit rendre zéro ligne, sinon alerte. Exemples : « course avec deux événements de livraison », « livrée sans preuve », « payée sans livraison après 24 h ». C'est le rapprochement, automatisé.
