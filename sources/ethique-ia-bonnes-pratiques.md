# Éthique IA et bonnes pratiques — Recherche pour M14

Sources fiables uniquement (institutionnelles, juridiques, officielles).

---

## 1. Politique d'utilisation de Claude (Anthropic)

**Usages interdits :**
- Désinformation, conception d'armes, surveillance domestique
- Analyse biométrique pour inférer race/religion
- Promotion de candidats politiques, interférence électorale

**Usages à haut risque (santé, juridique, finance, emploi) :**
- Obligent un humain dans la boucle ("human-in-the-loop")
- Obligent la divulgation de l'utilisation de l'IA aux consommateurs finaux

**Sources :**
- https://www.anthropic.com/news/usage-policy-update (sept. 2025)
- https://www.anthropic.com/news/updating-our-usage-policy (juin 2024)

---

## 2. Constitution de Claude

Publiée le 22 janvier 2026, sous licence Creative Commons CC0 1.0.

**Hiérarchie de priorités :**
1. Sûreté et soutien du contrôle humain
2. Comportement éthique
3. Respect des directives d'Anthropic
4. Être utile

**Principes clés :**
- Honnêteté comme valeur cardinale : "truthful, calibrated, transparent, non-deceptive"
- "L'inutilité n'est jamais trivialement sûre" — le refus systématique n'est pas la bonne approche
- Cadre d'évaluation des risques : probabilité, sévérité, réversibilité, bénéfices

**Source :** https://www.anthropic.com/constitution

---

## 3. Données et vie privée chez Anthropic

- **Plans Free, Pro, Max** : les données peuvent servir à l'entraînement si le paramètre est activé. Rétention étendue à 5 ans. Modifiable dans les paramètres de confidentialité.
- **Plans Business, Enterprise, API** : données NON utilisées pour l'entraînement par défaut.
- Les données ne sont jamais vendues à des tiers.
- Les conversations supprimées ne sont pas utilisées.

**Implication pratique** : si tu utilises le plan gratuit/Pro pour du travail client, vérifie tes paramètres de confidentialité ou utilise le plan API/Business.

**Sources :**
- https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training
- https://techcrunch.com/2025/08/28/anthropic-users-face-a-new-choice-opt-out-or-share-your-data-for-ai-training/

---

## 4. Quand divulguer l'utilisation de l'IA aux clients ?

### Divulgation NÉCESSAIRE :
- Le client interagit directement avec un système IA (chatbot, assistant)
- Des contenus générés par IA sont livrés sans relecture humaine
- L'IA influence des décisions significatives (prêts, tarification, embauche)
- Des données personnelles sont traitées par l'IA

### Divulgation NON nécessaire :
- L'IA est un outil interne (recherche, synthèse, brouillon) avec contrôle humain final
- Le professionnel exerce son propre jugement avant de livrer
- Tâches de production routinières, outils en arrière-plan

### Bonnes pratiques contractuelles :
Exemple de clause recommandée : "Le consultant peut utiliser des outils d'IA pour améliorer la recherche, l'analyse et la génération de rapports. Tout travail assisté par IA est revu et validé par des professionnels qualifiés avant livraison."

**Sources :**
- Fourscore Business Law : https://www.fourscorelaw.com/resources/ai-disclosure-in-businessnbspwhen-why-and-how-to-inform-clients-about-your-use-of-ai
- MIT Sloan : https://sloanreview.mit.edu/article/artificial-intelligence-disclosures-are-key-to-customer-trust/
- IBM : https://www.ibm.com/think/topics/ai-transparency

---

## 5. Droit d'auteur et contenu IA

### Contexte américain (US Copyright Office)
- Un contenu purement généré par IA n'est **pas éligible au droit d'auteur**
- Cour d'appel de D.C. (mars 2025) : "l'auteur humain est une partie essentielle d'un droit d'auteur valide"
- Le contenu IA peut être protégé **si un humain a déterminé des éléments expressifs suffisants**
- Le simple fait de fournir des prompts ne suffit pas

### Contexte français
- Pas de droit d'auteur sur les productions purement IA (images, textes, vidéos, sons)
- Proposition de loi au Sénat (12 déc. 2025) : présomption d'exploitation des contenus culturels par les fournisseurs d'IA
- Barèmes de compensation (décret février 2025) : rémunération proportionnelle au volume de données utilisées

**Sources :**
- US Copyright Office : https://www.copyright.gov/ai/
- Sénat France : https://www.senat.fr/rap/r24-842/r24-8427.html
- Siècle Digital : https://siecledigital.fr/2025/12/31/droit-dauteur-et-ia-retour-sur-les-evenements-majeurs-en-2025

---

## 6. RGPD et IA — Recommandations CNIL

**Obligations clés :**
- Base légale obligatoire : consentement, exécution d'un contrat, ou intérêt légitime
- Minimisation : ne collecter que les données strictement nécessaires
- Information : informer les personnes quand leurs données servent à l'entraînement d'un modèle IA
- Privacy by design : anonymisation, pseudonymisation
- Droit à l'oubli applicable aux modèles IA

**Sanctions :** jusqu'à 4% du CA mondial ou 20 millions d'euros.

**Chiffres :**
- 67% des consommateurs font davantage confiance aux entreprises transparentes sur l'utilisation des données
- +23% de satisfaction client avec la transparence

**Implication pratique pour les freelances :**
- Ne jamais mettre de données personnelles client dans un outil IA sans anonymisation préalable
- Le RGPD s'applique à toutes les micro-entreprises qui collectent des données personnelles

**Sources :**
- CNIL : https://www.cnil.fr/fr/ia-et-rgpd-la-cnil-publie-ses-nouvelles-recommandations-pour-accompagner-une-innovation-responsable
- BPI France : https://bigmedia.bpifrance.fr/nos-dossiers/ia-et-rgpd-comment-assurer-la-protection-des-donnees-en-entreprise
- CCI Paris : https://www.entreprises.cci-paris-idf.fr/web/pme/entreprises-utiliser-l-ia-tout-en-assurant-sa-conformite-au-rgpd

---

## 7. EU AI Act — Implications pour les professionnels

### Calendrier :
- Février 2025 : interdiction des systèmes à risque inacceptable
- Août 2025 : règles pour les modèles à usage général
- **Août 2026 : application complète de toutes les dispositions**
- Août 2027 : systèmes IA intégrés dans des produits physiques

### 4 niveaux de risque :
1. **Inacceptable** (interdit) : scoring social, police prédictive
2. **Élevé** (strictement réglementé) : infrastructure critique, RH, justice
3. **Limité** (transparence obligatoire) : chatbots, générateurs de contenu
4. **Minimal** (peu réglementé) : filtres spam, jeux vidéo

### Obligations pour les freelances :
- Transparence : l'utilisateur doit savoir qu'il interagit avec un système IA
- Étiquetage : le contenu généré par IA doit être clairement identifié
- 77% des freelances utilisent déjà des outils IA (étude 2025)
- **Sanctions : jusqu'à 35 millions d'euros ou 7% du CA mondial**

**Sources :**
- FreelancerMap : https://www.freelancermap.com/blog/ai-act-for-freelancers/
- EU Commission : https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content
- DLA Piper : https://www.dlapiper.com/en-us/insights/publications/2025/08/latest-wave-of-obligations-under-the-eu-ai-act-take-effect

---

## 8. Hallucinations et erreurs — Cas réels documentés

### Cas marquants :

**Air Canada (février 2024)** — chatbot donnant des infos erronées sur les tarifs de deuil. Air Canada a tenté d'argumenter que le chatbot était une "entité juridique séparée" — rejeté. Remboursement 812$ CAD + frais.
- Source ABA : https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/

**Google AI Overviews (mai 2024)** — L'IA de Google a conseillé de manger des pierres. Fonctionnalité retirée.

**Chatbot municipal de New York** — conseils factuellement faux et illégaux (sécurité alimentaire, santé publique).

**Avocats et citations fictives** — épidémie documentée :
- 2023 : 10 cas. 2024 : 37 cas. 5 premiers mois 2025 : 73 cas.
- 300+ cas documentés au total (base de données Damien Charlotin)
- Cabinet sanctionné (42e plus grand des USA) : 3 000$ d'amende
- Les tribunaux tiennent les avocats pleinement responsables

### Statistiques globales (Suprmind, à nuancer — méthodologie non auditée) :
- 67,4 milliards $ de pertes mondiales dues aux hallucinations IA en 2024
- 47% des dirigeants ont pris des décisions basées sur du contenu IA non vérifié
- Taux d'hallucination par domaine : juridique 6,4-18,7%, médical 4,3-15,6%, financier 2,1-13,8%

**Sources :**
- ABA Journal : https://www.abajournal.com/news/article/no-42-law-firm-by-headcount-could-face-sanctions-over-fake-case-citations-generated-by-chatgpt
- Damien Charlotin — base de données : https://www.damiencharlotin.com/hallucinations/
- National Law Review : https://natlawreview.com/article/ai-hallucinations-are-creating-real-world-risks-businesses

---

## 9. Checklist éthique pour le professionnel utilisant l'IA

1. **Transparence** : informer les clients quand c'est pertinent
2. **Vérification humaine** : toujours relire et valider avant livraison
3. **Protection des données** : anonymiser avant d'envoyer à un outil IA
4. **Responsabilité** : l'humain reste responsable du livrable final
5. **Tarification honnête** : ne pas facturer un "temps passé" excessif si l'IA a fait le gros du travail
6. **Compétence** : maîtriser le sujet pour détecter les erreurs de l'IA
7. **Clauses contractuelles** : mettre à jour ses CGV avec des mentions IA
8. **Non-dépendance** : maintenir ses compétences propres
9. **Sourcing** : vérifier les faits, ne pas présenter du contenu IA comme du savoir original
10. **Conformité** : respecter RGPD, AI Act, droit d'auteur

**Sources :**
- Harvard Business School : https://online.hbs.edu/blog/post/ethical-considerations-of-ai
- Eller College : https://eller.arizona.edu/news/10-ethical-considerations-shaping-future-ai-business

---

## 10. Sommet de Paris pour l'action sur l'IA (février 2025)

- 10-11 février 2025, Grand Palais. ~1 500 participants de 100+ pays.
- Charte de Paris pour une IA d'intérêt général
- Engagement pour une IA de confiance dans le monde du travail
- Coalition pour une IA écologiquement durable
- 109 milliards d'euros d'investissements privés annoncés en France

**Sources :**
- info.gouv.fr : https://www.info.gouv.fr/actualite/paris-accueille-le-sommet-pour-laction-sur-lia
- Élysée : https://www.elysee.fr/emmanuel-macron/2025/02/11/les-actions-de-paris-pour-lintelligence-artificielle
