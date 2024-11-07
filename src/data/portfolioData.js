export const portfolioData = [
    { 
        id: 'folder-1',
        type: 'folder',
        name: 'Work Experience', 
        content: [
          {
            title: "Desarrollador Web - Frontend Designer",
            company: "Freelancer",
            period: "2023 - 2024",
            description: "Contribuí en el desarrollo de aplicaciones web a la medida utilizando React y Node.js. Trabajé en equipo con otros desarrolladores para diseñar y construir soluciones eficientes y escalables. Participé en todas las fases del ciclo de vida del desarrollo de software, desde la planificación y el diseño hasta la implementación y el mantenimiento. Implementé prácticas de desarrollo ágil, asegurando entregas puntuales y de alta calidad. Además, colaboré estrechamente con clientes para entender sus necesidades y traducirlas en funcionalidades técnicas, mejorando la experiencia del usuario final."
          },
          {
            title: "Soporte TI",
            company: "Mic S.A.S",
            period: "2024",
            description: "Tareas realizadas; Consultorías informáticas y soluciones técnicas, Realizaba tareas de mantenimiento de equipos de computo y soporte en redes para sedes de Frisby y Colchones Spring."
          }
        ]
      },
      { 
        id: 'folder-2',
        type: 'folder',
        name: 'Projects',
        content: [
          {
            title: "E-commerce Platform",
            technologies: "React, Node.js, MongoDB",
            description: "Construí una plataforma de comercio electrónico con todas las funciones del CRUD, incluyendo autenticación de usuarios, gestión de productos."
          },
          {
            title: "Automatizaciones con Python",
            technologies: "Python, Make.com",
            description: "Automaticé procesos repetitivos de generación de documentos y reportes, integrando diferentes APIs y servicios para optimizar el flujo de trabajo."
          },
          {
            title: "Interactive Web Pages",
            technologies: "React, Node.js, Java, HTML, CSS",
            description: "Desarrollé páginas web interactivas con funcionalidades avanzadas, como formularios dinámicos, gráficos interactivos y autenticación de usuarios."
          },
          {
            title: "Data Analysis Project",
            technologies: "R, Shiny, ggplot2",
            description: "Realicé un análisis exhaustivo de datos utilizando R, creando visualizaciones interactivas y dashboards para facilitar la toma de decisiones estratégicas."
          }
        ]
      },
      { 
        id: 'folder-3',
        type: 'folder',
        name: 'Education', 
        content: [
          {
            degree: "Ingeniero de Sistemas",
            institution: "Universidad de Pamplona",
            country: "Colombia",
            year: "2018 - 2024",
            description: "La carrera de Ingeniería de Sistemas en la Universidad de Pamplona forma profesionales competentes en el tratamiento de la información, abarcando ciencias computacionales, ingeniería del software, tecnologías de la información y sistemas de información. Los egresados son capaces de aplicar conocimientos y modelos de computación para desarrollar soluciones tecnológicas, evaluar la complejidad de problemas y diseñar aplicaciones que utilicen sistemas inteligentes. Además, están preparados para gestionar proyectos de desarrollo de software, administrar redes y seguridad, y diseñar páginas web."
          },
          {
            degree: " Diplomado en Mineria de Datos Inteligente y Seguridad de Sistemas",
            institution: "Universidad de Pamplona",
            country: "Colombia",
            year: "2023 - 2024",
            description: "El Diplomado en Minería de Datos Inteligente y Seguridad de Sistemas de la Universidad de Pamplona está diseñado para formar profesionales altamente competentes en el análisis de datos y la seguridad informática. Este programa aborda la creciente demanda laboral en estas áreas, proporcionando una sólida base teórica y práctica en técnicas de minería de datos y seguridad de sistemas."
          },
          {
            degree: "Certificado profesional de Soporte de TI de Google",
            institution: "Coursera - Google",
            year: "2024",
            description: "El curso de Soporte de Tecnologías de la Información de Google en Coursera es un programa diseñado para preparar a los estudiantes para roles de soporte de TI. Compuesto por cinco cursos, este certificado profesional cubre temas como la solución de problemas, el servicio al cliente, las redes, los sistemas operativos, la administración de sistemas y la seguridad."
          },
          {
            degree: "Certificado profesional de Google Advanced Data Analytics",
            institution: "Coursera - Google",
            year: "2024",
            description: "El Certificado Profesional de Google en Análisis de Datos Avanzado es un programa diseñado para profundizar en habilidades avanzadas de análisis de datos. Compuesto por siete cursos, este certificado cubre temas como análisis estadístico, programación en Python, modelos de regresión y machine learning."
          }
        ]
      },
      { 
        id: 'folder-4',
        type: 'folder',
        name: 'Skills', 
        content: [
          {
            category: "Programming Languages",
            skills: ["JavaScript", "Python", "Java"]
          },
          {
            category: "Front-end Designer",
            skills: ["JavaScript", "HTML", "CSS"]
          },
          {
            category: "Frameworks & Libraries",
            skills: ["React", "Node.js","Django"]
          },
          {
            category: "Tools & Technologies",
            skills: ["Git", "Github", "AWS", "MongoDB"]
          }
        ]
      },
      {
        id: '5',
        type: 'folder',
        name: 'Portfolio Info',
        icon: '📋',
        content: null  // El contenido se maneja directamente en el PortfolioViewer
      },
      {
        id: 'github',
        type: 'social',
        name: 'GitHub',
        icon: 'github',
        url: 'https://github.com/Klooy'
      },
      {
        id: 'linkedin',
        type: 'social',
        name: 'LinkedIn',
        icon: 'linkedin',
        url: 'https://www.linkedin.com/in/mfcorrales'
      }
    ];