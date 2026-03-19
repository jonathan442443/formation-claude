# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Site de formation gratuit en français : **"Maîtriser Claude de A à Z"**. Application mono-fichier HTML (`formation-claude (1).html`) — aucun build, aucune dépendance, aucun framework.

## Architecture

Le fichier HTML unique fonctionne comme une SPA (Single Page Application) :

- **CSS** : variables CSS dans `:root`, design responsive (breakpoint 768px), thème éditorial avec typographie Playfair Display + DM Sans (Google Fonts)
- **JS** : navigation par pages (`div.page` avec toggle `.active`), rendu dynamique des modules via `buildPage()` et `buildIndex()`
- **Données** : deux tableaux JS en dur — `PARTIES` (4 parties) et `MODULES` (13 modules avec sections, exercices, fiches récap)

### Structure des données

- `PARTIES[]` : 4 parties thématiques (Rassurer, Comprendre, Pratiquer, Monétiser), chacune avec label, titre, couleurs
- `MODULES[]` : chaque module contient `{partie, num, locked, titre, sub, duree, niv, sections[], recap}`. Les sections ont `{lbl, titre, html}` (contenu HTML brut)
- Modules 11 et 12 sont marqués `locked: true` avec `sections: []` — contenu à venir

### Navigation

- `showHome()` / `showModule(num)` : bascule entre pages
- `buildPage(m)` : génère le DOM d'un module à la volée (lazy rendering)
- `buildIndex()` : construit la grille d'index sur la page d'accueil
- `updateNav()` / `updateProgress()` : mise à jour de la barre de navigation et de progression

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
- Les modules suivent un pattern uniforme : Accroche → Notion clé → Exemple → Exercice → Fiche Récap
- Chaque fiche récap contient exactement 3 points et 1 prompt modèle
- Les parties ont un code couleur cohérent : bleu (Rassurer), orange (Comprendre), vert (Pratiquer), violet (Monétiser)
