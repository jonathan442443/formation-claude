export default {partie:1,num:3,locked:false,titre:"Le prompt : la clé de tout",sub:"La méthode RCTF et l'art de l'itération.",duree:"25 min",niv:"Débutant",
sections:[
{lbl:"🎯 Accroche",titre:"La bonne commande au bon chef",html:`<p class="block-text">Tu connais l'interface. Tu sais où tout se trouve. Maintenant, la vraie question : comment parler à Claude pour obtenir exactement ce que tu veux ?</p>
<p class="block-text">Imagine un restaurant gastronomique. Le chef est excellent. Tu t'assoies et tu dis : <em>"J'aimerais manger quelque chose."</em> Il revient avec un sandwich au jambon.</p>
<p class="block-text">Ce n'est pas le chef qui est mauvais. C'est ta commande qui était vague. Avec Claude, c'est exactement pareil.</p>`},
{lbl:"💡 Notion clé",titre:"La méthode RCTF",html:`<p class="block-text">RCTF, c'est une recette en 4 ingrédients. Plus tu en mets, meilleur sera le résultat :</p>
<table class="tableau"><tr><th>Ingrédient</th><th>Question à te poser</th><th>Exemple</th></tr>
<tr><td>R — Rôle</td><td>Quel expert doit être Claude ?</td><td>"Tu es un nutritionniste spécialisé en sport."</td></tr>
<tr><td>C — Contexte</td><td>Quelle est ta situation ?</td><td>"Je reprends le sport après 2 ans d'arrêt."</td></tr>
<tr><td>T — Tâche</td><td>Qu'est-ce que tu veux exactement ?</td><td>"Crée-moi un plan alimentaire pour une semaine."</td></tr>
<tr><td>F — Format</td><td>Comment tu veux le résultat ?</td><td>"Tableau jour par jour, 1 500 kcal, sans gluten."</td></tr></table>
<div class="encadre vert" style="margin-top:14px;"><div class="encadre-title">✅ Bonne nouvelle</div><p>Tu n'as pas besoin des 4 ingrédients à chaque fois. Ajoute ce qui manque quand la réponse n'est pas satisfaisante.</p></div>
<div class="encadre bleu" style="margin-top:12px;"><div class="encadre-title">💡 Deux bonus qui font la différence</div><ul>
<li><strong>Montre un exemple</strong> : si tu veux un style précis, colle un modèle. Claude s'y conforme immédiatement. On verra ça en détail au Module 4.</li>
<li><strong>Autorise l'incertitude</strong> : ajoute "Si tu n'es pas sûr d'une info, dis-le" dans tes prompts — ça réduit les erreurs.</li></ul></div>`},
{lbl:"👀 En pratique",titre:"Vois la différence",html:`<div class="comparatif">
<div class="comp-card mauvais"><div class="comp-title">❌ Prompt vague</div><p>"Rédige un email." → Résultat générique, inutilisable.</p></div>
<div class="comp-card bon"><div class="comp-title">✅ Prompt RCTF</div><p>"Tu es expert en com pro. Je suis consultante RH. Rédige une relance pour un prospect sans réponse depuis 2 semaines. Ton direct. Max 5 lignes."</p></div></div>
<div class="encadre bleu" style="margin-top:14px;"><div class="encadre-title">🔄 Le secret des experts : l'itération</div>
<p>La première réponse de Claude est rarement parfaite — et c'est normal. Les experts ne réécrivent pas leur prompt, ils ajustent :</p><ul>
<li>"Trop long ? → <em>Raccourcis en 3 phrases max.</em>"</li>
<li>"Ton pas bon ? → <em>Reformule plus décontracté.</em>"</li>
<li>"Tu veux plusieurs options ? → <em>Donne-moi 3 versions différentes.</em>"</li>
<li>"Pas assez précis ? → <em>Ajoute des chiffres et un exemple concret.</em>"</li></ul>
<p style="margin-top:10px;"><strong>L'astuce qui change tout :</strong> quand tu corriges, explique <em>pourquoi</em>. Claude retient le raisonnement et s'en sert pour la suite.</p>
<div class="comparatif" style="margin-top:10px;">
<div class="comp-card mauvais"><div class="comp-title">❌ Correction sèche</div><p>"Trop long. Raccourcis."</p></div>
<div class="comp-card bon"><div class="comp-title">✅ Correction avec le pourquoi</div><p>"Trop long — mon client est un DRH débordé, il ne lira pas au-delà de 3 lignes. Raccourcis en gardant uniquement ce qui le fait agir."</p></div></div></div>`},
{lbl:"✏️ Exercice",titre:"RCTF en action",html:`<div class="encadre orange"><div class="encadre-title">🎯 Exercice — 15 min</div>
<p><strong>Étape 1 — Le prompt vague (2 min)</strong></p>
<p>Envoie à Claude : <em>"Rédige un email."</em> Lis la réponse. Note ce qui ne va pas.</p>
<p style="margin-top:14px;"><strong>Étape 2 — Le prompt RCTF (3 min)</strong></p>
<p>Maintenant envoie celui-ci :</p>
<div class="prompt">"Tu es expert en communication professionnelle. Je suis [ton métier]. Rédige un email de relance pour [qui] sans réponse depuis [durée]. Ton : direct et chaleureux. Max 5 lignes, avec objet."</div>
<p style="margin-top:8px;">Compare les deux résultats.</p>
<p style="margin-top:14px;"><strong>Étape 3 — Ton propre prompt (5 min)</strong></p>
<p>Choisis une vraie tâche de ta semaine. Construis ton prompt avec les 4 ingrédients RCTF.</p>
<p style="margin-top:14px;"><strong>Étape 4 — Itère (5 min)</strong></p>
<p>La réponse n'est pas parfaite ? Normal. Demande un ajustement : longueur, ton, format, précision. Fais au moins 2 itérations avant de considérer le résultat final.</p></div>`}
],
recap:{points:["La méthode RCTF : Rôle, Contexte, Tâche, Format. Ces 4 ingrédients transforment n'importe quelle demande en prompt efficace.","L'itération est le secret des experts : la première réponse est un point de départ. Ajuste longueur, ton, format jusqu'à ce que le résultat te convienne.","Deux bonus : montre un exemple du résultat voulu, et autorise Claude à dire \"je ne suis pas sûr\" — tu verras la différence."],prompt:"Tu es un expert en [domaine]. Je suis [ton métier]. J'ai besoin de [tâche précise]. Format : [longueur, ton, structure]. Si tu n'es pas sûr d'une information, dis-le."}};
