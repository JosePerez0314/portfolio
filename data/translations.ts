export const translations = {
  EN: {
    nav: {
      about: "About Me",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      badge: "Available",
      role: "Systems Engineer",
      title: "& Backend Architect.",
      desc: "Engineering scalable backends. Expected 2026 graduate with a 3.7 GPA.",
      gradLabel: "Expected Grad.",
      gpaLabel: "GPA (Honours)",
      btnPrimary: "View My Architecture",
      btnSecondary: "Download CV",
    },
    about: {
      overline: "About Me",
      heading: "About Me",
      badge: "Status: Hardcore Mode",
      paragraphs: [
        {
          text: "I am a Systems Engineering student operating with absolute focus. Transitioning from IT Support to Backend Architecture, my core objective is engineering scalable, multi-tenant platforms using Node.js, Express, and Prisma.",
          highlights: [
            "Systems Engineering",
            "Backend Architecture",
            "scalable, multi-tenant platforms",
            "Node.js, Express, and Prisma",
          ],
        },
        {
          text: "Beyond writing optimized backend logic, my greatest strength is architectural communication—translating complex technical pipelines into clear, actionable data for stakeholders. I approach software engineering with the same relentless discipline I apply to heavy strength training and mastering the drums: strict form, heavy repetitions, and constant iteration.",
          highlights: ["architectural communication", "software engineering"],
        },
        {
          text: "I am currently building the foundation to bring my architectural skills to the Canadian tech ecosystem.",
          highlights: ["Canadian tech ecosystem"],
        },
      ],
      signature: "José Pérez · Systems Engineer",
    },
    sim: {
      title: "Architecture Simulation",
      subtitle: "Live preview of the TalentMatch AI parsing engine.",
      endpoint: "/api/v1/match/analyze",
      responseLabel: "AI Response",
      sendBtn: "Send Request",
      reset: "Reset",
    },
    project: {
      sectionTitle: "Featured Project",
      name: "TalentMatch AI",
      tagline: "SaaS Platform",
      badge: "In Development",
      videoLabel: "Watch Demo",
      description:
        "An AI-driven recruitment engine designed to bridge the gap between technical talent and Canadian recruiters using advanced matching algorithms.",
      archHighlights: [
        "Multi-tenant architecture with isolated data layers",
        "Scalable Node.js & Express backend using Prisma ORM",
        "Real-time match scoring using GPT-4o-mini integration",
      ],
      stack: ["Node.js", "Express", "MySQL", "Prisma", "React", "TypeScript"],
      liveDemo: "Live Preview",
      project2Name: "Portfolio 2.0",
      project2Tagline: "Self-Branding",
      project2Badge: "Current",
      project2Description:
        "A high-performance portfolio built with Next.js App Router and Tailwind CSS v4, featuring bilingual SEO optimization and an upcoming AI-powered chatbot integration to drive interactive recruiter engagement.",
      project2Stack: ["Next.js", "Tailwind v4", "Framer Motion", "TypeScript"],
    },
    experience: {
      sectionTitle: "Trajectory",
      sectionSubtitle: "Experience & Education",
      items: [
        {
          type: "current",
          role: "Backend Architect & PM",
          company: "TalentMatch AI",
          year: "2026 - Present",
          bullets: [
            "Leading architecture design for a scalable, multi-tenant SaaS application.",
            "Implementing high-performance REST APIs using Node.js, Express, and Prisma.",
            "Managing sprint cycles and technical documentation for a 3-person engineering team.",
          ],
          tags: ["Node.js", "System Architecture", "Leadership"],
        },
        {
          type: "current",
          role: "IT Support & File Manager",
          company: "M&C Inversiones",
          year: "2024 - Present",
          bullets: [
            "Managed and digitized complex physical loan portfolios, ensuring data integrity, rapid retrieval, and secure distribution to authorized personnel.",
            "Resolved hardware and software incidents, maintaining high system availability and providing tier-1 technical support under pressure.",
            "Currently applying the TalentMatch AI recruitment engine within an operational environment to automate candidate parsing (in active development).",
          ],
          tags: ["Data Integrity", "IT Support", "AI Integration"],
        },
        {
          type: "education",
          role: "B.S. Systems Engineering",
          company: "Universidad Tecnológica de Santiago",
          year: "2021 - 2026",
          description:
            "Currently in my terminal year. Maintaining a 3.7 GPA (Honors trajectory). Coursework heavily focused on database design, software architecture, and systems optimization.",
          tags: ["3.7 GPA", "Software Architecture", "Algorithms"],
        },
      ],
    },
  },
  ES: {
    nav: {
      about: "Sobre Mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      badge: "Disponible",
      role: "Ingeniero de Sistemas",
      title: "& Arquitecto Backend.",
      desc: "Construyendo backends escalables. Egresado esperado 2026 con promedio 3.7.",
      gradLabel: "Egreso Esperado",
      gpaLabel: "GPA (Honores)",
      btnPrimary: "Ver Mi Arquitectura",
      btnSecondary: "Descargar CV",
    },
    about: {
      overline: "Sobre Mí",
      heading: "Sobre Mí",
      badge: "Estado: Modo Hardcore",
      paragraphs: [
        {
          text: "Soy un estudiante de Ingeniería en Sistemas operando con enfoque absoluto. En transición de Soporte TI a Arquitectura Backend, mi objetivo principal es diseñar plataformas escalables y multi-tenant utilizando Node.js, Express y Prisma.",
          highlights: [
            "Ingeniería en Sistemas",
            "Arquitectura Backend",
            "plataformas escalables y multi-tenant",
            "Node.js, Express y Prisma",
          ],
        },
        {
          text: "Más allá de escribir lógica backend optimizada, mi mayor fortaleza es la comunicación arquitectónica—traducir pipelines técnicos complejos en datos claros y accionables para stakeholders. Abordo la ingeniería de software con la misma disciplina implacable que aplico al entrenamiento de fuerza pesado y el dominio de la batería: forma estricta, repeticiones pesadas e iteración constante.",
          highlights: ["comunicación arquitectónica", "ingeniería de software"],
        },
        {
          text: "Actualmente estoy construyendo la base para llevar mis habilidades arquitectónicas al ecosistema tecnológico canadiense.",
          highlights: ["ecosistema tecnológico canadiense"],
        },
      ],
      signature: "José Pérez · Ingeniero de Sistemas",
    },
    sim: {
      title: "Simulación de Arquitectura",
      subtitle: "Vista previa en vivo del motor de análisis TalentMatch AI.",
      endpoint: "/api/v1/match/analyze",
      responseLabel: "Respuesta de IA",
      sendBtn: "Enviar Petición",
      reset: "Reiniciar",
    },
    project: {
      sectionTitle: "Proyecto Destacado",
      name: "TalentMatch AI",
      tagline: "Plataforma SaaS",
      badge: "En Desarrollo",
      videoLabel: "Ver Demo",
      description:
        "Un motor de reclutamiento impulsado por IA diseñado para cerrar la brecha entre el talento técnico y los reclutadores utilizando algoritmos avanzados.",
      archHighlights: [
        "Arquitectura multi-tenant con capas de datos aisladas",
        "Backend escalable en Node.js y Express con Prisma ORM",
        "Puntuación de coincidencia en tiempo real con integración de GPT-4o-mini",
      ],
      stack: ["Node.js", "Express", "MySQL", "Prisma", "React", "TypeScript"],
      liveDemo: "Vista Previa",
      project2Name: "Portafolio 2.0",
      project2Tagline: "Marca Personal",
      project2Badge: "Actual",
      project2Description:
        "Un portafolio de alto rendimiento construido con Next.js App Router y Tailwind CSS v4, que cuenta con optimización SEO bilingüe y una próxima integración de un chatbot impulsado por IA para fomentar la interacción con reclutadores.",
      project2Stack: ["Next.js", "Tailwind v4", "Framer Motion", "TypeScript"],
    },
    experience: {
      sectionTitle: "Trayectoria",
      sectionSubtitle: "Experiencia y Educación",
      items: [
        {
          type: "current",
          role: "Arquitecto Backend y PM",
          company: "TalentMatch AI",
          year: "2026 - Presente",
          bullets: [
            "Liderando el diseño de arquitectura para una aplicación SaaS escalable y multi-tenant.",
            "Implementando APIs REST de alto rendimiento usando Node.js, Express y Prisma.",
            "Gestionando ciclos de sprint y documentación técnica para un equipo de 3 ingenieros.",
          ],
          tags: ["Node.js", "Arquitectura de Sistemas", "Liderazgo"],
        },
        {
          type: "current",
          role: "Soporte TI y Gestor de Archivos",
          company: "M&C Inversiones",
          year: "2024 - Presente",
          bullets: [
            "Gestioné y digitalicé portafolios complejos de préstamos físicos, asegurando la integridad de los datos, rápida recuperación y distribución segura.",
            "Mantuve la alta disponibilidad de sistemas, resolviendo incidencias de hardware/software y proporcionando soporte técnico de nivel 1 bajo presión.",
            "Aplicando el motor de automatización de reclutamiento TalentMatch AI en un entorno operativo real (en fase de desarrollo activo).",
          ],
          tags: ["Integridad de Datos", "Soporte TI", "Integración de IA"],
        },
        {
          type: "education",
          role: "Ingeniería en Sistemas",
          company: "Universidad Tecnológica de Santiago",
          year: "2021 - 2026",
          description:
            "Actualmente cursando mi último año. Manteniendo un GPA de 3.7 (Trayectoria de Honores). Plan de estudios enfocado en diseño de bases de datos, arquitectura de software y optimización.",
          tags: ["GPA 3.7", "Arquitectura de Software", "Algoritmos"],
        },
      ],
    },
  },
};
