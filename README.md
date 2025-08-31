# Bootcamp Santander Front-End 2025 — Portfólio de Projetos

Este repositório contém todos os projetos e atividades que desenvolvi durante o Bootcamp Santander Frontend 2025, uma iniciativa da Digital Innovation One (DIO) em parceria com o Santander. Cada pasta representa um projeto específico, contendo seus próprios arquivos e um .md com detalhes sobre os desafios e tecnologias utilizada, com foco em **layout responsivo**, **componentização**, **lógica de programação** aplicada a jogos e **integração dinâmica** de conteúdo.

> Dica: se você clonar este repo, rode os projetos estáticos com o **Live Server** do VS Code ou um HTTP server simples (`python -m http.server`). Quando houver **ES Modules** (import/export de JS), é **obrigatório** servir por HTTP.

---

## Índice (links internos)

1. [Perfil DIO (dinâmico)](#1-perfil-dio-dinâmico) — [`./perfil-dio/`](./perfil-dio/)
2. [Jogo Yu-Gi-Oh! Jokenpo](#2-jogo-yu-gi-oh-jokenpo) — [`./yugioh-jokenpo/`](./yugioh-jokenpo/)
3. [Trilha de CSS — Landing](#3-trilha-de-css--landing) — [`./trilha-css-site/`](./trilha-css-site/)
4. [YouTube Clone — Layout](#4-youtube-clone--layout) — [`./youtube-clone/`](./youtube-clone/)
5. [Discord Landing (Responsivo)](#5-discord-landing-responsivo) — [`./discord-landing/`](./discord-landing/)
6. [Classificador de Nível de Herói — CLI](#6-classificador-de-nível-de-herói--cli) — [`./classificador-heroi-cli/`](./classificador-heroi-cli/)
7. [Classificador de Nível de Herói — UI](#7-classificador-de-nível-de-herói--ui) — [`./classificador-heroi-interface/`](./classificador-heroi-interface/)
8. [Developer Pokédex — Guia Git](#8-developer-pokédex--guia-git) — [`./developer-pokedex-git/`](./developer-pokedex-git/)
9. [Página de Conceitos (HTML+CSS)](#9-página-de-conceitos-htmlcss) — [`./conceitos-dev-web/`](./conceitos-dev-web/)

> Se os nomes de pastas do seu repositório forem diferentes, ajuste os links acima para refletir a sua estrutura.

---

## 1) Perfil DIO (dinâmico)

**Pasta:** [`./perfil-dio/`](./perfil-dio/)
**Stack:** HTML, CSS (glassmorphism, grid responsivo), JavaScript (fetch + DOMParser).
**Resumo:** Landing que carrega, a cada visita, dados do perfil público DIO e exibe **skills**, **conquistas** (6 ícones) e **2 últimas certificações** (imagens).
**Como rodar:**

* Estático (rápido): Live Server.
* Com proxy local (opcional): `npm start` dentro da pasta para liberar CORS via `server.js`.
  **Leituras:** [`./perfil-dio/README.md`](./perfil-dio/README.md)

---

## 2) Jogo Yu-Gi-Oh! Jokenpo

**Pasta:** [`./yugioh-jokenpo/`](./yugioh-jokenpo/)
**Stack:** HTML, CSS (animações/overlays, assets de *RPG* e *cursor*), JavaScript modular (ES Modules).
**Resumo:** Jogo “pedra-papel-tesoura” tematizado com cartas (**dragon/magician/exodia**). Possui **placar**, **log de partidas**, **pré-visualização** de cartas, **efeitos sonoros** e **vídeo de fundo**. Estado global controlado, **funções puras** para regras e UI desacoplada.
**Como rodar:** servir por HTTP (Live Server ou `python -m http.server`).
**Leituras:** [`./yugioh-jokenpo/README.md`](./yugioh-jokenpo/README.md)

---

## 3) Trilha de CSS — Landing

**Pasta:** [`./trilha-css-site/`](./trilha-css-site/)
**Stack:** HTML, CSS (tipografia, grids, responsividade).
**Resumo:** Página promocional da trilha de CSS com **hero**, **módulos** e **call-to-action**, trabalhando cores, espaçamentos e contraste.
**Como rodar:** abrir `index.html` (Live Server recomendado).
**Leituras:** [`./trilha-css-site/README.md`](./trilha-css-site/README.md)

---

## 4) YouTube Clone — Layout

**Pasta:** [`./youtube-clone/`](./youtube-clone/)
**Stack:** HTML, CSS (flex/grid, responsividade).
**Resumo:** Reprodução de layout com **navbar**, **sidebar**, **grade de vídeos** e estados de hover/foco, seguindo o print do Figma.
**Como rodar:** abrir `index.html`.
**Leituras:** [`./youtube-clone/README.md`](./youtube-clone/README.md)

---

## 5) Discord Landing (Responsivo)

**Pasta:** [`./discord-landing/`](./discord-landing/)
**Stack:** HTML, CSS; fontes **Luckiest Guy** (título) e **Open Sans** (texto) via Google Fonts.
**Resumo:** Landing **1280px** / **428px** (mobile) baseada no Figma, com seções, ilustrações e **rodapé em SVG**.
**Como rodar:** abrir `index.html`.
**Leituras:** [`./discord-landing/README.md`](./discord-landing/README.md)

---

## 6) Classificador de Nível de Herói — CLI

**Pasta:** [`./classificador-heroi-cli/`](./classificador-heroi-cli/)
**Stack:** JavaScript (node/terminal).
**Resumo:** Script que lê nome e XP e classifica o nível (Ferro → Radiante) usando **variáveis**, **operadores**, **laços** e **decisões**.
**Como rodar:** `node index.js` (ou `node hero.js`, conforme o nome do arquivo).
**Leituras:** [`./classificador-heroi-cli/README.md`](./classificador-heroi-cli/README.md)

---

## 7) Classificador de Nível de Herói — UI

**Pasta:** [`./classificador-heroi-interface/`](./classificador-heroi-interface/)
**Stack:** HTML, CSS, JavaScript (DOM).
**Resumo:** Interface web para o classificador com foco em **design front-end** e **UX** (inputs, feedback visual, acessibilidade).
**Como rodar:** abrir `index.html`.
**Leituras:** [`./classificador-heroi-interface/README.md`](./classificador-heroi-interface/README.md)

---

## 8) Developer Pokédex — Guia Git

**Pasta:** [`./developer-pokedex-git/`](./developer-pokedex-git/)
**Stack:** Markdown (guia).
**Resumo:** **Passo a passo** de Git usando a Pokédex como exemplo: `git init`, `git add/commit`, `branch`, `merge`, `pull/push`, `remote`, `tags` e boas práticas.
**Leituras:** [`./developer-pokedex-git/README.md`](./developer-pokedex-git/README.md)

---

## 9) Página de Conceitos (HTML+CSS)

**Pasta:** [`./conceitos-dev-web/`](./conceitos-dev-web/)
**Stack:** HTML, CSS (documentação/estilo leve).
**Resumo:** Página de estudo que resume conceitos listados (títulos do design fornecido), com navegação por âncoras e estrutura semântica.
**Como rodar:** abrir `index.html`.
**Leituras:** [`./conceitos-dev-web/README.md`](./conceitos-dev-web/README.md)

---

## Apanhado geral (o que foi trabalhado)

* **HTML semântico**: header/main/section/footer, acessibilidade básica, `alt` em imagens.
* **CSS moderno**: Flexbox, Grid, responsividade mobile-first, tipografia web, paletas e contraste, glassmorphism, ícones/avatars, estados de interação.
* **JavaScript na prática**:

  * **Lógica de jogo** (Jokenpo): estado único, funções puras, aleatoriedade controlada, UI reativa.
  * **DOM**: eventos, manipulação incremental, feedback visual, áudio/vídeo.
  * **Integração dinâmica**: fetch, parsing de HTML (DOMParser), heurísticas tolerantes, fallback local, proxy para CORS.
* **Performance & UX**: `loading="lazy"`, assets otimizados, grids responsivos, feedback de carregamento/erro.
* **Versionamento**: Git básico (workflow local + remoto), convenções de commit/branch; guia incluído.
* **Organização**: cada projeto em pasta própria com `README.md` dedicado e instruções de execução.

---

## Como rodar os projetos rapidamente

* **Projetos estáticos (HTML/CSS/JS DOM):** Live Server no VS Code (ou `python -m http.server`).
* **Projetos com ES Modules (import/export):** servir por HTTP (Live Server).
* **Projetos “dinâmicos” (Perfil DIO):**

  * Estático com fallback (proxy público) **ou**
  * `npm start` para rodar o **proxy local** (evita CORS) e garantir dados atualizados.

---

## Contribuição / organização do repo

* Cada pasta contém seu **`README.md`** com instruções específicas.
* Siga o padrão: `feature/nome-projeto`, PR com descrição, e commits concisos.
* Issues podem ser abertas para melhorias de acessibilidade, performance e testes.

---
