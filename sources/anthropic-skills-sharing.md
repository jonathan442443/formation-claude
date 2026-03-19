# Skills — Partage et distribution (Claude Code)

> Source : https://claude.com/resources/tutorials (cours Skills)
> Lecon : "Sharing skills"
> Date de capture : 2026-03-19

## Attention : contexte Claude Code (CLI développeurs)

## Infos utiles pour la formation

### 3 méthodes de distribution

#### 1. Via le repository Git (équipe)
- Placer les Skills dans `.claude/skills` du repo
- Quiconque clone le repo obtient les Skills automatiquement
- Les mises à jour arrivent au prochain `git pull`
- Idéal pour : standards d'équipe, workflows spécifiques au projet

#### 2. Via des Plugins / Marketplaces (communauté)
- Créer un plugin avec un dossier `skills/`
- Distribuer via un marketplace
- Les utilisateurs découvrent et installent eux-mêmes
- Idéal pour : Skills génériques utiles au-delà de l'équipe immédiate

#### 3. Via les managed settings Enterprise (organisation)
- Déployées par les administrateurs à toute l'organisation
- **Priorité maximale** — surclassent les Skills personnelles, projet et plugins
- Contrôle des sources de plugins autorisées (`strictKnownMarketplaces`)
- Idéal pour : standards obligatoires, sécurité, conformité

### Skills et Subagents — piège courant

> "Les subagents ne voient PAS automatiquement les Skills."

- Les **agents intégrés** (Explorer, Plan, Verify) n'ont **aucun accès** aux Skills
- Les **agents personnalisés** peuvent utiliser des Skills, mais il faut les **lister explicitement** dans le frontmatter
- Les Skills sont chargées au démarrage du subagent, pas à la demande

Exemple de configuration d'un agent avec Skills :
```markdown
---
name: frontend-security-accessibility-reviewer
description: "Use this agent when you need to review frontend code for accessibility..."
tools: Bash, Glob, Grep, Read, WebFetch, WebSearch, Skill...
model: sonnet
color: blue
skills: accessibility-audit, performance-check
---
```

## Pertinence pour notre formation

### Concepts transposables à claude.ai

- **Le partage d'équipe** : dans claude.ai, les plans Team et Enterprise permettent aux administrateurs de provisionner des Compétences à tous les utilisateurs. C'est l'équivalent des "managed settings". On le mentionne dans la doc officielle des Skills claude.ai mais pas dans notre formation (hors scope — on cible le plan gratuit).

- **Le concept de marketplace** : dans claude.ai, le répertoire de Compétences (Personnaliser → Compétences → Exemples) est l'équivalent simplifié. Les Compétences de Notion, Figma, Atlassian y sont disponibles. On le mentionne déjà en M6.

- **L'idée qu'une Compétence partagée "standardise" le travail d'équipe** : bonne accroche si on voulait un jour adresser les plans Team/Enterprise dans un module avancé.

### Pas applicable (spécifique Claude Code)
- La structure `.claude/skills` dans un repo Git
- La configuration `strictKnownMarketplaces`
- Les subagents personnalisés avec champ `skills:`
- Les agents intégrés (Explorer, Plan, Verify)
- Le plugin packaging et distribution
