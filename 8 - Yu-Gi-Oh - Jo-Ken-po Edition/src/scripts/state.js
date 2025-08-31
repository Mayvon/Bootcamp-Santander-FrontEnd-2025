import { ICONS } from '../assets/icons/_index.js';

// Filtra ícones "jogáveis" do pacote (dragon/magician/exodia).
// Demais ícones (card-front/back, millennium, eye...) são decorativos.
const pick = (name) => ICONS.find(p => p.toLowerCase().includes(name));
const playable = [
  pick('dragon') || ICONS[0],
  pick('magician') || ICONS[1],
  pick('exodia') || ICONS[2]
].filter(Boolean);

export const STATE = {
  score: { wins: 0, draws: 0, losses: 0 },
  field: { player: null, cpu: null },
  deckIndex: 0,
  decks: [ playable ] // único deck funcional (1/1)
};

export function getCurrentDeck(){ return STATE.decks[0]; }
export function nextDeck(){ /* deck único - noop */ }
export function prevDeck(){ /* deck único - noop */ }
export function resetState(){ STATE.score.wins = STATE.score.draws = STATE.score.losses = 0; STATE.field.player = STATE.field.cpu = null; }
