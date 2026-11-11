# MedCode

[MedCode](https://medcode.ca) crée le site web, le domaine, le courriel professionnel et le numéro professionnel des petites entreprises du Québec et du Canada.

Ce dépôt est notre espace public. Tu peux y signaler un problème, proposer une idée et utiliser les outils qu'on partage.

## Signaler un problème

Ouvre une [issue](../../issues/new/choose). Dis ce que tu faisais, ce que tu as vu et ce que tu attendais.

Une faille de sécurité ne se signale pas ici. Écris à support@medcode.ca.

## Ce qu'on a appris

On publie nos recherches et nos leçons, avec leurs sources et leur statut de preuve.

- [Coding](coding/) : 33 problèmes réels et leur résolution.
- [Design web](design-web/) : les règles qu'on applique aux sites, sourcées.
- [Marketing](marketing/) : 165 techniques classées pour 115 types de commerce.
- [IA confidentielle](ia-confidentielle/) : masquer avant d'envoyer à un modèle d'IA, la méthode et les résultats mesurés, échecs compris.
- [Fiabilité](fiabilite/) : ni deux fois, ni « livré » sans l'être. Patrons, tests et checklist.
- [Front-end](front-end/) : tendances triées et prise en charge CSS mesurée en novembre 2026.
- [Blocs libres](blocs-libres/) : quelles licences permettent de vendre un site fait de blocs libres.
- [ERP](erp/) : marché et obligations québécoises d'un logiciel de gestion pour PME.
- [Psychologie](psychologie/) : l'index de 138 principes et 15 fiches complètes. Tous droits réservés : ce dossier n'est pas sous licence MIT.

## Outil partagé : indicatif-lieu

Donne les indicatifs régionaux d'une entreprise canadienne d'après son code postal ou sa ville.

```ts
import { indicatifsRecommandes } from "./src/indicatif-lieu.ts";

indicatifsRecommandes("G9A 5H7");
// { region: "Ouest et Centre du Québec", indicatifs: ["819", "873", "468"], ... }
```

Sans lieu reconnu, la fonction rend `null`. Elle ne devine pas.

Source des régions : plans de numérotation de l'[Administrateur canadien de la numérotation](https://www.cnac.ca).

```bash
npm test
```

Node 22.6 ou plus récent.

---

# MedCode (English)

[MedCode](https://medcode.ca) builds the website, domain, business email and business phone number of small businesses in Quebec and Canada.

This is our public space: report a problem, suggest an idea, or use the tools we share. Security issues go to support@medcode.ca, not here.

We also publish what we learned: [coding](coding/) lessons, [web design](design-web/) rules, [marketing](marketing/) rankings, a [confidential AI gateway](ia-confidentielle/) evaluation method, [reliability](fiabilite/) patterns, [front-end](front-end/) support data, [free block licences](blocs-libres/), [management software](erp/) obligations in Quebec, and an applied [psychology](psychologie/) sample (all rights reserved, not MIT), in French with an English summary in each folder.

`indicatif-lieu` returns the local area codes of a Canadian business from its postal code or city.

## Licence

MIT, Medtra Inc. Sauf le dossier `psychologie/` : tous droits réservés, voir [psychologie/LICENSE](psychologie/LICENSE).

MIT, except the `psychologie/` folder: all rights reserved.
