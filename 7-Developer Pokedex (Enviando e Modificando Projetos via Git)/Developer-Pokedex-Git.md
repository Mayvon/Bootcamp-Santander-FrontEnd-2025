# Guia Git – **Developer Pokedex**

Este guia mostra, passo a passo, como **enviar** e **modificar** projetos com Git usando o projeto **Developer Pokedex** como exemplo.
Os comandos funcionam no macOS, Linux e Windows (PowerShell).

> Pasta do exemplo: `js-developer-pokedex-main/`

---

## 0) Pré-requisitos

1. **Instalar o Git**

   * macOS: `brew install git`
   * Ubuntu/Debian: `sudo apt-get install git`
   * Windows: [git-scm.com](https://git-scm.com/download/win)

2. **Configurar sua identidade (uma vez por máquina)**

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
git config --global init.defaultBranch main
```

---

## 1) Iniciar um repositório local (projeto existente)

Entre na pasta do projeto **Developer Pokedex** e inicialize o Git:

```bash
cd js-developer-pokedex-main
git init
```

Crie um commit inicial:

```bash
git add .
git commit -m "chore: commit inicial do Developer Pokedex"
```

> Dica: verifique o que vai ser commitado com `git status` e `git diff`.

### (Opcional) `.gitignore` recomendado

Crie um arquivo `.gitignore` na raiz:

```gitignore
# Dependências e builds
node_modules/
dist/
build/
.cache/
.tmp/

# Ambiente/segredos
.env
.env.*.local

# SO/Editor
.DS_Store
Thumbs.db
.vscode/
.idea/
```

Adicione e faça novo commit se necessário:

```bash
git add .gitignore
git commit -m "chore: adiciona .gitignore"
```

---

## 2) Criar o repositório remoto (GitHub)

1. Crie um repositório **vazio** no GitHub (ex.: `developer-pokedex`).
2. Conecte o remoto e envie:

```bash
git remote add origin https://github.com/<seu-usuario>/developer-pokedex.git
git push -u origin main
```

> `-u` define `origin/main` como upstream, facilitando `git push` e `git pull` futuros.

---

## 3) Clonar (caso esteja começando do zero)

Se o repositório **já existe no GitHub** e você quer baixar:

```bash
git clone https://github.com/<seu-usuario>/developer-pokedex.git
cd developer-pokedex
```

---

## 4) Fluxo básico de trabalho

### Ver o status e alterações

```bash
git status          # arquivos modificados / não rastreados
git diff            # dif das alterações não adicionadas
git diff --staged   # dif do que já está preparado para commit (staged)
```

### Salvar mudanças

```bash
git add caminho/do/arquivo.js    # adiciona arquivo específico
git add .                         # adiciona tudo o que está modificado
git commit -m "feat: adiciona busca por Pokémon no Developer Pokedex"
```

### Enviar ao remoto

```bash
git push
```

### Atualizar sua cópia local

```bash
git pull
```

---

## 5) Branches (trabalhar por feature)

Criar e mudar para uma **branch** de feature:

```bash
git switch -c feat/busca-por-nome
# (alternativa legada) git checkout -b feat/busca-por-nome
```

Trabalhe, faça commits e envie:

```bash
git add .
git commit -m "feat: implementa filtro de busca por nome"
git push -u origin feat/busca-por-nome
```

Abra um **Pull Request** no GitHub da branch `feat/busca-por-nome` para `main`.
Depois de revisado e aprovado, **faça o merge** no GitHub.
Atualize sua `main` local:

```bash
git switch main
git pull
```

> Dica: apague a branch de feature quando terminar:
> `git branch -d feat/busca-por-nome` (local) e `git push origin --delete feat/busca-por-nome` (remoto).

---

## 6) Sincronizar sua branch com `main`

Antes de finalizar uma feature, traga as novidades da `main`:

```bash
git switch feat/busca-por-nome
git pull origin main --rebase   # reaplica seus commits no topo da main
# Resolva conflitos se houver, depois:
git push --force-with-lease
```

> `--rebase` mantém o histórico mais linear.
> **Nunca** use `--force` simples em branches compartilhadas; prefira `--force-with-lease`.

---

## 7) Reverter e desfazer com segurança

* **Desfazer alterações no arquivo (antes de add/commit):**

  ```bash
  git restore caminho/do/arquivo.js
  ```
* **Tirar do staged (voltar do add):**

  ```bash
  git restore --staged caminho/do/arquivo.js
  ```
* **Reverter um commit já enviado (gera um commit de reversão):**

  ```bash
  git log --oneline
  git revert <hash-do-commit>
  git push
  ```
* **Voltar o working directory ao último commit (descarta tudo não commitado):**

  ```bash
  git reset --hard HEAD
  ```

> Use `reset --hard` com cautela (perde alterações locais não commitadas).

---

## 8) Guardar alterações temporariamente (stash)

Quando precisar trocar de branch sem perder o que está fazendo:

```bash
git stash push -m "WIP: refatoração do card do Pokedex"
git switch main
# ...
git switch feat/refatoracao-card
git stash list
git stash pop     # reaplica a alteração guardada
```

---

## 9) Logs e histórico

```bash
git log --oneline --decorate --graph --all
```

---

## 10) Mensagens de commit (sugestão de padrão)

Use mensagens curtas e descritivas (ex.: Conventional Commits):

* `feat:` nova funcionalidade
* `fix:` correção de bug
* `chore:` tarefas de manutenção
* `docs:` documentação
* `refactor:` refatoração de código

Exemplos:

```bash
git commit -m "feat: adiciona cartão de detalhes do Pokémon"
git commit -m "fix: corrige busca por ID com zeros à esquerda"
git commit -m "chore: configura .gitignore e Node 20 no projeto"
```

---

## 11) Checklist rápido (do zero ao GitHub)

1. `git init`
2. `git add .`
3. `git commit -m "chore: commit inicial do Developer Pokedex"`
4. Criar repo no GitHub (vazio)
5. `git remote add origin https://github.com/<seu-usuario>/developer-pokedex.git`
6. `git push -u origin main`

---

## 12) Problemas comuns

* **“failed to push some refs”**: sua `main` local está atrás do remoto.
  Faça `git pull --rebase` e depois `git push`.

* **Conflitos de merge**: edite arquivos marcados `<<<<<<<`, `=======`, `>>>>>>>`,
  resolva manualmente, `git add .` e `git commit` (ou finalize o rebase com `git rebase --continue`).

* **Arquivo sensível commitado por engano**:
  Adicione ao `.gitignore`, remova do histórico com `git rm --cached caminho` e faça commit.
  Se já estiver público, troque as credenciais vazadas (tokens/senhas).

---

## 13) Comandos de bolso

```bash
git status
git add . && git commit -m "mensagem"
git push
git pull
git switch -c feat/minha-feature
git switch main
git log --oneline
git diff
git restore --staged .
git restore .
git stash push -m "WIP"
git stash pop
```

---

## Conclusão

Com este fluxo você:

* **Publica** o Developer Pokedex no GitHub,
* **Evolui** o projeto em **branches de feature**,
* **Envia e integra** alterações com `commit`, `push`, `pull`/`rebase`,
* **Resolve conflitos**, **desfaz** com segurança e **organiza** o histórico.

