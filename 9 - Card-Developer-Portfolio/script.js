// Busca dinâmica do perfil público da DIO a cada carregamento.
// Estratégia: tentar múltiplos endpoints do r.jina.ai para evitar CORS
// e depois extrair tanto do DOM quanto de possíveis scripts JSON embutidos.

const PROFILE = "https://www.dio.me/users/mayvom";
const CANDIDATES = [
  "http://localhost:8787/proxy?u=" + encodeURIComponent("https://www.dio.me/users/mayvom"),
  "https://r.jina.ai/http://www.dio.me/users/mayvom",
  "https://r.jina.ai/http://dio.me/users/mayvom"
];

async function fetchProfile(){
  let lastErr;
  for(const url of CANDIDATES){
    try{
      const res = await fetch(url, { cache: "no-store" });
      if(res.ok){
        const html = await res.text();
        const parser = new DOMParser();
        return parser.parseFromString(html, "text/html");
      }else{
        lastErr = new Error("HTTP " + res.status + " em " + url);
      }
    }catch(e){
      lastErr = e;
    }
  }
  throw lastErr || new Error("Não foi possível baixar o HTML do perfil.");
}

function readAllJsonFromScripts(doc){
  const blocks = [];
  doc.querySelectorAll("script").forEach(sc => {
    const txt = sc.textContent?.trim();
    if(!txt) return;
    // Tenta JSON puro
    try{
      blocks.push(JSON.parse(txt));
      return;
    }catch{}
    // Tenta JSON envovido em window.__... = {...}
    const m = txt.match(/\{[\s\S]*\}/);
    if(m){
      try{ blocks.push(JSON.parse(m[0])); }catch{}
    }
  });
  return blocks;
}

function scan(obj, pred, path = []){
  const out = [];
  if (pred(obj, path)) out.push(obj);
  if (obj && typeof obj === "object"){
    for (const [k, v] of Object.entries(obj)){
      out.push(...scan(v, pred, path.concat(k)));
    }
  }
  return out;
}

function getFirstTextCandidate(list){
  for(const v of list){
    if(typeof v === "string" && v.trim()) return v.trim();
    if(typeof v === "number") return String(v);
  }
  return null;
}

function extractStats(doc){
  const stats = {};
  // 1) Tenta ler do texto
  const txt = doc.body?.textContent || "";
  const mLevel = txt.match(/Level\s*([0-9]+)/i);
  const mRep   = txt.match(/Reputa[cç][aã]o[:\s]*([\d.]+)/i);
  const mSince = txt.match(/Usu[aá]rio DIO desde\s*([^\n]+)/i);
  const mLast  = txt.match(/Atividade mais recente\s*([^\n]+)/i);
  if(mLevel) stats.level = mLevel[1];
  if(mRep) stats.reputation = mRep[1];
  if(mSince) stats.memberSince = mSince[1];
  if(mLast) stats.lastActivity = mLast[1];

  // 2) Se faltou algo, tenta vasculhar scripts JSON embutidos
  if(!stats.level || !stats.reputation || !stats.memberSince || !stats.lastActivity){
    const blocks = readAllJsonFromScripts(doc);
    const nodesLevel = scan(blocks, (n,p)=> typeof n==='number' && /level/i.test(p.join(".")));
    const nodesRep   = scan(blocks, (n,p)=> (typeof n==='number'||typeof n==='string') && /reput/i.test(p.join(".")));
    const nodesSince = scan(blocks, (n,p)=> typeof n==='string' && /(member|since|criado|created|joined)/i.test(p.join(".")));
    const nodesLast  = scan(blocks, (n,p)=> typeof n==='string' && /(last.*activity|lastActive|updatedAt)/i.test(p.join(".")));

    stats.level = stats.level || getFirstTextCandidate(nodesLevel);
    stats.reputation = stats.reputation || getFirstTextCandidate(nodesRep);
    stats.memberSince = stats.memberSince || getFirstTextCandidate(nodesSince);
    stats.lastActivity = stats.lastActivity || getFirstTextCandidate(nodesLast);
  }
  return stats;
}

function extractDisplayName(doc){
  // tenta a tag <title> "Nome — DIO Community Profile"
  const t = doc.querySelector("title")?.textContent || "";
  const m = t.split("—")[0].trim();
  if(m) return m;
  // fallback: maior heading no body
  const h = doc.querySelector("h1,h2,h3");
  if(h) return h.textContent.trim();
  return "Usuário DIO";
}

function extractTopSkills(doc){
  const txt = doc.body?.textContent || "";
  const guesses = [];
  ["JavaScript","TypeScript","React","HTML","CSS","UX","UI","Figma","Azure","Node","Python","IA","AI","Git","GitHub"]
    .forEach(skill => { if(new RegExp("\\b"+skill+"\\b","i").test(txt)) guesses.push(skill); });
  return [...new Set(guesses)].slice(0,8);
}

function extractAchievements(doc){
  // Procura seção "Últimas Conquistas" com ÍCONES (png/webp).
  const imgs = [...doc.querySelectorAll("img")];
  const picks = [];
  const isIcon = (src, alt) => {
    if(!src) return false;
    const s = src.toLowerCase();
    const a = (alt||"").toLowerCase();
    // Heurística: ícones de conquistas no perfil aparecem como png/webp e contêm
    // termos como product, stripe, badge, achievement ou bootcamp.
    return (s.endsWith(".png") || s.endsWith(".webp")) &&
           ( /product|stripe|badge|achiev|bootcamp|conquista/.test(s) ||
             /badge|conquista|achievement/.test(a) );
  };
  for(const im of imgs){
    const src = im.getAttribute("src") || im.getAttribute("data-src");
    const alt = im.getAttribute("alt") || "";
    if(isIcon(src, alt)){
      try{
        const url = new URL(src, "https://www.dio.me/").href;
        if(!picks.includes(url)) picks.push(url);
      }catch{}
    }
    if(picks.length >= 6) break;
  }
  return picks.slice(0,6);
}
    if (picks.length >= 6) break;
  }
  return picks;
}

function extractCertificates(doc){
  const imgs = [...doc.querySelectorAll("img, source")];
  const links = [...doc.querySelectorAll("a")];
  const urls = [];
  function add(u){
    if(!u) return;
    try{
      const href = new URL(u, "https://www.dio.me/").href;
      // manter somente certificados (evita badges)
      if(/certificado|certificate|\/certificates\//i.test(href) && !urls.includes(href)) urls.push(href);
    }catch{}
  }
  imgs.forEach(n => add(n.getAttribute("src") || n.getAttribute("data-src")));
  links.forEach(a => add(a.getAttribute("href")));
  // últimas duas (ordem do site normalmente é cronológica – pegue do fim)
  return urls.slice(-2);
}
  }
  imgs.forEach(img => add(img.getAttribute("src") || img.getAttribute("data-src")));
  links.forEach(a  => add(a.getAttribute("href")));
  return Array.from(urls).slice(0,2);
}

function renderStats(stats){
  // name
  const name = extractDisplayName(window.__DIO_DOC__);
  const nameEl = document.getElementById("diousername");
  if(nameEl) nameEl.textContent = name;
  // stats
  const ul = document.querySelector("#stats");
  ul.innerHTML = "";
  const items = [
    stats.level ? `🏆 Level ${stats.level}` : null,
    stats.memberSince ? `🗓️ Usuário DIO desde ${stats.memberSince}` : null,
    stats.lastActivity ? `⏱️ Atividade mais recente: ${stats.lastActivity}` : null,
    stats.reputation ? `⭐ Reputação: ${stats.reputation}` : null,
  ].filter(Boolean);
  if(!items.length){ ul.innerHTML = "<li>Falha ao carregar o perfil público.</li>"; return; }
  items.forEach(t => { const li=document.createElement("li"); li.textContent=t; ul.appendChild(li); });
}\n
  const ul = document.querySelector("#stats");
  ul.innerHTML = "";
  const items = [
    stats.level ? `🏆 Level ${stats.level}` : null,
    stats.memberSince ? `🗓️ Usuário DIO desde ${stats.memberSince}` : null,
    stats.lastActivity ? `⏱️ Atividade mais recente: ${stats.lastActivity}` : null,
    stats.reputation ? `⭐ Reputação: ${stats.reputation}` : null,
  ].filter(Boolean);
  if(!items.length){ ul.innerHTML = "<li>Falha ao carregar o perfil público.</li>"; return; }
  items.forEach(t => { const li=document.createElement("li"); li.textContent=t; ul.appendChild(li); });
}

function renderTopSkills(skills){
  const ul = document.querySelector("#top-skills");
  ul.innerHTML = "";
  if(!skills.length){ ul.innerHTML = "<li>Sem dados públicos — edite suas habilidades no perfil.</li>"; return; }
  skills.forEach(s => { const li=document.createElement("li"); li.textContent=s; ul.appendChild(li); });
}

function renderAchievements(items){
  const ul = document.querySelector("#achievements");
  ul.innerHTML = "";
  if(!items.length){ ul.innerHTML = "<li>Não encontrei conquistas recentes públicas.</li>"; return; }
  items.forEach(t => { const li=document.createElement("li"); li.textContent=t; ul.appendChild(li); });
}

function renderCertificates(urls){
  const box = document.querySelector("#certs");
  box.innerHTML = "";
  if(!urls.length){ box.innerHTML = '<div class="hint">Nenhuma imagem de certificado pública encontrada.</div>'; return; }
  urls.forEach(u => {
    const a = document.createElement("a");
    a.href = u; a.target = "_blank"; a.rel = "noopener";
    const img = document.createElement("img");
    img.loading = "lazy"; img.alt = "Certificado";
    img.src = u;
    a.appendChild(img);
    box.appendChild(a);
  });
}

async function fetchFallbackCache(){
  try{
    const res = await fetch("assets/profile-cache.json", { cache: "no-store" });
    if(!res.ok) throw new Error("cache http "+res.status);
    return await res.json();
  }catch{ return null; }
}

(async function start(){
  try{
    const doc = await fetchProfile(); window.__DIO_DOC__ = doc;
    console.log("[DIO Parser] HTML obtido com sucesso");
    const stats = extractStats(doc);
    renderStats(stats);
    renderTopSkills(extractTopSkills(doc));
    renderAchievementIcons(extractAchievements(doc));
    renderCertificates(extractCertificates(doc));
  }catch(err){
    console.error("[DIO Parser] Erro remoto:", err);
    const cache = await fetchFallbackCache();
    if(cache){
      // Render from cache
      const nameEl = document.getElementById("diousername");
      if(nameEl) nameEl.textContent = cache.displayName || "Usuário DIO";
      renderStats({ level: cache.level, reputation: cache.reputation, memberSince: cache.memberSince, lastActivity: cache.lastActivity });
      renderTopSkills(cache.topSkills || []);
      renderAchievementIcons(cache.achievements || []);
      renderCertificates(cache.certs || []);
    }else{
      document.querySelector("#stats").innerHTML = "<li>Falha ao carregar o perfil público.</li>";
    }
  }\n})();
function renderAchievementIcons(urls){
  const ul = document.querySelector("#achievements");
  ul.innerHTML = "";
  if(!urls.length){
    ul.innerHTML = "<li>Não encontrei ícones públicos de conquistas.</li>";
    return;
  }
  // Troca a UL por um grid de ícones
  const grid = document.createElement("div");
  grid.className = "ach-icons";
  urls.forEach(u => {
    const img = document.createElement("img");
    img.src = u; img.loading = "lazy"; img.alt = "Conquista";
    grid.appendChild(img);
  });
  ul.parentElement.replaceChild(grid, ul);
}
