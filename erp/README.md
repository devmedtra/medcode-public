# Logiciel de gestion pour PME du Québec : marché et obligations

Recherche web du 11 novembre 2026, avant tout code. Passe courte : la plupart des points ont une à trois sources et restent **non-verifie**. Plusieurs pages officielles de Revenu Québec ont refusé l'accès au robot : à relire à la main. Rien de ceci n'est un avis fiscal.

Légende : **fait** (lu dans une source) · **inférence** · **non-verifie** (moins de cinq sources indépendantes).

## Le marché

| Produit | Prix observé le 11 nov. 2026 | Source | Statut |
|---|---|---|---|
| Sage 50 2026, édition de base | 693,99 $ par an, 1 utilisateur | [Staples](https://www.staples.ca/products/3140372-en-sage-50-2026-pro-accounting-canada-pro-csrt-1-user-1-year-subscription) | non-verifie (1 source) |
| Sage 50 2026 Premium | 1 038,99 $ par an, 2 utilisateurs | [Staples](https://www.staples.ca/products/3144561-en-sage-50-2026-premium-accounting-canada-csrt-2-users-1-year-subscription-digital-download) | non-verifie (1 source) |
| Odoo Standard / Custom | environ 44 / 69 $ CA par utilisateur et par mois, annuel | [oec.sh](https://oec.sh/odoo-pricing/canada), [Octura](https://octurasolutions.com/resources/odoo-pricing-2026-complete-transparent-breakdown-us-canada) | sources tierces, non-verifie |
| QuickBooks Online, Acomba, Maestro, Business Central, Zoho, ERPNext | non obtenus | n/d | non-verifie |

- **Fait** : certaines fonctions d'IA de Sage 50 2026 exigent un abonnement infonuagique ([notes de version](https://docs.sage.com/docs/fr/customer/50ca/2026/open/WhatsNew_2026.0_fr-ca.pdf)).
- **Inférence** : le bas de gamme est saturé et bon marché. Un logiciel générique de plus n'y gagne pas sur le prix.

## Obligations québécoises

- **TPS 5 %, TVQ 9,975 %.** À reconfirmer sur [Revenu Québec](https://www.revenuquebec.ca/fr/entreprises/taxes/tpstvh-et-tvq/perception-de-la-tps-et-de-la-tvq/preparation-des-factures/) et l'[ARC](https://www.canada.ca/fr/agence-revenu/services/impot/entreprises/sujets/tps-tvh-entreprises/facture-percevoir-recus.html).
- **Mentions sur la facture selon le montant.** Fait : l'ARC distingue moins de 30 $, de 30 $ à moins de 150 $, et 150 $ ou plus ([publication de 2012](https://publications.gc.ca/collections/collection_2017/arc-cra/Rv3-2-8-4-2012-fra.pdf)). Seuils actuels : non-verifie.
- **Facturation obligatoire (SEV, MEV).** Fait : restauration, bars, et transport rémunéré de personnes ; SEV de deuxième génération obligatoire depuis le 1er janvier 2026 pour le taxi ([Revenu Québec, transport](https://www.revenuquebec.ca/fr/entreprises/mesures-particulieres/facturation-obligatoire/transport-remunere-de-personnes-facturation-obligatoire/), [équipement requis](https://www.revenuquebec.ca/fr/entreprises/mesures-particulieres/facturation-obligatoire/equipement-requis-facturation-obligatoire/), [FCEI](https://www.cfib-fcei.ca/fr/site/qc-mev-web)). Construction : rien trouvé, non-verifie. **Inférence** : un SEV exige une certification de Revenu Québec. Ce n'est pas un premier produit.
- **Paie** (RL-1, T4, CNESST, RQAP, RRQ). Inférence : lourd et réglementé. Fait : certains services de paie québécois offrent un connecteur d'API activable par le client, mais leur guide d'API n'est pas public. Fait : Revenu Québec mène une [consultation](https://consultation.quebec.ca/processes/rq-paie-electronique/f/292/) sur l'administration des retenues à la source.
- **Facture électronique.** Fait : aucun mandat fédéral entre entreprises connu, Peppol volontaire depuis 2023. Sources surtout d'éditeurs : [EY, août 2026](https://www.ey.com/content/dam/ey-unified-site/ey-com/en-gl/technical/tax-guides/documents/ey-gl-e-invoicing-developments-tracker-08-2026.pdf), [Comarch](https://www.comarch.com/trade-and-services/data-management/legal-regulation-changes/canada-and-e-invoicing-why-the-time-to-prepare-is-now/), [Edicom](https://edicomgroup.com/blog/electronic-invoicing-in-canada).
- **Charte de la langue française (loi 96).** Fait : l'employeur doit offrir la version française d'un logiciel si elle existe ([Fasken](https://www.fasken.com/fr/knowledge/projet-de-loi-96/faq-pl96-comment-faire-affaire-au-quebec), [FCEI](https://www.cfib-fcei.ca/fr/site/qc-loi-14-projet-de-loi-96), [Berlitz](https://www.berlitz.com/fr-ca/blog/conformite-travail-quebec-loi-96)). Les seuils d'employés diffèrent selon les sources : non-verifie, lire l'OQLF.
- **Loi 25** et **NCECF** (normes comptables des entreprises à capital fermé) : non recherchées dans cette passe. non-verifie.

## Santé : ce qui est déjà pris

- **Fait** : des logiciels de gestion de clinique avec facturation RAMQ existent et sont certifiés par le MSSS ([tableau des certifications](https://ti.msss.gouv.qc.ca/getdoc/50fd395f-d983-4f12-973a-a2269b5e35ff/Tableau-des-certifications-obtenues---Nouvelle-ver.aspx), [liste MSSS](https://msss.gouv.qc.ca/professionnels/documents/technologies-information/certification-produits-services/Liste-pst.pdf)).
- **Fait** : des services de facturation RAMQ se branchent sur les dossiers médicaux électroniques existants.
- **Inférence** : le dossier clinique et la facturation RAMQ exigent une certification MSSS. Ce n'est pas un terrain pour un nouvel arrivant.

## Briques libres

- **Fait** : AG Grid Community est gratuite ; l'édition Enterprise est payante par développeur ([tarifs](https://ag-grid.com/license-pricing/)).
- **Fait** : Angular 21 est sorti le 20 novembre 2025 : sans zone.js par défaut, signaux au centre, Vitest ([InfoQ](https://www.infoq.com/news/2025/11/angular-21-released), [SD Times](https://sdtimes.com/softwaredev/angular-v21-released-with-experimental-signal-forms/)).
- **Inférence, à vérifier** : une comptabilité en partie double se modélise avec des écritures en ajout seul, une contrainte « somme nulle » par écriture et des périodes verrouillables, comme le font les logiciels libres de ce domaine.

## Pour passer à vérifié

Lire à la main : Revenu Québec (factures, secteurs visés), OQLF, CAI (Loi 25), CPA Canada (NCECF), prix officiels des concurrents, une vingtaine d'avis clients par concurrent.

---

**English summary.** Early market and compliance research for small-business management software in Quebec, mostly unverified (one to three sources per point). Observed prices for Sage 50 and Odoo in Canada; Quebec obligations: GST 5 % and QST 9.975 %, invoice disclosure tiers by amount, mandatory sales recording modules for restaurants, bars and paid passenger transport (second generation required for taxis since 1 Jan 2026), payroll complexity, voluntary e-invoicing (no federal B2B mandate found), and the French language charter requiring French versions of workplace software when they exist. Clinical records and RAMQ billing require Ministry of Health certification.
