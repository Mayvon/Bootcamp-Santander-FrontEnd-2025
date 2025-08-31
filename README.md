# Bootcamp Santander Front-End 2025 — Portfólio de Projetos

Repositório: **[Mayvon/Bootcamp-Santander-FrontEnd-2025](https://github.com/Mayvon/Bootcamp-Santander-FrontEnd-2025)**

Monorepo com projetos de **HTML, CSS e JavaScript** desenvolvidos ao longo do bootcamp — foco em **responsividade**, **lógica aplicada**, **organização de código**, **acessibilidade** e **integração dinâmica**.

> Para executar localmente, use o **Live Server** do VS Code ou um servidor HTTP simples: `python -m http.server`.

---

## Índice (links internos)

1. [Página de Conceitos (HTML + CSS)](#1-página-de-conceitos-html--css) — [`./conceitos-dev-web/`](./conceitos-dev-web/)
2. [Jogo Yu-Gi-Oh! Jokenpo](#2-jogo-yu-gi-oh-jokenpo) — [`./yugioh-jokenpo/`](./yugioh-jokenpo/)
3. [Trilha de CSS — Landing](#3-trilha-de-css--landing) — [`./trilha-css-site/`](./trilha-css-site/)
4. [YouTube Clone — Layout](#4-youtube-clone--layout) — [`./youtube-clone/`](./youtube-clone/)
5. [Discord Landing (Responsivo)](#5-discord-landing-responsivo) — [`./discord-landing/`](./discord-landing/)
6. [Classificador de Nível de Herói — CLI](#6-classificador-de-nível-de-herói--cli) — [`./classificador-heroi-cli/`](./classificador-heroi-cli/)
7. [Classificador de Nível de Herói — UI](#7-classificador-de-nível-de-herói--ui) — [`./classificador-heroi-interface/`](./classificador-heroi-interface/)
8. [Developer Pokédex — Guia Git](#8-developer-pokédex--guia-git) — [`./developer-pokedex-git/`](./developer-pokedex-git/)
9. [Perfil DIO (dinâmico)](#9-perfil-dio-dinâmico) — [`./perfil-dio/`](./perfil-dio/)

---

## 1) Página de Conceitos (HTML + CSS)

**Pasta:** [`./conceitos-dev-web/`](./conceitos-dev-web/)
**Stack:** HTML semântico, CSS (tipografia, hierarquia visual, âncoras).

**O que há no projeto**

* Estrutura de artigo com **barra lateral (anchors)** para navegação por seções.
* Títulos/subtítulos organizando conceitos do layout de referência.
* Estilos focados em legibilidade (line-height, contraste, espaçamentos).

**Como rodar**

* Abra `index.html` (Live Server recomendado).

---

## 2) Jogo Yu-Gi-Oh! Jokenpo

**Pasta:** [`./yugioh-jokenpo/`](./yugioh-jokenpo/)
**Stack:** HTML, CSS (assets de RPG, cursores custom), **JavaScript modular (ES Modules)**.

**O que há no projeto**

* Jokenpo temático com **três cartas jogáveis**.
* **Placar** (vitórias/empates/derrotas) e **log de partidas** legível.
* **Pré-visualização** de cartas, **overlay VS**, **BGM/SFX** e vídeo de fundo.
* Estado global controlado, regras em **funções puras** e UI desacoplada.

**Como rodar**

* Servir por HTTP (Live Server ou `python -m http.server`).

---

## 3) Trilha de CSS — Landing

**Pasta:** [`./trilha-css-site/`](./trilha-css-site/)
**Stack:** HTML, **CSS responsivo** (hero, CTA, módulos).

**O que há no projeto**

* Seção hero com logo, título, descrição e **call to action**.
* Seção **“O que vou aprender?”** com três módulos.
* Blocos promocionais com copy e imagem.

**Como rodar**

* Abra `index.html`.

---

## 4) YouTube Clone — Layout

**Pasta:** [`./youtube-clone/`](./youtube-clone/)
**Stack:** HTML, **CSS (Flexbox/Grid, responsividade)**.

**O que há no projeto**

* **Navbar**, **sidebar** e **grade de vídeos** com miniaturas, título e metadados.
* Estados de hover/foco e tokens de cor coerentes.

**Como rodar**

* Abra `index.html`.

---

## 5) Discord Landing (Responsivo)

**Pasta:** [`./discord-landing/`](./discord-landing/)
**Stack:** HTML, **CSS responsivo**; Google Fonts **Luckiest Guy** (título) e **Open Sans** (texto).

**O que há no projeto**

* Landing baseada no Figma em **1280px (desktop)** e **428px (mobile)**.
* Seções ilustradas e **rodapé em SVG**.

**Como rodar**

* Abra `index.html`.

---

## 6) Classificador de Nível de Herói — CLI

**Pasta:** [`./classificador-heroi-cli/`](./classificador-heroi-cli/)
**Stack:** **JavaScript (Node/terminal)**.

**O que há no projeto**

* Script que lê **nome** e **XP** e retorna o **nível** (Ferro → Radiante) segundo as faixas definidas.
* Mensagem final: `O Herói de nome {nome} está no nível de {nivel}`.

**Como rodar**

```bash
node index.js
```

---

## 7) Classificador de Nível de Herói — UI

**Pasta:** [`./classificador-heroi-interface/`](./classificador-heroi-interface/)
**Stack:** HTML, CSS, **JavaScript (DOM)**.

**O que há no projeto**

* Interface web para inserir nome/XP e exibir o nível.
* Validações simples e feedback visual.

**Como rodar**

* Abra `index.html`.

---

## 8) Developer Pokédex — Guia Git

**Pasta:** [`./developer-pokedex-git/`](./developer-pokedex-git/)
**Stack:** **Markdown** (documentação).

**O que há no projeto**

* Guia prático com comandos essenciais:

  * `git init`, `git status`, `git add`, `git commit`
  * `git branch`, `git checkout -b`, `git merge`
  * `git remote add origin`, `git push`, `git pull`
  * `git tag`, convenções de mensagens e fluxo básico

**Como usar**

* Siga o passo a passo do `README.md` da pasta.

---

## 9) Perfil DIO (dinâmico)

**Pasta:** [`./perfil-dio/`](./perfil-dio/)
**Stack:** HTML, CSS (glassmorphism, grid), **JavaScript (fetch + DOMParser)**, **proxy local opcional**.

**O que há no projeto**

* Cabeçalho com avatar, título “Perfil DIO”, **nome dinâmico** e metadados públicos.
* **Skills**: chips pessoais + principais habilidades detectadas.
* **Conquistas recentes na DIO**: grade com **6 ícones** (PNG/WebP) das últimas conquistas públicas.
* **Últimas Certificações**: **2 imagens** mais recentes de certificados públicos.
* Rodapé com **logo DIO em SVG**.
* **Fallback local** de dados (para não quebrar a UI sem rede) e **proxy local** (`server.js`) para CORS.

**Como rodar**

* Estático (Live Server): tenta proxy público; se bloquear, mostra fallback.
* Com **proxy local** (recomendado para dados atuais):

  ```bash
  npm start   # ou: node server.js (http://localhost:8787)
  ```

---

## Apanhado geral (competências trabalhadas)

* **HTML semântico & acessibilidade**: landmarks, títulos bem estruturados, `alt` em imagens, âncoras internas.
* **CSS moderno**: Flexbox, Grid, **responsividade mobile-first**, tipografia web, chips/labels, glassmorphism.
* **JavaScript aplicado**:

  * Lógica de jogo: **estado controlado**, **funções puras**, aleatoriedade encapsulada.
  * DOM/UX: eventos, feedback visual, áudio/vídeo, logs.
  * Integração dinâmica: fetch de HTML, parsing tolerante, fallback e proxy para CORS.
* **Performance & UX**: `loading="lazy"`, assets organizados, grids fluidos, mensagens de status/erro.
* **Versionamento**: Git do básico ao colaborativo (guia dedicado).
* **Organização**: cada projeto em pasta própria com **README** específico e instruções.

---

Quer que eu sincronize este README com os conteúdos atuais de cada `README.md` das pastas (resumos, screenshots, pré-requisitos)? É só me enviar/confirmar os textos que eu integro aqui.
