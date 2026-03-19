export default {partie:2,num:11,locked:false,titre:"Crée une landing page sans coder",sub:"Une page pro pour ton offre — en 20 minutes, sans designer.",duree:"25 min",niv:"Intermédiaire",
sections:[
{lbl:"🎯 Accroche",titre:"Une page pro pour ton offre — sans designer ni développeur",html:`<p class="block-text">Tu as un service, une offre, une expertise. Mais quand quelqu'un te demande "t'as un site ?", tu envoies… un PDF. Ou pire, rien.</p>
<p class="block-text">Au module précédent, tu as créé un outil interactif. Ici, tu vas créer une page web professionnelle qui présente ton offre et donne envie d'agir — en une conversation avec Claude.</p>
<p class="block-text">La différence avec le Module 10 : tu ne décris plus une logique de calcul. Tu structures un argumentaire commercial. Et toutes tes Compétences — ton style, ton profil client — vont travailler pour toi automatiquement.</p>`},
{lbl:"💡 Notion clé",titre:"Les 7 blocs d'une landing page",html:`<p class="block-text">Une landing page, ce n'est pas juste "du texte sur une page web". C'est un argumentaire structuré pour convaincre. Chaque bloc a un rôle précis :</p>
<table class="tableau"><tr><th>Bloc</th><th>Rôle</th><th>Ce que l'utilisateur se dit</th></tr>
<tr><td>1. Hero</td><td>Titre + sous-titre + CTA</td><td>"C'est quoi et pourquoi ça m'intéresse ?" — tu as 5 secondes</td></tr>
<tr><td>2. Problème</td><td>Décrire la douleur du client</td><td>"Oui, c'est exactement mon problème"</td></tr>
<tr><td>3. Solution</td><td>Ce que tu proposes</td><td>"Ok, comment ça marche ?"</td></tr>
<tr><td>4. Bénéfices</td><td>Les résultats concrets</td><td>"Qu'est-ce que j'y gagne moi ?"</td></tr>
<tr><td>5. Preuve sociale</td><td>Témoignages, chiffres, logos</td><td>"Est-ce que ça marche vraiment ?"</td></tr>
<tr><td>6. FAQ / Objections</td><td>Répondre aux doutes</td><td>"Oui mais…" → répondu avant qu'il ne parte</td></tr>
<tr><td>7. CTA final</td><td>Répéter l'appel à l'action</td><td>"Ok je me lance"</td></tr></table>
<div class="encadre bleu" style="margin-top:14px;"><div class="encadre-title">💡 Ce que tes Compétences font pour toi ici</div>
<table class="tableau"><tr><th>Compétence</th><th>Ce qu'elle apporte à la landing page</th></tr>
<tr><td>"mon-style"</td><td>Les textes de la page sonnent comme toi, pas comme une IA</td></tr>
<tr><td>"profil-client"</td><td>Claude adapte l'argumentaire à ta cible — le bon problème, les bons mots, les bonnes objections</td></tr></table>
<p style="margin-top:10px;font-size:14px;color:#444;">Tu n'as pas besoin de tout dire dans le prompt. Claude connaît déjà ton style et ton client. Tu te concentres sur la structure et le contenu.</p></div>`},
{lbl:"👀 En pratique",titre:"De ton offre à une page publiée",html:`<p class="block-text">Voici le processus complet pour créer une landing page de présentation de ton offre de service.</p>
<div class="encadre bleu"><div class="encadre-title">Message 1 — Poser la base (RCTF + pourquoi + structure)</div>
<div class="prompt">"Tu es un designer web spécialisé en pages de vente. Je suis consultante RH indépendante. Je veux une landing page pour présenter mon offre d'audit RH aux dirigeants de PME.<br><br>Structure la page en 7 blocs : hero avec titre accrocheur et bouton d'action, le problème que vivent mes clients (turnover, recrutement difficile, pas de process), ma solution (audit RH en 2 semaines), les bénéfices concrets (chiffres à l'appui), 2-3 témoignages clients (je te les fournirai après), une FAQ de 4 questions, et un CTA final.<br><br>Design épuré et professionnel. Évite les polices génériques type Inter ou Arial — choisis quelque chose de distinctif. Couleurs : bleu foncé et blanc, accents orange."</div></div>
<div class="encadre orange" style="margin-top:12px;"><div class="encadre-title">Message 2 — Personnaliser les textes</div>
<p><em>"Le hero est bon mais le titre ne me ressemble pas. Propose 3 variantes plus directes, dans mon style. Pour les témoignages, voici 2 retours clients réels : [colle tes témoignages]. Intègre-les."</em></p></div>
<div class="encadre vert" style="margin-top:12px;"><div class="encadre-title">Message 3 — Travailler le design (few-shot)</div>
<p><em>"Voici une landing page dont j'aime le style : [screenshot ou description]. Rapproche le design de cette référence — surtout l'espacement, la taille des titres, et l'ambiance générale."</em></p></div>
<div class="encadre violet" style="margin-top:12px;"><div class="encadre-title">Message 4 — Auto-critique orientée conversion</div>
<p><em>"Mets-toi à la place d'un dirigeant de PME qui arrive sur cette page. En 5 secondes, est-ce qu'il comprend ce que je propose ? Est-ce qu'il a envie de scroller ? Identifie les 3 points faibles et corrige."</em></p></div>
<div class="encadre bleu" style="margin-top:12px;"><div class="encadre-title">Message 5 — Publier</div>
<p>Clique sur "Publier" → copie le lien. Tu peux aussi cliquer sur "Obtenir le code embed" pour intégrer la page sur ton site existant.</p></div>
<p class="block-text" style="margin-top:12px;">En 5 messages, tu as une page de présentation professionnelle que tu peux envoyer à n'importe quel prospect.</p>`},
{lbl:"✏️ Exercice",titre:"Ta landing page",html:`<div class="encadre orange"><div class="encadre-title">🎯 Exercice — 25 min</div>
<p><strong>Étape 1 — Prépare ton contenu (5 min)</strong></p>
<p>Avant d'ouvrir Claude, note :</p><ul>
<li>Ton offre en une phrase (quoi, pour qui)</li>
<li>Le problème principal de ton client</li>
<li>3 bénéfices concrets de ton offre (résultats, pas caractéristiques)</li>
<li>1-2 témoignages ou résultats chiffrés (même approximatifs)</li>
<li>L'action que tu veux que le visiteur fasse (te contacter, réserver un appel, s'inscrire)</li></ul>
<p style="margin-top:14px;"><strong>Étape 2 — Construis avec Claude (15 min)</strong></p>
<p>Envoie ton premier message avec la structure en 7 blocs, ton contenu, et tes préférences de design. Puis itère : personnalise les textes, ajuste le design avec une référence visuelle, lance l'auto-critique conversion.</p>
<p style="margin-top:14px;"><strong>Étape 3 — Publie et teste (5 min)</strong></p>
<p>Publie ta page → envoie le lien à quelqu'un qui ne connaît pas ton offre. Pose une seule question : "En 10 secondes, tu comprends ce que je propose ?" Si la réponse est non, retravaille le hero.</p></div>`}
],
recap:{points:["Une landing page qui convertit suit 7 blocs dans un ordre précis : hero, problème, solution, bénéfices, preuve sociale, FAQ, CTA. Chaque bloc répond à une question que le visiteur se pose.","Tes Compétences \"mon-style\" et \"profil-client\" font le gros du travail : les textes sonnent comme toi et parlent à ta cible — automatiquement.","Le test ultime : quelqu'un qui ne te connaît pas comprend ton offre en 10 secondes. Si ce n'est pas le cas, le problème est dans le hero — pas dans le reste."]}};
