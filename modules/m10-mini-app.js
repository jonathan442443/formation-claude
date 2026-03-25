export default {partie:2,num:10,locked:false,titre:"Crée une mini-app sans coder",sub:"Calculateur, quiz, dashboard : des outils interactifs à partager en un clic.",duree:"25 min",niv:"Intermédiaire",
sections:[
{lbl:"🎯 Accroche",titre:"Un outil qui marche, sans écrire une ligne de code",html:`<p class="block-text">Jusqu'ici, tu as utilisé Claude pour produire du texte, des documents, des analyses. Mais Claude peut aussi construire de vrais outils interactifs, des mini-applications que tes clients ou tes collègues peuvent utiliser directement.</p>
<p class="block-text">Un calculateur de devis. Un quiz de qualification. Un tableau de bord de suivi. Normalement, il faut un développeur. Ici, il te faut une conversation.</p>
<p class="block-text">Ce module t'apprend à décrire ce que tu veux de façon assez précise pour que Claude le construise, et à itérer jusqu'à ce que ça marche vraiment. Tu vas mobiliser tout ce que tu as appris depuis le début de la formation.</p>`},
{lbl:"💡 Notion clé",titre:"Penser comme un concepteur",html:`<p class="block-text">Créer une mini-app, ce n'est pas juste dire "fais-moi un calculateur". Il faut décrire la logique, et c'est là que toutes tes techniques de prompting entrent en jeu.</p>
<div class="encadre bleu"><div class="encadre-title">Les 4 questions à te poser avant de demander</div>
<table class="tableau"><tr><th>Question</th><th>Exemple (calculateur de devis)</th></tr>
<tr><td>C'est pour qui ?</td><td>Mes clients, des dirigeants de PME qui veulent un devis rapide</td></tr>
<tr><td>Ça fait quoi ?</td><td>Ils choisissent une formule, une durée, des options → le prix s'affiche</td></tr>
<tr><td>Quelles sont les règles ?</td><td>Formule Basic = 500€/jour, Premium = 800€/jour, remise 10% au-delà de 5 jours</td></tr>
<tr><td>Ça ressemble à quoi ?</td><td>Interface simple, 3 étapes max, couleurs de ma marque</td></tr></table></div>
<div class="encadre orange" style="margin-top:12px;"><div class="encadre-title">Comment le demander à Claude</div>
<div class="prompt">"Tu es un designer d'applications web. [RÔLE]<br><br>Je suis consultante RH. Mes clients me demandent souvent combien coûte une mission avant de me rencontrer, je perds du temps à faire des devis manuels. [POURQUOI]<br><br>Crée un calculateur de devis interactif. Le client choisit : type de mission (audit RH / recrutement / formation), nombre de jours (1 à 20), et options (rapport écrit +200€, suivi mensuel +150€/mois). Le prix total se calcule automatiquement. [LOGIQUE]<br><br>Interface claire et professionnelle. Maximum 1 écran. Bouton 'Demander un devis détaillé' à la fin qui affiche un message avec mon email. [FORMAT]<br><br>Voici un calculateur que j'aime bien comme référence : [description ou screenshot]. [FEW-SHOT]"</div></div>
<div class="encadre rouge" style="margin-top:12px;"><div class="encadre-title">⚠️ Les limites à connaître</div>
<table class="tableau"><tr><th>Ce que les Artéfacts font bien</th><th>Ce qu'ils ne font pas</th></tr>
<tr><td>Calculateurs, quiz, formulaires visuels</td><td>Se connecter à une base de données</td></tr>
<tr><td>Pages web interactives</td><td>Envoyer des emails ou des notifications</td></tr>
<tr><td>Graphiques et tableaux de bord</td><td>Stocker les données des utilisateurs de façon permanente</td></tr>
<tr><td>Publier via un lien partageable</td><td>Remplacer un vrai site web avec nom de domaine</td></tr></table>
<p style="margin-top:10px;font-size:14px;color:#444;">Les Artéfacts sont parfaits pour prototyper, impressionner un client, tester une idée, ou créer un outil interne. Pour une application en production à grande échelle, il faudra un développeur.</p></div>`},
{lbl:"👀 En pratique",titre:"De l'idée au lien partageable",html:`<p class="block-text">Voici le processus complet pour créer un calculateur de devis interactif. Suis les étapes dans Claude, tu peux les adapter à ton activité.</p>
<div class="encadre bleu"><div class="encadre-title">Message 1 : Poser la base (RCTF + pourquoi + visuel)</div>
<p><em>"Tu es un designer d'applications web. Je suis consultante RH indépendante. Mes clients me demandent souvent combien coûte une mission avant de me rencontrer, je perds du temps à faire des devis manuels.</em></p>
<p><em>Crée un calculateur de devis interactif. Le client choisit : type de mission (audit RH / recrutement / formation), nombre de jours (1 à 20), et options (rapport écrit +200€, suivi mensuel +150€/mois). Le prix total se calcule automatiquement. Design épuré et professionnel, fond blanc, accents bleu foncé."</em></p></div>
<div class="encadre orange" style="margin-top:12px;"><div class="encadre-title">Message 2 : Tester et corriger</div>
<p>Teste l'outil : clique sur chaque option, vérifie les calculs, essaie des cas extrêmes. Si quelque chose ne marche pas, décris le problème simplement :</p>
<p><em>"Le calcul est faux quand je choisis 10 jours + les deux options. Le total devrait être 8 350€ mais il affiche 7 200€."</em></p></div>
<div class="encadre vert" style="margin-top:12px;"><div class="encadre-title">Message 3 : Itérer sur le design (few-shot)</div>
<p><em>"L'outil fonctionne. Maintenant améliore le design : voici un exemple de style que j'aime [description ou screenshot]. Ajoute un titre et une phrase d'accroche en haut."</em></p></div>
<div class="encadre violet" style="margin-top:12px;"><div class="encadre-title">Message 4 : Auto-critique utilisateur</div>
<p><em>"Mets-toi à la place d'un dirigeant de PME qui découvre ce calculateur. C'est clair ? Le parcours est logique ? Qu'est-ce qui pourrait le faire abandonner en cours de route ? Corrige."</em></p></div>
<div class="encadre bleu" style="margin-top:12px;"><div class="encadre-title">Message 5 : Call-to-action et publication</div>
<p><em>"À la fin du calcul, ajoute un bouton 'Demander un devis personnalisé' qui affiche mon email et mon téléphone."</em></p>
<p style="margin-top:8px;">Puis clique sur "Publier" → copie le lien → partage-le à tes clients ou intègre-le sur ton site avec le code embed.</p></div>
<div class="encadre vert" style="margin-top:12px;"><div class="encadre-title">💡 Astuce</div><p>Si tu veux que l'outil retienne les données entre les sessions (par exemple un tracker ou un journal), précise-le dans ton premier message. Le stockage persistant (jusqu'à 20 Mo par artéfact, texte uniquement) est disponible sur les plans payants (Pro, Max). Sur le plan gratuit, les données ne sont pas conservées entre les sessions.</p></div>
<p class="block-text" style="margin-top:12px;">En 5 messages et 15 minutes, tu as un outil professionnel partageable, sans avoir écrit une ligne de code.</p>`},
{lbl:"✏️ Exercice",titre:"Ton premier outil",html:`<div class="encadre orange"><div class="encadre-title">🎯 Exercice : 20 min</div>
<p><strong>Étape 1 : Choisis ton outil (2 min)</strong></p>
<p>Qu'est-ce qui serait utile pour toi ou tes clients ? Quelques idées :</p><ul>
<li>Un calculateur (devis, tarifs, ROI, budget)</li>
<li>Un quiz (qualification de prospect, auto-diagnostic, test de connaissances)</li>
<li>Un tableau de bord (suivi de projet, checklist interactive)</li>
<li>Un outil de formation (flashcards, exercices interactifs)</li></ul>
<p style="margin-top:14px;"><strong>Étape 2 : Réponds aux 4 questions (3 min)</strong></p>
<p>Avant de demander à Claude, note :</p><ul>
<li>C'est pour qui ?</li>
<li>Ça fait quoi exactement ?</li>
<li>Quelles sont les règles / la logique ?</li>
<li>À quoi ça doit ressembler ?</li></ul>
<p style="margin-top:14px;"><strong>Étape 3 : Construis avec Claude (10 min)</strong></p>
<p>Envoie ton premier message avec tout le contexte (RCTF + pourquoi + logique + visuel). Puis itère : teste, corrige, améliore le design, ajoute l'auto-critique utilisateur.</p>
<p style="margin-top:14px;"><strong>Étape 4 : Publie (5 min)</strong></p>
<p>Clique sur "Publier" → copie le lien. Envoie-le à quelqu'un : un client, un collègue, un ami. Demande-lui : "C'est clair ? Tu arrives au bout ?"</p>
<p style="margin-top:8px;"><em>Si la personne utilise ton outil sans t'appeler à l'aide, c'est gagné.</em></p></div>`}
],
recap:{points:["Claude peut construire des mini-applications interactives (calculateurs, quiz, dashboards, outils de formation) à partir d'une conversation. Pas besoin de coder.","La clé : décrire la logique précisément (pour qui, quoi, quelles règles, quel visuel). Plus ton premier message est complet, moins tu itères.","Teste toujours avant de publier. Vérifie les calculs, essaie les cas extrêmes, et demande à Claude de se mettre à la place de l'utilisateur."]}};
