# Sorteio Frontend

Interface React para sorteio de numeros entre 1 e 10.000, com historico persistido via API.

## Tecnologias

- React 18 + Vite 5
- CSS puro, sem biblioteca de UI
- Docker + Nginx

## Como rodar localmente

1. Copie o arquivo de variaveis de ambiente:

```bash
cp .env.example .env
```

2. Instale as dependencias:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicacao ficara disponivel em:

```text
http://localhost:3000
```

O backend precisa estar rodando em:

```text
http://localhost:3001
```

## Como rodar com Docker

```bash
docker build -t sorteio-frontend .
docker run -p 3000:3000 sorteio-frontend
```

Para rodar tudo junto, frontend, backend e banco, use o `docker-compose.yml` no repositorio do backend.

## Funcionalidades

- Sorteio de numeros com faixa personalizavel, minimo e maximo entre 1 e 10.000
- Animacao do numero sendo sorteado
- Historico completo dos sorteios
- Remocao individual ou limpeza total do historico
- Tratamento de estados de carregamento, erro e sucesso

## Comunicacao com o backend

A URL da API e configurada pela variavel de ambiente `VITE_API_URL`. Em desenvolvimento, ela aponta para `http://localhost:3001`. Em producao via Docker, a comunicacao acontece pela rede interna do Docker Compose.

## Estrutura de pastas

```text
src/
  components/
    SorteioCard.jsx   Painel principal com o numero e formulario
    Historico.jsx     Listagem do historico
  hooks/
    useSorteio.js     Hook com a logica de estado
  services/
    api.js            Comunicacao com a API REST
  styles.css          Estilos globais
  App.jsx             Componente raiz
  main.jsx            Ponto de entrada
```

## Documentacao do projeto

### Clareza do README

Este README documenta o frontend do sistema de sorteio. Ele apresenta as tecnologias utilizadas, os passos para executar o projeto localmente, a forma de execucao com Docker, as funcionalidades principais, a comunicacao com o backend e a estrutura de pastas.

O objetivo da documentacao e facilitar o entendimento do projeto por qualquer pessoa que acesse o repositorio no GitHub.

### Facilidade de execucao do projeto

Para executar o frontend localmente, basta seguir a sequencia abaixo:

```bash
cp .env.example .env
npm install
npm run dev
```

Depois disso, acesse:

```text
http://localhost:3000
```

Para o funcionamento completo, execute tambem o backend em `http://localhost:3001`.

### Versionamento no GitHub

O projeto foi publicado no GitHub no repositorio:

```text
https://github.com/YMiLLYY/sorteio-frontend-1.git
```

Foi utilizada a branch `dev` para armazenar o projeto completo. Alem disso, foram criadas branches separadas para cada arquivo, com o objetivo de demonstrar o versionamento individual dos arquivos.

| Branch | Arquivo |
|--------|---------|
| `dev` | Projeto frontend completo |
| `arquivo-readme` | `README.md` |
| `arquivo-index-html` | `index.html` |
| `arquivo-gitignore` | `.gitignore` |
| `arquivo-app-jsx` | `src/App.jsx` |
| `arquivo-styles-css` | `src/styles.css` |
| `arquivo-main-jsx` | `src/main.jsx` |
| `arquivo-api-js` | `src/services/api.js` |
| `arquivo-use-sorteio-js` | `src/hooks/useSorteio.js` |
| `arquivo-historico-jsx` | `src/components/Historico.jsx` |
| `arquivo-sorteio-card-jsx` | `src/components/SorteioCard.jsx` |

As branches foram publicadas no GitHub usando o GitHub Desktop.
