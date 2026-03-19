# Skills — Introduction (Claude Code)

> Source : https://claude.com/resources/tutorials (cours Skills)
> Lecon : "What you'll learn" — Introduction aux Skills
> Date de capture : 2026-03-19

## Attention : contexte Claude Code

Ce tuto concerne les **Skills dans Claude Code** (l'outil CLI pour développeurs), PAS les Skills dans claude.ai (interface web). Les deux systèmes partagent le concept mais fonctionnent différemment.

## Infos utiles pour la formation

### Ce que sont les Skills
- Des **dossiers d'instructions en Markdown** (fichier `SKILL.md`) que Claude découvre et utilise automatiquement
- Chaque Skill a un **nom** et une **description** dans le frontmatter
- Claude compare ta demande aux descriptions disponibles et active les Skills qui correspondent
- **Chargement à la demande** : contrairement aux instructions permanentes, les Skills ne se chargent que quand elles sont pertinentes

### Structure d'une Skill
```markdown
---
name: pr-review
description: Reviews pull requests for code quality. Use when reviewing PRs or checking code changes.
---

[Instructions détaillées ici]
```

### Où vivent les Skills (Claude Code)
- **Personnelles** : `~/.claude/skills` — suivent l'utilisateur sur tous les projets
- **Projet** : `.claude/skills` dans le repo — partagées avec l'équipe via git

### Skills vs CLAUDE.md vs Slash Commands
| Mécanisme | Chargement | Portée |
|---|---|---|
| CLAUDE.md | Toujours en contexte | Toutes les conversations |
| Skills | À la demande (match automatique) | Tâches spécifiques |
| Slash commands | Invocation explicite (`/commande`) | Action ponctuelle |

### Principe clé
> "Si tu te retrouves à expliquer la même chose à Claude de manière répétée, c'est une Skill qui attend d'être écrite."

### Cas d'usage mentionnés
- Standards de code review d'équipe
- Format de messages de commit
- Charte graphique d'une organisation
- Templates de documentation
- Checklists de débogage par framework

## Pertinence pour notre formation

### Directement applicable (claude.ai)
- Le concept de **chargement dynamique** s'applique aussi aux Compétences de claude.ai — on l'a déjà intégré dans le M6
- La **description comme clé d'activation** — confirmé, on l'enseigne déjà
- Le principe "si tu répètes, c'est une compétence" — bonne formule pédagogique

### Pas applicable (spécifique Claude Code)
- Les chemins fichiers (`~/.claude/skills`, `.claude/skills`)
- Le frontmatter YAML
- La distinction CLAUDE.md / Skills / Slash commands (spécifique au CLI)
- Le chargement dans le terminal
