# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Site de formation gratuit en français : **"Maîtriser Claude de A à Z"**. Application mono-fichier HTML (`formation-claude (1).html`) — aucun build, aucune dépendance, aucun framework.

## Architecture

Le fichier HTML unique fonctionne comme une SPA (Single Page Application) :

- **CSS** : variables CSS dans `:root`, design responsive (breakpoint 768px), thème éditorial avec typographie Playfair Display + DM Sans (Google Fonts)
- **JS** : navigation par pages (`div.page` avec toggle `.active`), rendu dynamique des modules via `buildPage()` et `buildIndex()`
- **Données** : deux tableaux JS en dur — `PARTIES` (4 parties) et `MODULES` (15 modules avec sections, exercices, fiches récap)

### Structure des données

- `PARTIES[]` : 4 parties thématiques (Rassurer, Comprendre, Pratiquer, Monétiser), chacune avec label, titre, couleurs
- `MODULES[]` : chaque module contient `{partie, num, locked, titre, sub, duree, niv, sections[], recap}`. Les sections ont `{lbl, titre, html}` (contenu HTML brut). La récap contient `{points[], prompt?}` — le prompt est optionnel (absent pour les modules fonctionnalités)
- Modules 13 et 14 sont marqués `locked: true` avec `sections: []` — contenu à venir

### Navigation

- `showHome()` / `showModule(num)` : bascule entre pages
- `buildPage(m)` : génère le DOM d'un module à la volée (lazy rendering)
- `buildIndex()` : construit la grille d'index sur la page d'accueil
- `updateNav()` / `updateProgress()` : mise à jour de la barre de navigation et de progression

## Structure de la formation (15 modules, 4 parties)

### 🟦 Partie 1 — Rassurer (M0 à M2)
- M0 : Bienvenue — premier contact avec Claude
- M1 : C'est quoi Claude — forces, limites, comparatif ChatGPT
- M2 : Prendre Claude en main — interface, barre latérale, zone de chat

### 🟠 Partie 2 — Comprendre (M3 à M6)
- M3 : Le prompt (méthode RCTF) — Rôle, Contexte, Tâche, Format
- M4 : Techniques avancées — few-shot, pourquoi, chaînage, auto-critique
- M5 : Projets et Artéfacts — organiser et créer des documents réutilisables
- M6 : Compétences et Connecteurs — règles automatiques et accès aux outils

### 🟢 Partie 3 — Pratiquer (M7 à M11)
- M7 : Claude au quotidien — combiner tous les outils sur des tâches réelles
- M8 : Créer du contenu qui te ressemble — analyse de style, recyclage multi-format
- M9 : Analyser et transformer des données — Excel, CSV, PDF, génération de documents Office
- M10 : Créer des outils sans coder — mini-apps via Artéfacts (calculateur, quiz, landing page)
- M11 : Automatiser son travail — workflows, agents, introduction à Claude Cowork

### 🟣 Partie 4 — Monétiser (M12 à M14)
- M12 : Opportunités pour gagner de l'argent — 5 pistes concrètes
- M13 : Comment se lancer concrètement (locked)
- M14 : Éthique et bonnes pratiques (locked)

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
```

## Conventions

- Tout le contenu est en **français** (interface, modules, exercices)
- Les labels de section varient selon le contenu (pas de pattern fixe) : 🎯 Accroche, 💡 Notion clé, 👀 En pratique, ✏️ Exercice, etc.
- Les titres de section sont engageants et orientés bénéfice (jamais "L'accroche" ou "L'exemple")
- Chaque fiche récap contient exactement 3 points. Le prompt modèle est optionnel.
- Les parties ont un code couleur cohérent : bleu (Rassurer), orange (Comprendre), vert (Pratiquer), violet (Monétiser)
- Les informations sur Claude doivent être vérifiées en ligne avant d'être incluses (fonctionnalités, interface, limites évoluent vite)
- Les captures d'écran de claude.ai servent de référence pour décrire l'interface — ne pas deviner

## Principes éditoriaux

- Chaque module doit apporter du contenu **réellement nouveau** — pas de redite des modules précédents
- Les exemples doivent être variés (ne pas réutiliser "email de relance" dans chaque module)
- Les exercices doivent produire un résultat **utilisable aujourd'hui** par l'apprenant
- Les prompts doivent utiliser les techniques enseignées dans les modules précédents (pas de régression vers du RCTF basique après le Module 4)
- Les fonctionnalités décrites doivent être accessibles sur le plan gratuit de Claude (sauf mention explicite)
