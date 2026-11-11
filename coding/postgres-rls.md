# PostgreSQL et sécurité au niveau des lignes (RLS)

Ces leçons viennent de défauts trouvés puis corrigés. Elles portent sur la RLS de PostgreSQL et valent pour toute base Postgres, y compris derrière PostgREST.

Pour tester une politique sans rien casser : dans une transaction annulée, `set local role authenticated`, poser les claims de l'utilisateur, faire l'opération, puis `rollback`.

## 10. Un UPSERT exige que la ligne soit lisible et modifiable

- **Symptôme** : une création échoue avec un message vague. En base, la ligne parente existe mais pas ses lignes filles.
- **Cause mesurée** : la table avait une politique INSERT et une politique SELECT limitée. Un `insert` simple passait. La même ligne en `insert ... on conflict do update` était refusée : « new row violates row-level security policy ».
- **Correctif** : donner à l'auteur une politique SELECT et UPDATE sur ses propres lignes, ou utiliser `insert`.
- **Leçon** : un upsert, c'est un insert plus un update. Il lui faut les droits des deux.

## 11. La RLS filtre des lignes, pas des colonnes

- **Symptôme** : on veut montrer le nom d'un ami. On ajoute une politique SELECT sur la table des profils.
- **Cause** : le rôle connecté avait le droit SELECT sur toutes les colonnes. La politique ouvrait donc la ligne entière, avec les champs privés.
- **Correctif** : retirer la politique. Exposer une fonction `SECURITY DEFINER`, `STABLE`, avec `search_path` fixé, qui ne rend que les colonnes publiques.
- **Leçon** : avant une politique SELECT sur une table large, lis `information_schema.column_privileges`. Pour exposer quelques champs, une fonction ou une vue dédiée, jamais une politique.

## 12. Les politiques permissives s'additionnent en OU

- **Cause** : les politiques `PERMISSIVE` (le défaut) se combinent en OR. Une seule `USING (true)` annule toutes les politiques strictes à côté.
- **Correctif** : chercher les `USING (true)` avant de croire une table cloisonnée. Utiliser `RESTRICTIVE` pour une condition qui doit toujours tenir.
- **Leçon** : le nom d'une politique peut mentir. Lis son `qual` dans `pg_policies`, jamais seulement son nom.

## 13. Une politique UPDATE dit quelle ligne, pas ce qu'on y écrit

- **Cause** : `for update using (proprietaire = auth.uid())` autorise à réécrire n'importe quelle colonne de cette ligne, même un champ posé par un modérateur.
- **Ce qu'on croyait à tort** : « sans `WITH CHECK`, c'est un trou ». Faux. Postgres réutilise le `USING` sur la nouvelle ligne. Le trou existe seulement sur les colonnes que le `USING` ne contraint pas.
- **Correctif** : `WITH CHECK` si la règle ne regarde que la nouvelle ligne. Droits par colonne (`revoke` au niveau table puis `grant update (col)`) pour des colonnes jamais écrites par l'app. Un déclencheur `before update` quand il faut comparer OLD et NEW.
- **Leçon** : teste le cas négatif. Le chemin normal marche dans tous les cas.

## 14. L'imbrication PostgREST échoue en silence

- **Symptôme** : une liste vide sans erreur visible.
- **Cause** : `table!nom_de_contrainte(...)` se résout par le nom de la clé étrangère, qui doit pointer sur la table imbriquée. Elle pointait ailleurs : erreur `PGRST200`, HTTP 400, et le code ne lisait que `data`.
- **Correctif** : lire `error` à chaque appel. Ou remplacer l'imbrication par une fonction.
- **Leçon** : `const { data } = await ...` sans lire `error` transforme une panne en écran vide.
