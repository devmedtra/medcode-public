# Réseau, API et courriel

## 19. Lis le corps de la réponse, pas seulement le code HTTP

- **Symptôme** : le journal dit `429`. On lit « trop de requêtes, ça repassera ».
- **Cause** : le code jetait le corps. Le corps disait `insufficient_quota` : compte vide. Ça ne repasserait jamais.
- **Correctif** : journaliser le statut ET le corps (tronqué) de toute réponse en erreur.
- **Leçon** : le même nombre peut cacher deux causes opposées. Celle qu'on affiche par défaut est souvent la rassurante.

## 20. Cloudflare renvoie 403 « error code: 1010 » sans User-Agent

- **Symptôme** : un script serveur reçoit 403 sur une API derrière Cloudflare. On soupçonne le jeton.
- **Cause** : la protection anti-robots refuse les requêtes sans en-tête `User-Agent`. Le jeton était bon.
- **Correctif** : envoyer un `User-Agent` explicite qui nomme ton outil.
- **Leçon** : 1010 parle de la signature du client, pas de l'authentification.

## 21. Une page anti-robots bloque les webhooks d'un fournisseur

- **Symptôme** : des textos entrants perdus pendant des jours. Le fournisseur signale des erreurs de webhook.
- **Cause** : le mode anti-robots du CDN servait sa page de vérification aux serveurs du fournisseur. Sur l'offre gratuite, aucune règle ne pouvait l'exempter.
- **Correctif** : recevoir les webhooks sur un sous-domaine non mandaté par le CDN, limité aux chemins de webhook, avec vérification de la signature du fournisseur.
- **Leçon** : un webhook est appelé par un robot. Toute protection anti-robots doit le laisser passer, et c'est la signature qui le protège.

## 22. Une virgule dans le nom d'expéditeur fait refuser le courriel

- **Symptôme** : `550 5.1.20 Multiple From addresses are not allowed` chez un destinataire Microsoft 365.
- **Cause** : `From: Nom, Société <adresse>` écrit en chaîne brute. La virgule non citée sépare deux adresses.
- **Correctif** : construire l'en-tête avec la bibliothèque. Python : `email.headerregistry.Address("Nom, Société", "local", "domaine")`. Node (nodemailer) : `{ name, address }`.
- **Leçon** : `sendmail` rend 0 même quand le courriel sera refusé plus loin. Lis le journal de livraison après un envoi externe.

## 23. Recherche de numéros par ville : le nom de ville compact

- **Fait observé** (notre usage, nov. 2026) : la recherche de numéros disponibles par localité de Twilio (`InLocality`) a répondu avec la forme compacte du nom, par exemple « Troisrivieres », sans espace, trait d'union ni accent.
- **Inférence** : normaliser le nom (retirer accents, espaces et traits d'union) avant la requête. À revérifier dans la documentation, qui ne le dit pas clairement.
- **Leçon** : quand une API de recherche ne trouve rien, teste les formes du libellé avant de conclure qu'il n'y a pas de résultat.
