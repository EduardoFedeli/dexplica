---
status: accepted
date: 2026-10-11
---

# Dados do jogo no Postgres, importados todo mês pelo GitHub Actions

Os dados do jogo (Showdown) e o Uso (smogon.com/stats) são importados uma vez por mês para o Postgres por um script no GitHub Actions, e as páginas são geradas a partir do banco. O importador não roda na Vercel porque a função grátis tem no máximo 60 s, e ler os arquivos do Showdown e as estatísticas de três Gerações pode passar disso. As alternativas eram tudo estático no build (rápido, mas quase sem back-end) e tudo ao vivo por API (mais lento e gastando a cota grátis do banco).

## Consequences

- Os dados de um mês entram numa transação só: o site nunca mostra metade de um mês novo.
- Ao terminar, o importador manda o app regenerar as páginas; não existe outra rota para os dados do jogo chegarem ao site.
