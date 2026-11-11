# Blocs de sites libres : quelles licences permettent de vendre un site

Recherche du 11 novembre 2026. La question : quels blocs (en-tête, haut de page, services, prix, FAQ, avis, galerie, contact, pied de page) peut-on réutiliser dans un site qu'on **vend** à un client ? Usage commercial, et redistribution dans le livrable.

Ce document lit des licences. Ce n'est pas un avis juridique.

## Méthode

1. Pour chaque source, lire le fichier de licence **dans le dépôt**, pas la page marketing.
2. Noter le dernier commit et sa date : un dépôt inactif depuis des années est un risque en soi.
3. Pour les sources sans dépôt, lire leur page de licence.
4. Séparer le code des **actifs inclus** (photos, logos, polices, scripts tiers) : ils ont leur propre licence.
5. Une licence contradictoire = exclusion, sans débat.
6. Passer chaque bloc retenu dans un analyseur de règles de design, puis à l'oeil.

## Verdicts

| Source | Licence lue | Dernier commit | Verdict |
|---|---|---|---|
| [HyperUI](https://github.com/markmead/hyperui/blob/main/LICENSE) | MIT | 2026-10-25 | OK |
| [Meraki UI](https://github.com/merakiuilabs/merakiui/blob/main/LICENSE) | MIT | 2025-07-11 | OK |
| [Tailblocks](https://github.com/mertJF/tailblocks/blob/master/LICENSE) | MIT | 2021-05-24 | OK, dépôt inactif depuis 2021 |
| [Flowbite](https://github.com/themesberg/flowbite/blob/main/LICENSE.md), partie libre | MIT | 2026-06-27 | OK pour le dépôt libre. Les blocs payants : exclus |
| [daisyUI](https://github.com/saadeghi/daisyui/blob/master/LICENSE) | MIT | 2026-11-09 | OK (composants, pas de sections complètes) |
| [shadcn/ui](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md) | MIT | 2026-11-08 | OK. Les sites tiers de « blocs shadcn » ont leurs propres licences : exclus par défaut |
| [Untitled UI React](https://github.com/untitleduico/react/blob/main/LICENSE) | MIT | 2026-11-10 | OK pour le dépôt libre. L'offre payante et le kit Figma : exclus |
| [Start Bootstrap](https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE) | MIT | 2023-03-25 | OK pour le code. Images exclues |
| [AstroWind](https://github.com/arthelokyo/astrowind/blob/main/LICENSE.md) | MIT | 2026-09-12 | OK |
| [Ananke](https://github.com/gohugo-ananke/ananke/blob/main/LICENSE.md) (Hugo) | MIT | 2026-09-26 | OK |
| [Heroicons](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE) | MIT | 2026-05-12 | OK |
| [Lucide](https://github.com/lucide-icons/lucide/blob/main/LICENSE) | ISC + MIT | 2026-11-10 | OK, garder l'avis de copyright |
| [HTML5 UP](https://html5up.net/license) | CC BY 3.0 | page lue le 2026-11-11 | OK **avec crédit obligatoire** |
| [Preline UI](https://github.com/htmlstreamofficial/preline/blob/main/LICENSE) | MIT + « Fair Use License » | 2026-08-21 | Exclu en attendant une décision |
| [Cruip](https://github.com/cruip/tailwind-landing-page-template) | GPL annoncée, aucun fichier LICENSE | 2025-12-12 | Exclu (contradictoire) |
| Tailwind Plus | payante, texte derrière connexion | n/d | Exclu (illisible sans compte) |
| Gabarits « usage personnel » des places de marché | propriétaire | n/d | Exclus par principe |

## Les points sensibles

**MIT.** Fait : l'avis de copyright et le texte de permission doivent accompagner « toutes les copies ou parties substantielles ». Inférence : un bloc recopié dans le site d'un client en est une partie. Lecture prudente : un commentaire HTML court et une page de crédits dans le livrable.

**HTML5 UP.** Fait : CC BY 3.0, usage commercial permis contre un crédit au design, avec lien vers le site et vers la licence. Fait : l'auteur vend des versions sans crédit sur un site séparé.

**Preline.** Fait : la seconde licence interdit tout produit concurrent, vise aussi les générateurs de pages, impose un crédit et réserve un droit de résiliation. Inférence : pour un service qui génère des sites, le risque de lecture « produit concurrent » existe.

**Cruip.** Fait : le README dit GPL, puis interdit de redistribuer ou revendre. Inférence : la GPL interdit d'ajouter cette restriction. Licence incohérente.

## Les actifs inclus

| Actif | Constat | Décision |
|---|---|---|
| Photos liées vers une banque d'images | Licence de la banque, pas MIT | Retirées des blocs |
| Images de place réservée d'un service externe | Service tiers | Retirées |
| Logos de marques dans les gabarits | Marques de commerce de tiers | Exclus |
| Photos d'équipe | Personnes réelles, droits non documentés | Exclues |
| Polices chargées depuis un CDN | Licences OFL en général, mais tiers en ligne | Retirées, polices OFL auto-hébergées à la place |
| Scripts chargés depuis un CDN | Dépendance tierce | Retirés |

## Ce que donne le filtre

Trois sources extraites (HyperUI, Meraki UI, Tailblocks), 159 blocs. Contenu d'origine remplacé par du texte neutre de même longueur, structure intacte. Chaque bloc passé dans notre analyseur de règles à 375, 768 et 1440 px.

| Source | Analysés | Gardés |
|---|---|---|
| HyperUI | 52 | 11 (10 après l'oeil) |
| Meraki UI | 72 | 3 |
| Tailblocks | 35 | 6 |
| **Total** | **159** | **20 (19)** |

Principales raisons de rejet (nombre de blocs) : contraste 66, cible tactile trop petite 44, lignes trop longues 39, mouvement réduit non respecté 36, noms accessibles manquants 30, gouttière 29, espaces hors grille de 4 px 28.

**Inférence, non mesurée** : beaucoup de rejets viennent des couleurs et tailles d'origine. Rejouer le filtre après conversion aux jetons d'une marque en garderait sans doute plus.

Aucun bloc « menu de restaurant » dans les trois sources.

---

**English summary.** Which free website blocks can legally go into a site you sell to a client. We read the licence file in each repository (not the marketing page), recorded the last commit date, and separated code from bundled assets (stock photos, logos, team photos, CDN fonts and scripts), which carry their own terms. MIT sources (HyperUI, Meraki UI, Tailblocks, Flowbite free, daisyUI, shadcn/ui, Untitled UI React free, Start Bootstrap code, AstroWind, Ananke, Heroicons, Lucide) are fine with the copyright notice kept; HTML5 UP needs visible credit (CC BY 3.0); Preline's fair-use licence, Cruip's contradictory terms and paid kits are excluded. Of 159 extracted blocks, 19 passed our design rule analyser and a visual check; contrast and touch target size were the main reasons for rejection.
