# Méthode et résultats mesurés

Prototype du 11 novembre 2026. Le chemin « externe » aboutit à un faux serveur qui écrit mot pour mot ce qu'il reçoit. C'est ce fichier qui dit ce qui serait sorti. Aucun appel réel à un fournisseur d'IA.

## Ce que fait la passerelle

1. Elle **masque** : chaque renseignement devient un pseudonyme stable dans la requête (`[PERSONNE_1]`, `[COURRIEL_1]`). La réponse du modèle est **restaurée** avec la table de correspondance, qui ne quitte jamais la passerelle.
2. Elle **route** selon ce qu'elle trouve :
   - un secret (clé, mot de passe), ou un doute de secret : **bloqué**, rien ne part ;
   - un renseignement de santé ou financier sensible : **local seulement**, vers un modèle qui tourne dans notre périmètre ; s'il n'est pas prêt, bloqué ;
   - le reste : **externe**, texte masqué.
3. Elle **journalise** sans contenu : qui, quand, combien d'entités par type, quelle route, et une empreinte HMAC du texte. Jamais le texte en clair.

Les détecteurs combinent des briques libres ([Microsoft Presidio](https://github.com/microsoft/presidio), modèles spaCy français et anglais, [GLiNER](https://github.com/urchade/GLiNER) multilingue) et des règles écrites pour le Québec : NAS, NAM, NEQ, licence RBQ, code postal, adresses, établissements de santé.

## La méthode, dans l'ordre

1. **Critères chiffrés écrits avant le code**, dans un fichier à part. Exemple : « zéro texte de santé reçu par le serveur externe ».
2. **Corpus 100 % synthétique.** Noms courants combinés au hasard, numéros fabriqués valides en format. Aucune donnée réelle.
3. **Corpus de réglage et corpus tenu à l'écart, séparés.** Le premier sert à corriger. Le second sert une fois, à la fin.
4. **Le corpus tenu à l'écart est figé dans un commit avant de toucher aux détecteurs**, avec son empreinte SHA-256 notée. On peut prouver qu'il n'a pas bougé.
5. **Un seul passage final**, chiffres publiés tels quels, sans réglage après.
6. **Un échec ne se corrige pas sur le même corpus.** Corriger les cas vus le rendrait inutile pour mesurer. Il faut un nouveau corpus tenu à l'écart.
7. **Second avis.** Un conseil de plusieurs modèles d'IA (sécurité, attaque) propose des attaques. Ce sont des hypothèses : chacune a été jouée contre le vrai proxy avant d'en tirer quoi que ce soit.

C'est la même logique que l'évaluation en apprentissage automatique : un jeu de test qu'on ne voit pas pendant le réglage.

## Version 1 : le piège du 100 %

Corpus de réglage : 319 textes générés (220 généraux, 84 santé, 15 sans renseignement). Deux configurations : **A** (règles et Presidio) et **B** (A plus GLiNER).

| Mesure | A | B |
|---|---|---|
| Rappel des types structurés (courriel, téléphone, NAS, carte, IBAN, NAM...) | 100 % | 100 % |
| Rappel PERSONNE | 89,2 % | 100 % |
| Rappel MEDICAMENT | 69,0 % | 97,6 % |
| Précision globale | 99,0 % | 98,7 % |
| Restauration exacte | 100 % | 100 % |
| Textes santé reçus par l'externe | 0 | 0 |
| Latence du proxy, p95 | 12 ms | 109 ms |

Puis 28 textes écrits à la main **après** le réglage, avec d'autres tournures :

| Mesure | A | B |
|---|---|---|
| Fuites vers l'externe | 8 | 5 |
| Textes santé vers l'externe | 1 | 0 |
| Textes avec secret vers l'externe | 1 | 1 |
| Rappel MEDICAMENT | 37,5 % | 75,0 % |

**Fait** : un mot de passe est sorti. Les 100 % du corpus de réglage étaient optimistes. C'est ce qui a imposé la méthode stricte des versions 2 et 3.

## Version 2 : premier corpus figé

Critères D1 à D11 écrits avant le corpus. Corpus tenu à l'écart : 350 textes (190 généraux, 120 santé, 40 neutres), figé avant toute correction. Configuration B.

| Critère | Seuil | Mesuré | Verdict |
|---|---|---|---|
| D1 textes avec secret vers l'externe | 0 | 0 sur 86 | passe |
| D2 textes santé vers l'externe | 0 | 0 sur 120 | passe |
| D3 valeurs structurées vers l'externe | 0 | 10 | échoue |
| D4 rappel structurés et secrets | ≥ 95 % chacun | courriel 91,5, téléphone 75,0, carte 60,0 | échoue (3 types) |
| D5 rappel personne, adresse, santé | ≥ 85 % chacun | date de naissance 4,3 | échoue (1 type) |
| D6 textes neutres avec détection | ≤ 10 % | 12,5 % | échoue |
| D7 textes neutres bloqués | ≤ 5 % | 0 % | passe |
| D8 restauration exacte | 100 % | 100 % | passe |
| D9 restauration de marqueurs déformés par le modèle | ≥ 99 % | 90,3 % sur une forme | échoue |
| D10 latence proxy p95 | ≤ 500 ms | 116 ms | passe |
| D11 injection de faux marqueurs | 0 cas | 0 | passe |

Bilan : **6 critères sur 11**. Les deux critères durs (secrets, santé) passent. La politique prudente a un coût : 92 des 190 textes généraux bloqués, dont 86 contenaient vraiment un secret.

## Version 3 : deuxième corpus figé

Corpus neuf de 372 textes (200 généraux, 130 santé, 42 neutres), figé avant les corrections. Corrections réglées sur un autre jeu. Un passage.

| Critère | Seuil | Mesuré | Verdict |
|---|---|---|---|
| D1 textes avec secret vers l'externe | 0 | **2 sur 43** | échoue |
| D2 textes santé vers l'externe | 0 | 0 sur 130 | passe |
| D3 valeurs structurées vers l'externe | 0 | 5 courriels | échoue |
| D4 rappel structurés et secrets | ≥ 95 % | mot de passe 92,9, courriel 76,7 ; les autres 95 à 100 | échoue (2 types) |
| D5 rappel personne, adresse, santé | ≥ 85 % | tous entre 93,2 et 100 | passe |
| D6 textes neutres avec détection | ≤ 10 % | 0 % | passe |
| D7 textes neutres bloqués | ≤ 5 % | 0 % | passe |
| D8 restauration exacte | 100 % | 100 % | passe |
| D9 marqueurs déformés | ≥ 99 % | 92,1 % sur une forme | échoue |
| D10 latence proxy p95 | ≤ 500 ms | 123 ms | passe |
| D11 injection | 0 | 0 | passe |

Bilan : **7 critères sur 11**. Les attaques proposées par le conseil d'IA : 0 fuite sur 19.

**Fait** : un critère dur a régressé. Le défaut est de conception, pas un motif manquant : une règle écrite pour éviter une fausse alerte excluait une famille de valeurs qui pouvaient être des secrets. Les courriels qui sortent sont des formes déguisées que le détecteur ne prévoyait pas.

## Ce qu'on retient

- Le corpus de réglage ment toujours dans le même sens. Il faut un corpus tenu à l'écart, figé, et un passage unique.
- Une règle qui évite une fausse alerte peut créer une fuite. Toute exclusion se teste contre les critères durs.
- Les détecteurs par motifs ne voient que ce qu'ils connaissent. Un modèle multilingue généralise mieux, au prix de faux positifs et d'environ 80 ms par requête sur processeur.
- Le modèle externe peut déformer un pseudonyme (espaces, casse, crochets retirés). La restauration doit le tolérer, et ne remplacer que les marqueurs émis par cette requête.
- Le journal d'audit est lui-même sensible : compter les entités de santé par personne et par heure révèle quelque chose. Il se protège comme une donnée de santé. **Inférence.**

## Limites honnêtes

- Nous avons écrit les corpus nous-mêmes. Ils reflètent ce que nous imaginons, pas des textes réels.
- La règle « doute = bloquer » rend la passerelle sûre, mais moins utile.
- Pas de flux en continu, pas d'OCR local des images dans ce prototype.
- Le chemin local envoie le texte original à un modèle local : cette machine doit rester dans le périmètre de confiance.

Prochaine étape : un quatrième corpus tenu à l'écart, écrit par quelqu'un d'autre que l'auteur des détecteurs.
