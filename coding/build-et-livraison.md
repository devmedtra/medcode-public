# Build et livraison

## 15. Metro rend undefined pour un import manquant

- **Symptôme** : après une mise à jour à distance, un écran plante au premier accès : `cannot read property 'x' of undefined`.
- **Cause mesurée** : l'écran neuf importait trois fonctions qui n'existaient pas encore dans la version empaquetée de deux fichiers. Metro ne refuse pas un import nommé manquant. Il rend `undefined`.
- **Ce qui l'aurait dit** : `tsc` sur l'arbre réellement empaqueté. Il donnait 11 erreurs, dont les trois imports. Il avait tourné sur une autre copie, où les fichiers étaient à jour.
- **Correctif** : une seule porte de publication, qui vérifie que l'arbre empaqueté est identique au dépôt (empreinte) et lance `tsc` dessus.
- **Leçon** : un contrôle qui ne tourne pas sur ce que tu livres ne contrôle rien.

## 16. git add -A dossier embarque les fichiers neufs d'un autre

- **Cause** : `git add -A app lib` ajoute les fichiers modifiés et les fichiers non suivis. Exclure le fichier modifié d'un collègue ne protège pas de ses fichiers neufs.
- **Correctif** : `git add` avec la liste exacte de tes fichiers. Avant de committer, `git diff --cached --name-status` ne doit montrer que les tiens.
- **Leçon** : sur un dépôt partagé par plusieurs personnes ou agents, jamais de `-A`.

## 17. Une dépendance neuve absente de la machine de build

- **Symptôme** : `PluginError: Failed to resolve plugin for module`.
- **Cause** : le script de publication copiait les sources sur la machine de build, sans `node_modules`. La dépendance ajoutée n'y existait pas.
- **Correctif** : `npm ci` sur la machine de build dès que le lockfile change.
- **Leçon** : une erreur de plugin juste après un ajout de dépendance, c'est d'abord une installation manquante.

## 18. Plusieurs vérifications de types en parallèle font tomber le serveur

- **Cause** : chaque `tsc --noEmit` d'un gros projet prend 1 à 1,5 Go. Cinq lancés en arrière-plan sur une machine partagée ont épuisé la mémoire.
- **Correctif** : une vérification lourde à la fois, au premier plan. Grouper les éditions, vérifier une fois. Mieux : les builds et contrôles lourds sur une machine dédiée.
- **Leçon** : une tâche lancée en arrière-plan ne disparaît pas. Elle s'empile.
