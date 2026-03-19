export default {partie:1,num:6,locked:false,titre:"Compétences et Connecteurs",sub:"Apprends à Claude ta façon de travailler et connecte-le à tes outils.",duree:"25 min",niv:"Débutant",
sections:[
{lbl:"🎯 Accroche",titre:"Claude travaille comme toi — automatiquement",html:`<p class="block-text">Avec les Projets, Claude connaît le contexte de chaque sujet. Mais tes préférences générales — ton style d'écriture, tes formats préférés, tes habitudes — tu dois les réécrire dans chaque Projet.</p>
<p class="block-text">Les Compétences règlent ça : tu définis tes règles une fois, Claude les applique partout. Les Connecteurs vont encore plus loin : Claude accède directement à tes outils — Gmail, Drive, Calendar — pour travailler avec tes vraies données.</p>
<div class="encadre vert"><div class="encadre-title">💡 Bonne nouvelle</div><p>Avant même de créer tes propres Compétences, Claude est livré avec des Compétences intégrées qui s'activent automatiquement : création de fichiers <strong>Excel</strong>, <strong>Word</strong>, <strong>PowerPoint</strong> et <strong>PDF</strong>. Demande simplement "Crée-moi un Excel de suivi budgétaire" — Claude sait déjà comment faire. Prérequis : vérifie que l'exécution de code est activée dans Paramètres → Capacités.</p></div>`},
{lbl:"👜 Compétences",titre:"Apprends à Claude tes règles",html:`<p class="block-text">Une Compétence (appelée <em>Skill</em> en anglais dans la documentation Anthropic), c'est un ensemble d'instructions que Claude charge dynamiquement quand il reconnaît le contexte. Tu ne lui dis pas "utilise telle compétence" — il le fait tout seul.</p>
<p class="block-text">Exemple : tu crées une compétence "Emails professionnels". À chaque fois que tu demandes un email, Claude applique tes règles — sans que tu les répètes.</p>
<div class="encadre bleu"><div class="encadre-title">Comment y accéder</div><p>Barre gauche → Personnaliser (👜) → Compétences</p><ul>
<li><strong>Mes compétences</strong> — celles que tu as créées (activables/désactivables via un toggle)</li>
<li><strong>Exemples</strong> — des compétences prêtes à explorer : brand-guidelines, doc-coauthoring, internal-comms…</li></ul></div>
<div class="encadre orange" style="margin-top:12px;"><div class="encadre-title">3 façons de créer (bouton +)</div>
<table class="tableau"><tr><th>Méthode</th><th>Pour qui</th><th>Comment ça marche</th></tr>
<tr><td>Créer avec Claude</td><td>La plus simple</td><td>Claude te pose des questions et construit la compétence pour toi</td></tr>
<tr><td>Rédiger les instructions</td><td>Si tu sais ce que tu veux</td><td>Formulaire avec 3 champs : Nom, Description, Instructions</td></tr>
<tr><td>Téléverser</td><td>Utilisateurs avancés</td><td>Upload d'un fichier de compétence</td></tr></table></div>
<div class="encadre vert" style="margin-top:12px;"><div class="encadre-title">💡 La description est cruciale</div><p>C'est elle qui permet à Claude de savoir <em>quand</em> activer la compétence. Une bonne description répond à <strong>2 questions</strong> : que fait cette compétence ? Et quand Claude doit-il l'utiliser ?</p>
<p style="margin-top:8px;">Exemple : <em>"À utiliser quand l'utilisateur demande un email professionnel, une relance, ou un message de prospection."</em></p>
<p style="margin-top:8px;"><strong>Si ta Compétence ne se déclenche pas</strong> quand tu t'y attends, enrichis sa description avec les mots et les phrases que tu utilises réellement quand tu fais cette demande.</p></div>
<div class="encadre violet" style="margin-top:12px;"><div class="encadre-title">3 compétences à découvrir</div>
<p style="margin-top:8px;"><strong>1. Mon style d'écriture (à créer toi-même)</strong></p>
<ul><li><strong>Nom</strong> : mon-style</li>
<li><strong>Description</strong> : "À utiliser pour tout contenu que je demande : posts, emails, articles, messages."</li>
<li><strong>Instructions</strong> : "Mon style : phrases courtes, ton direct, pas de jargon corporate. Je tutoie. Je commence toujours par le concret, jamais par une question rhétorique. Pas de listes à puces quand une phrase suffit. Vocabulaire simple, impact maximal."</li></ul>
<p style="margin-top:12px;"><strong>2. Co-rédaction de documents (répertoire officiel)</strong></p>
<ul><li><strong>Nom</strong> : doc-coauthoring</li>
<li><strong>S'active quand</strong> : tu veux rédiger une proposition, un rapport, une spec, un document structuré.</li>
<li><strong>Ce que ça fait</strong> — un workflow en 3 étapes :<br>
① <em>Collecte de contexte</em> : Claude te pose 5 à 10 questions, tu vides tout ce que tu sais (en vrac, c'est le but).<br>
② <em>Rédaction section par section</em> : pour chaque partie, Claude brainstorme des idées, tu choisis, il rédige, tu affines.<br>
③ <em>Test lecteur</em> : Claude relit le document comme quelqu'un qui le découvre — et corrige ce qui n'est pas clair.</li>
<li><strong>Où le trouver</strong> : Personnaliser → Compétences → Exemples.</li></ul>
<p style="margin-top:12px;"><strong>3. Communications internes (répertoire officiel)</strong></p>
<ul><li><strong>Nom</strong> : internal-comms</li>
<li><strong>S'active quand</strong> : tu rédiges une communication interne — update d'équipe, newsletter, FAQ, rapport d'incident, update projet.</li>
<li><strong>Ce que ça fait</strong> : Claude adapte automatiquement le format selon le type de communication. Un update 3P (Progression / Prochaines étapes / Problèmes), une newsletter, une FAQ… Chaque type suit un template spécifique.</li>
<li><strong>Où le trouver</strong> : Personnaliser → Compétences → Exemples.</li></ul>
<p style="margin-top:10px;font-size:14px;color:#444;">L'exemple 1 est à créer toi-même (c'est ta voix, personne ne peut le faire à ta place). Les exemples 2 et 3 sont prêts à l'emploi — active-les en un clic.</p></div>
<div class="encadre bleu" style="margin-top:12px;"><div class="encadre-title">📁 Compétences vs Projets — ne pas confondre</div>
<table class="tableau"><tr><th></th><th>Projets</th><th>Compétences</th></tr>
<tr><td>Quand ça s'active</td><td>Toujours (dans le projet)</td><td>Dynamiquement (quand Claude le juge utile)</td></tr>
<tr><td>Ce que c'est</td><td>Du contexte (qui tu es, tes fichiers)</td><td>Des instructions (comment faire une tâche)</td></tr>
<tr><td>Portée</td><td>Un sujet précis</td><td>Toutes tes conversations</td></tr></table>
<p style="margin-top:10px;font-size:14px;color:#444;">En résumé : le Projet dit à Claude <strong>sur quoi</strong> tu travailles. La Compétence lui dit <strong>comment</strong> travailler.</p></div>
<div class="encadre orange" style="margin-top:12px;"><div class="encadre-title">🧩 Le répertoire de Compétences</div><p>En plus de tes propres créations, il existe un répertoire de Compétences professionnelles prêtes à l'emploi — créées par des partenaires comme Notion, Figma ou Atlassian. Tu peux les découvrir dans Personnaliser → Compétences → section "Exemples".</p></div>`},
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
<tr><td>Slack</td><td>Lire des messages, créer des résumés de canaux</td></tr>
<tr><td>Asana</td><td>Créer des tâches, suivre l'avancement d'un projet</td></tr>
<tr><td>Canva</td><td>Créer des designs à partir de tes instructions</td></tr></table></div>
<div class="encadre vert" style="margin-top:12px;"><div class="encadre-title">⚡ Combos multi-outils</div><p>La vraie puissance des connecteurs, c'est de les combiner :</p><ul>
<li><strong>Notes + Asana</strong> : "Transforme mes notes de réunion en tâches assignées dans Asana"</li>
<li><strong>Drive + Gmail</strong> : "Lis le rapport sur mon Drive et rédige un email de synthèse"</li>
<li><strong>Calendar + Gmail</strong> : "Regarde mon planning de demain et propose un email de confirmation pour chaque rendez-vous"</li></ul>
<p style="margin-top:8px;">Astuce : sois spécifique sur l'outil visé. Commence ta demande par <em>"En utilisant Google Drive, trouve…"</em> — Claude saura exactement où chercher.</p></div>
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
recap:{points:["Les Compétences sont des instructions que Claude active dynamiquement selon la tâche. Les Compétences Anthropic (Excel, Word, PowerPoint, PDF) fonctionnent déjà sans configuration. Tes Compétences personnalisées complètent le tout.","Les Connecteurs branchent Claude à tes outils (Gmail, Calendar, Notion, Slack…). Des dizaines d'intégrations vérifiées par Anthropic, gratuites, déconnectables à tout moment.","Compétences = comment Claude travaille. Connecteurs = avec quoi il travaille. Les deux combinés transforment Claude en vrai assistant personnalisé."]}};
