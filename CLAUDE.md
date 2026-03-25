# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Site de formation gratuit en français : **"Maîtriser Claude de A à Z"**. SPA statique multi-fichiers — ES modules, aucun build, aucun framework.

- **Repo** : `jonathan442443/formation-claude`
- **En ligne** : https://jonathan442443.github.io/formation-claude/
- **Déploiement** : GitHub Pages (branche `master`, dossier `/`)
- **Workflow** : modifier → `git commit` → `git push` → site mis à jour (~30s)

## Architecture

```
Formation/
├── index.html              ← structure HTML + page d'accueil (hero, section intro, grille modules, footer)
├── favicon.svg             ← favicon ✦ bleu sombre
├── css/
│   └── style.css           ← CSS formaté (variables, composants, responsive)
├── js/
│   ├── data.js             ← PARTIES[] + imports modules → export MODULES[]
│   └── app.js              ← logique navigation + expose showHome/showModule sur window
├── modules/
│   ├── m00-bienvenue.js    ← export default { partie, num, sections[], recap }
│   ├── m01-cest-quoi-claude.js
│   ├── ...
│   └── m13-ethique.js
├── sources/                ← notes de recherche internes (cours Anthropic, 4D Framework, monétisation, éthique) — pas publié
└── CLAUDE.md
```

- **CSS** (`css/style.css`) : variables CSS dans `:root`, design responsive (breakpoint 768px), thème éditorial avec typographie Playfair Display + DM Sans (Google Fonts)
- **JS** (`js/app.js`) : navigation par pages (`div.page` avec toggle `.active`), rendu dynamique des modules via `buildPage()` et `buildIndex()`. Fonctions exposées sur `window` pour les `onclick` inline.
- **Données** (`js/data.js` + `modules/*.js`) : chaque module est un fichier ES module séparé (export default). `data.js` les importe tous et exporte `PARTIES[]` et `MODULES[]`.
- **Serveur requis en local** : les ES modules (`import`/`export`) nécessitent un serveur HTTP (`npx serve` ou Live Server dans VS Code) — pas de double-clic `file://`.

### Structure des données

- `PARTIES[]` : 4 parties thématiques (Découvrir, Comprendre, Pratiquer, Monétiser), chacune avec label, titre, couleurs
- `MODULES[]` : chaque module contient `{partie, num, locked, titre, sub, duree, niv, sections[], recap}`. Les sections ont `{lbl, titre, html}` (contenu HTML brut). La récap contient `{points[], prompt?}`. Note : `duree` est présent dans les données mais n'est plus affiché (retiré de l'UI)
- Tous les modules sont débloqués (`locked: false`) avec du contenu complet

### Navigation

- `showHome()` / `showModule(num)` : bascule entre pages
- `buildPage(m)` : génère le DOM d'un module à la volée (lazy rendering)
- `buildIndex()` : construit la grille d'index sur la page d'accueil
- `updateNav()` / `updateProgress()` : mise à jour de la barre de navigation et de progression

## Structure de la formation (14 modules, 4 parties)

### 🟦 Partie 1 — Découvrir (M0 à M2)
- M0 : Bienvenue — premier contact avec Claude
- M1 : C'est quoi Claude — forces, limites, 3 modèles (Haiku 4.5/Sonnet 4.6/Opus 4.6), quota
- M2 : Prendre Claude en main — interface, barre latérale, zone de chat

### 🟠 Partie 2 — Comprendre (M3 à M6)
- M3 : Le prompt (méthode RCTF) — Rôle, Contexte, Tâche, Format + itération avec le pourquoi
- M4 : Fais parler Claude comme toi — few-shot, pourquoi, chaînage, comportement de Claude, auto-critique (5 techniques)
- M5 : Projets et Artéfacts — organiser et créer des documents réutilisables
- M6 : Compétences et Connecteurs — Skills intégrées (Excel/Word/PPT/PDF), compétences perso, répertoire officiel (doc-coauthoring, internal-comms), connecteurs multi-outils

### 🟢 Partie 3 — Pratiquer (M7 à M11)
- M7 : Claude au quotidien — combiner tous les outils sur des tâches réelles
- M8 : Créer du contenu qui te ressemble — analyse de style, recyclage multi-format
- M9 : Analyser et transformer des données — Excel, CSV, PDF, génération de documents Office
- M10 : Créer une mini-app sans coder — calculateur, quiz, dashboard via Artéfacts (stockage persistant = plans payants uniquement)
- M11 : Créer une landing page sans coder — page pro pour ton offre, structure 7 blocs

### 🟣 Partie 4 — Monétiser (M12 à M13)
- M12 : Les opportunités pour gagner de l'argent — 5 pistes sourcées (Upwork, EU AI Act, Anthropic), ton honnête, écosystème Anthropic (Academy, Partner Network)
- M13 : Avant de foncer : les risques à connaître — hallucinations (cas réels), données/vie privée, transparence client, droit d'auteur IA, EU AI Act, RGPD, checklist 10 réflexes

## Design System

```
Couleurs principales :
--bleu: #1B4F8A    --bleu-clair: #D6E4F0   --bleu-sombre: #0F2F55
--orange: #F5A623  --orange-clair: #FEF3DC
--vert: #1A7A4A    --vert-clair: #D6F0E0
--violet: #6C3483  --violet-clair: #EBD5F5
--rouge: #C0392B   --rouge-clair: #FDECEA

Composants réutilisables :
- .encadre.[bleu|orange|vert|rouge|violet] — encadrés colorés avec bordure gauche
- .comparatif > .comp-card.[bon|mauvais] — cartes comparatives avant/après
- .tableau — tableaux stylisés avec en-tête bleu
- .fiche-recap — fiche récapitulative en bas de module (fond bleu sombre)
- .prompt — bloc de prompt en italique sur fond gris
- .formation-intro / .formation-intro-text — section "Pourquoi cette formation" entre hero et grille
- .site-footer / .footer-name / .footer-role / .footer-link — footer auteur avec lien LinkedIn
```

## Conventions

- Tout le contenu est en **français** (interface, modules, exercices)
- Les labels de section varient selon le contenu (pas de pattern fixe) : 🎯 Accroche, 💡 Notion clé, 👀 En pratique, ✏️ Exercice, etc.
- Les titres de section sont engageants et orientés bénéfice (jamais "L'accroche" ou "L'exemple")
- Chaque fiche récap contient exactement 3 points. Le prompt modèle est optionnel.
- Les parties ont un code couleur cohérent : bleu (Découvrir), orange (Comprendre), vert (Pratiquer), violet (Monétiser)
- Les informations sur Claude doivent être vérifiées en ligne avant d'être incluses (fonctionnalités, interface, limites évoluent vite)
- Les captures d'écran de claude.ai servent de référence pour décrire l'interface — ne pas deviner

## Principes éditoriaux

- Chaque module doit apporter du contenu **réellement nouveau** — pas de redite des modules précédents
- Les exemples doivent être variés (ne pas réutiliser "email de relance" dans chaque module)
- Les exercices doivent produire un résultat **utilisable aujourd'hui** par l'apprenant
- Les prompts doivent utiliser les techniques enseignées dans les modules précédents (pas de régression vers du RCTF basique après le Module 4)
- Les fonctionnalités décrites doivent être accessibles sur le plan gratuit de Claude (sauf mention explicite)
- Les Compétences s'appellent "Skills" en anglais dans la doc Anthropic — utiliser "Compétences" en français (terme de l'interface)
- Sources officielles pour vérifier les fonctionnalités : https://www.anthropic.com/learn/claude-for-you, https://claude.com/resources/tutorials, https://github.com/anthropics/skills
- Le comparatif Claude vs ChatGPT a été retiré du M1 (infos trop volatiles) — ne pas le remettre sans vérification en ligne
- Le dossier `sources/` contient des notes de recherche (cours Anthropic, 4D Framework, Skills, quickstarts, monétisation, éthique IA) — référence interne, pas publié sur le site
- Modèles actuels (mars 2026) : Haiku 4.5, Sonnet 4.6 (17 fév 2026), Opus 4.6 (5 fév 2026) — vérifier avant chaque mise à jour
