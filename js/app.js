import { PARTIES, MODULES } from './data.js';

let currentModule=null;

function showHome(){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-home').classList.add('active');
  currentModule=null;updateNav();updateProgress(0);window.scrollTo(0,0);
}

function showModule(num){
  const m=MODULES[num];if(m.locked)return;
  currentModule=num;
  let page=document.getElementById('page-module-'+num);
  if(!page){page=buildPage(m);document.getElementById('module-pages').appendChild(page);}
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  page.classList.add('active');
  updateNav();updateProgress((num+1)/(MODULES.length-2));window.scrollTo(0,0);
}

function updateNav(){
  const c=document.getElementById('navLinks');
  c.innerHTML=MODULES.filter(m=>!m.locked).map(m=>`<button class="nav-module-btn${currentModule===m.num?' current':''}" onclick="showModule(${m.num})">M${m.num}</button>`).join('');
}

function updateProgress(r){document.getElementById('progressFill').style.width=Math.round(r*100)+'%';}

function buildPage(m){
  const page=document.createElement('div');
  page.className='page';page.id='page-module-'+m.num;
  const p=PARTIES[m.partie];
  const prev=MODULES.slice(0,m.num).filter(x=>!x.locked).pop();
  const next=MODULES.slice(m.num+1).filter(x=>!x.locked)[0];

  const sectionsHTML=m.sections.map((s,i)=>`
    <div class="content-block">
      <div class="block-label">${s.lbl}</div>
      <div class="block-title">${s.titre}</div>
      ${s.html}
    </div>
    ${i<m.sections.length-1?'<hr class="separateur">':''}
  `).join('');

  const recapHTML=m.recap?`
    <div class="fiche-recap">
      <div class="fiche-recap-header"><div class="fiche-recap-title">📋 Fiche Récap — Module ${m.num}</div></div>
      ${m.recap.points.map((pt,i)=>`<div class="fiche-point"><div class="fiche-num">${i+1}</div><div class="fiche-text">${pt}</div></div>`).join('')}
      <div class="fiche-prompt"><div class="fiche-prompt-label">✏️ Le prompt du module à essayer</div><div class="fiche-prompt-text">${m.recap.prompt}</div></div>
      ${next?`<div class="fiche-next" onclick="showModule(${next.num})">Prochain module : ${next.titre} →</div>`:`<div class="fiche-next">🎉 Félicitations — Formation terminée !</div>`}
    </div>`:'';

  const navHTML=(p2,label)=>p2?`<button class="nav-btn${p2===next?' next':''}" onclick="showModule(${p2.num})">${label}</button>`:`<button class="nav-btn" onclick="showHome()">← Accueil</button>`;

  page.innerHTML=`
    <div class="module-page">
      <div class="module-hero">
        <div class="module-hero-content">
          <div class="module-partie">${p.label} — ${p.titre}</div>
          <div class="module-num-big">MODULE ${m.num}</div>
          <h1 class="module-hero-title">${m.titre}</h1>
          <p class="module-hero-desc">${m.sub}</p>
          <div class="module-meta-bar">
            <span class="meta-tag" style="background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.7);">${m.niv}</span>
          </div>
        </div>
      </div>
      <div class="module-nav-btns">
        ${prev?`<button class="nav-btn" onclick="showModule(${prev.num})">← M${prev.num} : ${prev.titre}</button>`:`<button class="nav-btn" onclick="showHome()">← Accueil</button>`}
        ${next?`<button class="nav-btn next" onclick="showModule(${next.num})">M${next.num} : ${next.titre} →</button>`:''}
      </div>
      ${sectionsHTML}
      ${recapHTML}
      <div style="margin-top:32px;">
        <div class="module-nav-btns">
          ${prev?`<button class="nav-btn" onclick="showModule(${prev.num})">← Module ${prev.num}</button>`:`<button class="nav-btn" onclick="showHome()">← Accueil</button>`}
          ${next?`<button class="nav-btn next" onclick="showModule(${next.num})">Module ${next.num} →</button>`:''}
        </div>
      </div>
    </div>`;
  return page;
}

function buildIndex(){
  const c=document.getElementById('idx-grid');
  let html='';
  const byPartie=[[],[],[],[]];
  MODULES.forEach(m=>byPartie[m.partie].push(m));
  byPartie.forEach((mods,pi)=>{
    const p=PARTIES[pi];
    html+=`<div class="partie-header">
      <span class="partie-badge" style="background:${p.bg};color:${p.color};">${p.label}</span>
      <span class="partie-titre">${p.titre}</span>
      <span class="partie-nb">${mods[0].num} à ${mods[mods.length-1].num}</span>
    </div>
    <div class="modules-grid">${mods.map(m=>`
      <div class="module-card${m.locked?' locked':''}" onclick="${m.locked?'':'showModule('+m.num+')'}">
        <div class="module-num" style="background:${p.bg};color:${p.color};">${m.num}</div>
        <div>
          <div class="module-title">${m.titre}</div>
          <div class="module-subtitle">${m.sub}</div>
          <div class="module-meta">
            ${m.locked?'<span class="meta-tag" style="background:#FFF3E0;color:#e65100;">Bientôt</span>':`<span class="meta-tag" style="background:#F0F0F0;color:#666;">${m.niv}</span>`}
          </div>
        </div>
      </div>`).join('')}</div>`;
  });
  c.innerHTML=html;
}

buildIndex();updateNav();

// Expose to global scope for inline onclick handlers
window.showHome = showHome;
window.showModule = showModule;
