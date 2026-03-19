export default {partie:2,num:7,locked:false,titre:"Claude au quotidien",sub:"Combine tout ce que tu as appris sur tes vraies tâches.",duree:"25 min",niv:"Intermédiaire",
sections:[
{lbl:"🎯 Accroche",titre:"Tout est en place — maintenant on travaille",html:`<p class="block-text">Tu as les techniques. Tu as les outils. Tu as configuré ton espace de travail. Maintenant, on va combiner tout ça sur les tâches que tu fais vraiment — chaque jour, chaque semaine.</p>
<p class="block-text">Pourquoi combiner ? Un prompt isolé te fait gagner 5 minutes. Un système configuré — Projet + Compétences + Connecteurs + chaînage — te fait gagner 1 heure, chaque jour. Et parfois, Claude te montre ce que tu n'aurais pas vu seul : un angle mort dans ton raisonnement, une connexion entre deux idées, une perspective nouvelle.</p>
<p class="block-text">Ce module prend 5 situations concrètes et te montre comment les traiter en combinant tout. Pas un prompt isolé — un processus complet.</p>`},
{lbl:"💡 Notion clé",titre:"5 situations, 5 processus complets",html:`<div class="encadre bleu"><div class="encadre-title">✉️ Situation 1 — Répondre à un email délicat</div><ol style="padding-left:16px;display:flex;flex-direction:column;gap:6px;">
<li style="font-size:14px;color:#444;"><em>"Montre-moi le fil de discussion avec [nom] sur Gmail."</em> — Claude lit tout le contexte.</li>
<li style="font-size:14px;color:#444;"><em>"Rédige une réponse. Ce client est mécontent d'un retard de livraison. Il faut reconnaître le problème sans s'excuser excessivement, et proposer une solution concrète. Max 5 lignes."</em></li>
<li style="font-size:14px;color:#444;"><em>"Relis comme si tu étais ce client en colère. Est-ce que cette réponse te calmerait ? Si non, réécris."</em></li></ol>
<p style="margin-top:8px;font-size:14px;color:#444;"><em>Ta Compétence "emails-pros" s'est activée automatiquement — Claude a déjà appliqué ton style sans que tu le demandes.</em></p></div>
<div class="encadre orange" style="margin-top:12px;"><div class="encadre-title">📄 Situation 2 — Analyser un document long</div><ol style="padding-left:16px;display:flex;flex-direction:column;gap:6px;">
<li style="font-size:14px;color:#444;">Ouvre ton Projet concerné. Joins le fichier via +. Par exemple un contrat de prestation de 30 pages.</li>
<li style="font-size:14px;color:#444;"><em>"Analyse ce contrat. Je suis le prestataire. Résume en : 3 obligations clés pour moi, 1 clause risquée, 1 point à renégocier. Je dois décider si je signe avant vendredi."</em></li>
<li style="font-size:14px;color:#444;"><em>"Vérifie que tu n'as pas inventé de clause. Cite les numéros d'articles du contrat pour chaque point."</em></li>
<li style="font-size:14px;color:#444;"><em>"Crée un artéfact : tableau comparatif des points à renégocier avec ma position, la position du client, et ta recommandation pour chacun."</em></li></ol>
<p style="margin-top:8px;font-size:14px;color:#444;"><em>Projet (contexte pro) + Artéfact (tableau réutilisable pour la négo) + chaînage + auto-vérification — en 4 messages, tu as analysé 30 pages et préparé ta négociation.</em></p></div>
<div class="encadre vert" style="margin-top:12px;"><div class="encadre-title">🎤 Situation 3 — Préparer et suivre une réunion</div>
<p style="font-size:14px;color:#444;font-weight:600;">Avant :</p><ol style="padding-left:16px;display:flex;flex-direction:column;gap:6px;">
<li style="font-size:14px;color:#444;"><em>"Consulte mon Google Calendar. Pour la réunion de 14h avec [nom], prépare-moi : objectif principal, 3 questions clés à poser, et les objections probables. C'est un prospect que je veux convertir en client."</em></li>
<li style="font-size:14px;color:#444;"><em>"Crée un artéfact : ordre du jour avec timing pour une réunion de 45 min."</em></li></ol>
<p style="font-size:14px;color:#444;font-weight:600;margin-top:8px;">Après :</p><ol start="3" style="padding-left:16px;display:flex;flex-direction:column;gap:6px;">
<li style="font-size:14px;color:#444;">Colle tes notes brutes dans le même Projet : <em>"Voici mes notes. Transforme en compte-rendu."</em></li>
<li style="font-size:14px;color:#444;"><em>"À partir du compte-rendu, génère les 3 actions de suivi avec deadlines."</em></li></ol>
<p style="margin-top:8px;font-size:14px;color:#444;"><em>Calendar + Projet (continuité avant/après) + Compétence compte-rendu + Artéfact — la réunion est préparée en 5 min, le suivi en 2.</em></p></div>
<div class="encadre violet" style="margin-top:12px;"><div class="encadre-title">🔍 Situation 4 — Préparer une veille concurrentielle</div><ol style="padding-left:16px;display:flex;flex-direction:column;gap:6px;">
<li style="font-size:14px;color:#444;"><em>"Cherche en ligne les 3 principaux concurrents de [ton activité] dans [ta zone]. Pour chacun, trouve : positionnement, prix affichés, points forts, points faibles visibles."</em></li>
<li style="font-size:14px;color:#444;"><em>"Consulte mon Google Drive et retrouve le document 'Mon offre commerciale'. Compare mon positionnement avec ce que tu as trouvé."</em></li>
<li style="font-size:14px;color:#444;"><em>"Crée un artéfact : tableau comparatif moi vs concurrents avec une colonne 'Mon avantage' et une colonne 'Ce que je devrais améliorer'."</em></li></ol>
<p style="margin-top:8px;font-size:14px;color:#444;"><em>Recherche web + Connecteur Drive + Artéfact — Claude a croisé des données en ligne avec tes propres documents pour produire une analyse personnalisée.</em></p></div>
<div class="encadre bleu" style="margin-top:12px;"><div class="encadre-title">✍️ Situation 5 — Publier un post LinkedIn à partir d'une idée brute</div><ol style="padding-left:16px;display:flex;flex-direction:column;gap:6px;">
<li style="font-size:14px;color:#444;">Dans ton Projet "Contenu", envoie ton idée brute : <em>"Ce matin un client m'a dit que mes tarifs étaient trop élevés. J'ai répondu [ta réponse]. Je veux en faire un post LinkedIn."</em></li>
<li style="font-size:14px;color:#444;"><em>"Rédige un post LinkedIn à partir de cette anecdote. Accroche percutante en première ligne. Max 1 300 caractères."</em></li>
<li style="font-size:14px;color:#444;"><em>"Relis ce post. Identifie les passages qui sonnent 'IA' et remplace-les par quelque chose de plus naturel."</em></li>
<li style="font-size:14px;color:#444;"><em>"Propose-moi 3 variantes de l'accroche."</em></li></ol>
<p style="margin-top:8px;font-size:14px;color:#444;"><em>Projet "Contenu" + Compétence "mon-style" + auto-critique anti-IA + itération sur l'accroche — du vécu brut au post publiable en 5 minutes.</em></p></div>`},
{lbl:"💡 Synthèse",titre:"Quel outil pour quel besoin",html:`<table class="tableau"><tr><th>Besoin</th><th>Outils à combiner</th></tr>
<tr><td>Lire du contexte avant d'agir</td><td>Connecteurs (Gmail, Drive, Calendar)</td></tr>
<tr><td>Appliquer ton style automatiquement</td><td>Compétences</td></tr>
<tr><td>Garder le contexte d'un sujet</td><td>Projets</td></tr>
<tr><td>Produire un livrable réutilisable</td><td>Artéfacts</td></tr>
<tr><td>Améliorer la qualité du résultat</td><td>Auto-critique + chaînage</td></tr>
<tr><td>Vérifier la fiabilité</td><td>Demander les sources / numéros d'articles</td></tr></table>
<p class="block-text" style="margin-top:12px;">La règle : plus tu combines, moins tu répètes, et meilleur est le résultat.</p>`},
{lbl:"✏️ Exercice",titre:"Ta première journée assistée",html:`<div class="encadre orange"><div class="encadre-title">🎯 Exercice — 20 min</div>
<p><strong>Étape 1 — Une tâche avec Connecteur (10 min)</strong></p>
<p>Choisis la situation 1 (email via Gmail), 3 (réunion via Calendar) ou 4 (veille via Drive). Fais-la pour de vrai sur un cas réel de ta semaine. Vérifie que ta Compétence s'active automatiquement.</p>
<p style="margin-top:14px;"><strong>Étape 2 — Une tâche avec Artéfact (10 min)</strong></p>
<p>Choisis la situation 2 (tableau de négociation), 4 (tableau concurrentiel) ou 5 (post LinkedIn). Produis un livrable que tu peux utiliser ou partager aujourd'hui.</p>
<p style="margin-top:10px;"><em>Si tu termines les deux en moins de 20 minutes alors qu'elles t'auraient pris 1 à 2 heures — tu viens de comprendre pourquoi tu as configuré tout ça.</em></p></div>`}
],
recap:{points:["Un prompt isolé donne un résultat correct. Un système configuré (Projet + Compétences + Connecteurs + chaînage) donne un résultat sur mesure en 30 secondes.","Pour chaque tâche récurrente, la question à se poser : est-ce que j'ai une Compétence pour ça ? Un Connecteur ? Si non, crée-les maintenant.","L'auto-critique (\"relis comme si tu étais le destinataire\") transforme un bon résultat en résultat excellent — à chaque fois."]}};
