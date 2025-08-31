# Conceitos de HTML –

Este README resume o conteúdo do arquivo **Guia Rápido de HTML** (somente HTML) que apresenta, de forma didática, os fundamentos para criar páginas web. O arquivo está organizado com **sidebar** (conteúdos), **conteúdo principal** (explicações e exemplos) e **âncoras** (navegação).

---
Link: [https://github.com/Mayvon/Bootcamp-Santander-FrontEnd-2025/blob/main/1%20-%20HTML/Index.html) 
---
## Sumário dos Tópicos

### 1) Introdução ao HTML na Prática

* HTML é a linguagem de marcação que **estrutura** páginas web.
* Documento mínimo: `<!DOCTYPE html>`, `<html>`, `<head>` (metadados) e `<body>` (conteúdo).
* Tags comuns: `h1–h6`, `p`, `a`, `img`, `ul/ol/li`, `div`, `span`.

### 2) Estruturando seu HTML + Formatações

* **Hierarquia** de títulos melhora leitura e SEO.
* Use listas para itens e **formatação semântica** para significado:

  * `strong` (destaque), `em` (ênfase), `mark` (realce), `code` (código).
* Boas práticas: identar, evitar `br` para espaçamento e manter conteúdo lógico.

### 3) Trabalhando com Formulários

* Coleta de dados via `<form action method>`.
* Controles: `input` (tipos `text`, `email`, `number`, `date`…), `textarea`, `select/option`, `checkbox`, `radio`, `file`.
* Atributos úteis: `name`, `id/for`, `required`, `min`, `max`, `placeholder`.

### 4) Mídias em HTML

* Imagens: `<img src alt>`. **Sempre** descreva com `alt`.
* Áudio e vídeo com `<audio controls>` e `<video controls>` usando `<source>` e formatos alternativos quando possível.

### 5) Tabelas

* Para **dados tabulares** (não para layout).
* Estrutura: `table` + `caption`, `thead`, `tbody`, `tfoot`, `tr`, `th`, `td`.

### 6) HTML Semântico

* Tags que comunicam **papel** do conteúdo:

  * `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`.
* Benefícios: acessibilidade, SEO e manutenção.

---

## Exemplos Rápidos

**Estrutura mínima**

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Título</title>
  </head>
  <body>
    <h1>Olá, mundo!</h1>
  </body>
</html>
```

**Formulário básico**

```html
<form action="/enviar" method="post">
  <label for="email">E-mail</label>
  <input id="email" name="email" type="email" required>
  <button type="submit">Enviar</button>
</form>
```

**Mídias**

```html
<img src="foto.jpg" alt="Descrição da imagem">
<audio controls><source src="trilha.mp3" type="audio/mpeg"></audio>
<video controls width="400"><source src="video.mp4" type="video/mp4"></video>
```

**Tabela**

```html
<table>
  <caption>Vendas por Mês</caption>
  <thead><tr><th>Mês</th><th>Total</th></tr></thead>
  <tbody><tr><td>Jan</td><td>10.000</td></tr></tbody>
</table>
```

**Semântica**

```html
<header>Topo</header>
<nav>Links</nav>
<main>
  <article>
    <h1>Título</h1>
    <section>Seção</section>
    <aside>Nota</aside>
  </article>
</main>
<footer>Rodapé</footer>
```

---

## Boas Práticas Destacadas

* Use `alt` em imagens e associe `label` a campos de formulário.
* Mantenha títulos em ordem (`h1` → `h2` → …).
* Prefira tags **semânticas** a `div/span` quando houver significado.
* Código **identado** e organizado melhora leitura e manutenção.

---

## Como usar

* Salve o arquivo como `index.html` e abra no navegador.
* O layout inclui uma **sidebar** com os tópicos, a área **principal** com explicações e exemplos, e a coluna **“Neste Artigo”** com âncoras para navegação rápida.
