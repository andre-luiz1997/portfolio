# Pendências

## Segurança: credenciais SMTP versionadas no `.env`

O `.env` foi versionado no commit `f33769e` com credenciais SMTP do SendGrid
(`MAIL_PASSWORD` é uma API key) e está no histórico público do repositório.
A chave hoje não tem permissão de envio, mas segue válida.

- [ ] Localizar a conta SendGrid dona da chave e revogá-la (ou pedir a revogação ao suporte)
- [ ] Remover a variável `SENDGRID_API_KEY` do projeto `portfolio_server` na Vercel
- [ ] Adicionar `.env` ao `.gitignore` e rodar `git rm --cached .env`
- [ ] Remover o `.env.example`, que o frontend não usa mais desde a remoção do contato
- [ ] Avaliar a limpeza do histórico com `git filter-repo` (exige force push)
- [ ] Ativar o secret scanning do GitHub no repositório
