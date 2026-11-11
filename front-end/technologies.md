# Technologies : prise en charge mesurée et verdicts

## Comment on a mesuré

Le 11 novembre 2026, deux jeux de données ouverts, lus bruts :

- caniuse, [`data-2.0.json`](https://raw.githubusercontent.com/Fyrd/caniuse/main/fulldata-json/data-2.0.json), mis à jour le 5 novembre 2026. Pourcentage = part mondiale des utilisateurs avec prise en charge complète, partielle entre parenthèses.
- [web-features 3.45.0](https://unpkg.com/web-features@3.45.0/data.json), la source du statut Baseline de web.dev et MDN. « Faible » = dans tous les grands moteurs depuis la date indiquée ; « élevé » = depuis plus de 30 mois.

## CSS

| Fonction | caniuse | Baseline | Apporte | Verdict |
|---|---|---|---|---|
| Container queries | 96,0 % | élevé (fév. 2023) | Un composant s'adapte à sa boîte, pas à l'écran | **Adopter** |
| `:has()` | 96,1 % | élevé (déc. 2023) | Styler un parent selon son contenu. Premier en usage au [State of CSS 2025](https://2025.stateofcss.com/en-US/features/) | **Adopter** |
| Imbrication native | 93,4 % (+1,4) | élevé (déc. 2023) | Moins besoin d'un préprocesseur | **Adopter** |
| `oklch()`, `oklab()` | 95,3 % | élevé (mai 2023) | Couleurs régulières à l'oeil, nuances calculables | **Adopter** |
| `color-mix()` | absent | élevé (mai 2023) | Survol et atténué dérivés d'une seule couleur d'action | **Adopter** |
| Subgrid | 94,7 % | élevé | Cartes alignées entre elles | **Adopter** |
| Polices variables | 97,3 % | élevé | Un fichier pour tous les poids | **Adopter** |
| `text-wrap: balance` | 89,3 % (+4,6) | faible (mai 2024) | Titres sans mot orphelin | **Adopter** sur les titres |
| `text-wrap: pretty` | absent | pas Baseline (pas Firefox) | Paragraphes mieux coupés | **Adopter**, ignoré là où absent |
| `@starting-style` | absent | faible (août 2024) | Animer l'apparition d'une modale sans JS | **Adopter** |
| View Transitions, même document | 93,2 % | faible (14 oct. 2025) | Fondu entre états | **Adopter** |
| View Transitions entre documents | 87,7 % (+1,9) | pas Baseline (pas Firefox) | Transition entre pages | **Essayer** |
| `@scope` | 93,2 % | faible (24 mars 2026) | Styles limités à un bloc | **Attendre**, peu utile avec Tailwind |
| Animations liées au défilement | absent | faible (27 oct. 2026) | Effets au défilement sans JS | **Essayer**, avec `@supports` et sans cacher de contenu |
| Anchor positioning | 2,8 % (85,2 partiel) | pas Baseline | Infobulles attachées sans JS | **Attendre** : le partiel diverge |
| `field-sizing: content` | absent | faible (16 juin 2026) | Zone de texte qui grandit seule | **Adopter** sur les formulaires |
| Popover API | n/d | faible (janv. 2025) | Fenêtres légères accessibles | **Essayer** |
| Invoker commands (`commandfor`) | n/d | faible (déc. 2025) | Bouton qui ouvre un `<dialog>` sans JS | **Essayer** |
| `<select>` personnalisable | n/d | pas Baseline | Liste déroulante stylée native | **Attendre** |
| CSS `if()` | 71,2 % | pas Baseline (Chromium seul) | Conditions dans une valeur | **Éviter** pour l'instant |
| WebGPU | 86,8 % (+3,3) | pas Baseline | 3D et calcul GPU | **Attendre** |

Interop 2026 vise justement anchor positioning, View Transitions entre documents et animations liées au défilement. Ce sont les trois à surveiller.

## Cadres

| Cadre | Fait | Verdict |
|---|---|---|
| Next.js 16 (21 oct. 2025) | Cache Components (`"use cache"`), Turbopack par défaut, React Compiler stable mais optionnel, `proxy.ts` remplace `middleware.ts` ([blogue](https://nextjs.org/blog/next-16)) | **Adopter** Cache Components : coquille statique tout de suite, le dynamique en flux |
| React Compiler 1.0 | Stable depuis oct. 2025, passe par Babel donc build plus lent | **Essayer**, mesurer le temps de build avant et après |
| React 19.2 | `<Activity>`, `useEffectEvent` ; `<ViewTransition>` encore expérimental ([react.dev](https://react.dev/blog/2025/10/01/react-19-2)) | Adopter `useEffectEvent`, attendre `<ViewTransition>` |
| Astro 5 vers 6 | L'équipe rejoint Cloudflare le 16 janv. 2026, licence MIT maintenue ([astro.build](https://astro.build/blog/joining-cloudflare/)) | **Essayer** pour les vitrines statiques : zéro JS par défaut. Mesurer contre Next (poids JS, LCP) |
| SvelteKit, Nuxt, Qwik, Angular | [State of JS 2025](https://2025.stateofjs.com/en-US/libraries) : écosystème qui se stabilise, Vite et Vitest en tête. Chiffres par cadre non relevés : non-verifie | **Éviter** un changement de pile sans gain mesuré |

## Animation

| Outil | Fait | Verdict |
|---|---|---|
| CSS seul | Transitions, `@starting-style`, View Transitions. 0 Ko de JS | **Adopter en premier** |
| Motion (ex-Framer Motion) | Référence React pour gestes et mise en page animée | **Adopter** pour gestes et réordonnancement, pas pour des fondus |
| GSAP 3.13+ | Gratuit avec ses modules depuis le 30 avril 2025 ([GSAP](https://gsap.com/blog/3-13/), [Webflow](https://webflow.com/blog/gsap-becomes-free)). Licence propre, pas MIT : lis [gsap.com/pricing](https://gsap.com/pricing/) | **Essayer** pour une vitrine de marque seulement |
| Lenis (défilement lissé) | Détourne le défilement natif | **Éviter** |
| Rive, Lottie | Non vérifiés en détail | **Essayer** pour une icône animée, jamais pour l'interface |

## 3D

| Outil | Fait | Verdict |
|---|---|---|
| Three.js + React Three Fiber | r186 (8 sept. 2026) ajoute un rendu natif de Gaussian splats ([radiancefields](https://radiancefields.com/three.js-merges-a-native-gaussian-splat-renderer-for-webgpu-in-r186)) | **Essayer** pour des avatars ou une visite réelle. Pas sur une page d'accueil de PME |
| Spark (splats) | Spark 2.x, MIT, WebGL2 ([sparkjs.dev](https://sparkjs.dev/docs/overview/)) | **Essayer**, seulement à partir d'une vraie capture |
| Spline | Éditeur hébergé | **Éviter** en production : dépendance tierce |

## Composants

| Kit | Fait | Verdict |
|---|---|---|
| Tailwind v4 | Configuration en CSS (`@theme`), palette oklch ([blogue](https://tailwindcss.com/blog/tailwindcss-v4)) | **Adopter**. Les jetons de la marque vont dans `@theme` |
| Base UI | Défaut de shadcn/ui depuis juillet 2026, Radix reste pris en charge ([changelog](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)) | **Adopter** pour les nouveaux composants |
| shadcn/ui | Code copié dans le dépôt | **Adopter**, mais changer les valeurs par défaut : le look brut est un marqueur d'IA |
| React Aria | Référence en accessibilité, non revérifiée | **Essayer** pour les composants difficiles |

## Performance

| Sujet | Fait | Verdict |
|---|---|---|
| INP | Remplace FID dans les Core Web Vitals depuis mars 2024. Bon : 200 ms au plus ([web.dev](https://web.dev/articles/inp)) | **Adopter** comme critère chiffré |
| Composants serveur + Cache Components | Moins de JS client, coquille instantanée | **Adopter** |
| Edge d'un tiers | Contraire à l'hébergement au Québec | **Éviter** ; un cache local suffit |

## Synthèse

- **Adopter** : container queries, `:has()`, imbrication, oklch et `color-mix()`, subgrid, `text-wrap`, `@starting-style`, View Transitions même document, `field-sizing`, Cache Components, `@theme`, Base UI, INP, le CSS avant toute bibliothèque d'animation.
- **Essayer, mesurer d'abord** : React Compiler, Astro pour les vitrines, View Transitions entre documents, animations liées au défilement, popover et invoker commands, Motion pour les gestes, splats pour une visite réelle.
- **Attendre** : anchor positioning, WebGPU, `<select>` personnalisable, `@scope`.
- **Éviter** : défilement détourné, verre hors en-tête et modale, bento et cartes partout, CSS `if()`, Spline en production, changer de cadre sans mesure.
