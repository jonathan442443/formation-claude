export default {partie:1,num:4,locked:false,titre:"Fais parler Claude comme toi",sub:"5 techniques pour des résultats sur mesure du premier coup.",duree:"25 min",niv:"Débutant",
sections:[
{lbl:"🎯 Accroche",titre:"Le cran au-dessus",html:`<p class="block-text">Tu maîtrises RCTF. Avec ces 4 ingrédients, tu obtiens déjà de bons résultats — bien meilleurs que la majorité des utilisateurs.</p>
<p class="block-text">Mais parfois, la réponse est correcte… sans être vraiment toi. Le ton est bon, la structure aussi, mais ça sonne "IA". Ce module te donne 5 techniques pour que Claude produise des résultats sur mesure du premier coup.</p>`},
{lbl:"💡 Notion clé",titre:"5 techniques pour aller plus loin",html:`<div class="encadre bleu"><div class="encadre-title">👀 Technique 1 — Montre un exemple (few-shot)</div>
<p>Au lieu de décrire le résultat que tu veux, montre-le. Colle un exemple de texte qui a le style, le ton ou la structure souhaitée — Claude s'y conforme instantanément.</p>
<div class="prompt">"Rédige un post LinkedIn dans ce style : [colle ici un texte que tu aimes]. Sujet : [ton sujet]."</div>
<p style="margin-top:8px;">Pour les meilleurs résultats, donne 2 à 3 exemples variés.</p></div>
<div class="encadre orange" style="margin-top:12px;"><div class="encadre-title">💡 Technique 2 — Explique le pourquoi</div>
<p>Ne dis pas juste ce que tu veux. Dis <strong>pourquoi</strong>. Claude généralise à partir de l'explication et produit des résultats bien plus adaptés.</p>
<table class="tableau" style="margin-top:10px;"><tr><th>Sans le pourquoi</th><th>Avec le pourquoi</th></tr>
<tr><td>"Ton : formel. Max 5 lignes."</td><td>"Le destinataire est un DRH qui reçoit 200 emails par jour. Il faut capter son attention en 2 secondes, donc sois formel et ultra-concis."</td></tr></table>
<p style="margin-top:8px;">La deuxième version donne à Claude le contexte pour prendre les bonnes décisions seul — même celles que tu n'aurais pas pensé à demander.</p></div>
<div class="encadre vert" style="margin-top:12px;"><div class="encadre-title">🔄 Technique 3 — Le chaînage : brouillon → critique → version finale</div>
<p>Au lieu de tout demander en un seul prompt, découpe en 3 messages :</p>
<ul><li><strong>Message 1</strong> : "Rédige [tâche] avec [contraintes]."</li>
<li><strong>Message 2</strong> : "Relis ce que tu viens d'écrire. Identifie 3 faiblesses et propose une amélioration pour chacune."</li>
<li><strong>Message 3</strong> : "Réécris en intégrant ces améliorations."</li></ul>
<p style="margin-top:8px;">C'est le pattern le plus recommandé par Anthropic. Résultat : une qualité nettement supérieure en 3 échanges au lieu de 10 itérations à tâtons.</p></div>
<div class="encadre bleu" style="margin-top:12px;"><div class="encadre-title">🎭 Technique 4 — Définis le comportement de Claude</div>
<p>Le Rôle (M3) dit à Claude <strong>qui</strong> il est. Mais ça ne dit pas <strong>comment</strong> il doit se comporter pendant l'échange. Deux mêmes rôles peuvent donner des résultats très différents selon le comportement demandé :</p>
<table class="tableau" style="margin-top:10px;"><tr><th>Comportement</th><th>Ce que tu dis</th><th>Ce que Claude fait</th></tr>
<tr><td>Bienveillant</td><td>"Encourage-moi et développe mes idées"</td><td>Claude valorise et enrichit</td></tr>
<tr><td>Critique</td><td>"Challenge mes idées, pointe les faiblesses"</td><td>Claude pousse et confronte</td></tr>
<tr><td>Coach</td><td>"Pose-moi des questions avant de répondre"</td><td>Claude t'aide à clarifier ta pensée</td></tr>
<tr><td>Prudent</td><td>"Si quelque chose te semble risqué, signale-le"</td><td>Claude ajoute des garde-fous</td></tr></table>
<p style="margin-top:10px;">Exemples :</p>
<ul><li><em>"Tu es un expert en com. Sois direct et challenge mes choix si tu penses qu'ils sont mauvais pour mon image."</em></li>
<li><em>"Tu es un coach business. Pose-moi 3 questions dures avant de me donner des conseils — pas de complaisance."</em></li>
<li><em>"Tu es un rédacteur. Sois créatif mais signale-moi si une formulation est ambiguë ou risquée."</em></li></ul></div>
<div class="encadre violet" style="margin-top:12px;"><div class="encadre-title">🔍 Technique 5 — L'auto-critique</div>
<p>Demande à Claude de relire et challenger son propre travail. Ça améliore la qualité de 10 à 20% selon les tests d'Anthropic.</p>
<p style="margin-top:8px;">Exemples de prompts d'auto-critique :</p>
<ul><li><em>"Relis ta réponse comme si tu étais mon client le plus exigeant. Qu'est-ce qui ne va pas ?"</em></li>
<li><em>"Identifie les passages génériques qui sonnent 'IA' et propose des alternatives."</em></li>
<li><em>"Vérifie que chaque affirmation est bien fondée. Signale celles dont tu n'es pas sûr."</em></li></ul></div>`},
{lbl:"👀 En pratique",titre:"Les techniques combinées",html:`<div class="encadre bleu"><div class="encadre-title">⭐ Exemple complet</div>
<div class="prompt">Tu es un expert en communication pour indépendants.<br><br>Je suis consultante RH, 8 ans d'expérience. Je cible les DRH de PME industrielles — ils sont pragmatiques, pressés, et méfiants envers les consultants qui vendent du vent. [POURQUOI]<br><br>Rédige un message de prospection LinkedIn. Sois direct — pas de formules creuses ni de flatteries. [COMPORTEMENT]<br><br>Voici un exemple du ton que j'aime : "Bonjour, j'ai vu que vous recrutez. Je travaille avec des boîtes de votre taille sur ce sujet. On devrait se parler." [EXEMPLE]<br><br>Max 4 lignes. Finir par une question ouverte. Pas de formule corporate type "n'hésitez pas".</div>
<p style="margin-top:12px;">Ensuite, dans un deuxième message :</p>
<div class="prompt">"Relis ce message comme si tu étais le DRH qui le reçoit. Est-ce que tu répondrais ? Si non, réécris."</div></div>
<div class="encadre vert" style="margin-top:12px;"><div class="encadre-title">✅ Résultat</div><p>Un message affiné par l'auto-critique, calibré pour la cible, dans le bon ton — en 2 échanges.</p></div>`},
{lbl:"✏️ Exercice",titre:"Teste les techniques",html:`<div class="encadre orange"><div class="encadre-title">🎯 Exercice — 15 min</div>
<p><strong>Étape 1 — Few-shot (3 min)</strong></p>
<p>Trouve un texte que tu aimes (email, post, article). Envoie-le à Claude avec :</p>
<div class="prompt">"Écris un [type de contenu] sur [sujet] dans exactement ce style."</div>
<p style="margin-top:14px;"><strong>Étape 2 — Le pourquoi (3 min)</strong></p>
<p>Reprends ton prompt RCTF du Module 3. Ajoute une phrase qui explique <em>pourquoi</em> tu veux ce résultat (qui va le lire, dans quel contexte, quel est l'enjeu). Compare avec la version sans.</p>
<p style="margin-top:14px;"><strong>Étape 3 — Comportement (2 min)</strong></p>
<p>Reprends le même prompt. Ajoute une consigne de comportement : <em>"Sois critique — si mon idée a une faiblesse, dis-le franchement."</em> Puis relance avec : <em>"Sois bienveillant — encourage et développe."</em> Compare les deux réponses.</p>
<p style="margin-top:14px;"><strong>Étape 4 — Chaînage + auto-critique (7 min)</strong></p>
<p>Demande à Claude une tâche réelle. Puis enchaîne :</p>
<ul><li><em>"Relis ta réponse. Identifie 3 faiblesses."</em></li>
<li><em>"Réécris en corrigeant ces faiblesses."</em></li></ul>
<p style="margin-top:8px;">Compare le premier jet et la version finale. C'est là que tu vois la vraie différence.</p></div>`}
],
recap:{points:["Montrer un exemple vaut mieux que mille explications. 2 à 3 exemples variés = Claude capture le style instantanément.","Définis le comportement de Claude — critique, bienveillant, coach, prudent. Le même rôle donne des résultats très différents selon le mode que tu choisis.","Le chaînage brouillon → critique → réécriture est le pattern le plus puissant. En 3 messages, tu obtiens un résultat que 10 itérations classiques n'atteindraient pas."],prompt:"[Ta demande RCTF]. Le destinataire est [qui, dans quel contexte, quel enjeu]. Voici un exemple du style voulu : [ton exemple]. Une fois rédigé, relis comme si tu étais [le destinataire] et améliore."}};
