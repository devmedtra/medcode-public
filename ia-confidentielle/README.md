# IA confidentielle : masquer avant d'envoyer, et le prouver

Recherche et prototype du 11 novembre 2026. Rien de ceci n'est en production.

La question : peut-on envoyer une demande à un grand modèle de langage hébergé ailleurs sans lui donner les renseignements personnels, de santé ou les secrets qu'elle contient ? Notre réponse passe par une passerelle qui masque, route ou bloque. Ce dossier publie la **méthode** et les **résultats mesurés**, échecs compris. Il ne publie ni le code du détecteur, ni les corpus, ni la liste des tournures qui l'ont trompé : ce serait un mode d'emploi pour le contourner.

| Fichier | Contenu |
|---|---|
| [methode-et-resultats.md](methode-et-resultats.md) | Critères écrits avant le code, corpus tenu à l'écart et figé, résultats v1 à v3 |
| [cadre-et-marche.md](cadre-et-marche.md) | Ce que disent les lois du Québec, les fournisseurs et la recherche, avec statut de preuve |

## Statuts

- **fait** : lu dans une source, lien donné ;
- **inférence** : déduit des faits, à valider ;
- **hypothèse** : idée à mesurer ;
- **non-verifie** : moins de cinq sources indépendantes. C'est le cas de la plupart des points de [cadre-et-marche.md](cadre-et-marche.md).

## La leçon en une phrase

Un détecteur réglé sur ses propres exemples affiche 100 %. Sur des textes qu'il n'a jamais vus, il fuit. Seul le second chiffre compte.

---

**English summary.** Method and measured results of a prototype privacy gateway that masks personal, health and secret data before a prompt reaches an external LLM, routes health data to a local model, and blocks secrets. Success criteria were written before the code; each version was judged once on a held-out corpus frozen in a commit (hash recorded) before any tuning. Results are reported as measured, failures included: v1 hit 100 % on its tuning corpus but leaked on held-out text; v3 passes 7 of 11 criteria (zero health text sent out, but 2 of 43 secret texts and 5 emails leaked). Detector code, corpora and bypass details are deliberately not published. A second file summarises Quebec law (health information act: transfer outside Quebec allowed after a privacy impact assessment, verified on 5 sources), provider retention terms and open-source building blocks, mostly marked unverified.
