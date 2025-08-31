#!/usr/bin/env node
// Classificador de Nível do Herói (Node.js)
// Uso direto com argumentos:
//   node heroi.js "Nome do Herói" 2750
// Ou execute sem argumentos para responder interativamente no terminal.

// ===== Função de decisão =====
function classificarNivel(xp) {
  // normaliza/valida (variáveis + operadores)
  xp = Math.max(0, Math.floor(Number(xp) || 0));

  // Estrutura de decisão:
  // Adoto "≤ 1000" para cobrir o valor 1000 (evita faixa vazia).
  if (xp <= 1000) return 'Ferro';
  if (xp <= 2000) return 'Bronze';
  if (xp <= 5000) return 'Prata';
  if (xp <= 7000) return 'Ouro';
  if (xp <= 8000) return 'Platina';
  if (xp <= 9000) return 'Ascendente';
  if (xp <= 10000) return 'Imortal';
  return 'Radiante'; // xp >= 10001
}

// ===== Execução via argumentos =====
const args = process.argv.slice(2);
if (args.length >= 2) {
  const nome = String(args[0]).trim() || 'Sem Nome';
  const xp = args[1];
  const nivel = classificarNivel(xp);
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
  process.exit(0);
}

// ===== Execução interativa (laço de repetição para validar entrada) =====
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function perguntar(q) {
  return new Promise(res => rl.question(q, res));
}

(async () => {
  const nome = (await perguntar('Nome do herói: ')).trim() || 'Sem Nome';

  let xp;
  // laço de repetição + operadores de comparação
  while (true) {
    const entrada = await perguntar('Experiência (XP): ');
    const n = Number(entrada);
    if (Number.isFinite(n) && n >= 0) { xp = n; break; }
    console.log('Valor inválido. Informe um número >= 0.');
  }

  rl.close();
  const nivel = classificarNivel(xp);
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
})();
