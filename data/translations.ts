const EN = {
  meta: { name: "José Pérez", role: "Backend Developer" },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    skills: "Stack",
    education: "Education",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    recents: "Conversations",
    next: "Next",
    language: "Language",
  },
  hero: {
    status: "Open to backend roles",
    greeting: "Hi, I'm José.",
    roles: ["Backend Developer", "Systems Engineer"],
    title: "I build APIs, and I explain them so anyone can understand.",
    desc: "Backend developer working with Node.js, TypeScript and MySQL. I design REST APIs, multi-tenant data models and AI-powered integrations.",
    composerPlaceholder: "Ask about my work…",
    chips: {
      projects: "See projects",
      cv: "Download CV",
      contact: "Contact",
    },
  },
  about: {
    question: "Who is José?",
    paragraphs: [
      "I'm a Systems Engineer and backend developer focused on APIs, data modeling and system design. I work mostly with Node.js, Express, Prisma and MySQL.",
      "I lead the backend of TalentMatch AI, a multi-tenant SaaS for recruitment: I design the architecture, build the REST API and keep the technical documentation and sprints moving for a small team.",
      "I care about clear contracts, predictable data and being able to explain how a system works to people who don't read code.",
    ],
    facts: [
      { label: "Focus", value: "REST APIs · Multi-tenant SaaS" },
      { label: "Core stack", value: "Node.js · TypeScript · Prisma · MySQL" },
      { label: "Availability", value: "Available for remote work" },
      { label: "Base", value: "Dominican Republic" },
    ],
  },
  projects: {
    question: "What has he built?",
    items: [
      {
        name: "TalentMatch AI",
        kind: "B2B HR SaaS · Backend · Tech Lead",
        status: "MVP deployed",
        problem:
          "Recruiters lose hours parsing and comparing candidates by hand. TalentMatch AI scores candidates against a role automatically.",
        points: [
          "Built the SaaS's complete backend: RESTful API architecture, MySQL database design with Prisma and OpenAI API integration for semantic analysis of profiles.",
          "Implemented the scoring engine that ranks candidates by fit with each vacancy, automating the initial screening step of hiring.",
          "Led the dev team as Tech Lead: code reviews, bug resolution and frontend coordination. MVP deployed and demoed to 5 initial users.",
        ],
        stack: ["Node.js", "Express", "Prisma", "MySQL", "OpenAI API", "React"],
        code: "https://github.com/JosePerez0314/talentmatch-backend",
        codeLabel: "Backend repo",
        videoLabel: "Watch demo",
        closeLabel: "Close",
        liveUrl: "",
        liveLabel: "",
        privateLabel: "",
      },
      {
        name: "Video Editor — Shorts",
        kind: "AI agents · Freelance",
        status: "Public repo",
        problem:
          "A production system that turns a topic into a ready-to-publish vertical short (1080×1920): idea → script → scenes → render → review → social calendar. A team of 6 Claude Code agents, guided by 33 skill manuals, does the work and the creator only approves at checkpoints.",
        points: [
          "Designed a workflow of 6 AI agents with defined contracts (strategy, script, editing, quality control and social media) and 33 skills, with human supervision on every creative decision. Implemented with Claude Code.",
          "Extended an open source editor built on Remotion: scenes, subtitles and sound effects are synchronized to the voice transcription (Whisper).",
          "Automated quality control with 30 measured checks (format, volume, loop, safe zones) and token cost tracked per task. 4 videos delivered, 2 published on social media.",
        ],
        stack: ["Claude Code", "Remotion", "React", "TypeScript", "Node.js", "Python", "FFmpeg", "Whisper"],
        code: "https://github.com/JosePerez0314/video-editor",
        codeLabel: "Repository",
        videoLabel: "",
        closeLabel: "Close",
        liveUrl: "",
        liveLabel: "",
        privateLabel: "",
      },
      {
        name: "OMEX Solution",
        kind: "Freelance · Full stack + SEO",
        status: "Live",
        problem:
          "Business website for a Dominican company that supplies offices with materials and facility services (A/C maintenance, pest control, commercial cleaning). Built as a freelance project.",
        points: [
          "Designed and built the site from scratch for a Dominican B2B supplier of office supplies and maintenance: live in production, with technical SEO and responsive design.",
          "Managed the project independently: scope, quote, development, deployment and delivery.",
          "Built with Next.js, React and Tailwind CSS, deployed on Vercel, with direct contact via call, email and WhatsApp.",
        ],
        stack: ["Next.js", "React", "Tailwind CSS", "SEO", "Vercel"],
        code: "",
        codeLabel: "",
        videoLabel: "",
        closeLabel: "Close",
        liveUrl: "https://omexsolution.com",
        liveLabel: "Visit site",
        privateLabel: "Private repository (client work)",
      },
      {
        name: "Portfolio",
        kind: "Next.js · This site",
        status: "Live",
        problem:
          "A bilingual, SEO-ready portfolio built with the Next.js App Router and Tailwind CSS v4, designed around a Claude-style interface.",
        points: [
          "Bilingual content from a single typed dictionary.",
          "Reduced-motion aware animations with Framer Motion.",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind v4", "Framer Motion"],
        code: "https://github.com/JosePerez0314/portfolio",
        codeLabel: "Source",
        videoLabel: "",
        closeLabel: "Close",
        liveUrl: "",
        liveLabel: "",
        privateLabel: "",
      },
    ],
    fullstack: {
      title: "Also full stack and SEO",
      text: "If it's useful for your team: besides backend, I also build full stack products (React, Next.js) and handle technical SEO — metadata, performance and search visibility — as in OMEX Solution.",
      cta: "Let's talk",
    },
  },
  experience: {
    question: "Where has he worked?",
    items: [
      {
        role: "IT Specialist & Web Developer",
        company: "BCBLPRO (Pluton Legal)",
        place: "Santo Domingo, DR · Until the company ceased operations",
        period: "Jul 2026 – Oct 2026 (3 months)",
        bullets: [
          "Designed, built and deployed the company landing page (plutonlegal.com) from scratch with Next.js, Tailwind CSS and Vercel, mobile-first, with a lead-capture form.",
          "Provided technical support and independently administered the IT environment (25+ users): Microsoft Entra ID / M365, devices joined to Entra ID, least-privilege accounts and shared mailboxes per department.",
          "Carried out the technical survey of the network and the data center plan (switches, firewall, UPS, VLAN, IP video surveillance with 20 cameras) and audited an external provider's telephony/CRM system, identifying unrecognized accounts and visibility inconsistencies.",
        ],
      },
      {
        role: "Technical Support",
        company: "M&C Inversiones",
        place: "Santo Domingo, DR",
        period: "Jan 2025 – Jul 2026 (1 year 6 months)",
        bullets: [
          "Provided technical assistance to 10+ users, resolving incidents in systems, equipment and technology platforms quickly and efficiently.",
          "Helped modernize and configure corporate printers, cutting recurring incidents by more than 80% and improving operational continuity in the administrative area.",
        ],
      },
    ],
  },
  skills: {
    question: "What does he work with?",
    groups: [
      {
        name: "Backend",
        items: [
          { name: "Node.js", icon: "node" },
          { name: "Express", icon: "express" },
          { name: "TypeScript", icon: "ts" },
          { name: "JavaScript", icon: "js" },
          { name: "RESTful APIs", icon: "rest" },
        ],
      },
      {
        name: "Data",
        items: [
          { name: "MySQL", icon: "mysql" },
          { name: "Prisma ORM", icon: "prisma" },
          { name: "SQL (joins, indexes, transactions)", icon: "sql" },
        ],
      },
      {
        name: "AI integrations",
        items: [
          { name: "OpenAI API", icon: "openai" },
          { name: "Claude Code", icon: "claude" },
          { name: "AI agents / LLMs", icon: "agents" },
        ],
      },
      {
        name: "Infrastructure & IT",
        items: [
          { name: "Docker / Containers", icon: "docker" },
          { name: "Linux / VPS administration", icon: "linux" },
          { name: "Microsoft Entra ID / M365", icon: "entra" },
        ],
      },
      {
        name: "Tooling",
        items: [
          { name: "Git & GitHub", icon: "git" },
          { name: "Vercel", icon: "vercel" },
        ],
      },
      {
        name: "Frontend",
        items: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "next" },
          { name: "Tailwind CSS", icon: "tailwind" },
        ],
      },
    ],
  },
  education: {
    question: "What is his background?",
    degree: {
      label: "University degree",
      title: "B.S. Systems Engineering",
      school: "Universidad Tecnológica de Santiago (UTESA)",
      detail: "Degree earned · October 2026 · GPA 3.7 / 4.0 · 2022 – 2026 · Santo Domingo, DR",
    },
    certsLabel: "Certifications",
    certs: [
      {
        title: "Full Stack Web Development — Intermediate level",
        issuer: "Talento Digital · INDOTEL · BID · CYMETRIA",
        detail: "80 hours · January 2026 · Santo Domingo, DR",
      },
    ],
    languagesLabel: "Languages",
    languages: [
      { name: "Spanish", level: "Native", detail: "" },
      {
        name: "English",
        level: "Intermediate (B1)",
        detail: "Reading technical documentation and communicating ideas",
      },
    ],
  },
  contact: {
    question: "How can I reach him?",
    text: "I'm looking for backend roles. If you want to talk about APIs, architecture or a project, write to me.",
    email: "Send an email",
    cv: "Download CV",
  },
  footer: "© 2026 José Pérez. All rights reserved.",
  resume: {
    filePath: "/docs/Jose_Gabriel_Perez_Calcano_Resume_English.pdf",
    fileName: "Jose_Perez_Backend_Developer_EN.pdf",
  },
};

export type Dictionary = typeof EN;

const ES: Dictionary = {
  meta: { name: "José Pérez", role: "Desarrollador Backend" },
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos",
    experience: "Experiencia",
    skills: "Stack",
    education: "Educación",
    contact: "Contacto",
    menu: "Menú",
    close: "Cerrar",
    recents: "Conversaciones",
    next: "Siguiente",
    language: "Idioma",
  },
  hero: {
    status: "Disponible para roles backend",
    greeting: "Hola, soy José.",
    roles: ["Desarrollador Backend", "Ingeniero de Sistemas"],
    title: "Construyo APIs y las explico para que cualquiera las entienda.",
    desc: "Desarrollador backend con Node.js, TypeScript y MySQL. Diseño APIs REST, modelos de datos multi-tenant e integraciones con IA.",
    composerPlaceholder: "Pregunta sobre mi trabajo…",
    chips: {
      projects: "Ver proyectos",
      cv: "Descargar CV",
      contact: "Contacto",
    },
  },
  about: {
    question: "¿Quién es José?",
    paragraphs: [
      "Soy Ingeniero en Sistemas y desarrollador backend enfocado en APIs, modelado de datos y diseño de sistemas. Trabajo principalmente con Node.js, Express, Prisma y MySQL.",
      "Lidero el backend de TalentMatch AI, un SaaS multi-tenant de reclutamiento: diseño la arquitectura, construyo la API REST y mantengo la documentación técnica y los sprints de un equipo pequeño.",
      "Me importan los contratos claros, los datos predecibles y poder explicar cómo funciona un sistema a quien no lee código.",
    ],
    facts: [
      { label: "Enfoque", value: "APIs REST · SaaS multi-tenant" },
      {
        label: "Stack principal",
        value: "Node.js · TypeScript · Prisma · MySQL",
      },
      { label: "Disponibilidad", value: "Disponible para trabajo remoto" },
      { label: "Ubicación", value: "República Dominicana" },
    ],
  },
  projects: {
    question: "¿Qué ha construido?",
    items: [
      {
        name: "TalentMatch AI",
        kind: "SaaS B2B de RR. HH. · Backend · Tech Lead",
        status: "MVP desplegado",
        problem:
          "Los reclutadores pierden horas analizando y comparando candidatos a mano. TalentMatch AI puntúa candidatos frente a un puesto de forma automática.",
        points: [
          "Desarrollé el backend completo del SaaS: arquitectura de APIs RESTful, diseño de base de datos MySQL con Prisma e integración con la API de OpenAI para el análisis semántico de perfiles.",
          "Implementé el motor de scoring que ordena candidatos por afinidad con cada vacante, automatizando la preselección inicial del proceso de reclutamiento.",
          "Lideré como Tech Lead el equipo de desarrollo: code reviews, resolución de bugs y coordinación del frontend. MVP desplegado con demostración a 5 usuarios iniciales.",
        ],
        stack: ["Node.js", "Express", "Prisma", "MySQL", "OpenAI API", "React"],
        code: "https://github.com/JosePerez0314/talentmatch-backend",
        codeLabel: "Repo backend",
        videoLabel: "Ver demo",
        closeLabel: "Cerrar",
        liveUrl: "",
        liveLabel: "",
        privateLabel: "",
      },
      {
        name: "Video Editor — Shorts",
        kind: "Agentes de IA · Freelance",
        status: "Repo público",
        problem:
          "Un sistema de producción que convierte un tema en un short vertical listo para publicar (1080×1920): idea → guion → escenas → render → revisión → calendario de redes. Un equipo de 6 agentes de Claude Code, guiado por 33 manuales (skills), hace el trabajo y el creador solo aprueba en los puntos de control.",
        points: [
          "Diseñé un flujo de 6 agentes de IA con contratos definidos (estrategia, guion, edición, control de calidad y redes) y 33 skills, con supervisión humana en cada decisión creativa. Implementación asistida por Claude Code.",
          "Extendí un editor open source sobre Remotion: escenas, subtítulos y efectos de sonido se sincronizan con la transcripción de la voz (Whisper).",
          "Control de calidad automatizado con 30 comprobaciones medidas (formato, volumen, bucle, zonas seguras) y costo en tokens medido por tarea. 4 videos entregados y 2 publicados en redes.",
        ],
        stack: ["Claude Code", "Remotion", "React", "TypeScript", "Node.js", "Python", "FFmpeg", "Whisper"],
        code: "https://github.com/JosePerez0314/video-editor",
        codeLabel: "Repositorio",
        videoLabel: "",
        closeLabel: "Cerrar",
        liveUrl: "",
        liveLabel: "",
        privateLabel: "",
      },
      {
        name: "OMEX Solution",
        kind: "Freelance · Full stack + SEO",
        status: "En línea",
        problem:
          "Sitio web corporativo para una empresa dominicana que suministra materiales de oficina y servicios para instalaciones (mantenimiento de aire acondicionado, fumigación, limpieza comercial). Desarrollado como proyecto freelance.",
        points: [
          "Diseñé y desarrollé desde cero el sitio de una empresa B2B dominicana de suministros de oficina y mantenimiento: publicado en producción, con SEO técnico y diseño responsive.",
          "Gestioné el proyecto de forma independiente: alcance, cotización, desarrollo, despliegue y entrega.",
          "Construido con Next.js, React y Tailwind CSS, desplegado en Vercel, con contacto directo por llamada, correo y WhatsApp.",
        ],
        stack: ["Next.js", "React", "Tailwind CSS", "SEO", "Vercel"],
        code: "",
        codeLabel: "",
        videoLabel: "",
        closeLabel: "Cerrar",
        liveUrl: "https://omexsolution.com",
        liveLabel: "Visitar sitio",
        privateLabel: "Repositorio privado (trabajo para cliente)",
      },
      {
        name: "Portafolio",
        kind: "Next.js · Este sitio",
        status: "En línea",
        problem:
          "Un portafolio bilingüe y optimizado para SEO con Next.js App Router y Tailwind CSS v4, diseñado alrededor de una interfaz estilo Claude.",
        points: [
          "Contenido bilingüe desde un único diccionario tipado.",
          "Animaciones con Framer Motion que respetan reduced-motion.",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind v4", "Framer Motion"],
        code: "https://github.com/JosePerez0314/portfolio",
        codeLabel: "Código",
        videoLabel: "",
        closeLabel: "Cerrar",
        liveUrl: "",
        liveLabel: "",
        privateLabel: "",
      },
    ],
    fullstack: {
      title: "También full stack y SEO",
      text: "Si le sirve a tu equipo: además de backend, también desarrollo productos full stack (React, Next.js) y me encargo del SEO técnico —metadatos, rendimiento y visibilidad en buscadores— como en OMEX Solution.",
      cta: "Hablemos",
    },
  },
  experience: {
    question: "¿Dónde ha trabajado?",
    items: [
      {
        role: "Especialista de TI y Desarrollo Web",
        company: "BCBLPRO (Pluton Legal)",
        place: "Santo Domingo, RD · Hasta el cierre de operaciones de la empresa",
        period: "Julio 2026 – Octubre 2026 (3 meses)",
        bullets: [
          "Diseñé, desarrollé y desplegué desde cero el landing page de la empresa (plutonlegal.com) con Next.js, Tailwind CSS y Vercel, con enfoque mobile-first y formulario de captación de leads.",
          "Brindé soporte técnico y administré de forma autónoma el entorno de TI (más de 25 usuarios): Microsoft Entra ID / M365, unión de equipos a Entra ID, cuentas con mínimo privilegio y buzones compartidos por departamento.",
          "Realicé el levantamiento técnico de la red y el plan del data center (switches, firewall, UPS, VLAN, videovigilancia IP de 20 cámaras) y audité el sistema de telefonía/CRM de un proveedor externo, identificando cuentas no reconocidas e inconsistencias de visibilidad.",
        ],
      },
      {
        role: "Soporte Técnico",
        company: "M&C Inversiones",
        place: "Santo Domingo, RD",
        period: "Enero 2025 – Julio 2026 (1 año y 6 meses)",
        bullets: [
          "Brindé asistencia técnica a más de 10 usuarios, resolviendo incidencias en sistemas, equipos y plataformas tecnológicas con enfoque rápido y eficiente.",
          "Colaboré en la modernización y configuración de impresoras corporativas, reduciendo en más de un 80 % las incidencias recurrentes y mejorando la continuidad operativa del área administrativa.",
        ],
      },
    ],
  },
  skills: {
    question: "¿Con qué trabaja?",
    groups: [
      {
        name: "Backend",
        items: [
          { name: "Node.js", icon: "node" },
          { name: "Express", icon: "express" },
          { name: "TypeScript", icon: "ts" },
          { name: "JavaScript", icon: "js" },
          { name: "APIs RESTful", icon: "rest" },
        ],
      },
      {
        name: "Datos",
        items: [
          { name: "MySQL", icon: "mysql" },
          { name: "Prisma ORM", icon: "prisma" },
          { name: "SQL (joins, índices, transacciones)", icon: "sql" },
        ],
      },
      {
        name: "Integraciones de IA",
        items: [
          { name: "OpenAI API", icon: "openai" },
          { name: "Claude Code", icon: "claude" },
          { name: "Agentes de IA / LLMs", icon: "agents" },
        ],
      },
      {
        name: "Infraestructura y TI",
        items: [
          { name: "Docker / Contenedores", icon: "docker" },
          { name: "Linux / Administración de VPS", icon: "linux" },
          { name: "Microsoft Entra ID / M365", icon: "entra" },
        ],
      },
      {
        name: "Herramientas",
        items: [
          { name: "Git y GitHub", icon: "git" },
          { name: "Vercel", icon: "vercel" },
        ],
      },
      {
        name: "Frontend",
        items: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "next" },
          { name: "Tailwind CSS", icon: "tailwind" },
        ],
      },
    ],
  },
  education: {
    question: "¿Cuál es su formación?",
    degree: {
      label: "Título universitario",
      title: "Ingeniería en Sistemas",
      school: "Universidad Tecnológica de Santiago (UTESA)",
      detail: "Título obtenido · octubre 2026 · GPA 3.7 / 4.0 · 2022 – 2026 · Santo Domingo, RD",
    },
    certsLabel: "Certificaciones",
    certs: [
      {
        title: "Desarrollo Web Full Stack — Nivel intermedio",
        issuer: "Talento Digital · INDOTEL · BID · CYMETRIA",
        detail: "80 horas · enero 2026 · Santo Domingo, RD",
      },
    ],
    languagesLabel: "Idiomas",
    languages: [
      { name: "Español", level: "Nativo", detail: "" },
      {
        name: "Inglés",
        level: "Intermedio (B1)",
        detail: "Lectura de documentación técnica y comunicación de ideas",
      },
    ],
  },
  contact: {
    question: "¿Cómo contactarlo?",
    text: "Busco roles backend. Si quieres hablar de APIs, arquitectura o un proyecto, escríbeme.",
    email: "Enviar correo",
    cv: "Descargar CV",
  },
  footer: "© 2026 José Pérez. Todos los derechos reservados.",
  resume: {
    filePath: "/docs/Jose_Gabriel_Perez_Calcano_Resume_Spanish.pdf",
    fileName: "Jose_Perez_Backend_Developer_ES.pdf",
  },
};

export const translations = { EN, ES };

export const SECTION_IDS = [
  "about",
  "projects",
  "experience",
  "skills",
  "education",
  "contact",
] as const;
export type SectionId = (typeof SECTION_IDS)[number];
export const hrefFor = (id: SectionId) => `/${id}`;

export const EMAIL = "josegabrielperezcalcano14@gmail.com";
export const LINKS = {
  github: "https://github.com/JosePerez0314",
  linkedin: "https://www.linkedin.com/in/im-jose/",
  demoVideoId: "AkuiCN_Z1Jk",
};
