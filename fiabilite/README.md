# Fiabilité : ni deux fois, ni « livré » sans l'être

Recherche du 11 novembre 2026. Notre cas d'école : la livraison d'un médicament. Elle ne doit jamais arriver deux fois, et le système ne doit jamais dire « livrée » si le patient n'a rien reçu. Les mêmes patrons valent pour un paiement, un SMS, une réservation.

| Fichier | Contenu |
|---|---|
| [patrons.md](patrons.md) | Les deux pannes, les patrons éprouvés, comment prouver les garanties par des tests |
| [checklist.md](checklist.md) | Une page à cocher avant de livrer une fonction critique, et la méthode « de junior à senior » |

## Statuts

- **fait** : sourcé, lien donné ;
- **inférence** : déduit des faits ;
- **opinion** : notre recommandation ;
- **non-verifie** : moins de cinq sources indépendantes.

Les liens ont été choisis le 11 novembre 2026. Seule la partie Québec a été relue ce jour-là. Relis chaque page avant de t'y fier.

---

**English summary.** How to make a critical delivery (we use prescription drug delivery as the example) happen exactly once and never be marked delivered without proof. Covers the two failure modes (duplicate side effect, phantom completion or lost update), proven patterns (idempotency keys with a UNIQUE constraint, state machine enforced in the database, optimistic locking, transactional outbox, at-least-once delivery plus idempotent processing, proof of delivery, reconciliation, append-only audit log), how to prove them with property, concurrency and chaos tests plus production invariants, Quebec and Canada rules on controlled substances (mostly unverified), and a one-page checklist with a ten-step method for shipping senior-level work without formal training, including what studies say about AI coding assistants.
