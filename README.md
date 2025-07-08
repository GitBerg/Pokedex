## 📚 PokeDex  – Next + React + Apollo + Zustand
Uma Pokédex moderna que consome a PokéAPI via GraphQL, oferece pesquisa em tempo real, tema claro/escuro com transição suave.

## ✨ Funcionalidades


| Módulo | Descrição |
|--------|-----------|
|`/Login`| Formulário com validação nativa, salva cookie + localStorage para liberar acesso ao Dashboard.|
|`Middleware de proteção`| Bloqueia /dashboard para quem não preencheu e‑mail, evitando acesso direto pela URL.|
|`/Dashboard`| Barra lateral com 1025 Pokémon; filtro instantâneo por nome ou número; CardGrid com detalhes.|
|`Tema dinâmico`| Alternância claro/escuro persistida em localStorage, com fade 0 .35 s (transition de cores).|
|`Cache & Global State`| Apollo Cache para dados; Zustand para tema, Pokémon selecionado e termo de busca.|
|`Skeletons`| Carregamento enxuto usando react-loading-skeleton.|

## 🛠 Tecnologias principais

 - Next 13+ (App Router, Middleware, Edge Runtime)
 - React 18 (Client & Server Components)
 - Apollo Client 3 (GraphQL PokéAPI wrapper)
 - Zustand (estado global simples e performático)
 - styled‑components (+ SSR registry)
 - React Loading Skeleton
 - TypeScript

## 🚀 Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Definir variáveis (se necessário)
# Não há chaves secretas – GraphQL PokéAPI é público

# 3. Iniciar em modo dev
npm run dev
# abre em http://localhost:3000
```
## 🧩 Pontos de evolução

- ~SSR styled‑components ✔️~
- ~Dark / Light Theme ✔️~
- ~Barra de busca global (Zustand) ✔️~
- Lazy load de imagens com loading="lazy" – todo
- Paginação virtualizada (react‑window) – todo
- PWA & Offline first – futuro

## 📝 Licença

MIT © 2025 — Construa, melhore, dê os devidos creditos e divirta‑se.
