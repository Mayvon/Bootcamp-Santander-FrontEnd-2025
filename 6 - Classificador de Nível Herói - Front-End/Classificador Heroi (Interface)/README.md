# Classificador de Nível do Herói (JavaScript)

Projeto simples para praticar **variáveis, operadores, laços de repetição e estruturas de decisão**.

## Como usar
1. Abra `index.html` no navegador.
2. Digite o **nome** e a **XP** do herói.
3. Clique em **Classificar** para ver a mensagem:

```
O Herói de nome {nome} está no nível de {nivel}
```

## Regras de classificação
- XP **≤ 1000** → **Ferro**
- 1001–2000 → **Bronze**
- 2001–5000 → **Prata**
- 5001–7000 → **Ouro**
- 7001–8000 → **Platina**
- 8001–9000 → **Ascendente**
- 9001–10000 → **Imortal**
- XP **≥ 10001** → **Radiante**

> Nota: foi considerado `≤ 1000` para fechar os intervalos (evitar que o 1000 fique sem nível).

## O que foi utilizado
- **Variáveis**: nome, xp, arrays de exemplos.
- **Operadores**: aritméticos (`+`, `++`, `Math.floor`), comparação (`<=`, `>=`, `&&`), lógicos.
- **Laços de repetição**: `while`, `for` e `for...of` (na tabela/console).
- **Estruturas de decisão**: `if/else if/else` na função `classificarNivel`.

## Estrutura
```
classificador-heroi/
├─ index.html
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  └─ js/
│     └─ app.js
└─ README.md
```