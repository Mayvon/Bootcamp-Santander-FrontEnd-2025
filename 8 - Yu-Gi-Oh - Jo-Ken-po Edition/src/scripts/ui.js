import { STATE, getCurrentDeck, nextDeck, prevDeck, resetState } from './state.js';
import { duel, randomCpu, buildLogEntry } from './engine.js';

const $ = (s, r=document)=> r.querySelector(s);
const el = {
  scWins: $('#sc-wins'), scDraws: $('#sc-draws'), scLosses: $('#sc-losses'),
  playerCard: $('#player-card'), cpuCard: $('#cpu-card'),
  choices: $('#choices'), logList: $('#log-list'),
  vsOverlay: $('#versus'), vsPlayer: $('#vs-player'), vsCpu: $('#vs-cpu'),
  btnReset: $('#btn-reset'), btnBgm: $('#btn-bgm'),
  bgm: $('#bgm'), sfxWin: $('#sfx-win'), sfxLose: $('#sfx-lose'),
  deckPrev: $('#btn-deck-prev'), deckNext: $('#btn-deck-next'),
  deckIndicator: $('#deck-indicator'), bgmState: $('#bgm-state')
};

function renderScore(){ el.scWins.textContent = STATE.score.wins; el.scDraws.textContent = STATE.score.draws; el.scLosses.textContent = STATE.score.losses; }
function setCardFields({ playerIndex = null, cpuIndex = null } = {}){
  const deck = getCurrentDeck();
  if (playerIndex !== null) STATE.field.player = playerIndex;
  if (cpuIndex !== null) STATE.field.cpu = cpuIndex;
  el.playerCard.src = STATE.field.player !== null ? deck[STATE.field.player] : '';
  el.cpuCard.src = STATE.field.cpu !== null ? deck[STATE.field.cpu] : '';
}
function clearCardFields(){ STATE.field.player = STATE.field.cpu = null; el.playerCard.src = 'src/assets/icons/card-back.png'; el.cpuCard.src = 'src/assets/icons/card-back.png'; }

let round = 0;
function pushLog(result){
  round++; const deck = getCurrentDeck();
  const li = document.createElement('li');
  li.textContent = buildLogEntry({ round, playerIndex: STATE.field.player, cpuIndex: STATE.field.cpu, result, deck });
  el.logList.prepend(li);
}

function renderChoices(){
  const deck = getCurrentDeck();
  el.deckIndicator.textContent = `(1/1)`;
  const frag = document.createDocumentFragment();
  deck.forEach((src, index) => {
    const btn = document.createElement('button');
    btn.className = 'choice';
    btn.innerHTML = `<img src="${src}" alt="carta ${index+1}">`;
    btn.addEventListener('mouseover', ()=> setCardFields({ playerIndex: index }));
    btn.addEventListener('focus', ()=> setCardFields({ playerIndex: index }));
    btn.addEventListener('click', ()=> handlePlay(index));
    frag.appendChild(btn);
  });
  el.choices.innerHTML = '';
  el.choices.appendChild(frag);
}

function showVersus(){ const deck = getCurrentDeck(); el.vsPlayer.src = deck[STATE.field.player]; el.vsCpu.src = deck[STATE.field.cpu]; el.vsOverlay.classList.remove('hidden'); }
function hideVersus(){ el.vsOverlay.classList.add('hidden'); }
function playSfx(result){ if(result==='vitoria') el.sfxWin?.play(); else if(result==='derrota') el.sfxLose?.play(); }

async function handlePlay(playerIndex){
  const cpuIndex = randomCpu();
  setCardFields({ playerIndex, cpuIndex });
  showVersus();
  await new Promise(r=>setTimeout(r, 700));
  hideVersus();

  const result = duel(playerIndex, cpuIndex);
  if(result==='vitoria') STATE.score.wins++; else if(result==='empate') STATE.score.draws++; else STATE.score.losses++;
  renderScore(); pushLog(result); playSfx(result);
}

function toggleBgm(){ if (el.bgm.paused) { el.bgm.play(); el.bgmState.textContent = 'ON'; } else { el.bgm.pause(); el.bgmState.textContent = 'OFF'; } }
function bindUI(){
  el.btnReset.addEventListener('click', () => { resetState(); clearCardFields(); renderScore(); el.logList.innerHTML = ''; round = 0; });
  el.deckNext.addEventListener('click', ()=> { nextDeck(); renderChoices(); clearCardFields(); });
  el.deckPrev.addEventListener('click', ()=> { prevDeck(); renderChoices(); clearCardFields(); });
  el.btnBgm.addEventListener('click', toggleBgm);
}
export function boot(){ renderChoices(); renderScore(); clearCardFields(); bindUI(); }
