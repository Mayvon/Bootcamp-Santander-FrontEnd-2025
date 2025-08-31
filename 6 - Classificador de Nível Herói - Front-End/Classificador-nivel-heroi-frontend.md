# Classificador de Nível do Herói – README de **Design Frontend**

Este documento resume o projeto **Classificador de Nível do Herói** com foco nas decisões de **UI/UX** e na construção do **design frontend** (HTML + CSS + JS leve).

---

## Objetivos de Design

* **Clareza e foco**: fluxo curto (nome → XP → resultado).
* **Leitura confortável em tema escuro** com alto contraste e tipografia de sistema.
* **Feedback imediato**: estados de foco, erro e sucesso evidentes.
* **Responsividade fluida** com `clamp()` e containers elásticos.

---

## Arquitetura Visual & Layout

* **Container** central com largura máxima (legibilidade) e `padding` fluido.
* **Ritmo vertical** simples com cards empilhados: formulário → resultado → amostras.
* **Grid flexível** (CSS) apenas onde necessário; sem dependências.

```
classificador-heroi/
├─ index.html          # Estrutura semântica
├─ assets/
│  ├─ css/style.css    # Tokens + layout + componentes
│  └─ js/app.js        # Interações e lógica
└─ README.md
```

---

## Sistema de Design

### 1) **Design Tokens** (CSS `:root`)

Facilitam personalização rápida (tema, sombras, raios, espaçamentos).

```css
:root{
  --bg:#0b1020; --surface:#12172b;
  --text:#e6edf3; --muted:#aab4c3;
  --primary:#7c5cff; --radius:14px;
  --shadow:0 10px 30px rgba(0,0,0,.35);
  --container:940px;
}
```

### 2) **Tipografia**

* **Sistema** (seguro, performático), tamanho fluido com `clamp()`.
* Hierarquia mínima: `h1` (título), `h2` (subseções), `p` (texto).

### 3) **Cores & Contraste**

* Paleta **dark** com acentos neon (`--primary`) e textos `--text`/`--muted`.
* Gradientes leves no fundo para profundidade sem ruído visual.

---

## Componentes de Interface

### **Card**

* Contém formulário, saída e tabela de exemplos.
* Borda translúcida + leve sombra (profundidade).

```css
.card{
  background: linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02));
  border: 1px solid rgba(255,255,255,.09);
  border-radius: var(--radius);
}
```

### **Formulário**

* Campos com rótulos claros e **estados de foco**.
* Inputs `number` com validação mínima (`min="0"`, `required`).

```css
input:focus{
  border-color: rgba(124,92,255,.6);
  box-shadow: 0 0 0 3px rgba(124,92,255,.15);
}
```

### **Botão primário**

* Pílula com **gradiente**, hover e active sutil (microinterações).

```css
.btn{
  border-radius:999px; font-weight:700;
  background: linear-gradient(135deg, var(--primary), #23d8f6);
  transition: filter .2s, transform .14s;
}
```

### **Tabela de Amostras**

* Linhas com **hover** para leitura linha-a-linha em desktop.
* Colunas mínimas: índice, herói, XP, nível.

---

## Responsividade

* **Sem breakpoints pesados**: tamanhos fluidos com `clamp()` para títulos e paddings.
* **Container** elástico `width:min(var(--container), 94vw)`.
* Componentes empilham naturalmente; tabelas mantêm legibilidade.

---

## Acessibilidade (A11y)

* Estrutura semântica (`main`, `section`, `h1…`).
* **Labels** conectados a inputs via `for`/`id`.
* Foco visível, contraste adequado e **mensagem de resultado** textual.
* Placeholders **exemplificam** o formato, mas não substituem rótulos.

---

## Interações & Feedback

* **On submit**: exibe `"O Herói de nome {nome} está no nível de {nivel}"`.
* **Estados de foco/hover/active**: reforçam ação sem distração.
* **Validações sutis**: numéricas e não negativas (UX não punitiva).

---

## Performance & Manutenção

* **Zero dependências** (apenas CSS/JS nativos).
* **Tokens centralizados** ↓ troca de tema em minutos.
* **CSS modular**: base → componentes → estados.
* JS mínimo e desacoplado do estilo.

---

## Personalização Rápida

* **Tema**: altere `--bg`, `--text`, `--primary`.
* **Raio e sombras**: `--radius`, `--shadow`.
* **Escala da página**: `--container` e `clamp()` em títulos/spacing.

---

## Próximos Passos (sugestões)

* **Dark/Light toggle** (classes ou `prefers-color-scheme`).
* Estados de **erro/sucesso** explícitos no formulário.
* **Animações micro** (entrada do card, foco progressivo).
* **i18n** simples (PT/EN) trocando strings em `app.js`.
* Exportar resultado como **badge** ou **chip** visual.

---

## TL;DR

Um **frontend enxuto** e **escalável**, com tokens, tema escuro acessível, tipografia fluida, componentes claros (form, cards, tabela) e microinterações que guiam o usuário — mantendo **performance** e **manutenção** como prioridades.
