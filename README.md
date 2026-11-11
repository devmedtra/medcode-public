# MedCode

[MedCode](https://medcode.ca) crée le site web, le domaine, le courriel professionnel et le numéro professionnel des petites entreprises du Québec et du Canada.

Ce dépôt est notre espace public. Tu peux y signaler un problème, proposer une idée et utiliser les outils qu'on partage.

## Signaler un problème

Ouvre une [issue](../../issues/new/choose). Dis ce que tu faisais, ce que tu as vu et ce que tu attendais.

Une faille de sécurité ne se signale pas ici. Écris à support@medcode.ca.

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

`indicatif-lieu` returns the local area codes of a Canadian business from its postal code or city.

## Licence

MIT, Medtra Inc.
