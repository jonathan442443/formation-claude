# Skills — Créer sa première Skill (Claude Code)

> Source : https://claude.com/resources/tutorials (cours Skills)
> Lecon : "Creating your first skill"
> Date de capture : 2026-03-19

## Attention : contexte Claude Code (CLI développeurs)

## Infos utiles pour la formation

### Structure d'une Skill — exemple concret (PR description)

```markdown
---
name: pr-description
description: Writes pull request descriptions. Use when creating a PR, writing a PR, or when the user asks to summarize changes for a pull request.
---

When writing a PR description:

1. Run `git diff main...HEAD` to see all changes on this branch
2. Write a description following this format:

## What
One sentence explaining what this PR does.

## Why
Brief context on why this change is needed

## Changes
- Bullet points of specific changes made
- Group related changes together
- Mention any files deleted or renamed
```

### Comment fonctionne le matching (découverte automatique)
1. Au démarrage, Claude charge **uniquement les noms et descriptions** — pas le contenu complet
2. Quand tu envoies une demande, Claude compare ton message aux descriptions de toutes les Skills disponibles (matching sémantique)
3. Si une correspondance est trouvée, Claude demande **confirmation** avant de charger le contenu complet
4. Après confirmation, Claude lit le SKILL.md entier et suit les instructions

### Hiérarchie de priorité (en cas de conflit de noms)
1. **Enterprise** — paramètres gérés par l'organisation (priorité max)
2. **Personal** — répertoire personnel (`~/.claude/skills`)
3. **Project** — répertoire du projet (`.claude/skills`)
4. **Plugins** — plugins installés (priorité min)

→ Permet aux organisations d'imposer des standards tout en laissant de la personnalisation individuelle.

### Bonnes pratiques
- Le **nom du dossier** doit correspondre au nom de la Skill
- Utiliser des noms descriptifs pour éviter les conflits : `frontend-review` plutôt que juste `review`
- Redémarrer Claude Code après chaque création/modification de Skill
- Pour mettre à jour : éditer le SKILL.md. Pour supprimer : supprimer le dossier.

## Pertinence pour notre formation

### Concepts transposables à claude.ai
- Le **matching sémantique** par description : identique dans claude.ai — la description de la Compétence détermine quand Claude l'active. Confirme ce qu'on enseigne en M6.
- Le **chargement à la demande** (pas tout en contexte) : même principe dans claude.ai
- La **structure nom + description + instructions** : le concept est le même, seul le format diffère (Markdown vs formulaire dans claude.ai)
- L'idée que la description doit être **riche et précise** : "Use when creating a PR, writing a PR, or when the user asks to summarize changes" — liste de déclencheurs explicites

### Pas applicable (spécifique Claude Code)
- Les commandes `mkdir -p ~/.claude/skills/...`
- La hiérarchie Enterprise/Personal/Project/Plugins (claude.ai a un système plus simple)
- La confirmation de chargement dans le terminal
- Le redémarrage nécessaire après modification
