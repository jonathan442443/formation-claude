export default {partie:2,num:8,locked:false,titre:"Créer du contenu qui te ressemble",sub:"Capture ton style, recycle tes idées, publie sans effort.",duree:"25 min",niv:"Intermédiaire",
sections:[
{lbl:"🎯 Accroche",titre:"Le piège à éviter",html:`<p class="block-text">Au module précédent, tu as créé un post en 5 minutes. Mais si tu publies régulièrement, un post ne suffit pas — il te faut un système.</p>
<p class="block-text">Tu l'as sûrement déjà vu : ces posts IA qui commencent par une question rhétorique, enchaînent sur 5 points avec des emojis, et finissent par "Et toi, qu'en penses-tu ?" Pas mauvais. Juste sans âme.</p>
<p class="block-text">Ce module t'apprend à faire l'inverse : capturer ton style une fois pour toutes, et produire n'importe quel format — article, post, newsletter, script — avec ta voix, à chaque fois.</p>`},
{lbl:"💡 Notion clé",titre:"Capture ton style, produis sans limites",html:`<div class="encadre bleu"><div class="encadre-title">🎭 Capturer ton style — 4 étapes</div><ol style="padding-left:16px;display:flex;flex-direction:column;gap:6px;">
<li style="font-size:14px;color:#444;">Trouve 2-3 textes que tu as écrits et dont tu es fier. Envoie-les à Claude : <em>"Voici des textes que j'ai écrits. Analyse mon style en 5 points précis : vocabulaire, structures de phrases, ton, rythme, ce qui me distingue d'un style générique."</em></li>
<li style="font-size:14px;color:#444;">Claude décrit ton style. Lis attentivement — corrige ce qui est faux, précise ce qui manque.</li>
<li style="font-size:14px;color:#444;">Teste : <em>"Écris un paragraphe sur [sujet] en respectant exactement ce style."</em> Si ça ne sonne pas comme toi, ajuste.</li>
<li style="font-size:14px;color:#444;">Une fois satisfait, crée une Compétence "mon-style" avec cette description. Claude l'appliquera automatiquement dans toutes tes conversations — pas seulement dans un Projet.</li></ol></div>
<div class="encadre orange" style="margin-top:12px;"><div class="encadre-title">🔄 Le recyclage : 1 contenu → 5 formats</div>
<p>Tu as écrit un article, une présentation, ou même un simple email détaillé. Claude le transforme en plusieurs formats :</p>
<table class="tableau" style="margin-top:10px;"><tr><th>Input</th><th>→ Demande</th><th>Output</th></tr>
<tr><td>Un article de blog</td><td>"Transforme en post pour les réseaux sociaux"</td><td>Post de 1 300 caractères avec accroche</td></tr>
<tr><td>Le même article</td><td>"Transforme en newsletter"</td><td>Email structuré avec intro personnelle</td></tr>
<tr><td>Le même article</td><td>"Extrais les 5 idées clés en bullets"</td><td>Résumé partageable</td></tr>
<tr><td>Le même article</td><td>"Transforme en fil de discussion"</td><td>Thread en 7 messages progressifs</td></tr>
<tr><td>Le même article</td><td>"Crée un prompt pour générer une image qui illustre cet article avec une IA comme Grok ou DALL-E"</td><td>Prompt visuel détaillé, prêt à copier-coller</td></tr></table>
<p style="margin-top:10px;">Un seul effort de réflexion. Cinq contenus publiables. Ta Compétence "mon-style" s'applique à chaque format automatiquement.</p></div>`},
{lbl:"👀 En pratique",titre:"D'une idée brute à un article publié",html:`<div class="encadre bleu"><div class="encadre-title">📝 Méthode en 5 étapes</div>
<p style="margin-top:8px;"><strong>Étape 1 — Trouver l'angle</strong></p>
<p><em>"Sur le thème [sujet], propose 5 angles dont 2 contre-intuitifs et 1 qui contredit l'opinion dominante."</em></p>
<p style="margin-top:10px;"><strong>Étape 2 — Valider avec une recherche</strong></p>
<p><em>"Cherche en ligne ce qui a déjà été publié sur cet angle. Qu'est-ce qui manque dans les articles existants ? C'est là que je dois apporter de la valeur."</em></p>
<p style="margin-top:10px;"><strong>Étape 3 — Structurer</strong></p>
<p><em>"Crée un plan détaillé : intro (accroche + promesse), 3-4 sections avec transitions, conclusion avec appel à l'action."</em></p>
<p style="margin-top:10px;"><strong>Étape 4 — Rédiger section par section</strong></p>
<p><em>"Écris la section [X]. [N] mots. Sans intro générique. Commence directement par l'idée forte."</em><br>Ne demande jamais "écris l'article entier" — toujours section par section.</p>
<p style="margin-top:10px;"><strong>Étape 5 — Auto-critique ciblée</strong></p>
<p><em>"Relis l'article complet. Identifie : les passages qui sonnent 'IA', les transitions faibles, les affirmations sans preuve. Propose une correction pour chacun."</em></p></div>
<div class="encadre violet" style="margin-top:12px;"><div class="encadre-title">💡 Anti-page-blanche</div><p>Tu ne sais pas sur quoi écrire ?</p><ul>
<li><em>"Génère 20 idées sur [thème], dont certaines contre-intuitives et certaines provocatrices."</em></li>
<li><em>"Tout le monde parle de [sujet] de la même façon. Propose 5 angles que personne n'a pris."</em></li>
<li><em>"Quelles sont les questions que mes clients me posent le plus ? Chacune est un article potentiel."</em></li></ul></div>`},
{lbl:"✏️ Exercice",titre:"Ton système de contenu",html:`<div class="encadre orange"><div class="encadre-title">🎯 Exercice — 20 min</div>
<p><strong>Étape 1 — Capture ton style (8 min)</strong></p>
<p>Trouve 2-3 textes que tu as écrits. Envoie-les à Claude :</p>
<div class="prompt">"Analyse mon style en 5 points précis."</div>
<p style="margin-top:8px;">Lis, corrige, puis crée une Compétence "mon-style" avec cette description (Personnaliser → Compétences → +).</p>
<p style="margin-top:14px;"><strong>Étape 2 — Teste le recyclage (7 min)</strong></p>
<p>Prends un contenu que tu as déjà écrit (article, email long, présentation). Demande à Claude de le transformer en 3 formats différents. Vérifie que ta Compétence "mon-style" s'est activée automatiquement.</p>
<p style="margin-top:14px;"><strong>Étape 3 — Trouve ton prochain sujet (5 min)</strong></p>
<p><em>"Quelles sont les 5 questions que mes clients me posent le plus souvent ?"</em> Puis : <em>"Pour la question [X], propose 3 angles d'article dont 1 contre-intuitif."</em></p>
<p style="margin-top:8px;">Tu repars avec un sujet et un angle — prêt à écrire.</p></div>`}
],
recap:{points:["Capture ton style en 4 étapes : donne tes textes → Claude analyse → tu corriges → tu sauvegardes en Compétence. C'est fait une fois, appliqué partout.","Le recyclage : un seul contenu devient 5 formats publiables. Un effort de réflexion, cinq publications.","L'anti-page-blanche : les questions de tes clients sont tes meilleurs sujets. Claude trouve les angles que tu n'aurais pas vus."]}};
