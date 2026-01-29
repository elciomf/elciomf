export default {
  home: {
    tagline:
      "Basado en Brasil / Disponible para todo el mundo",
    description: {
      highlight: "Full-stack",
      part1: "Creando experiencias digitales ",
      part2: " robustas.",
    },
    downloadCV: "Obtener Currículum",
    downloadingMessage:
      "Preparando currículo para descargar...",
    role: "Ingeniero de Software",
    focus: "Enfoque Full-stack",
  },
  techStack: {
    label: "Experiencia",
    title: {
      part1: "TECH_",
      part2: "STACK",
    },
    description:
      "Impulsando ideas modernas con un ecosistema escalable de tecnologías de clase mundial.",
    categories: {
      frontend: {
        name: "Frontend",
        desc: "UI/UX y lógica del lado del cliente",
      },
      backend: {
        name: "Backend",
        desc: "APIs robustas y arquitectura",
      },
      database: {
        name: "Base de Datos y Cache",
        desc: "Persistencia y rendimiento",
      },
      devops: {
        name: "DevOps y Herramientas",
        desc: "Infraestructura y escalabilidad",
      },
    },
  },
  careerPath: {
    header: {
      label: "Historia",
      title1: "CAREER_",
      title2: "PATH",
      description:
        "Un registro cronológico de mi evolución profesional y bases académicas.",
    },
    items: {
      vielitech: {
        title: "Desarrollador Full-stack",
        location: "São Bento do Sul, Brasil",
        description:
          "Lideré la transición arquitectónica de sistemas legados a React 19 y Vite, mejorando significativamente el rendimiento de compilación. Desarrollé microservicios de alto rendimiento utilizando Node.js y Next.js, integrando Kafka para la comunicación basada en eventos y Redis para un almacenamiento en caché eficiente. Construí APIs RESTful seguras con autenticación RBAC y JWT, e implementé algoritmos de optimización industrial utilizando OR-Tools para lograr un 100% de eficiencia en la asignación de recursos. Optimicé el rendimiento del frontend utilizando SWR para el almacenamiento en caché inteligente, garantizando la consistencia a través de Docker y pipelines de CI/CD.",
      },
      tuper: {
        title: "Pasante de Desarrollo de Software",
        location: "São Bento do Sul, Brasil",
        description:
          "Diseñé soluciones RPA basadas en Python para automatizar flujos de trabajo financieros y comerciales críticos, lo que resultó en una reducción del 12,5% en el tiempo de ejecución. Especializado en el ecosistema ERP Datasul, desarrollando informes personalizados y algoritmos técnicos utilizando Progress 4GL (ABL) para alinearse con requisitos industriales complejos.",
      },
      datastream: {
        title: "Pasante de Soporte e Integraciones",
        location: "São Bento do Sul, Brasil",
        description:
          "Lideré la integración técnica de APIs de fintech para facturación y gestión a través de Webhooks, reduciendo el esfuerzo operativo manual en um 90%. Desarrollé un sistema de respaldo automatizado basado en FTP en Python, optimizando el tiempo de mantenimiento del cliente en um 3,12% e incrementando la confiabilidad de los datos.",
      },
      udesc: {
        title: "Licenciatura en Sistemas de Información",
        location: "Santa Catarina, Brasil",
        description:
          "Enfocado en arquitectura de software, sistemas distribuidos y desarrollo web moderno. Graduación prevista para diciembre de 2026.",
      },
      ifc: {
        title: "Técnico en Informática",
        location: "Santa Catarina, Brasil",
        description:
          "Base técnica en computación, enfocada en lógica de programación y fundamentos web.",
      },
    },
  },
  featuredProjects: {
    header: {
      label: "Portafolio",
      title1: "FEATURED_",
      title2: "PROJECTS",
      description:
        "Una selección de mis mejores trabajos, que van desde arquitecturas complejas de back-end hasta interfaces de front-end pulidas.",
    },
    status: {
      inDevelopment: "En Desarrollo",
      completed: "Completado",
    },
    buttons: {
      sourceCode: "Código Fuente",
      viewAll: "Ver todos los repositorios",
    },
    items: {
      cryptochronicler: {
        description:
          "Plataforma de High-Frequency Trading (HFT) construida sobre una arquitectura de microservicios. Aprovecha algoritmos avanzados basados en Medias Móviles y RSI para la ejecución estratégica y la optimización de beneficios en tiempo real.",
      },
      orchestrium: {
        description:
          "Un robusto orquestador para automatizaciones RPA en Python. Incluye control centralizado de los ciclos de ejecución mediante Cron y disparadores temporales, con un sistema de registro estructurado para la supervisión del rendimiento y la depuración.",
      },
    },
  },
  contact: {
    header: {
      label: "Ponte en contacto",
      title1: "LET'S_",
      title2: "TALK?",
      description:
        "¿Tienes un proyecto en mente o solo quieres saludar? Siempre estoy abierto a nuevas oportunidades y colaboraciones increíbles.",
    },
    info: {
      title: "Información de contacto",
      email: "Correo electrónico",
      phone: "Teléfono",
      location: "Ubicación",
      copyAlert: "Copiado al portapapeles: ",
      locationValue: "São Bento do Sul, SC, Brasil",
    },
    social: "Redes sociales",
    form: {
      name: {
        label: "Tu nombre",
        placeholder: "Ej: Juan Pérez",
      },
      email: {
        label: "Tu correo electrónico",
        placeholder: "juan@ejemplo.com",
      },
      subject: {
        label: "Asunto",
        placeholder: "¿En qué puedo ayudarte?",
      },
      message: {
        label: "Mensaje",
        placeholder: "Cuéntame un poco sobre tu idea...",
      },
      submit: "Enviar mensaje",
    },
  },
} as const;
