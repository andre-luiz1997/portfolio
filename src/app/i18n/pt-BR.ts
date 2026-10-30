import { Translation } from './translation.model';

export const ptBR: Translation = {
  nav: { experience: 'Experiência', education: 'Formação', languages: 'Idiomas' },
  hello: 'Olá, eu sou',
  role: 'Líder Técnico · Arquitetura de Software · Full Stack',
  catchphrase: 'Do entendimento do negócio <mark>à produção.</mark>',
  summary: 'Tech lead hands-on com 6 anos em desenvolvimento de software, mais de 3 liderando time e usando IA como multiplicador de entrega.',
  photoAlt: 'Foto de André Luiz em preto e branco',
  stackLabel: 'Stack do dia a dia',

  experienceTitle: 'Experiência profissional',
  experienceLocation: 'Timóteo – MG',
  current: 'atual',
  months: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  duration: { year: 'ano', years: 'anos', month: 'mês', months: 'meses', joiner: ' e ' },
  jobs: [
    {
      title: 'Líder Técnico · Engenheiro de Software',
      text: 'Lidero o time do escopo à produção, com participação direta em arquitetura, code review e implementação.',
      tags: ['Liderança técnica', 'Arquitetura', 'Mentoria', 'IA no fluxo do time']
    },
    {
      title: 'Engenheiro de Software Pleno',
      text: 'Arquitetei uma plataforma SaaS com PIX que confirma os pagamentos sozinha, usada por escolas, lojas e quadras no Brasil e no Chile.',
      tags: ['PIX', 'SaaS', 'NestJS', 'Angular']
    },
    {
      title: 'Estagiário de Engenharia de Software',
      text: 'Desenvolvimento full stack com Angular e Node.js/NestJS, integrados a MySQL e MongoDB via APIs REST.',
      tags: ['Angular', 'NestJS', 'MySQL', 'APIs REST']
    }
  ],

  educationTitle: 'Formação acadêmica',
  degrees: [
    {
      years: '2023 – 2024', title: 'Pós-graduação em Arquitetura de Software', institution: 'FIAP',
      detail: 'Trabalho final: migração de um monolito para microsserviços na AWS.',
      tags: ['Microsserviços', 'NestJS', 'AWS']
    },
    { years: '2015 – 2021', title: 'Bacharelado em Engenharia de Computação', institution: 'CEFET-MG' },
    {
      years: '2019 – 2020', title: 'Licence Professionnelle em Redes, Mobilidade e Segurança', institution: 'Université Grenoble Alpes',
      tags: ['Intercâmbio', 'Grenoble, França']
    }
  ],

  languagesTitle: 'Idiomas',
  languages: [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Avançado' },
    { name: 'Espanhol', level: 'Intermediário' },
    { name: 'Francês', level: 'Leitura e escrita' }
  ]
};
