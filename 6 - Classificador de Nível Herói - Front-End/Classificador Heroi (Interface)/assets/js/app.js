// Classificador de Nível do Herói
// Demonstra: Variáveis, Operadores, Laços de repetição e Estruturas de decisão

/**
 * Retorna o nível de acordo com a XP.
 * Observação: para fechar os intervalos, consideramos XP <= 1000 como 'Ferro'.
 * (Versões do desafio listam '< 1000', o que deixaria o valor 1000 sem faixa.)
 */
function classificarNivel(xp){
  // Garante número inteiro não negativo
  xp = Math.max(0, Math.floor(Number(xp) || 0));

  // Estrutura de decisão (if / else if / else) + operadores de comparação
  if (xp <= 1000) return 'Ferro';
  else if (xp >= 1001 && xp <= 2000) return 'Bronze';
  else if (xp >= 2001 && xp <= 5000) return 'Prata';
  else if (xp >= 5001 && xp <= 7000) return 'Ouro';
  else if (xp >= 7001 && xp <= 8000) return 'Platina';
  else if (xp >= 8001 && xp <= 9000) return 'Ascendente';
  else if (xp >= 9001 && xp <= 10000) return 'Imortal';
  else if (xp >= 10001) return 'Radiante';
  // Caso não entre em nenhum intervalo (teoricamente impossível com as condições acima)
  return 'Indefinido';
}

// DOM
const form = document.getElementById('form-classifier');
const result = document.getElementById('result');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  // Variáveis
  const nome = document.getElementById('nome').value.trim() || 'Sem Nome';
  let xp = document.getElementById('xp').value; // string inicialmente

  // Conversão + operador unário + validação simples
  xp = +xp; // transforma em número (operador unário +)
  const nivel = classificarNivel(xp);

  // Saída no formato solicitado
  result.textContent = `O Herói de nome ${nome} está no nível de ${nivel}`;
});

// =============== Exemplos automáticos (uso de laços) ===============
const samples = [
  { nome: 'Ayla',   xp: 150 },
  { nome: 'Brom',   xp: 1000 },
  { nome: 'Cyrus',  xp: 1500 },
  { nome: 'Diana',  xp: 3500 },
  { nome: 'Eli',    xp: 6500 },
  { nome: 'Frey',   xp: 7800 },
  { nome: 'Gael',   xp: 8900 },
  { nome: 'Hilda',  xp: 9500 },
  { nome: 'Iris',   xp: 12500 }
];

// Renderiza tabela usando for ... of
const tbody = document.querySelector('#samples-table tbody');
let idx = 0;
// Laço while apenas para demonstrar outra estrutura de repetição
while (idx < samples.length){
  const s = samples[idx];
  const nivelS = classificarNivel(s.xp);
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${idx + 1}</td><td>${s.nome}</td><td>${s.xp}</td><td>${nivelS}</td>`;
  tbody.appendChild(tr);
  idx++;
}

// Também registramos no console usando for tradicional (++, operadores aritméticos)
for (let i = 0; i < samples.length; i++){
  const h = samples[i];
  console.log(`Herói ${h.nome} (${h.xp} XP) => ${classificarNivel(h.xp)}`);
}