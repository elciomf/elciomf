export default {
  home: {
    tagline: "Baseado no Brasil / Disponível para o mundo",
    description: {
      highlight: "Full-stack",
      part1: "Criando experiências digitais ",
      part2: " robustas.",
    },
    downloadCV: "Baixar CV",
    role: "Engenheiro de Software",
    focus: "Foco em Full-stack",
  },
  techStack: {
    label: "Conhecimentos",
    title: {
      part1: "TECH_",
      part2: "STACK",
    },
    description:
      "Impulsionando ideias modernas com um ecossistema escalável de tecnologias de classe mundial.",
    categories: {
      frontend: {
        name: "Frontend",
        desc: "UI/UX & Lógica do cliente",
      },
      backend: {
        name: "Backend",
        desc: "APIs Robustas & Arquitetura",
      },
      database: {
        name: "Banco de Dados & Cache",
        desc: "Persistência & Performance",
      },
      devops: {
        name: "DevOps & Ferramentas",
        desc: "Infraestrutura & Escalabilidade",
      },
    },
  },
  careerPath: {
    header: {
      label: "Histórico",
      title1: "CAREER_",
      title2: "PATH",
      description:
        "Um registro cronológico da minha evolução profissional e fundamentos acadêmicos.",
    },
    items: {
      vielitech: {
        title: "Desenvolvedor Full-stack",
        location: "São Bento do Sul, Brasil",
        description:
          "Liderei a transição arquitetônica de sistemas legados para React 19 e Vite, melhorando significativamente a performance de build. Desenvolvi microsserviços de alta performance usando Node.js e Next.js, integrando Kafka para comunicação baseada em eventos e Redis para cache eficiente. Construí APIs RESTful seguras com autenticação RBAC e JWT, e implementei algoritmos de otimização industrial usando OR-Tools para atingir 100% de eficiência na alocação de recursos. Otimizei a performance frontend usando SWR para cache inteligente, garantindo consistência via pipelines de Docker e CI/CD.",
      },
      tuper: {
        title: "Estagiário de Desenvolvimento de Software",
        location: "São Bento do Sul, Brasil",
        description:
          "Desenvolvi soluções de RPA baseadas em Python para automatizar fluxos de trabalho financeiros e comerciais críticos, resultando em uma redução de 12,5% no tempo de execução. Especializado no ecossistema ERP Datasul, desenvolvendo relatórios personalizados e algoritmos técnicos usando Progress 4GL (ABL) para alinhar com requisitos industriais complexos.",
      },
      datastream: {
        title: "Estagiário de Suporte e Integrações",
        location: "São Bento do Sul, Brasil",
        description:
          "Liderei a integração técnica de APIs de fintech para faturamento e gestão via Webhooks, reduzindo o esforço operacional manual em 90%. Desenvolvi um sistema de backup automatizado baseado em FTP em Python, otimizando o tempo de manutenção do cliente em 3,12% e aumentando a confiabilidade dos dados.",
      },
      udesc: {
        title: "Bacharelado em Sistemas de Informação",
        location: "Santa Catarina, Brasil",
        description:
          "Foco em arquitetura de software, sistemas distribuídos e desenvolvimento web moderno. Graduação prevista para Dezembro de 2026.",
      },
      ifc: {
        title: "Técnico em Informática",
        location: "Santa Catarina, Brasil",
        description:
          "Base técnica em computação, com foco em lógica de programação e fundamentos web.",
      },
    },
  },
  featuredProjects: {
    header: {
      label: "Portfólio",
      title1: "FEATURED_",
      title2: "PROJECTS",
      description:
        "Uma seleção dos meus melhores trabalhos, variando de arquiteturas back-end complexas a interfaces front-end polidas.",
    },
    status: {
      inDevelopment: "Em Desenvolvimento",
      completed: "Concluído",
    },
    buttons: {
      sourceCode: "Código Fonte",
      viewAll: "Ver todos os repositórios",
    },
    items: {
      cryptochronicler: {
        description:
          "Plataforma de High-Frequency Trading (HFT) construída em uma arquitetura de microsserviços. Utiliza algoritmos avançados baseados em Médias Móveis e RSI para execução estratégica e otimização de lucro em tempo real.",
      },
      orchestrium: {
        description:
          "Um orquestrador robusto para automações RPA em Python. Apresenta controle centralizado de ciclos de execução via Cron e gatilhos temporais, com um sistema de log estruturado para monitoramento de performance e depuração.",
      },
    },
  },
  contact: {
    header: {
      label: "Entre em contato",
      title1: "LET'S_",
      title2: "TALK?",
      description:
        "Você tem um projeto em mente ou apenas quer dizer oi? Estou sempre aberto a novas oportunidades e colaborações incríveis.",
    },
    info: {
      title: "Informações de Contato",
      email: "E-mail",
      phone: "Telefone",
      location: "Localização",
      copyAlert: "Copiado para a área de transferência: ",
      locationValue: "São Bento do Sul, SC, Brasil",
    },
    social: "Redes sociais",
    form: {
      name: {
        label: "Seu nome",
        placeholder: "Ex: João Silva",
      },
      email: {
        label: "Seu e-mail",
        placeholder: "joao@exemplo.com",
      },
      subject: {
        label: "Assunto",
        placeholder: "Como posso ajudar?",
      },
      message: {
        label: "Mensagem",
        placeholder: "Conte-me um pouco sobre sua ideia...",
      },
      submit: "Enviar mensagem",
    },
  },
} as const;
