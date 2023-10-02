export default {
  global: {
    componenteFormativo: 'Organizaciones y gestión',
    descripcionCurso:
      'Este componente formativo desarrollará los temas relacionados con los conceptos de: organización y empresa, su clasificación y estructura, el análisis de factores que la afectan, tanto internos como externos. Así mismo, tratará aspectos relacionados con el proceso administrativo y la planeación estratégica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Organizaciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Proceso administrativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Planeación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Organización ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Dirección',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Control',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Factores y variables que impulsan las empresas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Factores y variables internos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Factores y variables externos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Herramientas para el análisis de factores y variables internos y externos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Modelos de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Planeación estratégica',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: '<em>Balanced Score Card</em> ',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Gestión por procesos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Norma ISO 9001 ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_001_228127.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Proceso administrativo',
      referencia:
        'Asturias Corporación Universitaria, Gestión por Procesos (s.f.) ',
      tipo: 'PDF',
      link:
        'https://www.centro-virtual.com/recursos/biblioteca/pdf/dgp_gestion_calidad/clase2_pdf1.pdf',
    },
    {
      tema: 'Modelos de gestión',
      referencia:
        'Terreros, D. Indicadores de gestión empresarial: características y tipos.',
      tipo: 'Artículo',
      link: 'https://blog.hubspot.es/marketing/indicadores-de-gestion',
    },
    {
      tema: 'Modelos de gestión',
      referencia:
        'Zarate, D. ¿Qué es un plan de acción?, ¿cómo se elabora? y ejemplos. ',
      tipo: 'Artículo',
      link: 'https://blog.hubspot.es/sales/plan-de-accion-empresa',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'Es la probabilidad de que un factor, variable o aspecto crítico externo, muy relacionado con la actividad de la empresa, la afecta sin poder evitarlo, solo se puede mitigar o reducir el impacto. ',
    },
    {
      termino: 'Cronograma',
      significado:
        'En planeación, se refiere a la determinación en función del tiempo de las actividades a realizar y los recursos a utilizar, para el desarrollo de las estrategias y acciones propiamente definidas en el plan de acción.',
    },
    {
      termino: 'Debilidad',
      significado:
        'Es el comportamiento que tiene una variable controlable dentro de un factor, que hace que los impactos para la empresa sean desfavorables; por ejemplo, retrasos en las entregas.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'Es un proceso de análisis integral de información de los diferentes aspectos o factores en los cuales está inmerso el ejercicio empresarial, con el fin de identificar el estado actual de competitividad, los aspectos a mejorar y las oportunidades por las que debe optar para un mejor futuro.',
    },
    {
      termino: 'Estadísticas',
      significado:
        'Son conjuntos de información agregada por tipo de variable o factor en la empresa, que se consolidan para efectos de análisis y toma de decisiones.',
    },
    {
      termino: 'Factores',
      significado:
        'Conjunto de variables o aspectos que se agrupan por su familiaridad facilitando su análisis; por ejemplo, los factores económicos,  de comercialización y de ventas.',
    },
    {
      termino: 'Factores relevantes',
      significado:
        'Son los aspectos o variables que inciden en la empresa de manera significativa, se denominan críticos, porque repercuten en el estado actual de la empresa. No siempre son los mismos, pueden cambiar con el tiempo.',
    },
    {
      termino: 'Modelo de gestión',
      significado:
        'Concepción ideológica de concepto que fundamenta un criterio de cómo administrar los procesos en una empresa, conlleva aspectos estratégicos y operativos como el control.',
    },
    {
      termino: 'Norma',
      significado:
        'Lineamiento discrecional que adoptan las empresas de obligatorio cumplimiento, que se aplica para favorecer la gestión y los procesos empresariales.',
    },
    {
      termino: 'Objetivos',
      significado:
        'Propósitos de logros que fija la empresa a partir de su condición actual, los cuales pueden ser para crecer, vender, cambiar, pero a su vez pueden ser mitigar o erradicar una debilidad ya que es plenamente controlable.',
    },
    {
      termino: 'Oportunidad',
      significado:
        'Son las posibilidades que se le presentan a la empresa de poder actuar en condiciones de favorabilidad o beneficio, desarrollo a partir de un factor o variable externa.',
    },
    {
      termino: 'Proceso administrativo',
      significado:
        'Serie de fases de actividades que buscan dar un eficiente uso de los recursos y facilitar la dinámica empresarial, es decir, posibilita el cumplimiento de un propósito empresarial.',
    },
  ],
  referencias: [
    {
      referencia:
        'ATA-Autónomos-Federación Nacional de Asociaciones de Trabajadores Autónomos (2021, mayo). Diagnóstico Empresarial en tiempos de Covid-19. ',
      link: 'https://ata.es/dudas-covid19/',
    },
    {
      referencia:
        'Beltrán Duque, A y Anzola Morales, O. L. (2013). Mejorando la competitividad de la PYME. Ediciones Universidad Externado de Colombia.',
      link: '',
    },
    {
      referencia:
        'Garza, T. J. (2009). Administración Contemporánea. Reto para la empresa. Ed. Alhambra Mexicana.',
      link: '',
    },
    {
      referencia:
        'Gregori, P. (s.f.). Herramientas estadísticas básicas de la calidad. ',
      link:
        'http://www3.uji.es/~gregori/docencia/mt1021-1516/tema5-herramientas-pablo.html',
    },
    {
      referencia:
        'ICONTEC, (2015). Norma Técnica Colombiana. NTC ISO 9001- Cuarta actualización.',
      link: 'https://www.agencomex.com/pdf/ISO-9001-2015.pdf',
    },
    {
      referencia:
        'JDELCA, A. E. (2020). ¿Cómo iniciar el proceso del diagnóstico empresarial en mi organización? [Vídeo] ',
      link: 'https://www.youtube.com/watch?v=xbS2KO92BZU',
    },
    {
      referencia:
        'Laurence, P. (2014). Diagnóstico Organizacional. En L. Jayh, México D.F.: Centro Regional de Ayuda Técnica. ',
      link: '',
    },
    {
      referencia:
        'Rodríguez, D. (2012). Diagnostico organizacional (4ta Edición ed.). México, D.F.: Alfa Omega Grupo Editor, S.A.',
      link: '',
    },
    {
      referencia:
        'Tlaxcala, I. t. (s.f.). Herramientas Estadísticas- Instituto tecnológico Apizaco de Tlaxcala. ',
      link:
        'https://alfredogutierrez.weebly.com/16-herramientas-estadisticas.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Fernando Riaño',
          cargo: 'Experto',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'María Fernanda Chacón Castro',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
