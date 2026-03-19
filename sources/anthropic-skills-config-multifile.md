# Skills — Configuration avancée et multi-fichiers (Claude Code)

> Source : https://claude.com/resources/tutorials (cours Skills)
> Lecon : "Configuration and multi-file skills"
> Date de capture : 2026-03-19

## Attention : contexte Claude Code (CLI développeurs)

## Infos utiles pour la formation

### Champs de métadonnées

| Champ | Requis | Description |
|---|---|---|
| `name` | Oui | Identifiant (minuscules, chiffres, tirets, max 64 car.) |
| `description` | Oui | Quand utiliser la Skill (max 1024 car.) — champ le plus important |
| `allowed-tools` | Non | Restreint les outils que Claude peut utiliser quand la Skill est active |
| `model` | Non | Spécifie quel modèle Claude utiliser |

### Écrire une bonne description — la clé du déclenchement

Une bonne description répond à **2 questions** :
1. **Que fait la Skill ?**
2. **Quand Claude doit-il l'utiliser ?**

> "Si ta Skill ne se déclenche pas quand tu t'y attends, ajoute plus de mots-clés qui correspondent à la façon dont tu formules réellement tes demandes."

La description est ce que Claude utilise pour décider si une Skill est pertinente — **le choix des mots compte**.

### Restriction d'outils (allowed-tools)

Permet de créer des Skills **en lecture seule** ou avec des garde-fous :

```markdown
---
name: codebase-onboarding
description: Helps new developers understand how the system works.
allowed-tools: Read, Grep, Glob, Bash
model: sonnet
---
```

→ Avec cette config, Claude peut lire mais pas modifier de fichiers. Utile pour :
- Workflows sensibles niveau sécurité
- Tâches en lecture seule
- Situations nécessitant des garde-fous

Si `allowed-tools` est omis, aucune restriction — Claude utilise son modèle de permissions normal.

### Progressive Disclosure (divulgation progressive)

**Problème** : tout mettre dans un seul SKILL.md de 2000 lignes prend trop de contexte et est impossible à maintenir.

**Solution** : garder l'essentiel dans SKILL.md, mettre le détail dans des fichiers séparés que Claude lit **uniquement quand nécessaire**.

Structure recommandée :
```
ma-skill/
├── SKILL.md          ← instructions essentielles (<500 lignes)
├── scripts/          ← code exécutable
├── references/       ← documentation détaillée
└── assets/           ← images, templates, données
```

Dans SKILL.md, on référence les fichiers avec des instructions claires sur **quand** les charger :
- "Lis `references/architecture-guide.md` uniquement si l'utilisateur pose une question sur le design système"
- Si la question porte sur autre chose, le fichier n'est jamais chargé

> **Règle** : garder SKILL.md sous 500 lignes. Au-delà, découper en fichiers de référence.

### Scripts efficaces

Les scripts s'exécutent **sans charger leur contenu** en contexte — seule la sortie consomme des tokens.

Instruction clé à mettre dans SKILL.md : dire à Claude de **lancer** le script, pas de le **lire**.

Utile pour :
- Validation d'environnement
- Transformations de données qui doivent être consistantes
- Opérations plus fiables en code testé qu'en code généré

## Pertinence pour notre formation

### Directement applicable (claude.ai)

- **La description comme clé de déclenchement** : identique dans claude.ai. Les 2 questions (que fait-elle ? quand l'utiliser ?) sont universelles. On l'enseigne déjà en M6 mais on pourrait renforcer avec cette formulation.
- **Progressive disclosure** : le concept existe aussi dans claude.ai — les Compétences chargent leur contenu dynamiquement. L'idée de "table des matières en contexte plutôt que le document entier" est un bon mental model pour l'apprenant.
- **Le principe "ajoute des mots-clés qui correspondent à ta façon de parler"** : conseil pratique applicable aux Compétences claude.ai. Si ta Compétence ne se déclenche pas, enrichis sa description.

### Pas applicable (spécifique Claude Code)
- `allowed-tools` (pas d'équivalent dans claude.ai)
- `model` dans le frontmatter
- La structure de dossiers scripts/references/assets
- L'exécution de scripts sans chargement en contexte
