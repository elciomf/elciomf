export default {
  home: {
    tagline: "Based in Brazil / Available Worldwide",
    description: {
      highlight: "Full-stack",
      part1: "Crafting robust ",
      part2: " digital experiences.",
    },
    downloadCV: "Download CV",
    role: "Software Engineer",
    focus: "Full-stack Focus",
  },
  techStack: {
    label: "Expertise",
    title: {
      part1: "TECH_",
      part2: "STACK",
    },
    description:
      "Powering modern ideas with a scalable ecosystem of world-class technologies.",
    categories: {
      frontend: {
        name: "Frontend",
        desc: "UI/UX & Client-side logic",
      },
      backend: {
        name: "Backend",
        desc: "Robust APIs & Architecture",
      },
      database: {
        name: "Database & Cache",
        desc: "Persistence & Performance",
      },
      devops: {
        name: "DevOps & Tools",
        desc: "Infrastructure & Scalability",
      },
    },
  },
  careerPath: {
    header: {
      label: "History",
      title1: "CAREER_",
      title2: "PATH",
      description:
        "A chronological log of my professional evolution and academic foundations.",
    },
    items: {
      vielitech: {
        title: "Full-stack Developer",
        location: "São Bento do Sul, Brazil",
        description:
          "Led the architectural transition of legacy systems to React 19 and Vite, significantly improving build performance. Developed high-performance microservices using Node.js and Next.js, integrating Kafka for event-driven communication and Redis for efficient caching. Built secure RESTful APIs with RBAC and JWT authentication, and implemented industrial optimization algorithms using OR-Tools to achieve 100% resource allocation efficiency. Optimized frontend performance using SWR for intelligent caching, ensuring consistency via Docker and CI/CD pipelines.",
      },
      tuper: {
        title: "Software Developer Intern",
        location: "São Bento do Sul, Brazil",
        description:
          "Engineered Python-based RPA solutions to automate critical financial and commercial workflows, resulting in a 12.5% reduction in execution time. Specialized in the Datasul ERP ecosystem, developing custom reports and technical algorithms using Progress 4GL (ABL) to align with complex industrial requirements.",
      },
      datastream: {
        title: "Support & Integrations Intern",
        location: "São Bento do Sul, Brazil",
        description:
          "Spearheaded the technical integration of fintech APIs for billing and management via Webhooks, reducing manual operational effort by 90%. Developed an automated FTP-based backup system in Python, optimizing client maintenance time by 3.12% and increasing data reliability.",
      },
      udesc: {
        title: "B.S. in Information Systems",
        location: "Santa Catarina, Brazil",
        description:
          "Focusing on software architecture, distributed systems, and modern web development. Expected graduation in December 2026.",
      },
      ifc: {
        title: "Information Technology Technician",
        location: "Santa Catarina, Brazil",
        description:
          "Technical foundation in computing, focusing on programming logic and web fundamentals.",
      },
    },
  },
  featuredProjects: {
    header: {
      label: "Portfolio",
      title1: "FEATURED_",
      title2: "PROJECTS",
      description:
        "A selection of my best work, ranging from complex back-end architectures to polished front-end interfaces.",
    },
    status: {
      inDevelopment: "In Development",
      completed: "Completed",
    },
    buttons: {
      sourceCode: "Source Code",
      viewAll: "View all repositories",
    },
    items: {
      cryptochronicler: {
        description:
          "High-Frequency Trading (HFT) platform built on a microservices architecture. It leverages advanced algorithms based on Moving Averages and RSI for strategic execution and real-time profit optimization.",
      },
      orchestrium: {
        description:
          "A robust orchestrator for Python RPA automations. Features centralized control of execution cycles via Cron and temporal triggers, with a structured logging system for performance monitoring and debugging.",
      },
    },
  },
  contact: {
    header: {
      label: "Get in touch",
      title1: "LET'S_",
      title2: "TALK?",
      description:
        "Do you have a project in mind or just want to say hi? I'm always open to new opportunities and amazing collaborations.",
    },
    info: {
      title: "Contact Information",
      email: "E-mail",
      phone: "Phone",
      location: "Location",
      copyAlert: "Copied to clipboard: ",
      locationValue: "São Bento do Sul, SC, Brazil",
    },
    social: "Social media",
    form: {
      name: {
        label: "Your name",
        placeholder: "Ex: John Doe",
      },
      email: {
        label: "Your e-mail",
        placeholder: "john@example.com",
      },
      subject: {
        label: "Subject",
        placeholder: "How can I help?",
      },
      message: {
        label: "Message",
        placeholder: "Tell me a little about your idea...",
      },
      submit: "Send message",
    },
  },
} as const;
