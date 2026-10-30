# Portfólio · André Luiz

Site pessoal de André Luiz Silveira Lucas, tech lead e desenvolvedor full stack. Reúne apresentação, stack, experiência profissional, formação, idiomas, contato e uma seção de artigos, em português, inglês e francês.

**No ar:** https://portfolio-sigma-olive-30.vercel.app

## Tecnologias

- [Angular 19](https://angular.dev) com TypeScript
- SCSS, com layout em CSS Grid (bento) e estilos globais em `src/styles.scss`
- [ng-icons](https://ng-icons.github.io/ng-icons) (Simple Icons e Bootstrap Icons)
- [marked](https://marked.js.org) para renderizar os artigos em Markdown
- Fontes Instrument Serif, Instrument Sans e IBM Plex Mono via [Fontsource](https://fontsource.org)
- Deploy na [Vercel](https://vercel.com)

## Como rodar

Requer **Node.js 22** e npm.

```bash
npm ci        # instala as dependências
npm start     # servidor de desenvolvimento em http://localhost:4200
```

Para gerar a versão de produção:

```bash
npm run build # saída em dist/portfolio/browser
```

## Estrutura

```
src/app/
├── components/   blocos da página inicial (apresentação, stack, experiência, formação, idiomas, contato)
├── pages/        páginas: início, lista de artigos e artigo
├── i18n/         textos em pt-BR, en-US e fr-FR
├── articles/     lista de artigos publicados
└── services/     troca de idioma
src/assets/
├── img/          foto e ilustrações
└── articles/     artigos em Markdown
```

## Conteúdo

- **Textos:** ficam em `src/app/i18n/`. Os três idiomas seguem o mesmo modelo (`translation.model.ts`), então o build falha se faltar algum texto em um deles.
- **Artigos:** crie `src/assets/articles/<slug>.md` e adicione título, resumo, data e tags em `src/app/articles/articles.ts`. O artigo fica disponível em `/artigos/<slug>`.

## Deploy

Cada push na `main` gera um deploy na Vercel. As configurações de build (Node 22, pasta de saída e redirecionamento das rotas para o `index.html`) estão em `package.json` e `vercel.json`.
