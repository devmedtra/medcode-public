# Mobile : React Native et Expo

Chaque leçon suit le même plan : symptôme, cause mesurée, correctif, leçon. Les versions citées sont celles où on l'a vécu (2026).

## 1. La dernière ligne d'un texte disparaît sur iOS 3x

- **Symptôme** : un paragraphe coupé en plein mot, avec un blanc réservé dessous. Seulement loin dans une longue page, seulement sur un écran 3x.
- **Cause mesurée** : l'arrondi du moteur de mise en page Yoga. Il arrondit deux bords séparément. Sur un facteur 3x et à grande coordonnée, la hauteur tombe d'une fraction sous la mesure du texte, et la dernière ligne est jetée. Suivi public : [facebook/yoga#2011](https://github.com/facebook/yoga/pull/2011).
- **Ce qui n'a rien changé** : retirer `lineHeight`. Même coupure, au même mot.
- **Correctif** : `paddingBottom: 0.5` sur le `Text`. Attention, sur un texte qui a déjà `paddingVertical`, `paddingBottom` l'écrase.
- **Leçon** : texte coupé en plein mot + blanc réservé + seulement en 3x = arrondi, pas ton style.

## 2. Un geste qui appelle setState fait planter l'app

- **Symptôme** : l'app se ferme au premier appui long.
- **Cause** : avec react-native-gesture-handler v2, les callbacks `onStart`, `onEnd` tournent en worklet, sur le fil de l'interface. Y appeler une fonction JS ordinaire plante.
- **Correctif** : `Gesture.LongPress().runOnJS(true).onStart(() => setX(true))`. Ou envelopper chaque appel dans `runOnJS(fn)(args)` de Reanimated.
- **Leçon** : dans un callback de geste, demande-toi sur quel fil tu es.

## 3. Le clavier s'ouvre et se referme aussitôt

- **Symptôme** : on touche le champ, le clavier monte puis redescend en 20 ms environ.
- **Cause mesurée** : un banc de test isolant chaque suspect a montré le coupable. Le cadre parent du `TextInput` changeait de bordure ou d'ombre au focus. Ce restyle fait perdre le focus.
- **Correctif** : le conteneur garde un style constant. L'anneau de focus devient une couche sœur, en position absolue, toujours montée, `pointerEvents="none"`. Seule son opacité change.
- **Leçon** : pour isoler un bogue d'interface, construis un banc avec un seul suspect par champ.

## 4. Une fonction de fichier devenue undefined après une mise à jour du SDK

- **Symptôme** : l'envoi de photos et de vocaux échoue avec un message générique « réessaie ».
- **Cause** : depuis Expo SDK 54, `readAsStringAsync` n'est plus exporté par la racine d'`expo-file-system`. L'appel lève une erreur, avalée par un `catch`.
- **Correctif** : importer depuis `expo-file-system/legacy`, ou migrer vers la nouvelle API.
- **Leçon** : un dossier de stockage vide sur une app en production prouve que la fonction n'a jamais marché. Compte les objets avant de chercher plus loin.

## 5. blob.arrayBuffer() n'existe pas en React Native

- **Symptôme** : le bouton de lecture d'un fichier téléchargé ne fait rien.
- **Cause** : le polyfill `Blob` de React Native n'implémente pas `arrayBuffer()`. L'appel lève, le `catch` rend `null`.
- **Correctif** : lire le blob avec `FileReader.readAsDataURL`, puis décoder le base64.
- **Leçon** : une API du web n'est pas garantie dans React Native. Vérifie-la dans le runtime réel.

## 6. Un « ios/ » dans .gitignore retire tes modules natifs du build

- **Symptôme** : une fonction native marche au simulateur, pas dans le build distribué. Aucune erreur.
- **Cause** : la ligne `ios/` (pour le dossier généré) ignorait aussi `modules/*/ios`. Le service de build n'envoie que ce que git suit. Le simulateur, copié sans git, avait les fichiers.
- **Correctif** : ancrer à la racine, `/ios/` et `/android/`. Avant un build, `git ls-files --others --ignored --exclude-standard -- modules` doit être vide.
- **Leçon** : vérifie ce que contient le binaire livré (`strings` sur l'exécutable), pas ce que contient ton dossier.
