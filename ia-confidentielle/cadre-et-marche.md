# Cadre légal, fournisseurs et briques libres

Recherche web du 11 novembre 2026. Aucun avis juridique. Presque tout ici est **non-verifie** : une page officielle d'un fournisseur est fiable pour ses propres conditions, mais elle reste une seule source. Relis chaque page avant une décision.

## Québec : santé

**Vérifié (5 sources)** : la Loi sur les renseignements de santé et de services sociaux, en vigueur depuis le 1er juillet 2024, n'interdit pas la communication hors Québec. Elle exige une évaluation des facteurs relatifs à la vie privée (EFVP) qui démontre une protection adéquate là où les données vont.
Sources : [Fasken](https://www.fasken.com/fr/knowledge/2024/07/loi-sur-les-renseignements-de-sante-et-de-services-sociaux), [Blakes](https://www.blakes.com/fr-ca/perspectives/quebec-une-loi-exhaustive-sur-la-protection-des-renseignements-de-sante-entre-en-vigueur/), [Torys](https://www.torys.com/fr-ca/our-latest-thinking/publications/2024/07/la-nouvelle-loi-quebecoise-sur-la-protection-des-renseignements-de-sante-personnels), [Gowling](https://gowlingwlg.com/fr/insights-resources/articles/2024/quebec-health-information-act), [Québec.ca](https://www.quebec.ca/nouvelles/actualites/details/entree-en-vigueur-loi-renseignements-sante-services-sociaux-57074).

**Inférence** : envoyer un renseignement de santé à un modèle hors Québec est possible, après EFVP et entente écrite, et l'organisme reste responsable. Si le texte est vraiment dépersonnalisé avant l'envoi, la question devient la qualité de la dépersonnalisation. D'où la méthode de mesure de [methode-et-resultats.md](methode-et-resultats.md).

**non-verifie** :
- Certification des produits technologiques du réseau de la santé : [Québec.ca](https://www.quebec.ca/sante/professionnels/certification-produits-services-technologiques/a-propos) (2 sources officielles).
- Directive MSSS sur le recours à l'infonuagique (2022) : citée par d'autres documents, texte intégral non lu.
- La CAI n'a pas de guide propre à l'IA générative pour les entreprises que nous ayons trouvé. Elle a publié un [rapport d'enquête sur OpenAI](https://www.cai.gouv.qc.ca/uploads/pdfs/CAI_CO_2026-05-06_OpenAI.pdf) (mai 2026), non lu en détail.
- Le format exact du NAM : aucune page de la RAMQ lue ne le décrit en entier. Un détecteur ne doit pas se fier au seul gabarit, mais aussi au contexte.

## Québec : renseignements personnels en général

**non-verifie** (2 sources) : l'article 17 de la [loi sur le privé](https://www.legisquebec.gouv.qc.ca/fr/document/lc/P-39.1) n'interdit pas la communication hors Québec. Il exige une EFVP et une entente écrite.

**Hypothèse** (à valider avec un juriste) : le journal d'une passerelle pourrait soutenir l'EFVP s'il montre qui a envoyé quoi, vers quel fournisseur et quelle région, quelles catégories ont été masquées ou bloquées, sous quelle version des règles, sans garder le contenu.

## États-Unis : HIPAA

**Vérifié sur le principe, sources secondaires** : 45 CFR 164.514 prévoit deux méthodes de dépersonnalisation, *Safe Harbor* (retirer 18 catégories d'identifiants) et *Expert Determination*. **Inférence** : Safe Harbor est une liste américaine. Le NAM et les numéros de dossier québécois n'y figurent que comme « autre numéro unique ».

## Fournisseurs d'IA : rétention et région

Tous **non-verifie**, une source officielle chacun.

| Fournisseur | Ce qu'on a lu |
|---|---|
| Anthropic API | Pas d'entraînement sans permission expresse. Contenu non retenu par défaut, sauf certains modèles avec 30 jours. Rétention zéro sur demande aux ventes. [Doc](https://platform.claude.com/docs/en/manage-claude/api-and-data-retention) |
| OpenAI API | Journaux anti-abus jusqu'à 30 jours. Rétention zéro sur approbation préalable. [Doc](https://developers.openai.com/api/docs/guides/your-data) |
| Amazon Bedrock | Ne stocke pas les requêtes. Au Canada, les modèles Claude lus sont offerts par profil géographique ou mondial, aucun « dans la région ». [Doc](https://docs.aws.amazon.com/bedrock/latest/userguide/models-region-compatibility.html) |
| Azure OpenAI | Un déploiement « Global » peut traiter n'importe où. Aucune zone de données canadienne trouvée. [Doc](https://learn.microsoft.com/azure/ai-services/openai/how-to/deployment-types) |
| Vertex AI | Montréal sert de lieu de traitement pour certains modèles Gemini. [Doc](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/data-residency) |

**Inférence** : aucun des trois grands nuages n'a été confirmé, par une source officielle lue, comme traitant un modèle Claude de pointe entièrement au Canada. La doc Bedrock dit elle-même de vérifier les régions de destination d'un profil plutôt que de se fier à son préfixe.

## Briques libres

| Brique | Établi | Statut |
|---|---|---|
| Microsoft Presidio | Cadre de détection (règles et reconnaissance d'entités), moteur remplaçable | non-verifie hors anglais |
| GLiNER multilingue (PII) | Couvre le français ; [papier des auteurs](https://arxiv.org/pdf/2605.09973) : bon rappel, tend à sur-prédire les noms | non-verifie (auteurs juges et parties) |
| [LiteLLM](https://docs.litellm.ai/docs/tutorials/presidio_pii_masking) | Branche Presidio comme garde-fou avant ou après l'appel | non-verifie |
| [Philter](https://github.com/philterd/philter) | Apache 2.0 depuis 2.6.0 | non-verifie pour le français |
| [Synthea](https://github.com/synthetichealth/synthea/wiki) | Données de santé synthétiques, logiciel Apache-2.0 | non-verifie pour le Québec |

**Inférence** : aucun banc public n'existe, à notre connaissance, pour le français du Québec ni pour le NAM. La détection en français est le maillon faible des outils libres.

## Recherche sur le masquer-puis-restaurer

- Perte d'utilité : un texte pseudonymisé fait baisser les scores des modèles sur des bancs de connaissances ([arXiv 2609.11335](https://arxiv.org/abs/2609.11335)). non-verifie, papier non relu en entier.
- Réidentification : des spans masqués peuvent être reconstruits par recherche et complétion ([arXiv 2505.12859](https://arxiv.org/abs/2505.12859)).
- Substituts plausibles plutôt que suppression ([arXiv 2412.12928](https://arxiv.org/abs/2412.12928)).

## Marché

**non-verifie**, sources d'agrégateurs : plusieurs passerelles indépendantes ont été acquises par de grandes suites de sécurité américaines en 2025 et 2026. **Hypothèse** : une offre hébergée au Québec, mesurée sur du français québécois, s'en distinguerait.
