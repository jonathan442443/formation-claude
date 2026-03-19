export default {partie:0,num:1,locked:false,titre:"C'est quoi Claude exactement ?",sub:"Démystifier l'IA sans jargon. Forces, limites, différence avec ChatGPT.",duree:"25 min",niv:"Débutant",
sections:[
{lbl:"🎯 Accroche",titre:"Un collègue pas comme les autres",html:`<p class="block-text">Imagine un nouveau collègue. Brillant, disponible 24h/24, capable de lire 200 pages en quelques secondes. Il s'appelle Claude.</p>
<p class="block-text">Mais ce collègue a des particularités : ses connaissances ont une date limite, et il lui arrive d'affirmer des choses fausses avec aplomb.</p>
<p class="block-text">Ce module t'explique comment il fonctionne vraiment — ses forces, ses limites, et ce qui le distingue des autres IA. Parce que bien utiliser un outil, ça commence par le comprendre.</p>`},
{lbl:"💡 Notion clé",titre:"Comment Claude construit ses réponses",html:`<div class="encadre bleu"><div class="encadre-title">🧠 Le principe fondamental</div><p>Claude ne cherche pas la réponse dans une base de données. Il construit chaque réponse mot par mot, à partir de tout ce qu'il a appris pendant son entraînement — des milliards de textes. C'est ce qui le rend puissant en rédaction et en analyse, mais faillible sur les faits précis.</p></div>
<table class="tableau" style="margin-top:16px;"><tr><th>Force</th><th>Ce que ça veut dire pour toi</th></tr>
<tr><td>Lire et comprendre</td><td>Analyser un document de 200 pages en quelques secondes</td></tr>
<tr><td>Rédiger et reformuler</td><td>Écrire dans le style et le ton que tu demandes</td></tr>
<tr><td>Expliquer clairement</td><td>Transformer un concept complexe en langage simple</td></tr>
<tr><td>Structurer des idées</td><td>Prendre une idée floue et en faire un plan actionnable</td></tr>
<tr><td>Analyser des images</td><td>Lire une photo, un screenshot, un schéma et t'en faire un résumé</td></tr></table>
<div class="encadre orange" style="margin-top:16px;"><div class="encadre-title">⚡ Claude vs ChatGPT — en bref</div>
<table class="tableau"><tr><th></th><th>Claude</th><th>ChatGPT</th></tr>
<tr><td>Point fort</td><td>Rédaction, code, analyse de longs documents</td><td>Polyvalence, génération d'images/vidéos</td></tr>
<tr><td>Ton par défaut</td><td>Précis, structuré, naturel</td><td>Conversationnel, plus verbeux</td></tr>
<tr><td>Contexte max</td><td>200K tokens (~un livre entier)</td><td>32K tokens</td></tr>
<tr><td>Accès web</td><td>Oui</td><td>Oui</td></tr>
<tr><td>Visuels</td><td>Graphiques, diagrammes, SVG via Artéfacts</td><td>Images et vidéos (DALL-E, natif)</td></tr></table>
<p style="margin-top:10px;font-size:14px;color:#444;">Les deux sont excellents. Cette formation se concentre sur Claude parce que c'est celui qui donne les meilleurs résultats quand on apprend à bien formuler ses demandes.</p></div>`},
{lbl:"🔧 Les modèles",titre:"Pas un Claude, mais trois",html:`<p class="block-text">Quand tu ouvres Claude.ai, tu vois un sélecteur en bas à droite de la barre de saisie : "Sonnet 4.6". Ce n'est pas juste un numéro de version — c'est un choix entre trois "cerveaux" différents.</p>
<table class="tableau"><tr><th>Modèle</th><th>Ce qu'il fait le mieux</th><th>Vitesse</th><th>Plan gratuit</th></tr>
<tr><td>Haiku 4.5</td><td>Réponses rapides, résumés, questions simples</td><td>Ultra-rapide</td><td>Oui</td></tr>
<tr><td>Sonnet 4.6</td><td>Rédaction, analyse, code — le couteau suisse</td><td>Rapide</td><td>Oui (par défaut)</td></tr>
<tr><td>Opus 4.6</td><td>Raisonnement complexe, recherche approfondie</td><td>Plus lent</td><td>Non (Pro)</td></tr></table>
<div class="encadre vert" style="margin-top:14px;"><div class="encadre-title">✅ Sonnet est ton meilleur allié</div><p>C'est le modèle par défaut et il couvre 90% des besoins. Utilise Haiku quand tu veux une réponse rapide à une question simple (résumé, traduction, extraction). Tu n'as pas besoin d'Opus pour cette formation.</p></div>
<div class="encadre bleu" style="margin-top:12px;"><div class="encadre-title">💡 Le quota</div><p>Chaque message consomme du "quota". Haiku en consomme peu, Sonnet modérément, Opus beaucoup. Si Claude te dit "Vous avez atteint votre limite", c'est que ton quota est épuisé — il se renouvelle après quelques heures. Astuce : basculer sur Haiku pour les questions simples te permet de faire durer ton quota plus longtemps.</p></div>`},
{lbl:"⚠️ Les limites",titre:"Ce que Claude ne fait pas bien",html:`<div class="encadre rouge"><div class="encadre-title">❌ Les vraies limites à connaître</div><ul>
<li><strong>Faits et chiffres précis</strong> — il peut inventer des statistiques, des citations ou des dates avec assurance. C'est ce qu'on appelle les "hallucinations". Claude est entraîné à dire "je ne sais pas" quand il n'est pas sûr, mais ça n'arrive pas à chaque fois.</li>
<li><strong>Calculs complexes</strong> — il s'en sort bien sur les maths courantes, mais peut se tromper sur les calculs avancés. Pour les chiffres critiques, utilise un tableur.</li></ul></div>
<div class="encadre vert" style="margin-top:14px;"><div class="encadre-title">💡 La règle d'or</div><p>Claude est extraordinaire sur la rédaction, la structure et la réflexion. Sur les faits, les chiffres et les données précises → <strong>vérifie toujours</strong>. Un bon réflexe : si Claude affirme un fait, demande-lui "Tu es sûr ? Donne-moi ta source."</p></div>`},
{lbl:"✏️ Exercice",titre:"Exercice du Module 1",html:`<div class="encadre orange"><div class="encadre-title">🎯 Quiz — Vrai ou Faux ?</div><ul>
<li>1. Claude cherche ses réponses dans une base de données, comme Google.</li>
<li>2. Si Claude affirme un chiffre avec assurance, je peux lui faire confiance les yeux fermés.</li>
<li>3. Claude peut analyser un document PDF de 100 pages en quelques secondes.</li>
<li>4. Claude est meilleur que ChatGPT dans tous les domaines.</li>
<li>5. Si Claude met du temps à répondre, c'est qu'il "réfléchit plus" — donc la réponse sera meilleure.</li></ul>
<p style="margin-top:10px;"><strong>Réponses :</strong> 1-Faux (il construit ses réponses mot par mot) | 2-Faux (hallucinations possibles — vérifie toujours) | 3-Vrai | 4-Faux (chacun a ses forces — voir le comparatif) | 5-Faux (la vitesse dépend du modèle choisi, pas de la qualité — Sonnet donne d'excellents résultats en quelques secondes)</p></div>
<div class="encadre bleu" style="margin-top:14px;"><div class="encadre-title">🚀 Exercice guidé — 10 min</div>
<p>Ouvre Claude.ai. Teste ses limites avec ce prompt :</p>
<div class="prompt">"Donne-moi 5 statistiques précises sur [ton secteur d'activité] en 2025. Pour chacune, indique ton niveau de confiance et ta source."</div>
<p style="margin-top:10px;">Observe : est-ce qu'il admet ses incertitudes ? Est-ce que les sources existent vraiment ? C'est exactement le réflexe à développer.</p></div>`}
],
recap:{points:["Claude construit ses réponses mot par mot — il ne cherche pas dans une base de données. C'est ce qui le rend puissant en rédaction et faillible sur les faits précis.","Ses forces : lire, rédiger, expliquer, structurer, analyser des images. Ses limites : hallucinations et calculs complexes. La règle d'or : vérifie toujours les faits.","Claude existe en 3 versions : Haiku (rapide), Sonnet (polyvalent, le défaut) et Opus (raisonnement profond, payant). Pour cette formation, Sonnet suffit largement."],prompt:"Explique-moi un concept complexe de [ton domaine] comme si j'avais 12 ans. Ensuite, donne-moi une statistique sur ce sujet — et dis-moi si tu es sûr de ce chiffre ou si tu l'estimes."}};
