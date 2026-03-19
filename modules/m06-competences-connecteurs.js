export default {partie:1,num:6,locked:false,titre:"Compétences et Connecteurs",sub:"Apprends à Claude ta façon de travailler et connecte-le à tes outils.",duree:"25 min",niv:"Débutant",
sections:[
{lbl:"🎯 Accroche",titre:"Claude travaille comme toi — automatiquement",html:`<p class="block-text">Avec les Projets, Claude connaît le contexte de chaque sujet. Mais tes préférences générales — ton style d'écriture, tes formats préférés, tes habitudes — tu dois les réécrire dans chaque Projet.</p>
<p class="block-text">Les Compétences règlent ça : tu définis tes règles une fois, Claude les applique partout. Les Connecteurs vont encore plus loin : Claude accède directement à tes outils — Gmail, Drive, Calendar — pour travailler avec tes vraies données.</p>`},
{lbl:"👜 Compétences",titre:"Apprends à Claude tes règles",html:`<p class="block-text">Une Compétence, c'est un ensemble d'instructions que Claude applique automatiquement quand il reconnaît le contexte. Tu ne lui dis pas "utilise telle compétence" — il le fait tout seul.</p>
<p class="block-text">Exemple : tu crées une compétence "Emails professionnels". À chaque fois que tu demandes un email, Claude applique tes règles — sans que tu les répètes.</p>
<div class="encadre bleu"><div class="encadre-title">Comment y accéder</div><p>Barre gauche → Personnaliser (👜) → Compétences</p><ul>
<li><strong>Mes compétences</strong> — celles que tu as créées (activables/désactivables via un toggle)</li>
<li><strong>Exemples</strong> — des compétences prêtes à explorer : brand-guidelines, doc-coauthoring, internal-comms…</li></ul></div>
<div class="encadre orange" style="margin-top:12px;"><div class="encadre-title">3 façons de créer (bouton +)</div>
<table class="tableau"><tr><th>Méthode</th><th>Pour qui</th><th>Comment ça marche</th></tr>
<tr><td>Créer avec Claude</td><td>La plus simple</td><td>Claude te pose des questions et construit la compétence pour toi</td></tr>
<tr><td>Rédiger les instructions</td><td>Si tu sais ce que tu veux</td><td>Formulaire avec 3 champs : Nom, Description, Instructions</td></tr>
<tr><td>Téléverser</td><td>Utilisateurs avancés</td><td>Upload d'un fichier de compétence</td></tr></table></div>
<div class="encadre vert" style="margin-top:12px;"><div class="encadre-title">💡 La description est cruciale</div><p>C'est elle qui permet à Claude de savoir <em>quand</em> activer la compétence. Sois précis : "À utiliser quand l'utilisateur demande un email professionnel, une relance, ou un message de prospection."</p></div>
<div class="encadre violet" style="margin-top:12px;"><div class="encadre-title">3 exemples de compétences puissantes</div>
<p style="margin-top:8px;"><strong>1. Mon style d'écriture</strong></p>
<ul><li><strong>Nom</strong> : mon-style</li>
<li><strong>Description</strong> : "À utiliser pour tout contenu que je demande : posts, emails, articles, messages."</li>
<li><strong>Instructions</strong> : "Mon style : phrases courtes, ton direct, pas de jargon corporate. Je tutoie. Je commence toujours par le concret, jamais par une question rhétorique. Pas de listes à puces quand une phrase suffit. Vocabulaire simple, impact maximal."</li></ul>
<p style="margin-top:10px;"><strong>2. Mon client idéal</strong></p>
<ul><li><strong>Nom</strong> : profil-client</li>
<li><strong>Description</strong> : "À utiliser quand je travaille sur du contenu marketing, de la prospection, ou une offre commerciale."</li>
<li><strong>Instructions</strong> : "Mon client idéal : DRH de PME industrielle, 50-200 salariés. Problèmes : turnover élevé, difficulté à recruter, pas de process RH structuré. Ce qui le freine : méfiance envers les consultants, budget serré, besoin de résultats rapides. Ce qui le convainc : des exemples concrets, des chiffres, un ton pragmatique."</li></ul>
<p style="margin-top:10px;"><strong>3. Compte-rendu de réunion</strong></p>
<ul><li><strong>Nom</strong> : compte-rendu-reunion</li>
<li><strong>Description</strong> : "À utiliser quand je partage des notes de réunion ou que je demande un compte-rendu."</li>
<li><strong>Instructions</strong> : "Structure toujours en 4 parties : Décisions prises / Actions (responsable + deadline) / Points en suspens / Prochaine étape. Ton professionnel. Maximum 1 page. Commence directement par les décisions, pas par un résumé de qui était présent."</li></ul></div>`},
{lbl:"🔌 Connecteurs",titre:"Claude accède à tes vrais outils",html:`<p class="block-text">Les Connecteurs permettent à Claude d'accéder à tes applications — pour lire tes emails, consulter ton agenda, chercher dans tes documents. Tu lui parles, il va chercher l'info dans tes outils.</p>
<div class="encadre bleu"><div class="encadre-title">Connecter un outil — pas à pas</div><ol style="padding-left:16px;display:flex;flex-direction:column;gap:6px;">
<li style="font-size:14px;color:#444;">Clique sur le bouton + → "Parcourir les connecteurs"</li>
<li style="font-size:14px;color:#444;">Le répertoire s'ouvre : tous les connecteurs sont vérifiés par Anthropic. Tu peux filtrer par catégorie, type ou popularité.</li>
<li style="font-size:14px;color:#444;">Clique sur le + à côté de l'outil voulu (Gmail, Google Calendar, Notion…)</li>
<li style="font-size:14px;color:#444;">Suis l'authentification — tu autorises Claude à accéder à tes données</li>
<li style="font-size:14px;color:#444;">C'est fait. Dans ta prochaine conversation, Claude peut accéder à cet outil automatiquement.</li></ol>
<p style="margin-top:8px;font-size:14px;color:#444;"><em>Le bouton + propose aussi "Ajouter un connecteur personnalisé" — c'est pour les utilisateurs avancés, pas besoin pour cette formation.</em></p></div>
<div class="encadre orange" style="margin-top:12px;"><div class="encadre-title">Les plus utiles pour commencer</div>
<table class="tableau"><tr><th>Connecteur</th><th>Ce que Claude peut faire</th></tr>
<tr><td>Gmail</td><td>Chercher tes emails, résumer des fils de discussion, rédiger des brouillons de réponse</td></tr>
<tr><td>Google Calendar</td><td>Consulter ton agenda, créer et modifier des événements</td></tr>
<tr><td>Google Drive</td><td>Lire tes documents, sauvegarder des fichiers créés par Claude</td></tr>
<tr><td>Notion</td><td>Chercher, lire et mettre à jour tes pages Notion</td></tr>
<tr><td>Slack</td><td>Lire des messages, créer des résumés de canaux</td></tr></table></div>
<div class="encadre rouge" style="margin-top:12px;"><div class="encadre-title">⚠️ Confidentialité</div><p>Tes données ne sont pas partagées. Tu gardes le contrôle. Tu peux déconnecter un outil à tout moment (bouton "Déconnecter"). Claude ne peut pas agir sans ton approbation — par exemple, il crée des brouillons d'emails mais ne les envoie pas.</p></div>`},
{lbl:"✏️ Exercice",titre:"Configure tes règles et tes outils",html:`<div class="encadre orange"><div class="encadre-title">🎯 Exercice — 15 min</div>
<p><strong>Étape 1 — Crée ta première Compétence (8 min)</strong></p>
<p>Barre gauche → Personnaliser → Compétences → bouton + → "Créer avec Claude". Dis-lui :</p>
<div class="prompt">"Je veux créer une compétence pour mes emails professionnels. Mon ton est direct et chaleureux. Maximum 5 lignes. Je termine toujours par un appel à l'action. Je ne commence jamais par 'J'espère que vous allez bien'."</div>
<p style="margin-top:8px;">Claude te pose des questions et construit la compétence. Une fois créée, teste-la : ouvre une nouvelle conversation et demande un email sans préciser le style. Claude l'applique tout seul.</p>
<p style="margin-top:14px;"><strong>Étape 2 — Connecte un outil (5 min)</strong></p>
<p>Barre gauche → Personnaliser → Connecteurs → bouton + → "Parcourir les connecteurs". Connecte Gmail ou Google Calendar (ou un autre outil que tu utilises au quotidien). Puis dans une conversation, teste :</p>
<ul><li>Gmail : <em>"Résume mes 3 derniers emails non lus."</em></li>
<li>Google Calendar : <em>"Qu'est-ce que j'ai de prévu demain ?"</em></li></ul>
<p style="margin-top:14px;"><strong>Étape 3 — Explore les exemples (2 min)</strong></p>
<p>Retourne dans Compétences. Parcours la section "Exemples" : brand-guidelines, doc-coauthoring, internal-comms… Clique sur celles qui t'intéressent pour voir comment elles sont construites.</p></div>`}
],
recap:{points:["Les Compétences sont des règles permanentes que Claude applique automatiquement — sans que tu les mentionnes. La clé : une description précise pour que Claude sache quand les activer.","Les Connecteurs branchent Claude à tes outils (Gmail, Calendar, Notion, Slack…). Plus de 50 intégrations vérifiées par Anthropic, gratuites, déconnectables à tout moment.","Compétences = comment Claude travaille. Connecteurs = avec quoi il travaille. Les deux combinés transforment Claude en vrai assistant personnalisé."]}};
