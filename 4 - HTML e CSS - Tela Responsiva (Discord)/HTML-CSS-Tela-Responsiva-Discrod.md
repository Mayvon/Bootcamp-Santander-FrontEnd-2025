# Discord Landing – README (HTML + CSS **Responsivo** a partir de um layout de imagem)

Este projeto mostra como transformar um **layout estático (print/Figma)** da landing do **Discord** em uma página **HTML + CSS responsiva**, priorizando semântica, grid/flex, tipografia do Google Fonts e boas práticas de acessibilidade.

---

## Objetivo

* Reproduzir o visual do layout (hero + 4 seções + rodapé SVG) de forma **fiel e fluida**.
* Usar **apenas HTML e CSS** (sem JS).
* Manter a página **legível e modular**, facilitando futuras trocas de imagens/cores/tipografia.

---

## Stack e fontes

* **HTML5 semântico** (`header`, `section`, `main`, `footer`, `article`).
* **CSS3** com **Grid** e **Flexbox**.
* **Google Fonts**:

  * Títulos: **Luckiest Guy**
  * Texto: **Open Sans**

```html
<link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
```

---

## Estrutura de pastas

```
discord-landing/
├─ index.html
└─ assets/
   ├─ css/
   │  └─ style.css
   └─ images/
      ├─ hero-desktop.png
      ├─ section-1.png
      ├─ section-2.png
      ├─ section-3.png
      ├─ section-4.png
      ├─ discord-logo.svg         (rodapé)
      ├─ full-mobile.png          (print mobile de referência: 428×2792)
      └─ full-desktop.png         (print desktop de referência: 1280×2792)
```

> As imagens `section-*.png` correspondem aos blocos ilustrativos do layout.
> Os prints completos (`full-mobile.png`, `full-desktop.png`) servem como **referência visual**.

---

## Tradução do layout → componentes

* **Hero (Header)**: plano de fundo ilustrado, título grande, parágrafo e dois CTAs.
* **Seção 1**: imagem à esquerda + texto à direita.
* **Seção 2 (invertida)**: texto à esquerda + imagem à direita, fundo alternado.
* **Seção 3**: imagem + texto (layout padrão).
* **Seção 4 (centralizada)**: título + parágrafo + imagem (devices).
* **Footer**: faixa escura com **SVG do Discord**.

Estrutura HTML (resumo):

```html
<header class="hero">…</header>

<main>
  <section class="section">
    <div class="container grid">
      <div class="media"><img src="assets/images/section-1.png" alt=""></div>
      <div class="content">…</div>
    </div>
  </section>

  <section class="section alt">
    <div class="container grid reverse">…</div>
  </section>

  <section class="section">…</section>

  <section class="section alt centered">…</section>
</main>

<footer class="footer">…</footer>
```

---

## CSS – princípios adotados

### 1) **Design tokens** (tema centralizado)

```css
:root{
  --blurple:#5865F2;
  --dark:#23272A;
  --text:#2E3338;
  --muted:#5B5F67;
  --radius:18px;
  --container:1200px;
  --shadow:0 10px 30px rgba(0,0,0,.10);
}
```

> Facilita ajustes globais de cor, raio, sombra e largura máxima.

### 2) **Hero** com background e tipografia

```css
.hero{
  color:#fff;
  padding-block: clamp(64px,10vw,140px);
  background:
    linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.25)),
    url('../images/hero-desktop.png') center/cover no-repeat;
}
.hero .title{
  font-family:'Luckiest Guy', cursive;
  font-size: clamp(36px,7vw,80px);
  text-transform: uppercase;
}
```

### 3) **Grid responsivo** nas seções

```css
.grid{
  display:grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(24px,4vw,48px);
  align-items:center;
}
.grid.reverse{ grid-template-columns: 1fr 1.1fr; }
```

### 4) **Breakpoints** (fluidez real no mobile)

```css
@media (max-width: 880px){
  .grid, .grid.reverse{ grid-template-columns: 1fr; }
  .grid.reverse .media{ order:1; }
  .grid.reverse .content{ order:2; }
}
@media (max-width: 480px){
  .hero .actions{ flex-direction: column; }
  .hero .btn{ width:100%; }
}
```

> **Dica:** Se quiser alternar a imagem do hero por uma versão específica para mobile (por ex. `hero-mobile.png`), basta:

```css
@media (max-width: 480px){
  .hero{ background-image: url('../images/hero-mobile.png'); }
}
```

---

## Acessibilidade & Semântica

* Hierarquia de títulos coerente (`h1` no hero; `h2` nas seções).
* **`alt` descritivo** em todas as imagens.
* Botões/links com rótulos claros.
* Contraste adequado nos CTAs (tema escuro do hero).

---

## Como executar

1. Extraia o `.zip`.
2. Abra `index.html` no navegador.
3. Ajuste cores/medidas em `:root` (tokens) e troque imagens em `assets/images`.

---

## Aprendizados-chave

* **Decompor o print** em blocos reutilizáveis (hero, grid alternado, bloco centrado).
* **Grid + Flex** simplificam inversões de layout e empilhamento no mobile.
* **Tipografia** (Luckiest Guy + Open Sans) aproxima a identidade de marca.
* **Tokens** e **clamp()** deixam o design escalável e consistente.

> Resultado: uma landing **fiel e responsiva** ao layout do Discord, pronta para evoluir (p. ex.: tema escuro/claro, animações, i18n, assets otimizados em `webp`).
