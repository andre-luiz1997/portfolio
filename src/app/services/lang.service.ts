import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  languageChange: Subject<string> = new Subject<string>();
  private lang: string | any = localStorage.getItem('default_lang') ? localStorage.getItem('default_lang') : 'pt-BR';

  private language = [
    {
      lang: 'pt-BR',
      icon: 'flag-icon-br'
    },
    {
      lang: 'en-US',
      icon: 'flag-icon-us'
    },{
      lang: 'fr-FR',
      icon: 'flag-icon-fr'
    }
  ];

  private translation: any = {
    'pt-BR': {
      // A ------------------------------------------------------------
      'about_me': 'Sobre mim',
      'about_me_p1': '<span>Sou André Luiz, Engenheiro de Computação pelo CEFET-MG, atuando no</span> <span class="highlight">Desenvolvimento Web/Mobile</span> <span>com foco em marketing digital e plataformas de transformação digital, como gerenciamento de CRM, ambientes SaaS (Software as a Service) e REST API em PHP, Node.js com banco de dados em MySQL, Postgres e MongoDB.</span>',
      'about_me_p2': '<span>Estudo computação desde 2015, quando ingressei na faculdade. No período de 2019-2020, fui contemplado no programa de mobilidade acadêmica internacional do CEFET-MG e me mudei para Grenoble, na França, para realizar um <span class="highlight">intercâmbio estudantil no Institute Universitaire de Tecnologie 1 (IUT1)</span>, onde obtive o grau de License Professionelle em Redes de Telecomunicações e Segurança Digital.</span>',
      'about_me_p3': '<span>Acredito fielmente na capacidade da tecnologia e da programação em mudar o mundo e as realidades de milhões de pessoas. Para isto, busco sempre me manter ativo nos estudos e em aprendizado contínuo, sendo participativo e colaborativo pois tenho muito a aprender com as pessoas a minha volta. Tenho uma abordagem ativa e dinâmica para trabalhar e fazer as coisas. Tenho uma mente criativa e sou <span class="highlight">motivado por novos desafios e novas tarefas que podem desencadear minha criatividade</span> e desenvolver minhas habilidades pessoais.</span>',
      'angularjs': 'Angular',

      // C ------------------------------------------------------------
      'codeigniter': 'CodeIgniter',
      'contact': 'Contato',
      'css3': 'CSS3',

      // E ------------------------------------------------------------
      'education': 'Educação',
      'education_dsc': {
        'knn': {
          'start': 2020,
          'location': 'Timóteo - MG',
          'course': 'Curso de Proficiência na Língua Francesa',
          'institution': 'KNN'
        },
        'cefet_mg': {
          'start': 2015,
          'end': 2021,
          'location': 'Timóteo - MG',
          'course': 'Bacharelado em Engenharia de Computação',
          'institution': 'CEFET-MG'
        },
        'iut1': {
          'start': 2019,
          'end': 2020,
          'location': 'Grenoble - França',
          'course': 'Licence Professionelle em Redes, telecomunicação e segurança',
          'institution': 'Institute Universitaire de Technologie 1 - UGA'
        },
        'iniciacao_cientifica': {
          'start': 2018,
          'end': 2020,
          'location': 'Timóteo - MG',
          'course': 'Iniciação científica voluntária',
          'institution': 'CEFET-MG',
          'description': 'Desenvolvimento de plataforma educacional focada em Tecnologias de Construção, visualização 3D de elementos da disciplina com Three.js'
        },
        'ipc': {
          'start': 2018,
          'end': 2019,
          'location': 'Timóteo - MG',
          'course': 'Projeto de Extensão',
          'institution': 'CEFET-MG',
          'description':'Projeto IPC: Introdução à programação de computadores. Aluno pesquisador em métodos de ensino e avaliação de Pensamento Computacional a alunos de escolas públicas da cidade'
        },
        'ccaa': {
          'start': 2014,
          'end': 2017,
          'location': 'Timóteo - MG',
          'course': 'Curso de proficiência em Língua Inglesa',
          'institution': 'CCAA Timóteo'
        }
      },
      'experience': 'Experiência',
      'experiences': 'Experiências',
      'express': 'ExpressJs',

      // H ------------------------------------------------------------
      'html5': 'HTML5',

      // I ------------------------------------------------------------
      'ionic': 'Ionic',

      // J ------------------------------------------------------------
      'javascript': 'Javascript',

      // L ------------------------------------------------------------
      'laravel': 'Laravel',

      // M ------------------------------------------------------------
      'mysql': 'MySQL',
      'mongodb': 'MongoDB',

      // N ------------------------------------------------------------
      'nodejs': 'NodeJS',

      // O ------------------------------------------------------------
      'ongoing': 'Em curso',

      // P ------------------------------------------------------------
      'php': 'PHP',
      'portfolio': 'Portfólio',
      'profileName': 'André Luiz',
      'profilePosition': 'Desenvolvedor Web FullStack',
      'project': 'Projeto',
      'projects': 'Projetos',
      'project_dsc': {
        'appfintech': {
          'title': 'AppFintech',
          'subtitle': 'Projeto empresarial',
          'description': 'Ecossistema de transações via PIX, possibilitando integração com PDV (Ponto de Venda) e carteira digital em tempo-real com transações vinculadas à API da Matera.',
          'url': 'www.appfintech.com.br'
        },
        'america': {
          'title': 'América Vistos Assessoria',
          'subtitle': 'Projeto empresarial',
          'description': 'Sistema de gestão de leads no ramo de consultoria em visto americano, com implementação de funil de vendas, preenchimento de documentação de cadastro e andamento do processo junto às autoridades americanas. </br> Integração com meio de pagamento PagSeguro e com assinatura digital de contratos pelo D4Sign.',
          'url': 'www.americavistos.com.br'
        },
        'campanhas': {
          'title': 'Campanhas.App',
          'subtitle': 'Projeto empresarial',
          'description': 'Sistema de campanhas promocionais com foco no comércio, no modelo SaaS (Software as a Service). </br> Desenvolvimento de aplicativo em Ionic5 para cadastramento de cupons pelos clientes e acesso ao programa de fidelidade.',
          'url': 'www.campanhas.app'
        },
        'ntwdigital': {
          'title': 'Ntw Digital',
          'subtitle': 'Projeto empresarial',
          'description': 'Sistema de franquias de contabilidade com abertura de empresa totalmente online, gerenciamento financeiro e emissão de nota fiscal de serviço com integração via Tecnospeed.',
          'url': 'www.ntwdigital.com.br'
        },
        'tutore': {
          'title': 'Sistema Tutore Consulting',
          'subtitle': 'Projeto empresarial',
          'description': 'Sistema de gestão de franquias no ramo de consultoria de pequenos negócios, com funil de vendas e gestão financeira.',
        }
      },
      // S ------------------------------------------------------------
      'skills': 'Habilidades',
      'send_message': 'Enviar mensagem',

      // T ------------------------------------------------------------
      'typescript': 'Typescript',

      // W ------------------------------------------------------------
      'wordpress': 'Wordpress',
      // Y ------------------------------------------------------------
      'year': 'Ano',
      'years': 'Anos',
      'your_name': 'Seu nome',
      'your_best_email': 'Seu melhor email',
      'your_message': 'Sua mensagem',

    },'en-US':{
      // A ------------------------------------------------------------
      'about_me': 'About me',
      'about_me_p1': '<span>I\'m André Luiz, Computer Engineer at CEFET-MG, working in</span> <span class="highlight">Web/Mobile Development</span> <span>with a focus on digital marketing and digital transformation platforms, such as management CRM, SaaS environments (Software as a Service) and REST API in PHP, Node.js with database in MySQL, Postgres and MongoDB.</span>',
      'about_me_p2': '<span>I\'ve been studying computing since 2015, when I started college. In the period 2019-2020, I was included in the international academic mobility program at CEFET-MG and moved to Grenoble, France, to undertake a <span class="highlight">student exchange at the Institute Universitaire de Tecnologie 1 (IUT1) </span>, where I obtained the degree of License Professionelle in Telecommunications Networks and Digital Security.</span>',
      'about_me_p3': '<span>I truly believe in the ability of technology and programming to change the world and the realities of millions of people. For this, I always try to keep myself active in studies and in continuous learning, being participative and collaborative because I have a lot to learn from the people around me. I have an active and dynamic approach to working and getting things done. I have a creative mind and am <span class="highlight">motivated by new challenges and new tasks that can spark my creativity</span> and develop my personal skills.</span>',
      'angularjs': 'Angular',

      // C ------------------------------------------------------------
      'codeigniter': 'CodeIgniter',
      'contact': 'Contact',
      'css3': 'CSS3',

      // E ------------------------------------------------------------
      'education': 'Educação',
      'experience': 'Experience',
      'experiences': 'Experiences',
      'express': 'ExpressJs',

      // H ------------------------------------------------------------
      'html5': 'HTML5',

      // I ------------------------------------------------------------
      'ionic': 'Ionic',

      // J ------------------------------------------------------------
      'javascript': 'Javascript',

      // L ------------------------------------------------------------
      'laravel': 'Laravel',

      // M ------------------------------------------------------------
      'mysql': 'MySQL',
      'mongodb': 'MongoDB',

      // N ------------------------------------------------------------
      'nodejs': 'NodeJS',

      // P ------------------------------------------------------------
      'php': 'PHP',
      'portfolio': 'Portfolio',
      'profileName': 'André Luiz',
      'profilePosition': 'FullStack Web Developer',
      
      // S ------------------------------------------------------------
      'skills': 'Skills',
      

      // T ------------------------------------------------------------
      'typescript': 'Typescript',

      // W ------------------------------------------------------------
      'wordpress': 'Wordpress',
      // Y ------------------------------------------------------------
      'year': 'Year',
      'years': 'Years'
    }
  }

  projects = [
    {
      key: 'tutore',
      list: [
        'codeigniter','mysql'
      ],
      url: null,
    },{
      key: 'campanhas',
      list: [
        'laravel','mysql'
      ]
    },{
      key: 'america',
      list: [
        'codeigniter','mysql','wordpress'
      ],
      url: 'https://americavistos.com.br/'
    },{
      key: 'ntwdigital',
      list: [
        'codeigniter','mysql','wordpress'
      ],
      url: 'https://ntwdigital.com.br/'
    },{
      key: 'appfintech',
      list: [
        'angularjs','nodejs','css3','express'
      ]
    }    
  ];

  skills = [
    {
      key: 'javascript',
      icon: 'devicon-javascript-plain',
      experience: 2,
      projects: [
        'tutore',
        'america',
        'ntw-digital',
        'carteira',
        'campanhas'
      ]
    },{
      key: 'php',
      icon: 'devicon-php-plain',
      experience: 3,
    },{
      key: 'html5',
      icon: 'devicon-html5-plain-wordmark',
      experience: 4
    },{
      key: 'css3',
      icon: 'devicon-css3-plain-wordmark',
      experience: 3
    },{
      key: 'codeigniter',
      icon: 'devicon-codeigniter-plain-wordmark',
      experience: 1.5
    },{
      key: 'angularjs',
      icon: 'devicon-angularjs-plain',
      experience: 1
    },{
      key: 'typescript',
      icon: 'devicon-typescript-plain',
      experience: 1
    },{
      key: 'mysql',
      icon: 'devicon-mysql-plain-wordmark',
      experience: 2
    },{
      key: 'laravel',
      icon: 'devicon-laravel-plain-wordmark',
      experience: 1
    },{
      key: 'ionic',
      icon: 'devicon-ionic-original-wordmark',
      experience: 1
    },{
      key: 'nodejs',
      icon: 'devicon-nodejs-plain-wordmark',
      experience: .5
    },{
      key: 'mongodb',
      icon: 'devicon-mongodb-plain-wordmark',
      experience: .5
    },{
      key: 'express',
      icon: 'devicon-express-original-wordmark',
      experience: .3
    },{
      key: 'wordpress',
      icon: 'devicon-wordpress-plain',
      experience: 1
    },
  ];

  constructor() {
    this.languageChange.subscribe((value) => {
      this.lang = value;
    })
  }

  getTranslation(){
    return this.translation[this.lang];
  }

  getProjects(){
    return this.projects;
  }

  getLanguage(): {lang: string, icon: string} | any{
    return this.language.find((elem: {lang: string, icon: string}) => {
      return elem.lang == this.lang;
    });
  }

  getAvailableLanguages(): any{
    return this.language;
  }

  setLang(lang: string): void{
    // this.lang = lang;
    this.languageChange.next(lang);
    localStorage.setItem('default_lang', lang);
    return this.translation[this.lang];
  }

  getLang(): string{
    return this.lang;
  }
}
