---
status: accepted
date: 2026-10-11
---

# Um app Next.js só, com o back-end numa camada própria

O Dexplica é um app Next.js só: front, API, login e páginas no mesmo deploy da Vercel, com o back-end separado em camada própria (esquema do banco, API, login, importador e testes). Uma API separada (NestJS, Spring ou FastAPI) mostraria mais back-end no portfólio, mas com custo zero (RNF01) ela ficaria numa hospedagem grátis que "dorme" quando ninguém usa, e a primeira visita esperaria dezenas de segundos, quebrando o RNF03 (página em até 2,5 s).

## Consequences

- Se um dia houver orçamento para um servidor sempre ligado, a camada de back-end é o que sai para um serviço próprio; por isso ela não pode depender de detalhes das páginas.
