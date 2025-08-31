# Yu-Gi-Oh! Jokenpo – Conceitos de Lógica de Programação aplicados a jogos

Este documento descreve os **conceitos de lógica de programação** usados para construir o jogo de Jokenpo com tema Yu-Gi-Oh!, destacando como eles aparecem no código e no fluxo do jogo.

---

## Arquitetura (separação de responsabilidades)

* **`engine.js`** – regras puras do jogo (sem DOM/áudio).
* **`state.js`** – armazenamento e gerenciamento de **estado** (placar, cartas em campo, deck).
* **`ui.js`** – efeitos colaterais e **interação**: DOM, áudio, “versus”, log, binds de eventos.
* **`main.js`** – inicialização (bootstrap).

> Esta separação reforça **baixo acoplamento** e **alta coesão**, facilitando manutenção e testes.

---

## 1) Estado (armazenamento e gerenciamento)

O jogo mantém um **estado único** e explícito:

```js
// state.js
export const STATE = {
  score: { wins: 0, draws: 0, losses: 0 },
  field: { player: null, cpu: null },
  deckIndex: 0,
  decks: [ /* trio [dragon, magician, exodia] */ ]
};
```

* **Imutabilidade local / mutação controlada**: atualização do placar e das cartas acontece em pontos previsíveis (após o resultado).
* **Reset de estado** (`resetState`) zera placar e limpa cartas – volta ao estado inicial.

---

## 2) Constantes e enumerações (dados dirigem o comportamento)

* O “**deck**” é um **array de caminhos de imagem** que define **quais jogadas existem**.
* O projeto filtra os ícones jogáveis (`dragon`, `magician`, `exodia`) e mantém o restante como **assets decorativos** (frente/verso de carta, millennium, etc.).
* Essa abordagem **data-driven** permite trocar as peças sem reescrever a lógica.

---

## 3) Funções puras (regras do jogo)

Toda a regra de vitória/empate/derrota é **determinística** e **sem efeitos colaterais**:

```js
// engine.js
export function duel(playerIndex, cpuIndex){
  if (playerIndex === cpuIndex) return 'empate';
  if ((playerIndex === 0 && cpuIndex === 2) ||  // 0 vence 2
      (playerIndex === 1 && cpuIndex === 0) ||  // 1 vence 0
      (playerIndex === 2 && cpuIndex === 1))    // 2 vence 1
    return 'vitoria';
  return 'derrota';
}
```

Benefícios:

* **Testável**: passa entradas → recebe saída, sempre igual.
* **Reutilizável**: pode ser chamada em qualquer contexto (UI, testes, simulações).

---

## 4) Aleatoriedade controlada

```js
export function randomCpu(){
  return Math.floor(Math.random() * 3);
}
```

* Uma única função encapsula o **sorteio** da jogada da CPU.
* Se um dia for preciso “treinar” a IA, é só trocar **a implementação** sem mexer na UI.

---

## 5) Estruturas de decisão

* **`if/else`** para decidir o vencedor e atualizar o placar.
* **Curto-circuito** em funções de renderização (ex.: não tenta mostrar carta nula).

---

## 6) Fluxo de jogo (estados implícitos)

1. **Idle** – campos vazios (exibindo `card-back`).
2. **Preview** – `mouseover`/`focus` mostra a carta escolhida no campo do jogador.
3. **Versus** – o clique define a jogada, sorteia a CPU e exibe o overlay **VS** por um curto período:

   ```js
   await new Promise(r => setTimeout(r, 700))
   ```
4. **Resolve** – calcula o resultado com `duel`, atualiza **placar** e **log**.
5. **Reset** (opcional) – botão **Reiniciar** limpa o estado.

> Esse mini “state machine” mantém a interface previsível e evita condições de corrida.

---

## 7) Entrada, eventos e feedback

* **Entrada**: clique nos botões das cartas; **mouseover** para pré-visualizar.
* **Eventos encadeados**: clique → `randomCpu()` → `duel()` → atualizar **placar** → **log** → **sons**.
* **Feedback multimídia**:

  * **SFX** de vitória/derrota.
  * **BGM** com toggle ON/OFF.
  * **Overlay VS** para reforçar o confronto.
  * **Cursor personalizado** (arquivo `.cur` com fallback `.png`).
* **Acessibilidade**: aria-live no placar e foco em elementos interativos.

---

## 8) Logs e telemetria leve

Cada duelo gera uma linha **legível**:

```js
export function buildLogEntry({ round, playerIndex, cpuIndex, result, deck }){
  const name = p => deck[p].split('/').pop().split('.')[0];
  const label = result==='vitoria' ? '✅ Vitória'
             : result==='empate'  ? '➖ Empate' : '❌ Derrota';
  return `#${round} — Você: ${name(playerIndex)} × CPU: ${name(cpuIndex)} → ${label}`;
}
```

* Útil para **debug** e revisão do comportamento do jogo.

---

## 9) Modularização (ES Modules)

* Import/Export entre arquivos: `state`, `engine`, `ui`, `main`.
* Mantém o projeto **organizado**, com **dependências explícitas**.

---

## 10) Integração de recursos (assets)

* **Icons**: definem visual das jogadas e **card-back** padrão.
* **RPG**: aplicado em bordas/fundos (border-image/background-image/scrollbar).
* **Vídeo de fundo** + **BGM/SFX** completam a **atmosfera** do jogo.

---

## 11) Robustez e UX

* **Estados iniciais seguros** (mostra `card-back` quando vazio).
* **Limpeza previsível** no botão Reiniciar (placar, campos, log).
* **Caminhos relativos** funcionam bem no **Live Server** do VSCode.

---

## Próximos passos (sugestões didáticas)

* **Persistir placar** (LocalStorage).
* **Novos decks/regra** (ex.: 5 elementos – pedra/papel/tesoura/lagarto/Spock).
* **FSM explícita** (Idle/Preview/Versus/Resolve) para animações complexas.
* **Testes unitários** para `duel()` e `buildLogEntry()`.

---

## TL;DR

O projeto demonstra, na prática, como aplicar **estado controlado**, **funções puras**, **decisão**, **aleatoriedade encapsulada**, **eventos** e **separação de camadas** (engine × UI) — fundamentos que escalam de minijogos até experiências mais complexas.
