# Ce que l'IA fait par défaut : les marqueurs à éviter

Recherche du 11 novembre 2026. Question de départ : qu'est-ce qui fait qu'un site « a l'air fait par une IA » ?

## Ce qu'on a appris

- **Fait** : les fournisseurs le disent eux-mêmes. Anthropic ([Prompting for frontend aesthetics](https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics), oct. 2025) et OpenAI ([Designing delightful frontends](https://developers.openai.com/blog/designing-delightful-frontends-with-gpt-5-4), 2026) décrivent les défauts de leurs modèles : Inter, violet sur blanc, cartes partout.
- **Fait** : Adrian Krebs a compté ces marqueurs sur 1 590 pages Show HN ([design-slop](https://adriankrebs.ch/blog/design-slop/), avr. 2026). 22 % en ont 4 ou plus.
- **Inférence** : le problème n'est pas un élément. C'est l'accumulation de choix par défaut. Une page humaine en a 0 ou 1.
- **Fait observé par trois sources** : interdire un défaut fait passer le modèle au suivant. Interdire le violet amène une autre couleur « probable ». Une liste figée de bonnes valeurs ne suffit pas. Il faut que les choix viennent du client : ses photos, sa palette, son métier.

## Le catalogue (en résumé)

**Couleur.** Violet ou indigo comme couleur d'action. Dégradé violet vers bleu ou rose. Fond sombre permanent avec texte gris moyen. Plusieurs couleurs saturées qui se battent. Noir et blanc purs.

**Typographie.** Inter, Roboto ou police système partout. Un mot du titre en italique, en serif ou en dégradé. Titre peint en dégradé. Titre géant sur plusieurs lignes. Petite étiquette en majuscules espacées au-dessus des titres. Étiquettes en monospace décoratives.

**Mise en page.** Haut de page centré en pile : pastille, titre, sous-titre gris, deux boutons. Haut de page de 100vh. Trois cartes égales avec une icône. Cartes dans des cartes. Bandeau « Ils nous font confiance ». Rangée de gros chiffres. Faux témoignages. Même marge et mêmes cartes pour toutes les sections.

**Composants.** Pastille arrondie au-dessus du titre. Lueur colorée sous les boutons. Verre dépoli partout. Liseré coloré sur un seul bord. La même ombre douce sous chaque carte. Deux boutons de même poids.

**Fonds et icônes.** Orbes flous, grille de lignes fines, motif de points. Icônes par défaut dans un carré coloré. Émojis comme puces. Icône d'étincelles.

**Mouvement.** Chaque section qui apparaît en fondu. Compteurs qui montent. Bandeau qui défile sans fin. Rebond. Chaque carte qui se soulève au survol.

**Texte.** Verbes de promesse creuse. Ouvertures toutes faites. « Ce n'est pas X, c'est Y ». Triplets partout. Tirets cadratins. Chiffres ronds sans source. Texte qui irait chez n'importe quel concurrent. Boutons « Commencer » ou « En savoir plus ». Gras partout.

**Structure.** L'ordre d'une page de logiciel appliqué à un commerce local. La même forme de section deux fois. Restes de gabarit (`lorem`, icône par défaut).

## Ce qu'on ne pénalise pas seul

Certaines choses sont appelées « IA » mais restent de bonnes pratiques : une seule couleur d'action, un seul bouton principal, un fond clair sobre, Inter (le défaut, c'est Inter + centré + rien d'autre), une FAQ en accordéon, des étapes numérotées quand la suite est réelle, trois forfaits quand ils sont vrais, de vrais avis, de vrais logos de certification, une ombre sur un menu qui flotte.

## Sources

Études : [Krebs, design-slop](https://adriankrebs.ch/blog/design-slop/) et son [dépôt](https://github.com/AdrianKrebs/design-slop-cop) ; [Crazy Egg, AI website builders UX test](https://www.crazyegg.com/blog/ai-website-builders-ux-test/) ; Kobak et al., [Science Advances, 2025](https://doi.org/10.1126/sciadv.adt3813) (vocabulaire des LLM) ; Reinhart et al., [PNAS 2025](https://arxiv.org/abs/2410.16107).

Fournisseurs : [Anthropic](https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics) ; [OpenAI](https://developers.openai.com/blog/designing-delightful-frontends-with-gpt-5-4).

Praticiens : [prg.sh](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website) ; [Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/) ; [The Fountain Institute](https://www.thefountaininstitute.com/blog/signs-vibe-coded-ui) ; [21st.dev](https://21st.dev/blog/website-not-look-ai-generated).

Texte : [Wikipedia, Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) ; [Blog du Modérateur, tiret cadratin](https://www.blogdumoderateur.com/tiret-cadratin-mort-vive-tiret-cadratin/).

Loi : [FTC, règle sur les faux avis, 2024](https://www.govinfo.gov/content/pkg/FR-2024-08-22/html/2024-18519.htm).

Icônes : [NN/g, The AI sparkles icon problem](https://www.nngroup.com/articles/ai-sparkles-icon-problem/).
