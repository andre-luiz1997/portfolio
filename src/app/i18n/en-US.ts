import { Translation } from './translation.model';

export const enUS: Translation = {
  nav: { experience: 'Experience', education: 'Education', languages: 'Languages' },
  hello: 'Hi, I\'m',
  role: 'Tech Lead · Software Architecture · Full Stack',
  catchphrase: 'From business understanding <mark>to production.</mark>',
  summary: 'Hands-on tech lead with 6 years in software development, 3+ leading a team and using AI as a delivery multiplier.',
  photoAlt: 'Black and white photo of André Luiz',
  stackLabel: 'Everyday stack',

  experienceTitle: 'Work experience',
  experienceLocation: 'Timóteo – MG, Brazil',
  current: 'present',
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  duration: { year: 'yr', years: 'yrs', month: 'mo', months: 'mos', joiner: ' ' },
  jobs: [
    {
      title: 'Tech Lead · Software Engineer',
      text: 'I lead the team from scope to production, staying hands-on in architecture, code review and implementation.',
      tags: ['Tech leadership', 'Architecture', 'Mentoring', 'AI in the workflow']
    },
    {
      title: 'Software Engineer (Mid-level)',
      text: 'Architected a SaaS platform with PIX that confirms payments on its own, used by schools, shops and sports courts in Brazil and Chile.',
      tags: ['PIX', 'SaaS', 'NestJS', 'Angular']
    },
    {
      title: 'Software Engineering Intern',
      text: 'Full stack development with Angular and Node.js/NestJS, integrated with MySQL and MongoDB through REST APIs.',
      tags: ['Angular', 'NestJS', 'MySQL', 'REST APIs']
    }
  ],

  educationTitle: 'Education',
  degrees: [
    {
      years: '2023 – 2024', title: 'Postgraduate Specialization in Software Architecture', institution: 'FIAP',
      detail: 'Final project: migrating a monolith to microservices on AWS.',
      tags: ['Microservices', 'NestJS', 'AWS']
    },
    { years: '2015 – 2021', title: 'Bachelor\'s in Computer Engineering', institution: 'CEFET-MG' },
    {
      years: '2019 – 2020', title: 'Licence Professionnelle in Networks, Mobility and Security', institution: 'Université Grenoble Alpes',
      tags: ['Exchange', 'Grenoble, France']
    }
  ],

  languagesTitle: 'Languages',
  languages: [
    { name: 'Portuguese', level: 'Native' },
    { name: 'English', level: 'Advanced' },
    { name: 'Spanish', level: 'Intermediate' },
    { name: 'French', level: 'Reading and writing' }
  ]
};
