# Bootcamp Santander Front-End 2025 — Portfólio de Projetos

Repositório: **[Mayvon/Bootcamp-Santander-FrontEnd-2025](https://github.com/Mayvon/Bootcamp-Santander-FrontEnd-2025)**

Este repositório reúne os projetos construídos durante o percurso (HTML, CSS e JavaScript), focando em **layout responsivo**, **lógica aplicada**, **componentização** e **integração dinâmica** de conteúdo.

> Dica: para rodar os projetos locais, use o **Live Server** do VS Code ou um servidor HTTP simples (`python -m http.server`). Projetos com **ES Modules** precisam ser servidos por HTTP.

---

## Índice (links internos)

1. [Página de Conceitos (HTML + CSS)](#1-página-de-conceitos-html--css) — [`./conceitos-dev-web/`](./conceitos-dev-web/)
2. [Perfil DIO (dinâmico)](#2-perfil-dio-dinâmico) — [`./perfil-dio/`](./perfil-dio/)
3. [Jogo Yu-Gi-Oh! Jokenpo](#3-jogo-yu-gi-oh-jokenpo) — [`./yugioh-jokenpo/`](./yugioh-jokenpo/)
4. [Trilha de CSS — Landing](#4-trilha-de-css--landing) — [`./trilha-css-site/`](./trilha-css-site/)
5. [YouTube Clone — Layout](#5-youtube-clone--layout) — [`./youtube-clone/`](./youtube-clone/)
6. [Discord Landing (Responsivo)](#6-discord-landing-responsivo) — [`./discord-landing/`](./discord-landing/)
7. [Classificador de Nível de Herói — CLI](#7-classificador-de-nível-de-herói--cli) — [`./classificador-heroi-cli/`](./classificador-heroi-cli/)
8. [Classificador de Nível de Herói — UI](#8-classificador-de-nível-de-herói--ui) — [`./classificador-heroi-interface/`](./classificador-heroi-interface/)
9. [Developer Pokédex — Guia Git](#9-developer-pokédex--guia-git) — [`./developer-pokedex-git/`](./developer-pokedex-git/)

> Se a sua árvore de pastas diferir, ajuste os caminhos dos links.

---

## 1) Página de Conceitos (HTML + CSS)

**Pasta:** [`./conceitos-dev-web/`](./conceitos-dev-web/)
**Stack:** HTML semântico, CSS (tipografia, cores, âncoras, layout de artigo).
**Resumo:** Página didática que resume conceitos listados no layout de referência, com navegação por âncoras e seção lateral.

---

## 2) Perfil DIO (dinâmico)

**Pasta:** [`./perfil-dio/`](./perfil-dio/)
**Stack:** HTML, CSS (glassmorphism, grid), JavaScript (fetch + DOMParser), proxy opcional (`server.js`).
**Resumo:** Página que lê o perfil público na DIO a cada carregamento, exibindo **skills**, **6 conquistas** (ícones) e **2 últimos certificados** (imagens).
**Execução:** estático (Live Server) ou com **proxy local** via `npm start`.

---

## 3) Jogo Yu-Gi-Oh! Jokenpo

**Pasta:** [`./yugioh-jokenpo/`](./yugioh-jokenpo/)
**Stack:** HTML, CSS (assets RPG, cursores, animações), JavaScript modular (ESM).
**Resumo:** Jokenpo temático com **placar**, **log**, **pré-visualização**, **BGM/SFX** e estado global controlado.

---

## 4) Trilha de CSS — Landing

**Pasta:** [`./trilha-css-site/`](./trilha-css-site/)
**Stack:** HTML, CSS (hero, CTA, módulos, responsividade).
**Resumo:** Landing promocional com hierarquia visual, contraste e tipografia trabalhada.

---

## 5) YouTube Clone — Layout

**Pasta:** [`./youtube-clone/`](./youtube-clone/)
**Stack:** HTML, CSS (Flexbox/Grid).
**Resumo:** Reprodução de layout com **navbar**, **sidebar** e **grade de vídeos**, seguindo o print do Figma.

---

## 6) Discord Landing (Responsivo)

**Pasta:** [`./discord-landing/`](./discord-landing/)
**Stack:** HTML, CSS; Google Fonts (**Luckiest Guy** e **Open Sans**).
**Resumo:** Landing 1280px/428px baseada no Figma, com seções ilustradas e **rodapé em SVG**.

---

## 7) Classificador de Nível de Herói — CLI

**Pasta:** [`./classificador-heroi-cli/`](./classificador-heroi-cli/)
**Stack:** JavaScript (Node/terminal).
**Resumo:** Lê nome/XP e classifica o nível via **variáveis, operadores, laços e decisões**.
**Execução:** `node index.js` (ou nome equivalente).

---

## 8) Classificador de Nível de Herói — UI

**Pasta:** [`./classificador-heroi-interface/`](./classificador-heroi-interface/)
**Stack:** HTML, CSS, JavaScript (DOM).
**Resumo:** Interface web do classificador, com foco em UX (inputs, feedback, acessibilidade).

---

## 9) Developer Pokédex — Guia Git

**Pasta:** [`./developer-pokedex-git/`](./developer-pokedex-git/)
**Stack:** Markdown.
**Resumo:** Guia prático de Git (init, add/commit, branch/merge, remote, pull/push, tags), usando a Pokédex como exemplo.

---

## Apanhado geral

* **HTML semântico & acessibilidade básica** (estrutura clara, `alt` em imagens, navegação por âncoras).
* **CSS moderno**: Flexbox, Grid, responsividade mobile-first, tipografia web, chips/labels, glassmorphism e ícones.
* **JavaScript aplicado**:

  * **Lógica de jogo** (estado controlado, funções puras, aleatoriedade encapsulada).
  * **DOM/UX** (eventos, feedback visual, logs, áudio/vídeo).
  * **Integração dinâmica** (fetch de HTML, parsing robusto, fallback local e proxy para CORS).
* **Performance & UX**: `loading="lazy"`, assets otimizados, grids responsivos, mensagens de status/erro.
* **Versionamento**: fluxo Git básico documentado (guia dedicado).
* **Organização**: cada projeto em pasta própria com README específico e instruções de execução.

---

## Como executar rapidamente

* Projetos estáticos: **Live Server** do VS Code (ou `python -m http.server`).
* Projetos com ES Modules: **obrigatório** servir por HTTP.
* Projeto dinâmico (Perfil DIO): estático com fallback **ou** `npm start` para habilitar o **proxy local**.

---

Quer que eu ajuste os nomes dos diretórios/links para bater exatamente com a sua árvore real no `main`? Me envie a listagem que eu atualizo o README.
