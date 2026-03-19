export default {partie:3,num:13,locked:false,titre:"Avant de foncer : les risques à connaître",sub:"Hallucinations, données personnelles, droit d'auteur — les réflexes qui séparent les pros des amateurs.",duree:"25 min",niv:"Tous niveaux",
sections:[
{lbl:"🎯 Accroche",titre:"Ce que tu ne fais pas est aussi important que ce que tu fais",html:`<p class="block-text">Tu sais utiliser Claude. Tu connais les opportunités. Avant de partir, il reste un sujet essentiel — celui qui sépare les professionnels crédibles des amateurs.</p>
<p class="block-text">En février 2024, un chatbot d'Air Canada a donné des informations fausses sur une politique tarifaire. L'entreprise a tenté de se défendre en disant que le chatbot était "une entité séparée". Le tribunal a rejeté l'argument : <strong>l'entreprise est responsable de tout ce que son IA dit</strong>. Résultat : remboursement + frais de justice.</p>
<p class="block-text">En 2025, plus de 300 cas d'avocats ont été documentés pour avoir soumis des citations juridiques <strong>inventées par l'IA</strong> — avec des amendes à la clé.</p>
<p class="block-text">Ces gens ne sont pas incompétents. Ils ont juste oublié une règle simple : <strong>l'IA propose, l'humain vérifie et signe</strong>. Ce module te donne les réflexes pour ne jamais être dans cette situation.</p>`},
{lbl:"⚠️ Hallucinations",titre:"Claude peut se tromper — et c'est normal",html:`<p class="block-text">Claude est puissant, mais il peut générer des informations fausses avec un aplomb total. C'est ce qu'on appelle une <strong>hallucination</strong> : un fait inventé, une source inexistante, un chiffre sorti de nulle part — présenté comme si c'était vrai.</p>
<div class="encadre rouge"><div class="encadre-title">📋 Cas réels documentés</div>
<table class="tableau"><tr><th>Cas</th><th>Ce qui s'est passé</th></tr>
<tr><td>Avocats américains (2023-2025)</td><td>Plus de 300 cas documentés de citations juridiques inventées par l'IA soumises à des tribunaux. Amendes de 1 000 à 10 000$.</td></tr>
<tr><td>Google AI Overviews (2024)</td><td>L'IA de recherche de Google a conseillé de manger des pierres. Fonctionnalité retirée en urgence.</td></tr>
<tr><td>Chatbot municipal de New York</td><td>A donné des conseils à la fois faux et illégaux sur la sécurité alimentaire.</td></tr></table></div>
<div class="encadre vert" style="margin-top:12px;"><div class="encadre-title">🛡️ Les 3 réflexes anti-hallucination</div><ol>
<li><strong>Vérifie les faits importants</strong> — si Claude cite un chiffre, une loi, une source : vérifie. Surtout dans les domaines juridique, médical, financier.</li>
<li><strong>Demande-lui ses sources</strong> — <em>"Quelles sont tes sources pour cette affirmation ? Es-tu certain ou est-ce une estimation ?"</em> Claude est conçu pour signaler son incertitude si tu lui poses la question.</li>
<li><strong>Ne livre jamais un résultat IA sans relecture</strong> — ton client paie pour TON expertise, pas pour une sortie brute de Claude. Relis, corrige, valide.</li></ol></div>
<div class="encadre bleu" style="margin-top:12px;"><div class="encadre-title">💡 Le bon prompt pour réduire les risques</div>
<div class="prompt">"Si tu n'es pas sûr d'une information, dis-le clairement plutôt que d'inventer. Je préfère un 'je ne suis pas certain' à une réponse fausse."</div>
<p style="margin-top:8px;">Ajoute cette consigne dans tes instructions de Projet (M5) — Claude la respectera dans toutes tes conversations.</p></div>`},
{lbl:"🔒 Données",titre:"Tes données, tes clients, ta responsabilité",html:`<div class="encadre bleu"><div class="encadre-title">🔒 Ce qu'Anthropic fait de tes conversations</div>
<table class="tableau"><tr><th>Plan</th><th>Tes données servent à l'entraînement ?</th></tr>
<tr><td>Gratuit / Pro / Max</td><td>Oui, <strong>si le paramètre est activé</strong>. Vérifie dans tes paramètres de confidentialité.</td></tr>
<tr><td>Business / Enterprise / API</td><td>Non, par défaut.</td></tr></table>
<p style="margin-top:8px;">Dans tous les cas : les données ne sont jamais vendues à des tiers, et les conversations supprimées ne sont pas utilisées.</p>
<p style="margin-top:8px;"><strong>La règle simple :</strong> ne colle jamais de données confidentielles client dans Claude sans avoir vérifié tes paramètres. Noms, emails, données financières, informations médicales — anonymise d'abord, ou utilise un plan qui ne les exploite pas.</p></div>
<div class="encadre orange" style="margin-top:12px;"><div class="encadre-title">💬 Quand dire à ton client que tu utilises l'IA ?</div>
<div class="comparatif"><div class="comp-card bon"><div class="comp-title">✅ Pas besoin de le dire</div><ul>
<li>Claude t'aide en amont (recherche, brouillon, brainstorming)</li>
<li>Tu relis, tu corriges, tu valides avant de livrer</li>
<li>Le livrable reflète ton expertise, pas une sortie brute</li></ul></div>
<div class="comp-card mauvais"><div class="comp-title">⚠️ Il faut le dire</div><ul>
<li>Le client interagit directement avec une IA (chatbot, assistant)</li>
<li>Tu livres du contenu généré par IA sans relecture significative</li>
<li>L'IA influence des décisions importantes (recrutement, finance, juridique)</li>
<li>Tu traites des données personnelles du client avec l'IA</li></ul></div></div></div>
<div class="encadre vert" style="margin-top:12px;"><div class="encadre-title">📝 Astuce contrat</div>
<p>Si tu vends des services, ajoute une clause simple dans tes conditions :</p>
<p style="margin-top:8px;"><em>"Le consultant peut utiliser des outils d'intelligence artificielle pour améliorer la recherche, l'analyse et la production de documents. Tout travail assisté par IA est revu et validé par le consultant avant livraison."</em></p>
<p style="margin-top:8px;">C'est transparent, professionnel, et ça protège les deux parties.</p></div>`},
{lbl:"⚖️ La loi",titre:"Ce que dit la loi — l'essentiel en 5 minutes",html:`<div class="encadre bleu"><div class="encadre-title">📄 Droit d'auteur : à qui appartient un texte généré par IA ?</div>
<p>La réponse courte : <strong>à personne</strong>.</p><ul>
<li>En France comme aux États-Unis, un contenu purement généré par IA n'est pas protégé par le droit d'auteur</li>
<li>Pour qu'un texte soit protégeable, il faut qu'un humain ait apporté une <strong>contribution créative significative</strong> — pas juste un prompt</li>
<li>En pratique : si tu utilises Claude pour produire un brouillon et que tu le retravailles substantiellement, le résultat peut être protégé. Si tu copies-colles la sortie brute, non.</li></ul></div>
<div class="encadre orange" style="margin-top:12px;"><div class="encadre-title">🇪🇺 EU AI Act — ce qui change pour toi</div>
<p>Le règlement européen sur l'IA entre en application progressive :</p>
<table class="tableau"><tr><th>Date</th><th>Ce qui s'applique</th></tr>
<tr><td>Février 2025</td><td>Interdiction des systèmes à risque inacceptable (scoring social, police prédictive)</td></tr>
<tr><td>Août 2025</td><td>Règles pour les modèles IA à usage général</td></tr>
<tr><td><strong>Août 2026</strong></td><td><strong>Application complète — y compris l'obligation de transparence</strong></td></tr></table>
<p style="margin-top:8px;">Ce que ça veut dire concrètement :</p><ul>
<li>Si tu crées un chatbot pour un client → l'utilisateur doit savoir qu'il parle à une IA</li>
<li>Si tu produis du contenu avec l'IA → il doit être identifiable comme tel dans certains contextes (contenu d'intérêt public)</li>
<li>Les entreprises ont l'obligation de former leurs équipes à l'IA — d'où l'opportunité du M12</li></ul>
<p style="margin-top:8px;font-size:14px;color:#444;"><em>Sanctions possibles : jusqu'à 35 millions d'euros ou 7% du CA mondial. En pratique, les PME et indépendants ne sont pas la cible prioritaire, mais autant prendre les bons réflexes maintenant.</em></p></div>
<div class="encadre vert" style="margin-top:12px;"><div class="encadre-title">🔐 RGPD : le réflexe à avoir</div>
<p>Si tu traites des données personnelles (noms, emails, infos clients) avec Claude :</p><ul>
<li><strong>Anonymise avant</strong> de coller dans le chat</li>
<li>Vérifie tes paramètres de confidentialité (section précédente)</li>
<li>Informe tes clients si leurs données sont traitées par un outil IA</li></ul>
<p style="margin-top:8px;">La CNIL rappelle que le RGPD s'applique à toutes les entreprises, y compris les micro-entrepreneurs. Sanctions : jusqu'à 4% du CA ou 20 millions d'euros.</p></div>`},
{lbl:"✏️ Exercice",titre:"Tes réflexes pour la suite",html:`<div class="encadre orange"><div class="encadre-title">🎯 Exercice — 10 min</div>
<p><strong>Étape 1 — Configure ton filet de sécurité (3 min)</strong></p>
<p>Ouvre ton Projet Claude principal (celui que tu as créé au M5). Ajoute cette instruction :</p>
<div class="prompt">"Si tu n'es pas sûr d'une information, dis-le clairement. Ne cite jamais une source, une loi ou un chiffre sans préciser ton niveau de certitude. Si je te demande quelque chose qui touche au juridique, médical ou financier, rappelle-moi de vérifier auprès d'un professionnel."</div>
<p style="margin-top:14px;"><strong>Étape 2 — Teste les hallucinations (5 min)</strong></p>
<p>Demande à Claude quelque chose de précis et vérifiable dans ton domaine. Par exemple :</p>
<div class="prompt">"Cite-moi 3 articles de loi français qui s'appliquent à [ton domaine]. Donne les numéros exacts."</div>
<p style="margin-top:8px;">Puis vérifie. Est-ce que les articles existent ? Est-ce que les numéros sont bons ? C'est le meilleur exercice pour calibrer ta confiance — et comprendre où la vérification est indispensable.</p>
<p style="margin-top:14px;"><strong>Étape 3 — Vérifie tes paramètres (2 min)</strong></p>
<p>Va dans tes paramètres Claude → Confidentialité. Vérifie si tes conversations servent à l'entraînement. Désactive si tu traites des données sensibles.</p></div>
<div class="encadre bleu" style="margin-top:12px;"><div class="encadre-title">✅ La checklist du professionnel</div>
<p>10 réflexes à garder en tête :</p><ol>
<li><strong>Vérifie</strong> — l'IA propose, tu vérifies. Toujours.</li>
<li><strong>Relis</strong> — ne livre jamais une sortie brute à un client.</li>
<li><strong>Anonymise</strong> — pas de données personnelles dans le chat sans précaution.</li>
<li><strong>Sois transparent</strong> — dis à ton client que tu utilises l'IA quand c'est pertinent.</li>
<li><strong>Reste responsable</strong> — c'est ton nom sur le livrable, pas celui de Claude.</li>
<li><strong>Facture honnêtement</strong> — si l'IA a fait le gros du travail en 10 min, ajuste.</li>
<li><strong>Garde tes compétences</strong> — l'IA t'augmente, elle ne te remplace pas. Continue d'apprendre.</li>
<li><strong>Cite tes sources</strong> — ne présente pas du contenu IA comme ton savoir original.</li>
<li><strong>Connais les limites</strong> — juridique, médical, financier = toujours vérifier avec un expert.</li>
<li><strong>Protège tes données</strong> — vérifie tes paramètres de confidentialité.</li></ol></div>`}
],
recap:{points:["Claude peut se tromper avec aplomb — hallucinations, sources inventées, chiffres faux. Le réflexe : vérifier les faits importants, demander le niveau de certitude, ne jamais livrer sans relecture.","Tes données dans Claude dépendent de ton plan. Vérifie tes paramètres de confidentialité. Anonymise les données sensibles. Sois transparent avec tes clients quand c'est pertinent.","La règle d'or : l'IA propose, l'humain vérifie et signe. C'est ton expertise qui a de la valeur — Claude l'amplifie, il ne la remplace pas."],prompt:"Relis notre dernière conversation. Identifie toute affirmation que tu n'es pas certain à 100% d'avoir correcte. Pour chacune, indique ton niveau de confiance et suggère comment je pourrais vérifier."}};
