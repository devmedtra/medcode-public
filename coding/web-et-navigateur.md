# Web et navigateur

## 7. position: sticky ne colle plus

- **Symptôme** : une barre d'action collante reste à sa place dans la page. Mesuré : bouton à y = 1168 sur un écran haut de 844.
- **Cause** : `html, body { overflow-x: hidden }`. Ça fait de `body` un conteneur de défilement qui ne défile jamais. Le `sticky` colle à lui, donc à rien.
- **Correctif** : `body { overflow-x: clip }`, sous `@supports (overflow: clip)`. `clip` coupe sans créer de conteneur de défilement.
- **Leçon** : un `sticky` inerte ne lève aucune erreur. Remonte les ancêtres et lis leur `overflow` calculé avant de toucher au composant. Même famille : un `backdrop-filter` ou un `transform` sur un parent casse `position: fixed`.

## 8. Une capture headless montre une page plantée qui ne l'est pas

- **Symptôme** : capture d'une page avec une carte MapLibre, en Chrome headless. On voit l'écran d'erreur du site.
- **Cause** : l'option `--disable-gpu` coupe WebGL. La carte ne peut pas créer son contexte, l'error boundary prend le relais. Le site va bien.
- **Correctif** : ne pas passer `--disable-gpu` pour une page WebGL, ou utiliser un rendu logiciel. Lire la console avant de conclure.
- **Leçon** : avant d'annuler un déploiement sur la foi d'une capture, vérifie que l'outil de capture n'est pas la cause.

## 9. L'obfuscation de courriel d'un CDN casse tes coordonnées pour les robots

- **Symptôme** : un audit signale des liens identiques vers des adresses différentes, et un script chargé deux fois.
- **Cause** : l'option « Email Address Obfuscation » de Cloudflare réécrit chaque `mailto:` et injecte un script de décodage. Un robot qui n'exécute pas le JS ne voit plus ton courriel.
- **Correctif** : couper l'option, et protéger l'adresse autrement si besoin.
- **Leçon** : deux constats d'audit différents peuvent avoir une seule cause. Cherche-la avant de corriger deux fois.
