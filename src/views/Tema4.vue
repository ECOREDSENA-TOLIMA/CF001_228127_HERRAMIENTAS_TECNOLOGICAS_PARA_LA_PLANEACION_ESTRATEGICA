<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Modelos administrativos

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-01.png', alt='')
      .col-12.col-md-11.col-lg-10
        .tarjeta.color-primario.p-3
          p.mb-0 La gestión empresarial para el desarrollo del proceso administrativo y el cumplimiento de su planeación exige de modelos que le faciliten el cumplimiento de estos, dentro de los más ajustados para el cumplimiento de los planes están los siguientes:
    
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Planeación estratégica

    p.mb-5(data-aos="zoom-down") Es uno de los modelos integrales que permite la fijación de objetivos empresariales a partir de un ejercicio de diagnóstico; determina objetivos y medidas estratégicas en las empresas con el fin de mantener su capacidad competitiva. Este modelo parte del reconocimiento de aspectos fundamentales como la misión y la visión, preceptos inspiradores del quehacer empresarial, y a partir de allí, determina la condición actual, fijando planes de acción en conformidad a las oportunidades y amenazas, fortalezas y debilidades.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Técnica análisis DOFA
      div.titulo-herramientas.d-block.d-md-none Técnica análisis DOFA

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-7(data-aos="fade-left")
        p Esta técnica se ha convertido en una herramienta de análisis y planeación estratégica que permite identificar los factores y sus aspectos de variables internos y externos que inciden en la operación de la empresa y que la pueden estar afectando de manera favorable o desfavorable. Permite, a su vez, focalizar cuáles son los más relevantes, evidenciando las conclusiones en que se debe concentrar la empresa para ampliar, mejorar o conservar su capacidad competitiva; asimismo, propicia que la empresa plantee una planeación de objetivos y fije las medidas estratégicas y de plan de acción para el desarrollo de su competitividad a futuro (JDELCA, 2020). 
      .col-12.col-md-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-02.png', alt='')

    p.mb-5(data-aos="zoom-down") Su aplicabilidad surge del concepto que se ha venido trabajando sobre los factores internos y externos, donde para cada uno establece dos condiciones así:

    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-primario")
          .row(titulo="Factores internos")
            .col-12.mb-4.mb-md-0
              p Estos factores y sus aspectos de variables se deben analizar en conformidad a las condiciones en que están afectando la empresa en el momento en que se evalúa. Recordemos que su particularidad está en que su estado depende de los esfuerzos de la empresa, por tanto, son controlables.
              .titulo-sexto.color-acento-contenido
                p.titulo.pb-0.mb-0 <b>Tabla 8. </b> <i>Fortalezas y debilidades</i>
              .tabla-a.color-primario.mb-4
                table
                  thead
                    tr
                      th Fortalezas
                      th Debilidades
                  tbody
                    tr
                      td 
                        p Las fortalezas son aquellos aspectos que domina la empresa para su supervivencia, lo que le permite operar, por lo que se distingue, en que es mejor que otros, etc.
                        p Ejemplo, la calidad del producto, por ello le compran y sobre todo le recompran.
                      td 
                        p Es el comportamiento que tiene una variable controlable dentro de un factor, que hace que los impactos para la empresa sean desfavorables y la puedan estar induciendo a fracasos.
                        p Por ejemplo, retrasos en las entregas.
          .row(titulo="Factores externos")
            .col-12.mb-4.mb-md-0
              p Estos factores y sus aspectos de variables se deben analizar en conformidad a las condiciones en que están afectando la empresa en el momento en que se evalúa. En este caso, su particularidad está en que su estado NO depende de la empresa, sino que están en el entorno en que ésta ópera, por tanto, NO son controlables.
              .titulo-sexto.color-acento-contenido
                p.titulo.pb-0.mb-0 <b>Tabla 9. </b> <i>Oportunidades y amenazas</i>
              .tabla-a.color-primario.mb-4
                table
                  thead
                    tr
                      th Oportunidades
                      th Amenazas
                  tbody
                    tr
                      td 
                        p Son las posibilidades que se le presentan a la empresa de poder actuar en condiciones de favorabilidad o beneficio, desarrollo, crecimiento, porque el macroentorno se lo permite y lo favorece.
                        p Por ejemplo, la reducción de los precios de los combustibles para una empresa transportadora.
                      td 
                        p Son las posibilidades que uno o varios aspectos del macro o micro entorno afecten negativamente a la empresa, reduciendo su operación, beneficio, crecimiento, etc.
                        p Por ejemplo, un aumento en los precios de los combustibles para una empresa transportadora.

    p.mb-5(data-aos="fade-down") La técnica establece que una vez ya clasificada la información y determinado su nivel de impacto positivo o negativo, se procede a armar la Matriz DOFA propiamente dicha, para tomar decisiones o acciones haciendo los cruces pertinentes; esto implica focalizar en unos pocos aspectos críticos de los factores por cada tipo, los de mayor relevancia o impacto a la empresa, porque a partir de allí se tomarán decisiones, fijación de objetivos.

    .row.justify-content-center.mb-5
      .col-12.col-md-11(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 12. </b> <i>Estructura de la Matriz DOFA</i>
        figure
          img(src='@/assets/curso/temas/tema4/tema4-03.svg', alt='En la figura 12, se muestra la estructura de la matriz DOFA, identificando los factores endógenos y exógenos.')
        .d-block.d-md-none
          a.anexo.mb-4(:href="obtenerLink('/downloads/tema4-03.svg')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-jpg.svg")
            .anexo__texto
              p #[b Anexo.] Matriz DOFA.

    p.mb-3(data-aos="fade-down") La técnica indica que, a partir del cruce de las condiciones actuales endógenas frente a las exógenas, la empresa debe tomar medidas o iniciativas estratégicas para actuar en favor de su condición o para mitigar o reducir el impacto. Las iniciativas estratégicas y de actuación FO y DO permitan el mejoramiento, el desarrollo, crecimiento de la empresa, pues el contexto facilita ampliar sus fortalezas o superar las debilidades. Estas iniciativas estratégicas y de actuación FA y DA buscan proteger la empresa, mitigar los riesgos o los efectos de las amenazas que no son controlables; el problema es que si la empresa es débil le será difícil afrontar esta situación, por lo cual debe prepararse en caso su ocurrencia, porque no son certeras las adversidades.
    p.mb-5(data-aos="fade-down") Le invitamos a ver el siguiente video con información relevante:

    figure.mb-5(data-aos="flip-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/tTTeEk2PySs" title="Técnicas de planeación estratégica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 #[i Balanced Scorecard (BSC)]

    p.mb-5(data-aos="fade-down") El #[i Balanced ScoreCard] es un modelo o herramienta de gestión empresarial que convierte la visión o el objetivo a más largo plazo que tiene la empresa en acciones explícitas, mediante un conjunto de indicadores de gestión divididos en cuatro categorías o perspectivas que deben regir la empresa u organización; estas perspectivas son las siguientes:

    TabsB.color-acento-contenido.mb-5(data-aos="flip-right")
      .py-4.py-md-5(titulo="Financiera")
        .row
          .col-12
            p Esta perspectiva de la empresa busca evidenciar el nivel de respuesta a las expectativas de los inversionistas o socios de la empresa. Además, busca verificar y hacer seguimiento al valor para ellos mediante indicadores de beneficio o utilidad, crecimiento de ingresos por ventas, crecimiento que reflejan el comportamiento operativo.
      .py-4.py-md-5(titulo="Enfoque al cliente")
        .row
          .col-12
            p En esta perspectiva se busca analizar si los clientes y consumidores están satisfechos con los productos que obtienen de la empresa; su importancia radica en que permite pensar en qué se requiere para garantizar la retención de los clientes y la adquisición de nuevos clientes, su fidelización, de tal manera que se pueda obtener la rentabilidad esperada.
      .py-4.py-md-5(titulo="Procesos internos")
        .row
          .col-12
            p.mb-0 - Mide la calidad del producto o servicio final. 
            p.mb-0 - Dimensiona el tiempo de respuesta del equipo operacional frente a las problemáticas y nuevos desafíos impuestos. 
            p.mb-0 - Verifica el coste de los procesos de producción y operacionales. 
            p - Analiza la capacidad de introducir los productos y servicios en el mercado. 
            p En esta perspectiva se deben medir los objetivos funcionales que están relacionados con los procesos propios de la actividad de la empresa.
      .py-4.py-md-5(titulo="Aprendizaje y crecimiento")
        .row
          .col-12
            p Busca medir la satisfacción y compromiso del personal de la empresa, el clima organizacional y los aspectos de disponibilidad de tecnologías de sistemas de información.

    p.mb-5(data-aos="fade-down") En la siguiente figura se puede identificar la interacción que estas cuatro perspectivas tienen alrededor de la visión y misión empresarial, que para su logro y desarrollo deben fijar y alcanzar objetivos por cada perspectiva, detallando los instrumentos de indicadores y metas de resultado.

    .row.justify-content-center.mb-5
      .col-12.col-lg-11(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 13. </b> <i>Modelo de Balanced Scorecard para la gestión empresarial</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema4/tema4-04-md.svg', alt='En la figura 13, se puede identificar la interacción que estas cuatro perspectivas tienen alrededor de la visión y misión empresarial, (Perspectiva Financiera, Perspectiva proceso internos, Perspectiva Procesos aprendizaje, Perspectiva Clientes).')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema4/tema4-04-sm.svg', alt='En la figura 13, se puede identificar la interacción que estas cuatro perspectivas tienen alrededor de la visión y misión empresarial, (Perspectiva Financiera, Perspectiva proceso internos, Perspectiva Procesos aprendizaje, Perspectiva Clientes).') 

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Gestión Basada en Procesos

    p.mb-3(data-aos="fade-down") Convencionalmente, las organizaciones empresariales se han estructurado desde una concepción por departamentos o áreas funcionales, por la afinidad de las actividades, lo que dificulta tanto las comunicaciones en la agregación de los valores de una a otra función como la construcción y demandas hacia los clientes; este enfoque de gestión ha permitido definir estructuras a partir de jerarquización de cargos, pero el funcionamiento de la empresa, los flujos de información y comunicación interna o las relaciones con los clientes, no se ven reflejados con absoluta claridad y fluidez.
    p.mb-3(data-aos="fade-down") La #[strong Gestión Basada en Procesos] percibe a la empresa u organización como un conjunto de sistemas interrelacionados de procesos y subprocesos de diferente índole, que contribuyen conjuntamente a incrementar la satisfacción de los clientes. Es un modelo de gestión alternativo al modelo tradicional caracterizado por estructuras jerárquicas meramente funcionales que describen agregaciones de valor, de manera desarticulada, que depende del paso de áreas a áreas funcionales. 
    p.mb-5(data-aos="fade-down") Entonces, ¿cuál es la diferencia de la gestión de procesos frente al modelo tradicional?

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-right")
      .col-12.col-md-11.col-lg-11
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-3.p-md-3
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-05.svg')})`}"
          )
          .bloque-texto-g__texto.p-3
            p.mb-0 La #[strong Gestión por Procesos] es la forma de gestionar las organizaciones basándose en los procesos que desarrolla la empresa, pero ordenados como una secuencia de actividades orientadas a generar un valor añadido continuo, para lograr los resultados deseados, con lo cual es posible la satisfacción a los requerimientos técnicos y específicos que los clientes han planteado de manera mucho más eficiente y eficaz, lo que implica una concentración en los procesos propiamente dichos y no en la estructura jerárquica y de protocolos de comunicación entre áreas funcionales. 

    p.mb-3(data-aos="fade-down") Esto es, porque la calidad de los productos o servicios, como la satisfacción del cliente, dependen de tales procesos, es decir, son una consecuencia del trabajo bien hecho y de una agregación adecuada y oportuna de valores por parte de la empresa. En este sentido, el modelo de gestión por procesos, requiere una estructura organizacional que parte de la clasificación de los procesos que adelanta la empresa. A esta estructura se le asignan equipos de trabajo gestionados por un líder de proceso, quien coordina las actividades internas y externas con otros grupos de procesos.
    p.mb-3(data-aos="fade-down") ¿Cuáles son las características de la Gestión Basada en Procesos?
    p.mb-3(data-aos="fade-down") En este enfoque, los objetivos que define la organización empresarial se fijan desde el aporte que los procesos puedan obtener o dar.
    p.mb-5(data-aos="fade-down") Veamos el siguiente ejemplo:

    .row.align-items-center.justify-content-center(data-aos="fade-down-left")
      .col-md-10.col-lg-9.col-12.d-none.d-sm-none.d-md-block.mb-5
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/tema4-06.svg', alt='')
          .tarjeta.color-acento-botones.p-3(x="50%" y="23%" numero="+")
            p En una empresa el objetivo convencional es aumentar los niveles de facturación, lo que está estrechamente asociado con el proceso de comercialización. En esta área, la venta es el resultado de canalizar las demandas de los clientes y no es simplemente un acto que genera facturas correctamente. En este sentido, las empresas deben fortalecer su proceso comercial para que las ventas se realicen con mayor eficacia, es decir, con mejor respuesta para suplir las necesidades comerciales del cliente.
            p Recordemos que el documento de factura es la evidencia de este proceso; es el reflejo de todas las tareas que debe realizar el equipo comercial para concretar la venta.
    
    .row.d-block.d-md-none.align-items-center.justify-content-center.mb-5(data-aos="fade-down-left")
      .col-12.mb-4(data-aos="fade-down-left")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-06-sm.svg', alt='En una empresa el objetivo convencional es aumentar los niveles de facturación, lo que está estrechamente asociado con el proceso de comercialización. En esta área, la venta es el resultado de canalizar las demandas de los clientes y no es simplemente un acto que genera facturas correctamente. En este sentido, las empresas deben fortalecer su proceso comercial para que las ventas se realicen con mayor eficacia, es decir, con mejor respuesta para suplir las necesidades comerciales del cliente.')


    p.mb-3(data-aos="fade-down") Como observamos en el ejemplo, este ejercicio permite desarrollar sinergias entre las diferentes funciones o subprocesos; en el caso planteado, el proceso comercial y de facturación se homologarían en una sola secuencia lógica en favor de la satisfacción al cliente, de una manera mucho más eficiente y eficaz.
    p.mb-3(data-aos="fade-down") En el modelo de gestión por procesos es fundamental conocer qué proceso existe detrás de un objetivo para trabajar la iniciativa de acción estratégica y lograr el objetivo. 
    p.mb-5(data-aos="fade-down") En el ejemplo anterior en el que se pretende aumentar la facturación, se debe definir en el proceso comercial: 

    ul.lista-ul.mb-4
      li(data-aos="fade-down")
        i.fas.fa-atom(style="color: #304C8E")
        | Desde el portafolio de la empresa, establecer la línea o producto/servicio específico en el que se quiere el aumento de facturación.
      li(data-aos="fade-down")
        i.fas.fa-atom(style="color: #304C8E")
        | Definir el mercado o segmento de clientes a los que se orientará el esfuerzo comercial.
      li(data-aos="fade-down")
        i.fas.fa-atom(style="color: #304C8E")
        | Identificar los medios de comercialización que se utilizarán en el proceso, es decir, los canales de distribución, publicidad, etc.
      li(data-aos="fade-down")
        i.fas.fa-atom(style="color: #304C8E")
        | Otros aspectos que la empresa considere pertinentes.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Mapa de procesos

    p.mb-5(data-aos="fade-down") Es el recurso esquemático gráfico descriptivo que resume por categorías todos los procesos de la organización empresarial. Se parte de las necesidades de los clientes externos, las cuales interpreta y procesa la empresa por medio de procesos estratégicos, misionales u operativos, y los procesos transversales o de apoyo para que la empresa cumpla con su misión y el logro de los objetivos trazados en aras de la visión trazada.

    .row.justify-content-center.mb-5
      .col-12.col-lg-11(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 14. </b> <i>Esquema de mapa de procesos</i>
        figure
          img(src='@/assets/curso/temas/tema4/tema4-07.svg', alt='En la figura 14, se muestra el esquema de mapa de procesos: estratégicos, misionales u operacionales y procesos de apoyo.') 
        .d-block.d-md-none
          a.anexo.mb-4(:href="obtenerLink('/downloads/tema4-07.svg')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-jpg.svg")
            .anexo__texto
              p #[b Anexo.] Esquema de mapa de procesos.


    .bloque-texto-a.color-primario.p-3.p-md-3.mb-5(data-aos="fade-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          h3.mb-0 Entonces, ¿cuál es la definición de proceso?
        .col-lg-8
          .bloque-texto-a__texto.p-3
            p Un proceso es un conjunto de pasos, fases o actividades ordenadas de manera lógica y secuencial, que se relacionan entre sí o que interactúan con otros conjuntos de procesos o actividades. 

    p.mb-3(data-aos="fade-down") Entre todos los procesos se permite convertir la entrada (requisitos, recursos, etc.) en salidas deseadas (logros, avances en bienes, productos, servicios), en una cadena definida previamente, en la cual se añade valor en cada proceso; esto quiere decir que los resultados de un proceso pueden ser las entradas del siguiente proceso En este propósito, cada conjunto de actividades o proceso, subproceso demandarán recursos de diversa índole como materias primas, insumos o suministros, mano de obra, maquinaria y equipos, entre otros, los cuales se adecuan en lo que se denomina método o procedimiento de trabajo.
    p.mb-5(data-aos="fade-down") Pero revisemos los diferentes tipos de proceso:

    TabsA.color-acento-botones.mb-5(data-aos="fade-down-right")
      .tarjeta.color-primario.p-4(titulo="Procesos estratégicos")
        h4 Procesos estratégicos
        p Son los que definen el cuerpo directivo de la empresa y representan los intereses de la junta de socios o junta directiva, es decir, a dónde se quiere llegar en su visión, en la misión en sí, en los tipos de actividad que realizarán, por ende, en los objetivos que, por lo general, definen lineamientos estratégicos comunes a la mayoría de las empresas como, por ejemplo, los mecanismos de mercadeo, la investigación y desarrollo de productos o servicios en una ruta de desarrollo empresarial y de mercado, la construcción de la cultura de calidad, las comunicaciones o difusión, entre otros. Cada empresa tiene sus propios procesos estratégicos de los cuales dependerán los procesos misionales.
      .tarjeta.color-primario.p-4(titulo="Procesos misionales u operativos")
        h4 Procesos misionales u operativos
        p Son aquellos que permiten recoger las necesidades de los clientes y convierten en realidad los bienes, productos o servicios que oferta la empresa, por ende, son los que satisfacen las necesidades tácitamente a los clientes.
      .tarjeta.color-primario.p-4(titulo="Procesos de apoyo")
        h4 Procesos de apoyo
        p Son los procesos que soportan la operación de la empresa, son esenciales para su funcionamiento, así no se relacionan muchas veces con el bien, producto o servicio directamente. En este tipo se encuentran los procesos de recursos humanos, de sistemas y procesamiento de información, de compras, almacenamiento, contabilidad, entre otros.

    p.mb-5(data-aos="fade-down") Ahora, conozcamos los pasos que se deben seguir para aplicar el modelo de gestión por procesos:

    .row.align-items-center.justify-content-center(data-aos="fade-down-left")
      .col-md-10.col-lg-9.col-12.mb-5.d-none.d-sm-none.d-md-block
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/tema4-08.svg', alt='')
          .tarjeta.color-acento-botones.p-3(x="88%" y="22%" numero="+")
            p Conjunto de actividades, ordenados lógica y secuencialmente en un diagrama de flujo de proceso, que se construye por bloques.
          .tarjeta.color-acento-botones.p-3(x="99%" y="50%" numero="+")
            p.mb-0 - Cantidad, calidad
            p.mb-0 - Recursos a utilizar
            p.mb-0 - Tiempo para la obtención de los resultados
            p - Costos, entre otros.
          .tarjeta.color-acento-botones.p-3(x="77%" y="88%" numero="+")
            p Determinar los recursos que se necesitan para el desarrollo de las actividades del proceso y producir las salidas o productos, entre los recursos están: materias primas, insumos y suministros, maquinaria y equipo, herramientas, información, etc.
          .tarjeta.color-acento-botones.p-3(x="50%" y="99%" numero="+")
            p Definir las competencias profesionales u operativas que requiere el método del proceso.
          .tarjeta.color-acento-botones.p-3(x="23%" y="88%" numero="+")
            p Definir el responsable del proceso.
          .tarjeta.color-acento-botones.p-3(x="1%" y="50%" numero="+")
            p Indicadores de gestión que permitan la regulación de los recursos, la oportunidad de las entregas, la eficiencia y la eficacia.
          .tarjeta.color-acento-botones.p-3(x="11.5%" y="22%" numero="+")
            p Definir los momentos de seguimiento, control y evaluación con el fin de identificar posibles desviaciones.
          .tarjeta.color-acento-botones.p-3(x="50%" y="0%" numero="+")
            p Requisitos, Demandas, Productos, Servicios a obtener, Proveedores. 
            p En procesos iniciales, el proveedor es de naturaleza externa; en los demás procesos regularmente los proveedores son los resultados de otros procesos de la empresa.

    .row.d-block.d-md-none.align-items-center.justify-content-center.mb-5(data-aos="fade-down-left")
      .col-lg-6.col-12.mb-4(data-aos="fade-down-left")
        p.text-center Pasos para aplicar el modelo de gestión por procesos:
      .col-lg-6.col-12.mb-4(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/info-1.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h4 Identificar entradas al proceso
              p Requisitos, demandas, productos, servicios a obtener, proveedores. 
              p En procesos iniciales, el proveedor es de naturaleza externa; en los demás procesos regularmente los proveedores son los resultados de otros procesos de la empresa.
      .col-lg-6.col-12.mb-4(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/info-2.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h4 Objetivos del proceso
              p Conjunto de actividades, ordenados lógica y secuencialmente en un diagrama de flujo de proceso, que se construye por bloques.
      .col-lg-6.col-12.mb-4(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/info-3.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h4 Determinar el método
              p.mb-0 - Cantidad, calidad.
              p.mb-0 - Recursos a utilizar.
              p.mb-0 - Tiempo para la obtención de los resultados
              p - Costos, entre otros.
      .col-lg-6.col-12.mb-4(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/info-4.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h4 Recursos
              p Determinar los recursos que se necesitan para el desarrollo de las actividades del proceso y producir las salidas o productos entre los recursos están: materias primas, insumos y suministros, maquinaria y equipo, herramientas, información, etc.
      .col-lg-6.col-12.mb-4(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/info-5.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h4 Equipo de trabajo
              p Definir las competencias profesionales u operativas que requiere el método del proceso.
      .col-lg-6.col-12.mb-4(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/info-6.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h4 Líder
              p Definir el responsable del proceso.
      .col-lg-6.col-12.mb-4(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/info-7.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h4 Indicadores de gestión
              p Indicadores de gestión que permitan la regulación de los recursos, la oportunidad de las entregas, la eficiencia y la eficacia.
      .col-lg-6.col-12.mb-4(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/info-8.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h4 Control y seguimiento
              p Definir los momentos de seguimiento, control y evaluación con el fin de identificar posibles desviaciones.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
