# Tendances de design 2026 : le vrai et le bruit

Les listes « tendances 2026 » qui sortent en tête des recherches viennent de vendeurs d'outils de création de sites. Elles se contredisent et ne disent pas ce qui se livre vraiment. On s'appuie plutôt sur ce que publient les équipes produit et sur les palmarès.

| Tendance | Statut | Preuves | Notre lecture |
|---|---|---|---|
| **Interface plus calme**, moins de contraste décoratif | Fait, 3 sources | Linear, [refonte du 12 mars 2026](https://linear.app/changelog/2026-03-12-ui-refresh) : navigation secondaire atténuée, bordures adoucies. NN/g, *State of UX 2026*. Shortcut, [« a calmer, clearer, faster Shortcut »](https://www.shortcut.com/blog/designing-a-calmer-clearer-faster-shortcut). | Va dans le sens de nos [règles maison](../design-web/). |
| **Sites « expérience »** en 3D et récit au défilement | Fait pour les palmarès, pas pour les PME | Site de l'année Awwwards 2025 : lando.com, Webflow + GSAP + WebGL selon [Digidop](https://www.digidop.com/blog/awards-distinctions-digidop-recognized-by-prestigious-organizations). Le chiffre « 61 % des sites du jour en 3D » vient d'un seul billet : non-verifie. | Défilement détourné et parallaxe refusés chez nous. |
| **Verre, Liquid Glass** | Réel chez Apple, risqué sur le web | Critiques de lisibilité : [Frontend Masters](https://frontendmasters.com/blog/liquid-glass-on-the-web/), [Aave Design](https://aave.com/design/building-glass-for-the-web). La réfraction exige un filtre SVG dans `backdrop-filter`, rendu par Chromium seulement. | Marqueur d'IA hors en-tête et fenêtre modale : coûte du contraste. |
| **Bento** | Ancien, saturé | Seulement des listes de vendeurs. Aucune équipe produit ne le revendique en 2026. | Proche des « cartes partout ». |
| **Typographie cinétique** | non-verifie | Aucune preuve propre trouvée dans les palmarès. | Titre géant, mot accentué : marqueurs à éviter. |
| **Shaders à la place des lueurs** | non-verifie (1 source) | Digidop. | Lueur colorée = marqueur d'IA. |
| **Interfaces « natives IA »** | Inférence | Visibles sur les produits d'IA. NN/g parle plutôt de fatigue de l'IA. | Rien de mesuré pour un site de PME. |
| **Sombre ou clair selon l'appareil** | Fait technique | `prefers-color-scheme` est Baseline depuis longtemps, `light-dark()` existe. | Neutre. Ce qu'on évite, c'est le sombre permanent. |
| **Transitions de page** (View Transitions) | Fait, en déploiement | Interop 2026 : [web.dev](https://web.dev/blog/interop-2026), [WebKit](https://webkit.org/blog/17818/announcing-interop-2026/), [Mozilla](https://hacks.mozilla.org/2026/02/launching-interop-2026/), [Microsoft](https://blogs.windows.com/msedgedev/2026/02/12/microsoft-edge-and-interop-2026/). | Oui, si 400 ms au plus et `prefers-reduced-motion` respecté. |
| **Animations liées au défilement en CSS** | Fait | Domaine d'Interop 2026 ; Baseline faible depuis le 27 octobre 2026. | Oui, si aucun contenu n'attend le défilement pour apparaître. |

Voir aussi [design-web/marqueurs-ia.md](../design-web/marqueurs-ia.md).

## Dix sites à étudier

Joignables le 11 novembre 2026. La pile technique vient du HTML brut (marqueurs comme `_next/` ou `framerusercontent`), pas d'une inspection dans un navigateur.

| Site | Pourquoi |
|---|---|
| [linear.app](https://linear.app) | Référence du calme, refonte documentée |
| [Le billet de la refonte Linear](https://linear.app/changelog/2026-03-12-ui-refresh) | Le raisonnement, écrit par l'équipe |
| [vercel.com](https://vercel.com) | Next.js par ses auteurs |
| [stripe.com](https://stripe.com) | Hiérarchie, texte, un bouton fort par écran |
| [apple.com](https://www.apple.com) | Retenue typographique, verre bien dosé |
| [resend.com](https://resend.com) | Sombre maîtrisé |
| [raycast.com](https://raycast.com) | Micro-interactions courtes, vraies démonstrations |
| [rauno.me](https://rauno.me) | Détails d'interaction |
| [lando.com](https://lando.com) | Le maximum « expérience » : à connaître, pas à copier pour une PME |
| [framer.com](https://www.framer.com) | Pour reconnaître le look par défaut des générateurs de sites |

**Limite** : aucun de ces sites n'a été rendu dans un navigateur pour cette recherche. Les verdicts visuels restent à faire.
