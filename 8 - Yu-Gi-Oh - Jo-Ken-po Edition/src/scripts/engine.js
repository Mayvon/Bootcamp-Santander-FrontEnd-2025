export function duel(playerIndex, cpuIndex){
  if (playerIndex === cpuIndex) return 'empate';
  if ((playerIndex === 0 && cpuIndex === 2) ||
      (playerIndex === 1 && cpuIndex === 0) ||
      (playerIndex === 2 && cpuIndex === 1)) return 'vitoria';
  return 'derrota';
}
export function randomCpu(){ return Math.floor(Math.random() * 3); }
export function buildLogEntry({ round, playerIndex, cpuIndex, result, deck }){
  const getName = (p)=> deck[p].split('/').pop().split('.')[0];
  const label = result==='vitoria'?'✅ Vitória':result==='empate'?'➖ Empate':'❌ Derrota';
  return `#${round} — Você: ${getName(playerIndex)} × CPU: ${getName(cpuIndex)} → ${label}`;
}
