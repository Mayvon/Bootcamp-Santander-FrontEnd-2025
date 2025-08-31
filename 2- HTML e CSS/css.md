# Trilha de CSS – README (foco no CSS)

Este projeto estiliza uma landing page simples **apenas com CSS**, sem alterar a marcação HTML original. O objetivo é demonstrar um layout moderno, responsivo e acessível utilizando **variáveis CSS**, **Grid**, **gradientes**, microinterações e imagens fornecidas em `assets/images`.

---

## Estrutura

```
index.html
assets/
  css/
    style.css
  images/
    banner.png
    dio-logo.png
    logo.png
    professional-challenges.png
    woman-code.png
```

O `index.html` contém apenas a inclusão da folha de estilos:

```html
<link rel="stylesheet" href="assets/css/style.css">
```

---

## Principais decisões de design

### 1) Design tokens via `:root`

Paleta, raios, sombras e espaçamentos centralizados.

```css
:root{
  --bg:#0b1020; --card:#11162a; --surface:#0f1430;
  --text:#e6edf3; --muted:#acb4c0;
  --primary:#7c5cff; --primary-2:#22d3ee; --accent:#ff6b99;
  --radius:14px; --shadow:0 10px 30px rgba(0,0,0,.25);
  --container:1120px;
  --space:clamp(16px,2vw,28px);
  --space-lg:clamp(24px,4vw,56px);
  --space-xl:clamp(48px,7vw,96px);
  --font: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
  --mono: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
}
```

> **Como personalizar:** troque cores e espaçamentos no `:root` para retematizar todo o site.

### 2) Tipografia fluida e layout

* Tamanhos com `clamp()` para escalar bem do mobile ao desktop.
* Container centralizado com `max-width` e `padding` fluidos.
* `display: grid` para **hero**, listas de módulos e rodapé.

### 3) Hero / Banner

* Imagem de fundo `banner.png` com **overlay** em gradiente e glow sutil.
* Título com **gradiente de texto** (background-clip) e botão com gradiente, shadow e hover.

```css
header.banner{
  min-height:84vh; place-items:center; text-align:center;
  background:
    linear-gradient(180deg, rgba(11,16,32,.3), rgba(11,16,32,.95)),
    url('assets/images/banner.png') center/cover no-repeat fixed;
}
.banner h1{
  font-size:clamp(28px,6vw,56px);
  background:linear-gradient(90deg,#fff,#c7d2fe,#b3eaff);
  -webkit-background-clip:text; color:transparent;
}
.banner button{
  border-radius:999px;
  background:linear-gradient(135deg,var(--primary),var(--primary-2));
  transition:transform .14s, box-shadow .2s, filter .2s;
}
```

### 4) “O que vou aprender?” – Cards de Módulo

* Grid responsivo `auto-fit` com **cards** (borda translúcida, backdrop blur e hover elevando).
* Ícone decorativo via `::before`.

```css
.modules-list{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(260px,1fr));
  gap:var(--space);
}
.module{
  padding:18px 18px 18px 56px;
  border-radius:var(--radius);
  border:1px solid rgba(255,255,255,.08);
  background:linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.008));
  transition:transform .15s, border-color .3s, background .3s;
}
.module:hover{ transform:translateY(-3px); border-color:rgba(124,92,255,.35); }
```

### 5) “Transforme o mundo”

* Faixa impactante com **camadas de background** (gradiente + imagem `woman-code.png` + overlay).
* Tipografia em caixa alta com `letter-spacing` e leve `text-stroke`.

```css
#transform-world{
  background:
    linear-gradient(90deg, rgba(124,92,255,.18), rgba(34,211,238,.12)),
    url('assets/images/woman-code.png') right/contain no-repeat,
    linear-gradient(180deg, rgba(11,16,32,.85), rgba(11,16,32,.85));
}
```

### 6) “Desafios profissionais”

* Imagem principal com **borda sutil**, raio, e sombra.
* Bloco com gradiente suave para separar do restante da página.

### 7) Rodapé

* Grade centralizada, logo com `drop-shadow` e links com `text-underline-offset`.

### 8) Responsividade

* Mobile-first, com ajustes específicos abaixo de `640px`:

```css
@media (max-width: 640px){
  .banner p{ padding-inline: 8px; }
  #transform-world{ margin: var(--space-lg) var(--space); }
}
```

---

## Técnicas empregadas

* **CSS Custom Properties** (tema/paleta).
* **Gradientes múltiplos** e **camadas de background**.
* **Grid Layout** para organização responsiva.
* **Tipografia fluida** com `clamp()`.
* **Microinterações** com `transition`, `hover` e `drop-shadow`.
* **Atenção ao contraste** em tema escuro.

---

## Como executar

1. Baixe/extraia o projeto.
2. Abra `index.html` em qualquer navegador moderno.
3. Para personalizar o tema, edite os tokens em `assets/css/style.css` (seção `:root`).

---

## Pontos de ajuste rápido

* **Cores do tema**: `--primary`, `--primary-2`, `--bg`, `--text`.
* **Ritmo vertical**: `--space`, `--space-lg`, `--space-xl`.
* **Raio e sombras**: `--radius`, `--shadow`.
* **Largura máxima do conteúdo**: `--container`.
* **Imagem do hero**: troque `assets/images/banner.png`.

---

## Licença / Observações

* Projeto educativo, sem dependências externas.
* Todas as imagens referenciadas estão em `assets/images/`.
* O HTML original foi preservado; toda a identidade é aplicada via CSS.
