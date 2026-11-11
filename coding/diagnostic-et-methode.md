# Diagnostic et méthode

Les leçons les plus utiles ne parlent pas d'une technologie. Elles parlent de la façon de chercher.

## 24. Un délai constant, c'est un timeout

- **Symptôme** : une connexion d'appel prend 6,1 s, 6,2 s, 5,5 s d'un côté, 12,4 s de l'autre. À chaque fois, quel que soit le réseau.
- **Ce qui a été réfuté** : quatre hypothèses de « coût » (relais, session audio, négociation, intégration système).
- **Cause** : une constante de 2 s dans une dépendance native, attendue 3 fois, sur 2 cycles. Le côté qui devait répondre n'était branché que sur un autre écran.
- **Leçon** : un coût varie avec les conditions, un timeout non. Si une mesure se répète à 5 % près et se factorise en N x C, cherche la constante (`timeout`, `deadline`, `sleep`) dans le code des dépendances.

## 25. 'Idle_Loop' in 'Crouch_Idle_Loop' est vrai

- **Symptôme** : un outil de mesure donne des conclusions fausses sur une animation.
- **Cause** : la sélection par sous-chaîne prenait la mauvaise animation. Le même bogue venait d'être corrigé ailleurs.
- **Correctif** : comparer des noms exacts, ou une expression ancrée.
- **Leçon** : vérifie l'instrument avant le sujet. Deux entrées différentes qui donnent la même valeur, c'est l'instrument qui est cassé.

## 26. pgrep -f se trouve lui-même

- **Symptôme** : un chien de garde `pgrep -f motif || relancer` ne relance jamais.
- **Cause** : la commande du chien de garde contient le motif. `pgrep` la trouve et conclut que le service tourne.
- **Correctif** : `pgrep -f "[m]otif"`. L'expression correspond au service, pas au texte littéral `[m]otif`.
- **Leçon** : un chien de garde se teste en tuant ce qu'il garde, jamais en le relisant.

## 27. Un cache de sortie calculée rend tes améliorations invisibles

- **Symptôme** : on améliore un calcul, on déploie, la réponse est identique mot pour mot. Deux fois.
- **Cause** : le cache gardait le résultat calculé, pas la donnée brute, pour 7 jours. Le premier test avait remis l'ancienne réponse en cache.
- **Correctif** : mettre la version du calcul dans la clé du cache.
- **Leçon** : deux résultats identiques après deux corrections, c'est que ton changement n'atteint pas la sortie. Vérifie la fraîcheur avant le fond.

## 28. Un seuil se calibre sur deux ancres mesurées

- **Symptôme** : 67 % d'une vidéo déclarés « figés ». Un diff de pixels montre que la zone bouge plus que la référence jugée bonne.
- **Cause** : un seuil choisi au hasard, sur une métrique dont on ne connaissait pas le zéro.
- **Correctif** : mesurer un plancher (un cas sûrement mauvais) et un référent (un cas jugé bon), puis placer le seuil entre les deux.
- **Leçon** : un seuil sans ancre invente le défaut, ou le cache.

## 29. Une valeur absurde doit tout arrêter

- **Exemples** : un rayon de 187 cm sur un personnage de 1,7 m. Un outil qui compte 43 781 bords, un autre 2 986 sur le même objet. Un ratio de 4,8 pour « réduire ».
- **Leçon** : avant d'interpréter un nombre, compare-le à l'échelle du sujet. Une valeur absurde invalide l'instrument ou l'hypothèse. Continuer à corriger le sujet fait perdre des heures.

## 30. Une alerte sans plafond devient du bruit

- **Symptôme** : la même notification toutes les 5 minutes, pour toujours.
- **Cause** : la tâche planifiée relançait toute demande en attente à chaque passage, sans limite de nombre ni d'âge.
- **Correctif** : un compteur et une date de dernière relance, une limite (par exemple 6 essais, 15 minutes d'écart), et l'incrément écrit avant l'envoi.
- **Leçon** : toute relance automatique a un plafond et une fin annoncée. Et un statut « indisponible » que l'envoi ignore est décoratif.

## 31. Un chemin relatif peut lancer une recherche sur tout le disque

- **Symptôme** : un serveur ne répond plus pendant 20 minutes.
- **Cause** : un `cd` qui ne persistait pas entre deux commandes de l'outil. Le fichier relatif n'existait pas, et l'outil de recherche est reparti en récursif sur 171 Go.
- **Correctif** : des chemins absolus partout dans les commandes automatisées.
- **Leçon** : pour diagnostiquer une machine qui bloque, `ps aux --sort=-rss | head` puis `vmstat 1 5`, avant toute hypothèse.

## 32. Ne fais pas traverser un script par une ligne de commande

- **Symptôme** : des commandes cassées à répétition sur des guillemets.
- **Cause** : trois niveaux d'échappement (shell local, shell distant, interpréteur). Chaque apostrophe française casse un niveau.
- **Correctif** : écrire le script dans un fichier, le copier, l'exécuter.
- **Leçon** : un correctif d'échappement qui marche aujourd'hui recassera demain. Le fichier, non.

## 33. Un modèle de vision invente ce qui est rogné

- **Symptôme** : une photo d'étiquette nutritionnelle donne des valeurs impossibles et une portion « (40 g) » qui n'est pas sur l'image.
- **Cause** : le modèle complète de mémoire ce qui est coupé. Deux modèles différents l'ont fait.
- **Correctif** : le modèle recopie seulement (texte, valeurs ligne par ligne). Le serveur calcule, convertit et vérifie les bornes. Une valeur non confirmée par une autre source est marquée comme telle.
- **Leçon** : demande à un modèle de lire, jamais de calculer ni de deviner ce qui manque.

## 34. Un catch qui avale l'erreur ment à l'utilisateur

- **Symptôme** : « Réessaie dans un moment », alors que ça ne marchera jamais.
- **Cause** : plusieurs cas plus haut (fonction disparue, politique refusée, quota vide) étaient cachés par un `catch` qui rendait un message générique.
- **Correctif** : journaliser la vraie erreur, et distinguer un refus définitif d'un incident passager.
- **Leçon** : un refus définitif déguisé en incident passager fait attendre pour rien.
