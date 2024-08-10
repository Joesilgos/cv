import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Joeclecio Silva (Joesilgos)",
  initials: "JS",
  location: "Natal, RN",
  locationLink: "",
  about:
    "Desenvolvedor fullstack pleno com vasta experiência na criação e manutenção de sistemas complexos e automações.",
  summary:
    "Minha carreira inclui uma ampla gama de projetos, desde sistemas de gerenciamento de produtos até soluções de automação, e estou sempre em busca de aprender e aplicar novas tecnologias para resolver problemas complexos de maneira eficiente.",
  avatarUrl: "https://avatars.githubusercontent.com/u/13321976?v=4",
  personalWebsiteUrl: "https://joesilgos.com",
  contact: {
    email: "joesilgos@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Joesilgos/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joeclecio-silgos/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },
    ],
  },
  education: [
    // {
    //   school: "Wrocław University of Technology",
    //   degree: "Bachelor's Degree in Control systems engineering and Robotics",
    //   start: "2007",
    //   end: "2010",
    // },
  ],
  work: [
    {
      company: "LukaTour",
      link: "https://lukatour.com.br/",
      badges: ["Freelancer"],
      title: "Fullstack Pleno",
      logo: JojoMobileLogo,
      start: "2024",
      end: null,
      description:
        "desenvolvi um site de apresentação de turismo que inclui preços e rotas, permitindo o gerenciamento de cadastros onde os clientes podem se inscrever para obter os serviços oferecidos. O site facilita a organização e gestão dos pacotes turísticos",
    },
    {
      company: "Montenegro Contabilidade",
      link: "",
      badges: ["Presencial"],
      title: "Fullstack Pleno",
      // logo: ConsultlyLogo,
      start: "2021",
      end: null,
      description:
        "Responsável pela organização e manutenção dos sistemas da empresa, implementei estruturas e automações contábeis. Desenvolvi automações para processos repetitivos, como captura de informações de sites governamentais, além de um sistema de intranet e outras ferramentas voltadas para a área contábil.",
    },
    {
      company: "Polpa de Frutas",
      link: "",
      badges: ["Freelancer"],
      title: "Fullstack Pleno",
      logo: ClevertechLogo,
      start: "2021",
      end: "2021",
      description:
        "Desenvolvi um aplicativo para gerenciar o estoque de matérias-primas, organizando os produtos internos. O app inclui mesclagem de adicionais, organização de ferramentas e materiais, além de uma calculadora para o peso de perdas de cada matéria-prima.",
    },
    {
      company: "Polpa de Frutas",
      link: "",
      badges: ["Freelancer"],
      title: "Fullstack Pleno",
      logo: ClevertechLogo,
      start: "2021",
      end: "2021",
      description:
        "Desenvolvi um sistema para gerenciar a entrada e saída de produtos em estoque, integrado com vendas e armazenamento no frigorífico. O sistema também inclui cadastro de manutenção de máquinas e controle de materiais adicionais.",
    },

    {
      company: "Hotelaria Sul",
      link: "",
      badges: ["Freelancer"],
      title: "Fullstack Pleno",
      logo: NSNLogo,
      start: "2020",
      end: "2020",
      description: "Desenvolvi um sistema completo para uma empresa de hotelaria, abrangendo diversos aspectos operacionais e administrativos. O sistema inclui funcionalidades de gerenciamento de reservas, check-in e check-out, controle de inventário de quartos e recursos",
    },
    {
      company: "Restaurante Popular",
      link: "",
      badges: ["Freelancer"],
      title: "Fullstack Pleno",
      logo: NSNLogo,
      start: "2019",
      end: "2019",
      description: "Desenvolvi um sistema completo para uma empresa de restaurante que abrange gerenciamento de pedidos, controle de estoque em tempo real, otimização de reservas e alocação de mesas.",
    },
    {
      company: "Igor tec",
      link: "",
      badges: ["Presencial"],
      title: "Tecnico em repração de Placas Mãe ATX",
      logo: NSNLogo,
      start: "2017",
      end: "2018",
      description: "Trabalhei com reparação e conserto de placas-mãe ATX, com ampla experiência em diagnóstico e resolução de problemas complexos. Realizo serviços de soldagem de componentes, substituição de capacitores e chips, além de reparos em trilhas e conectores.",
    },
  ],
  skills: [
    "Heroku",
    "Jest",
    "Kafka",
    "Linux",
    "OpenCV",
    "Puppeteer",
    "Qt",
    "Redis",
    "Sass",
    "Selenium",
    "Sketch",
    "Unity",
    "TensorFlow",
    "TypeScript",
    "Webpack",
    "WxWidgets",
    "Apache",
    "Cordova",
    "Arduino",
    "Babel",
    "Bash",
    "Blender",
    "C",
    "ChartJS",
    "C++",
    "Electron",
    "Figma",
    "Flutter",
    "Git",
    "GTK",
    "Bootstrap",
    "CSS3",
    "HTML5",
    "JavaScript",
    "React",
    "React Native",
    "Expo",
    "Playwright",
    "Tailwind",
    "Express",
    "Flask",
    "FastApi",
    "Laravel",
    "NestJS",
    "Keycloak",
    "NodeJS",
    "PHP",
    "Python",
    "Docker",
    "Kubernetes",
    "Nginx",
    "MariaDB",
    "MongoDB",
    "MSSQL",
    "MySQL",
    "SQLite",
  ],
  projects: [
    {
      title: "LukaTour",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Nextjs",
        "Typeorm",
        "Tailwind",
      ],
      description:
        "Site de turismo com preços, rotas e gerenciamento de cadastros, facilitando a organização de pacotes.",
      logo: ParabolLogo,
      link: {
        label: "site",
        href: "https://lukaTour.com/",
      },
    },
    {
      title: "Montengro Contabilidade",
      techStack: [
        "Docker",
        "Docker Compose",
        "Linux",
      ],
      description:
        "Organizei estruturas de VM, implementei Docker e separei automações, melhorando o gerenciamento e eficiência operacional.",
      logo: ParabolLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Montengro Contabilidade",
      techStack: [
        "Nextjs",
        "Airflow",
        "Playwright",
        "Python",
        "MateriaUi",
      ],
      description:
        "Desenvolvi um sistema completo para gerenciar processos dinâmicos de esteira, com fluxos flexíveis que facilitam a operação. O sistema permite ajustes em tempo real, otimiza a produtividade, e oferece uma interface intuitiva para o operador.",
      logo: ParabolLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Projeto Pessoal",
      techStack: [
        "Playwright",
        "Python",
      ],
      description:
        "Desenvolvi uma integração com raspagem do ChatGPT Free para capturar informações, conectando-as com a Alexa para automatizar processos internos residenciais. Esse sistema permite comandos de voz para gerenciar tarefas domésticas.",
      logo: ParabolLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Montengro Contabilidade",
      techStack: [
        "Nextjs",
        "Nestjs",
        "Kafka (microservices)",
        "Typeorm",
        "MaterialUi",
        "odbc",
        "Mysql",
        "Keycloak",
        "Zookeeper",
        "Cluters",
        "Swagger",
        "Squel",
      ],
      description:
        "Criei uma intranet para gerenciar processos internos da empresa, otimizando a comunicação e a eficiência operacional.",
      logo: ParabolLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Montengro Contabilidade",
      techStack: [
        "Airflow",
        "Python",
      ],
      description:
        "Container Docker com Airflow para gerenciar DAGs de processos de forma eficiente.",
      logo: ParabolLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Montengro Contabilidade",
      techStack: [
        "FastApi",
        "Python",
        "Playwright",
        "Mysql",
      ],
      description:
        "Desenvolvi uma API para iniciar e capturar informações de vários portais, automatizando a coleta de dados e melhorando a integração entre sistemas.",
      logo: ParabolLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Montengro Contabilidade",
      techStack: [
        "Nestjs",
        "Kafka",
        "Redis",
        "Mysql",
      ],
      description:
        "Desenvolvi um microserviço para disparo organizado de e-mails, garantindo alta eficiência e personalização. O sistema gerencia filas de envio, rastreamento de status e respostas, integrando-se com diversas plataformas de e-mail para otimizar a comunicação.",
      logo: ParabolLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Montengro Contabilidade, Clan",
      techStack: [
        "Python",
        "Mysql",
      ],
      description:
        "Desenvolvi um comparador de notas que renomeia automaticamente conforme os registros do banco de dados.",
      logo: ParabolLogo,
      link: {
        label: "",
        href: "",
      },
    },

    // ////////////////////////////
    
    
  ],
} as const;
