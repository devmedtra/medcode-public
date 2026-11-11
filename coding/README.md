# Coding : problèmes et résolutions

34 leçons tirées de vrais défauts, trouvés et corrigés en 2026. Chacune suit le même plan : symptôme, cause mesurée, correctif, leçon.

Ce sont des leçons générales. Les noms de nos fichiers, serveurs et comptes en sont retirés.

| Fichier | Sujet | Leçons |
|---|---|---|
| [mobile-react-native.md](mobile-react-native.md) | React Native, Expo, iOS | 1 à 6 |
| [web-et-navigateur.md](web-et-navigateur.md) | CSS, capture headless, CDN | 7 à 9 |
| [postgres-rls.md](postgres-rls.md) | PostgreSQL, RLS, PostgREST | 10 à 14 |
| [build-et-livraison.md](build-et-livraison.md) | Metro, git, builds | 15 à 18 |
| [reseau-api-courriel.md](reseau-api-courriel.md) | HTTP, CDN, webhooks, courriel | 19 à 23 |
| [diagnostic-et-methode.md](diagnostic-et-methode.md) | Comment chercher | 24 à 34 |

## La méthode derrière ces leçons

1. Écrire le critère de réussite, chiffré, avant de toucher au code.
2. Mesurer l'état actuel. La mesure nomme le défaut, l'oeil ne fait que le soupçonner.
3. Un inconnu se calcule ou se lit dans la doc. Il ne se devine pas en inversant un signe « pour voir ».
4. Remesurer après. Deux résultats identiques après deux corrections : le changement n'atteint pas la sortie.
5. Vérifier l'instrument avant le sujet.

Tu as vécu un de ces pièges autrement ? Ouvre une issue.

---

**English summary.** 34 real bugs we hit and fixed in 2026, written as generic lessons (symptom, measured cause, fix, lesson): React Native and Expo on iOS, CSS sticky and headless capture, PostgreSQL row-level security, build pipelines, HTTP and email, and debugging method (constant delays are timeouts, check the instrument first, calibrate thresholds on two anchors).
