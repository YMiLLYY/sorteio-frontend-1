# Sorteio Frontend

Interface React para sorteio de números entre 1 e 10.000, com histórico persistido via API.

## Tecnologias

- React 18 + Vite 5
- CSS puro (sem biblioteca de UI)
- Docker + Nginx

## Como rodar localmente

1. Copie o arquivo de variáveis de ambiente:

```bash
cp .env.example .env
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará em `http://localhost:3000`.

> O backend precisa estar rodando em `http://localhost:3001`. Veja o repositório do backend.

## Como rodar com Docker

```bash
docker build -t sorteio-frontend .
docker run -p 3000:3000 sorteio-frontend
```

Para rodar tudo junto (frontend + backend + banco), use o `docker-compose.yml` no repositório do backend.

## Funcionalidades

- Sorteio de números com faixa personalizável (mínimo e máximo entre 1 e 10.000)
- Animação do número sendo sorteado
- Histórico completo dos sorteios
- Remoção individual ou limpeza total do histórico
- Tratamento de estados: loading, erro e sucesso

## Comunicação com o backend

A URL da API é configurada pela variável de ambiente `VITE_API_URL`. Em desenvolvimento, aponta para `http://localhost:3001`. Em produção via Docker, a comunicação acontece via rede interna do Docker Compose.

## Estrutura de pastas

```
src/
├── components/
│   ├── SorteioCard.jsx   # Painel principal com o número e formulário
│   └── Historico.jsx     # Listagem do histórico
├── hooks/
│   └── useSorteio.js     # Hook com toda a lógica de estado
├── services/
│   └── api.js            # Comunicação com a API REST
├── styles.css             # Estilos globais
├── App.jsx                # Componente raiz
└── main.jsx               # Ponto de entrada
```
