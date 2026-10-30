import { Translation } from './translation.model';

export const frFR: Translation = {
  nav: { experience: 'Expérience', education: 'Formation', languages: 'Langues' },
  hello: 'Salut, je suis',
  role: 'Lead technique · Architecture logicielle · Full Stack',
  catchphrase: 'De la compréhension du métier <mark>à la production.</mark>',
  summary: 'Lead technique hands-on avec 6 ans en développement logiciel, plus de 3 à la tête d\'une équipe, avec l\'IA comme multiplicateur de livraison.',
  photoAlt: 'Photo en noir et blanc d\'André Luiz',
  stackLabel: 'Stack au quotidien',

  experienceTitle: 'Expérience professionnelle',
  experienceLocation: 'Timóteo – MG, Brésil',
  current: 'aujourd\'hui',
  months: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
  duration: { year: 'an', years: 'ans', month: 'mois', months: 'mois', joiner: ' ' },
  jobs: [
    {
      title: 'Lead technique · Ingénieur logiciel',
      text: 'Je dirige l\'équipe du cadrage à la production, en restant impliqué dans l\'architecture, la revue de code et l\'implémentation.',
      tags: ['Leadership technique', 'Architecture', 'Mentorat', 'IA dans le flux']
    },
    {
      title: 'Ingénieur logiciel confirmé',
      text: 'J\'ai conçu une plateforme SaaS avec PIX qui confirme les paiements automatiquement, utilisée par des écoles, des commerces et des terrains de sport au Brésil et au Chili.',
      tags: ['PIX', 'SaaS', 'NestJS', 'Angular']
    },
    {
      title: 'Stagiaire en génie logiciel',
      text: 'Développement full stack avec Angular et Node.js/NestJS, intégrés à MySQL et MongoDB via des API REST.',
      tags: ['Angular', 'NestJS', 'MySQL', 'API REST']
    }
  ],

  educationTitle: 'Formation académique',
  degrees: [
    {
      years: '2023 – 2024', title: 'Spécialisation en architecture logicielle', institution: 'FIAP',
      detail: 'Projet final : architecture de migration d\'un système monolithique vers des microservices dans le cloud.',
      tags: ['Architecture microservices', 'Cloud computing', 'Architecture logicielle']
    },
    { years: '2015 – 2021', title: 'Diplôme d\'ingénieur en informatique', institution: 'CEFET-MG' },
    {
      years: '2019 – 2020', title: 'Licence Professionnelle Réseaux, Mobilité et Sécurité', institution: 'Université Grenoble Alpes',
      tags: ['Échange', 'Grenoble, France']
    }
  ],

  languagesTitle: 'Langues',
  languages: [
    { name: 'Portugais', level: 'Natif' },
    { name: 'Anglais', level: 'Avancé' },
    { name: 'Espagnol', level: 'Intermédiaire' },
    { name: 'Français', level: 'Lecture et écriture' }
  ]
};
