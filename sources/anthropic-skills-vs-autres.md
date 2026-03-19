# Skills vs autres fonctionnalités Claude Code

> Source : https://claude.com/resources/tutorials (cours Skills)
> Lecon : "Skills vs. other Claude Code features"
> Date de capture : 2026-03-19

## Attention : contexte Claude Code (CLI développeurs)

## Infos utiles pour la formation

### Tableau comparatif des mécanismes de personnalisation

| Mécanisme | Déclenchement | Portée | Analogie |
|---|---|---|---|
| **CLAUDE.md** | Toujours chargé | Toute conversation | Les règles de la maison |
| **Skills** | À la demande (match sémantique) | Tâche spécifique | Un expert qu'on appelle quand on a besoin |
| **Subagents** | Délégation explicite | Contexte isolé | Un collègue à qui on confie une mission |
| **Hooks** | Événementiel (file save, tool call) | Action automatique | Un gardien qui vérifie à chaque passage |
| **MCP servers** | Connexion externe | Outils/intégrations | Une prise qui connecte à d'autres outils |

### CLAUDE.md vs Skills — quand utiliser quoi

**CLAUDE.md** (toujours actif) :
- Standards de projet qui s'appliquent toujours
- Contraintes : "ne jamais modifier le schéma de la base de données"
- Préférences de framework et style de code

**Skills** (à la demande) :
- Expertise spécifique à une tâche
- Connaissances pertinentes seulement parfois
- Procédures détaillées qui encombreraient chaque conversation

> "Ta checklist de code review n'a pas besoin d'être en contexte quand tu écris du nouveau code — elle s'active quand tu demandes une review."

### Skills vs Subagents

- **Skills** = ajoutent de la connaissance à la conversation en cours
- **Subagents** = travaillent dans un contexte séparé, isolé, et renvoient un résultat

### Skills vs Hooks

- **Skills** = déclenchées par la demande (request-driven)
- **Hooks** = déclenchés par des événements (event-driven) — ex: linter à chaque sauvegarde

### Setup typique combiné

1. **CLAUDE.md** — standards permanents du projet
2. **Skills** — expertise par tâche, chargée à la demande
3. **Hooks** — opérations automatiques sur événements
4. **Subagents** — contextes isolés pour travail délégué
5. **MCP servers** — outils et intégrations externes

> "Ne force pas tout dans les Skills quand une autre option convient mieux — et tu peux en utiliser plusieurs en même temps."

## Pertinence pour notre formation

### Directement applicable (claude.ai)

Le parallèle avec les fonctionnalités claude.ai est clair :

| Claude Code | Équivalent claude.ai | Module concerné |
|---|---|---|
| CLAUDE.md | Instructions du Projet | M5 |
| Skills | Compétences | M6 |
| MCP servers / Hooks | Connecteurs | M6 |
| Subagents | Pas d'équivalent direct | — |

**Le concept le plus utile** : la distinction entre "toujours actif" (Projet/instructions) et "à la demande" (Compétences). C'est exactement ce qu'on enseigne dans le tableau "Compétences vs Projets" du M6 :
- Projet = contexte permanent = CLAUDE.md
- Compétence = expertise ponctuelle = Skill

Cette leçon **confirme et renforce** notre pédagogie en M6.

### Pas applicable (spécifique Claude Code)
- Subagents (pas d'équivalent dans claude.ai pour un utilisateur standard)
- Hooks événementiels
- La combinaison technique CLAUDE.md + Skills + Hooks + Subagents + MCP
