# Classificador de Nível do Herói – README (JS CLI)

Este documento resume o script **Node.js** que classifica o nível de um herói a partir da **XP**. O foco é demonstrar o uso de **Variáveis**, **Operadores**, **Laços de Repetição**, **Estruturas de Decisão**, **Entrada** e **Saída**.

---

## Como executar

```bash
# Com argumentos (nome e XP)
node heroi.js "Diana" 2750

# Interativo (o script pergunta nome e XP)
node heroi.js
```

**Saída esperada**
`O Herói de nome Diana está no nível de Prata`

---

## Estrutura do Código

### 1) Variáveis

* **Locais**: `nome`, `xp`, `nivel`, `args`, `rl` (interface do readline).
* **Função**: `classificarNivel(xp)` recebe e retorna strings/inteiros.

### 2) Operadores

* **Numéricos**: `Number(x)`, `Math.floor`, `Math.max(0, …)` → normalizam a XP.
* **Comparação**: `<=`, `>=` para checar os intervalos de XP.
* **Lógicos/Controle**: curto-circuito implícito na cadeia de `if` e `return`.

```js
function classificarNivel(xp) {
  xp = Math.max(0, Math.floor(Number(xp) || 0)); // valida/normaliza
  if (xp <= 1000)   return 'Ferro';
  if (xp <= 2000)   return 'Bronze';
  if (xp <= 5000)   return 'Prata';
  if (xp <= 7000)   return 'Ouro';
  if (xp <= 8000)   return 'Platina';
  if (xp <= 9000)   return 'Ascendente';
  if (xp <= 10000)  return 'Imortal';
  return 'Radiante'; // xp >= 10001
}
```

> Observação: usa `≤` para fechar os intervalos e não deixar o valor **1000** sem faixa.

### 3) Estruturas de Decisão

* Cadeia de **`if` sequenciais** (early return) para mapear cada faixa de XP ao nível correspondente.
* **Roteamento de execução**:

  * Com **argumentos CLI**: lê `process.argv` e classifica direto.
  * **Sem argumentos**: cai no modo interativo.

### 4) Laços de Repetição

* **`while (true)`** para validar a entrada da XP no modo interativo, repetindo até o usuário informar um número ≥ 0.

```js
let xp;
while (true) {
  const entrada = await perguntar('Experiência (XP): ');
  const n = Number(entrada);
  if (Number.isFinite(n) && n >= 0) { xp = n; break; }
  console.log('Valor inválido. Informe um número >= 0.');
}
```

### 5) Entrada e Saída (I/O)

* **Entrada**:

  * **Linha de comando**: `process.argv.slice(2)` (`nome`, `xp`).
  * **Interativa**: `readline` (perguntas `Nome do herói:` e `Experiência (XP):`).
* **Saída**:

  * `console.log` imprime exatamente o formato solicitado:

    ```
    O Herói de nome {nome} está no nível de {nivel}
    ```

---

## Regras de Classificação (faixas de XP)

| Faixa de XP  | Nível      |
| ------------ | ---------- |
| `≤ 1000`     | Ferro      |
| `1001–2000`  | Bronze     |
| `2001–5000`  | Prata      |
| `5001–7000`  | Ouro       |
| `7001–8000`  | Platina    |
| `8001–9000`  | Ascendente |
| `9001–10000` | Imortal    |
| `≥ 10001`    | Radiante   |

---

## Resumo pedagógico

* **Variáveis** guardam nome e XP; arrays/objetos não são necessários.
* **Operadores** numéricos e de comparação garantem classificação correta.
* **Laço `while`** assegura **entrada válida** no modo interativo.
* **Decisão com `if`** mapeia faixas → níveis de forma clara e linear.
* **Entrada/Saída** simples via CLI e `readline` tornam o script utilizável no terminal.
