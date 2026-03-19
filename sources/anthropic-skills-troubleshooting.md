# Skills — Troubleshooting (Claude Code)

> Source : https://claude.com/resources/tutorials (cours Skills)
> Lecon : "Troubleshooting skills" (dernière leçon)
> Date de capture : 2026-03-19

## Attention : contexte Claude Code (CLI développeurs)

## Infos utiles pour la formation

### Checklist de dépannage rapide

| Problème | Cause probable | Solution |
|---|---|---|
| La Skill ne se déclenche pas | Description insuffisante | Ajouter des mots-clés / phrases qui correspondent à la façon dont tu formules tes demandes |
| La Skill ne se charge pas | Problème de structure | Vérifier le nom du fichier, le chemin, la syntaxe YAML |
| La mauvaise Skill s'active | Descriptions trop similaires | Rendre les descriptions plus distinctes les unes des autres |
| Une Skill perso est ignorée | Priorité supérieure (Enterprise) | Renommer la Skill ou contacter l'admin |
| Skills de plugin absentes | Cache | Vider le cache et réinstaller |
| Erreur à l'exécution | Dépendances/permissions/chemins | Vérifier les packages, les droits d'exécution, utiliser `/` partout |

### Le problème #1 : la description

> "Si une Skill ne se déclenche pas quand tu t'y attends, la cause est **presque toujours** la description."

**Méthode de diagnostic** :
1. Compare ta description avec la façon dont tu formules réellement tes demandes
2. Ajoute les phrases déclencheuses que les utilisateurs diraient vraiment
3. Teste avec des variations : "aide-moi à profiler ça", "pourquoi c'est lent ?", "rends ça plus rapide"
4. Si une variation ne déclenche pas, ajoute ces mots-clés à la description

### Conflits de priorité

Si ta Skill personnelle est ignorée, une Skill Enterprise ou de priorité supérieure a probablement le même nom.

Solutions :
- **Renommer** ta Skill avec un nom plus spécifique (le plus simple)
- Contacter l'admin pour comprendre la Skill Enterprise

### Conclusion du cours Anthropic

> "Les meilleures Skills naissent de vrais points de douleur — commencez par les instructions que vous vous retrouvez à répéter le plus souvent."

## Pertinence pour notre formation

### Directement applicable (claude.ai)

**Le diagnostic de description est universel.** Dans claude.ai aussi, si une Compétence ne se déclenche pas :
1. La description n'utilise pas les bons mots
2. Les descriptions de plusieurs Compétences se ressemblent trop
3. La description ne couvre pas assez de variantes de formulation

**Conseil qu'on pourrait intégrer en M6** (dans l'encadré "La description est cruciale") :
> "Si ta Compétence ne s'active pas quand tu t'y attends, enrichis sa description avec les mots et phrases que tu utilises vraiment quand tu fais cette demande."

**La phrase de conclusion du cours** est une excellente formule pédagogique :
> "Les meilleures Compétences naissent de vrais points de douleur — commence par les instructions que tu te retrouves à répéter le plus souvent."

### Pas applicable (spécifique Claude Code)
- Le validateur de Skills (`agent skills verifier`)
- `claude --debug` pour voir les erreurs de chargement
- Les problèmes de structure de fichiers (SKILL.md en majuscules, etc.)
- `chmod +x` pour les permissions de scripts
- Les séparateurs de chemin (`/` vs `\`)
- Le cache de plugins
