# Anthropic Quickstarts — Démos officielles

Source : https://github.com/anthropics/claude-quickstarts

## 1. Computer Use Demo (`computer-use-demo/`)

**Ce que c'est** : Implémentation de référence de la fonctionnalité "Computer Use" de Claude (beta). Claude peut voir et contrôler un bureau Linux via captures d'écran + actions souris/clavier.

**Architecture** :
- Conteneur Docker avec bureau Ubuntu 22.04 complet (Xvfb + Mutter + VNC + noVNC)
- Boucle agent dans `loop.py` : envoie conversation → Claude répond avec tool_use → exécute l'outil → screenshot → boucle
- 3 outils : `ComputerTool` (souris/clavier via xdotool), `BashTool` (terminal), `EditTool` (édition fichiers)
- Interface Streamlit pour le chat utilisateur
- Support multi-provider : Anthropic direct, AWS Bedrock, Google Vertex

**Stack** : Python 3.11, Streamlit, SDK Anthropic, xdotool, Xvfb, x11vnc/noVNC

**Pertinence formation** : Démo technique avancée. Montre comment Claude peut agir de manière autonome sur un ordinateur. Pas directement utilisable par un public non-technique, mais illustre le potentiel des agents IA.

---

## 2. Customer Support Agent (`customer-support-agent/`)

**Ce que c'est** : Chatbot de support client avec RAG (Retrieval-Augmented Generation). Claude répond aux questions en s'appuyant sur une base de connaissances vectorielle.

**Architecture** :
```
Utilisateur → Chat React → POST /api/chat → RAG Bedrock + Claude API → JSON structuré → Affichage
```

1. L'utilisateur pose une question
2. Le backend interroge AWS Bedrock Knowledge Bases (recherche vectorielle) pour trouver les documents pertinents
3. Les documents sont injectés dans le system prompt de Claude
4. Claude répond en JSON structuré : réponse, humeur détectée, catégories, suggestions de questions suivantes
5. Le frontend affiche le chat + panneaux debug (raisonnement IA, sources RAG avec scores)

**Fonctionnalités clés** :
- Détection d'humeur utilisateur (positif, frustré, confus…)
- Catégorisation automatique (facturation, technique, compte, juridique…)
- Suggestions de questions suivantes (cliquables)
- Escalade vers un humain si frustration détectée ou sujet trop complexe
- Panneaux debug : raisonnement interne de Claude + sources RAG avec scores de pertinence

**Techniques intéressantes à retenir** :
- **Prefill assistant** : forcer la sortie JSON en pré-remplissant `{` dans la réponse → Claude continue le JSON au lieu d'envelopper dans du markdown
- **Validation Zod** : schéma strict pour vérifier la structure des réponses de Claude avant affichage
- **Sidebars découplées** : communication par CustomEvent, activables/désactivables via variables d'environnement
- **Escalade humaine automatique** : détection de frustration → bouton "Parler à un humain"
- **Mesures de performance** : timing RAG, durée génération Claude, latence perçue côté frontend

**Stack** : Next.js 14 (App Router), TypeScript, SDK Anthropic, AWS Bedrock (RAG), Tailwind CSS + shadcn/ui, Zod, déployé via AWS Amplify

**Pertinence formation** : Excellent exemple concret d'application IA pour un cas métier réel. Un consultant pourrait proposer ce type de solution à ses clients (avec un développeur). Montre aussi les patterns recommandés par Anthropic pour structurer un agent avec RAG.

---

## Cas d'usage identifiés (pour la formation)

| Besoin client | Solution possible | Difficulté |
|--------------|-------------------|------------|
| Support client automatisé | customer-support-agent (ou plateforme no-code type Chatbase/Botpress) | Moyenne à élevée |
| Automatisation bureau | computer-use-demo | Élevée (Docker, Python) |
| Chatbot simple interne | Claude Projects + fichiers de référence | Faible (no-code) |
| Prototype rapide | Claude Artifacts (mini-app) | Aucune |

## Alternative no-code pour non-développeurs

Pour obtenir un résultat similaire au customer-support-agent sans coder :
1. **Claude Projects** : créer un projet avec docs techniques en référence + instructions support
2. **Plateformes no-code** : Chatbase, CustomGPT, Botpress (~20-50€/mois) — se connectent à l'API Claude
3. **Prototyper d'abord** : tester le concept dans Claude Projects, puis passer à une solution technique si ça marche
