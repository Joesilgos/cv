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
  personalWebsiteUrl: "https://portfolio.joesilgos.com",
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
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
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
      company: "LukaTour",
      link: "https://www.lukatouradventure.com.br/",
      badges: ["Freelancer"],
      title: "Fullstack Pleno",
      logo: JojoMobileLogo,
      start: "2024",
      end: "2024",
      description:
        "desenvolvi um site de apresentação de turismo que inclui preços e rotas, permitindo o gerenciamento de cadastros onde os clientes podem se inscrever para obter os serviços oferecidos. O site facilita a organização e gestão dos pacotes turísticos",
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
      description:
        "Desenvolvi um sistema completo para uma empresa de hotelaria, abrangendo diversos aspectos operacionais e administrativos. O sistema inclui funcionalidades de gerenciamento de reservas, check-in e check-out, controle de inventário de quartos e recursos",
    },
    {
      company: "Restaurante Popular",
      link: "",
      badges: ["Freelancer"],
      title: "Fullstack Pleno",
      logo: NSNLogo,
      start: "2019",
      end: "2019",
      description:
        "Desenvolvi um sistema completo para uma empresa de restaurante que abrange gerenciamento de pedidos, controle de estoque em tempo real, otimização de reservas e alocação de mesas.",
    },
    {
      company: "Igor tec",
      link: "",
      badges: ["Presencial"],
      title: "Tecnico em reparação de Placas Mãe ATX",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description:
        "Trabalhei com reparação e conserto de placas-mãe ATX, com ampla experiência em diagnóstico e resolução de problemas complexos. Realizo serviços de soldagem de componentes, substituição de capacitores e chips, além de reparos em trilhas e conectores.",
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
      title:
        "Automação para Gerenciamento de Notas Fiscais e Captura de Vários Municípios",
      techStack: ["Python", "Playwright", "Airflow", "MySQL"],
      description:
        "(Montengro Contabilidade) Desenvolvi uma automação para captura e gerenciamento de notas fiscais de diversos municípios utilizando filas para processamento paralelo.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "Automação de Captura de Dados do Portal Directa",
      techStack: ["Python", "Playwright", "Airflow"],
      description:
        "(Montengro Contabilidade) Implementei uma automação para captura de dados do portal Directa sem necessidade de autenticação, utilizando Playwright e Airflow.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "Automação de Comparativo de Notas",
      techStack: ["Python", "NestJS", "Playwright"],
      description:
        "(Montengro Contabilidade) Desenvolvi uma automação que compara notas da Domínio Sistemas com as do portal UVT SEFAZ RN, facilitando o gerenciamento de informações.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "Captura de Informações do Portal Sieg",
      techStack: ["Python", "Playwright"],
      description:
        "(Montengro Contabilidade) Implementei uma automação para captura de informações do portal Sieg usando Playwright.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "Automação de Captura de Notas do Portal Tinus",
      techStack: ["Python", "Playwright"],
      description:
        "(Montengro Contabilidade) Desenvolvi uma automação para captura de informações das notas do portal Tinus.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "Provedor de Autenticação Sincronizado",
      techStack: ["Python", "Keycloak", "LDAP", "NestJS"],
      description:
        "(Montengro Contabilidade) Criei um provedor de autenticação integrado ao Keycloak e LDAP para gerenciar autenticações de usuários em diferentes plataformas.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "API de Captura de Informações do Portal Onvio",
      techStack: ["Python", "Playwright", "NestJS", "NextJS"],
      description:
        "(Montengro Contabilidade) Desenvolvi uma API para captura e unificação de informações do portal Onvio, exibindo gráficos e dados para melhor gerenciamento.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "API de Captura de Tarefas do Portal Gestta",
      techStack: ["Python", "Playwright", "NestJS", "NextJS"],
      description:
        "(Montengro Contabilidade) Desenvolvi uma API para captura e gerenciamento de tarefas no portal Gestta com suporte a múltiplos nodes conectados para execução distribuída.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },

    {
      title: "Captura de CAPTCHA do Portal UVT SEFAZ RN",
      techStack: ["Python", "Playwright", "Airflow"],
      description:
        "(Montengro Contabilidade) Criei uma solução para captura e resolução de CAPTCHA do portal UVT SEFAZ RN utilizando Python.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "Resumo XML de Notas Fiscais",
      techStack: ["TypeScript", "NestJS", "NextJS"],
      description:
        "(Montengro Contabilidade) Desenvolvi uma aplicação chamada Resumo XML que facilita o acesso e visualização de resumos de notas fiscais para colaboradores.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "API de Gerenciamento de Empresas via CNPJ",
      techStack: ["Python", "MySQL", "NestJS"],
      description:
        "(Montengro Contabilidade) Desenvolvi uma API para gerenciamento de dados de empresas com controle de acesso limitado para evitar custos adicionais na consulta por CNPJ.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "Gerenciamento de Arquivos com Docker e MinIO",
      techStack: ["Python", "Docker", "MinIO"],
      description:
        "(Montengro Contabilidade) Implementei a integração e salvamento de arquivos de diversos sistemas em um servidor de arquivos gerenciado com Docker e MinIO.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "Comparador de Boletos",
      techStack: ["Python", "Docker", "NestJS"],
      description:
        "(Montengro Contabilidade) Criei um comparador de boletos que identifica erros em valores e numerações usando algoritmos de comparação e QR Codes de Pix.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },

    {
      title: "Gerenciamento de Senhas Internas",
      techStack: ["TypeScript", "NestJS", "NextJS"],
      description:
        "(Montengro Contabilidade) Criei um sistema para gerenciamento de senhas de portais de uso interno, organizado e seguro.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "Captura e Gerenciamento de Informações de NCM",
      techStack: ["TypeScript", "NestJS", "NextJS"],
      description:
        "(Montengro Contabilidade) Implementei um sistema para captura e gerenciamento de informações de NCM.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "Gerenciamento de Certificados",
      techStack: ["TypeScript", "NestJS", "NextJS"],
      description:
        "(Montengro Contabilidade) Desenvolvi um sistema para monitorar vencimentos e inserção de certificados com base nas empresas internas.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "Controle de Convenções e Acordos Coletivos",
      techStack: ["TypeScript", "NestJS", "NextJS"],
      description:
        "(Montengro Contabilidade) Implementei um sistema para o gerenciamento e controle de convenções e acordos coletivos.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
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
      techStack: ["Docker", "Docker Compose", "Linux"],
      description:
        "(Montengro Contabilidade) Organizei estruturas de VM, implementei Docker e separei automações, melhorando o gerenciamento e eficiência operacional.",
      logo: ParabolLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Montengro Contabilidade",
      techStack: ["Nextjs", "Airflow", "Playwright", "Python", "MateriaUi"],
      description:
        "(Montengro Contabilidade) Desenvolvi um sistema completo para gerenciar processos dinâmicos de esteira, com fluxos flexíveis que facilitam a operação. O sistema permite ajustes em tempo real, otimiza a produtividade, e oferece uma interface intuitiva para o operador.",
      logo: ParabolLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Projeto Pessoal",
      techStack: ["Playwright", "Python"],
      description:
        "(Montengro Contabilidade) Desenvolvi uma integração com raspagem do ChatGPT Free para capturar informações, conectando-as com a Alexa para automatizar processos internos residenciais. Esse sistema permite comandos de voz para gerenciar tarefas domésticas.",
      logo: ParabolLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Intranet interno para a empresa",
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
        "(Montengro Contabilidade) Criei uma intranet para gerenciar processos internos da empresa, otimizando a comunicação e a eficiência operacional.",
      logo: ParabolLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Organização do Airflow",
      techStack: ["Airflow", "Python"],
      description:
        "(Montengro Contabilidade) Container Docker com Airflow para gerenciar DAGs de processos de forma eficiente.",
      logo: ParabolLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Captura de informações",
      techStack: ["FastApi", "Python", "Playwright", "Mysql"],
      description:
        "(Montengro Contabilidade) Desenvolvi uma API para iniciar e capturar informações de vários portais, automatizando a coleta de dados e melhorando a integração entre sistemas.",
      logo: ParabolLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Gerenciador de envio de e-mails",
      techStack: ["Nestjs", "Kafka", "Redis", "Mysql"],
      description:
        "(Montengro Contabilidade) Desenvolvi um microserviço para disparo organizado de e-mails, garantindo alta eficiência e personalização. O sistema gerencia filas de envio, rastreamento de status e respostas, integrando-se com diversas plataformas de e-mail para otimizar a comunicação.",
      logo: ParabolLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Montengro Contabilidade, Clan",
      techStack: ["Python", "Mysql"],
      description:
        "(Montengro Contabilidade, Clan) Desenvolvi um comparador de notas que renomeia automaticamente conforme os registros do banco de dados.",
      logo: ParabolLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Sistema de Notificações com Laravel e WebSocket",
      techStack: ["Laravel", "WebSocket", "MySQL"],
      description:
        "Desenvolvido sistema de notificação em tempo real para avisos de parcelas a vencer e eventos do setor financeiro, garantindo comunicação imediata e eficiente entre módulos.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title:
        "Integração de Pagamentos com Asaas para Projeto de Polpas de Frutas",
      techStack: ["Laravel", "Asaas API", "MySQL"],
      description:
        "Realizada a integração completa com a API do Asaas para automação de cobranças, controle de recebíveis e gestão financeira no projeto de produção de polpas de frutas.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "Sistema Dinâmico de Alocação de Tarefas com React Flow",
      techStack: ["React", "React Flow", "Node.js", "MySQL"],
      description:
        "Criação de sistema visual interativo para alocação de tarefas com integração ao sistema Gestã da Domínio, facilitando o controle e planejamento de atividades por parte dos gestores.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "Provedor de Autenticação para Integração com Onvio",
      techStack: ["OAuth2", "Laravel", "JWT"],
      description:
        "Desenvolvido provedor de autenticação centralizado para facilitar a integração segura entre o sistema projetado e a plataforma Onvio, reduzindo complexidade e tempo de integração.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "Reparo de Placas ATX e Manutenção de Sistemas",
      techStack: ["Eletrônica", "Diagnóstico de Hardware"],
      description:
        "Atuação em diagnóstico e conserto de placas-mãe ATX e manutenção geral de sistemas, identificando falhas críticas e realizando substituição de componentes eletrônicos.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "Reparo e Otimização de Redes de Computadores",
      techStack: ["Redes", "TCP/IP", "Linux"],
      description:
        "Reparação e otimização de redes locais e estruturadas, incluindo configuração de roteadores, switches e análise de desempenho para garantir estabilidade e segurança.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },
    {
      title: "Infraestrutura Linux para Implantação de Projetos",
      techStack: ["Linux", "Shell Script", "Docker", "Nginx"],
      description:
        "Estruturação e organização de servidores Linux para implantação de sistemas em produção, com foco em segurança, escalabilidade e automação de processos.",
      logo: ParabolLogo,
      link: { label: "", href: "" },
    },

    // ////////////////////////////
  ],
} as const;
