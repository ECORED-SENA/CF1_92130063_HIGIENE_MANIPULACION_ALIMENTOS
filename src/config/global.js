export default {
  global: {
    componenteFormativo: 'Clasificación y contaminación de alimentos',
    descripcionCurso:
      'El componente aborda sobre la importancia de los alimentos para el cuerpo humano, su clasificación según el origen y función, y aspectos clave sobre la manipulación y seguridad alimentaria. Destaca la clasificación de los alimentos en constructores, energéticos y reguladores, y detalla los tipos de contaminación que pueden afectarlos. También proporciona consejos para la correcta selección y almacenamiento de alimentos para evitar riesgos de salud.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Los alimentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos clave',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de contaminación en alimentos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Selección de alimentos frescos y de calidad',
            hash: 't_1_3',
          },
        ],
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/92130063_CF01_DU.pdf',
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
      tema: 'Los alimentos.',
      referencia:
        'Alimentos Cloud (s.f.). Contaminación alimentaria: causas y prevención. Curso de Manipulador de Alimentos. [Podcast]. YouTube.',
      tipo: 'Podcast.',
      link: 'https://music.youtube.com/watch?v=5aKkZWhlOHA&feature=shared',
    },
    {
      tema: 'Tipos de contaminación en alimentos.',
      referencia:
        'Fundación Aprende con Reyhan (2020). Contaminación cruzada. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/L-cdpFWRG2o?feature=shared',
    },
    {
      tema: 'Selección de alimentos frescos y de calidad.',
      referencia:
        'Mundo Agroindustrial (2016). Control de calidad de alimentos - Garantía para el consumidor. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OMa_7rCqLlc',
    },
    {
      tema: 'Selección de alimentos frescos y de calidad.',
      referencia:
        'Mathias-Rettig, K., & Ah-Hen, K. (2014). El color en los alimentos un criterio de calidad medible. Agro Sur, 42(2), 57-66.',
      tipo: 'Artículo',
      link: 'http://revistas.uach.cl/pdf/agrosur/v42n2/art07.pdf',
    },
    {
      tema: 'Selección de alimentos frescos y de calidad.',
      referencia:
        'ONU. (2012). Sistemas de calidad e inocuidad de los alimentos - manual de capacitación. Capítulo 1: ( ed.). D - FAO.',
      tipo: 'Manual',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/66056',
    },
  ],
  glosario: [
    {
      termino: 'Alimento',
      significado:
        'es todo producto que aporta al organismo determinados nutrientes que ayudan en los procesos metabólicos y las funciones fisiológicas.',
    },
    {
      termino: 'Conservar un alimento',
      significado:
        'significa protegerlo de la acción de los agentes físicos, biológicos y químicos por medio de diversos procesos, de tal manera que preserven al máximo sus propiedades nutritivas y cualidades organolépticas, permitiendo así su almacenamiento y consumo durante periodos prolongados.',
    },
    {
      termino: 'Contaminación',
      significado:
        'la contaminación se puede dar por agentes físicos, químicos y biológicos, que son introducidos a un medio de manera natural o en algunos casos son ocasionados por el hombre.',
    },
    {
      termino: 'Descomposición',
      significado:
        'este factor se da cuando los alimentos inician su proceso de descomposición, esto se puede detectar cuando la comida presenta cambios en sus condiciones organolépticas como: color, olor, sabor y textura, si estos cambios son identificados se puede evitar su consumo.',
    },
    {
      termino: 'ETA',
      significado:
        '<span style="text-transform: capitalize;">Enfermedades</span> Transmitidas por Alimentos.',
    },
    {
      termino: 'Inocuidad de los alimentos',
      significado:
        'es la garantía de que un alimento se encuentra libre de agentes contaminantes que pueden causar daños a la salud de los consumidores.',
    },
    {
      termino: 'Instalaciones',
      significado:
        'son las locaciones o infraestructuras en la cuales se manipulan materias primas o productos terminados.',
    },
    {
      termino: 'Limpieza',
      significado:
        'eliminación de impurezas tales como: tierra, grasas, desechos de alimentos, entre otros.',
    },
    {
      termino: 'Manipulador de alimentos',
      significado:
        'son todas las personas que de alguna manera están relacionadas con la transformación de un alimento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bravo, F. (2004). Manejo higiénico de los alimentos. México: Limusa.',
      link: '',
    },
    {
      referencia:
        'Cuarental, A. S., Hurtado, M. C., & Pascual, V. C. (2022). Límites máximos de residuos y contaminantes en alimentos: bases de datos.',
      link:
        'https://www.grupoacms.com/pdfs/Limites-maximos-de-residuos-y-contaminantes-alimentos.pdf',
    },
    {
      referencia:
        'Martínez-Martínez, L., & Valdivia-Flores, A. G. (2023). Contaminación de alimento comercial seco para perro por Aspergillus flavus y aflatoxinas en Aguascalientes, México. <em>Revista mexicana de ciencias pecuarias</em>, 14(4), 796-806. Recuperado de',
      link:
        'https://cienciaspecuarias.inifap.gob.mx/index.php/Pecuarias/article/view/6397',
    },
    {
      referencia:
        'Rueda, K., Trujillo, J. E., Carranza, J. C., & Vallejo, G. A. (2014). Transmisión oral de Trypanosoma cruzi: una nueva situación epidemiológica de la enfermedad de Chagas en Colombia y otros países suramericanos. <em>Biomédica</em>, 34(4), 632-645.',
      link: 'https://pesquisa.bvsalud.org/portal/resource/pt/lil-730947',
    },
    {
      referencia:
        'Torres Segarra, S. M., & Pacheco Cárdenas, K. E. (2021). Staphylococcus aureus resistentes a meticilina en alimentos. <em>Vive Revista de Salud</em>, 1(3), 23-33. Recuperado de',
      link:
        'http://www.scielo.org.bo/scielo.php?pid=S2664-32432021000300023&script=sci_arttext',
    },
    {
      referencia: 'Villanque, B. Los Alimentos. Ciencia y ambiente.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Beatriz Elena Marín Rodríguez',
          cargo: 'Experta temática',
          centro: 'Centro de Industria - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabián Zárate Saavedra',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
